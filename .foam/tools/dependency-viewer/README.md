# Foam Dependency Viewer

Open a Foam workspace as a folder in desktop VS Code. Install the supplied VSIX with **Extensions: Install from VSIX**, then run **Foam: Open Dependency Graph** from the Command Palette. For WSL, install the extension in the WSL workspace host and make the `foam` executable available there. The workspace must be trusted.

Use the **View** selector for the three cumulative type filters. Click a note to highlight its direct dependencies. **Show all dependencies** reflows the selected note and its prerequisites. Toggle it off to return to the overview. **Open note** or Ctrl + click opens the Markdown file beside the graph. Scroll to pan, use **+** and **−** to zoom, or **Fit** to see the whole view. **Refresh** rereads saved files.

**View log** shows skipped notes and their paths. A type violation or a dependency cycle stops that refresh; fix the named link in the source note and refresh again. The previous successful graph stays available.

## Build from source

From this directory, using Node.js 22 or newer:

```sh
npm ci
npm test
npx --yes @vscode/vsce@3 package --no-dependencies --skip-license
```

The packaging command runs the build and includes the bundled renderer and extension host. The Foam CLI is installed separately (`npm install -g foam-cli`). Version 0.48.1 supports the single-process graph export. Older installations with JSON list/links commands use a slower per-note extraction. On native Windows, a standard npm global installation and Node on PATH are assumed.

See [the design](DESIGN.md) for graph semantics and integration assumptions.
