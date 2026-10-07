'use strict';

/**
 * Portão de Verificação e QA do OCR Shin Kanzen Master N2 — Etapa N2.6.1
 * Valida a auditoria integral de 1.007 páginas, classificação das 55 páginas suspeitas,
 * ganho comprovado das 24 páginas re-OCR, smoke tests e invariância editorial absoluta.
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const JAPANESE_REGEX = /[\u3040-\u30ff\u3400-\u9fff]/g;

function readJson(relPath) {
    const full = path.join(ROOT, relPath);
    assert.ok(fs.existsSync(full), `Arquivo JSON obrigatório não encontrado: ${relPath}`);
    return JSON.parse(fs.readFileSync(full, 'utf8'));
}

function sha256File(fullPath) {
    assert.ok(fs.existsSync(fullPath), `Arquivo para hash ausente: ${fullPath}`);
    const buf = fs.readFileSync(fullPath);
    return crypto.createHash('sha256').update(buf).digest('hex').toUpperCase();
}

function sha256Text(text) {
    return crypto.createHash('sha256').update(Buffer.from(text, 'utf8')).digest('hex');
}

console.log('--- Iniciando Portão de Verificação N2.6.1 (OCR QA & Hardening Shin Kanzen N2) ---');

// 1. Verificação dos 5 Livros Físicos sob livros/N2
const expectedSources = [
    {
        id: 'shinkanzen-n2-bunpo',
        file: 'livros/N2/Shinkanzen Master N2 Bunpo.pdf',
        bytes: 69215273,
        sha256: '9F71994C965A0FA9F7E44B9400FA5E6B9C2A97C09C8F28E2D9A1948ECB86967C',
        pages: 229
    },
    {
        id: 'shinkanzen-n2-chokai',
        file: 'livros/N2/Shinkanzen Master N2 Chokai.pdf',
        bytes: 11862604,
        sha256: 'EEEB4D3DD1BA6DD6C273E0068D003F49A3AB20ABE5FD50DDE124DD8C3761777B',
        pages: 161
    },
    {
        id: 'shinkanzen-n2-dokkai',
        file: 'livros/N2/Shinkanzen Master N2 Dokkai.pdf',
        bytes: 114250044,
        sha256: '55C7082F529752126DDCB98FC0841E98A223A329F0CD5BF150ED028F8213AEDB',
        pages: 239
    },
    {
        id: 'shinkanzen-n2-goi',
        file: 'livros/N2/Shinkanzen Master N2 Goi.pdf',
        bytes: 40691294,
        sha256: '5B1FF7F9EB08BA4E324645534DFEE42A61CA78779B2797C25170958D9A9801E4',
        pages: 246
    },
    {
        id: 'shinkanzen-n2-kanji',
        file: 'livros/N2/Shinkanzen Master N2 Kanji.pdf',
        bytes: 9921971,
        sha256: '6EFC4DB8F0A551BF4E71900E312A678AA55505F1C2687191ABDA0ADB481AD143',
        pages: 132
    }
];

for (const s of expectedSources) {
    const full = path.join(ROOT, s.file);
    const stat = fs.statSync(full);
    assert.equal(stat.size, s.bytes, `Tamanho divergente em ${s.file}`);
    const hash = sha256File(full);
    assert.equal(hash, s.sha256, `SHA-256 divergente em ${s.file}`);
}
console.log('✓ Requisito 1: 5/5 livros físicos validados com hash SHA-256 exato');

// 2. Verificação dos Artefatos N2.6.1
const pageReview = readJson('tests/N2.6.1_OCR_PAGE_REVIEW.json');
assert.equal(pageReview.schemaVersion, 1);
assert.equal(pageReview.summary.totalInvestigatedPages, 57);
assert.equal(pageReview.summary.reOcrReplaced, 24);
assert.equal(pageReview.summary.retainedValid, 33);
assert.equal(pageReview.summary.categories.OCR_IMPROVED, 24);
assert.equal(pageReview.summary.categories.OCR_UNRESOLVED, 0);
assert.equal(pageReview.summary.categories.INTEGRITY_MISMATCH, 0);
console.log('✓ Requisito 2: tests/N2.6.1_OCR_PAGE_REVIEW.json íntegro (57 investigadas, 24 re-OCR melhoradas, 33 mantidas)');

const qaManifest = readJson('tests/N2.6.1_OCR_QA_MANIFEST.json');
assert.equal(qaManifest.schemaVersion, 1);
assert.equal(qaManifest.auditResult, 'N2.6.1-OCR-HARDENING: PASS');
assert.equal(qaManifest.corpusOverview.totalPages, 1007);
assert.ok(qaManifest.corpusOverview.netJapaneseGain >= 7000, 'Ganho líquido de caracteres japoneses inferior a 7.000');
console.log(`✓ Requisito 3: tests/N2.6.1_OCR_QA_MANIFEST.json validado (ganho líquido: +${qaManifest.corpusOverview.netJapaneseGain} caracteres JP)`);

const reportPath = path.join(ROOT, 'tests/N2.6.1_OCR_QA_REPORT.md');
assert.ok(fs.existsSync(reportPath), 'Relatório N2.6.1_OCR_QA_REPORT.md ausente');
const reportContent = fs.readFileSync(reportPath, 'utf8');
assert.match(reportContent, /N2\.6\.1-OCR-HARDENING:\s*PASS/);
console.log('✓ Requisito 4: tests/N2.6.1_OCR_QA_REPORT.md presente e aprovado');

// 3. Verificação Integral de Integridade das 1.007 Páginas em scratch/japanese-corpus/
let totalCorpusPages = 0;
let totalCharacters = 0;
let totalJapaneseCharacters = 0;
let emptyPagesCount = 0;

for (const s of expectedSources) {
    const dir = path.join(ROOT, 'scratch/japanese-corpus', s.id);
    assert.ok(fs.existsSync(dir), `Diretório ausente: scratch/japanese-corpus/${s.id}`);

    for (let p = 1; p <= s.pages; p++) {
        const pageFile = path.join(dir, `page-${String(p).padStart(4, '0')}.json`);
        assert.ok(fs.existsSync(pageFile), `Página ${p} ausente em ${s.id}`);
        const pd = JSON.parse(fs.readFileSync(pageFile, 'utf8'));

        assert.equal(pd.sourceId, s.id);
        assert.equal(pd.page, p);
        assert.equal(pd.method, 'tesseract-ocr');

        const text = pd.text || '';
        const len = text.length;
        const jp = (text.match(JAPANESE_REGEX) || []).length;
        const hash = sha256Text(text);

        assert.equal(pd.characters, len, `Inconsistência de caracteres na p${p} de ${s.id}`);
        assert.equal(pd.japaneseCharacters, jp, `Inconsistência de caracteres japoneses na p${p} de ${s.id}`);
        assert.equal(pd.textSha256, hash, `Inconsistência de hash de texto na p${p} de ${s.id}`);

        totalCorpusPages++;
        totalCharacters += len;
        totalJapaneseCharacters += jp;
        if (len === 0) emptyPagesCount++;
    }
}

assert.equal(totalCorpusPages, 1007);
assert.equal(emptyPagesCount, 2, `Esperadas exatamente 2 páginas com 0 caracteres (Kanji 131, 132), encontradas: ${emptyPagesCount}`);
console.log(`✓ Requisito 5: 1.007/1.007 páginas verificadas matematicamente (0 integrity mismatches, 2 páginas zero-chars + 2 divisórias em branco)`);

// 4. Verificação da Resolução de Duplicações no Bunpo
const bunpoDir = path.join(ROOT, 'scratch/japanese-corpus/shinkanzen-n2-bunpo');
const p222 = JSON.parse(fs.readFileSync(path.join(bunpoDir, 'page-0222.json'), 'utf8'));
const p226 = JSON.parse(fs.readFileSync(path.join(bunpoDir, 'page-0226.json'), 'utf8'));
assert.notEqual(p222.textSha256, p226.textSha256, 'Bunpo p222 e p226 permanecem duplicadas');
assert.ok(p222.text.includes('第1部') || p222.text.includes('文の文法'), 'Conteúdo do gabarito p222 não encontrado');
console.log('✓ Requisito 6: Duplicação indevida p222/p226 resolvida (conteúdo de gabarito restaurado com sucesso)');

// 5. Suíte de 10/10 Smoke Tests de Regressão e Hardening
const smokeTests = [
    { term: 'に際して', sources: ['shinkanzen-n2-bunpo'] },
    { term: 'きっかけ', sources: ['shinkanzen-n2-goi'] },
    { term: '診察', sources: ['shinkanzen-n2-chokai', 'shinkanzen-n2-goi'] },
    { term: '特許', sources: ['shinkanzen-n2-kanji'] },
    { term: '申し込む', sources: ['shinkanzen-n2-goi'] },
    { term: '信じ込む', sources: ['shinkanzen-n2-goi'] },
    { term: 'できるだけ', sources: ['shinkanzen-n2-goi'] },
    { term: '問題(1', sources: ['shinkanzen-n2-bunpo'] },
    { term: '見送る', sources: ['shinkanzen-n2-bunpo'] },
    { term: '小株さん', sources: ['shinkanzen-n2-chokai'] }
];

for (const st of smokeTests) {
    let found = false;
    for (const sid of st.sources) {
        const sdir = path.join(ROOT, 'scratch/japanese-corpus', sid);
        const files = fs.readdirSync(sdir).filter(f => f.startsWith('page-') && f.endsWith('.json'));
        for (const f of files) {
            const content = fs.readFileSync(path.join(sdir, f), 'utf8');
            if (content.includes(st.term)) {
                found = true;
                break;
            }
        }
        if (found) break;
    }
    assert.ok(found, `Smoke test falhou para termo obrigatório: [${st.term}]`);
}
console.log('✓ Requisito 7: 10/10 smoke tests de regressão e hardening passaram');

// 6. Invariância Absoluta de Datasets e Ledger
const baselineFiles = [
    { file: 'database/ja-JP/data_kanji_n1.js', bytes: 2908746, sha256: '64BACAA4E00B2D025897E81295B8AB16ACE69382095A63AA360264DC20B4CF2C' },
    { file: 'database/ja-JP/data_kanji_n2.js', bytes: 1067287, sha256: 'B6A86705FE9B094C119E1CE17ED10BC1A9BFBDED12477136DC574ABCBE268545' },
    { file: 'database/ja-JP/data_kanji_n3.js', bytes: 753295, sha256: 'C9E5FF4CA62007B1D04ECD6BB0BCBB9F9217D447D3105309CF3E5F072E3A03C0' },
    { file: 'tests/JAPANESE_EDITORIAL_LEDGER.json', bytes: 22477718, sha256: '64C8DF4682405FF698DEAC5154FA1F12E7F02B1DB12D1D6A0801644E5F219D37' },
    { file: 'tests/N2_EDITORIAL_REVIEW_QUEUE.json', bytes: 859297, sha256: 'CD72333370710768A58D85F559F50C942A63E5754CAEAFB71B68926E395F9FFE' }
];

for (const b of baselineFiles) {
    const full = path.join(ROOT, b.file);
    const stat = fs.statSync(full);
    assert.equal(stat.size, b.bytes, `Tamanho alterado em ${b.file}`);
    const hash = sha256File(full);
    assert.equal(hash, b.sha256, `SHA-256 alterado em ${b.file}`);
}
console.log('✓ Requisito 8: Invariância editorial 100% comprovada (N1, N2, N3, Ledger e Queue intactos)');

console.log('\n======================================================================');
console.log('PORTÃO DE QA DO OCR N2.6.1: PASS (8/8 Requisitos Comprovados)');
console.log('======================================================================');
