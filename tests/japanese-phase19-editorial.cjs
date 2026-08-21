'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const KANA = [
    ['Hiragana', 'database/ja-JP/data_hiragana.js', 'HIRA_COURSE_DATA', 8],
    ['Katakana', 'database/ja-JP/data_katakana.js', 'KATA_COURSE_DATA', 8]
];
const KANJI = ['N5', 'N4', 'N3', 'N2', 'N1'].map(level => [
    level,
    `database/ja-JP/data_kanji_${level.toLowerCase()}.js`,
    `kanji${level}Data`
]);
const EXPECTED_KINDS = {
    'kana-metadata': 16,
    'kana-reading': 406,
    'kana-guidance': 182,
    'kana-vocab': 142,
    'kana-quiz': 140,
    'kana-reference-metadata': 8,
    'kanji-metadata': 92,
    'kanji-grammar': 89,
    'kanji-reading-text': 91,
    'kanji-comprehension': 181,
    'kanji-identity': 2215,
    'kanji-content': 2215,
    'kanji-reading-on': 2215,
    'kanji-reading-kun': 2215,
    'kanji-example': 3812,
    'kanji-quiz': 880
};

function load(file, variable) {
    const context = { console };
    context.window = context;
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\nglobalThis.__value=${variable};`, context, { filename: file });
    return JSON.parse(JSON.stringify(context.__value));
}

function digest(value) {
    return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

function slug(value) {
    return value.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}

function add(result, scope, file, ownerId, locator, kind, value, character) {
    result.push({
        id: `ja-phase19-${slug(scope)}-${slug(ownerId)}-${slug(locator)}`,
        scope, file, ownerId, locator, kind, value, character
    });
}

function inventoryKana(scope, file, modules) {
    const result = [];
    modules.forEach((module, moduleIndex) => {
        const owner = `${scope.toLowerCase()}-m${moduleIndex + 1}`;
        add(result, scope, file, owner, 'module.metadata', 'kana-metadata', {
            title: module.title, desc: module.desc, isReferenceTable: Boolean(module.isReferenceTable)
        });
        (module.chars || []).forEach((item, index) => {
            add(result, scope, file, owner, `chars[${index}].reading`, 'kana-reading', { char: item.char, romaji: item.romaji });
            add(result, scope, file, owner, `chars[${index}].guidance`, 'kana-guidance', { mnemonic: item.mnemonic, stroke: item.stroke });
        });
        (module.vocab || []).forEach((item, index) => add(result, scope, file, owner, `vocab[${index}]`, 'kana-vocab', item));
        (module.quiz || []).forEach((item, index) => add(result, scope, file, owner, `quiz[${index}]`, 'kana-quiz', item));
        (module.sections || []).forEach((section, sectionIndex) => {
            add(result, scope, file, owner, `sections[${sectionIndex}].metadata`, 'kana-reference-metadata', { title: section.title, cols: section.cols });
            (section.items || []).forEach((item, itemIndex) => add(result, scope, file, owner,
                `sections[${sectionIndex}].items[${itemIndex}]`, 'kana-reading', { char: item.k, romaji: item.r }));
        });
    });
    return result;
}

function inventoryKanji(scope, file, modules) {
    const result = [];
    modules.forEach(module => {
        const owner = `${scope.toLowerCase()}-m${module.module}`;
        add(result, scope, file, owner, 'module.metadata', 'kanji-metadata', {
            module: module.module, title: module.title, description: module.description,
            isReviewTable: Boolean(module.isReviewTable)
        });
        if (module.grammar) add(result, scope, file, owner, 'grammar', 'kanji-grammar', module.grammar);
        if (module.readingText) {
            const { comprehensionQuiz = [], ...reading } = module.readingText;
            add(result, scope, file, owner, 'readingText.content', 'kanji-reading-text', reading);
            comprehensionQuiz.forEach((item, index) => add(result, scope, file, owner,
                `readingText.comprehensionQuiz[${index}]`, 'kanji-comprehension', item));
        }
        (module.kanjis || []).forEach((kanji, kanjiIndex) => {
            const base = `kanjis[${kanjiIndex}]`;
            add(result, scope, file, owner, `${base}.identity`, 'kanji-identity', { character: kanji.character }, kanji.character);
            add(result, scope, file, owner, `${base}.content`, 'kanji-content', {
                meaning: kanji.meaning, mnemonic: kanji.mnemonic, radicals: kanji.radicals
            }, kanji.character);
            add(result, scope, file, owner, `${base}.onyomi`, 'kanji-reading-on', kanji.onyomi, kanji.character);
            add(result, scope, file, owner, `${base}.kunyomi`, 'kanji-reading-kun', kanji.kunyomi, kanji.character);
            (kanji.examples || []).forEach((item, index) => add(result, scope, file, owner,
                `${base}.examples[${index}]`, 'kanji-example', item, kanji.character));
        });
        (module.quiz || []).forEach((item, index) => add(result, scope, file, owner, `quiz[${index}]`, 'kanji-quiz', item));
    });
    return result;
}

const targets = [];
for (const [scope, file, variable, expected] of KANA) {
    const modules = load(file, variable);
    assert.equal(modules.length, expected, `${scope}: quantidade de modulos mudou`);
    targets.push(...inventoryKana(scope, file, modules));
}

let kanjiModules = 0;
let kanjiRecords = 0;
const uniqueKanji = new Set();
for (const [scope, file, variable] of KANJI) {
    const modules = load(file, variable);
    kanjiModules += modules.length;
    modules.forEach(module => (module.kanjis || []).forEach(item => {
        kanjiRecords += 1;
        uniqueKanji.add(item.character);
    }));
    targets.push(...inventoryKanji(scope, file, modules));
}

assert.equal(kanjiModules, 92, 'a trilha deve preservar 92 modulos Kanji');
assert.equal(kanjiRecords, 2215, 'a trilha deve preservar 2.215 registros Kanji');
assert.equal(uniqueKanji.size, 1267, 'a trilha deve preservar 1.267 caracteres unicos');
assert.equal(targets.length, 14899, 'o inventario editorial Kana/Kanji mudou');

const byKind = targets.reduce((result, target) => {
    result[target.kind] = (result[target.kind] || 0) + 1;
    return result;
}, {});
assert.deepEqual(byKind, EXPECTED_KINDS, 'a distribuicao dos alvos Kana/Kanji mudou');

const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const decisions = ledger.decisions.filter(decision => decision.phase === 19);
assert.equal(decisions.length, targets.length, 'o ledger da Fase 19 nao cobre 100% dos alvos');
const decisionById = new Map(decisions.map(decision => [decision.id, decision]));
assert.equal(decisionById.size, decisions.length, 'o ledger da Fase 19 possui IDs duplicados');

for (const target of targets) {
    const decision = decisionById.get(target.id);
    assert.ok(decision, `${target.id}: decisao ausente`);
    assert.equal(decision.target.file, target.file, `${target.id}: arquivo-alvo divergiu`);
    assert.equal(decision.target.locator, `${target.ownerId};${target.locator}`, `${target.id}: localizador divergiu`);
    assert.equal(decision.finalHash, digest(target.value), `${target.id}: valor final divergiu do dataset`);
    if (decision.state === 'approved' || decision.state === 'corrected') {
        assert.ok(decision.references.length > 0, `${target.id}: aprovacao sem fonte localizada`);
    }
}

const states = decisions.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.equal(states.approved, 14100, 'quantidade de aprovacoes da Fase 19 mudou');
assert.equal(states.corrected, 799, 'quantidade de correcoes da Fase 19 mudou');
assert.equal(states.unresolved || 0, 0, 'fila inconclusiva da Fase 19 mudou');

const sourceApproved = decisions.filter(decision => decision.state === 'approved');
assert.equal(sourceApproved.filter(decision => decision.target.kind === 'kana-reading').length, 406);
assert.equal(sourceApproved.filter(decision => decision.target.kind === 'kanji-identity').length, 2215);
assert.equal(sourceApproved.filter(decision => decision.target.kind === 'kanji-reading-on').length, 2215);
assert.equal(sourceApproved.filter(decision => decision.target.kind === 'kanji-reading-kun').length, 2215);

const n5 = load('database/ja-JP/data_kanji_n5.js', 'kanjiN5Data');
const n5Text = JSON.stringify(n5);
assert.match(n5[0].grammar.example, /中国から日本に伝わり/);
assert.match(n5[0].kanjis[3].meaning, /Bushu/);
assert.match(n5Text, /誰 \(dare = quem\)/);
assert.doesNotMatch(n5Text, /誤 \(dare/);
assert.doesNotMatch(n5Text, /大きいいえ|驅はどこ|\/ 誤 \(/);
assert.doesNotMatch(n5Text, /300%|garantida no teste|NUNCA use ka|SEMPRE indica pergunta|Busshu/i);
assert.match(n5.at(-1).description, /não é uma lista oficial do JLPT/i);

for (const module of n5) {
    (module.quiz || []).forEach((item, index) => {
        if (Array.isArray(item.options)) {
            assert.ok(item.options.includes(item.a), `N5 modulo ${module.module}: quiz ${index} sem resposta nas opcoes`);
        } else {
            assert.ok(typeof item.a === 'string' && item.a.length > 0,
                `N5 modulo ${module.module}: quiz ${index} sem resposta textual`);
        }
    });
}

assert.equal(ledger.decisions.filter(decision => decision.phase == null).length, 159,
    'as decisoes da Fase 17 devem permanecer preservadas');

console.log(`Fase 19: ${targets.length} alvos classificados; ${states.approved} aprovados, ${states.corrected} corrigidos e ${states.unresolved} inconclusivos.`);
