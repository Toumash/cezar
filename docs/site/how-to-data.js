const HOW_TO_GUIDES = [
  {
    id: 'first-task', title: 'Run your first task', shortTitle: 'Your first task', art: 'tasks', tone: 'paper',
    summary: 'Start Cezar in a project, give an agent a small change, and inspect the result.',
    category: 'Tasks & sessions', tags: ['agents', 'cli'], features: ['agents', 'live-sessions', 'review'],
    keywords: 'start beginner install setup first task new task quick task',
    outcome: 'A task you can follow in Chat and a set of edits you can inspect in Changes.',
    requirements: ['Node.js 20 or later.', 'An installed agent CLI, such as Claude Code or Codex, with an active login.', 'A project folder. Use a Git repository if you want an isolated worktree.'],
    flow: [['Project', 'Open its folder'], ['Agent', 'Make one change'], ['Changes', 'Inspect the result']],
    steps: [
      { title: 'Open Cezar in your project', text: 'In a terminal, change to the project folder and run the command below. Cezar opens a browser cockpit, normally at http://localhost:4321. If that port is busy, it chooses the next available port.', code: 'cd your-project\nnpx cezar-run', codeLabel: 'Terminal', check: 'The cockpit opens for the project you intend to change.' },
      { title: 'Describe one small change', text: 'Open New task. Name the behavior you want and explain how to check it. Start with something you can review in a few minutes. The example below assumes your project has a signup form; adapt it to your app.', code: 'On the signup form, show an inline error when the email field is empty.\nKeep the existing layout and validation for other fields.\nRun the relevant tests and tell me how to check the change.', codeLabel: 'Example task', check: 'Your request identifies the place to edit, the desired behavior, and a check.' },
      { title: 'Choose an agent and start', text: 'Choose an agent you have already signed into. You can leave the skill or workflow selection empty: Cezar uses its built-in quick-task workflow. For an isolated checkout in a Git project, enable Worktree. Start the task using the composer’s send control (Start task).', check: 'The task appears in the task list. It may queue while another task holds the available capacity.' },
      { title: 'Read the response and inspect the edits', text: 'Open Chat to follow the agent’s messages and respond if it needs input. Open Changes to inspect the diff. Run or inspect the relevant checks and verify the behavior in your app before accepting the result.', check: 'The diff matches the requested scope, and the behavior works when you try it.' }
    ],
    explanation: 'Cezar coordinates your installed agent. The agent reads the project and makes changes; Cezar displays its messages and the resulting diff. Task completion and acceptance of the work are separate checks.',
    problems: [
      ['The agent cannot start', 'Check that its CLI is installed and signed in on the machine running Cezar. Review the task error and the Agent accounts settings.'],
      ['The task is queued', 'Check the other running tasks and your concurrency limits. A queued task has not necessarily failed.'],
      ['The agent finished, but the result is wrong', 'Describe what you observed in Chat, including the steps to reproduce it. Inspect the next diff and test the behavior again.']
    ],
    next: [{ label: 'Fix a UI with Design Mode', href: '#guide/design-mode' }, { label: 'Run two tasks in parallel', href: '#guide/parallel-tasks' }],
    sources: [{ label: 'Quick start and prerequisites', path: 'README.md', line: 123 }, { label: 'New task defaults', path: 'packages/web/src/routes/new-task-form.ts', line: 310 }, { label: 'Task workspace views', path: 'packages/web/src/routes/task-workspace/task-workspace.test.tsx', line: 174 }]
  },
  {
    id: 'design-mode', title: 'Fix a UI with Design Mode', shortTitle: 'Fix a UI', art: 'design', tone: 'violet',
    summary: 'Select an element in Preview, explain the change, and check the agent’s edits.',
    category: 'Tasks & sessions', tags: ['interface', 'design', 'preview'], features: ['design-mode', 'design-notes', 'start-app'],
    keywords: 'design mode change page button visual edit select element preview frontend ui',
    outcome: 'A note attached to a page element, delivered to your task’s agent with context from the page.',
    requirements: ['A task open in a local Cezar cockpit.', 'The task’s app running at a loopback HTTP address, such as http://localhost:3000.', 'Design Mode is available locally by default. CEZ_DESIGN_MODE=0 disables it; hosted cockpits do not support it.'],
    flow: [['Select', 'Point to an element'], ['Describe', 'Send a focused note'], ['Check', 'Inspect code and UI']],
    steps: [
      { title: 'Open the task’s app in Preview', text: 'Open Preview and enter the local app address. If the app is not running, the empty Preview offers Run followed by the detected command, or Start app when a start recipe exists. Use Other command if the suggestion is wrong. The process runs in the task’s worktree.', check: 'Preview shows the page you want to change. If startup fails, open Show terminal and read the output.' },
      { title: 'Turn on Design Mode and select an element', text: 'Click Design Mode in the Preview toolbar. Hover to see the selection outline, then click the button, text, or other element you want to change. A note opens beside it. Each note refers to one element.', check: 'The selected element has an outline and a note field beside it.' },
      { title: 'Write a specific note and send it', text: 'Use the What should change here? field. Describe the intended result and anything that should stay unchanged. Click Send or press Cmd/Ctrl+Enter. If the session is closed, the action reads Reopen & send. For a queued task, the note joins its first prompt.', code: 'Change this heading to "Build something useful."\nKeep the font and spacing.\nCheck the layout at desktop and mobile widths.', codeLabel: 'Example note', check: 'The note is sent to the task and a numbered marker remains on the element.' },
      { title: 'Check the result in the app', text: 'Read the response in Chat and inspect the edits in Changes. Return to Preview to test the result. Turn Design Mode off to use the page’s buttons and links normally. A note marked Done reflects the agent’s run state; it does not prove that the page looks correct.', check: 'The element looks and behaves as requested at the screen sizes that matter to your app.' }
    ],
    explanation: 'The agent receives your words, the page address, selector, dimensions, visible text, selected styles, and an HTML fragment. Component names and source locations are included when the framework exposes them. No screenshot is attached automatically.',
    problems: [
      ['Design Mode is disabled', 'Read the reason on the toolbar button. Use a local cockpit and a loopback http:// address. Hosted mode, external websites, local HTTPS, and CEZ_DESIGN_MODE=0 prevent selection.'],
      ['The app asks me to sign in again', 'Design Mode uses a separate local origin. Sessions stored in localStorage do not carry over. Sign in within that preview if the app requires it.'],
      ['The app never opens', 'Use Show terminal to inspect startup output. The command may have exited or may not have printed an address. Check the command and dependencies, or enter the app’s working address yourself.']
    ],
    next: [{ label: 'Design Mode feature reference', href: '#feature/design-mode' }, { label: 'Notes attached to page elements', href: '#feature/design-notes' }],
    sources: [{ label: 'Preview and availability', path: 'packages/web/src/routes/task-preview/browser-view.tsx', line: 174 }, { label: 'Starting the app', path: 'packages/web/src/routes/task-preview/run-app.tsx', line: 383 }, { label: 'Sending a note', path: 'packages/web/src/routes/task-preview/design-note-popup.tsx', line: 29 }, { label: 'Element context sent to the agent', path: 'packages/web/src/routes/task-preview/design-picks.ts', line: 133 }, { label: 'Design Mode specification', path: '.ai/specs/2026-10-09-design-mode.md', line: 122 }]
  }
];
HOW_TO_GUIDES.push({
  id: 'parallel-tasks', title: 'Run two tasks in parallel', shortTitle: 'Work in parallel', art: 'git', tone: 'lime',
  summary: 'Give two independent jobs their own worktrees and review each result separately.',
  category: 'Git & GitHub', tags: ['git', 'agents', 'monitoring'], features: ['parallel-tasks', 'worktrees', 'project-concurrency', 'variants'],
  keywords: 'parallel concurrent two tasks worktrees queue capacity multiple agents',
  outcome: 'Two tasks running independently, each with its own conversation, worktree, and diff, when capacity is available.',
  requirements: ['A Git repository open in Cezar. Non-Git folders run tasks sequentially.', 'An installed, authenticated agent.', 'Capacity for two tasks at both the workspace and project level. Other projects share the workspace limit.'],
  flow: [['Task A', 'Settings UI'], ['Task B', 'Importer tests']],
  steps: [
    { title: 'Check the task limits', text: 'Open Settings → Resources and check Max parallel tasks. Set it to at least 2. Check the project’s Max parallel tasks field too: leave it empty to inherit, or use a value of at least 2. Increasing a limit allows more concurrent work and can increase resource use.', check: 'Both limits allow two tasks, with enough free capacity for them to start.' },
    { title: 'Start the first job in a worktree', text: 'Choose New task and enter a focused request. Keep Worktree checked and Parallel variants at ×1. Select an authenticated agent and start the task. This example assumes your app has a settings menu.', code: 'Add keyboard navigation to the settings menu.\nKeep the changes inside the settings UI and its tests.', codeLabel: 'Example task A', check: 'Task A has its own worktree and begins running, or shows why it is waiting.' },
    { title: 'Start a second, independent job', text: 'Create another task in the same project without waiting for the first to finish. Keep Worktree checked and ×1 selected. Choose work that does not depend on task A. Adapt this example to a separate part of your project.', code: 'Add tests for invalid dates in the CSV importer.\nKeep the changes inside the importer and its tests.', codeLabel: 'Example task B', check: 'Task B runs in a different worktree when a second execution slot is available.' },
    { title: 'Review the two results separately', text: 'Open each task’s Chat and Changes views. Inspect its diff and test results, then follow the project’s configured review and completion process. Worktrees separate files during execution; changes can still conflict when you combine them.', check: 'Each task has a reviewed diff and checks appropriate to its own change.' }
  ],
  explanation: 'Create separate tasks for different jobs. Use ×2 variants when you want two approaches to the same prompt instead. Variants also use separate worktrees. Neither option makes independent edits automatically compatible.',
  problems: [
    ['The second task stays queued', 'Check the global and project limits, plus tasks running in other projects. An agent account waiting for its usage limit to reset can also delay a task.'],
    ['The tasks run one after another', 'Confirm the project is a Git repository and Worktree is checked. Non-Git folders run sequentially. Tasks using the main checkout are serialized by a repository lock.'],
    ['A task fails before the agent starts', 'Read the worktree error in the task conversation. If Cezar cannot create the isolated worktree, it stops rather than silently editing the main checkout. Resolve the reported Git or setup error before retrying.']
  ],
  next: [{ label: 'Worktree feature reference', href: '#feature/worktrees' }, { label: 'Compare variants of one task', href: '#feature/variants' }, { label: 'Task lifecycle and queue', href: '#technical/run-lifecycle' }],
  sources: [{ label: 'Workspace task limit', path: 'packages/web/src/routes/settings/resources-section.tsx', line: 142 }, { label: 'Project task limit', path: 'packages/web/src/routes/settings/project-general.tsx', line: 100 }, { label: 'Worktree control', path: 'packages/web/src/routes/new-task.tsx', line: 1002 }, { label: 'Queue admission and capacity', path: 'packages/cezar/src/workflows/run.ts', line: 1837 }, { label: 'Worktree creation and failure handling', path: 'packages/cezar/src/workflows/run.ts', line: 5051 }]
});
