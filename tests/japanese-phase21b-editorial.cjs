'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const digest = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(ROOT, 'database/ja-JP/data_curso_a1.js'), 'utf8')}\nglobalThis.__value=CURSO_A1_DADOS;`, context);
const courseModules = ['a1_mod_01', 'a1_mod_02'].map(moduleId => JSON.parse(JSON.stringify(context.__value.find(item => item.id === moduleId))));
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const decisions = new Map(ledger.decisions.map(decision => [decision.id, decision]));

for (const courseModule of courseModules) {
    const targets = [];
    const add = (locator, kind, value) => targets.push({ id: `ja-course-phase18-a1-${courseModule.id}-${slug(locator)}`, locator, kind, value });
    add('module.metadata', 'module-metadata', { title: courseModule.title, sectionTitle: courseModule.sectionTitle, level: courseModule.level, missionTitle: courseModule.stage1_context.missionTitle, missionDescription: courseModule.stage1_context.missionDescription });
    add('stage1_context', 'context', courseModule.stage1_context);
    for (const [field, kind] of [['stage2_drops', 'lesson-item'], ['stage3_practice', 'practice'], ['stage3_5_sentenceBuilder', 'sentence-builder'], ['stage4_dialog', 'dialogue'], ['stage5_quiz', 'quiz']]) {
        (courseModule[field] || []).forEach((item, index) => add(`${field}[${index}]`, kind, item));
    }
    assert.equal(targets.length, 21);
    assert.ok(['approved', 'corrected'].includes(courseModule.editorialReview.status));
    assert.equal(courseModule.editorialReview.phase, '21B.1');
    for (const target of targets) {
        const decision = decisions.get(target.id);
        assert.ok(decision, `${target.id}: decisão ausente`);
        assert.ok(['approved', 'corrected'].includes(decision.state), `${target.id}: módulo sustentado mantém alvo aberto`);
        assert.equal(decision.finalHash, digest(target.value), `${target.id}: hash final divergente`);
        assert.equal(decision.resolutionPhase, '21B.1');
        assert.ok(decision.references.length >= 1, `${target.id}: evidência ausente`);
        if (decision.reasonKind === 'naturalness') {
            const families = new Set(decision.references.map(reference => reference.sourceId.split('-')[0]));
            assert.ok(families.size >= 2, `${target.id}: naturalidade exige duas famílias editoriais`);
        }
    }
}

const runtime = JSON.stringify(courseModules);
assert.doesNotMatch(runtime, /até aproximadamente 10h|entre 10h e o pôr do sol|verbo ser\/estar|sempre no final|estrutura perfeita|カロス|uso perfeito|nativo simpático|nunca pode vir/i);
assert.match(runtime, /X は Y です/);
assert.match(runtime, /カルロス/);
assert.match(runtime, /おやすみなさい/);
assert.match(runtime, /こちらこそ、よろしくおねがいします/);
assert.doesNotMatch(runtime, /primeiríssimo segundo|fórmula perfeita|["「]じめまして|\[Seu Nome\]・さん/i);

console.log('Fase 21B.1: módulos A1-01 e A1-02 possuem 42/42 alvos sustentados e nenhum alvo inconclusivo.');
