# Cezar documentation site

A static reference for Cezar features, planned work, technical architecture, and three walkthroughs: a first task, Design Mode, and parallel tasks.

## Preview

From the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory docs/site
```

Open http://127.0.0.1:4173/. Search and filters run in the browser. The site has no build step or server dependencies.

## Hosting

Serve the contents of this directory from any static web server. Navigation uses URL fragments, so no route rewrites are required. Assets and copied guide links also work when the site is served from a subdirectory.

The GitHub header fetches the public repository star count and caches it in the browser for one hour. If that request fails, it retains the last known count. Documentation search does not send queries to a server.

## Content

- `data.js`, `expanded.js`, `feature-copy.js`, and `audit-data.js` contain feature descriptions and source references.
- `technical-data.js` contains architecture, configuration, workflow, and API reference articles.
- `how-to-data.js` contains walkthroughs, examples, and troubleshooting notes.
- `search.js` and `catalog.js` provide search, topic filters, and availability filters.
- `diagrams.js`, `feature-diagrams.js`, and `visual-navigation.js` render diagrams and navigation cards.

Entries distinguish Available, Opt-in, Experimental, and Planned behavior. Planned entries link to specifications. Source references retain the reviewed commit and, where available, line numbers; they do not imply that the latest release includes every feature.

When changing a feature description, check its implementation and specification, update its status and source reference, and review its search terms. Keep walkthrough links consistent with feature IDs.

## Checks

```sh
node docs/site/check.mjs
```

Also check search, filters, guide navigation, and diagram layout in a browser at desktop and mobile widths.

## Assets

Fonts are stored locally with their license files in `fonts/`. Product screenshots come from this repository. The GitHub mark and its license are in `images/brands/`.
