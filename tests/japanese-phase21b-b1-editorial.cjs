'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const digest = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
const sourceFamily = sourceId => sourceId.startsWith('genki-') ? 'genki' : sourceId.startsWith('quartet-') ? 'quartet' : sourceId;
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(ROOT, 'database/ja-JP/data_curso_b1.js'), 'utf8')}\nglobalThis.__value=CURSO_B1_DADOS;`, context);
const modules = JSON.parse(JSON.stringify(context.__value));
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const decisions = new Map(ledger.decisions.map(decision => [decision.id, decision]));

assert.equal(modules.length, 24, 'B1 deve preservar 24 módulos');
const expanded = new Set([17, 18, 19, 20, 22, 23]);
const recoveredDialogues = { b1_mod_08: 0, b1_mod_09: 1, b1_mod_15: 1, b1_mod_16: 2, b1_mod_17: 0, b1_mod_19: 0 };
let targetTotal = 0;
for (const courseModule of modules) {
    const targets = [];
    const add = (locator, kind, value) => targets.push({ id: `ja-course-phase18-b1-${courseModule.id}-${slug(locator)}`, kind, value });
    add('module.metadata', 'module-metadata', { title: courseModule.title, sectionTitle: courseModule.sectionTitle, level: courseModule.level, missionTitle: courseModule.stage1_context.missionTitle, missionDescription: courseModule.stage1_context.missionDescription });
    add('stage1_context', 'context', courseModule.stage1_context);
    for (const [field, kind] of [['stage2_drops', 'lesson-item'], ['stage3_practice', 'practice'], ['stage3_5_sentenceBuilder', 'sentence-builder'], ['stage4_dialog', 'dialogue'], ['stage5_quiz', 'quiz']]) {
        (courseModule[field] || []).forEach((item, index) => add(`${field}[${index}]`, kind, item));
    }
    const number = Number(courseModule.id.slice(-2));
    const expected = number === 24 ? 61 : expanded.has(number) ? 21 : 20;
    assert.equal(targets.length, expected, `${courseModule.id}: inventário mudou`);
    targetTotal += targets.length;
    assert.equal(courseModule.editorialReview.status, 'corrected');
    assert.equal(courseModule.editorialReview.phase, '21B.3');
    if (Object.hasOwn(recoveredDialogues, courseModule.id)) {
        const dialogue = courseModule.stage4_dialog[recoveredDialogues[courseModule.id]];
        assert.ok(typeof dialogue.content === 'object' && dialogue.content.displayText && dialogue.content.audioText,
            `${courseModule.id}: contrato explícito do diálogo recuperado está ausente`);
    }
    for (const target of targets) {
        const decision = decisions.get(target.id);
        assert.ok(decision, `${target.id}: decisão ausente`);
        assert.ok(['approved', 'corrected'].includes(decision.state), `${target.id}: alvo inconclusivo`);
        assert.equal(decision.finalHash, digest(target.value), `${target.id}: hash final divergente`);
        assert.equal(decision.resolutionPhase, '21B.3');
        assert.ok(decision.references.length >= 1, `${target.id}: evidência ausente`);
        if (decision.reasonKind === 'naturalness') {
            assert.ok(new Set(decision.references.map(reference => sourceFamily(reference.sourceId))).size >= 2,
                `${target.id}: naturalidade exige duas famílias editoriais`);
        }
    }
}
assert.equal(targetTotal, 527, 'B1 deve manter 527 alvos editoriais');

const b1Decisions = ledger.decisions.filter(decision => decision.phase === 18 && /module=b1_mod_/.test(decision.target.locator || ''));
const stateCounts = b1Decisions.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(stateCounts, { approved: 315, corrected: 212 });

const runtime = JSON.stringify(modules);
for (const forbidden of [
    /areluru/i, /こと金/, /wakurete/i, /oshadaru/i, /Guran ni naru/i,
    /harawaseteku/i, /Monomoraite/i, /re-operation/i, /oshiarimashidai/i,
    /\[Seu Nome\]/i, /independência total/i, /dominar Keigo/i,
    /verdadeiro nativo/i, /Nunca comece um e-mail/i, /não faça barulho após 22h/i,
    /feedback":"[^"]*(?:perfeit|impecável|espetacular|exemplar)/i
]) assert.doesNotMatch(runtime, forbidden, `resíduo editorial B1: ${forbidden}`);

assert.match(runtime, /Esse efeito vem do contexto e não de toda forma passiva/);
assert.match(runtime, /não se usa だ antes de かもしれません/);
assert.match(runtime, /não certifica domínio externo, autonomia no Japão nem proficiência profissional/);
assert.match(runtime, /Regras de lixo, ruído, tatuagens e uso das instalações variam/);
assert.match(runtime, /おっしゃる/);
assert.match(runtime, /ご覧になる/);

console.log('Fase 21B.3: módulos B1-01 a B1-24 possuem 527/527 alvos sustentados (315 aprovados e 212 corrigidos).');
