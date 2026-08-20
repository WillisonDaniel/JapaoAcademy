'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const SPECS = [
    ['A1', 'database/ja-JP/data_curso_a1.js', 'CURSO_A1_DADOS', 31],
    ['A2', 'database/ja-JP/data_curso_a2.js', 'CURSO_A2_DADOS', 30],
    ['B1', 'database/ja-JP/data_curso_b1.js', 'CURSO_B1_DADOS', 24],
    ['B2', 'database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS', 20]
];
const EXPECTED_KINDS = {
    'module-metadata': 105,
    context: 105,
    'lesson-item': 451,
    practice: 563,
    'sentence-builder': 210,
    dialogue: 286,
    quiz: 595
};

function load(file, variable) {
    const context = {};
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

function family(sourceId) {
    if (sourceId.startsWith('genki-')) return 'genki';
    if (sourceId.startsWith('quartet-')) return 'quartet';
    if (sourceId.startsWith('shinkanzen-')) return 'shinkanzen';
    if (sourceId.startsWith('tobira-')) return 'tobira';
    return sourceId;
}

function inventory(level, file, modules) {
    const result = [];
    function add(module, locator, kind, value) {
        result.push({
            id: `ja-course-phase18-${level.toLowerCase()}-${module.id}-${slug(locator)}`,
            file,
            moduleId: module.id,
            locator,
            kind,
            value
        });
    }
    for (const module of modules) {
        add(module, 'module.metadata', 'module-metadata', {
            title: module.title,
            sectionTitle: module.sectionTitle,
            level: module.level,
            missionTitle: module.stage1_context && module.stage1_context.missionTitle,
            missionDescription: module.stage1_context && module.stage1_context.missionDescription
        });
        add(module, 'stage1_context', 'context', module.stage1_context);
        for (const [field, kind] of [
            ['stage2_drops', 'lesson-item'], ['stage3_practice', 'practice'],
            ['stage3_5_sentenceBuilder', 'sentence-builder'], ['stage4_dialog', 'dialogue'],
            ['stage5_quiz', 'quiz']
        ]) {
            (module[field] || []).forEach((item, index) => add(module, `${field}[${index}]`, kind, item));
        }
    }
    return result;
}

const modules = [];
const targets = [];
for (const [level, file, variable, expected] of SPECS) {
    const course = load(file, variable);
    assert.equal(course.length, expected, `${level}: quantidade de modulos mudou`);
    assert.equal(new Set(course.map(module => module.id)).size, expected, `${level}: IDs duplicados`);
    modules.push(...course);
    targets.push(...inventory(level, file, course));
}

assert.equal(modules.length, 105, 'inventario A1-B2 deve preservar 105 modulos');
assert.equal(targets.length, 2315, 'inventario editorial integral do curso mudou');

const kindCounts = targets.reduce((result, target) => {
    result[target.kind] = (result[target.kind] || 0) + 1;
    return result;
}, {});
assert.deepEqual(kindCounts, EXPECTED_KINDS, 'distribuicao dos alvos editoriais mudou');

const ledger = JSON.parse(fs.readFileSync(path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json'), 'utf8'));
const decisions = ledger.decisions.filter(decision => decision.phase === 18);
assert.equal(decisions.length, targets.length, 'ledger da Fase 18 nao cobre 100% dos alvos');
const decisionById = new Map(decisions.map(decision => [decision.id, decision]));
assert.equal(decisionById.size, decisions.length, 'ledger da Fase 18 possui IDs duplicados');

for (const target of targets) {
    const decision = decisionById.get(target.id);
    assert.ok(decision, `${target.id}: decisao ausente`);
    assert.equal(decision.target.file, target.file, `${target.id}: arquivo-alvo divergiu`);
    assert.equal(decision.target.locator, `module=${target.moduleId};${target.locator}`, `${target.id}: localizador divergiu`);
    assert.equal(decision.finalHash, digest(target.value), `${target.id}: valor final divergiu do dataset`);
    if (decision.state === 'corrected' && decision.reasonKind === 'naturalness') {
        assert.ok(new Set(decision.references.map(reference => family(reference.sourceId))).size >= 2,
            `${target.id}: naturalidade sem duas familias independentes`);
    }
}

const stateCounts = decisions.reduce((result, decision) => {
    result[decision.state] = (result[decision.state] || 0) + 1;
    return result;
}, {});
assert.equal(stateCounts.corrected, 546, 'quantidade de correcoes rastreadas mudou');
assert.equal(stateCounts.approved, 54, 'quantidade de aprovacoes rastreadas mudou');
assert.equal(stateCounts.unresolved, 1715, 'fila editorial aberta mudou sem atualizacao do relatorio');

for (const module of modules) {
    const expectedStatus = module.id === 'a1_mod_01' ? 'approved' : (['a1_mod_02', 'a1_mod_03', 'a1_mod_04', 'a1_mod_05', 'a1_mod_06', 'a1_mod_07', 'a1_mod_08', 'a1_mod_09', 'a1_mod_10', 'a1_mod_11', 'a1_mod_12', 'a1_mod_13', 'a1_mod_14', 'a1_mod_15', 'a1_mod_16', 'a1_mod_17', 'a1_mod_18', 'a1_mod_19', 'a1_mod_20', 'a1_mod_21', 'a1_mod_22'].includes(module.id) ? 'corrected' : 'pending-human-review');
    assert.equal(module.editorialReview.status, expectedStatus, `${module.id}: estado editorial do módulo divergiu dos seus alvos`);
    (module.stage3_practice || []).forEach((item, index) => {
        assert.equal((item.options || []).filter(option => option.isCorrect).length, 1, `${module.id}: pratica ${index} sem gabarito unico`);
    });
    (module.stage5_quiz || []).forEach((item, index) => {
        assert.ok(Number.isInteger(item.correctIndex) && item.correctIndex >= 0 && item.correctIndex < item.options.length,
            `${module.id}: quiz ${index} com gabarito invalido`);
    });
}

const runtimeText = JSON.stringify(modules);
for (const forbidden of [
    /\bflu[eê]ncia\b/i, /maestria/i, /\bmaster\b/i, /sem legendas/i,
    /autonomia total/i, /independ[eê]ncia total/i, /nihonki/i,
    /\bkarawazu\b/i, /hokanaranai/i, /Jikopr/i, /Jouka/i,
    /fukatte/i, /meshiagarisasu/i, /jcondition/i, /\bcollect\b/i, /\bstrategy\b/i
]) {
    assert.doesNotMatch(runtimeText, forbidden, `residuo editorial proibido: ${forbidden}`);
}

console.log(`Fase 18: ${targets.length} alvos classificados; ${stateCounts.corrected} corrigidos e ${stateCounts.unresolved} inconclusivos rastreados.`);
