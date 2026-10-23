const TECH_INTENTS = [
  {question:'How do I start a task through the API?', article:'http-api', keywords:'curl http endpoint integration script api'},
  {question:'How do I write my own workflow?', article:'workflows', keywords:'yaml workflow checks onfail retry steps tests'},
  {question:'Where does Cezar store tasks and configuration?', article:'cli-configuration', keywords:'files settings config env configuration storage where'},
  {question:'What happens when I click Start?', article:'run-lifecycle', keywords:'queue scheduler status worktree concurrency run'},
  {question:'How do I run Cezar on a server?', article:'operations', keywords:'vps remote auth hosting reverse proxy server'},
  {question:'How does Cezar communicate with an agent?', article:'agent-runners', keywords:'runner dispatch acp codex claude stdin stdout agent'}
];
const TECH_NAV_LABELS={'architecture':'Architecture','run-lifecycle':'Task lifecycle','workflows':'Workflow YAML','agent-runners':'Agents and dispatch','cli-configuration':'CLI and configuration','http-api':'HTTP API','operations':'Server and diagnostics'};
const TECH_GROUPS=[
  {title:'How the system works',ids:['architecture','run-lifecycle']},
  {title:'Configuration and integrations',ids:['cli-configuration','workflows','http-api']},
  {title:'Agents and operations',ids:['agent-runners','operations']}
];
let sectionObserver;
function initTechnicalNavigation() {
  $('#technical-nav').innerHTML=TECH_GROUPS.flatMap(group=>group.ids).map(id=>`<a class="nav" href="#technical/${id}">${escapeHtml(TECH_NAV_LABELS[id])}</a>`).join('');
}
function technicalIndex(){
  return TECH_GROUPS.map((group,groupIndex)=>`<section class="doc-group"><div class="doc-group-heading"><span>0${groupIndex+1}</span><h2>${group.title}</h2></div><div class="technical-index ${group.ids.length===3?'three':''}">${group.ids.map(id=>{const article=TECH_ARTICLES.find(item=>item.id===id);return `<a href="#technical/${id}" class="technical-card"><div><h3>${escapeHtml(TECH_NAV_LABELS[id])} <span aria-hidden="true">↗</span></h3><p>${escapeHtml(article.summary)}</p><span class="read">${article.sections.length} sections / examples / sources</span></div></a>`}).join('')}</div></section>`).join('');
}
function observeSections(){
  sectionObserver?.disconnect();
  const links=[...document.querySelectorAll('.article-toc a')];
  const sections=[...document.querySelectorAll('.technical-section')];
  const updateCurrent=()=>{
    const cutoff=Math.max(140,window.innerHeight*.3);
    const current=sections.filter(section=>section.getBoundingClientRect().top<=cutoff).at(-1)||sections[0];
    links.forEach(link=>{if(link.hash.endsWith('/'+current.id.slice(5)))link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')});
  };
  sectionObserver=new IntersectionObserver(updateCurrent,{rootMargin:'-100px 0px -70% 0px',threshold:0});
  sections.forEach(section=>sectionObserver.observe(section));
}
function adjacentArticles(id){const ids=TECH_GROUPS.flatMap(group=>group.ids),index=ids.indexOf(id);return `<div class="next-articles">${index>0?`<a href="#technical/${ids[index-1]}">← ${TECH_NAV_LABELS[ids[index-1]]}</a>`:''}${index<ids.length-1?`<a href="#technical/${ids[index+1]}">${TECH_NAV_LABELS[ids[index+1]]} →</a>`:''}</div>`}
function technicalSources(item) {
  return `<section class="sources"><h2>Source references</h2><p>Verified on main, 23 Oct 2026 · <a href="https://github.com/open-mercato/cezar/commit/${TECH_COMMIT}" target="_blank" rel="noopener">${TECH_COMMIT.slice(0,7)} ↗</a>. Some features may differ or be unavailable in the version installed from npm.</p><ul>${item.sources.map(source=>`<li><a href="https://github.com/open-mercato/cezar/blob/${TECH_COMMIT}/${source.path}#L${source.line}" target="_blank" rel="noopener">${escapeHtml(source.label)} ↗<span class="source-path">${escapeHtml(source.path)}:${source.line}</span></a></li>`).join('')}</ul></section>`;
}
function technicalSection(section,index,articleId) {
  return `<section id="tech-${section.id}" class="technical-section"><h2><span class="section-number" aria-hidden="true">// ${String(index+1).padStart(2,'0')}</span>${escapeHtml(section.title)}</h2>${technicalDiagram(articleId,section.id)}${(section.paragraphs||[]).map(text=>`<p>${escapeHtml(text)}</p>`).join('')}${section.steps?`<ol>${section.steps.map(text=>`<li>${escapeHtml(text)}</li>`).join('')}</ol>`:''}${section.bullets?`<ul>${section.bullets.map(text=>`<li>${escapeHtml(text)}</li>`).join('')}</ul>`:''}${section.table?`<div class="table-scroll" tabindex="0" role="region" aria-label="${escapeHtml(section.title)}"><table><thead><tr>${section.table.headers.map(text=>`<th scope="col">${escapeHtml(text)}</th>`).join('')}</tr></thead><tbody>${section.table.rows.map(row=>`<tr>${row.map(text=>`<td>${escapeHtml(text)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}${section.code?`<div class="code-example"><div class="code-toolbar"><span>${escapeHtml(section.code.language)}</span><button data-copy-section="${index}">Copy</button></div><pre><code>${escapeHtml(section.code.text)}</code></pre></div>`:''}${section.note?`<p class="note">${escapeHtml(section.note)}</p>`:''}</section>`;
}
function renderTechnicalRoute() {
  const [,id,sectionId]=location.hash.slice(1).split('/');
  $('#overview').hidden=true;$('#article').hidden=false;$('#article').classList.add('technical-article');
  document.body.classList.remove('nav-open');$('#menu').setAttribute('aria-expanded','false');
  document.querySelectorAll('.nav').forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#technical${id?'/'+id:''}`));
  const item=TECH_ARTICLES.find(article=>article.id===id);
  if(!id){
    document.title='Technical documentation | Cezar';
    $('#article').innerHTML=`<a class="back" href="#">← Documentation</a><div class="technical-hero"><p class="eyebrow">Documentation / Technical guides</p><h1 tabindex="-1">Technical documentation</h1><p class="lead">Learn how Cezar starts and runs tasks. These articles cover architecture, configuration, and the API, with command examples and file formats.</p><div class="hero-meta"><span>CODE REVIEWED 23 OCT 2026 / ${TECH_COMMIT.slice(0,7)}</span><a href="#catalog?type=technical">Choose a topic ↗</a></div></div>${technicalOverviewDiagram()}${technicalIndex()}<p class="note">The examples describe the linked version of main. Some features may differ or be unavailable in the version installed from npm.</p>`;
  } else if(item){
    document.title=`${item.title} | Cezar`;
    $('#article').innerHTML=`<a class="back" href="#technical">← Technical documentation</a><p class="eyebrow">TECHNICAL GUIDE · CODE REVIEWED 23 OCT 2026</p><h1 tabindex="-1">${escapeHtml(item.title)}</h1><p class="lead">${escapeHtml(item.summary)}</p>${articleTags(item.id)}<div class="technical-layout"><nav class="article-toc" aria-label="On this page"><strong>On this page</strong>${item.sections.map((section,index)=>`<a href="#technical/${item.id}/${section.id}"><span class="toc-number">${String(index+1).padStart(2,'0')}</span>${escapeHtml(section.title)}</a>`).join('')}</nav><div class="technical-body">${item.sections.map((section,index)=>technicalSection(section,index,item.id)).join('')}${technicalSources(item)}${adjacentArticles(item.id)}</div></div>`;
    observeSections();
    $('#article').querySelectorAll('[data-copy-section]').forEach(button=>button.onclick=async()=>{try{await navigator.clipboard.writeText(item.sections[Number(button.dataset.copySection)].code.text);button.textContent='Copied'}catch{button.textContent='Select and copy the code'}});
  } else {$('#article').innerHTML='<a class="back" href="#technical">← Technical documentation</a><h1 tabindex="-1">Article not found</h1>'}
  if(sectionId&&document.getElementById(`tech-${sectionId}`)){document.getElementById(`tech-${sectionId}`).scrollIntoView()}else{window.scrollTo(0,0);$('#article h1')?.focus({preventScroll:true})}
}
function technicalMatches(query) {
  return TECH_ARTICLES.map(article=>{
    const intent=TECH_INTENTS.find(item=>item.article===article.id);
    const titleScore=scoreText(query,`${article.title} ${article.summary} ${intent?.question||''} ${intent?.keywords||''}`);
    const sections=article.sections.map(section=>({section,score:scoreText(query,`${section.title} ${(section.paragraphs||[]).join(' ')} ${(section.bullets||[]).join(' ')} ${(section.steps||[]).join(' ')} ${JSON.stringify(section.table||'')} ${section.code?.text||''}`)})).sort((left,right)=>right.score-left.score);
    return {article,section:sections[0]?.section,score:titleScore*2+(sections[0]?.score||0)};
  }).filter(result=>result.score>=6).sort((left,right)=>right.score-left.score).slice(0,4);
}
function renderSearchAnswer(query,explicit) {
  const matches=technicalMatches(query);
  legacyAnswer(query,explicit);
  $('#answers').insertAdjacentHTML('afterbegin',howToSearchResults(query));
  if(matches.length){
    const block=`<section class="technical-results"><h3>Related technical guides</h3>${matches.slice(0,2).map(({article,section})=>`<a href="#technical/${article.id}/${section.id}"><strong>${escapeHtml(article.title)}</strong><span>${escapeHtml(section.title)}</span></a>`).join('')}</section>`;
    $('#answers').insertAdjacentHTML('beforeend',block);
  }
  $('#answers').insertAdjacentHTML('beforeend','<p class="answer-meta">Results come from guides verified against the code on 23 Oct 2026. Each guide includes a source link.</p>');
}
