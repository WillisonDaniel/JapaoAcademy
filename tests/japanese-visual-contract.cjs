'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const css = read('japanese-experience.css');
const pages = ['escuta', 'leitura', 'gramatica', 'escrita', 'jlpt'];

const referencedTokens = new Set([...css.matchAll(/var\((--jp-[a-z0-9-]+)/g)].map(match => match[1]));
const definedTokens = new Set([...css.matchAll(/(--jp-[a-z0-9-]+)\s*:/g)].map(match => match[1]));
const missingTokens = [...referencedTokens].filter(token => !definedTokens.has(token));
assert.deepEqual(missingTokens, [], `tokens japoneses sem definicao: ${missingTokens.join(', ')}`);
console.log(`✓ ${referencedTokens.size} tokens visuais japoneses possuem definicao`);

[
    ['jp-listening-page', '#0369a1'],
    ['jp-reading-page', '#0f766e'],
    ['jp-grammar-page', '#5b21b6'],
    ['jp-writing-page', '#c2413b'],
    ['jp-jlpt-page', '#b91c1c']
].forEach(([pageClass, color]) => {
    assert.match(css, new RegExp(`\\.${pageClass}\\s*\\{[^}]*--jp-page-primary:\\s*${color}`, 's'));
});
console.log('✓ cinco experiencias possuem paletas pedagogicas independentes');

['jp-action-primary', 'jp-action-secondary', 'jp-action-tertiary', 'jp-action-accent'].forEach(className => {
    assert.match(css, new RegExp(`\\.${className}`));
});
assert.match(css, /#jlpt-start\s*\{[^}]*background:\s*linear-gradient[^!]+!important/s);
assert.match(css, /#jlpt-start\s*\{[^}]*box-shadow:[^!]+!important/s);
assert.doesNotMatch(css, /--jp-(?:line|surface-raised|paper-deep|radius-xl|shadow-soft|red)\s*:\s*(?:;|$)/m);
console.log('✓ superficies, hierarquia de acoes e CTA JLPT possuem contrato visual');

pages.forEach(page => {
    const html = read(`html/ja-JP/${page}.html`);
    assert.match(html, /japanese-experience\.css\?v=46/);
    assert.match(html, /class="japanese-experience jp-study-page/);
    assert.match(html, /jp-action-(?:primary|secondary|tertiary|accent)/);
    assert.match(html, /jp-filter-field/);
});
assert.match(css, /\.jp-filter-field\s*\{[^}]*gap:\s*12px/s);
assert.match(css, /\.dict-filter-pill\s*\{[^}]*min-height:\s*44px/s);
assert.match(css, /focus-visible\s*\{[^}]*outline:\s*2px/s);
assert.match(read('sw.js'), /const CACHE_NAME = 'idiomas-academy-v51'/);
assert.match(read('js/japanese/jlpt.js'), /is-correct.*is-incorrect.*is-unanswered/);
assert.match(read('js/japanese/reading.js'), /dataset\.answerState = correct \? 'correct' : 'incorrect'/);
assert.match(read('js/japanese/grammar.js'), /dataset\.answerState = correct \? 'correct' : 'incorrect'/);
console.log('✓ paginas e campos usam os assets v46; o cache PWA editorial usa v51');

console.log('\nRedesign cromatico japones: 4/4 contratos aprovados.');
