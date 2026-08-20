'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const digest = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
const sourceFamily = sourceId => sourceId.startsWith('quartet-') ? 'quartet' : sourceId.startsWith('tobira-') ? 'tobira' : sourceId;
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(ROOT, 'database/ja-JP/data_curso_b2.js'), 'utf8')}\nglobalThis.__value=CURSO_B2_DADOS;`, context);
const modules = JSON.parse(JSON.stringify(context.__value));
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const decisions = new Map(ledger.decisions.map(decision => [decision.id, decision]));

assert.equal(modules.length, 20, 'B2 deve preservar 20 módulos');
const expanded = new Set([4, 6, 11, 17, 18, 19]);
const recoveredDialogues = { b2_mod_01: 1, b2_mod_04: 2, b2_mod_07: 2, b2_mod_11: 1, b2_mod_12: 2 };
let targetTotal = 0;
for (const courseModule of modules) {
    const targets = [];
    const add = (locator, kind, value) => targets.push({ id: `ja-course-phase18-b2-${courseModule.id}-${slug(locator)}`, kind, value });
    add('module.metadata', 'module-metadata', { title: courseModule.title, sectionTitle: courseModule.sectionTitle, level: courseModule.level, missionTitle: courseModule.stage1_context.missionTitle, missionDescription: courseModule.stage1_context.missionDescription });
    add('stage1_context', 'context', courseModule.stage1_context);
    for (const [field, kind] of [['stage2_drops', 'lesson-item'], ['stage3_practice', 'practice'], ['stage3_5_sentenceBuilder', 'sentence-builder'], ['stage4_dialog', 'dialogue'], ['stage5_quiz', 'quiz']]) {
        (courseModule[field] || []).forEach((item, index) => add(`${field}[${index}]`, kind, item));
    }
    const number = Number(courseModule.id.slice(-2));
    const expected = number === 20 ? 46 : expanded.has(number) ? 21 : 20;
    assert.equal(targets.length, expected, `${courseModule.id}: inventário mudou`);
    targetTotal += targets.length;
    assert.equal(courseModule.editorialReview.status, 'corrected');
    assert.equal(courseModule.editorialReview.phase, '21B.4');
    if (Object.hasOwn(recoveredDialogues, courseModule.id)) {
        const dialogue = courseModule.stage4_dialog[recoveredDialogues[courseModule.id]];
        assert.ok(dialogue.content?.displayText && dialogue.content?.audioText, `${courseModule.id}: diálogo recuperado ausente`);
    }
    for (const target of targets) {
        const decision = decisions.get(target.id);
        assert.ok(decision, `${target.id}: decisão ausente`);
        assert.ok(['approved', 'corrected'].includes(decision.state), `${target.id}: alvo inconclusivo`);
        assert.equal(decision.finalHash, digest(target.value), `${target.id}: hash final divergente`);
        assert.equal(decision.resolutionPhase, '21B.4');
        assert.ok(decision.references.length >= 1, `${target.id}: evidência ausente`);
        if (decision.reasonKind === 'naturalness') {
            assert.ok(new Set(decision.references.map(reference => sourceFamily(reference.sourceId))).size >= 2,
                `${target.id}: naturalidade exige duas famílias editoriais`);
        }
    }
}
assert.equal(targetTotal, 432, 'B2 deve manter 432 alvos editoriais');

const b2Decisions = ledger.decisions.filter(decision => decision.phase === 18 && /module=b2_mod_/.test(decision.target.locator || ''));
const stateCounts = b2Decisions.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.deepEqual(stateCounts, { approved: 203, corrected: 229 });

const runtime = JSON.stringify(modules);
for (const forbidden of [
    /\[Seu Nome\]/i, /nihonki/i, /\bkoutu\b/i, /Oshiaru/i, /\bGuran\b/i,
    /Aimeu/i, /reached/i, /re-report/i, /\bshourui\b/i, /\bzouta\b/i,
    /meshiagarisasu/i, /jcondition/i, /\bcollect\b/i, /\bstrategy\b/i,
    /\bflu[eê]ncia\b/i, /maestria/i, /\bmaster\b/i, /sem legendas/i,
    /autonomia total/i, /independ[eê]ncia total/i, /Keigo supremo/i
]) assert.doesNotMatch(runtime, forbidden, `resíduo editorial B2: ${forbidden}`);

assert.match(runtime, /não possui essa função obrigatoriamente/);
assert.match(runtime, /Não há uma fórmula tripartite universal/);
assert.match(runtime, /não podem ser combinados mecanicamente com qualquer substantivo/);
assert.match(runtime, /uso, pronúncia e nuance variam por localidade/);
assert.match(runtime, /não definem uma essência universal do Japão/);
assert.match(runtime, /não certifica competência linguística externa/);

console.log('Fase 21B.4: módulos B2-01 a B2-20 possuem 432/432 alvos sustentados (203 aprovados e 229 corrigidos).');
