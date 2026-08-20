'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'database/ja-JP/data_jlpt_pratica_index.js');
const REVIEW_OUTPUT = path.join(ROOT, 'tests/JAPANESE_JLPT_EDITORIAL_REVIEW.md');
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

function loadKanji(level) {
    const number = level.slice(1), sandbox = { console: { log() {}, warn() {}, error() {} } }; sandbox.window = sandbox; sandbox.globalThis = sandbox; vm.createContext(sandbox);
    if (['N3', 'N2', 'N1'].includes(level)) vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/kanji/romaji-draft.js'), 'utf8'), sandbox);
    const file = `database/ja-JP/data_kanji_n${number}.js`; vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\n;globalThis.__data=kanjiN${number}Data;`, sandbox, { filename: file }); return JSON.parse(JSON.stringify(sandbox.__data));
}
const text = value => String(value ?? '').trim();
function normalizeQuestion(raw) {
    if (!raw || !text(raw.q) || !text(raw.a)) return null;
    const options = Array.isArray(raw.options) ? raw.options.map(text) : [];
    let answer = text(raw.a), answerIndex = -1;
    if (options.length) { answerIndex = Number.isInteger(raw.a) ? raw.a : options.indexOf(answer); if (answerIndex < 0 || answerIndex >= options.length) return null; answer = options[answerIndex]; }
    return { question: text(raw.q), options, answer, answerIndex, type: options.length ? 'choice' : text(raw.type) || 'text' };
}
function buildInventory() {
    const items = [], exclusions = [];
    LEVELS.forEach(level => loadKanji(level).forEach((module, moduleIndex) => {
        const status = module.editorialReview && module.editorialReview.status === 'pending-human-review' ? 'pending-human-review' : 'not-flagged';
        const sources = [{ origin: 'module-quiz', questions: module.quiz || [] }, { origin: 'reading-comprehension', questions: module.readingText && module.readingText.comprehensionQuiz || [] }];
        sources.forEach(source => { const seen = new Set(); source.questions.forEach((raw, questionIndex) => {
            const normalized = normalizeQuestion(raw), fingerprint = normalized ? JSON.stringify([normalized.question, normalized.options, normalized.answer]) : '';
            const base = { level, moduleId: text(module.module), moduleIndex, moduleTitle: text(module.title), origin: source.origin, questionIndex };
            if (!normalized) { exclusions.push({ ...base, reason: 'pergunta-ou-gabarito-invalido', question: text(raw && raw.q), answer: text(raw && raw.a), options: Array.isArray(raw && raw.options) ? raw.options.map(text) : [] }); return; }
            if (seen.has(fingerprint)) { exclusions.push({ ...base, reason: 'duplicata-textual-na-mesma-origem', ...normalized }); return; } seen.add(fingerprint);
            items.push({ id: `ja-jlpt-${level.toLowerCase()}-${module.module}-${source.origin}-${questionIndex + 1}`, framework: 'JLPT-reference', level, moduleId: text(module.module), moduleIndex, moduleTitle: text(module.title), route: `kanji_n${level.slice(1)}.html`, origin: source.origin, ...normalized, editorialStatus: status });
        }); });
    })); return { items, exclusions };
}
function render(items) { return `// Gerado por tests/japanese-jlpt-index.cjs. Não editar manualmente.\nconst JAPANESE_JLPT_PRACTICE_INDEX = Object.freeze(${JSON.stringify(items)});\nif (typeof window !== 'undefined') window.JAPANESE_JLPT_PRACTICE_INDEX = JAPANESE_JLPT_PRACTICE_INDEX;\n`; }
function review(inventory, snapshot) {
    const rows = inventory.exclusions.map(item => `| ${item.level} | ${item.moduleId} | ${item.origin} | ${item.reason} | ${item.question.replace(/\|/g, '\\|')} | ${item.answer.replace(/\|/g, '\\|')} |`).join('\n');
    return `# Inventário editorial — preparação JLPT\n\nGerado mecanicamente na Fase 12. Snapshot: \`${snapshot}\`. Não é material oficial nem aprovação editorial.\n\n- Questões examinadas: **${inventory.items.length + inventory.exclusions.length}**.\n- Questões publicadas: **${inventory.items.length}**.\n- Exclusões: **${inventory.exclusions.length}**.\n- Questões publicadas com decisão editorial inconclusiva: **${inventory.items.filter(item => item.editorialStatus === 'pending-human-review').length}**.\n\n| Nível | Módulo | Origem | Motivo | Pergunta | Gabarito armazenado |\n|---|---|---|---|---|---|\n${rows || '| — | — | — | Nenhuma | — | — |'}\n\nQuestões inconclusivas permanecem sem aprovação até que naturalidade, precisão e gabaritos tenham evidência localizada suficiente. Os níveis são referências pedagógicas e não listas oficiais do JLPT.\n`;
}

const inventory = buildInventory(), output = render(inventory.items), snapshot = crypto.createHash('sha256').update(JSON.stringify(inventory.items)).digest('hex').slice(0, 16), reviewOutput = review(inventory, snapshot);
assert.equal(inventory.items.length, 1060); assert.equal(inventory.exclusions.length, 1); assert.equal(inventory.exclusions[0].level, 'N4'); assert.equal(inventory.exclusions[0].moduleId, '1');
assert.deepEqual(Object.fromEntries(LEVELS.map(level => [level, inventory.items.filter(item => item.level === level).length])), { N5: 122, N4: 181, N3: 217, N2: 240, N1: 300 });
assert.equal(new Set(inventory.items.map(item => item.id)).size, inventory.items.length); inventory.items.forEach(item => { assert.ok(item.question && item.answer && item.route); if (item.options.length) assert.equal(item.options[item.answerIndex], item.answer); });
if (process.argv.includes('--write')) { fs.writeFileSync(OUTPUT, output, 'utf8'); fs.writeFileSync(REVIEW_OUTPUT, reviewOutput, 'utf8'); console.log(`✓ índice JLPT gerado: ${inventory.items.length} questões, ${inventory.exclusions.length} exclusão, snapshot ${snapshot}`); }
else { assert.ok(fs.existsSync(OUTPUT), 'índice JLPT ausente; execute npm.cmd run index:jlpt'); assert.equal(fs.readFileSync(OUTPUT, 'utf8'), output, 'índice JLPT fora de sincronia'); assert.equal(fs.readFileSync(REVIEW_OUTPUT, 'utf8'), reviewOutput, 'inventário editorial JLPT fora de sincronia'); console.log(`✓ índice JLPT sincronizado: ${inventory.items.length} questões, ${inventory.exclusions.length} exclusão, snapshot ${snapshot}`); }
