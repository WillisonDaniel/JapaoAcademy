'use strict';

/**
 * Portão de Verificação e Integridade da Etapa N2.6
 * Extração e Integração Controlada do Corpus Shin Kanzen Master N2
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');

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

console.log('--- Iniciando Portão de Verificação N2.6 (Shin Kanzen Master N2) ---');

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

let totalExpectedPages = 0;
for (const s of expectedSources) {
    const full = path.join(ROOT, s.file);
    assert.ok(fs.existsSync(full), `Livro físico ausente: ${s.file}`);
    const stat = fs.statSync(full);
    assert.equal(stat.size, s.bytes, `Tamanho divergente em ${s.file}: esperado ${s.bytes}, obtido ${stat.size}`);
    const hash = sha256File(full);
    assert.equal(hash, s.sha256, `SHA-256 divergente em ${s.file}`);
    totalExpectedPages += s.pages;
}
console.log(`✓ Requisito 1: 5/5 livros físicos validados com hash SHA-256 exato (${totalExpectedPages} páginas)`);

// 2. Verificação dos Artefatos Documentais N2.6
const inventory = readJson('tests/N2.6_SHINKANZEN_SOURCE_INVENTORY.json');
assert.equal(inventory.schemaVersion, 1);
assert.equal(inventory.summary.totalSources, 5);
assert.equal(inventory.summary.totalPages, 1007);
console.log('✓ Requisito 2: tests/N2.6_SHINKANZEN_SOURCE_INVENTORY.json íntegro (5 fontes, 1.007 páginas)');

const manifest = readJson('tests/N2.6_SHINKANZEN_CORPUS_MANIFEST.json');
assert.equal(manifest.schemaVersion, 1);
assert.equal(manifest.sourcesExtracted.length, 5);
console.log('✓ Requisito 3: tests/N2.6_SHINKANZEN_CORPUS_MANIFEST.json íntegro (5 obras mapeadas)');

const reportPath = path.join(ROOT, 'tests/N2.6_SHINKANZEN_CORPUS_EXTRACTION_REPORT.md');
assert.ok(fs.existsSync(reportPath), 'Relatório N2.6_SHINKANZEN_CORPUS_EXTRACTION_REPORT.md ausente');
const reportContent = fs.readFileSync(reportPath, 'utf8');
assert.match(reportContent, /N2\.6-EXTRACTION-INTEGRATION:\s*PASS/);
console.log('✓ Requisito 4: tests/N2.6_SHINKANZEN_CORPUS_EXTRACTION_REPORT.md presente e aprovado');

const integrityManifest = readJson('tests/N2.6_SHINKANZEN_INTEGRITY_MANIFEST.json');
assert.equal(integrityManifest.auditResult, 'N2.6-EXTRACTION-INTEGRATION: PASS');
assert.equal(integrityManifest.editorialInvariance.approvedTargetsCreated, 0);
assert.equal(integrityManifest.editorialInvariance.datasetAlterations, 0);
assert.equal(integrityManifest.editorialInvariance.ledgerAlterations, 0);
console.log('✓ Requisito 5: tests/N2.6_SHINKANZEN_INTEGRITY_MANIFEST.json validado (0 aprovados, 0 alterações)');

// 3. Verificação de Extração Física Integral em scratch/japanese-corpus/
let totalCorpusPagesFound = 0;
for (const s of expectedSources) {
    const dir = path.join(ROOT, 'scratch/japanese-corpus', s.id);
    assert.ok(fs.existsSync(dir), `Diretório do corpus ausente: scratch/japanese-corpus/${s.id}`);
    
    for (let p = 1; p <= s.pages; p++) {
        const pageFile = path.join(dir, `page-${String(p).padStart(4, '0')}.json`);
        assert.ok(fs.existsSync(pageFile), `Página ${p} ausente em ${s.id}`);
        const pageData = JSON.parse(fs.readFileSync(pageFile, 'utf8'));
        assert.equal(pageData.sourceId, s.id);
        assert.equal(pageData.page, p);
        assert.equal(pageData.method, 'tesseract-ocr');
        assert.ok(typeof pageData.characters === 'number');
        assert.ok(typeof pageData.text === 'string');
        assert.ok(typeof pageData.textSha256 === 'string');
        totalCorpusPagesFound++;
    }
}
assert.equal(totalCorpusPagesFound, 1007, `Total de páginas no corpus divergente: esperado 1007, obtido ${totalCorpusPagesFound}`);
console.log(`✓ Requisito 6: Extração integral 100% comprovada: 1.007/1.007 páginas JSON schema-compliant`);

// 4. Verificação de Diferenciação Estrutural do Chōkai
const chokaiDir = path.join(ROOT, 'scratch/japanese-corpus/shinkanzen-n2-chokai');
const chokaiSampleExercise = JSON.parse(fs.readFileSync(path.join(chokaiDir, 'page-0020.json'), 'utf8'));
const chokaiSampleScript = JSON.parse(fs.readFileSync(path.join(chokaiDir, 'page-0125.json'), 'utf8'));

assert.ok(chokaiSampleExercise.chokaiSection, 'Seção ausente na p20 do Chokai');
assert.ok(chokaiSampleScript.chokaiSection, 'Seção ausente na p125 do Chokai');
assert.equal(chokaiSampleExercise.chokaiSection, 'jitsuryoku_yousei');
assert.equal(chokaiSampleScript.chokaiSection, 'bessatsu_answers_scripts');
assert.ok(manifest.chokaiDifferentiation.referencedTracksCount > 0, 'Nenhuma faixa de áudio catalogada no Chokai');
assert.equal(manifest.chokaiDifferentiation.physicalAudioPresentOnDisk, 0, 'Áudios físicos inesperados no repositório');
console.log('✓ Requisito 7: Chōkai com diferenciação estrutural comprovada (exercícios vs scripts/respostas, faixas catalogadas, 0 transcrições)');

// 5. Invariância Absoluta de Datasets e Ledger
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
console.log('PORTÃO DE EXTRAÇÃO N2.6: PASS (8/8 Requisitos Comprovados)');
console.log('======================================================================');
