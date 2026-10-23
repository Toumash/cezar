const FEATURE_COPY={
  "parallel-tasks": {
    "title": "Run several tasks at once",
    "summary": "Cezar runs several tasks at the same time. Others wait in the queue until a slot becomes available.",
    "description": "Each task has its own description and workflow. Queued tasks stay in the queue when you restart Cezar.",
    "where": "New task → Tasks",
    "steps": [
      "Open New task and describe the result you want.",
      "Choose a workflow and start the task. Add more tasks in the same way.",
      "Open Tasks to see what is running and where each waiting task sits in the queue."
    ],
    "note": "The default global limit allows up to 2 tasks at once. In folders without Git, tasks run one at a time."
  },
  "live-sessions": {
    "title": "Follow the agent's work",
    "summary": "Read messages, tool calls, and results in the task thread as they arrive.",
    "description": "The thread keeps the session history. You can add an instruction or paste a screenshot while the agent is working.",
    "where": "Task thread",
    "steps": [
      "Start a task and open its thread.",
      "Expand a tool call to see its result.",
      "Send another message if you need to clarify the task."
    ],
    "note": "The tools and usage data shown in the thread depend on the agent provider."
  },
  "variants": {
    "title": "Compare several solutions",
    "summary": "Run two or three variants of a task and choose the best result.",
    "description": "Each variant has a separate worktree, a directory where it can make changes. When the variants finish, compare their files and choose the solution to keep.",
    "where": "New task → ×2 / ×3",
    "steps": [
      "Choose ×2 or ×3 in the task form.",
      "Wait for the variants to finish.",
      "Open the comparison and choose a solution."
    ],
    "note": "Each variant starts a separate agent session. Cezar archives rejected variants and removes their worktrees."
  },
  "workflows": {
    "title": "Build a workflow",
    "summary": "Arrange agent skills and check commands into a sequence you can reuse across tasks.",
    "description": "Set the order of steps in the editor or a YAML file. Each step can use a different agent.",
    "where": "Workflows",
    "steps": [
      "Create a workflow.",
      "Arrange the skill steps and add check commands.",
      "Save the workflow and select it for a new task."
    ],
    "note": "Cezar restores built-in workflows automatically. Commands run on the machine hosting Cezar."
  },
  "planner": {
    "title": "Plan a task before starting",
    "summary": "Ask the agent to suggest steps based on your task description.",
    "description": "Choose Plan first to have the agent prepare a workflow for review. You can reorder the steps and remove any you do not need before running it.",
    "where": "New task → Plan first",
    "steps": [
      "Describe the task and choose Plan first.",
      "Review the proposed steps and skills.",
      "Edit the plan, approve it, and start the task."
    ],
    "note": "Preparing a plan does not start the task. Cezar waits for you to review and approve the proposed steps."
  },
  "skills": {
    "title": "Use your team's skills",
    "summary": "Attach instructions stored in Markdown files to a task.",
    "description": "Skills are instructions written in Markdown. Cezar detects local skills and can download your team's shared repository into a global cache.",
    "where": "Skills",
    "steps": [
      "Open Skills and read the instructions.",
      "Select a skill in a new task or workflow.",
      "Refresh the catalog after shared instructions change."
    ],
    "note": "Local skills also work without a network connection."
  },
  "agents": {
    "title": "Choose Claude Code or Codex",
    "summary": "Use installed agents with your existing accounts.",
    "description": "Set a default agent, choose another for a task, or assign different agents to individual workflow steps.",
    "where": "Settings → Agents",
    "steps": [
      "Install the CLI you want to use and sign in.",
      "Check that it is available in Settings → Agents.",
      "Select the agent in New task or a workflow step."
    ],
    "note": "The provider's CLI handles your subscription, sign-in, and usage limits."
  },
  "experimental-runners": {
    "title": "Try OpenCode or pi",
    "summary": "Choose OpenCode or pi to try Cezar's experimental support for these agents.",
    "description": "Depending on its configuration, OpenCode can use open or local models. The README marks both OpenCode and pi as experimental.",
    "where": "Settings → Agents",
    "steps": [
      "Install and configure the CLI you want to use.",
      "Check that Cezar detects it in Settings → Agents.",
      "Select the agent and try it on a small task."
    ],
    "note": "Protocol support and behavior may differ between these agents. Test the selected agent on your own tasks."
  },
  "profiles": {
    "title": "Switch agent accounts",
    "summary": "Create separate sign-in profiles for the same CLI.",
    "description": "Each profile has its own agent configuration directory. This lets you use several signed-in accounts from the same provider.",
    "where": "Settings → Agent accounts",
    "steps": [
      "Open Settings → Agent accounts and add an account.",
      "Set up a separate profile directory and sign in through the agent's CLI using that directory.",
      "Select the account for the project that should use it."
    ],
    "note": "The provider's CLI handles sign-in. Creating a profile does not create a new account with the provider."
  },
  "agent-settings": {
    "title": "Edit agent configuration",
    "summary": "Open an agent's settings, memory, and MCP configuration.",
    "description": "Choose an agent and configuration scope to find the file you need. The preview shows the file's original contents.",
    "where": "Settings → Agent config",
    "steps": [
      "Choose the agent, file, and configuration scope.",
      "Read the file contents.",
      "Make your change and save it."
    ],
    "note": "Cezar needs access to the local machine to save a file. Saving is blocked when local session handoff is unavailable."
  },
  "worktrees": {
    "title": "Keep task changes separate",
    "summary": "Each task can work in its own Git worktree.",
    "description": "Each worktree is a separate directory, so tasks can change files in parallel. When the work is finished, you can remove the directory and keep the branch to recover the changes later.",
    "where": "Settings → Resources",
    "steps": [
      "Start a task in a Git repository.",
      "Review its changes in the task's Git view.",
      "Open Settings → Resources to review completed worktrees and free up disk space."
    ],
    "note": "Cezar keeps 10 completed worktrees by default. Set the value to 0 to keep them without a count limit."
  },
  "review": {
    "title": "Review changes before finishing",
    "summary": "Enable review to pause a completed task while it waits for your feedback.",
    "description": "If a task succeeds and changes files, you can read the diff, send feedback to the agent, accept the result, or create a draft pull request.",
    "where": "Settings → Agents → review gate",
    "steps": [
      "Enable the review gate in settings or with CEZ_REVIEW_GATE=1.",
      "Start a task outside Autonomous mode.",
      "Review the diff and choose what to do next."
    ],
    "note": "The review gate is off by default, and Autonomous mode skips it. In trunk mode, auto-land can commit changes and push them to the remote repository. The technical reference explains when this happens."
  },
  "github": {
    "title": "Assign a GitHub issue to an agent",
    "summary": "Browse issues and pull requests without leaving the project.",
    "description": "The GitHub view uses your signed-in gh CLI. You can send an issue to an agent along with a workflow and skills.",
    "where": "Project menu → GitHub",
    "steps": [
      "Sign in with gh on the host used by the repository.",
      "Open GitHub in the project menu.",
      "Choose an issue and send it to the agent."
    ],
    "note": "The repository needs a working connection to GitHub, and gh must be signed in."
  },
  "automations": {
    "title": "Create tasks from GitHub events",
    "summary": "Set up a rule that starts a task when it detects matching activity on GitHub.",
    "description": "Cezar checks GitHub periodically using your saved rules. The execution log shows matching events and the tasks they started.",
    "where": "Automations",
    "steps": [
      "Start the server with CEZ_AUTOMATIONS=1.",
      "Create a disabled rule and test its filter.",
      "Enable the rule to process new events."
    ],
    "note": "The server must stay running. A rule processes events from the moment you enable it and skips earlier events."
  },
  "projects": {
    "title": "See tasks across projects",
    "summary": "Browse tasks from several repositories in one view and filter them by tag.",
    "description": "Projects registered in Cezar can share tags. In All tasks, you can filter by project, tag, status, and workflow.",
    "where": "All tasks",
    "steps": [
      "Add a second project.",
      "Give related repositories shared tags.",
      "Open All tasks and set your filters."
    ],
    "note": "All tasks appears after you add a second project and includes registered projects."
  },
  "handoff": {
    "title": "Continue a session in Cezar or a terminal",
    "summary": "Return to an earlier agent session and send another instruction.",
    "description": "Cezar saves the information needed to resume supported sessions. You can also open a session directly in the CLI.",
    "where": "Task → Continue",
    "steps": [
      "Open an existing task.",
      "Choose Continue to add a message.",
      "Use terminal handoff if you want to work directly in the CLI."
    ],
    "note": "Opening a local terminal depends on the machine's capabilities and the agent's session support."
  },
  "inbox": {
    "title": "Turn an agent suggestion into a task",
    "summary": "Find the agent's suggestions for further work in Inbox.",
    "description": "Choose an Inbox suggestion to create a new task with the proposed skill.",
    "where": "Inbox",
    "steps": [
      "Start Cezar with CEZ_FOLLOWUPS=1.",
      "Run a task that leaves agent suggestions.",
      "Open Inbox and create a task from a suggestion."
    ],
    "note": "Inbox is off by default. Notes in individual tasks work independently of Inbox."
  },
  "remote": {
    "title": "Run Cezar on a server",
    "summary": "Run agents on a VPS and manage tasks in a browser, including on your phone.",
    "description": "Agents work on the server or a dedicated computer. Use the browser to control tasks and review their results.",
    "where": "Server installation guide",
    "steps": [
      "Prepare a machine with Node and signed-in agent CLIs.",
      "Follow the installation and remote access instructions.",
      "Connect through a browser and try a small task."
    ],
    "note": "Remote access must be enabled. Before sharing the server, apply the access and authentication rules documented in the repository."
  },
  "react-components": {
    "title": "Embed Cezar views in a React app",
    "summary": "The planned library would provide task lists, sessions, and workflows.",
    "description": "The specification describes @open-mercato/cezar-react with client and provider configuration, separate styles, and navigation independent of the router.",
    "where": "React components specification",
    "steps": [
      "Read the specification for embedding components.",
      "Review the proposed component and provider boundaries.",
      "Wait for implementation before using the package."
    ],
    "note": "The inspected source version has four workspaces and no packages/react directory. The library remains a proposal in the specification."
  },
  "auto-resume": {
    "title": "Resume after a usage limit resets",
    "summary": "Cezar can automatically resume work interrupted by a provider's usage limit.",
    "description": "The thread shows the scheduled resume time. When that time arrives, Cezar puts the task back in the normal queue.",
    "where": "Settings → Resources → Auto-resume after a usage limit",
    "steps": [
      "Leave the setting enabled.",
      "Check the resume time in the thread.",
      "Let Cezar add the task back to the queue."
    ],
    "note": "Automatic resume requires the provider to report when the limit resets. Cezar attempts to resume 30 seconds after that time, with a maximum of 12 attempts."
  },
  "cancel-resume": {
    "title": "Cancel automatic resume",
    "summary": "Cancel a scheduled resume for one task.",
    "description": "You can cancel a pending resume in the thread. Archiving the task also cancels it.",
    "where": "Task thread → Don’t resume",
    "steps": [
      "Open a task waiting for its usage limit to reset.",
      "Choose Don’t resume."
    ],
    "note": "This cancels only that scheduled resume. The global automatic resume setting stays unchanged."
  },
  "monitor-capacity": {
    "title": "Make room for tasks waiting on CI",
    "summary": "Set an extra session pool for agents waiting for CI results.",
    "description": "An agent session waiting on CI can move into the monitoring pool, allowing other tasks to keep working.",
    "where": "Settings → Resources → Extra monitoring sessions",
    "steps": [
      "Set the number of extra sessions.",
      "Run a workflow that reports monitoring activity.",
      "Check that other tasks continue running in parallel."
    ],
    "note": "When the monitoring pool fills up, sessions waiting for results may still hold up the queue."
  },
  "monitor-wake": {
    "title": "Set how often to check CI",
    "summary": "Choose whether to stop a waiting session or resume it periodically to check again.",
    "description": "Park stops the session while it waits for a result. With Re-check, you set the interval between checks.",
    "where": "Settings → Resources → Monitoring wake-up",
    "steps": [
      "Choose Park or Re-check.",
      "For Re-check, set the interval.",
      "Check the task's next wake-up time."
    ],
    "note": "Each Re-check wake-up uses another model turn. The interface lists a limit of 40 wake-ups."
  },
  "memory-limit": {
    "title": "Limit memory use per task",
    "summary": "Set a RAM limit that pauses the task when exceeded.",
    "description": "The limit covers the task process and any child processes it starts.",
    "where": "Settings → Resources → Per-task memory limit",
    "steps": [
      "Set a memory limit.",
      "Watch the running tasks.",
      "Return to a paused task when needed."
    ],
    "note": "Leave the field empty if you do not want to configure a memory limit for the task."
  },
  "project-concurrency": {
    "title": "Limit parallel tasks in a project",
    "summary": "Set how many tasks from one repository can run at the same time.",
    "description": "The project limit controls how many of its tasks can run together. The global limit on parallel tasks still applies.",
    "where": "Project settings → Max parallel tasks",
    "steps": [
      "Open project settings and set the parallel task limit.",
      "Check how many tasks are running and how many are waiting in the queue."
    ],
    "note": "Raising the project limit does not reserve extra resources or increase the global limit."
  },
  "prompt-templates": {
    "title": "Save an instruction template",
    "summary": "Insert saved instructions into task, GitHub, and Inbox forms.",
    "description": "Save a template name and instruction text so you can reuse them in later forms.",
    "where": "Settings → Prompt templates",
    "steps": [
      "Enter a name and instruction text, then save the template.",
      "Select the saved template in a supported form."
    ],
    "note": "Selecting a template inserts its text into the form. It does not start a workflow."
  },
  "skill-template": {
    "title": "Link a template to a skill",
    "summary": "Selecting a skill can fill in the task description automatically.",
    "description": "Assign a template to a skill to avoid pasting the same instructions each time.",
    "where": "Settings → Prompt templates → skill assignment",
    "steps": [
      "Create a template.",
      "Assign it to a skill.",
      "Select that skill in an empty task form."
    ],
    "note": "Automatic filling works only before you enter your own text. Existing instructions are preserved."
  },
  "system-prompt": {
    "title": "Set shared project instructions",
    "summary": "Save rules that Cezar will include in future agent runs for the project.",
    "description": "The additional project instructions apply regardless of which agent you choose.",
    "where": "Settings → Agents → System prompt",
    "steps": [
      "Enter your project rules and save them.",
      "Start a new task to use the saved instructions."
    ],
    "note": "The instructions apply to future runs. Saved session history stays unchanged."
  },
  "base-branch": {
    "title": "Choose a base branch",
    "summary": "Set the branch that new worktrees start from and draft pull requests target.",
    "description": "This setting defines the starting point for future tasks in the repository.",
    "where": "Settings → Agents → Base branch",
    "steps": [
      "Choose the base branch.",
      "Start a new task.",
      "Check the diff and the pull request's target branch."
    ],
    "note": "The branch must exist in the repository. Changing this setting does not rebase existing work."
  },
  "live-titles": {
    "title": "Enable automatic task titles",
    "summary": "A task's title can change as the conversation progresses.",
    "description": "Rename the task manually if you want its title to stay fixed.",
    "where": "Settings → Agents → Live title updates",
    "steps": [
      "Enable Live title updates.",
      "Start a task.",
      "Rename it manually if you want to keep a fixed title."
    ],
    "note": "A manual rename stops automatic title updates for that task."
  },
  "queued-prompts": {
    "title": "Edit instructions before a task starts",
    "summary": "Add, edit, and remove messages while a task waits in the queue.",
    "description": "You can add details to the request before the agent starts working on it.",
    "where": "Queued task thread",
    "steps": [
      "Open a waiting task.",
      "Add further instructions.",
      "Edit or remove messages before work begins."
    ],
    "note": "The agent receives queued messages when the task starts. Adding instructions to a running session is a separate feature."
  },
  "subagents": {
    "title": "Inspect subagent activity",
    "summary": "See the activity and history of agents launched within a session.",
    "description": "The Agents panel appears when the session reports subagent activity.",
    "where": "Task thread → Agents",
    "steps": [
      "Expand the Agents panel and select an agent.",
      "Read its activity and history."
    ],
    "note": "The panel shows activity reported by subagents. You cannot use it to launch separate tasks."
  },
  "questions": {
    "title": "Answer an agent's question",
    "summary": "Provide missing information through a question card in the thread.",
    "description": "The card shows the question and available answers when an agent is waiting for a decision.",
    "where": "Task thread → question card",
    "steps": [
      "Open the waiting task and read the question and its available options.",
      "Send your answer."
    ],
    "note": "Question cards are available when the selected agent and execution mode support questions."
  },
  "file-preview": {
    "title": "Preview task files",
    "summary": "Browse directories and file contents in the Files view.",
    "description": "Use the file tree to select a document or source file for preview.",
    "where": "Task → Files",
    "steps": [
      "Open Files and expand the directory you want to browse.",
      "Select a file to see its contents."
    ],
    "note": "The text preview does not display binary files or files that exceed its size limit."
  },
  "commit-changes": {
    "title": "Save changes in a commit",
    "summary": "Create a commit directly from the task view.",
    "description": "Review the changed files and enter a commit message before saving.",
    "where": "Task → Git actions → Commit",
    "steps": [
      "Review the changes and choose Commit.",
      "Enter a commit message and confirm."
    ],
    "note": "Git actions may be unavailable when the task or repository state does not allow them."
  },
  "commit-history": {
    "title": "Browse commit history",
    "summary": "Select a commit to see the changes it contains.",
    "description": "The view lists commits and their changes, with a GitHub link when available.",
    "where": "Git → Commits",
    "steps": [
      "Open the commit list.",
      "Select a commit.",
      "Review its changes or open the GitHub link."
    ],
    "note": "The history belongs to the repository or task you are viewing."
  },
  "split-diff": {
    "title": "Compare changes side by side",
    "summary": "Compare the previous and new versions of a file in a unified view or two columns.",
    "description": "You can also enable wrapping for long lines.",
    "where": "Task → Changes → Diff layout",
    "steps": [
      "Open a changed file.",
      "Switch the comparison layout.",
      "Enable line wrapping if needed."
    ],
    "note": "Changing the layout affects only the display. It does not change the files."
  },
  "browser-notifications": {
    "title": "Enable browser notifications",
    "summary": "Get notified when a task needs your answer, requires review, or ends with an error.",
    "description": "Your browser can notify you about tasks while the Cezar tab is in the background.",
    "where": "Settings → Notifications",
    "steps": [
      "Enable Notify when an agent needs you.",
      "Allow notifications in your browser.",
      "Keep the Cezar tab open in the background."
    ],
    "note": "Notifications are off by default. Your browser must support them and have your permission to display them. This feature does not send push notifications from a native phone app."
  },
  "appearance": {
    "title": "Switch between light and dark themes",
    "summary": "Choose a light or dark theme, or let Cezar follow your system settings.",
    "description": "The available options are Light, Dark, and System.",
    "where": "Settings → Appearance → Theme",
    "steps": [
      "Choose Light, Dark, or System.",
      "Select System if the theme should follow your system settings."
    ],
    "note": "Your selection is saved for this browser."
  },
  "accent": {
    "title": "Change the button color",
    "summary": "Choose the accent color used for primary actions.",
    "description": "Set the color in the appearance settings.",
    "where": "Settings → Appearance → Accent",
    "steps": [
      "Open Appearance.",
      "Choose an accent color.",
      "Check how the buttons look."
    ],
    "note": "This changes the color of interface elements. Task statuses stay unchanged."
  },
  "reading-density": {
    "title": "Adjust spacing and conversation width",
    "summary": "Reduce spacing or choose a more comfortable width for session text.",
    "description": "Compact reduces spacing to fit more items on screen. Wide and Narrow control the width of conversation text.",
    "where": "Settings → Appearance → Density / Reading width",
    "steps": [
      "Choose Compact to reduce spacing.",
      "Choose Wide or Narrow for conversations."
    ],
    "note": "Compact keeps the same text size. The Changes view always uses the full available width."
  },
  "fold-columns": {
    "title": "Hide task columns you do not need",
    "summary": "Collapse optional table columns and restore them from their headers.",
    "description": "The information needed to identify each task stays visible when you hide extra columns.",
    "where": "Tasks → column headers",
    "steps": [
      "Click the header of an optional column.",
      "Click it again to restore the column."
    ],
    "note": "Cezar remembers the selection across projects in the shared workspace. In a new workspace, the Branch column starts collapsed."
  },
  "usage-metrics": {
    "title": "Check session tokens and cost",
    "summary": "See the input and output token counts and the cost reported by the agent.",
    "description": "These values appear in the task list or session when the provider supplies them.",
    "where": "Tasks or session view",
    "steps": [
      "Open the task list or a session.",
      "Check the available usage values."
    ],
    "note": "Providers report different usage data. A missing cost does not mean the run was free."
  },
  "hide-metrics": {
    "title": "Hide tokens or costs",
    "summary": "Turn off the display of selected usage data.",
    "description": "Server flags can hide this information in an embedded Cezar panel too.",
    "where": "Server environment variables",
    "steps": [
      "Set CEZ_HIDE_TOKEN_USAGE=1 or CEZ_HIDE_COST=1.",
      "Restart the server.",
      "Check the view."
    ],
    "note": "The flags hide information in the interface. They do not change telemetry or the data returned by the API."
  },
  "skill-updates": {
    "title": "Update skills automatically",
    "summary": "Download updates for tracked Open Mercato skills.",
    "description": "Cezar checks for updates without blocking application startup and caches the results.",
    "where": "Global Settings → Skills",
    "steps": [
      "Open Skills settings.",
      "Leave automatic updates on or turn them off."
    ],
    "note": "Updates apply only to installations tracked by the source CLI. Cezar limits the number of checks and caches their results."
  },
  "bookmarklets": {
    "title": "Start a task from GitHub",
    "summary": "Save a browser bookmark that runs a skill for an issue or pull request.",
    "description": "Cezar generates these bookmarks, called bookmarklets, for you to save in your browser.",
    "where": "Settings → Bookmarklets",
    "steps": [
      "Choose a generated bookmarklet.",
      "Save it in your browser.",
      "Run it on an issue or pull request page."
    ],
    "note": "The Cezar server must be reachable. Follow the instructions supplied with the generated bookmarklet."
  },
  "command-palette": {
    "title": "Find a task from the keyboard",
    "summary": "Search for a task or command in the command palette.",
    "description": "Press ⌘K to open the palette.",
    "where": "Command palette → ⌘K",
    "steps": [
      "Open the command palette with ⌘K.",
      "Type a task or command name and select a result."
    ],
    "note": "Available commands depend on the current view and the application's capabilities."
  },
  "remove-project": {
    "title": "Remove a project from the list",
    "summary": "Remove a repository from Cezar's workspace while keeping its files and task history.",
    "description": "Remove from workspace removes the project's entry from the workspace.",
    "where": "Project settings → Remove from workspace",
    "steps": [
      "Open project settings.",
      "Choose Remove from workspace.",
      "Confirm the selected project."
    ],
    "note": "The project used to start Cezar will reappear when the application starts again. Removing an entry from the list does not delete the local repository."
  },
  "clone-project": {
    "title": "Clone a GitHub repository",
    "summary": "Download a repository and add it to Cezar.",
    "description": "Use the form to choose a repository and where to save its files.",
    "where": "Add project → Clone from GitHub",
    "steps": [
      "Choose a repository and destination folder.",
      "Start cloning.",
      "Open the added project."
    ],
    "note": "The Projects settings or CEZ_PROJECTS_DIR determine the default folder."
  },
  "local-project": {
    "title": "Add a project from disk",
    "summary": "Open an existing local repository in Cezar.",
    "description": "Select the project folder in the directory browser.",
    "where": "Add project → Open local folder",
    "steps": [
      "Browse to the project directory and select the folder.",
      "Open the selected folder in Cezar."
    ],
    "note": "You can browse only within the configured root directory. Single-project mode prevents you from adding projects."
  },
  "single-project": {
    "title": "Limit Cezar to one project",
    "summary": "Expose only the repository used to start the application.",
    "description": "A server environment variable enables this mode.",
    "where": "CEZ_SINGLE_PROJECT=1",
    "steps": [
      "Start Cezar with this flag.",
      "Work in the startup project.",
      "Remove the flag and restart to restore access to multiple projects."
    ],
    "note": "Cezar keeps existing project entries. While this mode is enabled, it blocks adding, editing, checking out, and removing projects."
  },
  "mock-mode": {
    "title": "Try the interface without an agent",
    "summary": "Run a demo with simulated responses.",
    "description": "The included mock agent returns simulated responses, allowing the demo to work without a network connection.",
    "where": "CEZ_DRY_RUN=1",
    "steps": [
      "Start Cezar with dry-run enabled.",
      "Create a sample task.",
      "Follow the simulated run."
    ],
    "note": "This mode is for demos and development. Responses are simulated and do not confirm that any code changes were made."
  },
  "native-models": {
    "title": "Use models configured in the CLI",
    "summary": "Lock model selection in Cezar while keeping agent selection available.",
    "description": "Cezar will use the models configured directly in the agents' tools.",
    "where": "CEZ_AGENT_MODELS_LOCKED=1 or modelsLocked",
    "steps": [
      "Configure the models in the CLI.",
      "Enable the model lock.",
      "Restart Cezar after changing the environment variable."
    ],
    "note": "The environment flag also skips credential checks and settings that disable providers. The modelsLocked option locks only model selection and does not skip those checks or settings."
  },
  "headless": {
    "title": "Run a task from the terminal",
    "summary": "Start work without opening the browser panel.",
    "description": "The cezar run command starts a task on the machine where you invoke it.",
    "where": "Terminal → cezar run",
    "steps": [
      "Open the repository directory.",
      "Enter npx cezar-cli run followed by the task text in quotation marks.",
      "Review the result and changed files."
    ],
    "note": "The selected agent's CLI must be installed and signed in."
  },
  "nightly": {
    "title": "Try a test release",
    "summary": "Try changes before they reach a stable release.",
    "description": "Nightly includes merged changes. To test a specific pull request, use its assigned preview version.",
    "where": "Terminal → npx cezar-cli@nightly",
    "steps": [
      "Choose nightly to test merged changes.",
      "When testing a pull request, use its exact preview version."
    ],
    "note": "A test release may differ from the stable version. Include the exact package version when reporting a bug."
  },
  "secret-redaction": {
    "title": "Redact secrets from saved data",
    "summary": "Cezar removes recognized credentials and values matching token patterns from saved text.",
    "description": "Redaction is enabled on the server by default.",
    "where": "Server settings",
    "steps": [
      "Leave redaction enabled.",
      "Keep credentials out of commands.",
      "Check logs before sharing them."
    ],
    "note": "Redaction may miss unfamiliar formats, leaving them in the text. Set CEZ_REDACT_SECRETS=0 to disable this feature."
  },
  "keyboard-settings": {
    "title": "Customize keyboard shortcuts",
    "summary": "A separate section for shortcut settings is planned.",
    "description": "The settings registry contains a hidden Keyboard entry intended for a later stage.",
    "where": "Interface redesign specification",
    "steps": [
      "Read the specification.",
      "Use the existing command palette to find commands."
    ],
    "note": "The Keyboard page is not available yet. Existing shortcuts work, but you cannot edit them here."
  },
  "autonomous": {
    "title": "Run a task without stopping for questions",
    "summary": "Autonomous mode lets the agent work without waiting for answers.",
    "description": "Review the result and file changes when the task finishes.",
    "where": "New task → Autonomous",
    "steps": [
      "Describe the task and the result you want.",
      "Enable Autonomous and start the task.",
      "Review the final diff and result."
    ],
    "note": "Autonomous skips the optional review stage. The computer or server running Cezar must stay on for the entire task."
  },
  "attachments": {
    "title": "Add a screenshot to a task",
    "summary": "Show the agent an image of a problem or a reference to follow.",
    "description": "You can paste screenshots when creating a task and during a running session.",
    "where": "Task form or conversation",
    "steps": [
      "Paste a screenshot.",
      "Explain which part the agent should focus on.",
      "Add context in the conversation if needed."
    ],
    "note": "Attachment support and accepted image formats depend on the selected agent."
  },
  "archive-task": {
    "title": "Archive a task",
    "summary": "Remove completed work from the current task list.",
    "description": "Choose Archive when work is finished to tidy up the task list.",
    "where": "Tasks → task actions",
    "steps": [
      "Open the task's actions menu.",
      "Choose Archive."
    ],
    "note": "Archiving also cancels a pending resume scheduled after a provider's usage limit resets."
  },
  "cancel-task": {
    "title": "Stop a task",
    "summary": "Interrupt a running session or remove a task from the execution queue.",
    "description": "Cancel is available in the task view.",
    "where": "Task → Cancel",
    "steps": [
      "Open a running or waiting task.",
      "Choose Cancel and check the new status."
    ],
    "note": "Canceling does not undo changes the agent has already made. Check the files in the worktree."
  },
  "workflow-portability": {
    "title": "Move workflows between projects",
    "summary": "Export a sequence to YAML or import an existing file.",
    "description": "Before running an imported workflow, review its steps and referenced skills.",
    "where": "Workflows → Import / Export",
    "steps": [
      "Open Workflows.",
      "Export a sequence or import a YAML file.",
      "Review the steps before running it."
    ],
    "note": "Before running a workflow in another environment, make sure its skills, commands, and agent CLIs are available there."
  },
  "workflow-retry": {
    "title": "Retry a failed workflow check",
    "summary": "Set a limited number of retries after a check command fails.",
    "description": "Set onFail in the workflow's YAML file to define what happens after a failed check.",
    "where": "Workflow YAML",
    "steps": [
      "Add a check command.",
      "Configure the supported onFail retries.",
      "Run the workflow and review each step's result."
    ],
    "note": "The workflow retries the check only up to the configured limit. A failure does not start an unlimited automatic repair loop."
  }
};
