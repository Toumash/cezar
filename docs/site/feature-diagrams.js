function diagramFrame(kicker,title,body,note='') {
  return `<figure class="feature-diagram visual-diagram"><figcaption><span class="fd-kicker">${kicker}</span><strong>${title}</strong></figcaption>${body}${note?`<p class="fd-note">${note}</p>`:''}</figure>`;
}
function flowRail(steps) {
  return `<ol class="flow-rail">${steps.map(([title,detail,code])=>`<li><strong>${title}</strong><span>${detail}</span>${code?`<code>${code}</code>`:''}</li>`).join('')}</ol>`;
}
function branchDiagram(kicker,title,root,branches,result,note) {
  return diagramFrame(kicker,title,`<div class="branch-board"><div class="branch-root"><span class="board-label">Starting point</span><strong>${root[0]}</strong><span>${root[1]}</span></div><div class="branch-lanes">${branches.map((branch,index)=>`<div class="branch-lane"><span class="lane-letter">${String.fromCharCode(65+index)}</span><strong>${branch[0]}</strong><span>${branch[1]}</span><div class="lane-output"><span aria-hidden="true">↓</span>${branch[2]}</div></div>`).join('')}</div><div class="branch-result"><span class="board-label">${result[0]}</span><strong>${result[1]}</strong></div></div>`,note);
}
function firstTaskDiagram() {
  return diagramFrame('Your first task / Request to review','Follow one change through the project',`<div class="first-run-board"><div class="run-request"><span class="board-label">Example request</span><p>“Show an error when the email field is empty.”</p></div>${flowRail([['Project','Start in your project folder','npx cezar-run'],['Agent','Reads the files and makes the change','Chat → progress'],['You','Inspect the diff and try the form','Changes → review']])}</div>`,'Task completion is the point to review the work. Check the behavior in your app before accepting it.');
}
function parallelTaskDiagram() {
  return branchDiagram('Parallel tasks / Separate worktrees','One base, two independent changes',['Git project','Both tasks start from the selected base'],[['Task A','Update the settings UI','Worktree A → changes A'],['Task B','Add importer tests','Worktree B → changes B']],['Review & merge','Inspect each diff before combining the changes'],'Tasks share execution capacity. A full queue delays a start; it does not combine their worktrees.');
}
function featureDiagram(item) {
  if(item.id==='design-mode') return designModeDiagram();
  if(item.id==='workflows') return workflowDiagram();
  if(item.id==='worktrees') return branchDiagram('Git / Isolated task directories','Work in parallel without sharing files',['Repository','Selected starting revision'],[['Task A','Its own files and branch','Worktree A'],['Task B','Its own files and branch','Worktree B']],['Review & merge','Bring selected changes back to the main branch'],'Worktrees keep edits separate. Merging can still produce conflicts.');
  if(item.id==='task-dispatch') return branchDiagram('Dispatch / Delegated subtasks','Split the work, collect the reports',['Parent task','The agent delegates parts of the work'],[['Subtask A','Separate session and worktree','Report A'],['Subtask B','Separate session and worktree','Report B']],['Back to the parent','The parent agent uses the subtask reports'],'Dispatch settings control subtask count, concurrency and budget. Reports do not automatically merge code.');
  if(item.id==='workflow-fork-join') return branchDiagram('Workflow / Fork and join','Choose when parallel work can continue',['Fork','Start 2 to 4 branches; two shown here'],[['Agent A','Separate worktree','Branch result A'],['Agent B','Separate worktree','Branch result B']],['Join policy','all → wait for every result<br>any → first success cancels the others'],'The Join setting determines when the workflow continues.');
  if(item.id==='schedule-task'||item.id==='schedule-after-reset') {
    const reset=item.id==='schedule-after-reset';
    return diagramFrame('Scheduling / Eligibility, then capacity','A due task may still need to wait',flowRail([[reset?'Limit resets':'Time arrives',reset?'Wait for a confirmed Claude or Codex reset.':'Use the time zone shown by the server.',reset?'Confirmed reset':'Earliest start'],['Queue','Wait for capacity and available account quota.','Capacity + quota'],['Session','Start when both checks allow it.','Agent runs']]),reset?'A running Cezar server is required. Scheduling a new task after a reset does not reserve quota.':'The scheduled time is the earliest possible start. The Cezar server must be running.');
  }
  return '';
}

function designModeDiagram() {
  return `<figure class="feature-diagram dm-diagram">
    <figcaption><span class="fd-kicker">Design Mode / Illustrated example</span><strong>Send feedback on a specific element</strong></figcaption>
    <div class="dm-cockpit">
      <div class="dm-preview-toolbar"><strong>Preview</strong><span>localhost:3000</span><span class="dm-mode-active">Design Mode on</span></div>
      <div class="dm-pick-and-note">
        <div class="dm-page-example"><span class="dm-page-label">Your app</span><div class="dm-picked-heading"><code>h1.hero-title</code><strong>Build your<br>next idea.</strong></div><p>Click the heading you want to change.</p></div>
        <span class="dm-note-connector" aria-hidden="true"></span>
        <div class="dm-anchored-note"><span class="dm-note-target">Note on <code>h1.hero-title</code></span><strong>What should change here?</strong><p>Change this heading to “Build something useful.” Keep the font and spacing.</p><div class="dm-send-row"><span>To the current task</span><span class="dm-send-example">Send <span aria-hidden="true">↗</span></span></div></div>
      </div>
      <div class="dm-attached-context"><strong>Cezar includes the element context</strong><span>Page URL · Selector · HTML · Styles · Dimensions</span></div>
    </div>
    <div class="dm-handoff"><span class="dm-handoff-line" aria-hidden="true"></span><div><strong>The agent edits the code</strong><p>The agent receives your note and the element details.</p></div><span class="dm-review-connector" aria-hidden="true"></span><div><strong>You review the result</strong><p><b>Changes</b> for the diff. <b>Preview</b> to test the page.</p></div></div>
    <p class="dm-explanation">Design Mode sends element details, not an automatic screenshot. The page changes after the agent edits the code.</p>
  </figure>`;
}
