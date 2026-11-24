const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const path = require('node:path');
const fs = require('node:fs/promises');
const YAML = require('yaml');
const { assemble, levels } = require('./graph');
const exec = promisify(execFile);

async function launcher() {
  if (process.platform !== 'win32') return ['foam'];
  // npm installs a .cmd shim on Windows. Run the CLI entry with Node so paths
  // and note names never pass through a command shell.
  for (const dir of (process.env.PATH || '').split(path.delimiter)) {
    const entry = path.join(dir, 'node_modules', 'foam-cli', 'out', 'index.js');
    try { await fs.access(entry); return ['node', entry]; } catch {}
  }
  return ['foam.exe'];
}

function metadata(text, id) {
  const source = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const front = /^---[ \t]*\n([\s\S]*?)\n(?:---|\.\.\.)[ \t]*(?:\n|$)/.exec(source);
  if (!front) throw new Error(source.startsWith('---\n') ? 'unterminated frontmatter' : 'missing frontmatter type');
  const type = YAML.parse(front[1])?.type;
  if (!Object.hasOwn(levels, type)) throw new Error(type == null ? 'missing frontmatter type' : 'unknown frontmatter type ' + JSON.stringify(type));
  let fence;
  for (const line of source.slice(front[0].length).split('\n')) {
    const marker = /^ {0,3}(\x60{3,}|~{3,})/.exec(line)?.[1];
    if (marker) {
      if (!fence) fence = marker;
      else if (marker.startsWith(fence) && line.trim() === marker) fence = undefined;
      continue;
    }
    const heading = !fence && /^ {0,3}#{1,6}\s+(.+?)\s*$/.exec(line);
    if (heading) return { id, type, title: heading[1].replace(/\s+#+$/, '') };
  }
  return { id, type, title: path.basename(id, path.extname(id)) };
}

async function loadProject(root, warn, signal) {
  const [bin, ...prefix] = await launcher();
  async function run(...args) {
    let result;
    try {
      result = await exec(bin, [...prefix, ...args, '--workspace', root], {
        cwd: root, signal, windowsHide: true, maxBuffer: 64 * 1024 * 1024,
        env: { ...process.env, FOAM_TELEMETRY: '0' }
      });
    } catch (error) {
      if (error.code === 'ENOENT') throw new Error('Foam CLI unavailable. Install foam-cli on the workspace host and check its PATH.');
      throw error;
    }
    if (result.stderr.trim()) warn(result.stderr.trim());
    return JSON.parse(result.stdout);
  }
  let ids, links;
  try {
    const graph = await run('graph', '--include-placeholders');
    ids = graph.nodes.filter(n => {
      if (n.type === 'placeholder') warn('Unresolved target: ' + n.id);
      return n.type !== 'placeholder';
    }).map(n => n.id);
    links = graph.links;
  } catch (error) {
    // Earlier Foam releases expose only list/links. Do not hide real IO failures.
    if (!/unknown (command|subcommand)|unrecognized command|unexpected token.*(usage|foam)/is.test(error.message)) throw error;
    ids = (await run('list', 'notes', '--format', 'json')).map(n => n.path);
  }
  const notes = [];
  const known = new Set(ids);
  for (const id of ids) {
    signal?.throwIfAborted();
    if (!/\.md$/i.test(id)) continue;
    const relative = path.relative(root, path.resolve(root, id));
    if (relative.startsWith('..' + path.sep) || path.isAbsolute(relative) || relative === '..') continue;
    try { notes.push(metadata(await fs.readFile(path.join(root, relative), 'utf8'), id)); }
    catch (error) { warn(id + ': ' + error.message + ' (skipped)'); }
  }
  if (!links) {
    links = [];
    for (const {id} of notes) {
      const data = await run('links', '--path', id, '--outgoing', '--format', 'json');
      for (const entry of data.outgoing) {
        if (!known.has(entry.path)) warn(id + ': unresolved target ' + entry.path);
        links.push({source: id, target: entry.path});
      }
    }
  }
  return assemble(notes, links, warn);
}
module.exports = { loadProject, metadata };
