const MAP_GROUPS=[
  {category:'Tasks & sessions',label:'Tasks and sessions',ids:['parallel-tasks','live-sessions','auto-resume'],technical:'run-lifecycle'},
  {category:'Workflows & skills',label:'Workflows and skills',ids:['workflows','skills','workflow-retry'],technical:'workflows'},
  {category:'Agents & models',label:'Agents and models',ids:['agents','profiles','experimental-runners'],technical:'agent-runners'},
  {category:'Git & GitHub',label:'Git and GitHub',ids:['worktrees','review','automations'],technical:'run-lifecycle'},
  {category:'Workspace',label:'Settings and projects',ids:['projects','memory-limit','local-project'],technical:'cli-configuration'},
  {category:'Platform',label:'Setup and integrations',ids:['headless','nightly','react-components'],technical:'operations'}
];
function showMapGroup(index){
  const group=MAP_GROUPS[index],items=FEATURES.filter(item=>item.category===group.category),panel=$('#map-detail');
  document.querySelectorAll('[data-map-group]').forEach(button=>button.setAttribute('aria-expanded',String(Number(button.dataset.mapGroup)===index)));
  panel.hidden=false;
  panel.innerHTML=`<div class="map-detail-heading"><div><p class="eyebrow">${items.length} guides</p><h2 tabindex="-1">${group.label}</h2></div><button class="map-close" aria-label="Close feature list">×</button></div><div class="map-detail-links"><a href="#catalog?category=${encodeURIComponent(group.category)}">Catalog and filters ↗</a><a href="#technical/${group.technical}">Technical guide ↗</a></div><ul class="map-detail-list">${items.map(item=>`<li><a href="#feature/${item.id}"><span>${escapeHtml(item.title)}</span>${item.status!=='available'?`<span class="badge ${item.status}">${labels[item.status]}</span>`:'<span aria-hidden="true">→</span>'}</a></li>`).join('')}</ul><p class="map-footnote">Each feature guide includes its verification date and source.</p>`;
  panel.querySelector('.map-close').onclick=()=>{panel.hidden=true;const button=document.querySelector(`[data-map-group="${index}"]`);button.setAttribute('aria-expanded','false');button.focus()};
  if(panel.getBoundingClientRect().top>window.innerHeight-120)panel.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  panel.querySelector('h2').focus({preventScroll:true});
}
function renderFeatureMap(){
  document.title='Feature map | Cezar';$('#overview').hidden=true;$('#article').hidden=false;$('#article').classList.add('map-article');$('#article').classList.remove('technical-article');document.body.classList.remove('nav-open');$('#menu').setAttribute('aria-expanded','false');
  $('#article').innerHTML=`<h1 tabindex="-1">Feature map</h1><p class="map-intro">Choose an area to explore its features.</p><div class="map-visual-header"><span>6 areas / ${FEATURES.length} guides</span></div><div class="visual-grid">${MAP_GROUPS.map(visualMapCard).join('')}</div><a class="map-architecture-link" href="#technical/architecture/boundaries">How is Cezar built? <span>Architecture diagram ↗</span></a><section id="map-detail" class="map-detail" hidden aria-label="Features in the selected area"></section>`;
  document.querySelectorAll('[data-map-group]').forEach(button=>button.onclick=()=>showMapGroup(Number(button.dataset.mapGroup)));
  window.scrollTo(0,0);$('#article h1').focus({preventScroll:true});
}
function diagramNode(title,detail,href,tone='') {
  return `<a class="diagram-node ${tone}" href="${href}"><strong>${title}</strong><span>${detail}</span><span class="diagram-open" aria-hidden="true">↗</span></a>`;
}
function architectureDiagram() {
  return diagramFrame('Architecture / System boundaries','From the cockpit to the agent',`<div class="system-board"><div class="system-client"><span class="board-label">Browser</span>${diagramNode('React cockpit','packages/web + api-client','#technical/architecture/boundaries')}</div><div class="system-transport"><span>↓ HTTP requests</span><span>↑ SSE history · WS signals*</span></div><div class="system-host"><span class="board-label">Cezar host · Your computer or server</span><div class="system-chain">${diagramNode('HTTP API','Hono · /api/v1 · Zod','#technical/http-api')}<span class="connector-arrow" aria-hidden="true">→</span>${diagramNode('Project context','RunManager · queue · limits','#technical/run-lifecycle/slots')}<span class="connector-arrow" aria-hidden="true">→</span>${diagramNode('Workflow engine','Agent steps · checks','#technical/workflows')}</div><div class="system-outputs"><div><span class="board-label">↓ Save state & history</span>${diagramNode('RunStore + files','.ai/cezar · ~/.cezar','#technical/run-lifecycle/on-disk')}</div><div><span class="board-label">↓ Execute a step</span>${diagramNode('Runner → agent CLI','Session · tools · repository','#technical/agent-runners','diagram-node-accent')}</div></div><div class="system-cli"><code>Cezar CLI</code><span>→ Workflow engine · No HTTP server needed</span></div></div></div>`,'* Remote mode uses HTTP and SSE instead of WebSocket. State is saved and events stream throughout the session. <a href="#technical/architecture/live-and-storage">Channels and storage →</a>');
}
function workflowDiagram() {
  return diagramFrame('Workflow / Fix-and-verify example','Let the test result choose the next step',`<div class="workflow-board"><div class="workflow-path">${diagramNode('Implement','Agent edits the code','#technical/workflows/example','diagram-node-accent')}<span class="connector-arrow" aria-hidden="true">→</span>${diagramNode('Test','Check step: npm test','#technical/workflows/checks-secrets')}</div><div class="workflow-decision"><span class="board-label">Test exit code</span><span aria-hidden="true">↓</span></div><div class="workflow-rules"><div class="workflow-rule rule-pass"><code>0</code><div><strong>Finish</strong><span>Tests passed.</span></div><span class="rule-mark" aria-hidden="true">↘</span></div><div class="workflow-rule rule-retry"><code>1</code><div><strong>Return to Implement</strong><span>Send test output to the agent. Retry up to twice.</span></div><span class="rule-mark" aria-hidden="true">↶</span></div><div class="workflow-rule"><code>Other</code><div><strong>Stop with an error</strong><span>Also applies when retries have run out.</span></div><span class="rule-mark" aria-hidden="true">■</span></div></div><div class="workflow-config"><code>onFail.retry: implement</code><code>max: 2</code><code>retryOn: [1]</code></div></div>`,'These paths belong to the fix-and-verify example. Other workflows can use different checks and retry rules.');
}
function technicalOverviewDiagram() {
  return diagramFrame('Task flow / Main components','How a request becomes a running task',flowRail([['Request','Start from the CLI, cockpit or API.','Entry point'],['Coordinate','Queue capacity and workflow steps.','Cezar host'],['Execute','Runner starts the agent; Cezar records state and events.','Agent + files']]));
}
function technicalDiagram(articleId,sectionId){if(articleId==='architecture'&&sectionId==='boundaries')return architectureDiagram();if(articleId==='workflows'&&sectionId==='example')return workflowDiagram();return ''}
