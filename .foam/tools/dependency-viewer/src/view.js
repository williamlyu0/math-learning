const dagre = require('@dagrejs/dagre');
const { levels, closure } = require('./graph');

const api = acquireVsCodeApi();
const el = id => document.getElementById(id);
const viewport = el('viewport');
const cardLayer = el('nodes');
const edgeLayer = el('edges').querySelector('g');
const shortType = { construct:'CONSTRUCT', technique:'TECH', interpretation:'INTERP' };
let project = [];
let selected;
let focused = false;
let scale = 1;
let size = {width:1, height:1};
let overview;
let shown = [];
const layouts = new Map();

// Position data belongs to one type filter; a focused layout must never overwrite it.
function camera() { return {scale, x:viewport.scrollLeft, y:viewport.scrollTop}; }
function zoom(value) {
  scale = Math.min(3, Math.max(0.03, value));
  el('canvas').style.transform = 'scale(' + scale + ')';
  el('extent').style.width = Math.ceil(size.width * scale) + 'px';
  el('extent').style.height = Math.ceil(size.height * scale) + 'px';
}
function restore(view) {
  zoom(view?.scale ?? 1);
  viewport.scrollTo(view?.x ?? 0, view?.y ?? 0);
}
function fit() {
  zoom(Math.min(1, (viewport.clientWidth - 4) / size.width, (viewport.clientHeight - 4) / size.height));
  viewport.scrollTo(0,0);
}
function resize(factor) {
  const x = (viewport.scrollLeft + viewport.clientWidth/2)/scale;
  const y = (viewport.scrollTop + viewport.clientHeight/2)/scale;
  zoom(scale * factor);
  viewport.scrollTo(x*scale-viewport.clientWidth/2, y*scale-viewport.clientHeight/2);
}
function highlight() {
  const node = project.find(n => n.id === selected);
  const direct = new Set(node?.deps);
  for (const card of cardLayer.children) {
    const current = card.dataset.id === selected;
    card.classList.toggle('selected', current);
    card.setAttribute('aria-pressed', String(current));
    card.classList.toggle('muted', Boolean(node && !focused && !current && !direct.has(card.dataset.id)));
  }
  for (const edge of edgeLayer.children) {
    const active = edge.dataset.source === selected;
    edge.classList.toggle('active', active);
    edge.classList.toggle('muted', Boolean(node && !focused && !active));
  }
  el('open').disabled = !node;
}
function select(id) {
  selected = id;
  if (!el('full').checked) return highlight();
  if (!focused) overview = camera();
  render();
  fit();
}
function makeCard(node) {
  const card = document.createElement('button');
  card.className = 'node ' + node.type;
  card.dataset.id = node.id;
  card.title = node.id;
  const category = document.createElement('small');
  category.textContent = shortType[node.type];
  card.append(category, document.createTextNode(node.title));
  card.onclick = event => {
    if (event.ctrlKey || event.metaKey) api.postMessage({kind:'open', id:node.id});
    else select(node.id);
  };
  return card;
}
function render() {
  const visible = project.filter(node => levels[node.type] <= Number(el('filter').value));
  if (!visible.some(n => n.id === selected)) selected = undefined;
  focused = Boolean(selected && el('full').checked);
  const included = focused && closure(visible, selected);
  shown = included ? visible.filter(node => included.has(node.id)) : visible;
  const cards = shown.map(makeCard);
  cardLayer.replaceChildren(...cards);
  const filter = el('filter').value;
  let graph = !focused && layouts.get(filter);
  if (!graph) {
    graph = new dagre.graphlib.Graph();
    // Edges point to prerequisites, so right-to-left ranking puts foundations on the left.
    graph.setGraph({rankdir:'RL', ranksep:72, nodesep:24, marginx:24, marginy:24});
    graph.setDefaultEdgeLabel(() => ({}));
    shown.forEach((node, i) => graph.setNode(node.id, {width:cards[i].offsetWidth, height:cards[i].offsetHeight}));
    for (const node of shown) for (const dep of node.deps) if (graph.hasNode(dep)) graph.setEdge(node.id, dep);
    if (shown.length) dagre.layout(graph);
    if (!focused) layouts.set(filter, graph);
  }
  size = {width:graph.graph().width || 1, height:graph.graph().height || 1};
  for (const id of ['canvas','edges']) {
    el(id).style.width = size.width + 'px';
    el(id).style.height = size.height + 'px';
  }
  for (const card of cards) {
    const box = graph.node(card.dataset.id);
    card.style.left = box.x - box.width/2 + 'px';
    card.style.top = box.y - box.height/2 + 'px';
  }
  const paths = graph.edges().map(edge => {
    const line = document.createElementNS('http://www.w3.org/2000/svg','path');
    line.setAttribute('d', graph.edge(edge).points.map((p,i) => (i ? 'L' : 'M') + p.x + ',' + p.y).join(' '));
    line.setAttribute('marker-end','url(#arrow)');
    line.dataset.source = edge.v;
    return line;
  });
  edgeLayer.replaceChildren(...paths);
  el('summary').textContent = shown.length + ' notes · ' + paths.length + ' links';
  zoom(scale);
  highlight();
}
el('full').onchange = () => {
  if (el('full').checked && selected) overview = camera();
  render();
  if (focused) fit();
  else if (overview) { restore(overview); overview = undefined; }
};
el('filter').onchange = () => {
  overview = undefined;
  if (el('full').checked) overview = {scale:1,x:0,y:0};
  render();
  if (focused) fit(); else restore();
};
el('open').onclick = () => selected && api.postMessage({kind:'open', id:selected});
el('refresh').onclick = () => api.postMessage({kind:'refresh'});
el('log').onclick = () => api.postMessage({kind:'log'});
el('smaller').onclick = () => resize(1/1.25);
el('larger').onclick = () => resize(1.25);
el('fit').onclick = fit;
window.addEventListener('message', ({data}) => {
  el('refresh').disabled = data.kind === 'loading';
  el('notice').hidden = data.kind === 'graph';
  if (data.kind === 'graph') {
    const view = camera();
    layouts.clear();
    project = data.nodes;
    render();
    restore(view);
  } else if (data.kind === 'loading') el('notice').firstElementChild.textContent = 'Reading Foam project…';
  else if (data.kind === 'error') el('notice').firstElementChild.textContent =
    (project.length ? 'Refresh failed. Showing the previous graph.\n' : '') + data.text;
});
api.postMessage({kind:'ready'});
