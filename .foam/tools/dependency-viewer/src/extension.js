const vscode = require('vscode');
const { readFileSync } = require('node:fs');
const crypto = require('node:crypto');
const { loadProject } = require('./load');

function activate(context) {
  const log = vscode.window.createOutputChannel('Foam Dependencies');
  const panels = new Map();
  context.subscriptions.push(log, vscode.commands.registerCommand('foamDependencies.open', async () => {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders?.length) return vscode.window.showInformationMessage('Open a Foam project folder first.');
    const folder = folders.length === 1 ? folders[0] : await vscode.window.showWorkspaceFolderPick();
    if (!folder) return;
    const key = folder.uri.toString();
    if (panels.has(key)) return panels.get(key).reveal();
    const local = name => vscode.Uri.joinPath(context.extensionUri, name);
    const panel = vscode.window.createWebviewPanel('foamDependencies', 'Foam Dependencies', vscode.ViewColumn.Active, {
      enableScripts: true, retainContextWhenHidden: true, localResourceRoots: [local('media'), local('dist')]
    });
    panels.set(key, panel);
    const web = panel.webview;
    const controller = new AbortController();
    let current = new Set();
    let loading = false;
    function publish(graph) {
      current = new Set(graph.nodes.map(n => n.id));
      return web.postMessage({kind:'graph', ...graph});
    }
    async function refresh() {
      if (loading) return;
      loading = true;
      await web.postMessage({kind:'loading'});
      try {
        const graph = await loadProject(folder.uri.fsPath, msg => log.appendLine(msg), controller.signal);
        if (graph.rejected.length) {
          await web.postMessage({kind:'error', text:'Invalid type dependency: '+graph.rejected.join('\n')});
        } else await publish(graph);
      } catch (error) {
        if (!controller.signal.aborted) {
          log.appendLine(error.message);
          await web.postMessage({kind:'error', text:error.message});
        }
      } finally { loading = false; }
    }
    panel.onDidDispose(() => { controller.abort(); panels.delete(key); });
    panel.webview.onDidReceiveMessage(async msg => {
      if (msg.kind === 'ready' || msg.kind === 'refresh') return refresh();
      if (msg.kind === 'log') return log.show(true);
      if (msg.kind === 'open' && current.has(msg.id)) {
        try {
          const doc = await vscode.workspace.openTextDocument(vscode.Uri.joinPath(folder.uri, msg.id));
          await vscode.window.showTextDocument(doc, {viewColumn:vscode.ViewColumn.Beside, preview:true});
        } catch (error) { vscode.window.showErrorMessage(error.message); }
      }
    });
    const nonce = crypto.randomBytes(16).toString('hex');
    web.html = readFileSync(local('media/view.html').fsPath, 'utf8')
      .replaceAll('__SOURCE__', web.cspSource).replaceAll('__NONCE__', nonce)
      .replace('__CSS__', web.asWebviewUri(local('media/view.css')).toString())
      .replace('__JS__', web.asWebviewUri(local('dist/view.js')).toString());
  }));
}
module.exports = { activate };
