'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const RESOURCES = [
    ['dictionary', 'database/ja-JP/data_dicionario_index.js', 'JAPANESE_DICTIONARY_INDEX', 3271],
    ['minigame', 'database/ja-JP/data_minigame_kanji_index.js', 'JAPANESE_MINIGAME_KANJI_INDEX', 1015],
    ['listening', 'database/ja-JP/data_escuta_index.js', 'JAPANESE_LISTENING_INDEX', 309],
    ['reading', 'database/ja-JP/data_leitura_index.js', 'JAPANESE_READING_INDEX', 91],
    ['grammar', 'database/ja-JP/data_gramatica_index.js', 'JAPANESE_GRAMMAR_INDEX', 207],
    ['writing', 'database/ja-JP/data_escrita_index.js', 'JAPANESE_WRITING_INDEX', 208],
    ['jlpt', 'database/ja-JP/data_jlpt_pratica_index.js', 'JAPANESE_JLPT_PRACTICE_INDEX', 1060]
];

function load(file, variable) {
    const context = {};
    context.window = context;
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\nglobalThis.__value=${variable};`, context, { filename: file });
    return JSON.parse(JSON.stringify(context.__value));
}

function digest(value) {
    return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

function slug(value) {
    return String(value).replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}

function flatten(resource, value) {
    if (resource === 'minigame') return Object.values(value).flatMap(modules => Object.values(modules).flat())
        .map((item, index) => ({ item, index, area: '' }));
    if (resource === 'grammar') return [
        ...value.references.map((item, index) => ({ item, index, area: 'reference' })),
        ...value.forms.map((item, index) => ({ item, index, area: 'form' }))
    ];
    return value.map((item, index) => ({ item, index, area: '' }));
}

const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const canonical = new Map(ledger.decisions.filter(decision => decision.phase !== 20).map(decision => [decision.id, decision]));
const decisions = ledger.decisions.filter(decision => decision.phase === 20);
assert.equal(decisions.length, 6161, 'ledger derivado deve classificar 6.161 registros');
const decisionById = new Map(decisions.map(decision => [decision.id, decision]));
assert.equal(decisionById.size, decisions.length, 'IDs duplicados no ledger derivado');

const resourceCounts = {};
for (const [resource, file, variable, expected] of RESOURCES) {
    const value = load(file, variable);
    const entries = flatten(resource, value);
    assert.equal(entries.length, expected, `${resource}: quantidade derivada mudou`);
    resourceCounts[resource] = entries.length;
    entries.forEach(({ item, index, area }) => {
        const identity = item.id || `${resource}-${index + 1}${area ? `-${area}` : ''}`;
        const id = `ja-phase20-${resource}-${slug(identity)}`;
        const decision = decisionById.get(id);
        assert.ok(decision, `${id}: decisão derivada ausente`);
        assert.equal(decision.target.file, file, `${id}: arquivo derivado divergiu`);
        assert.equal(decision.target.locator, area ? `${area}[${index}]` : `items[${index}]`, `${id}: localizador divergiu`);
        assert.equal(decision.finalHash, digest(item), `${id}: hash não corresponde ao índice atual`);
    });
}

assert.deepEqual(resourceCounts, {
    dictionary: 3271, minigame: 1015, listening: 309, reading: 91,
    grammar: 207, writing: 208, jlpt: 1060
});

const states = decisions.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(states, { unresolved: 6089, corrected: 71, approved: 1 }, 'estados derivados mudaram sem atualização do relatório');

for (const decision of decisions) {
    assert.ok(['approved', 'corrected', 'unresolved'].includes(decision.state), `${decision.id}: estado derivado não permitido`);
    for (const upstreamId of decision.upstreamDecisionIds) {
        assert.ok(canonical.has(upstreamId), `${decision.id}: origem canônica inexistente ${upstreamId}`);
    }
    if (decision.state === 'corrected' || decision.state === 'approved') {
        assert.ok(decision.upstreamDecisionIds.length > 0, `${decision.id}: correção derivada sem origem`);
        assert.ok(decision.upstreamDecisionIds.every(id => ['approved', 'corrected'].includes(canonical.get(id).state)),
            `${decision.id}: correção derivada promove origem inconclusiva`);
        assert.ok(decision.references.length > 0, `${decision.id}: correção derivada sem fonte`);
    }
}

const byResource = decisions.reduce((result, decision) => {
    const resource = decision.target.resource;
    result[resource] ||= { approved: 0, corrected: 0, unresolved: 0 };
    result[resource][decision.state] += 1;
    return result;
}, {});
assert.equal(byResource.listening.corrected, 55);
assert.equal(byResource.grammar.corrected, 3);
assert.equal(byResource.jlpt.corrected, 2);
assert.equal(byResource.writing.corrected, 11);
assert.equal(byResource.writing.approved, 1);
assert.equal(byResource.dictionary.unresolved, 3271);
assert.equal(byResource.minigame.unresolved, 1015);
assert.equal(byResource.reading.unresolved, 91);
assert.equal(byResource.writing.unresolved, 196);

for (const name of ['GRAMMAR', 'WRITING', 'JLPT']) {
    const neutral = path.join(__dirname, `JAPANESE_${name}_EDITORIAL_REVIEW.md`);
    const legacy = path.join(__dirname, `JAPANESE_${name}_HUMAN_REVIEW.md`);
    assert.ok(fs.existsSync(neutral), `${name}: relatório editorial neutro ausente`);
    assert.ok(!fs.existsSync(legacy), `${name}: caminho legado deveria ter sido migrado`);
    assert.doesNotMatch(fs.readFileSync(neutral, 'utf8'), /inventário humano|revisão humana|pessoa qualificada/i,
        `${name}: nomenclatura humana permaneceu no relatório neutro`);
}

console.log(`Recursos derivados: ${decisions.length} registros; ${states.approved} aprovado, ${states.corrected} corrigidos e ${states.unresolved} pendências preservadas após A1-06.`);
