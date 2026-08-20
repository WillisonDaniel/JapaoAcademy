'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const ledger = JSON.parse(read('tests/JAPANESE_EDITORIAL_LEDGER.json'));
const catalog = JSON.parse(read('tests/JAPANESE_EDITORIAL_SOURCES.json'));
const publicPages = [
    'hub_japones.html', 'html/ja-JP/curso.html', 'html/ja-JP/hiragana.html',
    'html/ja-JP/katakana.html', 'html/ja-JP/kanji.html', 'html/ja-JP/kanji_n5.html',
    'html/ja-JP/kanji_n3.html', 'html/ja-JP/kanji_n1.html', 'html/ja-JP/dicionario.html',
    'html/ja-JP/minigame.html', 'html/ja-JP/escuta.html', 'html/ja-JP/leitura.html',
    'html/ja-JP/gramatica.html', 'html/ja-JP/escrita.html', 'html/ja-JP/jlpt.html'
];

assert.equal(ledger.decisions.length, 23534, 'cobertura consolidada do ledger mudou');
const states = ledger.decisions.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(states, { corrected: 903, unresolved: 16449, approved: 6182 });
assert.equal(ledger.decisions.filter(item => item.phase === 18).length, 2315);
assert.equal(ledger.decisions.filter(item => item.phase === 19).length, 14899);
assert.equal(ledger.decisions.filter(item => item.phase === 20).length, 6161);
assert.equal(catalog.sources.length + catalog.externalSources.length, 23);

for (const file of publicPages) {
    const source = read(file);
    assert.doesNotMatch(source, /revis[aã]o editorial humana|aprova[cç][aã]o humana/i, `${file}: atribuição humana pública permaneceu`);
    if (file !== 'html/ja-JP/minigame.html') {
        assert.match(source, /japanese-experience\.css\?v=46/, `${file}: asset visual não está na release v46`);
    }
}

const hub = read('hub_japones.html');
assert.match(hub, /309 trechos/);
assert.doesNotMatch(hub, /265 trechos/);
for (const file of ['html/ja-JP/escuta.html', 'html/ja-JP/leitura.html', 'html/ja-JP/gramatica.html', 'html/ja-JP/escrita.html', 'html/ja-JP/jlpt.html']) {
    assert.match(read(file), /decisão editorial inconclusiva|aprovação editorial/i, `${file}: limite editorial público ausente`);
}

const course = read('html/ja-JP/curso.html');
assert.doesNotMatch(course, /Intermediário & Fluência Social|Imersão Total & Maestria/);
assert.match(course, /Intermediário & Comunicação prática/);
assert.match(course, /Integração e conclusão/);

const css = read('japanese-experience.css');
assert.match(css, /\.jp-study-page \.dict-filter-pill\s*\{[^}]*min-height:\s*44px/s);
assert.match(css, /\.jp-study-page \.jp-check-field\s*\{[^}]*min-height:\s*44px/s);
assert.match(read('html/ja-JP/jlpt.html'), /<label class="jp-check-field"[^>]*>[\s\S]*?id="jlpt-timer-enabled"/);
assert.match(read('sw.js'), /const CACHE_NAME = 'idiomas-academy-v47'/);

for (const name of ['GRAMMAR', 'WRITING', 'JLPT']) {
    assert.ok(fs.existsSync(path.join(__dirname, `JAPANESE_${name}_EDITORIAL_REVIEW.md`)));
    assert.ok(!fs.existsSync(path.join(__dirname, `JAPANESE_${name}_HUMAN_REVIEW.md`)));
}

console.log(`Release textual: ${ledger.decisions.length} alvos; ${states.approved + states.corrected} sustentados e ${states.unresolved} inconclusivos preservados após A1-25.`);
