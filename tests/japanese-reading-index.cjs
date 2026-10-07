'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'database/ja-JP/data_leitura_index.js');
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

function loadKanji(level) {
    const number = level.slice(1);
    const context = { console: { log() {}, warn() {}, error() {} } };
    context.window = context; context.globalThis = context; vm.createContext(context);
    const file = `database/ja-JP/data_kanji_n${number}.js`;
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\n;globalThis.__data = kanjiN${number}Data;`, context, { filename: file });
    return JSON.parse(JSON.stringify(context.__data));
}

function stripRuby(html) { return String(html || '').replace(/<rt>[\s\S]*?<\/rt>/gi, '').replace(/<\/?ruby>/gi, '').replace(/<[^>]+>/g, '').trim(); }
function normalizeQuiz(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.flatMap(item => {
        if (!item || !item.q || !Array.isArray(item.options) || item.options.length < 2) return [];
        const options = item.options.map(String);
        const answerIndex = Number.isInteger(item.a) ? item.a : options.indexOf(String(item.a));
        if (answerIndex < 0 || answerIndex >= options.length) return [];
        return [{ question: String(item.q), options, answerIndex, answer: options[answerIndex], type: String(item.type || 'choice') }];
    });
}
function buildIndex() {
    return LEVELS.flatMap(level => loadKanji(level).flatMap((module, moduleIndex) => {
        const text = module.readingText;
        if (!text || !text.title || !text.japanese || !text.translation) return [];
        const plainText = stripRuby(text.japanese);
        if (!/[\u3040-\u30ff\u3400-\u9fff]/u.test(plainText)) return [];
        return [{
            id: `ja-reading-${level.toLowerCase()}-${module.module}`,
            source: 'kanji', referenceLevel: level, type: 'module-reading', moduleId: String(module.module), moduleIndex,
            moduleTitle: String(module.title || `Módulo ${module.module}`), title: String(text.title), route: `kanji_n${level.slice(1)}.html`,
            japaneseHtml: String(text.japanese), plainText, romaji: String(text.romaji || ''), translation: String(text.translation),
            charCount: Array.from(plainText).length, questions: normalizeQuiz(text.comprehensionQuiz),
            editorialStatus: 'not-flagged'
        }];
    }));
}
function render(items) {
    return `// Gerado por tests/japanese-reading-index.cjs. Não editar manualmente.\nconst JAPANESE_READING_INDEX = Object.freeze(${JSON.stringify(items)});\nif (typeof window !== 'undefined') window.JAPANESE_READING_INDEX = JAPANESE_READING_INDEX;\n`;
}

const items = buildIndex(), output = render(items);
assert.equal(items.length, 91);
assert.equal(new Set(items.map(item => item.id)).size, items.length);
items.forEach(item => {
    assert.ok(item.translation && item.plainText && item.charCount > 0);
    assert.doesNotMatch(item.japaneseHtml, /<(?!\/?(?:ruby|rt)\b)[^>]+>/i, `${item.id}: tag não permitida`);
    item.questions.forEach(question => assert.equal(question.options[question.answerIndex], question.answer, `${item.id}: resposta fora das opções`));
});
const counts = Object.fromEntries(LEVELS.map(level => [level, items.filter(item => item.referenceLevel === level).length]));
const questions = items.reduce((sum, item) => sum + item.questions.length, 0);
if (process.argv.includes('--write')) {
    fs.writeFileSync(OUTPUT, output, 'utf8');
    console.log(`✓ índice de leitura gerado: ${items.length} textos, ${questions} questões (${JSON.stringify(counts)})`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'índice de leitura ausente; execute npm.cmd run index:reading');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), output, 'índice de leitura fora de sincronia');
    const hash = crypto.createHash('sha256').update(JSON.stringify(items)).digest('hex').slice(0, 16);
    console.log(`✓ índice de leitura sincronizado: ${items.length} textos, ${questions} questões, snapshot ${hash}`);
}
