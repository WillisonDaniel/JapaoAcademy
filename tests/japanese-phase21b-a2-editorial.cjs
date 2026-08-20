'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const digest = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
const sourceFamily = sourceId => sourceId.startsWith('genki-') ? 'genki' : sourceId.startsWith('tobira-') ? 'tobira' : sourceId;
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(ROOT, 'database/ja-JP/data_curso_a2.js'), 'utf8')}\nglobalThis.__value=CURSO_A2_DADOS;`, context);
const modules = JSON.parse(JSON.stringify(context.__value));
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const decisions = new Map(ledger.decisions.map(decision => [decision.id, decision]));

assert.equal(modules.length, 30, 'A2 deve preservar 30 módulos');
let targetTotal = 0;
for (const courseModule of modules) {
    const targets = [];
    const add = (locator, kind, value) => targets.push({ id: `ja-course-phase18-a2-${courseModule.id}-${slug(locator)}`, kind, value });
    add('module.metadata', 'module-metadata', { title: courseModule.title, sectionTitle: courseModule.sectionTitle, level: courseModule.level, missionTitle: courseModule.stage1_context.missionTitle, missionDescription: courseModule.stage1_context.missionDescription });
    add('stage1_context', 'context', courseModule.stage1_context);
    for (const [field, kind] of [['stage2_drops', 'lesson-item'], ['stage3_practice', 'practice'], ['stage3_5_sentenceBuilder', 'sentence-builder'], ['stage4_dialog', 'dialogue'], ['stage5_quiz', 'quiz']]) {
        (courseModule[field] || []).forEach((item, index) => add(`${field}[${index}]`, kind, item));
    }
    assert.equal(targets.length, courseModule.id === 'a2_mod_30' ? 61 : 22, `${courseModule.id}: inventário mudou`);
    targetTotal += targets.length;
    assert.equal(courseModule.editorialReview.status, 'corrected');
    assert.equal(courseModule.editorialReview.phase, '21B.2');
    for (const target of targets) {
        const decision = decisions.get(target.id);
        assert.ok(decision, `${target.id}: decisão ausente`);
        assert.ok(['approved', 'corrected'].includes(decision.state), `${target.id}: alvo inconclusivo`);
        assert.equal(decision.finalHash, digest(target.value), `${target.id}: hash final divergente`);
        const expectedPhase = new Set([
            'ja-course-phase18-a2-a2_mod_03-stage4-dialog-2',
            'ja-course-phase18-a2-a2_mod_09-stage4-dialog-1',
            'ja-course-phase18-a2-a2_mod_18-stage4-dialog-1'
        ]).has(target.id) ? '22A' : '21B.2';
        assert.equal(decision.resolutionPhase, expectedPhase);
        assert.ok(decision.references.length >= 1, `${target.id}: evidência ausente`);
        if (decision.reasonKind === 'naturalness') {
            assert.ok(new Set(decision.references.map(reference => sourceFamily(reference.sourceId))).size >= 2,
                `${target.id}: naturalidade exige duas famílias editoriais`);
        }
    }
}
assert.equal(targetTotal, 699, 'A2 deve manter 699 alvos editoriais');

const a2Decisions = ledger.decisions.filter(decision => decision.phase === 18 && /module=a2_mod_/.test(decision.target.locator || ''));
const stateCounts = a2Decisions.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(stateCounts, { approved: 537, corrected: 162 });

const runtime = JSON.stringify(modules);
for (const forbidden of [
    /\bMaasa\b/i, /nomimase\s+n/i, /suportsusimasu/i, /あたしい/,
    /DEVE SEMPRE/i, /equivale ao gerúndio/i, /APENAS o último/i,
    /necessidade absoluta/i, /Nunca use Ageru/i, /\[Seu Nome\]/i,
    /Excelente resposta|Perfeito!|uso perfeito/i
]) assert.doesNotMatch(runtime, forbidden, `resíduo editorial A2: ${forbidden}`);

assert.match(runtime, /No japonês contemporâneo também há usos afirmativos coloquiais/);
assert.match(runtime, /outros usos, como estados resultantes e hábitos/);
assert.match(runtime, /A força pragmática depende da situação/);
assert.match(runtime, /A escolha depende da direção e da perspectiva da dádiva/);
assert.match(runtime, /forma de dicionário para intenção afirmativa e a forma ない/);

console.log('Fase 21B.2: módulos A2-01 a A2-30 possuem 699/699 alvos sustentados (537 aprovados e 162 corrigidos).');
