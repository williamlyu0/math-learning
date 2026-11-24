const test = require('node:test');
const assert = require('node:assert/strict');
const { assemble, closure } = require('../src/graph');
const { metadata } = require('../src/load');
const note = (id,type) => ({id, type, title:id});
const link = (source,target) => ({source,target});

test('a shared prerequisite appears once; type filters retain dependencies', () => {
  const notes = [note('C','construct'),note('T','technique'),note('I','interpretation'),note('R','interpretation'),note('alone','construct')];
  const links = [link('R','I'), link('R','T'), link('I','C'), link('T','C'), link('T','C')];
  const graph = assemble(notes,links,assert.fail);
  assert.deepEqual([...closure(graph.nodes,'R')].sort(), ['C','I','R','T']);
  assert.deepEqual(graph.nodes.find(n=>n.id==='T').deps, ['C']);
  assert.equal(graph.nodes.length,5);
});
test('invalid links and cycles identify the source notes', () => {
  const notes = [note('C','construct'),note('T','technique')];
  assert.match(assemble(notes,[link('C','T')],()=>{}).rejected[0], /C → T/);
  for (const links of [[link('C','C')],[link('C','D'),link('D','C')]]) {
    assert.throws(()=>assemble([...notes,note('D','construct')],links,assert.fail),/cycle: C → (D → )?C/);
  }
});
test('YAML type and literal heading are independent of the path', () => {
  assert.deepEqual(metadata('---\r\ntype: "technique"\r\n---\r\n~~~\n# Example\n~~~\n# Is $x=1$?', 'folder/file.md'),
    {id:'folder/file.md',type:'technique',title:'Is $x=1$?'});
  assert.equal(metadata('---\ntype: construct\n---\n', 'a/same.md').title, 'same');
  for (const s of ['# README','---\ntype: other\n---\n','---\ntype: [\n---\n']) {
    assert.throws(()=>metadata(s,'note.md'));
  }
});
