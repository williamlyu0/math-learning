# Foam dependency viewer

**Design decision for version 1** — Display the graph in a VS Code tab. The input is a Foam project folder. The output is an interactive view of the mathematical dependencies recorded in that folder.

## Host choice

| Work | VS Code tab | Standalone browser |
|---|---|---|
| Common core | Inventory notes, resolve links, validate the graph, lay out the DAG and implement selection, filtering and focus | Same |
| Launch and refresh | An extension command uses the open workspace and sends a graph snapshot to a webview | A local command takes a project directory and generates the view. A fresh invocation can refresh a static snapshot |
| Open a source note | The tab sends a known node ID to the extension, which opens the corresponding document beside the graph | The viewer would need a VS Code URI handler or a local launcher. Paths need to identify the correct editor environment, particularly with WSL |
| Delivery and debugging | Package an extension and test the boundary between editor and webview | Package a CLI and test the boundary between browser and editor |
| Relative effort | Moderate. Extra host setup, simpler editor integration | Slightly simpler for graph-only viewing. Comparable overall once opening notes reliably is included |

These are engineering estimates. The unknowns most likely to affect effort are CLI extraction time and layout readability on the real project. Keep extraction and graph transformations independent of the host so a browser version can reuse them.

## Agreed behavior

An arrow means “this note directly depends on that note.” Foundations sit on the left. Dependents sit to their right, so arrows lead back toward prerequisites. The entire typed graph is intended to be acyclic. The three cumulative views are full project, CONSTRUCT + TECH, and CONSTRUCT only.

| Source | Permitted targets |
|---|---|
| CONSTRUCT | CONSTRUCT |
| TECH | CONSTRUCT, TECH |
| INTERP | CONSTRUCT, TECH, INTERP |

Each view keeps the direct links whose endpoints are visible. The hierarchy guarantees that every visible note retains all its dependencies in a valid project.

| Interaction | Result |
|---|---|
| Click a node with full dependencies off | Select it and highlight its direct prerequisites and those links. Dim the rest in place |
| Enable full dependencies | Keep the selection and all recursively reachable prerequisites, including all direct links among them. Remove everything else from the view and reflow. Each shared prerequisite appears once |
| Disable full dependencies | Restore the prior overview layout and viewport for this type filter, with the node still selected |
| Select Open note | Open the selected Markdown file in VS Code and preserve the graph state |
| Ctrl + left-click a node | Open the clicked note directly and preserve the existing graph state |
| Encounter a missing or unknown frontmatter type | Log the file path and reason, skip the note and its incident links, then continue rendering |

## Data and rendering

1. Prefer one workspace-wide export with `foam graph --include-placeholders --workspace <root>` (verified with Foam CLI 0.48.1). On older versions, enumerate notes with `foam list notes --workspace <root> --format json`. Read YAML frontmatter for the project's type and the first Markdown heading for its label.
2. For the older CLI path, resolve outgoing links for typed notes with `foam links --path <path> --outgoing --workspace <root> --format json`. Use workspace-relative paths as node IDs. Keep isolated typed notes. Deduplicate links between the same two notes.
3. Build adjacency lists, check allowed edge types, and detect cycles before laying out the overview. A diagnostic should identify the offending link or an actual cycle so the author can inspect it.
4. Send the snapshot to the webview. Apply selections, type filters and reachability there. Cache the overview separately from the focused layout so toggling back restores positions. Use a layered DAG layout and distinguish note types visually. Use the first ATX Markdown heading as a plain-text label, including literal LaTeX delimiters, and the path as its identity even when two headings match.

## Implementation assumptions and defaults

- Target desktop VS Code with one selected project root. For WSL, assume the folder, Foam process and extension workspace host share the WSL environment. The CLI is installed and available on the host's PATH.
- Map YAML values `construct`, `technique` and `interpretation` to the three display types. Use the filename stem if a typed note lacks a heading. Treat malformed YAML like a missing type and log it. Use the extension output channel for diagnostics.
- Start in the full-project view, with no selection and full dependencies off. Changing type filters clears a selection that the new filter excludes. With no selection, show the current overview. A selected leaf in full-dependency mode appears alone.
- A typed note-to-note link denotes a dependency. Ignore unresolved targets with a diagnostic. Repeated mentions produce one arrow. Treat a self-dependency as a cycle. Report a cycle or invalid type edge and retain the last valid view, or show the diagnostic on initial load. The author decides whether to merge notes or revise links.
- Load on opening and explicit refresh. The tested project has 45 typed notes and a single untyped README. In the build environment, a full single-process load took approximately 0.52 seconds. Per-note process startup may dominate. UI interactions should require zero CLI calls.
- Package renderer assets locally. The graph is read-only. The host invokes the CLI using argument arrays and opens notes by looking up known node IDs. The initial deliverable is a local extension package. Source and design live in `.foam/tools/dependency-viewer/` on the project branch. Deliver a locally installable VSIX. Use the workspace folder as the extraction root. For a multi-root window, ask which folder to view. For native Windows npm installations, launch the global Foam entry with Node.
- Keep source comments selective. Explain why layout direction and arrow direction differ, why overview coordinates are retained, and any CLI normalization that would surprise a maintainer. Use clear names for straightforward operations.

## Acceptance checks

Use the square-matrix inverse note as a real selection and a small diamond-shaped graph with a shared prerequisite as a controlled example. Verify arrow direction, all three filters, direct highlighting, transitive focus with no unrelated nodes, a single copy of the shared prerequisite, and exact overview restoration. Verify that both open-note actions target the correct file, including duplicate basenames in different folders. Add an untyped README and confirm that a warning appears while the graph still renders. Exercise a cycle and an invalid type edge to check that the diagnostics name the relevant notes.

## References

[Foam note inventory](https://docs.foam.md/tools/cli/list/) · [Foam link resolution](https://docs.foam.md/tools/cli/links/) · [VS Code webviews](https://code.visualstudio.com/api/extension-guides/webview)
