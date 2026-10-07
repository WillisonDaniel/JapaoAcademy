'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const digest = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const context = {};
context.window = context;
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(ROOT, 'database/ja-JP/data_escuta_index.js'), 'utf8')}\nglobalThis.__value=JAPANESE_LISTENING_INDEX;`, context);
const items = JSON.parse(JSON.stringify(context.__value));
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const canonical = new Map(ledger.decisions.filter(decision => decision.phase !== 20).map(decision => [decision.id, decision]));
const derived = new Map(ledger.decisions.filter(decision => decision.phase === 20 && decision.target.resource === 'listening').map(decision => [decision.id, decision]));

assert.equal(items.length, 319, 'Escuta deve preservar 319 trechos reais');
assert.equal(derived.size, 319, 'Escuta deve possuir 319 decisões derivadas');

for (const [index, item] of items.entries()) {
    const id = `ja-phase20-listening-${item.id}`;
    const decision = derived.get(id);
    assert.ok(decision, `${id}: decisão derivada ausente`);
    assert.ok(['approved', 'corrected'].includes(decision.state), `${id}: trecho inconclusivo`);
    assert.equal(decision.finalHash, digest(item), `${id}: hash divergente`);
    assert.equal(decision.target.locator, `items[${index}]`);
    assert.equal(decision.upstreamDecisionIds.length, 1, `${id}: origem canônica ambígua`);
    const upstream = canonical.get(decision.upstreamDecisionIds[0]);
    assert.ok(upstream && ['approved', 'corrected'].includes(upstream.state), `${id}: origem não sustentada`);
    assert.ok(decision.references.length > 0, `${id}: fonte ausente`);
    assert.equal(item.displayText, item.audioText, `${id}: texto visível e áudio divergentes`);
    assert.doesNotMatch(JSON.stringify(item), /\[Seu Nome\]/i, `${id}: marcador nominal residual`);
}

const states = [...derived.values()].reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(states, { corrected: 290, approved: 29 });

const expected = new Map([
    ['ja-listening-a2-a2_mod_03-dialog-2', ['趣味は何ですか。', 'Shumi wa nan desu ka.', 'Qual é o seu hobby?']],
    ['ja-listening-a2-a2_mod_09-dialog-1', ['日本語が上手ですね！', 'Nihongo ga jouzu desu ne!', 'Seu japonês é muito bom!']],
    ['ja-listening-a2-a2_mod_18-dialog-1', ['お客様、お部屋は四〇二号室です。これは鍵です。', 'Okyaku-sama, oheya wa yon-maru-ni-gou shitsu desu. Kore wa kagi desu.', 'Seu quarto é o 402. Aqui está a chave.']],
    ['ja-listening-b2-b2_mod_19-dialog-1', ['生きがいは何ですか。', 'Ikigai wa nan desu ka?', 'O que dá sentido à sua vida?']]
]);
for (const [id, [japanese, romaji, translation]] of expected) {
    const item = items.find(candidate => candidate.id === id);
    assert.ok(item, `${id}: correção não projetada`);
    assert.equal(item.displayText, japanese);
    assert.equal(item.romaji, romaji);
    assert.equal(item.translation, translation);
    const upstream = canonical.get(derived.get(`ja-phase20-listening-${id}`).upstreamDecisionIds[0]);
    assert.equal(upstream.resolutionPhase, '22A');
}

assert.match(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8'), /idiomas-academy-v51/);
console.log('Fase 22A: 319/319 trechos de Escuta sustentados; 29 aprovados, 290 corrigidos e nenhuma pendência.');
