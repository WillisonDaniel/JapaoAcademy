'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'database/ja-JP/data_escrita_index.js');
const REVIEW_OUTPUT = path.join(ROOT, 'tests/JAPANESE_WRITING_HUMAN_REVIEW.md');
const LEVELS = ['A1', 'A2', 'B1', 'B2'];

function loadCourse(level) {
    const file = `database/ja-JP/data_curso_${level.toLowerCase()}.js`, sandbox = { console: { log() {}, warn() {}, error() {} } };
    sandbox.window = sandbox; sandbox.globalThis = sandbox; vm.createContext(sandbox);
    vm.runInContext(`${fs.readFileSync(path.join(ROOT, file), 'utf8')}\n;globalThis.__data = CURSO_${level}_DADOS;`, sandbox, { filename: file });
    return JSON.parse(JSON.stringify(sandbox.__data));
}
const text = value => String(value || '').trim();
const compact = value => text(value).normalize('NFKC').replace(/\s+/gu, '');
const hasJapanese = value => /[\u3040-\u30ff\u3400-\u9fff]/u.test(text(value));
const hasPlaceholder = value => /\[[^\]]+\]/u.test(text(value));

function buildInventory() {
    const items = [], exclusions = [];
    LEVELS.forEach(level => loadCourse(level).forEach((module, moduleIndex) => (module.stage3_5_sentenceBuilder || []).forEach((raw, itemIndex) => {
        const sentence = text(raw && raw.sentenceJp), translation = text(raw && raw.translation), chunks = Array.isArray(raw && raw.chunks) ? raw.chunks.map(text).filter(Boolean) : [];
        const base = { level, moduleId: text(module.id), moduleIndex, moduleTitle: text(module.title), itemIndex, sentence, translation, chunks };
        let reason = '';
        if (!hasJapanese(sentence)) reason = 'frase-japonesa-ausente';
        else if (!translation) reason = 'traducao-ausente';
        else if (!chunks.length) reason = 'blocos-ausentes';
        else if (hasPlaceholder(sentence) || chunks.some(hasPlaceholder)) reason = 'placeholder-nao-resolvido';
        else if (compact(chunks.join('')) !== compact(sentence)) reason = 'frase-e-blocos-divergentes';
        if (reason) { exclusions.push({ ...base, reason }); return; }
        items.push({
            id: `ja-writing-${level.toLowerCase()}-${module.id}-${itemIndex + 1}`, framework: 'CEFR', level,
            moduleId: text(module.id), moduleIndex, moduleTitle: text(module.title), itemIndex, route: 'curso.html',
            sentence, translation, chunks, editorialStatus: module.editorialReview && module.editorialReview.status === 'pending-human-review' ? 'pending-human-review' : 'not-flagged'
        });
    })));
    return { items, exclusions };
}
function render(items) { return `// Gerado por tests/japanese-writing-index.cjs. Não editar manualmente.\nconst JAPANESE_WRITING_INDEX = Object.freeze(${JSON.stringify(items)});\nif (typeof window !== 'undefined') window.JAPANESE_WRITING_INDEX = JAPANESE_WRITING_INDEX;\n`; }
function review(inventory, snapshot) {
    const lines = inventory.exclusions.map(item => `| ${item.level} | ${item.moduleId} | ${item.itemIndex + 1} | ${item.reason} | ${item.sentence.replace(/\|/g, '\\|')} | ${item.chunks.join(' / ').replace(/\|/g, '\\|')} |`).join('\n');
    return `# Inventário humano — escrita guiada japonesa\n\nGerado mecanicamente na Fase 11. Snapshot dos ${inventory.items.length} itens publicados: \`${snapshot}\`. Este documento não constitui aprovação editorial.\n\n- Modelos examinados: **${inventory.items.length + inventory.exclusions.length}**.\n- Modelos publicados mecanicamente: **${inventory.items.length}**.\n- Modelos excluídos sem inferência: **${inventory.exclusions.length}**.\n- Modelos publicados pendentes de revisão humana: **${inventory.items.filter(item => item.editorialStatus === 'pending-human-review').length}**.\n\n## Exclusões\n\n| Nível | Módulo | Item | Motivo | Frase | Blocos |\n|---|---|---:|---|---|---|\n${lines || '| — | — | — | Nenhuma | — | — |'}\n\nUma pessoa qualificada deve decidir a correção dos campos divergentes e validar naturalidade, tradução e segmentação antes de qualquer aprovação editorial.\n`;
}

const inventory = buildInventory(), output = render(inventory.items), snapshot = crypto.createHash('sha256').update(JSON.stringify(inventory.items)).digest('hex').slice(0, 16), reviewOutput = review(inventory, snapshot);
assert.equal(inventory.items.length, 208); assert.equal(inventory.exclusions.length, 2);
assert.deepEqual(inventory.exclusions.map(item => item.moduleId), ['b1_mod_10', 'b1_mod_18']);
assert.equal(new Set(inventory.items.map(item => item.id)).size, inventory.items.length);
inventory.items.forEach(item => { assert.ok(item.sentence && item.translation && item.chunks.length); assert.equal(compact(item.chunks.join('')), compact(item.sentence)); assert.equal(item.framework, 'CEFR'); });
if (process.argv.includes('--write')) {
    fs.writeFileSync(OUTPUT, output, 'utf8'); fs.writeFileSync(REVIEW_OUTPUT, reviewOutput, 'utf8');
    console.log(`✓ índice de escrita gerado: ${inventory.items.length} modelos, ${inventory.exclusions.length} exclusões, snapshot ${snapshot}`);
} else {
    assert.ok(fs.existsSync(OUTPUT), 'índice de escrita ausente; execute npm.cmd run index:writing'); assert.equal(fs.readFileSync(OUTPUT, 'utf8'), output, 'índice de escrita fora de sincronia'); assert.equal(fs.readFileSync(REVIEW_OUTPUT, 'utf8'), reviewOutput, 'inventário humano de escrita fora de sincronia');
    console.log(`✓ índice de escrita sincronizado: ${inventory.items.length} modelos, ${inventory.exclusions.length} exclusões, snapshot ${snapshot}`);
}
