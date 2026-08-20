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
const courseModules = ['a1_mod_01', 'a1_mod_02', 'a1_mod_03', 'a1_mod_04', 'a1_mod_05', 'a1_mod_06', 'a1_mod_07', 'a1_mod_08', 'a1_mod_09', 'a1_mod_10', 'a1_mod_11', 'a1_mod_12', 'a1_mod_13', 'a1_mod_14', 'a1_mod_15', 'a1_mod_16', 'a1_mod_17', 'a1_mod_18', 'a1_mod_19', 'a1_mod_20', 'a1_mod_21', 'a1_mod_22', 'a1_mod_23', 'a1_mod_24', 'a1_mod_25', 'a1_mod_26', 'a1_mod_27', 'a1_mod_28', 'a1_mod_29', 'a1_mod_30', 'a1_mod_31'].map(moduleId => JSON.parse(JSON.stringify(context.__value.find(item => item.id === moduleId))));
const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const decisions = new Map(ledger.decisions.map(decision => [decision.id, decision]));
const targetCounts = {
    a1_mod_04: 22, a1_mod_06: 22, a1_mod_07: 22, a1_mod_08: 22, a1_mod_10: 22,
    a1_mod_12: 20, a1_mod_13: 18, a1_mod_14: 18, a1_mod_15: 17, a1_mod_16: 17,
    a1_mod_17: 17, a1_mod_18: 16, a1_mod_19: 19, a1_mod_20: 18, a1_mod_21: 17,
    a1_mod_22: 20, a1_mod_23: 19, a1_mod_24: 17, a1_mod_25: 16,
    a1_mod_26: 20, a1_mod_27: 20, a1_mod_28: 20, a1_mod_29: 20, a1_mod_30: 20, a1_mod_31: 62
};

for (const courseModule of courseModules) {
    const targets = [];
    const add = (locator, kind, value) => targets.push({ id: `ja-course-phase18-a1-${courseModule.id}-${slug(locator)}`, locator, kind, value });
    add('module.metadata', 'module-metadata', { title: courseModule.title, sectionTitle: courseModule.sectionTitle, level: courseModule.level, missionTitle: courseModule.stage1_context.missionTitle, missionDescription: courseModule.stage1_context.missionDescription });
    add('stage1_context', 'context', courseModule.stage1_context);
    for (const [field, kind] of [['stage2_drops', 'lesson-item'], ['stage3_practice', 'practice'], ['stage3_5_sentenceBuilder', 'sentence-builder'], ['stage4_dialog', 'dialogue'], ['stage5_quiz', 'quiz']]) {
        (courseModule[field] || []).forEach((item, index) => add(`${field}[${index}]`, kind, item));
    }
    assert.equal(targets.length, targetCounts[courseModule.id] || 21);
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
assert.match(runtime, /Usos frequentes de すみません/);
assert.doesNotMatch(runtime, /espinha dorsal|canivete suíço|3 Superpoderes|auge da fluência cultural|socialmente perfeita/i);
assert.match(runtime, /Escolha pelo contexto/);
assert.match(runtime, /Otsukaresama deshita! Jaa ne!/);
assert.doesNotMatch(runtime, /quase nunca usam 'Sayounara'|Adeus final|pode causar demissão|Adeus vaga|erro horrível/i);
assert.match(runtime, /Tratamento de si e do outro/);
assert.doesNotMatch(runtime, /qualquer adulto|nunca '-san'|rebaixou o título|extremamente arrogante e bizarro/i);
assert.match(runtime, /Nacionalidade e idioma/);
assert.doesNotMatch(runtime, /qualquer país|todas as palavras de origem estrangeira|o idioma brasileiro|Lego das Nacionalidades/i);

console.log('Fase 21B.1: módulos A1-01 a A1-31 possuem 647/647 alvos sustentados e nenhum alvo inconclusivo.');
