'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'database/ja-JP/data_gramatica_index.js');
const REVIEW_OUTPUT = path.join(ROOT, 'tests/JAPANESE_GRAMMAR_EDITORIAL_REVIEW.md');
const COURSE_LEVELS = ['A1', 'A2', 'B1', 'B2'];
const JLPT_LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

function context() {
    const sandbox = { console: { log() {}, warn() {}, error() {} } };
    sandbox.window = sandbox;
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);
    return sandbox;
}

function loadCourse(level) {
    const sandbox = context();
    const file = `database/ja-JP/data_curso_${level.toLowerCase()}.js`;
    const variable = `CURSO_${level}_DADOS`;
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\n;globalThis.__data = ${variable};`, sandbox, { filename: file });
    return JSON.parse(JSON.stringify(sandbox.__data));
}

function loadKanji(level) {
    const sandbox = context();
    const number = level.slice(1);
    if (['N3', 'N2', 'N1'].includes(level)) vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/kanji/romaji-draft.js'), 'utf8'), sandbox);
    const file = `database/ja-JP/data_kanji_n${number}.js`;
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\n;globalThis.__data = kanjiN${number}Data;`, sandbox, { filename: file });
    return JSON.parse(JSON.stringify(sandbox.__data));
}

function text(value) { return String(value || '').trim(); }
function hasJapanese(value) { return /[\u3040-\u30ff\u3400-\u9fff]/u.test(text(value)); }
function editorialStatus(module) { return module.editorialReview && module.editorialReview.status === 'pending-human-review' ? 'pending-human-review' : 'not-flagged'; }

function courseReferences() {
    return COURSE_LEVELS.flatMap(level => loadCourse(level).flatMap((module, moduleIndex) =>
        (module.stage2_drops || []).filter(drop => drop && drop.type === 'grammar_pill').map((drop, grammarIndex) => ({
            id: `ja-grammar-course-${level.toLowerCase()}-${module.id}-${grammarIndex + 1}`,
            source: 'course', framework: 'CEFR', level, category: text(drop.category) || 'sem-categoria',
            moduleId: text(module.id), moduleIndex, moduleTitle: text(module.title), route: 'curso.html',
            title: text(drop.title), rule: text(drop.rule), formula: text(drop.formula), exampleText: text(drop.example),
            exampleRomaji: '', exampleTranslation: '', audioText: hasJapanese(drop.audioText) ? text(drop.audioText) : '',
            editorialStatus: editorialStatus(module)
        }))));
}

function kanjiReferences() {
    return JLPT_LEVELS.flatMap(level => loadKanji(level).flatMap((module, moduleIndex) => {
        const grammar = module.grammar;
        if (!grammar || !grammar.title || !grammar.explanation) return [];
        const example = text(grammar.example);
        return [{
            id: `ja-grammar-kanji-${level.toLowerCase()}-${module.module}`,
            source: 'kanji', framework: 'JLPT', level, category: text(grammar.category) || 'sem-categoria',
            moduleId: text(module.module), moduleIndex, moduleTitle: text(module.title), route: `kanji_n${level.slice(1)}.html`,
            title: text(grammar.title), rule: text(grammar.explanation), formula: text(grammar.formula), exampleText: example,
            exampleRomaji: hasJapanese(example) ? text(grammar.romaji) : example, exampleTranslation: text(grammar.translation),
            audioText: hasJapanese(grammar.audioText) ? text(grammar.audioText) : (hasJapanese(example) ? example : ''),
            editorialStatus: editorialStatus(module)
        }];
    }));
}

