const GUIDES=[
  {
    "q": "How do I change a page with Design Mode?",
    "en": "design mode appearance style css visual element select click button color font typography padding spacing margin interface change design mode wyglad wygląd styl css wizualnie element zaznaczyc kliknac kolor przycisku przycisk font czcionka padding odstep margines zmienic zmienić interfejs",
    "answer": "Select an element in Preview and describe the change. Design Mode sends its selector, HTML, styles, and dimensions to the agent.",
    "steps": [
      "Run the task application and open its local URL in Preview.",
      "Enable Design Mode and click an element.",
      "Write your note and send it to the agent."
    ],
    "ids": [
      "design-mode",
      "design-notes",
      "app-preview"
    ],
    "caveat": "Design Mode works in the local Cezar cockpit with HTTP addresses on the same computer (loopback). It sends a text description of the DOM element and does not take screenshots automatically.",
    "featured": true
  },
  {
    "q": "How do I run and preview an application?",
    "en": "preview application start app local browser development server run preview podglad aplikacja start app localhost przegladarka dev server",
    "answer": "Open Preview in a task. Start app runs the application using the saved project configuration, called a recipe. Preview displays the application at its URL.",
    "steps": [
      "Choose Start app in the task, or enter the startup command in Terminal.",
      "Open Preview and enter or select the application URL.",
      "You can open several preview tabs."
    ],
    "ids": [
      "start-app",
      "start-app-recipes",
      "app-preview",
      "task-terminal"
    ],
    "caveat": "Save a project recipe before using Start app. Opening Preview alone does not start the application server.",
    "featured": true
  },
  {
    "q": "How do I assign a Jira or Linear issue to an agent?",
    "en": "jira linear issue tracker ticket connect integration assign jira linear issue tracker zgloszenie zgłoszenie polaczyc integracja",
    "answer": "Connect Jira or Linear to your Cezar project. Then open an issue and create a task for your chosen agent.",
    "steps": [
      "In project Settings, open Issue tracker and configure Jira or Linear.",
      "Find and open the issue in the project panel.",
      "Add instructions, choose an agent, and start the task."
    ],
    "ids": [
      "jira-connection",
      "linear-connection",
      "tracker-task",
      "tracker-automations"
    ],
    "caveat": "The connection is saved for one project. Creating a task from an issue does not automatically edit the issue in Jira or Linear.",
    "featured": true
  },
  {
    "q": "How do I schedule a task for later?",
    "en": "schedule scheduled time date later clock reset quota usage limit zaplanuj termin harmonogram godzina data pozniej później schedule reset limitu",
    "answer": "Click the clock button in New task. Choose a date and time, or schedule the task after a Claude or Codex usage limit resets, if Cezar knows the reset time.",
    "steps": [
      "Describe the task and choose a workflow, account, and model.",
      "Click the clock and set a time or choose the usage reset.",
      "Confirm with Schedule task. You can change the time later in Scheduled."
    ],
    "ids": [
      "schedule-task",
      "schedule-after-reset",
      "manage-scheduled-task"
    ],
    "caveat": "The Cezar server must be running. The selected time is the earliest possible start; the task may still wait in the queue. This option is unavailable for tasks with attachments.",
    "featured": true
  },
  {
    "q": "Can I use a terminal inside a task?",
    "en": "embedded terminal shell bash console command npm development test terminal shell bash konsola komenda polecenie npm dev test",
    "answer": "Yes. Open Terminal to run your own commands in the task working directory (worktree).",
    "steps": [
      "Open the task and select Terminal.",
      "Enter a command or choose a project command from Commands.",
      "Open a detected local URL in Preview."
    ],
    "ids": [
      "task-terminal",
      "terminal-discovery",
      "task-split-view"
    ],
    "caveat": "Processes keep running when you hide the panel. Terminal availability depends on support from the machine running Cezar."
  },
  {
    "q": "Where can I see costs and progress across projects?",
    "en": "dashboard cost costs usage chart trends export csv progress statistics projects dashboard koszty koszt wykres trendy eksport csv postep statystyki",
    "answer": "Dashboard shows task status across projects and usage reported by agent providers.",
    "steps": [
      "Open Dashboard → Overview to check task status.",
      "Open Usage & cost to see costs and trends over time.",
      "Use Customize to change the view or Export to download a CSV."
    ],
    "ids": [
      "dashboard-overview",
      "dashboard-costs",
      "dashboard-export"
    ],
    "caveat": "Cezar calculates costs from provider data. If a provider supplies only partial data, the view will not include all account costs."
  },
  {
    "q": "How do I pass a secret to tests?",
    "en": "secret secrets key api token environment variable tests check steps sekret secrets klucz api token zmienna testy check",
    "answer": "Save the secret in project or workspace settings. Choose check steps as a recipient to make it available to steps that run checks such as tests.",
    "steps": [
      "Open Settings → project or Global → Secrets.",
      "Add the value and choose its recipients.",
      "Use the secret in a check step according to its configuration."
    ],
    "ids": [
      "project-secrets",
      "workspace-secrets",
      "e2e-setup"
    ],
    "caveat": "Values stored in Secrets are not passed to agent sessions."
  },
  {
    "q": "Can I leave a task running overnight?",
    "en": "overnight unattended autonomous night running computer server overnight unattended autonomous noc nocy zostawic samo samodzielnie",
    "answer": "Yes. Run the task in Autonomous mode and leave the computer or server on. If the task reaches a provider usage limit, Cezar can resume it when the reset time is known.",
    "steps": [
      "Choose a task, skill, or workflow and enable Autonomous.",
      "Make sure the computer or VPS stays running.",
      "Check Auto-resume after a usage limit in Settings → Resources."
    ],
    "ids": [
      "auto-resume",
      "remote",
      "workflows"
    ],
    "caveat": "Autonomous mode skips the review gate. Resuming after a usage limit requires a reset time from the provider. Other errors do not trigger this mechanism."
  },
  {
    "q": "How do I use a second Claude account?",
    "en": "second login account profile claude authentication second login account profile drugie konto konta claude logowanie",
    "answer": "Add a profile in Agent accounts. It uses a separate configuration directory and login for the same CLI.",
    "steps": [
      "Open Settings → Agent accounts.",
      "Add the account and authenticate it in the CLI.",
      "Set it as the default account for the relevant project."
    ],
    "ids": [
      "profiles",
      "agent-settings"
    ],
    "caveat": "Cezar does not create provider accounts. The second account must already be signed in."
  },
  {
    "q": "Will a task resume after a usage limit?",
    "en": "usage limit quota token reset exhausted resume restart continue usage limit quota token reset exhausted resume wznowi limitu limicie tokenow",
    "answer": "Yes, if the provider gives a reset time. Cezar schedules a resume 30 seconds after that time. The task still waits for its turn in the queue.",
    "steps": [
      "Check Settings → Resources → Auto-resume after a usage limit.",
      "Open the task to see its resume time.",
      "Choose Don’t resume if you do not want this task to restart."
    ],
    "ids": [
      "auto-resume",
      "cancel-resume"
    ],
    "caveat": "If Cezar cannot recognize the reset time, the task stays failed. It can resume automatically up to 12 consecutive times."
  },
  {
    "q": "How do I react to new GitHub issues automatically?",
    "en": "github automation trigger label new issue issues event automatic github automation trigger label etykieta nowe issue issues automatycznie reagowac",
    "answer": "Create a GitHub Automations rule to start a task when Cezar detects a matching GitHub event.",
    "steps": [
      "Open Automations → New automation → When GitHub changes.",
      "Create a rule, filter, and task template in Automations.",
      "Test the filter and enable the rule. Check its executions in the execution log."
    ],
    "ids": [
      "automations",
      "github",
      "prompt-templates"
    ],
    "caveat": "Cezar polls GitHub while the server is running. Enabling a rule does not automatically process older events."
  },
  {
    "q": "Can I merge pull requests automatically?",
    "en": "auto merge automerge automatic pull request merge landing commit push auto merge automerge automatyczne mergowanie scalanie scalic merge pr",
    "answer": "Cezar supports auto-land: in the relevant mode, it creates a commit and can push the branch upstream. This operation does not merge a pull request on GitHub.",
    "steps": [
      "Check worktree and landing configuration, along with Autonomous mode.",
      "Read the auto-land section in the task lifecycle technical guide.",
      "Follow your repository merge rules and branch protections for pull requests."
    ],
    "ids": [
      "review",
      "github"
    ],
    "caveat": "The review gate is off by default, so a task does not necessarily pause before publishing changes."
  },
  {
    "q": "How do I compare two solutions to the same task?",
    "en": "compare variants two three solutions alternative diff compare variants two solutions porownac dwa rozwiazania warianty najlepszy",
    "answer": "Choose Parallel variants and select ×2 or ×3. Cezar runs two or three variants in separate working directories (worktrees).",
    "steps": [
      "Set the number of variants in the task composer.",
      "Wait for the results and open the file diff comparison.",
      "Choose the variant you want to keep."
    ],
    "ids": [
      "variants",
      "split-diff",
      "worktrees"
    ],
    "caveat": "Each variant runs a separate agent session. Cezar archives rejected variants and removes their working directories."
  },
  {
    "q": "How do I limit RAM usage?",
    "en": "memory ram limit computer resources usage freezes memory ram limit komputer pamiec zasoby zuzycie zawiesza",
    "answer": "Set a memory limit per task and the number of tasks that can run at the same time.",
    "steps": [
      "Open Settings → Resources.",
      "Set Per-task memory limit and Max parallel tasks.",
      "If needed, also limit concurrency for a specific project."
    ],
    "ids": [
      "memory-limit",
      "parallel-tasks",
      "project-concurrency"
    ],
    "caveat": "Exceeding the memory limit pauses the task. Reducing concurrency alone does not limit memory used by a single process."
  },
  {
    "q": "Can I get a notification when an agent needs me?",
    "en": "notification notify alert attention waiting finished error browser notification notify alert powiadomienie powiadomienia potrzebuje skonczy",
    "answer": "Yes. Enable browser notifications for tasks waiting for input, review, or help with an error.",
    "steps": [
      "Open Settings → Notifications.",
      "Enable Notify when an agent needs you.",
      "Allow notifications in the browser. They work when the tab is in the background."
    ],
    "ids": [
      "browser-notifications"
    ],
    "caveat": "This guide covers browser notifications. It does not confirm native app push support. Notifications are not sent for every successful task completion."
  },
  {
    "q": "How do I save a prompt for reuse?",
    "en": "save reuse prompt template snippet instructions save reuse prompt template snippet zapisac szablon instrukcje ponownie",
    "answer": "Save a Prompt template and optionally assign it to a skill.",
    "steps": [
      "Open Settings → project → Instructions → Prompt templates.",
      "Add a name and the instruction text.",
      "Choose the template in the task composer or assign it to a skill."
    ],
    "ids": [
      "prompt-templates",
      "skill-template",
      "system-prompt"
    ],
    "caveat": "A template assigned to a skill automatically fills only an empty prompt."
  },
  {
    "q": "Can an agent wait for CI?",
    "en": "wait ci monitoring checks pipeline polling recheck wait ci monitoring checks pipeline czekac czeka sprawdzac",
    "answer": "Yes. Cezar supports monitoring sessions that can check CI status periodically.",
    "steps": [
      "Set Extra monitoring sessions in Resources.",
      "Choose Monitoring wake-up: Park or Re-check.",
      "For Re-check, set an interval and check the next wake-up time."
    ],
    "ids": [
      "monitor-capacity",
      "monitor-wake"
    ],
    "caveat": "Re-check uses additional model turns. Park waits without checking status periodically."
  },
  {
    "q": "Can I embed Cezar in my React application?",
    "en": "react embed embedding components library application react embed embedding components osadzic osadzenie komponenty wlasnej aplikacji",
    "answer": "The React component library is described in a specification. It has not been implemented in the reviewed code version.",
    "steps": [
      "Read the Composable React components specification.",
      "Review the proposed provider, client, and component APIs.",
      "Wait for implementation and package publication before integrating it."
    ],
    "ids": [
      "react-components"
    ],
    "caveat": "The reviewed repository version has no packages/react directory. The Cezar cockpit uses React, but it is not a published npm library for embedding in another application."
  },
  {
    "q": "How do I change instructions for a queued task?",
    "en": "queued prompt edit message queue change instructions before start queued prompt edit message kolejce kolejka zmien instrukcje przed startem",
    "answer": "Open a task that is waiting in the queue. You can edit its pending messages before it starts.",
    "steps": [
      "In Tasks, open a task with queued status.",
      "Add, edit, or remove a pending message.",
      "Review the text before Cezar starts the queued task."
    ],
    "ids": [
      "queued-prompts",
      "parallel-tasks"
    ],
    "caveat": "Once execution starts, send messages to the active session instead."
  },
  {
    "q": "How do I work with multiple repositories?",
    "en": "multiple projects repositories workspace all tasks tags multiple projects repositories workspace kilka repozytoriow projekty wszystkie zadania",
    "answer": "Add repositories to the workspace, then use All tasks and project tags.",
    "steps": [
      "Add a local folder or clone a GitHub repository.",
      "Tag related projects.",
      "Open All tasks and filter by project, tag, or status."
    ],
    "ids": [
      "projects",
      "clone-project",
      "local-project",
      "project-concurrency"
    ],
    "caveat": "All tasks appears after you add a second project. It shows tasks from projects registered in Cezar."
  },
  {
    "q": "How do I run Cezar without a browser?",
    "en": "headless terminal cli command script without browser headless terminal cli command bez przegladarki skrypt",
    "answer": "Use the run command with a task description.",
    "steps": [
      "Open a terminal in the repository.",
      "Run npx cezar-cli run \"task description\".",
      "Review the result and changed files."
    ],
    "ids": [
      "headless",
      "workflows"
    ],
    "caveat": "Install the agent CLI and sign in to its account on the same machine."
  }
];
const normalizeSearch=value=>value.toLowerCase().replace(/ł/g,'l').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const stopWords=new Set('czy moge moze jak zrobic za pomoca cezara cezar do i a w na the can how to with my is a of for sie mi chce chcialabym chcialbym know want pomoc prosze does will should would could you your it an be use get about'.split(' '));
function terms(value){return normalizeSearch(value).split(' ').filter(word=>word.length>1&&!stopWords.has(word))}
function scoreText(query,text){const words=terms(query),target=terms(text);if(!words.length)return 0;return words.reduce((score,word)=>score+(target.some(token=>token===word)?3:target.some(token=>token.length>3&&word.length>3&&(token.startsWith(word.slice(0,Math.max(4,word.length-2)))||word.startsWith(token.slice(0,Math.max(4,token.length-2)))))?1:0),0)}
function featureMatches(query){return FEATURES.map(item=>({item,score:scoreText(query,`${item.title} ${item.keywords||''}`)*2+scoreText(query,`${item.summary} ${item.description} ${item.where||''}`)})).filter(result=>result.score>0).sort((a,b)=>b.score-a.score)}
function guideMatches(query){return GUIDES.map(guide=>({guide,score:scoreText(query,guide.q+' '+guide.en)})).filter(result=>result.score>=Math.max(3,terms(query).length*1.8)).sort((a,b)=>b.score-a.score)}
