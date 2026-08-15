'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'database/ja-JP/data_escuta_index.js');
const DATASETS = [
    ['A1', 'database/ja-JP/data_curso_a1.js', 'CURSO_A1_DADOS'],
    ['A2', 'database/ja-JP/data_curso_a2.js', 'CURSO_A2_DADOS'],
    ['B1', 'database/ja-JP/data_curso_b1.js', 'CURSO_B1_DADOS'],
    ['B2', 'database/ja-JP/data_curso_b2.js', 'CURSO_B2_DADOS']
];
const JAPANESE_TEXT = /[\u3040-\u30ff\u3400-\u9fff]/u;

function loadDataset(file, variable) {
    const context = { console: { log() {}, warn() {}, error() {} } };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\n;globalThis.__dataset = ${variable};`, context, { filename: file });
    return JSON.parse(JSON.stringify(context.__dataset));
}

function normalizeContent(content) {
    if (!content || typeof content !== 'object') return null;
    const displayText = String(content.displayText || '').trim();
    const audioText = String(content.audioText || '').trim();
    const translation = String(content.translation || '').trim();
    if (!displayText || !audioText || !translation || !JAPANESE_TEXT.test(audioText)) return null;
    return {
        displayText,
        audioText,
        furigana: String(content.furigana || '').trim(),
        romaji: String(content.romaji || '').trim(),
        translation
    };
}

function buildIndex() {
    const seen = new Set();
    const items = [];
    DATASETS.forEach(([level, file, variable]) => {
        loadDataset(file, variable).forEach((module, moduleIndex) => {
            const candidates = [{ source: 'context', sourceIndex: 0, content: module.stage1_context && module.stage1_context.audio }];
            (module.stage4_dialog || []).forEach((dialog, sourceIndex) => candidates.push({ source: 'dialog', sourceIndex, content: dialog.content }));
            candidates.forEach(candidate => {
                const content = normalizeContent(candidate.content);
                if (!content) return;
                const dedupeKey = `${level}\u0000${content.audioText}\u0000${content.translation}`;
                if (seen.has(dedupeKey)) return;
                seen.add(dedupeKey);
                items.push({
                    id: `ja-listening-${level.toLowerCase()}-${module.id}-${candidate.source}-${candidate.sourceIndex}`,
                    level,
                    moduleId: module.id,
                    moduleIndex,
                    moduleTitle: String(module.title || `Módulo ${moduleIndex + 1}`),
                    source: candidate.source,
                    editorialStatus: module.editorialReview && module.editorialReview.status === 'pending-human-review'
                        ? 'pending-human-review' : 'not-flagged',
                    ...content
                });
            });
        });
    });
    return items;
}

function render(items) {
    return `// Gerado por tests/japanese-listening-index.cjs. Não editar manualmente.\n` +
        `const JAPANESE_LISTENING_INDEX = Object.freeze(${JSON.stringify(items)});\n` +
        `if (typeof window !== 'undefined') window.JAPANESE_LISTENING_INDEX = JAPANESE_LISTENING_INDEX;\n`;
}

const items = buildIndex();
const output = render(items);
const counts = Object.fromEntries(['A1', 'A2', 'B1', 'B2'].map(level => [level, items.filter(item => item.level === level).length]));
const ids = new Set(items.map(item => item.id));
assert.equal(ids.size, items.length, 'IDs duplicados no índice auditivo');
assert.ok(items.length > 0, 'índice auditivo vazio');
items.forEach(item => {
    assert.ok(JAPANESE_TEXT.test(item.audioText), `${item.id}: audioText sem escrita japonesa`);
    assert.ok(item.translation, `${item.id}: tradução ausente`);
    assert.ok(['pending-human-review', 'not-flagged'].includes(item.editorialStatus), `${item.id}: status editorial inválido`);
});

if (process.argv.includes('--write')) {
    fs.writeFileSync(OUTPUT, output, 'utf8');
    console.log(`✓ índice auditivo gerado: ${items.length} itens (${JSON.stringify(counts)})`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'índice auditivo ausente; execute npm.cmd run index:listening');
    assert.equal(fs.readFileSync(OUTPUT, 'utf8'), output, 'índice auditivo fora de sincronia');
    const hash = crypto.createHash('sha256').update(JSON.stringify(items)).digest('hex').slice(0, 16);
    console.log(`✓ índice auditivo sincronizado: ${items.length} itens (${JSON.stringify(counts)}), snapshot ${hash}`);
}

