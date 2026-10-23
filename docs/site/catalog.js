const TAGS={
  api:{label:'API',tone:'blue'},cli:{label:'CLI',tone:'blue'},git:{label:'Git and GitHub',tone:'purple'},
  workflows:{label:'Workflows',tone:'purple'},agents:{label:'Agents',tone:'purple'},
  settings:{label:'Configuration',tone:'neutral'},automation:{label:'Automation',tone:'teal'},
  security:{label:'Security',tone:'teal'},monitoring:{label:'Monitoring',tone:'teal'},
  interface:{label:'Interface',tone:'neutral'},design:{label:'Design',tone:'purple'},preview:{label:'App preview',tone:'purple'},terminal:{label:'Terminal',tone:'blue'},trackers:{label:'Issue trackers',tone:'teal'},analytics:{label:'Dashboard',tone:'teal'}
};
const FEATURE_TAG_GROUPS={
  cli:['handoff','remote','headless','nightly','mock-mode'],
  git:['worktrees','review','github','automations','base-branch','file-preview','commit-changes','commit-history','split-diff','bookmarklets','clone-project','variants'],
  workflows:['workflows','planner','skills','prompt-templates','skill-template','skill-updates','workflow-portability','workflow-retry'],
  agents:['agents','experimental-runners','profiles','agent-settings','system-prompt','native-models','subagents','questions','live-sessions','autonomous','attachments','handoff'],
  settings:['profiles','agent-settings','projects','remote','memory-limit','project-concurrency','base-branch','system-prompt','appearance','accent','reading-density','hide-metrics','remove-project','clone-project','local-project','single-project','native-models','keyboard-settings','monitor-capacity','monitor-wake'],
  automation:['automations','inbox','auto-resume','cancel-resume','monitor-wake','autonomous','workflow-retry','skill-updates','live-titles'],
  security:['secret-redaction','single-project','profiles','review','remote'],
  monitoring:['parallel-tasks','live-sessions','monitor-capacity','monitor-wake','memory-limit','project-concurrency','usage-metrics','browser-notifications'],
  interface:['react-components','questions','file-preview','split-diff','browser-notifications','appearance','accent','reading-density','fold-columns','hide-metrics','command-palette','keyboard-settings','queued-prompts','attachments','archive-task','cancel-task']
};
const TECH_TAGS={architecture:['api','agents'], 'run-lifecycle':['git','monitoring'],workflows:['workflows','automation'], 'agent-runners':['agents','cli','security'],'cli-configuration':['cli','settings'],'http-api':['api','cli'],'operations':['cli','security','monitoring']};
const KIND_LABELS={all:'All',instruction:'Features',guide:'Step-by-step',technical:'Technical',spec:'Specifications'};
let selectedTags=[],catalogKind='all',lastCatalogHash='#catalog';
function tagsForFeature(item){return Object.keys(TAGS).filter(tag=>FEATURE_TAG_GROUPS[tag]?.includes(item.id)||item.tags?.includes(tag))}
function catalogItems(){return [
  ...HOW_TO_GUIDES.map(item=>({...item,kind:'guide',status:'available',href:`#guide/${item.id}`})),
  ...FEATURES.map(item=>({...item,kind:item.status==='planned'?'spec':'instruction',tags:tagsForFeature(item),href:`#feature/${item.id}`})),
  ...TECH_ARTICLES.map(item=>({...item,kind:'technical',status:'available',tags:TECH_TAGS[item.id],category:null,href:`#technical/${item.id}`}))
]}
function matchesCatalog(item,{tags=selectedTags,kind=catalogKind,itemStatus=status}={}){return (category==='all'||item.category===category)&&(itemStatus==='all'||item.status===itemStatus)&&(kind==='all'||item.kind===kind)&&tags.every(tag=>item.tags.includes(tag))}
function tagButton(tag,selected=false,count){const info=TAGS[tag];return `<button class="topic-chip tone-${info.tone}" data-catalog-tag="${tag}" aria-pressed="${selected}" aria-label="Topic: ${info.label}" ${count===0&&!selected?'disabled':''}><span class="chip-mark" aria-hidden="true">${selected?'✓':'#'}</span>${info.label}${count!==undefined?`<span class="chip-count count-badge">${count}</span>`:''}</button>`}
function articleTags(id){return `<div class="content-tags">${(TECH_TAGS[id]||[]).map(tag=>`<a class="topic-chip tone-${TAGS[tag].tone}" href="#catalog?tags=${tag}"><span class="chip-mark" aria-hidden="true">#</span>${TAGS[tag].label}</a>`).join('')}</div>`}
function catalogCard(item){return `<div class="feature catalog-card"><div class="card-meta"><button class="badge ${item.status}" data-catalog-status="${item.status}" aria-label="Status: ${labels[item.status]}">${labels[item.status]}</button></div><h3><a href="${item.href}">${escapeHtml(item.title)}</a></h3><p>${escapeHtml(item.summary)}</p><div class="content-tags">${item.tags.map(tag=>tagButton(tag,selectedTags.includes(tag))).join('')}</div></div>`}
function renderCatalog(){
  const active=document.activeElement;const focusKey=active?.getAttribute('data-filter-key')||(active?.dataset.catalogTag?`tag-${active.dataset.catalogTag}`:active?.dataset.catalogKind?`kind-${active.dataset.catalogKind}`:active?.dataset.catalogStatus?`status-${active.dataset.catalogStatus}`:null);
  const items=catalogItems(),matches=items.filter(item=>matchesCatalog(item));
  $('#catalog-title').textContent=status==='planned'?'Planned features':category==='all'?'Browse the documentation':categories[category];
  $('#result-count').textContent=`${matches.length} of ${items.length} entries${selectedTags.length>1?' · all selected topics':''}`;
  $('#kind-filters').innerHTML=Object.entries(KIND_LABELS).map(([kind,label])=>`<button class="kind-filter" data-catalog-kind="${kind}" data-filter-key="kind-${kind}" aria-pressed="${catalogKind===kind}">${label}<span class="count-badge">${items.filter(item=>matchesCatalog(item,{kind})).length}</span></button>`).join('');
  $('#topic-filters').innerHTML=Object.keys(TAGS).map(tag=>tagButton(tag,selectedTags.includes(tag),items.filter(item=>matchesCatalog(item,{tags:[...new Set([...selectedTags,tag])]})).length).replace('data-catalog-tag=',`data-filter-key="tag-${tag}" data-catalog-tag=`)).join('');
  $('#status-filters').innerHTML=['all',...Object.keys(labels)].map(value=>`<button class="status-filter ${value}" data-catalog-status="${value}" data-filter-key="status-${value}" aria-pressed="${status===value}">${value==='all'?'All':labels[value]}<span class="count-badge">${items.filter(item=>matchesCatalog(item,{itemStatus:value})).length}</span></button>`).join('');
  $('#active-filters').innerHTML=selectedTags.map(tag=>`<button class="remove-filter" data-catalog-tag="${tag}" aria-label="Remove filter: ${TAGS[tag].label}">${TAGS[tag].label} <span aria-hidden="true">×</span></button>`).join('');
  $('#features').innerHTML=matches.map(catalogCard).join('');
  $('#empty').hidden=matches.length>0;
  $('#reset').hidden=category==='all'&&status==='all'&&catalogKind==='all'&&!selectedTags.length;
  $('#features').classList.toggle('list',listView);$('#grid').setAttribute('aria-pressed',String(!listView));$('#list').setAttribute('aria-pressed',String(listView));
  if(focusKey)document.querySelector(`[data-filter-key="${focusKey}"]`)?.focus({preventScroll:true});
}
function restoreCatalogParams(params){lastCatalogHash=location.hash;selectedTags=[...new Set((params.get('tags')||'').split(',').filter(tag=>Object.hasOwn(TAGS,tag)))];catalogKind=Object.hasOwn(KIND_LABELS,params.get('type'))?params.get('type'):'all';status=Object.hasOwn(labels,params.get('status'))?params.get('status'):'all';category=Object.hasOwn(categories,params.get('category'))?params.get('category'):'all';listView=params.get('view')==='list'}
function saveCatalogFilters(){const params=new URLSearchParams();if(selectedTags.length)params.set('tags',selectedTags.join(','));if(catalogKind!=='all')params.set('type',catalogKind);if(status!=='all')params.set('status',status);if(category!=='all')params.set('category',category);if(listView)params.set('view','list');const hash='#catalog'+(params.size?'?'+params:'');lastCatalogHash=hash;if(location.hash!==hash)history.pushState(null,'',hash);if($('#overview').hidden)route();else render()}
function clearCatalogFilters(){selectedTags=[];catalogKind='all';status='all';category='all';saveCatalogFilters()}
document.addEventListener('click',event=>{const control=event.target.closest('[data-catalog-tag],[data-catalog-kind],[data-catalog-status]');if(!control||control.disabled)return;if(control.dataset.catalogTag){const tag=control.dataset.catalogTag;selectedTags=selectedTags.includes(tag)?selectedTags.filter(value=>value!==tag):[...selectedTags,tag]}else if(control.dataset.catalogKind){catalogKind=control.dataset.catalogKind}else{status=control.dataset.catalogStatus}saveCatalogFilters()});

function featureTagLinks(item){return `<div class="content-tags">${tagsForFeature(item).map(tag=>`<a class="topic-chip tone-${TAGS[tag].tone}" href="#catalog?tags=${tag}"># ${TAGS[tag].label}</a>`).join('')}</div>`}
