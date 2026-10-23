const CATALOG_AUDIT={
  "date": "2026-10-23",
  "latestCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
  "features": [
    {
      "id": "design-mode",
      "title": "Design Mode: select an element to change",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Click an element in the preview and tell the agent what to change.",
      "description": "Click an element in the preview and describe the change you want. Design Mode adds its page address, selector, HTML fragment, styles, and dimensions to your message. If the framework exposes them, the agent also receives the component name and its location in the code. This context is a text description of the page structure (DOM); the feature does not take a screenshot automatically. In selection mode, clicking selects an element without activating its button or opening its link.",
      "where": "Task → Preview → Design Mode",
      "steps": [
        "Start the task application and open its local address in Preview.",
        "Turn on Design Mode and click an element on the page.",
        "Describe the change and send the note to the agent."
      ],
      "note": "Design Mode works in the local cockpit for http:// addresses pointing to the same computer (loopback). Selection mode starts turned off. CEZ_DESIGN_MODE=0 disables the entire feature. It is unavailable in the hosted cockpit.",
      "source": "packages/web/src/routes/task-preview/browser-view.tsx",
      "sourceLine": 179,
      "keywords": "design mode wizualne poprawki ui kliknij element css selektor wyglad podglad",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "design",
        "preview"
      ]
    },
    {
      "id": "design-notes",
      "title": "Notes attached to page elements",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Keep several preview notes and send them separately.",
      "description": "A note stores your feedback together with the selected page element. Unsent drafts survive a refresh. Once sent, a note receives a number and a status derived from the task state. Sending feedback can also reopen a closed session.",
      "where": "Task → Preview → Design Mode",
      "steps": [
        "Select an element and write a note.",
        "Add more notes or return to a draft later.",
        "Send the selected note. For a closed session, choose Reopen & send."
      ],
      "note": "You can have up to 12 open drafts. Done reflects the session state and does not confirm that the change is correct. Markers for sent notes do not form a persistent history after a page reload.",
      "source": "packages/web/src/routes/task-preview/design-notes.ts",
      "sourceLine": 273,
      "keywords": "notatki uwagi design recenzja szkic adnotacje element",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "design",
        "preview"
      ]
    },
    {
      "id": "app-preview",
      "title": "Application preview inside a task",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Open your application beside the conversation without leaving the task.",
      "description": "Preview opens the application in tabs with their own address bar. You can go back and forward through history or reload the page. Place the preview in a column beside the conversation or changes.",
      "where": "Task → Preview",
      "steps": [
        "Enter the application URL in Address.",
        "Open another tab with +.",
        "Use the navigation and reload controls. Save the layout if you want to work beside the chat."
      ],
      "note": "Not every website allows itself to be displayed in an iframe. A local address in a remote cockpit does not provide access to an application on the remote host.",
      "source": "packages/web/src/routes/task-preview/browser-view.tsx",
      "sourceLine": 455,
      "keywords": "preview przegladarka podglad karty localhost aplikacja",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "preview"
      ]
    },
    {
      "id": "start-app",
      "title": "Start an application from the preview",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Start app launches services and opens the detected address.",
      "description": "Cezar reads saved startup commands, called a recipe, or detects a project command. It runs services in terminals inside the task worktree. When it detects the application address, it opens it in Preview.",
      "where": "Task → Preview → Start app / Run the app",
      "steps": [
        "Open an empty Preview.",
        "Check the suggested command or recipe and choose Start app.",
        "If no address appears automatically, check the terminal or enter it manually."
      ],
      "note": "Startup may include installing dependencies. If worktree setup scripts are still running, wait for them to finish.",
      "source": "packages/web/src/routes/task-preview/run-app.tsx",
      "sourceLine": 355,
      "keywords": "start app uruchom aplikacje dev server npm zaleznosci podglad",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "preview"
      ]
    },
    {
      "id": "start-app-recipes",
      "title": "Shared and personal Start app recipes",
      "category": "Workspace",
      "status": "available",
      "summary": "Save service commands and the address to open after startup.",
      "description": "A recipe stores the commands needed to start an application. It can launch several services, each in a separate terminal tab. The team version is saved in repository configuration. A personal recipe overrides it on your computer.",
      "where": "Preview → startup recipe editor",
      "steps": [
        "Open the recipe editor.",
        "Choose the team or personal scope.",
        "Add service commands and an optional address, then save."
      ],
      "note": "The team recipe is stored in .ai/cezar/config.json; the personal recipe is in ~/.cezar/config.json. These commands run on the Cezar host.",
      "source": "packages/web/src/routes/task-preview/start-app-editor.tsx",
      "sourceLine": 20,
      "keywords": "receptura start app kilka serwisow frontend backend komenda zespol",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "preview",
        "terminal"
      ]
    },
    {
      "id": "task-terminal",
      "title": "Terminal in the task worktree",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Run commands in a terminal assigned to the task.",
      "description": "The built-in terminal supports PTY sessions, multiple tabs, shell selection, and resizing. It can appear in the bottom drawer or a separate column.",
      "where": "Task → Terminal",
      "steps": [
        "Open Terminal and check the host, project, and worktree.",
        "Enter a command or add a tab with your chosen shell.",
        "Hide the panel to return to work. End the process or tab when you want it to stop."
      ],
      "note": "Hiding the panel does not stop its processes. Terminal availability depends on host capabilities.",
      "source": "packages/web/src/routes/task-workspace/terminal-drawer.tsx",
      "sourceLine": 93,
      "keywords": "terminal shell pty bash zsh komenda konsola worktree karty",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "terminal"
      ]
    },
    {
      "id": "terminal-discovery",
      "title": "Project commands and detected addresses",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Run detected commands and open addresses printed by the terminal.",
      "description": "The terminal panel lists project commands and addresses detected in process output. Each address shows its availability and actions to open it in Preview or an external browser.",
      "where": "Task → Terminal → Commands / Detected addresses",
      "steps": [
        "Select a project command to run it in a new tab.",
        "Find the address under Detected addresses.",
        "Click Open Preview or Open in Browser."
      ],
      "note": "Detecting a command or address does not run or open it.",
      "source": "packages/web/src/routes/task-workspace/terminal-extras.tsx",
      "sourceLine": 32,
      "keywords": "terminal komendy wykrywanie port localhost adres npm scripts",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "terminal"
      ]
    },
    {
      "id": "task-split-view",
      "title": "Task views side by side",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Compare chat, changes, files, and preview in one layout.",
      "description": "Drag a view tab into the workspace or use Alt/Option + click to open it alongside the current view. You can resize columns and expand a selected one.",
      "where": "Task → view tabs",
      "steps": [
        "Drag Preview or Changes into the workspace.",
        "Adjust the column widths.",
        "Use Full view when one view needs the entire width."
      ],
      "note": "The layout supports up to three columns. Graph is available for tasks with a saved workflow definition.",
      "source": "packages/web/src/routes/task-workspace/layout-cards.tsx",
      "sourceLine": 43,
      "keywords": "split view dzielony ekran kolumny uklad podglad chat diff",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "saved-task-layouts",
      "title": "Saved task layouts",
      "category": "Workspace",
      "status": "available",
      "summary": "Save a panel layout and reuse it in other tasks.",
      "description": "The Layout menu saves the current set of views and their widths under a name. Saved layouts are available to other tasks. Splitting a view temporarily does not create a new template automatically.",
      "where": "Task → Layout",
      "steps": [
        "Arrange the views and adjust their widths.",
        "Open Layout and save the current layout with a name.",
        "Select the saved layout in another task."
      ],
      "note": "Available views depend on the task and host capabilities.",
      "source": "packages/web/src/routes/task-workspace/layout-cards.tsx",
      "sourceLine": 49,
      "keywords": "layout zapisany uklad szablon widokow panele kolumny",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings"
      ]
    },
    {
      "id": "dictation",
      "title": "Dictate a message",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Dictate an instruction, check the transcript, and send it.",
      "description": "The microphone in the message field starts speech recognition. When you finish, you can insert the transcript into a draft or send it immediately. You can also cancel the recording.",
      "where": "Message field → microphone",
      "steps": [
        "Click Start dictation and allow microphone access.",
        "Dictate your instruction.",
        "Choose Insert transcription to review it, or Insert transcription and send."
      ],
      "note": "Dictation requires a supported browser and HTTPS or localhost. Older desktop app versions may need an update.",
      "source": "packages/web/src/components/composer/composer.tsx",
      "sourceLine": 645,
      "keywords": "dyktowanie glos mikrofon speech mowa transkrypcja",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "message-drafts",
      "title": "Message and attachment drafts",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Return to an unsent message after switching tasks or refreshing.",
      "description": "Cezar saves unsent text and attachments as a draft belonging to the task. It removes the draft after a successful send. If the message is rejected, the draft remains available to edit or send again.",
      "where": "Task → Chat → message field",
      "steps": [
        "Start writing a message and add attachments.",
        "Switch to another task, then return.",
        "Finish the draft and send it."
      ],
      "note": "To survive a page refresh, drafts require the host to allow Cezar data to be saved.",
      "source": "packages/web/src/routes/task-thread/task-composer.tsx",
      "sourceLine": 109,
      "keywords": "szkic draft wiadomosc zapisz niezapisany zalaczniki odzyskaj",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "composer-completion",
      "title": "Suggestions for /skills and @files",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Insert skill and file names from suggestions.",
      "description": "Type / to see matching skills, or @ to search file paths exposed by the current conversation view. Selecting a suggestion inserts it at the cursor.",
      "where": "Message field → / or @",
      "steps": [
        "Type / and part of a skill name.",
        "Select a suggestion.",
        "For a file, type @ and part of its path."
      ],
      "note": "The file list depends on the context source for that view. It does not attach the entire repository automatically.",
      "source": "packages/web/src/components/composer/composer.tsx",
      "sourceLine": 281,
      "keywords": "autocomplete podpowiedzi slash skills @ plik wzmianka",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "task-palette",
      "title": "Task command palette",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Find a command, file, or task without searching through tabs.",
      "description": "The palette contains task actions, Git operations, views, saved layouts, and commands to open things in other applications. Use @ to search tasks, > for commands, or # for files. You can also assign keyboard shortcuts to commands.",
      "where": "Task → Task palette",
      "steps": [
        "Open the task palette.",
        "Type a command name or use @, >, or #.",
        "Run the selected item. Use Shift+Enter to assign a shortcut."
      ],
      "note": "Available actions depend on the task state and host capabilities.",
      "source": "packages/web/src/components/task-palette/task-palette.tsx",
      "sourceLine": 794,
      "keywords": "paleta zadania polecenia search pliki skrot klawiszowy",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "task-pin-read",
      "title": "Pinning, names, and read status",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Mark important tasks and results you want to revisit.",
      "description": "Task actions let you pin a task, rename it, and mark it as read or unread. These actions are also available in the task palette.",
      "where": "Task → action menu or Task palette",
      "steps": [
        "Choose Pin for a task you want to keep nearby.",
        "Use Rename to give it a name.",
        "Choose Mark unread when you want to revisit the result later."
      ],
      "note": "Marking a task unread does not resume the agent.",
      "source": "packages/web/src/components/task-palette/commands.tsx",
      "sourceLine": 145,
      "keywords": "pin przypnij nazwa rename przeczytane nieprzeczytane",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "task-copy-context",
      "title": "Copy task details",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Copy a link, branch, worktree path, or resume command.",
      "description": "The Copy section in the palette provides the task ID and link, branch name, worktree path, resume command, and PR link when those values exist.",
      "where": "Task → Task palette → Copy",
      "steps": [
        "Open the palette and find Copy.",
        "Select the information you need.",
        "Paste it into a terminal, editor, or message."
      ],
      "note": "An action appears only when the task has the corresponding value, such as a branch or PR.",
      "source": "packages/web/src/components/task-palette/commands.tsx",
      "sourceLine": 420,
      "keywords": "kopiuj id link zadanie branch sciezka worktree resume",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "task-notes",
      "title": "Task handoff notes",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Read what the agent completed and what remains.",
      "description": "The Notes tab displays the agent's task handoff file as a Markdown document. Notes have their own page, so longer records can be read outside the conversation.",
      "where": "Task → Notes",
      "steps": [
        "Open Notes for the task.",
        "Read the work summary and remaining actions.",
        "Return to Chat to continue."
      ],
      "note": "Content depends on the notes saved by the agent. Task Notes work independently of the optional global Inbox.",
      "source": "packages/web/src/routes/task-thread/task-notes.tsx",
      "sourceLine": 76,
      "keywords": "notes notatki handoff dziennik podsumowanie zadanie",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "diff-comments",
      "title": "Comments on changed lines",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Give the agent feedback on a specific line or range in a diff.",
      "description": "In Changes, attach a comment to a line or range of changes. Comments go into the same message field used for the conversation. You can edit them, remove them, and send them with an instruction.",
      "where": "Task → Changes",
      "steps": [
        "Open a file in the diff and select a line or range.",
        "Add your comment and any further comments.",
        "Send them from the message field below the changes."
      ],
      "note": "Comments go to the agent session. Saving a comment in Cezar does not publish a GitHub review.",
      "source": "packages/web/src/routes/task-git/task-changes.tsx",
      "sourceLine": 84,
      "keywords": "diff komentarz recenzja linia zakres poprawka feedback",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "git",
        "design"
      ]
    },
    {
      "id": "continue-engine",
      "title": "Switch agents when continuing",
      "category": "Agents & models",
      "status": "available",
      "summary": "Choose the agent and model that will continue a closed session.",
      "description": "The continuation field includes agent, model, and account selectors. It keeps the task settings by default, but you can change them when reopening the session.",
      "where": "Task with a closed session → Chat → Continue",
      "steps": [
        "Open a task that can be continued.",
        "Select an agent, account, or model beside the message field.",
        "Write the next instruction and send it."
      ],
      "note": "You can switch backends when continuing, but not during an active turn. Model locking and provider availability may restrict the choice.",
      "source": "packages/web/src/routes/task-thread/follow-up-engine.tsx",
      "sourceLine": 41,
      "keywords": "zmien agenta model kontynuuj continue backend konto",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "live-workflow-graph",
      "title": "Live workflow graph",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "See which steps and loops the task is running through.",
      "description": "The graph shows the saved workflow with current node states, iterations, costs, and transitions. Child task nodes link to their own graphs.",
      "where": "Task → Graph",
      "steps": [
        "Run a workflow and open Graph.",
        "Select a node to inspect its details.",
        "Open the child task if that step created one."
      ],
      "note": "This view shows the execution of a saved workflow definition. It does not allow editing the graph.",
      "source": "packages/web/src/routes/workflow-graph/task-graph.tsx",
      "sourceLine": 101,
      "keywords": "graf workflow diagram petla krok status koszt podzadania",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "monitoring"
      ]
    },
    {
      "id": "dashboard-overview",
      "title": "Workspace dashboard",
      "category": "Workspace",
      "status": "available",
      "summary": "Check the queue, project results, and tasks needing your attention.",
      "description": "The dashboard combines project overviews, the queue, Needs you, and recent results. Each section links to the relevant tasks.",
      "where": "Navigation → Dashboard → Overview",
      "steps": [
        "Open Overview.",
        "Check Needs you and Queue & scheduling.",
        "Select a project or result to open its tasks."
      ],
      "note": "The dashboard reflects the available data sources. Missing data or a disconnected source does not mean there are no tasks.",
      "source": "packages/web/src/routes/dashboard/index.tsx",
      "sourceLine": 381,
      "keywords": "dashboard pulpit przeglad kolejka needs you uwaga projekty wyniki",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "analytics"
      ]
    },
    {
      "id": "dashboard-costs",
      "title": "Costs and trends across projects",
      "category": "Workspace",
      "status": "available",
      "summary": "Compare usage and work over a selected period.",
      "description": "Usage & cost shows usage recorded in retained tasks. You can compare projects, follow daily trends, and compare backends and models.",
      "where": "Dashboard → Usage & cost",
      "steps": [
        "Select a period and a cost or token metric.",
        "Open the project breakdown.",
        "Check Trends and Backends & models."
      ],
      "note": "Costs come from data reported by providers. The view indicates incomplete coverage. It does not replace a full account bill.",
      "source": "packages/web/src/routes/dashboard/index.tsx",
      "sourceLine": 486,
      "keywords": "dashboard koszty wydatki tokeny trendy porownanie modele backend",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "analytics"
      ]
    },
    {
      "id": "dashboard-customize",
      "title": "Customize the dashboard",
      "category": "Workspace",
      "status": "available",
      "summary": "Hide optional modules and arrange their order.",
      "description": "Customize controls the optional modules in the current dashboard view. Reorder them by dragging or using the keyboard. Settings are shared between browsers using the workspace.",
      "where": "Dashboard → Customize",
      "steps": [
        "Turn on the modules you need.",
        "Drag a module by its handle to reorder it.",
        "Use Reset order to restore the default layout."
      ],
      "note": "Some core sections are fixed. The optional modules depend on the selected view.",
      "source": "packages/web/src/routes/dashboard/index.tsx",
      "sourceLine": 242,
      "keywords": "dashboard customize uklad moduly przeciaganie personalizacja",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "analytics"
      ]
    },
    {
      "id": "dashboard-export",
      "title": "Export the dashboard to CSV or print",
      "category": "Workspace",
      "status": "available",
      "summary": "Save data from visible modules or prepare a printout.",
      "description": "The export menu collects the dashboard modules currently shown. CSV is available for further analysis; the print version uses the browser print dialog.",
      "where": "Dashboard → Export",
      "steps": [
        "Set the scope and visible modules.",
        "Choose CSV or print/PDF.",
        "For PDF, choose to save a file in the print dialog."
      ],
      "note": "Export includes the visible modules, not the entire raw workspace history.",
      "source": "packages/web/src/routes/dashboard/export-menu.tsx",
      "sourceLine": 16,
      "keywords": "csv pdf druk eksport dashboard raport tabela",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "analytics"
      ]
    },
    {
      "id": "desktop-app",
      "title": "Cezar desktop app",
      "category": "Platform",
      "status": "available",
      "summary": "Run the cockpit in its own application window.",
      "description": "The desktop app starts a local Cezar process and opens its cockpit in a separate window. It supports updates and switching between installed versions. External links open in the system browser.",
      "where": "Cezar app → version / update menu",
      "steps": [
        "Open the installed Cezar app.",
        "Work in the cockpit inside its window.",
        "Use the version menu to select an installed release."
      ],
      "note": "The desktop app and Cezar itself have separate version numbers. Installer availability depends on the operating system and published installation files.",
      "source": "packages/desktop/src-tauri/src/lib.rs",
      "sourceLine": 579,
      "keywords": "desktop aplikacja okno tauri mac windows linux wersja aktualizacja",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": []
    },
    {
      "id": "create-project",
      "title": "Create a local project or use a GitHub template",
      "category": "Workspace",
      "status": "available",
      "summary": "Create a repository without leaving Cezar.",
      "description": "New project creates a local Git repository and registers it in the workspace. With gh signed in, you can also create a private repository in your account or an organization, either empty or based on a GitHub template.",
      "where": "Add project → New project",
      "steps": [
        "Enter a project name and check the destination folder.",
        "Choose a local project, or Create a private GitHub repository and select its owner.",
        "Choose Empty or From a template. For a template, provide owner/repo or a URL.",
        "Create the project and start its first task."
      ],
      "note": "Templates require GitHub. GitHub repositories are always private when created. If a later step fails, a remote repository that has already been created remains.",
      "source": "packages/web/src/components/create-project-dialog.tsx",
      "sourceLine": 101,
      "keywords": "nowy projekt stworz repozytorium szablon template private github pusty empty",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "git"
      ]
    },
    {
      "id": "agent-plan",
      "title": "The agent's current plan and TODO list",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Follow the agent's plan without searching the conversation.",
      "description": "The Plan panel above the message field shows the latest plan reported by the agent. It lists completed, active, pending, and abandoned items. When collapsed, it keeps the count and current step visible.",
      "where": "Task → Chat → Plan",
      "steps": [
        "Open a task where the agent has reported a plan.",
        "Expand Plan to see individual items.",
        "After the session closes, check whether the plan is marked left unfinished."
      ],
      "note": "The plan comes from the agent; this view does not let you edit your own TODO list. It is separate from workflows and Inbox. Availability depends on the runner, which is the mechanism that launches the agent.",
      "source": "packages/web/src/routes/task-thread/task-thread.tsx",
      "sourceLine": 495,
      "keywords": "plan todo lista zadan agenta kroki postep checklist",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "jira-connection",
      "title": "Connect a project to Jira",
      "category": "Platform",
      "status": "available",
      "summary": "Read issues from a selected Jira project in Cezar.",
      "description": "The connection belongs to a specific repository. After saving credentials, select the Jira project whose issues should appear in the sidebar.",
      "where": "Settings → project → Issue tracker",
      "steps": [
        "Choose Configure Jira credentials.",
        "Enter the Jira URL, account email, and API token, then save.",
        "Choose Browse Jira, find the project, and click Connect."
      ],
      "note": "Cezar stores credentials locally, outside the repository, in a private .env file. The file is not encrypted. The Jira connection does not use the Secrets store.",
      "source": "packages/web/src/routes/settings/tracker-section.tsx",
      "sourceLine": 153,
      "keywords": "jira atlassian integracja token projekt zgloszenia",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "trackers"
      ]
    },
    {
      "id": "linear-connection",
      "title": "Connect a project to Linear",
      "category": "Platform",
      "status": "available",
      "summary": "Browse Linear issues without leaving Cezar.",
      "description": "Save an API key for the repository, then select a Linear project or team. Only that scope appears in the issue view. Other Cezar projects do not inherit the credentials.",
      "where": "Settings → project → Issue tracker",
      "steps": [
        "Choose Configure Linear credentials and save the API key.",
        "Open Browse Linear.",
        "Find and select a project or team, then click Connect."
      ],
      "note": "Changing credentials requires selecting the scope again. Removing the local connection does not revoke the token at the provider.",
      "source": "packages/web/src/routes/settings/tracker-section.tsx",
      "sourceLine": 84,
      "keywords": "linear integracja zespol projekt api token",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "trackers"
      ]
    },
    {
      "id": "tracker-search",
      "title": "Search Jira and Linear issues",
      "category": "Platform",
      "status": "available",
      "summary": "Find an issue by text, state, and labels.",
      "description": "The Jira or Linear view lists issues from the connected project or team. Switch Active to All states to include every state. You can also enter a query and select labels. Issue details open beside the list.",
      "where": "Project panel → Jira / Linear",
      "steps": [
        "Open the connected tracker.",
        "Enter a query and choose Search. Narrow the results with labels or state.",
        "Open an issue. Load more fetches another page."
      ],
      "note": "When New changes are available appears, you can apply the list refresh. Cezar does not silently replace pages you have already loaded.",
      "source": "packages/web/src/routes/tracker/tracker.tsx",
      "sourceLine": 125,
      "keywords": "jira linear szukaj wyszukiwarka etykiety status filtr",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "tracker-task",
      "title": "Create an agent task from Jira or Linear",
      "category": "Platform",
      "status": "available",
      "summary": "Send an issue description to a task with your chosen workflow.",
      "description": "The details panel lets you select a workflow or skills, an agent, and additional instructions. If some source content cannot be transferred, the form identifies what is missing and lets you add context.",
      "where": "Jira / Linear → issue → task panel",
      "steps": [
        "Open the issue and choose a workflow or skills.",
        "Check warnings about omitted content and fill in Supplemental context if needed.",
        "Add a Custom instruction and start the task."
      ],
      "note": "You can also drag an issue row into the message field to prepare an agent task. This does not change the issue content in Jira or Linear.",
      "source": "packages/web/src/routes/tracker/tracker-handoff.tsx",
      "sourceLine": 93,
      "keywords": "jira linear ticket issue task agent przekaz",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "tracker-automations",
      "title": "Automate Jira and Linear events",
      "category": "Platform",
      "status": "available",
      "summary": "Start tasks after selected changes in your issue tracker.",
      "description": "Select a project connection, the events to watch, and the interval between checks. For status changes, specify the destination states. For label additions or removals, select the relevant labels.",
      "where": "Automations → New automation → When Jira / Linear changes",
      "steps": [
        "Connect the tracker in project settings first.",
        "Select events and the required states or labels.",
        "Describe the task, choose its agent, save, and enable the rule."
      ],
      "note": "Available events depend on the connected provider. Once enabled, the rule tracks new changes; earlier matches do not create tasks.",
      "source": "packages/web/src/routes/automations/editor-tracker-fields.tsx",
      "sourceLine": 37,
      "keywords": "jira linear automatyzacja status etykiety zdarzenia",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "trackers",
        "automation"
      ]
    },
    {
      "id": "scheduled-automations",
      "title": "Tasks on a recurring schedule",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Run a task daily, on weekdays, weekly, or every few hours.",
      "description": "The schedule sets when a normal Cezar task starts. You can select a workflow, agent, account, and model, and preview upcoming times before saving.",
      "where": "Automations → New automation → On a schedule",
      "steps": [
        "Choose Every day, Weekdays, Weekly, or Every N hours.",
        "Set the time or interval and check the server time zone beside the fields.",
        "Enter the task, choose its agent, and enable the automation."
      ],
      "note": "The server must be running. Times use its time zone, which may differ from the browser time zone.",
      "source": "packages/web/src/routes/automations/editor-schedule-fields.tsx",
      "sourceLine": 17,
      "keywords": "harmonogram cron codziennie noc nightly cykliczne dni robocze",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "automation-calendar",
      "title": "Automation calendar",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "See scheduled runs in a day or week view.",
      "description": "List, Week, and Day show the same automations in different layouts. The calendar helps you see whether several tasks are scheduled to start together.",
      "where": "Automations → View",
      "steps": [
        "Open Automations.",
        "Switch List to Week or Day.",
        "Select an automation to inspect or change its settings."
      ],
      "note": "Calendar times follow the server schedule. The shared concurrency limit still applies.",
      "source": "packages/web/src/routes/automations/automations-list.tsx",
      "sourceLine": 19,
      "keywords": "kalendarz tydzien dzien automatyzacje harmonogram",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "automation-templates",
      "title": "Automation templates and duplication",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Start from a template or duplicate an existing rule.",
      "description": "The editor includes a template palette. Existing automations have a Duplicate menu action. After copying a rule, you can change its task text and conditions.",
      "where": "Automations → New automation → Start from a template / More → Duplicate",
      "steps": [
        "Open the template palette and choose Use this.",
        "Check the trigger, prompt, and agent.",
        "Save your rule and enable it after checking the settings."
      ],
      "note": "After copying a rule, check its connections and whether the selected skills are available in the destination project.",
      "source": "packages/web/src/routes/automations/template-palette.tsx",
      "sourceLine": 55,
      "keywords": "szablon template duplikuj kopiuj automatyzacja",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "automation-preview",
      "title": "Preview automation matches",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Check which events satisfy a rule's conditions.",
      "description": "Preview matches shows matches for a saved event rule. It is separate from Run now, which can create tasks.",
      "where": "Automations → event rule → Preview matches",
      "steps": [
        "Set and save the GitHub or tracker filters.",
        "Choose Preview matches or Preview saved matches.",
        "Check the results before enabling the rule."
      ],
      "note": "The preview uses saved conditions. Scheduled rules show future run times instead of event matches.",
      "source": "packages/web/src/routes/automations/row-actions.tsx",
      "sourceLine": 53,
      "keywords": "preview podglad dopasowania automatyzacja testuj",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "automation-controls",
      "title": "Run or pause an automation",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Run a rule now or stop future automatic runs.",
      "description": "Each row has Run now and Pause or Enable. Manually running a scheduled rule does not shift its next scheduled time.",
      "where": "Automations → selected rule",
      "steps": [
        "Choose Run now to trigger the rule manually.",
        "Open the resulting task from the result or log.",
        "Use Pause to stop future automatic runs."
      ],
      "note": "Pause does not cancel a task that is already running. Stop that task through its own actions.",
      "source": "packages/web/src/routes/automations/row-actions.tsx",
      "sourceLine": 56,
      "keywords": "run now uruchom teraz pauza pause enable automatyzacja",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "automation-log",
      "title": "Automation logs and launch retries",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Find out why a rule started or skipped a task.",
      "description": "View log shows events, outcomes, and links to created tasks. Filters narrow the list by outcome and event type. A failed task creation may offer Retry.",
      "where": "Automations → More → View log",
      "steps": [
        "Open the rule log.",
        "Filter by outcome or event and read the reason.",
        "If the row offers Retry, fix the cause and retry the launch."
      ],
      "note": "Retry is available for launch-error entries where no task runId was created. It does not retry arbitrary failed workflow steps.",
      "source": "packages/web/src/routes/automations/log.tsx",
      "sourceLine": 61,
      "keywords": "log dziennik automatyzacja blad pominiete retry",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "automation-cli",
      "title": "Copy an automation as a CLI command",
      "category": "Platform",
      "status": "available",
      "summary": "Move a rule definition into the terminal.",
      "description": "The editor shows a command corresponding to the automation configuration. Copy as CLI is also available in the rule menu.",
      "where": "Automations → editor → Copy as CLI",
      "steps": [
        "Configure or open a rule.",
        "Copy the generated command.",
        "Before using it, check the project and connections in the destination environment."
      ],
      "note": "Copying the command does not run the automation.",
      "source": "packages/web/src/routes/automations/copy-as-cli-card.tsx",
      "sourceLine": 13,
      "keywords": "cli terminal automatyzacja kopiuj polecenie",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "automation",
        "terminal",
        "cli"
      ]
    },
    {
      "id": "automation-dispatch",
      "title": "Subtasks in automations",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Allow an automated task to delegate work to subtasks.",
      "description": "The Dispatch switch lets an automated task create subtasks with cez task create. Beside it, set the maximum number of subtasks and the review child option.",
      "where": "Automations → editor → Dispatch",
      "steps": [
        "Enable Dispatch for the rule.",
        "Set Max subtasks.",
        "Optionally enable Review child and save the rule."
      ],
      "note": "The setting is hidden if the server has disabled Dispatch. Subtasks work in their own worktrees and report results to the parent task.",
      "source": "packages/web/src/routes/automations/editor-dispatch-row.tsx",
      "sourceLine": 35,
      "keywords": "dispatch podzadania automatyzacja review child limit",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "project-secrets",
      "title": "Project secrets",
      "category": "Platform",
      "status": "available",
      "summary": "Store keys and passwords needed by project check commands.",
      "description": "Secrets stores encrypted values. The list shows their names and allowed readers, but does not reveal stored values. You can add, replace, or delete a secret.",
      "where": "Settings → project → Secrets",
      "steps": [
        "Enter Name and Value.",
        "Under Who may read it, select Check steps or cezar itself.",
        "Choose Save secret. To replace a value, save it again under the same name."
      ],
      "note": "Agent sessions do not receive secrets. Cezar stores the encryption key in the system keychain. When the keychain is unavailable, it uses a private file and indicates this in the panel.",
      "source": "packages/web/src/routes/settings/secrets-section.tsx",
      "sourceLine": 75,
      "keywords": "sekrety secret vault hasla klucze api checks szyfrowanie",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "security"
      ]
    },
    {
      "id": "workspace-secrets",
      "title": "Secrets shared across projects",
      "category": "Platform",
      "status": "available",
      "summary": "Make the same value available to checks in several projects.",
      "description": "Global Secrets stores values for the workspace. A project can override a shared secret by saving its own value under the same name.",
      "where": "Settings → Global → Secrets",
      "steps": [
        "Add a name and value in global Secrets.",
        "Select the allowed readers and save.",
        "If one project needs a different value, add a secret with the same name in that project's settings."
      ],
      "note": "Only check steps or Cezar itself can read these secrets. Agent sessions cannot access them. Deleting an entry does not revoke the key at its provider.",
      "source": "packages/web/src/routes/settings/secrets-section.tsx",
      "sourceLine": 152,
      "keywords": "sekrety globalne workspace wspolny klucz nadpisanie",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "security"
      ]
    },
    {
      "id": "e2e-setup",
      "title": "Set up TesterArmy e2e",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Add a browser test and the implement-and-e2e workflow to your project.",
      "description": "Set up e2e starts an installation task in a separate worktree. The agent configures TesterArmy for the project development server, adds a basic smoke test, and creates the implement-and-e2e workflow. Review the changes before bringing them into the repository.",
      "where": "Settings → project → External integrations → Test frameworks → TesterArmy e2e",
      "steps": [
        "Check the configuration status and workflow availability.",
        "Optionally enter a key for one of the listed model providers.",
        "Choose Set up e2e, review the installation task, then inspect its branch or draft PR."
      ],
      "note": "Setup requires a Git repository and an available agent. Smoke tests can run without a model key. If provided, the key is stored as a secret for check steps only.",
      "source": "packages/web/src/routes/settings/tester-army-e2e-card.tsx",
      "sourceLine": 122,
      "keywords": "testerarmy e2e testy przegladarka smoke install konfiguracja",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "workflows",
        "settings"
      ]
    },
    {
      "id": "telemetry-consent",
      "title": "Usage data and error report consent",
      "category": "Platform",
      "status": "opt-in",
      "summary": "Enable or disable Cezar diagnostic reporting.",
      "description": "Privacy shows the Share usage data switch and the recipient address. Reporting is off without consent. Turning it off removes the installation identifier for this machine.",
      "where": "Settings → Global → Privacy",
      "steps": [
        "Open Privacy and read the description of collected data.",
        "Set Share usage data to your preference.",
        "Check the message if environment variables block reporting."
      ],
      "note": "CEZ_TELEMETRY=0 and DO_NOT_TRACK=1 block reporting even after consent. The documented data excludes prompts, code, diffs, paths, and repository names.",
      "source": "packages/web/src/routes/settings/privacy-section.tsx",
      "sourceLine": 34,
      "keywords": "privacy telemetry prywatnosc zgoda diagnostyka statystyki",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "security"
      ]
    },
    {
      "id": "provider-connection",
      "title": "Sign in and check agent providers",
      "category": "Agents & models",
      "status": "available",
      "summary": "See which agents are installed and have credentials.",
      "description": "A provider card distinguishes missing installation, no connection, detected credentials, and failed checks. Connect starts the supported sign-in process; Check again repeats the check.",
      "where": "Settings → project → Agents → Providers",
      "steps": [
        "Find the provider and read its status.",
        "If it is Not connected, choose Connect and finish signing in.",
        "Return to Cezar and choose Check again."
      ],
      "note": "If Cezar cannot open a local terminal, it provides a command to run manually. Detected credentials do not guarantee available account quota.",
      "source": "packages/web/src/routes/settings/provider-settings.tsx",
      "sourceLine": 236,
      "keywords": "provider dostawca connect login logowanie authentication",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "agents",
        "settings"
      ]
    },
    {
      "id": "provider-disable",
      "title": "Disable a provider in Cezar",
      "category": "Agents & models",
      "status": "available",
      "summary": "Prevent Cezar from using a selected provider.",
      "description": "The Use switch records whether Cezar may use that provider. A disabled provider cannot be selected as the default model in this panel.",
      "where": "Settings → project → Agents → Providers",
      "steps": [
        "Find the provider card.",
        "Turn off Use beside its name.",
        "Choose another available agent for new tasks."
      ],
      "note": "This does not uninstall the CLI or sign the account out of its provider.",
      "source": "packages/web/src/routes/settings/provider-settings.tsx",
      "sourceLine": 255,
      "keywords": "provider wylacz dostawca agent enable disable",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "agents",
        "settings"
      ]
    },
    {
      "id": "default-models",
      "title": "Default model for each agent",
      "category": "Agents & models",
      "status": "available",
      "summary": "Choose the model preselected in this project's task form.",
      "description": "Default models lets you select a model for each runner. Auto leaves the choice to the agent. Selecting a specific model saves it as a project setting.",
      "where": "Settings → project → Agents → Default models",
      "steps": [
        "Connect the provider.",
        "Select a model or auto (default) in its row.",
        "Open a new task and check the preselected model."
      ],
      "note": "When modelsLocked is active, the panel only displays the model from the agent's native settings.",
      "source": "packages/web/src/routes/settings/agents-section.tsx",
      "sourceLine": 94,
      "keywords": "model domyslny default auto agent runner",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "agents",
        "settings"
      ]
    },
    {
      "id": "workspace-agent-defaults",
      "title": "Default agent and models for new projects",
      "category": "Agents & models",
      "status": "available",
      "summary": "Set shared defaults instead of configuring each repository from scratch.",
      "description": "Defaults for new projects sets the runner, account, and models used when a project has no saved choice of its own. Project-specific settings take precedence.",
      "where": "Settings → Global → Agent accounts → Defaults for new projects",
      "steps": [
        "Select the default agent and account.",
        "Choose models under Default model per agent.",
        "A new project without its own settings inherits these values."
      ],
      "note": "Changing these defaults does not overwrite an explicit choice in an existing project.",
      "source": "packages/web/src/routes/settings/accounts-section.tsx",
      "sourceLine": 397,
      "keywords": "domyslne modele konta globalnie workspace projekty",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "agents",
        "settings"
      ]
    },
    {
      "id": "account-recheck",
      "title": "Check a specific account after sign-in",
      "category": "Agents & models",
      "status": "available",
      "summary": "Verify an agent account after signing in again.",
      "description": "Each profile shows its configuration directory and authentication status. Connect acts on the selected account. Check again refreshes the result without waiting for the cached check to expire.",
      "where": "Settings → Global → Agent accounts → account",
      "steps": [
        "Find the account and check its directory.",
        "If sign-in is needed, choose Connect.",
        "After signing in, click Check again. Show details expands the details."
      ],
      "note": "In a remote environment, Cezar may provide a command to run manually instead of opening a terminal.",
      "source": "packages/web/src/routes/settings/accounts-section.tsx",
      "sourceLine": 534,
      "keywords": "konto profil login sprawdz recheck connect",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "agents",
        "settings"
      ]
    },
    {
      "id": "branch-naming",
      "title": "Branch names from task instructions",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Describe how Cezar should name branches for new tasks.",
      "description": "Branch naming accepts an instruction for generating names. Cezar uses it with the task's first prompt to generate a branch name, then creates the worktree.",
      "where": "Settings → project → Instructions → Branch naming",
      "steps": [
        "Enter your convention, such as a prefix and how to shorten the topic.",
        "Save the setting.",
        "Start a new task and check its branch name."
      ],
      "note": "Clearing the field restores default naming. It does not rename existing branches.",
      "source": "packages/web/src/routes/settings/instructions-section.tsx",
      "sourceLine": 115,
      "keywords": "branch naming nazwy galezi konwencja prefiks",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "git",
        "settings"
      ]
    },
    {
      "id": "instance-branding",
      "title": "Custom Cezar name and logo",
      "category": "Workspace",
      "status": "available",
      "summary": "Distinguish instances by their name and logo in the cockpit.",
      "description": "Appearance lets you set an instance name for the sidebar and browser tab. You can also upload a logo stored on the server machine.",
      "where": "Settings → Global → Appearance → Instance name / Logo",
      "steps": [
        "Enter the instance name and save.",
        "Choose Choose logo and select an image file.",
        "Check the preview, then choose Save logo. Remove logo clears the custom logo."
      ],
      "note": "Logos have a 2 MB limit. Supported formats are PNG, JPEG, WebP, GIF, AVIF, and safe SVG.",
      "source": "packages/web/src/routes/settings/appearance.tsx",
      "sourceLine": 189,
      "keywords": "branding logo nazwa instancja wyglad",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings"
      ]
    },
    {
      "id": "project-order",
      "title": "Manual project order",
      "category": "Workspace",
      "status": "available",
      "summary": "Arrange projects in the sidebar.",
      "description": "Drag projects in the navigation to reorder them. Appearance provides Reset order to clear your custom order and restore sorting by the most recently opened project.",
      "where": "Project sidebar / Settings → Global → Appearance → Project order",
      "steps": [
        "Drag projects in the sidebar.",
        "Open Appearance to undo the custom order.",
        "Choose Reset order."
      ],
      "note": "Reset appears only when there are multiple projects and a saved manual order. The order is shared between browsers using this instance.",
      "source": "packages/web/src/routes/settings/appearance.tsx",
      "sourceLine": 131,
      "keywords": "kolejnosc projekty przeciaganie sortowanie sidebar",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings"
      ]
    },
    {
      "id": "project-folders",
      "title": "Default browsing and checkout folders",
      "category": "Workspace",
      "status": "available",
      "summary": "Set separate folders for browsing and new repositories.",
      "description": "Default browse folder sets where folder browsing starts and the highest directory accessible in the picker. Default checkout folder sets the destination for Clone from GitHub and New project.",
      "where": "Settings → Global → Projects",
      "steps": [
        "Set Default browse folder for Open local folder.",
        "Set Default checkout folder for new projects.",
        "Save and check the relevant add-project form."
      ],
      "note": "Changing the checkout folder does not move registered projects.",
      "source": "packages/web/src/routes/settings/projects-section.tsx",
      "sourceLine": 122,
      "keywords": "folder katalog klonowanie repozytorium sciezka browse checkout",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings"
      ]
    },
    {
      "id": "open-project-app",
      "title": "Open a project in an editor or terminal",
      "category": "Workspace",
      "status": "available",
      "summary": "Open the project folder in a local application from settings.",
      "description": "Project folder shows the full path with a Copy button. Open with lists detected editors, file managers, and terminals.",
      "where": "Settings → project → Project folder → Open with",
      "steps": [
        "Check that the path belongs to the intended project.",
        "Use Copy to copy it, or open Open with.",
        "Choose an application from the detected list."
      ],
      "note": "The menu is hidden in hosted mode or when no applications are available. This action does not start an agent session in the main checkout.",
      "source": "packages/web/src/routes/settings/project-location.tsx",
      "sourceLine": 47,
      "keywords": "otworz edytor terminal folder finder explorer vscode",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings"
      ]
    },
    {
      "id": "host-resources",
      "title": "Host CPU and memory usage",
      "category": "Workspace",
      "status": "available",
      "summary": "Check the load on the machine running your agents.",
      "description": "Machine shows CPU usage, occupied memory, and the time of the last measurement. The local view also includes a short history chart. In a resource-limited container, it shows the capacity actually available to the container.",
      "where": "Settings → Global → Resources → Machine",
      "steps": [
        "Open Resources.",
        "Check CPU, RAM, and the updated timestamp.",
        "Compare the load with the concurrent task limit."
      ],
      "note": "The remote cockpit labels measurements last known. It does not present them as a continuous local chart.",
      "source": "packages/web/src/routes/settings/machine-card.tsx",
      "sourceLine": 47,
      "keywords": "cpu ram pamiec host zasoby monitoring kontener",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "settings",
        "analytics",
        "monitoring"
      ]
    },
    {
      "id": "waiting-timeout",
      "title": "Idle timeout for waiting sessions",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Choose how long an ordinary waiting session stays open.",
      "description": "Waiting-session idle timeout sets how many inactive minutes Cezar waits before closing a waiting backend session. You can return to the task later and resume it with Continue.",
      "where": "Settings → Global → Resources → Waiting-session idle timeout",
      "steps": [
        "Set the number of minutes.",
        "Choose 0 to keep the session open without a time limit.",
        "Resume a closed session with Continue on the task."
      ],
      "note": "Sessions marked as monitoring are exempt from this timeout.",
      "source": "packages/web/src/routes/settings/resources-section.tsx",
      "sourceLine": 167,
      "keywords": "idle timeout oczekiwanie bezczynnosc sesja continue",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "settings",
        "monitoring"
      ]
    },
    {
      "id": "composer-defaults",
      "title": "Default Autonomous and worktree settings",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Set initial task-form choices for all projects.",
      "description": "New task defaults sets the initial Autonomous and Use a worktree values. Choose On, Off, or Inherit environment. You can override the choice in an individual task form.",
      "where": "Settings → Global → Resources → New task defaults",
      "steps": [
        "Set Autonomous by default.",
        "Set Use a worktree by default.",
        "Check a new task. You can change the choice for that run."
      ],
      "note": "Multistep and parallel runs retain their required isolation. Inherited Autonomous behavior can depend on whether you are starting a skill or a workflow.",
      "source": "packages/web/src/routes/settings/resources-section.tsx",
      "sourceLine": 301,
      "keywords": "autonomous worktree domyslnie kompozytor ustawienia",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "interface",
        "settings"
      ]
    },
    {
      "id": "automation-once",
      "title": "A one-time automation",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Schedule one task run for a specific date.",
      "description": "Once adds a date and time in the server time zone. After its single scheduled time is used, the rule is paused and the log explains why.",
      "where": "Automations → New automation → On a schedule → Once",
      "steps": [
        "Choose Once and set the date and time.",
        "Enter the task and choose its agent.",
        "Check the time preview, save, and enable the rule."
      ],
      "note": "The CLI accepts a one-time date with --at \"YYYY-MM-DD HH:MM\". The server must be running, and missed-run catch-up rules apply.",
      "source": "packages/web/src/routes/automations/editor-schedule-fields.tsx",
      "sourceLine": 19,
      "keywords": "once jednorazowo data godzina automatyzacja termin",
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "tags": [
        "workflows",
        "automation"
      ]
    },
    {
      "id": "private-project-mcp",
      "title": "Private project MCP servers",
      "category": "Agents & models",
      "status": "available",
      "summary": "Add agent MCP integrations without committing their configuration to Git.",
      "description": "The .ai/cezar/mcp.local.json file contains an mcpServers section. Cezar attaches these servers when starting an agent; it does not copy the file into the worktree.",
      "where": "Settings → project → Agent config → MCP → .ai/cezar/mcp.local.json",
      "steps": [
        "Select a supported agent and the private MCP file in Agent config.",
        "Add the configuration in mcpServers format and save.",
        "Start a new task and check that the agent can access the server."
      ],
      "note": "Claude, Codex, OpenCode, Junie, and Copilot support this configuration. Cursor and pi do not. Git ignores the file, but its contents are not encrypted like values in Secrets.",
      "source": "packages/cezar/src/agent-config/catalog.ts",
      "sourceLine": 441,
      "keywords": "mcp prywatne integracje serwery lokalne tools narzedzia",
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "agents",
        "settings",
        "security"
      ]
    },
    {
      "id": "workflow-simulation",
      "title": "Simulate a workflow",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Walk through graph paths before starting agents.",
      "description": "Simulation lets you select each node's result and check which connection the workflow follows next. Start it with Simulate in the editor.",
      "where": "Workflows → editor → Simulate",
      "steps": [
        "Open the workflow in the editor.",
        "Click Simulate.",
        "Choose node outcomes and inspect the next connections."
      ],
      "note": "Simulation checks graph flow. It does not run agents or commands, or assess code correctness.",
      "source": "packages/web/src/routes/workflow-graph/workflow-graph.tsx",
      "sourceLine": 744,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "symulacja simulate test bez tokenów workflow",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-layout",
      "title": "Automatic graph layout",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Arrange node positions with one action.",
      "description": "Tidy up arranges the nodes in the graph. Save the workflow to keep the new layout.",
      "where": "Workflows → editor → Tidy up",
      "steps": [
        "Open the graph.",
        "Click Tidy up.",
        "Save the workflow to retain the layout."
      ],
      "note": "Connections and workflow logic stay unchanged.",
      "source": "packages/web/src/routes/workflow-graph/workflow-graph.tsx",
      "sourceLine": 732,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "graf układ layout rozmieszczenie",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-fork-join",
      "title": "Parallel Fork / Join branches",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Run two to four agents and combine their results.",
      "description": "Fork splits work between two to four agents. Connect their branches to one Join node, which waits for all results or the first success.",
      "where": "Workflows → Add node → Fork / Join",
      "steps": [
        "Add Fork and set the number of branches.",
        "Connect each branch to an agent, then connect the agents to one Join.",
        "In Join, choose whether to wait for all results or the first success."
      ],
      "note": "Each agent works in a separate worktree. In any mode, the first success cancels the remaining branches.",
      "source": "packages/cezar/src/workflows/graph.ts",
      "sourceLine": 115,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "fork join równolegle agenci podzadania",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-human-gate",
      "title": "Human approval",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Pause the workflow for an Approve or Reject decision.",
      "description": "Human gate pauses the workflow and displays a request for a decision. You can connect separate Approve and Reject paths. If you set a timeout, also connect the output that handles it.",
      "where": "Workflows → Add node → Human gate",
      "steps": [
        "Add Human gate and write the request.",
        "Connect separate approve and reject paths.",
        "Optionally set a timeout and handle its output."
      ],
      "note": "While waiting for the decision, the task releases its concurrent execution slot.",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 5668,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "akceptacja zatwierdzenie decyzja approve reject human gate",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-ask-user",
      "title": "Ask a question during a workflow",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Collect a user answer and pass it to the next node.",
      "description": "The question node collects a user answer and passes it through the answered output. Refer to it in a later prompt with {{nodes.ID.answer}}.",
      "where": "Workflows → Add node → Ask user",
      "steps": [
        "Add the question and optional answers.",
        "Connect answered to the next step.",
        "Use {{nodes.ID.answer}} in the next prompt."
      ],
      "note": "You can provide up to six answer options and a response timeout.",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 5679,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "pytanie odpowiedź ask user formularz",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-conditions",
      "title": "Conditions and branching",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Choose a path based on code changes, a node result, or a branch.",
      "description": "If evaluates a condition and directs work to true or false. Conditions can check diff size, changed file paths, another node's result, or the base branch.",
      "where": "Workflows → Add node → If",
      "steps": [
        "Add If.",
        "Select a condition: diff size, file paths, node result, or base branch.",
        "Connect true and false."
      ],
      "note": "In path patterns, * matches names within one directory and ** matches across directories.",
      "source": "packages/cezar/src/workflows/graph.ts",
      "sourceLine": 131,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "if warunek rozgałęzienie diff paths branch",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-verdicts",
      "title": "Agent verdicts that control the workflow",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Follow different paths after approval and review feedback.",
      "description": "Name the possible verdicts and connect their corresponding outputs. Explain in the prompt when the agent should choose each result. The workflow can then take different steps after approval or review feedback.",
      "where": "Workflows → Agent node → verdicts",
      "steps": [
        "Name the possible verdicts.",
        "Connect outputs with those names.",
        "Explain in the prompt when to choose each verdict."
      ],
      "note": "The agent returns a verdict through CEZ:VERDICT. If it omits the verdict, it gets one reminder. Another missing verdict causes the node to fail.",
      "source": "packages/cezar/src/workflows/graph.ts",
      "sourceLine": 63,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "review verdict recenzja werdykt approve changes",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-subworkflow",
      "title": "Run a workflow inside another workflow",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Call a saved workflow as a separate subtask.",
      "description": "Sub-workflow starts a saved workflow as a separate subtask. Select its name and prompt, then connect the next steps to done and failed.",
      "where": "Workflows → Add node → Sub-workflow",
      "steps": [
        "Add Sub-workflow.",
        "Select the saved workflow name and prompt.",
        "Connect done and failed to the next steps."
      ],
      "note": "The subtask has its own worktree, and its budget is allocated from the parent task.",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 5779,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "zagnieżdżony sub workflow ponowne użycie kompozycja",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-outputs",
      "title": "Use node results in later steps",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Insert an answer, summary, PR URL, or check result into the next prompt.",
      "description": "A later prompt can use an answer, summary, PR URL, or check result from an earlier node. Use {{nodes.ID.field}}, for example {{nodes.tests.output}}. The node providing the data must come earlier in the connected execution path.",
      "where": "Workflow YAML / node text fields",
      "steps": [
        "Check the node name and its available outputs.",
        "Insert {{nodes.ID.field}}, for example {{nodes.tests.output}}.",
        "Connect the source node before the node that uses its result."
      ],
      "note": "Available fields depend on the node type. {{task}} still refers to the task text.",
      "source": "packages/cezar/src/workflows/graph.ts",
      "sourceLine": 199,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "zmienne outputs szablon template wynik prompt",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-wait-ci",
      "title": "Wait for CI results",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Pause the flow until pull request checks finish.",
      "description": "Wait for CI waits for pull request checks to finish. Place it after a step that creates or identifies a PR, then set a timeout and polling interval. The green, red, timeout, and failed outputs handle each outcome.",
      "where": "Workflows → Add node → Wait for CI",
      "steps": [
        "Add Wait for CI after a step that creates or identifies a PR.",
        "Set the timeout and polling interval.",
        "Connect green, red, timeout, and failed."
      ],
      "note": "If the task has no PR, the workflow takes failed. Waiting does not occupy a maxParallel slot.",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 5926,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "CI checks github czekanie green red timeout",
      "tags": [
        "workflows",
        "monitoring"
      ]
    },
    {
      "id": "workflow-git-actions",
      "title": "Commit, push, and draft PR nodes",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Run Git operations as explicit workflow steps.",
      "description": "Git operations can be separate graph nodes. Enter a commit message in Commit, then add Push or Draft PR as needed. Connect the success and failure outputs.",
      "where": "Workflows → Add node → Git section",
      "steps": [
        "Add Commit with a message.",
        "Add Push or Draft PR.",
        "Handle the success and failure outputs."
      ],
      "note": "Draft PR uses gh. The repository must have access to the relevant GitHub instance.",
      "source": "packages/cezar/src/workflows/graph.ts",
      "sourceLine": 221,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "git commit push draft pull request workflow",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-sync-base",
      "title": "Sync with the base branch",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Merge the latest base branch and pass conflicts to an agent.",
      "description": "Sync with base merges the current base branch into the task branch. Connect done to the next step. Connect conflict to an agent and pass the conflict list with {{nodes.ID.conflicts}}.",
      "where": "Workflows → Add node → Sync with base",
      "steps": [
        "Add Sync with base.",
        "Connect done to the next step.",
        "Connect conflict to a conflict-resolution agent and pass {{nodes.ID.conflicts}}."
      ],
      "note": "If there is a conflict, the merge stays in progress so the agent can resolve it.",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 5835,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "merge baza konflikt sync base workflow",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-pr-actions",
      "title": "Comments, labels, and reviewers in workflows",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Comment on an issue or PR, request a review, or mark a PR ready.",
      "description": "GitHub nodes can comment on an issue or PR, set labels, request a review, or mark a PR ready. Fill in the content or recipients for the selected node and connect done and failed.",
      "where": "Workflows → Add node → PR comment / Update PR / Issue comment",
      "steps": [
        "Add the GitHub node you need.",
        "Enter comment text, labels, or reviewers.",
        "Connect done and failed."
      ],
      "note": "Issue comment uses the issue linked to the task by default.",
      "source": "packages/cezar/src/workflows/graph.ts",
      "sourceLine": 224,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github komentarz etykieta label reviewers ready PR",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-webhook",
      "title": "Send a webhook from a workflow",
      "category": "Workflows & skills",
      "status": "opt-in",
      "summary": "Send an HTTP POST after a selected step.",
      "description": "The Webhook node sends an HTTP POST request to a supplied HTTP or HTTPS address. Place it after the step that should trigger the message, then connect done and failed. Enable the feature with CEZ_WORKFLOW_WEBHOOKS=1.",
      "where": "CEZ_WORKFLOW_WEBHOOKS=1 → Workflows → Webhook",
      "steps": [
        "Start Cezar with CEZ_WORKFLOW_WEBHOOKS=1.",
        "Add a Webhook node and an HTTP or HTTPS URL.",
        "Connect done and failed."
      ],
      "note": "Webhooks are disabled by default. With CEZ_DRY_RUN=1, Cezar sends no requests.",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 5890,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "webhook HTTP POST powiadomienie integracja workflow",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "workflow-templates",
      "title": "Templates for implementation and review",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Start with implementation, tests, review, a PR, or CI repair.",
      "description": "Templates cover implementation with tests (implement-and-verify), implementation with review and a PR (implement-review-pr), review by several agents (review-council), and CI repair (fix-ci). Select a template, adapt its test commands and prompts, then save your own copy.",
      "where": "Workflows → built-in templates",
      "steps": [
        "Choose implement-and-verify, implement-review-pr, review-council, or fix-ci.",
        "Adapt test commands and prompts.",
        "Save your own copy of the workflow."
      ],
      "note": "review-council runs three reviewers and a separate agent that decides the outcome.",
      "source": "packages/cezar/src/workflows/templates.ts",
      "sourceLine": 203,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "szablony review council fix CI implement testy",
      "tags": [
        "workflows"
      ]
    },
    {
      "id": "task-dispatch",
      "title": "Delegate subtasks with Dispatch",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Let an agent split work into separate Cezar tasks.",
      "description": "With Dispatch enabled, an agent can divide work into separate Cezar tasks. Describe the expected result and division of work in your instruction. Created subtasks appear beneath their parent.",
      "where": "New task → Dispatch",
      "steps": [
        "Enable Dispatch when creating a task.",
        "Describe the expected result and division of work.",
        "Follow subtasks beneath the parent task."
      ],
      "note": "Dispatch is available by default. CEZ_DISPATCH=0 disables it on the server. Subtasks have separate sessions and worktrees.",
      "source": "packages/web/src/components/dispatch-toggle.tsx",
      "sourceLine": 100,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "dispatch delegowanie podzadania drzewo agenci",
      "tags": [
        "interface",
        "automation",
        "agents"
      ]
    },
    {
      "id": "dispatch-limits",
      "title": "Subtask limits and models",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Limit subtask count, concurrency, and budget, and choose their agent.",
      "description": "Dispatch settings lets you set the total subtask count (Max subtasks) and the number running together (In flight at once). You can also select their runner, model, and budget.",
      "where": "New task → arrow beside Dispatch",
      "steps": [
        "Open Dispatch settings.",
        "Set Max subtasks and In flight at once.",
        "Choose the runner, model, and subtask budget."
      ],
      "note": "At most four subtasks can run together. When a subtask is settled, the unused part of its reserved budget returns to the parent task.",
      "source": "packages/web/src/components/dispatch-toggle.tsx",
      "sourceLine": 315,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "dispatch budżet budget USD limit równoległość model",
      "tags": [
        "interface",
        "automation",
        "agents"
      ]
    },
    {
      "id": "dispatch-cli",
      "title": "Create and report subtasks from the CLI",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Create a subtask, inspect its tree, and return a structured result.",
      "description": "cez task commands create subtasks, display their list and tree, and return a result in a defined format. A subtask report contains its status and result.",
      "where": "Agent terminal → cez task",
      "steps": [
        "In a task context, use cez task create \"goal\".",
        "Check cez task list or cez task tree <id>.",
        "Return cez task report --status done --result \"result\"."
      ],
      "note": "The commands require a running cockpit and CEZ_API_URL. Creation also requires CEZ_TASK_ID. Headless cezar run does not expose Dispatch.",
      "source": "packages/cezar/src/dispatch/task-cli.ts",
      "sourceLine": 27,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "CLI task create report tree list terminal",
      "tags": [
        "interface",
        "terminal",
        "cli"
      ]
    },
    {
      "id": "dispatch-review",
      "title": "A subtask that reviews another branch",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Ask a separate agent to assess changes and return a verdict.",
      "description": "Create a review subtask and use --review-of to identify the branch or run to inspect. The agent receives the review scope and expected evidence, then returns approve, changes, or reject.",
      "where": "CLI → cez task create --kind review",
      "steps": [
        "Use cez task create \"review the changes\" --kind review --review-of <branch or run>.",
        "Add the scope and expected evidence.",
        "Read the report with approve, changes, or reject."
      ],
      "note": "Review is a separate assignment type intended for assessment rather than implementation.",
      "source": "packages/cezar/src/dispatch/task-cli.ts",
      "sourceLine": 29,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "review recenzent review-of approve changes reject",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "runs-cli",
      "title": "List tasks in the terminal",
      "category": "Platform",
      "status": "available",
      "summary": "List tasks from a running Cezar instance, including JSON output.",
      "description": "cez runs list displays tasks from a running Cezar instance. --status filters by state, --all includes the archive, and --json returns data for further processing.",
      "where": "Terminal → cez runs list",
      "steps": [
        "Set CEZ_API_URL to the running cockpit address.",
        "Run cez runs list --status running,review.",
        "Add --json for automated processing or --all to include archived tasks."
      ],
      "note": "This command only reads data. CEZ_PROJECT_ID selects the project. Without it, Cezar uses the startup project.",
      "source": "packages/cezar/src/runs/runs-cli.ts",
      "sourceLine": 43,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "terminal CLI json lista zadania status skrypt",
      "tags": [
        "terminal",
        "cli"
      ]
    },
    {
      "id": "cursor-agent",
      "title": "Cursor agent",
      "category": "Agents & models",
      "status": "available",
      "summary": "Run tasks through the local Cursor Agent CLI.",
      "description": "Cezar runs tasks through Cursor Agent CLI installed and signed in on your computer. Select Cursor when creating a task, then choose a model or auto.",
      "where": "New task → runner → Cursor",
      "steps": [
        "Install the local agent CLI and sign in.",
        "Start Cezar and select Cursor.",
        "Choose a model or leave auto."
      ],
      "note": "Continue opens a fresh session. This backend does not report tokens or cost, so a zero in the header does not confirm a free run.",
      "source": "packages/cezar/src/core/cursor-agent-runner.ts",
      "sourceLine": 146,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "cursor agent backend runner model",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "junie-agent",
      "title": "JetBrains Junie agent",
      "category": "Agents & models",
      "status": "experimental",
      "summary": "Run tasks through the local Junie CLI and ACP protocol.",
      "description": "The Junie runner connects Cezar to the local JetBrains Junie CLI through ACP. Install the CLI, sign in, then select Junie in the task form.",
      "where": "New task → runner → Junie",
      "steps": [
        "Install Junie CLI and sign in.",
        "Select Junie when creating a task.",
        "Start the task and follow the session."
      ],
      "note": "Junie support is experimental. The runner automatically approves permissions and does not enforce allowedTools.",
      "source": "packages/cezar/src/core/junie-runner.ts",
      "sourceLine": 73,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "junie jetbrains ACP agent backend",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "copilot-agent",
      "title": "GitHub Copilot agent",
      "category": "Agents & models",
      "status": "available",
      "summary": "Run Copilot CLI through ACP and continue the conversation in its session.",
      "description": "Cezar uses an installed and authenticated Copilot CLI through ACP. Select Copilot when creating a task, then send follow-up messages in that task session.",
      "where": "New task → runner → Copilot",
      "steps": [
        "Install Copilot CLI and sign in.",
        "Select Copilot for a new task.",
        "Send follow-up messages in the task session."
      ],
      "note": "The runner uses --allow-all-tools. The code supports session/load, but the source describes history restoration after resuming as unverified.",
      "source": "packages/cezar/src/core/copilot-acp-runner.ts",
      "sourceLine": 51,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "copilot github ACP agent backend",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "live-model-catalog",
      "title": "Models available on your machine",
      "category": "Agents & models",
      "status": "available",
      "summary": "Choose models read from local CLIs rather than a fixed release list.",
      "description": "The model list uses data read from local agent CLIs. Select an installed agent, open the list, and choose a model. auto leaves the choice to the CLI.",
      "where": "New task → model selector",
      "steps": [
        "Select an installed agent.",
        "Open the model list.",
        "Choose a model or auto to leave the choice to the CLI."
      ],
      "note": "If the CLI lookup fails, the list uses cached data or fallback entries. The pi agent has no local model catalog.",
      "source": "packages/cezar/src/core/runner-model-catalog.ts",
      "sourceLine": 57,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "modele model discovery catalog auto lista dostępne",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "mixed-agent-workflow",
      "title": "Different agents in one workflow",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Assign implementation to one runner and review to another.",
      "description": "Each implementation or review node can use its own runner and model. You can assign changes to one agent and their review to another, then connect these steps to a test of the result.",
      "where": "Workflows → Agent → runner / model",
      "steps": [
        "Add separate implementation and review nodes.",
        "Choose a runner and optional model in each.",
        "Connect them to a test that checks the result."
      ],
      "note": "The choice in a step takes precedence over the task agent and the project's default runner.",
      "source": "packages/cezar/src/workflows/types.ts",
      "sourceLine": 29,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "claude codex mieszane różni agenci model review",
      "tags": [
        "workflows",
        "agents"
      ]
    },
    {
      "id": "init-workflow-skill",
      "title": "Create a sample workflow and skill from the CLI",
      "category": "Platform",
      "status": "available",
      "summary": "Create starter files for your own instructions and workflows.",
      "description": "cezar init creates an example workflow and skill in .ai/cezar/. Run it in the repository, then adapt the saved instructions and workflow to your project.",
      "where": "Repository terminal → cezar init",
      "steps": [
        "Open a terminal in the repository.",
        "Run cezar init.",
        "Adapt the example workflow and skill in .ai/cezar/."
      ],
      "note": "Initialization is optional. Cezar also works without manually prepared configuration.",
      "source": "packages/cezar/src/index.ts",
      "sourceLine": 64,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "init konfiguracja przykład workflow skill CLI",
      "tags": [
        "cli"
      ]
    },
    {
      "id": "trunk-based",
      "title": "Trunk-based development",
      "category": "Git & GitHub",
      "status": "opt-in",
      "summary": "Work directly in the checkout and save verified changes to the base branch.",
      "description": "In Trunk-based mode, tasks work directly in the checkout, the project's working directory. Verified changes go to the base branch. Where tasks work and How changes land define how this happens and which checks are required.",
      "where": "Project settings → Tasks → Development model",
      "steps": [
        "Choose Trunk-based.",
        "Check Where tasks work and How changes land.",
        "Set the checks required before changes are saved."
      ],
      "note": "Tasks that write changes run one at a time in the shared checkout. You can still explicitly choose a separate worktree for a task.",
      "source": "packages/web/src/routes/settings/trunk-based-fields.tsx",
      "sourceLine": 43,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "trunk based checkout in place baza bez PR",
      "tags": [
        "git",
        "automation"
      ]
    },
    {
      "id": "auto-land",
      "title": "Save changes to the base branch",
      "category": "Git & GitHub",
      "status": "opt-in",
      "summary": "Commit, synchronize, check, and push a completed task's changes to the base branch.",
      "description": "Auto-land commits task changes, synchronizes them, runs checks, and pushes them to the base branch. After reviewing Changes, use Commit to <base> or Finish. An Autonomous task can complete this process itself.",
      "where": "Project settings → Tasks → How changes land",
      "steps": [
        "Enable auto-land for work in the checkout.",
        "Review Changes and send any corrections.",
        "Use Commit to <base> or Finish. An Autonomous task may finish landing on its own."
      ],
      "note": "The commit includes all checkout changes outside .ai/cezar/, including manual edits. Git-tracked configuration cannot grant this permission.",
      "source": "packages/web/src/routes/settings/trunk-based-fields.tsx",
      "sourceLine": 85,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "auto land commit push base trunk finish",
      "tags": [
        "git",
        "automation"
      ]
    },
    {
      "id": "landing-checks",
      "title": "Checks before landing on the base branch",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Require check commands to pass before changes are pushed.",
      "description": "Enter the commands that must pass before changes are pushed to the base branch, such as tests and lint. Cezar runs these checks during auto-land.",
      "where": "Project settings → Tasks → Required checks",
      "steps": [
        "Enter project commands, such as tests and lint.",
        "Save the settings.",
        "Run a task with auto-land and check the results."
      ],
      "note": "A failed check blocks the push. The error can return to an open agent session for correction.",
      "source": "packages/web/src/routes/settings/trunk-based-fields.tsx",
      "sourceLine": 200,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "required checks auto land testy lint push",
      "tags": [
        "git",
        "automation"
      ]
    },
    {
      "id": "ask-mode",
      "title": "Ask: questions about the repository",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Ask about code without creating a branch or worktree.",
      "description": "Choose Ask to ask the agent about code without creating a branch or worktree. It is available for projects working in the checkout. In trunk-based mode, a question ending in ? can enable Ask automatically.",
      "where": "New task → Ask (in-place or trunk-based projects)",
      "steps": [
        "In a project working in the checkout, choose Ask.",
        "Write a question about the repository.",
        "Send it to the agent. In trunk-based mode, a question ending in ? can enable Ask automatically."
      ],
      "note": "Cezar requests read-only work. Claude enforces the tool restriction; other runners may treat it only as an instruction.",
      "source": "packages/web/src/routes/new-task.tsx",
      "sourceLine": 850,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "ask pytanie read only tylko odczyt kod wyjaśnij",
      "tags": [
        "interface",
        "agents"
      ]
    },
    {
      "id": "default-task-skills",
      "title": "Default skills for tasks and questions",
      "category": "Workflows & skills",
      "status": "available",
      "summary": "Use different starting instructions for changes and Ask mode.",
      "description": "New task skill sets the default instructions for making changes. Ask skill sets them for repository questions. These separate settings let the two task types start with different instructions.",
      "where": "Project settings → Tasks → Default skills",
      "steps": [
        "Select New task skill.",
        "Select Ask skill.",
        "Open a new task form without manually selecting a skill."
      ],
      "note": "The default skill is selected only when the user has not chosen another.",
      "source": "packages/web/src/routes/settings/trunk-based-fields.tsx",
      "sourceLine": 119,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "domyślny skill ask zadanie ustawienia",
      "tags": [
        "workflows",
        "agents"
      ]
    },
    {
      "id": "worktree-setup",
      "title": "Worktree setup scripts",
      "category": "Workspace",
      "status": "opt-in",
      "summary": "Prepare the environment after worktree creation and before the agent starts.",
      "description": "Setup commands prepare the environment after a worktree is created and before the agent starts. You can set their order and an optional timeout. Preview shows variable substitutions before you save the scripts.",
      "where": "Project settings → Worktrees → lifecycle scripts",
      "steps": [
        "Add a setup command.",
        "Set the command, order, and optional timeout.",
        "Check Preview and choose Save scripts."
      ],
      "note": "Scripts run non-interactively in Bash. Preview shows substitutions without executing commands.",
      "source": "packages/web/src/routes/settings/worktree-lifecycle-editor.tsx",
      "sourceLine": 129,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "worktree setup install zależności lifecycle hook przygotowanie",
      "tags": [
        "settings",
        "git"
      ]
    },
    {
      "id": "worktree-cleanup",
      "title": "Worktree cleanup scripts",
      "category": "Workspace",
      "status": "opt-in",
      "summary": "Clean up resources before removing a task directory.",
      "description": "Cleanup commands release resources before the task directory is removed. Set the script order and check variable substitutions. You can follow their execution when deleting worktrees or reclaiming space.",
      "where": "Project settings → Worktrees → cleanup commands",
      "steps": [
        "Add a cleanup command.",
        "Set the order and check variable substitutions.",
        "Save and follow execution when deleting worktrees or reclaiming space."
      ],
      "note": "The script runs while the task files still exist. If it fails, Cezar keeps the directory for recovery.",
      "source": "packages/web/src/routes/settings/worktree-lifecycle-editor.tsx",
      "sourceLine": 129,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "cleanup worktree sprzątanie hook usunięcie",
      "tags": [
        "settings",
        "git"
      ]
    },
    {
      "id": "worktree-reclaim",
      "title": "Reclaim space after tasks",
      "category": "Workspace",
      "status": "available",
      "summary": "Check worktree sizes and remove old directories after work is finished.",
      "description": "The worktree list shows linked tasks, directory sizes, and ages. Reclaim now removes directories past the retention limit. After confirming, check the cleanup script results.",
      "where": "Project settings → Worktrees → Reclaim now",
      "steps": [
        "Check the tasks, sizes, and directory ages.",
        "Use Reclaim now for directories past the retention limit.",
        "Confirm and check the cleanup result."
      ],
      "note": "Reclaim keeps branches. Delete removes both the directory and its branch.",
      "source": "packages/web/src/routes/settings/worktrees-panel.tsx",
      "sourceLine": 143,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "dysk miejsce cleanup reclaim retencja worktrees",
      "tags": [
        "settings",
        "git"
      ]
    },
    {
      "id": "gemini-runner",
      "title": "Gemini CLI agent",
      "category": "Agents & models",
      "status": "planned",
      "summary": "The plan adds Gemini CLI through the ACP protocol.",
      "description": "The specification describes adding Gemini CLI as a runner using ACP. The plan includes detecting the backend and selecting Gemini in the task form.",
      "where": "Specification: not yet available",
      "steps": [
        "Run Gemini CLI as another ACP runner.",
        "Detect the backend and select it in the task form."
      ],
      "note": "In the reviewed code, Gemini is absent from RUNNER_IDS and the runner factory. Copilot from the same specification is already implemented. There is no confirmed delivery date.",
      "source": ".ai/specs/2026-09-19-runner-seam-native-backends.md",
      "sourceLine": 14,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "gemini google ACP agent plan roadmap",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "permission-modes",
      "title": "Permission modes and tool approval",
      "category": "Agents & models",
      "status": "planned",
      "summary": "The plan adds permission choices and agent approval responses in the cockpit.",
      "description": "The specification describes choosing a permission mode per task. The cockpit would also let you approve or reject agent requests to use tools.",
      "where": "Specification: not yet available",
      "steps": [
        "Choose a permission mode for a task.",
        "Approve or reject tool requests without leaving the cockpit."
      ],
      "note": "The Claude runner currently states that the cockpit cannot respond to permission prompts. The task form has no shared mode selector. There is no confirmed delivery date.",
      "source": ".ai/specs/2026-07-17-permission-modes.md",
      "sourceLine": 11,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "uprawnienia zgoda permission narzędzia sandbox zatwierdzenie",
      "tags": [
        "agents",
        "security"
      ]
    },
    {
      "id": "codex-provider-choice",
      "title": "Choose a Codex provider per task",
      "category": "Agents & models",
      "status": "planned",
      "summary": "The plan adds a provider choice from model_providers in native Codex configuration.",
      "description": "The specification describes reading providers from model_providers in native Codex configuration. The task form would allow separate provider and model choices for each task.",
      "where": "Specification: not yet available",
      "steps": [
        "Read providers from model_providers in Codex configuration.",
        "Choose a provider and model separately for each task."
      ],
      "note": "Cezar currently reads the configured provider and rejects a model with a different provider prefix. Setting Azure as the default provider does not enable per-task provider selection. There is no confirmed delivery date.",
      "source": ".ai/specs/2026-09-19-runner-seam-native-backends.md",
      "sourceLine": 77,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "codex Azure xAI provider dostawca modele plan",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "dispatch-workspace-cap",
      "title": "A workspace-wide Dispatch subtask limit",
      "category": "Tasks & sessions",
      "status": "planned",
      "summary": "The plan adds a shared Dispatch subtask limit for the workspace.",
      "description": "A separate limit would cover active Dispatch subtasks across all parent tasks. Further subtasks would wait in the queue once this limit is reached.",
      "where": "Specification: not yet available",
      "steps": [
        "Apply a shared active-subtask limit in addition to individual parent limits.",
        "Queue further subtasks when the workspace reaches that limit."
      ],
      "note": "Cezar already has maxParallel and a per-parent subtask limit. The current configuration and semaphore lack dispatchMaxConcurrent and a separate admission counter. There is no confirmed delivery date.",
      "source": ".ai/specs/2026-09-20-dispatch-admission-scheduler.md",
      "sourceLine": 17,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "dispatch limit workspace admission kolejka plan",
      "tags": [
        "interface"
      ]
    },
    {
      "id": "adaptive-dispatch",
      "title": "Reduce concurrency under load",
      "category": "Platform",
      "status": "planned",
      "summary": "The plan reduces parallel subtasks when CPU or memory is under pressure.",
      "description": "The planned controller would use host CPU and memory measurements. Under pressure, it would lower Dispatch concurrency, then restore the previous limit when the load drops.",
      "where": "Specification: not yet available",
      "steps": [
        "Measure CPU and memory pressure on the host.",
        "Temporarily reduce Dispatch concurrency and restore it after the load drops."
      ],
      "note": "This feature depends on a separate Dispatch limit and resource-capacity measurements. The current semaphore uses fixed limits without an adaptive controller. There is no confirmed delivery date.",
      "source": ".ai/specs/2026-09-20-adaptive-admission-governor.md",
      "sourceLine": 14,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "adaptive governor CPU RAM presja wydajność limit plan",
      "tags": []
    },
    {
      "id": "schedule-task",
      "title": "Schedule a task to start later",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Write a task now and choose its start date and time.",
      "description": "Prepare a task now and defer execution to a chosen date and time. Set the workflow, account, and model, then use the clock beside the task field. The form shows the time in the server time zone.",
      "where": "New task → clock button → Pick date & time",
      "steps": [
        "Describe the task and choose the workflow, account, and model.",
        "Click the clock beside the task field and choose Pick date & time.",
        "Set a future date and time in the displayed server time zone.",
        "Check the time and click Schedule task."
      ],
      "note": "The server must be running at the chosen time. This is the earliest start; queue and account limits still apply. Attachments and tasks linked to a todo prevent deferred starts. Generating a plan uses tokens immediately; execution of an approved plan can be deferred. CEZ_AUTOMATIONS=0 disables scheduling.",
      "source": "packages/web/src/components/start-time-picker.tsx",
      "sourceLine": 163,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "harmonogram zegar schedule pozniej później noc data godzina start zaplanuj",
      "tags": [
        "interface",
        "automation"
      ]
    },
    {
      "id": "schedule-after-reset",
      "title": "Start a new task after a quota reset",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Schedule a new task for the next confirmed reset of a selected Claude or Codex account.",
      "description": "After usage limit resets schedules a new task for the next confirmed quota reset of the selected Claude or Codex account. Before saving, use Check start time to verify the account and calculated time.",
      "where": "New task → clock button → After usage limit resets",
      "steps": [
        "Select a supported Claude or Codex account and describe the task.",
        "Open the clock and choose After usage limit resets.",
        "Click Check start time and check the time and account.",
        "Click Schedule task."
      ],
      "note": "Claude needs reset observations from earlier Cezar tasks. Codex reads usage data without running the model. Without reliable data, this option is disabled. Scheduling does not reserve future quota or automatically resume an interrupted session.",
      "source": "packages/cezar/src/automations/deferred-reset.ts",
      "sourceLine": 28,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "limit usage reset token quota przyszle nowe zadanie start po limicie",
      "tags": [
        "interface",
        "automation"
      ]
    },
    {
      "id": "manage-scheduled-task",
      "title": "Change or cancel a scheduled start",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Inspect a pending task, run it early, or reschedule it without opening Automations.",
      "description": "Expand a pending task in Scheduled to check its description, workflow, models, account, and time zone. Use Run now, Change time, or Cancel directly from this section without opening Automations.",
      "where": "Tasks → Scheduled",
      "steps": [
        "Expand the task in Scheduled.",
        "Check the description, workflow, models, account, and time zone.",
        "Choose Run now, Change time, or Cancel.",
        "To reschedule, set a date and time and click Save time."
      ],
      "note": "Available actions depend on whether the task has started. To change its description or execution settings, cancel the pending start and create a new one. If a launch result is ambiguous, Cezar shows existing runs and Start missing runs, so you can start only the missing runs instead of retrying all of them.",
      "source": "packages/web/src/components/scheduled-tasks.tsx",
      "sourceLine": 68,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "scheduled zaplanowane anuluj termin data zmien start run now",
      "tags": [
        "interface",
        "automation"
      ]
    },
    {
      "id": "queue-wait-reason",
      "title": "Understand why a task is waiting",
      "category": "Tasks & sessions",
      "status": "available",
      "summary": "Distinguish queue capacity, account limits, and another session's automatic resume.",
      "description": "The explanation beside a task status shows whether it is waiting for a queue slot, an account quota reset, or another session's automatic resume. Waiting for usage limit reset includes the reset time. With automatic resume, the task waits for the session using that account to resume.",
      "where": "Tasks → waiting task",
      "steps": [
        "Find the task in the queue.",
        "Read the explanation beside its status.",
        "For Waiting for usage limit reset, check the displayed time. For automatic resume, wait for the session using that account to resume."
      ],
      "note": "The wait can be caused by a task in another project. Increasing concurrency does not clear an account block.",
      "source": "packages/web/src/lib/queue-wait-label.ts",
      "sourceLine": 3,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "kolejka queued czeka dlaczego limit konto slot waiting reset",
      "tags": [
        "interface",
        "monitoring"
      ]
    },
    {
      "id": "repo-branches",
      "title": "Create and switch repository branches",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Find a branch, switch the checkout, or create a branch in the Git view.",
      "description": "In Git → Branches, find an existing branch and switch the project checkout to it with Switch. To create a branch, enter New branch name and choose Create.",
      "where": "Git → Branches",
      "steps": [
        "Open Git for the project and go to Branches.",
        "Enter a name in Filter branches and click Switch beside the branch.",
        "To create a branch, enter New branch name and choose Create."
      ],
      "note": "This changes the project checkout. Git may refuse to switch when uncommitted changes conflict. A branch used by another worktree is marked in another worktree.",
      "source": "packages/web/src/routes/repo-git/repo-branches.tsx",
      "sourceLine": 78,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "git branch branches galaz gałąź switch create filtruj",
      "tags": [
        "git"
      ]
    },
    {
      "id": "repo-sync",
      "title": "Fetch and push commits in the Git view",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Use Fetch, Pull, Push, or Sync and check the commits waiting on each side.",
      "description": "The Git view shows the tracked branch (upstream) and incoming and outgoing commit counts. Fetch refreshes this information. Pull brings in changes, Push sends local commits, and Sync does both. Use Publish branch for a branch without an upstream.",
      "where": "Git → sync bar",
      "steps": [
        "Check the upstream and incoming and outgoing counts.",
        "Click Fetch to refresh remote information.",
        "Choose Pull, Push, or Sync for the direction of the changes.",
        "Use Publish branch when the branch has no upstream."
      ],
      "note": "Pull only allows fast-forward: moving the branch forward without merging divergent histories. If histories have diverged, Cezar asks you to merge or rebase manually. Sync runs pull, then push. The counts show when the last fetch occurred.",
      "source": "packages/web/src/routes/repo-git/repo-sync-bar.tsx",
      "sourceLine": 18,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "git fetch pull push sync upstream incoming outgoing publish branch",
      "tags": [
        "git"
      ]
    },
    {
      "id": "create-pull-request",
      "title": "Create a pull request from a task",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Publish worktree changes as a regular or draft pull request.",
      "description": "After reviewing the worktree changes, choose Create PR. Use Create draft PR in the adjacent menu to publish a draft. The step result links to the associated PR.",
      "where": "Task → Git action in the header → Create PR",
      "steps": [
        "Review the task changes.",
        "Choose Create PR, or Create draft PR in the adjacent menu.",
        "Follow the step execution and open the linked PR."
      ],
      "note": "The action depends on the task state and GitHub support. The task agent usually runs the command; when unavailable, some operations have a server-side path. Creating a PR does not merge it.",
      "source": "packages/web/src/lib/git-actions.ts",
      "sourceLine": 123,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "pull request pr draft szkic roboczy github publikuj",
      "tags": [
        "git"
      ]
    },
    {
      "id": "update-task-branch",
      "title": "Update a task branch from its base",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Ask the task agent to bring in changes from the base branch.",
      "description": "When the task branch is behind its base, Update branch asks the agent to bring in the missing changes. Before a PR exists, find this option in the Create PR menu. After execution, inspect the agent result and new changes.",
      "where": "Task → Git action → Update branch",
      "steps": [
        "Check whether the task branch is behind its base.",
        "Choose Update branch. Before creating a PR, look in the Create PR menu.",
        "Review the agent result and new changes."
      ],
      "note": "The button depends on Git state and agent readiness. This is separate from repository Pull, which only permits fast-forward.",
      "source": "packages/web/src/lib/git-actions.ts",
      "sourceLine": 182,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "git update branch baza aktualizacja merge main",
      "tags": [
        "git"
      ]
    },
    {
      "id": "resolve-pr-conflicts",
      "title": "Ask the agent to resolve PR conflicts",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Run Resolve conflicts for the conflicting branch of a linked pull request.",
      "description": "Resolve conflicts sends the task agent an instruction to resolve conflicts on the linked PR branch. If the interface first suggests Commit and push or Push, publish the local changes. Then start conflict resolution and review the result.",
      "where": "Task with a PR → Resolve conflicts",
      "steps": [
        "Open the task linked to the conflicting PR.",
        "Publish pending local changes first if the interface offers Commit and push or Push.",
        "When Resolve conflicts is available, run it and review the agent's resolution."
      ],
      "note": "This action sends an instruction to the task agent. Step availability and order depend on branch state. The button does not guarantee a correct conflict resolution.",
      "source": "packages/web/src/lib/git-actions.ts",
      "sourceLine": 219,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "conflict konflikty resolve merge pr",
      "tags": [
        "git"
      ]
    },
    {
      "id": "fix-pr-checks",
      "title": "Fix failing PR checks",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Ask the agent to fix changes whose CI checks failed.",
      "description": "Fix errors asks the agent to correct changes with failed CI checks. The interface may first suggest pushing commits, updating the branch, or resolving conflicts. Complete the suggested step, then follow the fix in the agent session.",
      "where": "Task with a PR → Fix errors",
      "steps": [
        "Open the task linked to a PR with failed checks.",
        "Complete any earlier suggested push, branch update, or conflict resolution.",
        "Click Fix errors and follow the correction in the session."
      ],
      "note": "The interface offers only the next applicable step. Sending an instruction does not confirm that CI passes after the fix.",
      "source": "packages/web/src/lib/git-actions.ts",
      "sourceLine": 221,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "ci check checks fix errors napraw test pipeline github",
      "tags": [
        "git"
      ]
    },
    {
      "id": "markdown-diff-preview",
      "title": "Preview formatted Markdown in changes",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Switch a changed Markdown file from its diff to a readable document preview.",
      "description": "Select a changed Markdown file in Changes and turn on Preview Markdown to see the formatted document. Turn it off to return to the diff.",
      "where": "Task → Changes → Preview Markdown",
      "steps": [
        "Open Changes and select a Markdown file.",
        "Turn on Preview Markdown beside the diff controls.",
        "Turn it off to return to the comparison."
      ],
      "note": "The switch appears when the view has a Markdown file to display. Some diff controls are hidden on small screens.",
      "source": "packages/web/src/routes/task-git/diff-controls.tsx",
      "sourceLine": 42,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "keywords": "markdown md dokument podgląd preview diff",
      "tags": [
        "git",
        "preview"
      ]
    },
    {
      "id": "github-filter-sort",
      "title": "Filter and sort issues and PRs",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Find an item by number, title, or author and narrow the list with labels.",
      "description": "Search issues and PRs by number, title, or author. Labels filters the results by selected labels. You can also sort from newest or oldest.",
      "where": "GitHub → Issues / Pull requests",
      "steps": [
        "Enter a number or text in Search.",
        "Select the labels you need in Labels.",
        "Choose newest-first or oldest-first order."
      ],
      "note": "When several labels are selected, a result must have all of them. Cezar remembers the sort order.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 597,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github filtr labels etykiety szukaj sort oldest newest",
      "tags": [
        "git"
      ]
    },
    {
      "id": "github-closed-search",
      "title": "Find closed issues and merged PRs",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Find an item on GitHub that is absent from the open list.",
      "description": "Search can find closed issues and merged PRs outside the open list. Enter a number or distinctive text. If the current list has no match, remote results appear under Found on GitHub.",
      "where": "GitHub → Search",
      "steps": [
        "Enter the issue or PR number, or distinctive text.",
        "If the current list has no match, wait for Found on GitHub.",
        "Open a result in the details panel."
      ],
      "note": "Remote search runs when the text has no local matches. A label filter alone does not trigger it.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 377,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github closed merged zamknięte scalone wyszukiwanie",
      "tags": [
        "git"
      ]
    },
    {
      "id": "github-activity",
      "title": "GitHub discussion and activity history",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Read comments, review summaries, commits, and state changes in one history.",
      "description": "Activity collects the discussion and events for an issue or PR. You can read comments and review summaries, expand commit groups, and open individual events on GitHub.",
      "where": "GitHub → issue / PR → Conversation",
      "steps": [
        "Open an issue or PR.",
        "Go to Activity.",
        "Expand a commit group or open an event on GitHub."
      ],
      "note": "Comments can be read here, but not edited. If the history is shortened, the view links to the full thread.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 1342,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github komentarze conversation activity historia review timeline commit",
      "tags": [
        "git"
      ]
    },
    {
      "id": "github-pr-diff",
      "title": "Inspect files changed in any PR",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Browse a pull request diff without starting an agent task.",
      "description": "Open Changes on a pull request to inspect file differences without starting an agent. Filter files narrows the list; Previous and Next move between files.",
      "where": "GitHub → Pull requests → PR → Changes",
      "steps": [
        "Open the PR and its Changes tab.",
        "Narrow the list with Filter files.",
        "Move between files with Previous and Next."
      ],
      "note": "The view shows the SHA identifying the revision being inspected. Refresh indicates when it changes. Cezar marks incomplete diffs and files without a patch.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 1271,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github PR diff changes pliki patch przegląd",
      "tags": [
        "git"
      ]
    },
    {
      "id": "github-merge-readiness",
      "title": "Pull request merge requirements",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Check required reviews, conflicts, and check results before merging.",
      "description": "The panel below the PR discussion shows required Reviews, Conflicts, and checks. Use Refresh before merging to read their current state.",
      "where": "GitHub → PR → Conversation → merge panel",
      "steps": [
        "Open the panel below the PR discussion.",
        "Check Reviews, Conflicts, and checks.",
        "Use Refresh to read the requirements again."
      ],
      "note": "If the token cannot read checks, Cezar shows their state as unknown. It does not treat missing access as absent CI or permission to merge.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 1138,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github merge readiness review konflikt checks CI blokada",
      "tags": [
        "git"
      ]
    },
    {
      "id": "github-merge",
      "title": "Merge a PR from Cezar",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Merge a pull request with a method allowed by the repository.",
      "description": "In the PR view, choose an allowed method: Squash and merge, Create a merge commit, or Rebase and merge. After starting the action, confirm the destination branch in the dialog.",
      "where": "GitHub → PR → Conversation → merge panel",
      "steps": [
        "Check the PR state and current revision.",
        "Select Squash and merge, Create a merge commit, or Rebase and merge from the available options.",
        "Click the action and confirm the destination branch in the dialog."
      ],
      "note": "The server refreshes the requirements and rejects a merge if the SHA changes. Drafts and conflicts block the action. Any visible option to bypass requirements is still subject to permissions enforced by GitHub.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 1082,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github scal merge squash rebase pull request",
      "tags": [
        "git"
      ]
    },
    {
      "id": "github-hand-to-agent",
      "title": "Hand an issue or PR to an agent",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Create a task directly from a selected GitHub item.",
      "description": "Create an agent task from the selected issue or PR. Choose a workflow, skills, agent, and model, then add instructions to the supplied link. After starting, View task opens the new task.",
      "where": "GitHub → issue / PR → Hand this to the agent",
      "steps": [
        "Choose the workflow, skills, agent, and model.",
        "Add instructions to the supplied issue or PR link.",
        "Start the task and open it with View task."
      ],
      "note": "Instruction drafts are saved separately for each item. Workflow and skill selections can be reused for subsequent items.",
      "source": "packages/web/src/routes/github/hand-to-agent.tsx",
      "sourceLine": 234,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github hand to agent issue PR zadanie workflow skill",
      "tags": [
        "git"
      ]
    },
    {
      "id": "github-drag-context",
      "title": "Drag an issue into a prompt",
      "category": "Git & GitHub",
      "status": "available",
      "summary": "Insert issue or PR context by dragging its row.",
      "description": "Drag an issue or PR row from the list into the message field. Cezar inserts its context into the text, which you can supplement with instructions before sending.",
      "where": "GitHub → issue / PR row → message field",
      "steps": [
        "Grab an item in the list.",
        "Drag it into the composer text field.",
        "Add your instructions before sending."
      ],
      "note": "Dragging inserts text. It does not start a task.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 821,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "github drag drop przeciągnij issue prompt",
      "tags": [
        "git"
      ]
    }
  ],
  "corrections": [
    {
      "id": "attachments",
      "title": "Images and files in a conversation",
      "summary": "Attach a screenshot, document, text file, or binary file.",
      "description": "Add files through the file picker, drag them into the message field, or paste them from the clipboard. Cezar recognizes images, PDF, and text. Other files are sent as binary attachments whose paths are provided to the agent.",
      "where": "New task or conversation → Attach files",
      "steps": [
        "Choose Attach files or drag a file into the message field.",
        "Explain what the agent should do with it.",
        "Remove any unwanted attachment before sending the message."
      ],
      "note": "Each file has a 5 MiB limit. Images in one message have a combined 20 MiB limit. How files are read depends on the runner and its available tools.",
      "source": "packages/web/src/components/composer/composer-attachments.ts",
      "sourceLine": 21,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "keywords": "zalacznik plik pdf tekst zip xlsx screenshot obraz dokument"
    },
    {
      "id": "cancel-task",
      "title": "Stop a task or remove it from the queue",
      "where": "Task → Stop",
      "steps": [
        "Open a running or queued task.",
        "Choose Stop and confirm.",
        "Check the worktree files. Changes made so far remain."
      ],
      "source": "packages/web/src/routes/task-thread/run-confirm-dialog.tsx",
      "sourceLine": 42,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "inbox",
      "description": "Inbox collects follow-up actions and notes left by agents. Turn a suggested action into a new task by choosing an agent and model and adding instructions. Informational notes can be acknowledged and removed.",
      "steps": [
        "Set CEZ_FOLLOWUPS=1 and restart Cezar.",
        "Open Inbox after a task that left a suggested follow-up.",
        "Select an agent and model, optionally use Add instructions, then choose Run. Remove an unwanted item with Dismiss."
      ],
      "note": "Inbox is not a manual manager for your own TODO list. Its entries come from a file maintained by agents. Notes for an individual task work independently.",
      "source": "packages/web/src/routes/inbox.tsx",
      "sourceLine": 149,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "automations",
      "title": "GitHub automations",
      "status": "available",
      "summary": "Start tasks when issues and pull requests change in matching ways.",
      "description": "Choose GitHub events, the polling interval, and filters for authors, assignees, labels, or reviewers. When an event matches, the rule creates a normal task with the saved prompt, workflow, and agent.",
      "where": "Automations → New automation → When GitHub changes",
      "steps": [
        "Select events and filters, then describe the task.",
        "Save the rule and check Preview matches.",
        "Enable the rule to process future changes."
      ],
      "note": "The feature has been available by default since the interface redesign. CEZ_AUTOMATIONS=0 disables it. A rule starts working after the user enables it and does not create tasks for earlier matches.",
      "source": "packages/web/src/routes/automations/editor-github-fields.tsx",
      "sourceLine": 44,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "system-prompt",
      "where": "Settings → project → Instructions → System prompt",
      "source": "packages/web/src/routes/settings/instructions-section.tsx",
      "sourceLine": 82,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "prompt-templates",
      "where": "Settings → project → Instructions → Prompt templates",
      "source": "packages/web/src/routes/settings/instructions-section.tsx",
      "sourceLine": 151,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "skill-template",
      "where": "Settings → project → Instructions → Prompt templates → skill assignment",
      "source": "packages/web/src/routes/settings/instructions-section.tsx",
      "sourceLine": 151,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "base-branch",
      "where": "Settings → project → Tasks → Base branch",
      "source": "packages/web/src/routes/settings/tasks-section.tsx",
      "sourceLine": 53,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "review",
      "where": "Settings → project → Tasks → Review changes before finishing",
      "steps": [
        "Enable Review changes before finishing in Tasks settings or set CEZ_REVIEW_GATE=1.",
        "Start a non-autonomous task that changes files.",
        "Review the diff, send feedback, or accept the result."
      ],
      "source": "packages/web/src/routes/settings/tasks-section.tsx",
      "sourceLine": 80,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "live-titles",
      "where": "Settings → project → Tasks → Live title updates",
      "source": "packages/web/src/routes/settings/tasks-section.tsx",
      "sourceLine": 104,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "project-concurrency",
      "where": "Settings → Global → Projects → Max parallel tasks for the project",
      "source": "packages/web/src/routes/settings/projects-section.tsx",
      "sourceLine": 758,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "skill-updates",
      "where": "Settings → Global → Skills",
      "description": "Cezar checks installed Open Mercato skills and applies available updates by default. A switch in global settings turns automatic application off. Use default restores inheritance.",
      "steps": [
        "Open Settings → Global → Skills.",
        "Set Update Open Mercato skills automatically.",
        "Choose Use default to remove the saved override."
      ],
      "note": "Automatic updates are enabled by default. CEZ_SKILLS_AUTO_UPDATE=0 changes the value inherited from the environment. This mechanism does not update other skills or untracked folders.",
      "source": "packages/web/src/routes/settings/skills-section.tsx",
      "sourceLine": 49,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "remove-project",
      "where": "Settings → Global → Projects → Remove / project settings",
      "note": "Unregistering a project does not delete files or task history. It does not return automatically after restart; you can add it again from disk. The startup project and projects with running tasks cannot be removed through this panel.",
      "source": "packages/web/src/routes/settings/remove-project.tsx",
      "sourceLine": 15,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "profiles",
      "where": "Settings → Global → Agent accounts",
      "note": "Each account has a separate provider configuration directory. Account editing is disabled by default in remote mode. A trusted self-hosted installation can enable it with CEZ_REMOTE_AGENT_ACCOUNTS=1.",
      "source": "packages/web/src/routes/settings/accounts-section.tsx",
      "sourceLine": 164,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "monitor-wake",
      "note": "By default, Re-check checks every 5 minutes, with a maximum of 40 automatic wake-ups. Park stops automatic checking without starting further model turns.",
      "source": "packages/cezar/src/workspace/config.ts",
      "sourceLine": 96,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "local-project",
      "description": "Select a folder in the directory browser. Cezar also accepts folders without Git, but runs at most one task at a time in them.",
      "source": "packages/web/src/components/add-project-dialog.tsx",
      "sourceLine": 85,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "keyboard-settings",
      "status": "available",
      "title": "Custom shortcuts for task commands",
      "summary": "Assign shortcuts, remove them, or restore the defaults.",
      "description": "Keyboard groups task commands by function. Click a shortcut field and press a key combination. The same editor opens from the task command palette: Cmd/Ctrl+P, then Shift+Enter on the selected command.",
      "where": "Settings → Global → Keyboard",
      "steps": [
        "Find a command and click its shortcut or keyboard icon.",
        "Press a new combination. Escape cancels assignment.",
        "Use Remove, Reset to default, or Reset all to remove or restore settings."
      ],
      "note": "Shortcuts are shared across projects and browsers using this instance. Assigning an occupied combination moves it from the previous command. Some reserved combinations are rejected.",
      "source": "packages/web/src/routes/settings/keyboard-section.tsx",
      "sourceLine": 24,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "spec": "2026-10-17-task-palette.md"
    },
    {
      "id": "remote",
      "where": "Terminal → cezar server-install --platform ubuntu-vps / macosx-ngrok",
      "description": "Agents run on the host while the browser controls tasks. The built-in installer supports an Ubuntu/Debian VPS with nginx and HTTPS, and macOS with an ngrok tunnel. It configures authenticated access and a service that starts after reboot.",
      "steps": [
        "Prepare a host with Node and signed-in agent CLIs.",
        "Run cezar server-install --platform ubuntu-vps or cezar server-install --platform macosx-ngrok and follow the installer.",
        "After the final check, sign in at the provided address and run a small task."
      ],
      "note": "Network access requires an authenticated proxy or tunnel. CEZ_REMOTE=1 changes cockpit capabilities but does not provide sign-in on its own. Use server-deploy to update the installation and server-uninstall to remove it.",
      "source": "packages/cezar/src/index.ts",
      "sourceLine": 209,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "hide-metrics",
      "description": "Set CEZ_HIDE_TOKEN_USAGE=1 to hide token data, or CEZ_HIDE_COST=1 to hide cockpit costs. The older CEZ_HIDE_TOKEN_METRICS=1 flag hides both.",
      "note": "These settings affect presentation. They do not change billing or the usage data saved by the server and returned by the API.",
      "source": "packages/cezar/src/server/capabilities.ts",
      "sourceLine": 235,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "native-models",
      "where": "CEZ_AGENT_MODELS_LOCKED=1 or modelsLocked in global / project config.json",
      "source": "packages/cezar/src/core/agent-model-policy.ts",
      "sourceLine": 18,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "secret-redaction",
      "where": "Enabled by default when saving task events and text",
      "source": "packages/cezar/src/runs/store.ts",
      "sourceLine": 1677,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "workflows",
      "title": "Visual workflow editor",
      "summary": "Build a graph of agents, tests, conditions, and decisions.",
      "description": "The editor supports workflow v2 with nodes and output ports, as well as older step and skill lists. You can simulate the graph, save it as YAML, and follow it during execution.",
      "where": "Workflows → graph editor",
      "steps": [
        "Open a workflow or built-in template.",
        "Add nodes and connect their outputs.",
        "Check validation errors, run Simulate, and save."
      ],
      "note": "Saving requires a name and successful validation. Every cycle must pass through a bounded Loop node.",
      "source": "packages/web/src/routes/workflow-graph/workflow-graph.tsx",
      "sourceLine": 710,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "react-components",
      "status": "planned",
      "title": "React component library",
      "summary": "The specification proposes embedding parts of Cezar in your own React app.",
      "description": "The specification describes @open-mercato/cezar-react, a package for embedding parts of Cezar in a React app. It would include a provider, components, and separate CSS. The reviewed commit has no packages/react directory, and the web cockpit remains a private SPA.",
      "where": "Specification: no package available to install",
      "steps": [
        "Read the publishable-react-components specification.",
        "For current integrations, use the exposed server API."
      ],
      "note": "The library is a plan in the repository with no confirmed delivery date. The existing React app is not a published component library.",
      "source": ".ai/specs/2026-07-27-publishable-react-components.md",
      "sourceLine": 11,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "autonomous",
      "note": "Autonomous continues work on its own and skips the optional review gate. In a project with auto-land explicitly enabled, it can also save changes to the base branch. Default worktree tasks are not merged automatically.",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 7168,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "commit-changes",
      "where": "Task → Git action in the header",
      "description": "Save and publish changes through the next Git step suggested for the task.",
      "steps": [
        "Review the task's Changes.",
        "Choose the available Commit, Commit and push, or Create PR step.",
        "If a commit form appears, check the message and confirm.",
        "Check the result in the session and commit history."
      ],
      "note": "Cezar usually delegates the step to the agent. The server-side commit form includes all worktree changes (git add -A); it does not select individual files. The available button depends on branch and PR state.",
      "source": "packages/web/src/routes/task-git/run-git-step.tsx",
      "sourceLine": 125,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd"
    },
    {
      "id": "commit-history",
      "note": "The list also shows incoming and outgoing commits based on the last fetch. On a phone, the diff uses a unified layout with wrapped lines.",
      "source": "packages/web/src/routes/repo-git/repo-commits.tsx",
      "sourceLine": 25,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd"
    },
    {
      "id": "github",
      "title": "GitHub issues and pull requests",
      "summary": "Browse issues and PRs, read discussions, and hand work to an agent.",
      "description": "The GitHub tab includes filtering and search, activity history, PR diffs, and manual merging after confirmation. You can also create a task from an issue or PR using your own workflow and skills.",
      "where": "Project → GitHub",
      "steps": [
        "Open Issues or Pull requests.",
        "Find and open an item.",
        "Read the details or use Hand this to the agent."
      ],
      "note": "Access depends on gh configuration, the repository, and permissions. Merging requires a separate action and confirmation.",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 1029,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    }
  ],
  "evidence": [
    {
      "id": "live-sessions",
      "source": "packages/web/src/routes/task-thread/task-thread.tsx",
      "sourceLine": 359,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "variants",
      "source": "packages/web/src/routes/compare-variants.tsx",
      "sourceLine": 150,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "handoff",
      "source": "packages/web/src/routes/task-thread/use-run-actions.ts",
      "sourceLine": 139,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "cancel-resume",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 3143,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "live-titles",
      "source": "packages/web/src/routes/settings/tasks-section.tsx",
      "sourceLine": 104,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "queued-prompts",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 3598,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "subagents",
      "source": "packages/web/src/routes/task-thread/task-thread.tsx",
      "sourceLine": 463,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "questions",
      "source": "packages/web/src/routes/task-thread/task-thread.tsx",
      "sourceLine": 300,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "file-preview",
      "source": "packages/web/src/routes/task-git/file-preview.tsx",
      "sourceLine": 47,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd",
      "tags": [
        "preview"
      ]
    },
    {
      "id": "commit-changes",
      "source": "packages/web/src/routes/task-git/run-git-step.tsx",
      "sourceLine": 125,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd"
    },
    {
      "id": "commit-history",
      "source": "packages/web/src/routes/repo-git/repo-commits.tsx",
      "sourceLine": 25,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd"
    },
    {
      "id": "split-diff",
      "source": "packages/web/src/routes/task-git/diff-controls.tsx",
      "sourceLine": 34,
      "sourceCommit": "2e16d70356585c58fffdd418fce880c9466880cd"
    },
    {
      "id": "fold-columns",
      "source": "packages/web/src/routes/tasks-overview.tsx",
      "sourceLine": 1475,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "usage-metrics",
      "source": "packages/web/src/routes/task-thread/run-header.tsx",
      "sourceLine": 944,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "analytics"
      ]
    },
    {
      "id": "command-palette",
      "source": "packages/web/src/components/command-palette.tsx",
      "sourceLine": 57,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "autonomous",
      "source": "packages/web/src/routes/new-task.tsx",
      "sourceLine": 514,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "attachments",
      "source": "packages/web/src/components/composer/composer-attachments.ts",
      "sourceLine": 86,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "archive-task",
      "source": "packages/web/src/routes/task-thread/use-run-actions.ts",
      "sourceLine": 71,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "cancel-task",
      "source": "packages/web/src/routes/task-thread/run-confirm-dialog.tsx",
      "sourceLine": 88,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "inbox",
      "source": "packages/cezar/src/server/capabilities.ts",
      "sourceLine": 244,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "auto-resume",
      "source": "packages/cezar/src/workflows/run.ts",
      "sourceLine": 2862,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "monitor-capacity",
      "source": "packages/web/src/routes/settings/resources-section.tsx",
      "sourceLine": 185,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "monitor-wake",
      "source": "packages/web/src/routes/settings/resources-section.tsx",
      "sourceLine": 202,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "memory-limit",
      "source": "packages/web/src/routes/settings/resources-section.tsx",
      "sourceLine": 263,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "project-concurrency",
      "source": "packages/web/src/routes/settings/projects-section.tsx",
      "sourceLine": 758,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "prompt-templates",
      "source": "packages/web/src/routes/settings/prompt-templates-section.tsx",
      "sourceLine": 136,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "skill-template",
      "source": "packages/web/src/routes/settings/prompt-templates-section.tsx",
      "sourceLine": 137,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "system-prompt",
      "source": "packages/web/src/routes/settings/instructions-section.tsx",
      "sourceLine": 82,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "base-branch",
      "source": "packages/web/src/routes/settings/tasks-section.tsx",
      "sourceLine": 53,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "browser-notifications",
      "source": "packages/web/src/routes/settings/notifications-section.tsx",
      "sourceLine": 93,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "appearance",
      "source": "packages/web/src/routes/settings/appearance.tsx",
      "sourceLine": 239,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "accent",
      "source": "packages/web/src/routes/settings/appearance.tsx",
      "sourceLine": 243,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "reading-density",
      "source": "packages/web/src/routes/settings/appearance.tsx",
      "sourceLine": 247,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "skill-updates",
      "source": "packages/cezar/src/skills-update.ts",
      "sourceLine": 370,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "bookmarklets",
      "source": "packages/web/src/routes/settings/bookmarklets-section.tsx",
      "sourceLine": 95,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "remove-project",
      "source": "packages/web/src/routes/settings/remove-project.tsx",
      "sourceLine": 15,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "profiles",
      "source": "packages/web/src/routes/settings/accounts-section.tsx",
      "sourceLine": 164,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "agent-settings",
      "source": "packages/web/src/routes/settings/agent-config-section.tsx",
      "sourceLine": 257,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "projects",
      "source": "packages/web/src/routes/settings/projects-section.tsx",
      "sourceLine": 271,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "automations",
      "source": "packages/cezar/src/server/capabilities.ts",
      "sourceLine": 246,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "review",
      "source": "packages/cezar/src/runs/review-gate.ts",
      "sourceLine": 16,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "clone-project",
      "source": "packages/web/src/components/clone-project-dialog.tsx",
      "sourceLine": 165,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "local-project",
      "source": "packages/web/src/components/add-project-dialog.tsx",
      "sourceLine": 85,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "remote",
      "source": "packages/cezar/src/index.ts",
      "sourceLine": 209,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "hide-metrics",
      "source": "packages/cezar/src/server/capabilities.ts",
      "sourceLine": 235,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "native-models",
      "source": "packages/cezar/src/core/agent-model-policy.ts",
      "sourceLine": 18,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "secret-redaction",
      "source": "packages/cezar/src/runs/store.ts",
      "sourceLine": 1677,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "keyboard-settings",
      "source": "packages/web/src/routes/settings/keyboard-section.tsx",
      "sourceLine": 24,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "agents",
      "source": "packages/cezar/src/core/runner-factory.ts",
      "sourceLine": 16,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "experimental-runners",
      "source": "packages/cezar/src/core/runner-factory.ts",
      "sourceLine": 20,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "skills",
      "source": "packages/cezar/src/skills.ts",
      "sourceLine": 69,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "planner",
      "source": "packages/web/src/routes/workflow-graph/workflow-graph.tsx",
      "sourceLine": 601,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "workflow-portability",
      "source": "packages/web/src/routes/workflow-graph/workflow-graph.tsx",
      "sourceLine": 747,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "workflow-retry",
      "source": "packages/cezar/src/workflows/types.ts",
      "sourceLine": 48,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "headless",
      "source": "packages/cezar/src/index.ts",
      "sourceLine": 520,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "terminal"
      ]
    },
    {
      "id": "worktrees",
      "source": "packages/web/src/routes/new-task.tsx",
      "sourceLine": 877,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "parallel-tasks",
      "source": "packages/cezar/src/workspace/semaphore.ts",
      "sourceLine": 204,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "mock-mode",
      "source": "packages/cezar/src/core/claude-cli-runner.ts",
      "sourceLine": 77,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "nightly",
      "source": ".github/workflows/nightly.yml",
      "sourceLine": 116,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "single-project",
      "source": "packages/cezar/src/server/server.ts",
      "sourceLine": 2956,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e"
    },
    {
      "id": "github",
      "source": "packages/web/src/routes/github/github.tsx",
      "sourceLine": 1029,
      "sourceCommit": "0355f9c9e46373c342dcb8a4d466df48e3f90d3e",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "design-mode",
      "tags": [
        "design",
        "preview"
      ]
    },
    {
      "id": "design-notes",
      "tags": [
        "design",
        "preview"
      ]
    },
    {
      "id": "diff-comments",
      "tags": [
        "design"
      ]
    },
    {
      "id": "app-preview",
      "tags": [
        "preview"
      ]
    },
    {
      "id": "start-app",
      "tags": [
        "preview"
      ]
    },
    {
      "id": "start-app-recipes",
      "tags": [
        "preview",
        "terminal"
      ]
    },
    {
      "id": "markdown-diff-preview",
      "tags": [
        "preview"
      ]
    },
    {
      "id": "task-terminal",
      "tags": [
        "terminal"
      ]
    },
    {
      "id": "terminal-discovery",
      "tags": [
        "terminal"
      ]
    },
    {
      "id": "runs-cli",
      "tags": [
        "terminal",
        "cli"
      ]
    },
    {
      "id": "dispatch-cli",
      "tags": [
        "terminal",
        "cli"
      ]
    },
    {
      "id": "automation-cli",
      "tags": [
        "terminal",
        "cli"
      ]
    },
    {
      "id": "jira-connection",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "linear-connection",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "tracker-search",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "tracker-task",
      "tags": [
        "trackers"
      ]
    },
    {
      "id": "tracker-automations",
      "tags": [
        "trackers",
        "automation"
      ]
    },
    {
      "id": "dashboard-overview",
      "tags": [
        "analytics"
      ]
    },
    {
      "id": "dashboard-costs",
      "tags": [
        "analytics"
      ]
    },
    {
      "id": "dashboard-customize",
      "tags": [
        "analytics"
      ]
    },
    {
      "id": "dashboard-export",
      "tags": [
        "analytics"
      ]
    },
    {
      "id": "host-resources",
      "tags": [
        "analytics",
        "monitoring"
      ]
    },
    {
      "id": "schedule-task",
      "tags": [
        "automation"
      ]
    },
    {
      "id": "schedule-after-reset",
      "tags": [
        "automation"
      ]
    },
    {
      "id": "manage-scheduled-task",
      "tags": [
        "automation"
      ]
    },
    {
      "id": "scheduled-automations",
      "tags": [
        "automation"
      ]
    },
    {
      "id": "automation-once",
      "tags": [
        "automation"
      ]
    },
    {
      "id": "task-dispatch",
      "tags": [
        "automation",
        "agents"
      ]
    },
    {
      "id": "dispatch-limits",
      "tags": [
        "automation",
        "agents"
      ]
    },
    {
      "id": "trunk-based",
      "tags": [
        "automation",
        "git"
      ]
    },
    {
      "id": "auto-land",
      "tags": [
        "automation",
        "git"
      ]
    },
    {
      "id": "landing-checks",
      "tags": [
        "automation",
        "git"
      ]
    },
    {
      "id": "project-secrets",
      "tags": [
        "security"
      ]
    },
    {
      "id": "workspace-secrets",
      "tags": [
        "security"
      ]
    },
    {
      "id": "private-project-mcp",
      "tags": [
        "security"
      ]
    },
    {
      "id": "telemetry-consent",
      "tags": [
        "security"
      ]
    },
    {
      "id": "permission-modes",
      "tags": [
        "security"
      ]
    },
    {
      "id": "queue-wait-reason",
      "tags": [
        "monitoring"
      ]
    },
    {
      "id": "waiting-timeout",
      "tags": [
        "monitoring"
      ]
    },
    {
      "id": "live-workflow-graph",
      "tags": [
        "monitoring"
      ]
    },
    {
      "id": "workflow-wait-ci",
      "tags": [
        "monitoring"
      ]
    },
    {
      "id": "init-workflow-skill",
      "tags": [
        "cli"
      ]
    },
    {
      "id": "continue-engine",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "mixed-agent-workflow",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "default-task-skills",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "ask-mode",
      "tags": [
        "agents"
      ]
    },
    {
      "id": "create-project",
      "tags": [
        "git"
      ]
    },
    {
      "id": "worktree-setup",
      "tags": [
        "git"
      ]
    },
    {
      "id": "worktree-cleanup",
      "tags": [
        "git"
      ]
    },
    {
      "id": "worktree-reclaim",
      "tags": [
        "git"
      ]
    }
  ]
};
