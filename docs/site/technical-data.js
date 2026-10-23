const TECH_COMMIT='0355f9c9e46373c342dcb8a4d466df48e3f90d3e';
const TECH_ARTICLES=[
  {
    "id": "architecture",
    "title": "Architecture: from the interface to the agent process",
    "summary": "How a task reaches the agent, where Cezar saves its results, and how the browser receives progress updates.",
    "sections": [
      {
        "id": "boundaries",
        "title": "Four packages and one service",
        "paragraphs": [
          "Cezar runs local agent tools and manages their work. The browser sends requests to the server. Commands and Git operations run on the machine hosting Cezar, so closing the tab does not stop the agent process. In a remote installation, the project directory, agent account, and command environment are all on the server.",
          "The root package.json declares four npm workspace packages. The CLI belongs to the cezar package and can run a workflow without an HTTP interface. Cockpit mode starts a Hono server that serves the built React application. The repository also contains a desktop application outside these four packages."
        ],
        "table": {
          "headers": [
            "Package",
            "Responsibility"
          ],
          "rows": [
            [
              "packages/cezar",
              "CLI, HTTP, RunManager, agent processes, Git, and state storage."
            ],
            [
              "packages/contract",
              "Zod schemas for requests and responses, from which TypeScript types are derived."
            ],
            [
              "packages/api-client",
              "Typed HTTP client and shared protocol types."
            ],
            [
              "packages/web",
              "React 19, Vite, and Tailwind v4. The build output goes to packages/cezar/web/dist."
            ]
          ]
        }
      },
      {
        "id": "request-path",
        "title": "The path of a task",
        "steps": [
          "The interface asks the project API to create a task, called a run in the code. Middleware validates the request against a Zod schema.",
          "The project context selects the correct RunStore and RunManager. The task enters the queue, and RunManager waits until it can execute it.",
          "The engine prepares the working directory and workflow. It selects a runner, the adapter for the agent tool, assembles the prompt, and starts a local CLI session.",
          "The runner translates provider events into the shared Cezar protocol. RunStore saves the history, and the server forwards events to clients.",
          "After the session ends, you can read the final state, check results, and file changes (the diff). The review status means the result needs assessment. It does not confirm that every project test has run."
        ]
      },
      {
        "id": "project-scope",
        "title": "How the API address selects a project",
        "paragraphs": [
          "The public API uses the /api/v1 prefix. The /api/v1/runs address refers to the project where the server started. When the cockpit manages several repositories, select a project with /api/v1/p/<projectId>/runs. Workspace routes, such as the project registry, have no variant with a project ID. Do not build integrations against the old /api/runs addresses.",
          "ProjectContexts creates project contexts on demand. An unknown ID returns 404. A registered project whose directory no longer exists returns 409. This distinguishes an incorrect integration address from a deleted or disconnected repository."
        ],
        "code": {
          "language": "bash",
          "text": "export CEZ_API_URL=http://127.0.0.1:4321\ncurl \"$CEZ_API_URL/api/v1/health\"\ncurl \"$CEZ_API_URL/api/v1/projects\"\n# For a specific project, use its ID from the response:\ncurl \"$CEZ_API_URL/api/v1/p/PROJECT_ID/runs\""
        }
      },
      {
        "id": "live-and-storage",
        "title": "Live updates and persistent state",
        "paragraphs": [
          "Cezar streams execution history over SSE. After reconnecting, a client can replay saved events and identify duplicates by their seq number. A separate WebSocket at /api/v1/ws carries signals such as host status. It publishes only while there are subscribers. Features share this connection, so do not open a separate socket for each one.",
          "In remote mode, the browser uses HTTP and SSE instead of WebSocket. Configure your reverse proxy to authenticate access to the page, API connections, and long-lived SSE responses.",
          "Cezar stores state in files and does not require a database server. Project data lives in .ai/cezar; workspace settings and the project registry live in ~/.cezar. Agents still need network connections to their model providers, as do GitHub features."
        ]
      },
      {
        "id": "extending",
        "title": "Where to add an extension",
        "paragraphs": [
          "To add an API field, start in packages/contract. Then include it in handler validation, the response, and the client. Hono derives AppType from the route registration chain. A separate app.get call may handle requests at runtime while remaining invisible to the typed client.",
          "Connect a new agent provider through AgentRunner. Components should not parse raw provider messages. If a tool view loses data, inspect the transport frame, UiEvent mapper, event storage, and renderer in that order. Data can be lost at any of these four stages."
        ]
      }
    ],
    "sources": [
      {
        "path": "package.json",
        "line": 10,
        "label": "Workspace list"
      },
      {
        "path": "packages/cezar/src/server/server.ts",
        "line": 618,
        "label": "API versioning"
      },
      {
        "path": "packages/cezar/src/runs/store.ts",
        "line": 937,
        "label": "File-backed RunStore"
      },
      {
        "path": "AGENTS.md",
        "line": 139,
        "label": "API and live event boundaries"
      },
      {
        "path": "AGENT_PROTOCOL.md",
        "line": 1,
        "label": "Runner and event contract"
      }
    ]
  },
  {
    "id": "run-lifecycle",
    "title": "Task lifecycle, concurrency, and recovery",
    "summary": "What task statuses mean, why tasks wait in the queue, and what remains after work stops or a worktree is removed.",
    "sections": [
      {
        "id": "states",
        "title": "Task status and process activity",
        "paragraphs": [
          "RunRecord has seven main statuses. Monitoring is an activity of a task that can still be running, not a separate monitoring status. Integrations should also read activity and waiting information. These fields distinguish token-consuming work from waiting for CI or subtasks."
        ],
        "table": {
          "headers": [
            "Status",
            "Meaning"
          ],
          "rows": [
            [
              "queued",
              "The task is saved and waiting for its turn or an available resource."
            ],
            [
              "running",
              "The workflow is in progress. Activity information shows whether the agent is currently working."
            ],
            [
              "waiting",
              "The session is waiting for further interaction and has released its slot in the normal concurrency limit."
            ],
            [
              "review",
              "The work is waiting for review. A subtask with this status reports completion to its parent."
            ],
            [
              "done",
              "Execution has finished. The workflow determines which checks the work included."
            ],
            [
              "failed",
              "Execution ended with an error. Check the step and task history for the cause."
            ],
            [
              "cancelled",
              "Execution was interrupted. Cezar does not automatically undo the changes."
            ]
          ]
        }
      },
      {
        "id": "slots",
        "title": "Why a task waits in the queue",
        "paragraphs": [
          "WorkspaceSemaphore shares maxParallel across projects. The default is 2 for the entire workspace. A second repository uses the same pool, although the project registry can assign it an additional limit. The workspace enforces the host-wide limit; the old resource fields in repository configuration no longer control it.",
          "A task needs both an execution slot and access to its working directory. Tasks without a worktree share the repository directory and need exclusive access to it, regardless of maxParallel. Separate worktrees give agents separate working directories where they can make independent changes in parallel.",
          "A session waiting for a reply releases its slot. Resuming it with a message can temporarily exceed the normal limit, so your reply does not have to wait behind new tasks. Graphs also release slots while waiting for a gate, a reply, CI, or a subtask. A separate limit controls how many subtasks dispatch can create."
        ]
      },
      {
        "id": "worktree",
        "title": "What a worktree isolates",
        "paragraphs": [
          "The default task working directory is .ai/cezar/worktrees/<runId>. The engine records its starting point and works on a separate branch. The fallback branch name is cez/<first-8-ID-characters>, although the record may specify a descriptive name. Git worktree separates tracked files and the checkout, but does not create a container or a separate operating system user.",
          "Databases, development server ports, and Docker resources can still collide. Optional lifecycle scripts prepare and clean up the environment. They run bash -c without a login profile. Workflow checks use bash -lc instead. Both execute on the Cezar host.",
          "Setup also runs when a previously reclaimed checkout is restored. Finishing or archiving a task does not run cleanup. If a crash occurs between executing a command and recording its result, you must decide whether to retry. The external effect may already have happened, so exactly-once execution is not guaranteed."
        ]
      },
      {
        "id": "landing",
        "title": "Auto-land in local trunk mode",
        "paragraphs": [
          "Trunk mode can work without a separate worktree and use landing: auto. It requires worktree: false, readOnly disabled, and no inPlaceBranch. Configuration tracked in Git cannot grant this permission.",
          "Auto-land creates a commit and runs the required checks. If the branch has an upstream, it synchronizes through rebase and attempts a push. Without an upstream, it can finish with a local commit and pushed: false. An autonomous task can run auto-land before finishing; an interactive task waits for Commit or Finish. Merging a pull request on GitHub is a separate operation."
        ]
      },
      {
        "id": "on-disk",
        "title": "Where to find task history",
        "code": {
          "language": "text",
          "text": ".ai/cezar/\n  runs.json                  task index and records\n  runs/<runId>.ndjson         persistent events\n  runs/<runId>.handoff.md     context handoff notes\n  worktrees/<runId>/         task checkout\n  lifecycle/                setup and cleanup operations\n~/.cezar/config.json         workspace and project registry"
        },
        "paragraphs": [
          "RunStore writes the index through a temporary file and rename, and appends history in NDJSON format. The seq number keeps increasing after a restart, so clients can distinguish new events from ones they already replayed. A partial interface update does not always have its own persistent record.",
          "After a restart, Cezar rebuilds the queue from saved records. Resuming the agent also depends on its backend session and retained context. Restarting does not undo commands: disk changes or external effects may have occurred before the last saved event."
        ]
      },
      {
        "id": "retention",
        "title": "Worktree retention and troubleshooting",
        "paragraphs": [
          "By default, Cezar keeps 10 completed worktrees. A value of 0 removes the limit. Reclaim frees space by deleting the directory while keeping the branch for recovery. Deleting a task and reclaiming space are separate operations; instructions should distinguish them.",
          "If a task will not start, check its status and activity, workspace and project limits, any pending lifecycle scripts, and the last check result. For high RAM usage, inspect the whole task process tree. The optional memoryLimitMb can stop work that exceeds the limit. maxParallel limits concurrent tasks, not the memory of an individual process."
        ]
      }
    ],
    "sources": [
      {
        "path": "packages/cezar/src/runs/store.ts",
        "line": 38,
        "label": "Complete status list"
      },
      {
        "path": "packages/cezar/src/workspace/semaphore.ts",
        "line": 7,
        "label": "Shared slots and the resume exception"
      },
      {
        "path": "packages/cezar/src/workspace/semaphore.ts",
        "line": 116,
        "label": "Default limits"
      },
      {
        "path": "packages/cezar/src/git-worktree.ts",
        "line": 18,
        "label": "Directories and branches"
      },
      {
        "path": "packages/cezar/src/runs/store.ts",
        "line": 1830,
        "label": "History paths"
      },
      {
        "path": "docs/reference.md",
        "line": 848,
        "label": "Worktree lifecycle"
      },
      {
        "path": "packages/cezar/src/workflows/run.ts",
        "line": 7163,
        "label": "Auto-land conditions and autonomous execution"
      }
    ]
  },
  {
    "id": "workflows",
    "title": "Workflow YAML: agent steps, tests, and retries",
    "summary": "How to write a workflow, check its results with a command, and send work back for a fix. YAML examples and guidance on moving from a step list to a graph.",
    "sections": [
      {
        "id": "file",
        "title": "Where to save a workflow and which fields to use",
        "paragraphs": [
          "Save a .yaml or .yml file directly in .ai/cezar/workflows/. The loader reads files from this directory. It reports each file error separately and continues loading the others. The name field identifies the workflow. If it matches a built-in template, Cezar uses your file.",
          "In the list format, choose either steps or skills. You cannot declare both. Each step needs a unique id. An agent step contains prompt or skill; a check step contains command. Combining command with prompt fails validation. If you use onFail.retry, point it to an earlier step."
        ]
      },
      {
        "id": "example",
        "title": "Implementation, tests, and up to two repair attempts",
        "code": {
          "language": "yaml",
          "text": "name: fix-and-verify\ndescription: Implement a change and verify it with project tests.\nsteps:\n  - id: implement\n    name: Implementation\n    runner: claude\n    prompt: \"Complete the task and add the required tests: {{task}}\"\n    allowedTools: [Read, Edit, Write, Grep, Glob, Bash]\n  - id: verify\n    name: Tests\n    command: npm test\n    onFail:\n      retry: implement\n      max: 2\n      retryOn: [1]"
        },
        "paragraphs": [
          "The example assumes the repository has an npm test command. Replace it with the command your project uses. Cezar inserts the task text at {{task}}. If a check fails, its redacted output is added to the prompt for the next implementation attempt. max: 2 permits two repair attempts after the initial execution. It does not limit total time or token usage.",
          "Exit code 0 means success. With retryOn: [1], code 1 sends the task back for a fix, while a code such as 2 ends execution with an error without running the agent again. Omitting retryOn or using an empty list retries every nonzero exit code. This setting makes sense when the checking tool does not distinguish a failed test from a configuration error."
        ]
      },
      {
        "id": "tools",
        "title": "How runners interpret allowedTools",
        "paragraphs": [
          "The default allowedTools are Read, Edit, Write, Grep, Glob, and Bash. Bash alone gives broad shell access. Claude supports allowedTools and bashAllowlist, while Codex, OpenCode, Junie, and Cursor have their own permission models. The list does not create the same sandbox across runners. After changing a runner, check its actual permissions even if the YAML still validates.",
          "Each agent step can have its own runner and model, such as different choices for implementation and review. A skill supplies instructions to the step. When verification is mandatory, add a check with command: its exit code lets the engine decide whether to continue. A prompt asking the agent to test its work does not provide the same control."
        ]
      },
      {
        "id": "checks-secrets",
        "title": "Variables and secrets in a check step",
        "paragraphs": [
          "A check runs bash -lc in the task worktree. It receives the server environment, CEZ_RUN_ID, CEZ_WORKTREE, CEZ_STEP_ID, and the CEZ_ATTEMPT number. Available values depend on the task. When context is missing, Cezar does not replace it with an empty string.",
          "You can assign Cezar secrets with the checks audience to a command. If you omit secrets, the check receives every available secret in that audience. Project values take precedence over workspace values. Setting secrets on an agent step causes a workflow loading error. This rule does not remove API keys previously exported in the host environment."
        ],
        "code": {
          "language": "yaml",
          "text": "name: staging-check\nsteps:\n  - id: verify\n    command: npm run test:staging\n    secrets:\n      - STAGING_TOKEN\n      - { name: STAGING_LOGIN, as: APP_PASSWORD }"
        },
        "note": "This example requires a test:staging script and saved secrets with the checks audience. Saving the workflow file does not run the command."
      },
      {
        "id": "graph",
        "title": "When to use version: 2",
        "paragraphs": [
          "Use a graph when you need branches, a question for a person, a wait for CI, or separate subtasks. A graph contains nodes and edges. An edge starts at a specific port, such as tests.pass or tests.fail. An unconnected port ends the path; a failure port ends it unsuccessfully. Every cycle must pass through a loop node with a repetition limit.",
          "A basic graph executes one node at a time. Parallel work uses fork and join. Fork branches launch separate tasks through dispatch rather than editing the same checkout in parallel. Node results are available through {{nodes.<id>.<field>}}, such as a check output field.",
          "Before using a graph, check what happens when a loop is exhausted, no verdict is returned, a timeout occurs, or the task is cancelled. The success path does not describe these cases. Simulate in the editor walks the graph without running tools. To execute a check, run a task."
        ]
      }
    ],
    "sources": [
      {
        "path": "packages/cezar/src/workflows/load.ts",
        "line": 15,
        "label": "File loading and name collisions"
      },
      {
        "path": "packages/cezar/src/workflows/types.ts",
        "line": 28,
        "label": "Step schema"
      },
      {
        "path": "packages/cezar/src/workflows/types.ts",
        "line": 168,
        "label": "retryOn rules"
      },
      {
        "path": "packages/cezar/src/workflows/run.ts",
        "line": 8025,
        "label": "Check execution through bash -lc"
      },
      {
        "path": "docs/reference.md",
        "line": 362,
        "label": "Graph syntax and ports"
      }
    ]
  },
  {
    "id": "agent-runners",
    "title": "Runners and subtasks: sessions, permissions, and budgets",
    "summary": "How Cezar connects to seven agent tools, how their permissions differ, and how to delegate work through dispatch.",
    "sections": [
      {
        "id": "runner-contract",
        "title": "What the shared interface provides",
        "paragraphs": [
          "AgentRunner creates a session and an event stream from AgentRunSpec. AgentSession lets you read the result, send a message, end the session, or interrupt it. The adapter translates provider responses, so the engine does not need to know their format. It supplies both the historical AgentEvent format and the normalized UiEvent channel used by the interface.",
          "RUNNER_IDS and the adapter factory contain the seven backends listed below. This list follows the code at the referenced commit. reference.md still describes five backends and omits Copilot from its table. Each backend also requires its CLI to be installed and signed in on the Cezar machine."
        ],
        "table": {
          "headers": [
            "runner",
            "Transport / execution"
          ],
          "rows": [
            [
              "claude",
              "Claude CLI, JSON stream, and native allowedTools support."
            ],
            [
              "codex",
              "codex app-server, JSON-RPC over stdio."
            ],
            [
              "opencode",
              "opencode serve, local HTTP and SSE."
            ],
            [
              "cursor",
              "agent in print / stream-json mode; Continue starts a new session."
            ],
            [
              "pi",
              "pi --mode rpc, JSONL, and tool list mapping."
            ],
            [
              "junie",
              "Junie ACP over stdio."
            ],
            [
              "copilot",
              "copilot --acp --allow-all-tools --no-auto-update."
            ]
          ]
        }
      },
      {
        "id": "permissions",
        "title": "Permissions depend on the adapter",
        "paragraphs": [
          "Codex starts sessions with sandbox: danger-full-access and approvalPolicy: never by default. Setting CEZ_CODEX_NETWORK=0 changes the sandbox to workspace-write and disables network access. This option applies only to the Codex runner.",
          "Claude passes allowedTools. If the list includes Bash and bashAllowlist is unset, shell commands are unrestricted. Junie and OpenCode approve permission requests automatically. Copilot starts with --allow-all-tools and automatically handles the remaining ACP permission requests too. Assess the permissions of each backend separately.",
          "pi maps tools to its own list. It cannot map command prefix rules, so it disables Bash when bashAllowlist is set. Cursor in print mode does not report complete token and cost data. A displayed zero may therefore mean missing data, not free execution."
        ]
      },
      {
        "id": "dispatch-contract",
        "title": "How to delegate work to a subtask",
        "paragraphs": [
          "Dispatch creates a subtask with its own session, checkout, and report. The parent supplies the goal in objective. It can also specify scope, success_criteria, and required_evidence. A subtask does not automatically inherit all of its parent's reasoning, so these fields should describe enough context to do the work independently.",
          "The review kind evaluates specific work. Set review_of to its branch or run. This ties the report to a particular change rather than a general request to check everything. A report can include a verdict, evidence, errors, side effects, and suggestions."
        ]
      },
      {
        "id": "example",
        "title": "An example from inside a task",
        "code": {
          "language": "bash",
          "text": "cez task create \"Review input validation in the orders API\" \\\n  --kind review \\\n  --scope \"src/orders\" \\\n  --budget 2 \\\n  --success \"Confirmed bugs, or an explanation of why no issues were found\" \\\n  --evidence \"File paths, line numbers, and verification commands\"\n\ncez task list\n\n# In the subtask session, after completing its work:\ncez task report --status done \\\n  --result \"Validation reviewed; no confirmed bugs\" \\\n  --evidence \"Enter the files you actually checked and the results\""
        },
        "paragraphs": [
          "Replace the example path src/orders with an existing module, and send the report only after verification. The engine sets CEZ_API_URL, CEZ_PROJECT_ID, and CEZ_TASK_ID for the CLI. Without a cockpit address, the command exits with code 2; it does not assume localhost:4321. Headless mode without a server does not provide the same dispatch channel."
        ]
      },
      {
        "id": "budget",
        "title": "Subtask limits and result reporting",
        "paragraphs": [
          "Dispatch is enabled by default. Set CEZ_DISPATCH=0 to disable it. One parent can have up to four active subtasks at a time, counting queued, running, and waiting. The workspace maxParallel limit also applies, so four active subtasks do not necessarily execute at once.",
          "A subtask reserves budget from its parent's pool. Cezar calculates the available amount from the parent's cost and the subtask reservations. After a subtask finishes, unused budget can return to the pool only if its recorded cost is positive. A missing cost or an initial zero does not release the whole reservation. If the parent has no limit, the algorithm treats its budget as unlimited.",
          "The done, review, failed, and cancelled statuses trigger a report to the parent. review means the subtask has finished its work, but does not automatically merge changes. If the subtask sends no report, the engine builds a result from its state and notes. Cancellation also reports a blocker, so the parent does not wait for a process that is no longer running."
        ]
      }
    ],
    "sources": [
      {
        "path": "packages/cezar/src/core/agent-runner.ts",
        "line": 28,
        "label": "Current runner IDs"
      },
      {
        "path": "packages/cezar/src/core/runner-factory.ts",
        "line": 17,
        "label": "Adapter factory"
      },
      {
        "path": "packages/cezar/src/core/codex-app-server-runner.ts",
        "line": 429,
        "label": "Sandbox and approvalPolicy"
      },
      {
        "path": "packages/cezar/src/core/copilot-acp-runner.ts",
        "line": 109,
        "label": "Copilot command arguments"
      },
      {
        "path": "packages/contract/src/dispatch.ts",
        "line": 140,
        "label": "Dispatch input contract"
      },
      {
        "path": "packages/cezar/src/dispatch/task-cli.ts",
        "line": 27,
        "label": "Task command syntax"
      },
      {
        "path": "packages/cezar/src/dispatch/engine.ts",
        "line": 50,
        "label": "Subtask budget and completion"
      }
    ]
  },
  {
    "id": "cli-configuration",
    "title": "CLI, configuration, and files",
    "summary": "Commands for starting Cezar and selecting a project, plus the files that store settings, limits, and task history.",
    "sections": [
      {
        "id": "start",
        "title": "Starting Cezar from a terminal",
        "paragraphs": [
          "Cezar requires Node.js 20 or later. Start it in your project directory. The package includes a built browser interface. Agent tools must be installed and signed in on the same machine. Cezar uses gh for GitHub integrations.",
          "The default command is serve. The server listens on 127.0.0.1, normally on port 4321. If that port is busy, read the actual address from the cockpit → message. Use --repo to select another directory and --no-open to prevent the browser from opening automatically."
        ],
        "code": {
          "language": "bash",
          "text": "cd /path/to/project\nnpx cezar-run --no-open\n\n# Show help without starting a task\nnpx cezar-run --help\n\n# Specify a directory and port\nnpx cezar-run serve --repo /path/to/project --port 4321 --no-open"
        }
      },
      {
        "id": "commands",
        "title": "Local commands and server commands",
        "table": {
          "headers": [
            "Command",
            "What it does"
          ],
          "rows": [
            [
              "cezar run \"<task>\" --workflow quick-task",
              "Runs a workflow without a server or browser. It executes agent work, which can change files and consume provider quota."
            ],
            [
              "cezar projects / projects add <directory>",
              "Reads or changes the local project registry. No server is required."
            ],
            [
              "cezar runs list --json",
              "Reads tasks from the running server specified by CEZ_API_URL."
            ],
            [
              "cezar task / cezar automation",
              "Controls dispatch and automations on the running server."
            ],
            [
              "cezar init",
              "Adds an example workflow and skill without overwriting existing files."
            ],
            [
              "cezar install / update / versions",
              "Installs or updates the managed launcher, or lists installed versions."
            ]
          ]
        },
        "note": "cezar, cez, cezar-cli, and cezar-run are names for the same program in the package. Examples using cezar alone assume it is installed in PATH. Otherwise, use npx cezar-run."
      },
      {
        "id": "scope",
        "title": "Connecting the CLI to a specific project",
        "paragraphs": [
          "Commands that connect to the server require CEZ_API_URL. Without it, the CLI exits with code 2. Set CEZ_PROJECT_ID to select a project. If it is unset, the command applies to the directory where the server started. Use projects to read project IDs."
        ],
        "code": {
          "language": "bash",
          "text": "export CEZ_API_URL=http://127.0.0.1:4321\nexport CEZ_PROJECT_ID=project-id\nnpx cezar-run runs list --status running,review --json"
        }
      },
      {
        "id": "files",
        "title": "Where configuration is stored",
        "table": {
          "headers": [
            "Path",
            "Contents"
          ],
          "rows": [
            [
              "<repo>/.ai/cezar/config.json",
              "Optional project settings: runner, models, branch, worktree retention count, and instructions."
            ],
            [
              "~/.cezar/config.json",
              "Project registry and resources: concurrency limit, memory limits, and monitoring settings."
            ],
            [
              "<repo>/.ai/cezar/workflows/ and skills/",
              "YAML workflows and local instructions. These can be tracked in Git."
            ],
            [
              "<repo>/.ai/cezar/runs.json and runs/*.ndjson",
              "Task index and event records. This working data is excluded from Git."
            ],
            [
              "~/.cezar/agent-accounts.json",
              "Additional agent accounts and the selected account for each project."
            ],
            [
              "~/.cezar/tracker-connections/",
              "Managed tracker connection data."
            ]
          ]
        },
        "paragraphs": [
          "Use CEZ_HOME to select a directory other than ~/.cezar. This does not move repositories or their .ai/cezar/ directories. Cezar does not automatically load a repository .env file. Required variables must be present in the process environment when it starts."
        ]
      },
      {
        "id": "defaults",
        "title": "Limits and default settings",
        "paragraphs": [
          "Global maxParallel defaults to 2 and accepts values from 1 to 16. memoryLimitMb limits the memory of the entire task process tree; null disables that limit. Both fields belong to resources in the global config.json. Change them in Settings → Resources without replacing the whole file, which also contains the project registry.",
          "The example below is part of an optional project configuration. reviewGate is disabled by default. Setting it to true makes non-autonomous tasks wait for a review of their changes, but does not block Git commands run by the agent. Working in the current directory (in-place) with landing: auto is a separate mode."
        ],
        "code": {
          "language": "json",
          "text": "{\n  \"defaultRunner\": \"codex\",\n  \"baseBranch\": \"main\",\n  \"worktreeRetention\": 10,\n  \"reviewGate\": true\n}"
        },
        "note": "Set baseBranch to the correct branch for the repository. Missing or invalid configuration usually falls back to defaults. Configured lifecycle transitions have separate, strict validation."
      }
    ],
    "sources": [
      {
        "path": "packages/cezar/src/index.ts",
        "line": 56,
        "label": "CLI help and flags"
      },
      {
        "path": "packages/cezar/package.json",
        "line": 6,
        "label": "Command names and Node.js requirement"
      },
      {
        "path": "packages/cezar/src/config.ts",
        "line": 34,
        "label": "Configuration schema and reviewGate"
      },
      {
        "path": "packages/cezar/src/workspace/config.ts",
        "line": 88,
        "label": "Global resources and defaults"
      },
      {
        "path": "packages/cezar/src/paths.ts",
        "line": 16,
        "label": "CEZ_HOME and file paths"
      },
      {
        "path": "docs/reference.md",
        "line": 550,
        "label": "CLI connection to the server"
      },
      {
        "path": ".env.example",
        "line": 1,
        "label": "Environment variables and manual .env setup"
      }
    ]
  },
  {
    "id": "http-api",
    "title": "HTTP API and project scope",
    "summary": "How to select a project, create a task, and read its result over HTTP. Curl examples, error codes, and access rules for an API with no built-in sign-in.",
    "sections": [
      {
        "id": "address",
        "title": "API address and version",
        "paragraphs": [
          "All endpoints use the /api/v1 prefix. The old /api/runs address returns 404. To select a project, use /api/v1/p/<projectId>. The /api/v1/runs address without a project ID refers to the directory where the server started. The default alias selects that same project.",
          "Global operations, such as /api/v1/projects and /api/v1/workspace/events, have no variants with a project prefix. GET /health checks whether the server responds and reports its version. It does not confirm that a particular agent is ready to execute a task."
        ],
        "code": {
          "language": "bash",
          "text": "CEZ_DOCS_API=http://127.0.0.1:4321\nCEZ_DOCS_PROJECT=project-id\n\ncurl --fail-with-body -sS \"$CEZ_DOCS_API/api/v1/health\"\ncurl --fail-with-body -sS \"$CEZ_DOCS_API/api/v1/projects\"\ncurl --fail-with-body -sS \\\n  \"$CEZ_DOCS_API/api/v1/p/$CEZ_DOCS_PROJECT/runs\""
        }
      },
      {
        "id": "create",
        "title": "Creating a task",
        "paragraphs": [
          "In POST /runs, supply exactly one of workflow or steps. The required task field accepts up to 100,000 characters. It can be empty only when you include attachments in images. Use steps to supply 1 to 8 steps instead of a saved workflow name.",
          "This example creates one task using the built-in quick-task workflow. Replace the project ID before sending the request. The command starts the selected local backend: the agent can change files, and execution consumes provider quota."
        ],
        "code": {
          "language": "bash",
          "text": "curl --fail-with-body -sS \\\n  -X POST \"$CEZ_DOCS_API/api/v1/p/$CEZ_DOCS_PROJECT/runs\" \\\n  -H 'Content-Type: application/json' \\\n  --data '{\n    \"workflow\": \"quick-task\",\n    \"task\": \"Add the test described in the team task.\",\n    \"runner\": \"codex\",\n    \"variants\": 1\n  }'"
        },
        "note": "A 201 response confirms that the task was created. It contains the task record; the result comes later. With variants: 2 or 3, the response is {\"runs\": [...]}. Before starting, Cezar checks the selected backend's availability and sign-in state."
      },
      {
        "id": "read",
        "title": "Reading results and events",
        "table": {
          "headers": [
            "Project endpoint",
            "Purpose"
          ],
          "rows": [
            [
              "GET /runs",
              "An array of task records."
            ],
            [
              "GET /runs/:id",
              "One task record, including its current status."
            ],
            [
              "GET /runs/:id/diff",
              "The changes made by the task."
            ],
            [
              "POST /runs/:id/messages",
              "Sends additional text or attachments to the session. The JSON payload is validated."
            ],
            [
              "POST /runs/:id/cancel",
              "Requests a stop. The response contains cancelled."
            ],
            [
              "GET /events",
              "Project events over SSE."
            ]
          ]
        },
        "paragraphs": [
          "The /api/v1/workspace/events stream covers the entire workspace. curl -N disables output buffering, and the response stays open until you disconnect. After reconnecting, read the current task state. A 201 from the earlier request confirmed creation, not completion."
        ],
        "code": {
          "language": "bash",
          "text": "CEZ_DOCS_RUN=task-id\ncurl --fail-with-body -sS \\\n  \"$CEZ_DOCS_API/api/v1/p/$CEZ_DOCS_PROJECT/runs/$CEZ_DOCS_RUN\"\n\ncurl -N --fail-with-body \\\n  \"$CEZ_DOCS_API/api/v1/workspace/events\""
        }
      },
      {
        "id": "errors",
        "title": "Errors and authentication",
        "table": {
          "headers": [
            "Code",
            "What to check"
          ],
          "rows": [
            [
              "400",
              "Data format, required fields, workflow/steps, length limits, or a nonexistent agent account."
            ],
            [
              "403",
              "Host, Origin, and reverse proxy configuration. The request may have been rejected for coming from a different origin."
            ],
            [
              "404",
              "API version, project or task ID, or workflow name."
            ],
            [
              "409",
              "A capability or state conflict, such as a model blocked by configuration or an unavailable backend."
            ]
          ]
        },
        "paragraphs": [
          "Validation errors return JSON with an error field. Preserve the HTTP status code and display this message in the client. This shows the data error instead of a generic network failure. Zod schemas in packages/contract define request and response formats.",
          "Cezar does not issue API tokens or provide its own sign-in system. It accepts local curl requests without Origin. Browser writes are checked against Origin; local mode also checks Host. CORS is open only for health. These checks do not authenticate the user. For a remote server, configure sign-in and TLS in the reverse proxy."
        ]
      }
    ],
    "sources": [
      {
        "path": "docs/reference.md",
        "line": 582,
        "label": "API versioning, scope, and authentication"
      },
      {
        "path": "packages/cezar/src/server/server.ts",
        "line": 1687,
        "label": "Host and Origin checks"
      },
      {
        "path": "packages/cezar/src/server/server.ts",
        "line": 4582,
        "label": "Reading the task list"
      },
      {
        "path": "packages/cezar/src/server/server.ts",
        "line": 4659,
        "label": "Task creation and HTTP responses"
      },
      {
        "path": "packages/contract/src/runs.ts",
        "line": 1112,
        "label": "POST /runs schema"
      },
      {
        "path": "packages/cezar/src/server/validators.ts",
        "line": 68,
        "label": "Validation error format"
      },
      {
        "path": "packages/cezar/src/server/server.ts",
        "line": 6129,
        "label": "SSE streams"
      }
    ]
  },
  {
    "id": "operations",
    "title": "Server operation, security, and recovery",
    "summary": "Where agents execute commands, how to expose the cockpit through a proxy, and how to back up data. Installation and troubleshooting procedures.",
    "sections": [
      {
        "id": "host",
        "title": "Which machine runs the agent",
        "paragraphs": [
          "Agents, tests, and shell commands run on the Cezar server machine. Opening the cockpit on a phone lets you control that machine. A worktree separates task files and its branch, but does not create a container or separate system permissions.",
          "Cezar listens on 127.0.0.1 by default. Remote access needs a front end with TLS and authentication. CEZ_REMOTE=1 changes the available host features but does not add a password or users. In hosted mode, the task terminal is disabled by default. CEZ_TERMINAL=1 makes it available to people admitted by the proxy."
        ]
      },
      {
        "id": "deploy",
        "title": "Installing on a server",
        "paragraphs": [
          "The installer supports ubuntu-vps and macosx-ngrok. A standard Ubuntu installation sets up nginx, HTTPS through Let's Encrypt, htpasswd sign-in, and a systemd service. The macOS variant uses ngrok and launchd.",
          "Run the following command on the target server. It starts the wizard and changes that machine's configuration. The --domain parameter creates a separate instance with its own port and service; it does not configure a local documentation session."
        ],
        "code": {
          "language": "bash",
          "text": "npx cezar-run server-install \\\n  --platform ubuntu-vps \\\n  --domain cezar.example.com"
        },
        "note": "If the host already has a reverse proxy, choose --external-proxy. The existing proxy then handles TLS and sign-in. Use --bind-host only when the proxy cannot reach the loopback address, such as from a container. This parameter does not provide access control."
      },
      {
        "id": "secrets",
        "title": "Agent environment and secrets",
        "paragraphs": [
          "By default, an agent process receives a limited set of variables: required tool settings, backend authentication, and permitted integration variables. CEZ_ENV_PASSTHROUGH=A,B adds the named variables to that set. CEZ_AGENT_ENV_FULL=1 passes the entire host environment, including any secrets it contains.",
          "Settings → Secrets stores values in ~/.cezar/secrets/ using AES-256-GCM encryption. The key lives in the system keychain or a .key file with permissions 0600. Secrets go to the recipients specified by audience, such as check steps. This store is separate from the agent environment and does not automatically pass secrets to agent sessions.",
          "Cezar redacts recognized confidential data from saved transcripts by default. It detects only known patterns and registered values, so logs can still contain private code or data. Telemetry requires consent. Model backends, GitHub, and skill updates have their own network connections."
        ]
      },
      {
        "id": "backup",
        "title": "Preparing a backup",
        "paragraphs": [
          "The procedure below follows Cezar's file layout. It is an operational recommendation; there is no built-in backup command that performs it. Stop active work and data writes while taking the snapshot so the backup captures a consistent state."
        ],
        "steps": [
          "Copy the repository with .git, branches, and any needed worktrees. A branch does not include uncommitted worktree changes.",
          "Include all of <repo>/.ai/cezar/: runs.json, runs/*.ndjson, attachments, configuration, workflows, and automation state.",
          "Copy CEZ_HOME, which defaults to ~/.cezar, with the project registry, agent accounts, and tracker connections. Restrict access to this backup.",
          "Check that you can recover the Secrets key from the keychain. Encrypted files alone are not enough to restore secrets on another host.",
          "Test restoration in a separate directory with a separate CEZ_HOME. Before resuming automations, check project paths, backend sign-in, and access to saved tasks."
        ],
        "note": "config.json.bak restores the registry after the global config.json is damaged or lost. It is not a full backup of tasks, repositories, or credentials."
      },
      {
        "id": "diagnose",
        "title": "Where to start troubleshooting",
        "table": {
          "headers": [
            "Symptom",
            "First step"
          ],
          "rows": [
            [
              "502 from the reverse proxy",
              "Check the service and its logs, then make a local GET /api/v1/health request. The service name depends on the instance."
            ],
            [
              "403 when writing through the proxy",
              "Check that Origin and Host match, including the port. Nginx should forward $http_host without stripping the port."
            ],
            [
              "CLI cannot find tasks",
              "Check CEZ_API_URL, the actual server port, and CEZ_PROJECT_ID."
            ],
            [
              "Empty shell output / temp directory error",
              "Check free space, quota, and inodes on the repository disk. The task temporary directory is .ai/cezar/tmp/<id>."
            ],
            [
              "Project missing after restart",
              "Check CEZ_HOME and the project registry before adding directories again."
            ]
          ]
        },
        "code": {
          "language": "bash",
          "text": "# Read status without restarting the service\ncurl --fail-with-body -sS http://127.0.0.1:4321/api/v1/health\n\n# For the default Ubuntu system service\nsystemctl status cezar\njournalctl -u cezar -n 50\n\n# Disk containing the project\ndf -h /path/to/project\ndf -i /path/to/project"
        },
        "note": "For a user service, add --user. For a named instance, use its actual service name. Do not delete runs.json or worktrees as the first repair step."
      }
    ],
    "sources": [
      {
        "path": "docs/reference.md",
        "line": 676,
        "label": "Remote deployment options"
      },
      {
        "path": "docs/server-install/ubuntu-vps.md",
        "line": 259,
        "label": "Service and reverse proxy troubleshooting"
      },
      {
        "path": ".env.example",
        "line": 147,
        "label": "Terminal in hosted mode"
      },
      {
        "path": "packages/cezar/src/core/agent-env.ts",
        "line": 1,
        "label": "Agent process environment"
      },
      {
        "path": "packages/cezar/src/workspace/secrets.ts",
        "line": 20,
        "label": "Encryption and key location"
      },
      {
        "path": "packages/cezar/src/runs/store.ts",
        "line": 1830,
        "label": "NDJSON event files"
      },
      {
        "path": "packages/cezar/src/workspace/config.ts",
        "line": 329,
        "label": "Configuration recovery from backup"
      },
      {
        "path": "docs/reference.md",
        "line": 520,
        "label": "Temporary directory troubleshooting"
      },
      {
        "path": "packages/cezar/src/telemetry.ts",
        "line": 66,
        "label": "Telemetry consent"
      }
    ]
  }
];
