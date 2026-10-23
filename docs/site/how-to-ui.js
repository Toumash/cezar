function guideHero(guide) {
  const titles={'first-task':['Run your','first task'], 'design-mode':['Fix a UI with','Design Mode'], 'parallel-tasks':['Run two tasks','in parallel']};
  const [lead,accent]=guide?titles[guide.id]:['Step-by-step','guides'];
  const marker=$('.cezar-mark').outerHTML.replace('class="cezar-mark"','class="guide-brand-mark"');
  return `<div class="guide-hero">${marker}<p class="eyebrow">${guide?`Guide / ${guide.steps.length} steps`:'Cezar documentation / Learn by doing'}</p><h1 tabindex="-1">${lead}<br><span>${accent}</span></h1><p class="lead">${escapeHtml(guide?guide.summary:'Choose a task to try in your own project. Follow the steps, inspect the result, and learn how Cezar works along the way.')}</p>${guide?`<a class="guide-start" href="#guide/${guide.id}/step-1">Start the guide <span aria-hidden="true">↗</span></a>`:''}</div>`;
}
function guideCards() {
  return `<div class="visual-grid">${HOW_TO_GUIDES.map(guide=>`<a class="visual-card ${guide.tone}" href="#guide/${guide.id}">${visualCardContent({title:guide.shortTitle,art:guide.art,text:guide.summary},`${guide.steps.length} steps · Example · Troubleshooting`)}</a>`).join('')}</div>`;
}
function guideDiagram(guide) {
  const diagram=guide.id==='design-mode'?designModeDiagram():guide.id==='parallel-tasks'?parallelTaskDiagram():firstTaskDiagram();
  return diagram.replace('<figure ', '<figure id="guide-visual" ');
}
function guideExample(step,index) {
  return step.code?`<div class="code-example"><div class="code-toolbar"><span>${escapeHtml(step.codeLabel)}</span><button data-guide-copy="${index}">Copy</button></div><pre><code>${escapeHtml(step.code)}</code></pre></div>`:'';
}
function guideMarkdown(guide) {
  return `# ${guide.title}\n\n${guide.summary}\n\n${guide.outcome}\n\n## Before you start\n${guide.requirements.map(text=>'- '+text).join('\n')}\n\n${guide.steps.map((step,index)=>`## ${index+1}. ${step.title}\n\n${step.text}\n${step.code?'\n```\n'+step.code+'\n```\n':''}\nCheck: ${step.check}`).join('\n\n')}\n\n## How it works\n\n${guide.explanation}\n\n## Troubleshooting\n\n${guide.problems.map(([title,body])=>`### ${title}\n\n${body}`).join('\n\n')}\n\n## Next steps\n${guide.next.map(next=>`- [${next.label}](${new URL(next.href,window.location.href).href})`).join('\n')}\n\n## Sources\n${guide.sources.map(source=>`- [${source.label}](https://github.com/open-mercato/cezar/blob/${CATALOG_AUDIT.latestCommit}/${source.path}#L${source.line})`).join('\n')}`;
}
function renderHowToRoute() {
  const [,id,section]=location.hash.slice(1).split('/');
  const guide=HOW_TO_GUIDES.find(item=>item.id===(location.hash==='#start'?'first-task':id));
  $('#overview').hidden=true;$('#article').hidden=false;
  $('#article').classList.remove('technical-article','map-article');
  $('#article').classList.add('how-to-article');
  document.body.classList.remove('nav-open');$('#menu').setAttribute('aria-expanded','false');
  document.querySelectorAll('#sidebar .nav').forEach(link=>link.classList.toggle('active',link.getAttribute('href')===(location.hash==='#start'?'#start':'#guides')));
  if(location.hash==='#guides') {
    document.title='Step-by-step guides | Cezar';
    $('#article').innerHTML=`${guideHero()}${guideCards()}<p class="guide-library-note">Looking up a setting or a capability? Browse the <a href="#catalog?type=instruction">feature reference</a> or the <a href="#technical">technical documentation</a>.</p>`;
  } else if(guide) {
    document.title=`${guide.title} | Cezar`;
    const anchor=part=>`#guide/${guide.id}/${part}`;
    $('#article').innerHTML=`<div class="guide-utility"><a class="back" href="#guides">← All guides</a><button data-guide-markdown>Copy as Markdown ↗</button></div>${guideHero(guide)}<div class="guide-outcome"><span class="eyebrow">The result</span><p>${escapeHtml(guide.outcome)}</p></div><div class="guide-preparation"><section id="guide-before"><p class="eyebrow">Before you start</p><h2>What you’ll need</h2><ul>${guide.requirements.map(text=>`<li>${escapeHtml(text)}</li>`).join('')}</ul></section><nav class="guide-toc" aria-label="On this page"><span>In this guide</span><a href="${anchor('visual')}"><span>↳</span>Visual overview</a>${guide.steps.map((step,index)=>`<a href="${anchor('step-'+(index+1))}"><span>0${index+1}</span>${escapeHtml(step.title)}</a>`).join('')}<a href="${anchor('troubleshooting')}"><span>↳</span>Troubleshooting</a></nav></div>${guideDiagram(guide)}${guide.steps.map((step,index)=>`<section class="guide-step" id="guide-step-${index+1}"><span class="guide-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span><div><h2>${escapeHtml(step.title)}</h2><p>${escapeHtml(step.text)}</p>${guideExample(step,index)}<div class="guide-check"><strong><span aria-hidden="true">✓</span> Check the result</strong><p>${escapeHtml(step.check)}</p></div></div></section>`).join('')}<section class="guide-explanation"><h2>${guide.id==='design-mode'?'What the agent receives':guide.id==='parallel-tasks'?'Two jobs or two approaches?':'What happens behind the scenes'}</h2><p>${escapeHtml(guide.explanation)}</p></section><section id="guide-troubleshooting" class="guide-problems"><h2>Troubleshooting</h2>${guide.problems.map(([title,body])=>`<details><summary>${escapeHtml(title)}</summary><p>${escapeHtml(body)}</p></details>`).join('')}</section><section class="guide-next"><h2>Next steps</h2>${guide.next.map(next=>`<a href="${next.href}">${escapeHtml(next.label)} <span aria-hidden="true">→</span></a>`).join('')}</section><details class="guide-sources"><summary>Sources for this guide</summary><ul>${guide.sources.map(source=>`<li><a target="_blank" rel="noopener" href="https://github.com/open-mercato/cezar/blob/${CATALOG_AUDIT.latestCommit}/${source.path}#L${source.line}">${escapeHtml(source.label)} ↗</a></li>`).join('')}</ul></details>`;
    $('#article').querySelectorAll('[data-guide-copy], [data-guide-markdown]').forEach(button=>button.onclick=async()=>{const value=button.hasAttribute('data-guide-markdown')?guideMarkdown(guide):guide.steps[Number(button.dataset.guideCopy)].code;try{await navigator.clipboard.writeText(value);button.textContent='Copied'}catch{button.textContent='Copy unavailable — select the text'}});
  } else {
    document.title='Guide not found | Cezar';
    $('#article').innerHTML='<a href="#guides">← All step-by-step guides</a><h1 tabindex="-1">Guide not found</h1>';
  }
  if(section&&document.getElementById('guide-'+section))document.getElementById('guide-'+section).scrollIntoView();else{window.scrollTo(0,0);$('#article h1')?.focus({preventScroll:true})}
}
function relatedHowTo(item) {
  const guide=HOW_TO_GUIDES.find(guide=>guide.features.includes(item.id));
  return guide?`<div class="guide-related"><span class="eyebrow">Try it in your project</span><a href="#guide/${guide.id}">${escapeHtml(guide.title)} →</a></div>`:'';
}
function howToSearchResults(query) {
  const matches=HOW_TO_GUIDES.map(guide=>({guide,score:scoreText(query,`${guide.title} ${guide.summary} ${guide.keywords}`)})).filter(item=>item.score>=6).sort((a,b)=>b.score-a.score).slice(0,2);
  return matches.length?`<section class="technical-results"><h3>Step-by-step guides</h3>${matches.map(({guide})=>`<a href="#guide/${guide.id}"><strong>${escapeHtml(guide.title)}</strong><span>${escapeHtml(guide.summary)}</span></a>`).join('')}</section>`:'';
}
