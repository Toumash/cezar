const VISUAL_AREAS=[
  {title:'Tasks',art:'tasks',text:'Assign tasks and follow agent progress.',tone:'violet'},
  {title:'Workflows',art:'workflow',text:'Set the order of steps and when they run.',tone:'paper'},
  {title:'Agents',art:'agents',text:'Choose an agent and model, then divide the work.',tone:'paper'},
  {title:'Git and GitHub',art:'git',text:'Work on separate branches of your repository.',tone:'paper'},
  {title:'Projects',art:'projects',text:'Add repositories and configure project resources.',tone:'paper'},
  {title:'Integrations',art:'integrations',text:'Use connected tools as you work on a task.',tone:'lime'}
];
function conceptArt(kind) {
  const box=(x,y,width,label,tone='')=>`<rect class="mini-box ${tone}" x="${x}" y="${y}" width="${width}" height="32"/><text x="${x+12}" y="${y+21}">${label}</text>`;
  const line=path=>`<path class="mini-wire" d="${path}"/>`;
  const arts={
    tasks:`<text class="mini-label" x="20" y="22">TASK QUEUE</text>${box(20,38,280,'Settings UI','mini-active')}${box(20,78,280,'Importer tests')}${line('M264 50h20m-6-5 6 5-6 5')}<text class="mini-label" x="20" y="140">REQUEST → REVIEW</text>`,
    design:`${box(20,22,168,'Project name')}<rect class="mini-selection" x="44" y="68" width="104" height="40"/>${box(48,72,96,'Create','mini-active')}${line('M152 88h32V42h28')}<text x="216" y="48">Align</text><text x="216" y="68">this button</text><path class="mini-guide" d="M20 64v62"/><text class="mini-label" x="20" y="144">SELECT → DESCRIBE</text>`,
    workflow:`${box(8,20,112,'Implement','mini-active')}${line('M128 36h48m-7-6 7 6-7 6')}${box(184,20,128,'Run tests')}${line('M248 52v20H72v32m176-32v32M66 98l6 6 6-6M242 98l6 6 6-6')}${box(16,104,112,'Retry')}${box(176,104,128,'Finish','mini-lime')}<text class="mini-label" x="80" y="92">FAIL</text><text class="mini-label" x="240" y="92">PASS</text>`,
    agents:`${box(8,56,96,'Task','mini-active')}${line('M104 72h48V28h40M152 72v44h40M186 22l6 6-6 6M186 110l6 6-6 6')}${box(200,12,112,'Claude')}${box(200,100,112,'Codex')}<text class="mini-label" x="16" y="140">CHOOSE AN AGENT</text>`,
    git:`${line('M24 32h272M72 32v48h224M136 32v96h160')}<rect class="mini-dot" x="68" y="28" width="8" height="8"/><rect class="mini-dot" x="132" y="28" width="8" height="8"/><text class="mini-label" x="220" y="22">BASE</text>${box(184,64,120,'Task A','mini-active')}${box(184,112,120,'Task B')}<text class="mini-label" x="24" y="152">SEPARATE WORKTREES</text>`,
    projects:`${box(20,12,280,'your-project/','mini-active')}${line('M36 44v84h20M36 76h20')}<text x="68" y="82">Repository</text><text x="68" y="134">Configuration</text>`,
    integrations:`${box(8,56,96,'Cezar','mini-active')}${line('M104 72h48V28h40M152 72v44h40M186 22l6 6-6 6M186 110l6 6-6 6')}${box(200,12,112,'GitHub')}${box(200,100,112,'MCP tools')}<text class="mini-label" x="16" y="144">CONNECT YOUR TOOLS</text>`
  };
  return `<svg class="concept-art" viewBox="0 0 320 168" aria-hidden="true" focusable="false">${arts[kind]||arts.tasks}</svg>`;
}
function visualCardContent(item,meta){return `<span class="visual-card-top"><span class="visual-card-title">${item.title}</span></span><span class="visual-card-art">${conceptArt(item.art)}<span class="art-corner top-left"></span><span class="art-corner bottom-right"></span></span><span class="visual-card-bottom"><span>${item.text}</span><span class="visual-card-arrow" aria-hidden="true">↗</span></span><span class="visual-card-meta">${meta}</span>`}
function visualMapCard(group,index){const area=VISUAL_AREAS[index],count=FEATURES.filter(item=>item.category===group.category).length;return `<button class="visual-card ${area.tone}" data-map-group="${index}" aria-expanded="false" aria-controls="map-detail">${visualCardContent(area,`${count} guides · Explore area`)}</button>`}
function renderVisualStart(){
  $('#visual-start').innerHTML=`<div class="visual-section-heading"><h2>Try it in your project</h2><a href="#guides">All step-by-step guides ↗</a></div>${guideCards()}`;
}
