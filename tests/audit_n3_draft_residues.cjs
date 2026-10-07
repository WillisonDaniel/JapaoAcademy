'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');

function load(file, variable) {
    const context = { console: { log() {}, warn() {}, error() {} } };
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    vm.runInContext(read(file) + '\n;globalThis.__val=' + variable + ';', context, { filename: file });
    return JSON.parse(JSON.stringify(context.__val));
}

const n3 = load('database/ja-JP/data_kanji_n3.js', 'kanjiN3Data');

let totalExamples = 0;
let candidates = [];

n3.forEach((m, mIdx) => {
    const modNum = m.module || (mIdx + 1);
    (m.kanjis || []).forEach((k, kIdx) => {
        (k.examples || []).forEach((ex, exIdx) => {
            totalExamples++;
            const content = ex.content || {};
            const displayText = content.displayText || ex.sentence || ex.frase || '';
            const audioText = content.audioText || ex.audioText || displayText;
            const romaji = content.romaji || ex.romaji || '';
            const translation = content.translation || ex.translation || ex.meaning || ex.significado || '';
            const word = ex.word || ex.palavra || '';
            const reading = ex.reading || ex.leitura || '';
            const status = (ex.editorialReview && ex.editorialReview.status) || 'none';
            const id = `ja-phase19-n3-n3-m${modNum}-kanjis-${kIdx}-examples-${exIdx}`;

            // Check specific mechanical transliterations & draft residues
            const hasDraftTransliteration = /でばて|そうプ|ぱぺル|スとね|ぺルそん|ドれあム|招いま|ちゅしゃ禁止|つずき|ふねがたつ/i.test(displayText);
            const hasSpaceInText = /\s/.test(displayText);
            const hasLatinInText = /[a-zA-Z]/.test(displayText);
            const hasBrokenEnding = /あおうと/.test(displayText);

            let classification = 'FALSE_POSITIVE';
            let reasons = [];

            if (hasDraftTransliteration) {
                classification = 'STRONG_DRAFT_RESIDUE';
                reasons.push('Contains mechanical draft residue token or corrupted transliteration');
            } else if (hasSpaceInText && !displayText.includes(' ')) {
                classification = 'STRONG_DRAFT_RESIDUE';
                reasons.push('Contains abnormal internal whitespace');
            } else if (hasLatinInText) {
                classification = 'STRONG_DRAFT_RESIDUE';
                reasons.push('Contains Latin characters');
            } else if (hasBrokenEnding) {
                classification = 'STRONG_DRAFT_RESIDUE';
                reasons.push('Contains broken verb ending: あおうと');
            }

            if (classification === 'STRONG_DRAFT_RESIDUE') {
                candidates.push({
                    id,
                    module: modNum,
                    kanjiIndex: kIdx,
                    character: k.character,
                    exampleIndex: exIdx,
                    word,
                    reading,
                    currentDisplayText: displayText,
                    audioText,
                    romaji,
                    translation,
                    suspicionReason: reasons.join('; '),
                    classification,
                    editorialStateBefore: status
                });
            }
        });
    });
});

console.log(`Total N3 examples examined: ${totalExamples}`);
console.log(`Total STRONG_DRAFT_RESIDUE identified: ${candidates.length}\n`);

candidates.forEach((c, idx) => {
    console.log(`${idx + 1}. [${c.id}] (Mod ${c.module}, Kanji ${c.character}, Word: ${c.word})`);
    console.log(`   Text: "${c.currentDisplayText}"`);
    console.log(`   Trans: "${c.translation}"`);
    console.log(`   Reason: ${c.suspicionReason}\n`);
});

const WRITE_CURRENT_CANDIDATES = process.argv.includes('--write-current-candidates');

if (WRITE_CURRENT_CANDIDATES) {
    const scratchDir = path.join(ROOT, 'scratch');
    if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });
    const currentCandidatesFile = path.join(scratchDir, 'n3_draft_residue_candidates_current.json');
    fs.writeFileSync(currentCandidatesFile, JSON.stringify(candidates, null, 2), 'utf8');
    console.log(`Saved ${currentCandidatesFile}`);
} else {
    console.log('Modo read-only por padrão: os arquivos históricos permanecem protegidos.');
}
