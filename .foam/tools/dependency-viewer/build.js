const { build } = require('esbuild');
Promise.all([
  build({entryPoints:['src/extension.js'], bundle:true, platform:'node', external:['vscode'], outfile:'dist/extension.js'}),
  build({entryPoints:['src/view.js'], bundle:true, platform:'browser', outfile:'dist/view.js'})
]).catch(() => process.exitCode = 1);
