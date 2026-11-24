const levels = { construct: 0, technique: 1, interpretation: 2 };

function findCycle(nodes) {
  const byId = new Map(nodes.map(node => [node.id, node]));
  const finished = new Set();
  const active = new Set();
  const path = [];

  function visit(id) {
    if (active.has(id)) return [...path.slice(path.indexOf(id)), id];
    if (finished.has(id)) return;
    active.add(id);
    path.push(id);
    for (const dependency of byId.get(id).deps) {
      const cycle = visit(dependency);
      if (cycle) return cycle;
    }
    path.pop();
    active.delete(id);
    finished.add(id);
  }
  for (const { id } of nodes) {
    const cycle = visit(id);
    if (cycle) return cycle;
  }
}

// Report the exact endpoints so the author can correct the source note.
function assemble(notes, links, warn) {
  const byId = new Map(notes.map(note => [note.id, { ...note, deps: new Set() }]));
  const rejected = new Set();
  for (const { source, target } of links) {
    const from = byId.get(source);
    const to = byId.get(target);
    if (!from || !to) continue;
    if (levels[from.type] < levels[to.type]) {
      rejected.add(from.id + ' → ' + to.id + ' (' + from.type + ' → ' + to.type + ')');
    } else {
      from.deps.add(to.id);
    }
  }
  const nodes = [...byId.values()].sort((a,b) => a.id.localeCompare(b.id))
    .map(node => ({ ...node, deps: [...node.deps].sort() }));
  const cycle = findCycle(nodes);
  if (cycle) throw new Error('Dependency cycle: ' + cycle.join(' → '));
  rejected.forEach(warn);
  return {nodes, rejected: [...rejected]};
}

function closure(nodes, id) {
  const byId = new Map(nodes.map(node => [node.id, node]));
  const seen = new Set();
  const pending = [id];
  while (pending.length) {
    const next = pending.pop();
    if (!seen.has(next) && byId.has(next)) {
      seen.add(next);
      pending.push(...byId.get(next).deps);
    }
  }
  return seen;
}

module.exports = { levels, assemble, closure };