function explicitForms(references) {
    const forms = [];
    const declaresTransformation = reference => /conjuga|negação dos adjetivos|passado dos adjetivos|regra da forma casual|regra básica do grupo|forma te|desejo \(~tai/i.test(reference.title);
    references.filter(reference => reference.source === 'course' && declaresTransformation(reference)).forEach(reference => {
        reference.exampleText.split('|').map(part => part.trim()).filter(Boolean).forEach((part, partIndex) => {
            const match = part.match(/^(.+?)\s*(?:➔|→)\s*(.+)$/u);
            if (!match) return;
            const input = text(match[1]), output = text(match[2]);
            if (!input || !output) return;
            forms.push({
                id: `${reference.id}-form-${partIndex + 1}`, referenceId: reference.id, label: reference.title,
                input, output, source: reference.source, framework: reference.framework, level: reference.level,
                moduleId: reference.moduleId, moduleIndex: reference.moduleIndex, moduleTitle: reference.moduleTitle,
                route: reference.route, editorialStatus: reference.editorialStatus,
                audioText: hasJapanese(output) ? output : ''
            });
        });
    });
    return forms;
}

function buildIndex() {
    const references = [...courseReferences(), ...kanjiReferences()];
    return { references, forms: explicitForms(references) };
}

function render(index) {
    return `// Gerado por tests/japanese-grammar-index.cjs. Não editar manualmente.\nconst JAPANESE_GRAMMAR_INDEX = Object.freeze(${JSON.stringify(index)});\nif (typeof window !== 'undefined') window.JAPANESE_GRAMMAR_INDEX = JAPANESE_GRAMMAR_INDEX;\n`;
}

function renderReview(index, snapshot) {
    const course = index.references.filter(item => item.source === 'course');
    const kanji = index.references.filter(item => item.source === 'kanji');
    const pending = index.references.filter(item => item.editorialStatus === 'pending-human-review');
    return `# Inventário editorial — referência gramatical japonesa\n\n` +
        `Gerado mecanicamente pelo índice da Fase 10. Snapshot: \`${snapshot}\`. Este documento não constitui aprovação editorial.\n\n` +
        `- Referências do curso A1–B2: **${course.length}**.\n` +
        `- Referências aplicadas das trilhas Kanji: **${kanji.length}**.\n` +
        `- Transformações explícitas indexadas: **${index.forms.length}**.\n` +
        `- Referências com decisão editorial inconclusiva: **${pending.length}**.\n\n` +
        `## Lacunas deliberadamente preservadas\n\n` +
        `- Não há equivalência inferida entre CEFR e JLPT.\n` +
        `- Categoria permanece \`sem-categoria\` quando o dataset não a declara.\n` +
        `- Grupo verbal, transitividade, irregularidade e paradigmas ausentes não são inferidos.\n` +
        `- Exemplos sem japonês explícito não recebem áudio japonês artificial.\n` +
        `- Exercícios, feedback e alternativas incorretas não são usados como fonte de regras ou formas.\n\n` +
        `## Revisão necessária\n\n` +
        `Itens inconclusivos permanecem sem aprovação até que haja evidência localizada suficiente para validar terminologia, exemplos, traduções, Romaji e completude.\n`;
}

const index = buildIndex();
assert.equal(index.references.length, 194, 'inventário deve preservar 105 regras do curso e 89 blocos Kanji');
assert.equal(index.references.filter(item => item.source === 'course').length, 105);
assert.equal(index.references.filter(item => item.source === 'kanji').length, 89);
assert.equal(index.forms.length, 13, 'somente treze transformações possuem relação e contexto de forma explicitamente declarados');
assert.equal(new Set(index.references.map(item => item.id)).size, index.references.length);
assert.equal(new Set(index.forms.map(item => item.id)).size, index.forms.length);
index.references.forEach(item => {
    assert.ok(item.id && item.title && item.rule && item.route && item.moduleId);
    assert.ok((item.framework === 'CEFR' && COURSE_LEVELS.includes(item.level)) || (item.framework === 'JLPT' && JLPT_LEVELS.includes(item.level)));
    assert.ok(['pending-human-review', 'not-flagged'].includes(item.editorialStatus));
});
index.forms.forEach(item => {
    assert.ok(item.input && item.output && item.label);
    assert.ok(index.references.some(reference => reference.id === item.referenceId));
});
const snapshot = crypto.createHash('sha256').update(JSON.stringify(index)).digest('hex').slice(0, 16);
const output = render(index), review = renderReview(index, snapshot);
if (process.argv.includes('--write')) {
    fs.writeFileSync(OUTPUT, output, 'utf8');
    fs.writeFileSync(REVIEW_OUTPUT, review, 'utf8');
    console.log(`✓ índice gramatical gerado: ${index.references.length} referências, ${index.forms.length} formas, snapshot ${snapshot}`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'índice gramatical ausente; execute npm.cmd run index:grammar');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), output, 'índice gramatical fora de sincronia');
    assert.equal(fs.readFileSync(REVIEW_OUTPUT, 'utf8'), review, 'inventário editorial gramatical fora de sincronia');
    console.log(`✓ índice gramatical sincronizado: ${index.references.length} referências, ${index.forms.length} formas, snapshot ${snapshot}`);
}
