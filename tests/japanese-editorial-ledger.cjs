'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const SOURCES_PATH = path.join(__dirname, 'JAPANESE_EDITORIAL_SOURCES.json');
const LEDGER_PATH = path.join(__dirname, 'JAPANESE_EDITORIAL_LEDGER.json');
const OCR_COVERAGE_PATH = path.join(ROOT, 'scratch', 'japanese-corpus', 'coverage.json');
const CHECK_LOCAL = process.argv.includes('--check-local');
const CHECK_OCR = process.argv.includes('--check-ocr');
const STATES = new Set(['approved', 'corrected', 'unresolved', 'excluded']);
const HASH = /^[a-f0-9]{64}$/;

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function hashFile(file) {
    const hash = crypto.createHash('sha256');
    const descriptor = fs.openSync(file, 'r');
    const buffer = Buffer.allocUnsafe(1024 * 1024);
    try {
        let bytesRead = 0;
        do {
            bytesRead = fs.readSync(descriptor, buffer, 0, buffer.length, null);
            if (bytesRead) hash.update(buffer.subarray(0, bytesRead));
        } while (bytesRead);
    } finally {
        fs.closeSync(descriptor);
    }
    return hash.digest('hex');
}

function validateSources(catalog) {
    assert.equal(catalog.schemaVersion, 1, 'catalogo de fontes: schemaVersion invalido');
    assert.equal(catalog.sources.length, 21, 'catalogo deve conter 20 PDFs e um DOCX');
    const ids = new Set();
    let pdfs = 0;
    let pdfPages = 0;
    let nativeTextPages = 0;

    for (const source of catalog.sources) {
        assert.ok(source.id && !ids.has(source.id), `fonte duplicada ou sem id: ${source.id}`);
        ids.add(source.id);
        assert.ok(source.path.startsWith('livros/'), `${source.id}: caminho deve permanecer sob livros/`);
        assert.ok(['pdf', 'docx'].includes(source.kind), `${source.id}: tipo de fonte invalido`);
        assert.match(String(source.sha256 || ''), HASH, `${source.id}: SHA-256 ausente ou invalido`);
        assert.ok(Number.isInteger(source.bytes) && source.bytes > 0, `${source.id}: tamanho invalido`);
        assert.ok(Array.isArray(source.roles) && source.roles.length > 0, `${source.id}: funcao pedagogica ausente`);
        assert.ok(['native', 'ocr-required'].includes(source.extraction && source.extraction.mode), `${source.id}: modo de extracao invalido`);
        const quality = source.extraction.quality;
        assert.ok(quality && quality.status === 'complete', `${source.id}: extracao nao concluida`);
        if (source.kind === 'pdf') {
            pdfs++;
            assert.ok(Number.isInteger(source.pageCount) && source.pageCount > 0, `${source.id}: paginas invalidas`);
            pdfPages += source.pageCount;
            nativeTextPages += source.extraction.nativeTextPages;
            assert.equal(quality.processedPages, source.pageCount, `${source.id}: cobertura de paginas incompleta`);
            assert.equal(quality.visualSampleStatus, 'inspected', `${source.id}: amostra visual nao inspecionada`);
            assert.deepEqual(quality.visualSamplePages,
                [1, Math.max(1, Math.floor(source.pageCount / 2)), source.pageCount], `${source.id}: amostra visual invalida`);
            if (source.extraction.mode === 'ocr-required') {
                assert.ok(typeof quality.meanOcrConfidence === 'number' && quality.meanOcrConfidence >= 0 && quality.meanOcrConfidence <= 100,
                    `${source.id}: confianca OCR invalida`);
            }
        }
    }

    assert.equal(pdfs, 20, 'catalogo deve conter 20 PDFs');
    assert.equal(pdfPages, 4238, 'total de paginas PDF mudou');
    assert.equal(nativeTextPages, 398, 'total de paginas com camada textual mudou');
    assert.equal(pdfPages - nativeTextPages, 3840, 'total de paginas dependentes de OCR mudou');
    assert.equal(catalog.summary.audioFilesDeferred, 464, 'inventario de audio mudou');
    assert.equal(catalog.summary.lowConfidencePages, 144, 'fila de baixa confianca mudou sem revisao do relatorio');
    assert.equal(catalog.summary.verticalAttempts, 180, 'total de tentativas verticais mudou sem revisao do relatorio');
    assert.equal(catalog.summary.meanOcrConfidence, 86.27, 'confianca media OCR mudou sem revisao do relatorio');
    assert.match(String(catalog.audioCorpus.aggregateSha256 || ''), HASH, 'hash agregado do corpus de audio ausente');
    assert.ok(Array.isArray(catalog.externalSources), 'catalogo: externalSources deve ser uma lista');
    for (const source of catalog.externalSources) {
        assert.ok(source.id && !ids.has(source.id), `fonte externa duplicada ou sem id: ${source.id}`);
        ids.add(source.id);
        assert.ok(['dataset', 'pdf'].includes(source.kind), `${source.id}: tipo externo invalido`);
        assert.ok(/^https:\/\//.test(source.url || ''), `${source.id}: URL oficial ausente`);
        assert.ok(/^scratch\//.test(source.scratchPath || ''), `${source.id}: artefato externo deve permanecer em scratch/`);
        assert.match(String(source.sha256 || ''), HASH, `${source.id}: SHA-256 ausente ou invalido`);
        assert.ok(Number.isInteger(source.bytes) && source.bytes > 0, `${source.id}: tamanho invalido`);
        assert.ok(Array.isArray(source.roles) && source.roles.length > 0, `${source.id}: funcao editorial ausente`);
        if (source.kind === 'pdf') {
            assert.ok(Number.isInteger(source.pageCount) && source.pageCount > 0, `${source.id}: paginas invalidas`);
            assert.equal(source.visualSampleStatus, 'inspected', `${source.id}: amostra visual nao inspecionada`);
            assert.deepEqual(source.visualSamplePages,
                [1, Math.max(1, Math.floor(source.pageCount / 2)), source.pageCount], `${source.id}: amostra visual invalida`);
        } else {
            assert.ok(source.locationScheme && typeof source.locationScheme === 'string', `${source.id}: esquema de localizacao ausente`);
        }
    }
    return ids;
}

function validateLedger(ledger, sources) {
    assert.equal(ledger.schemaVersion, 1, 'ledger: schemaVersion invalido');
    assert.ok(Array.isArray(ledger.decisions), 'ledger: decisions deve ser uma lista');
    const decisionIds = new Set();

    for (const decision of ledger.decisions) {
        assert.ok(decision.id && !decisionIds.has(decision.id), `decisao duplicada ou sem id: ${decision.id}`);
        decisionIds.add(decision.id);
        assert.ok(STATES.has(decision.state), `${decision.id}: estado editorial invalido`);
        assert.ok(decision.target && decision.target.file && decision.target.locator, `${decision.id}: alvo estavel ausente`);
        assert.match(String(decision.beforeHash || ''), HASH, `${decision.id}: hash anterior invalido`);
        assert.ok(typeof decision.rationale === 'string' && decision.rationale.trim(), `${decision.id}: justificativa ausente`);
        assert.ok(typeof decision.confidence === 'number' && decision.confidence >= 0 && decision.confidence <= 1, `${decision.id}: confianca invalida`);
        assert.ok(Array.isArray(decision.references), `${decision.id}: referencias invalidas`);

        if (decision.state === 'approved' || decision.state === 'corrected') {
            assert.ok(decision.references.length > 0, `${decision.id}: aprovacao sem evidencia localizada`);
        }
        const independentSources = new Set();
        for (const reference of decision.references) {
            assert.ok(sources.has(reference.sourceId), `${decision.id}: fonte inexistente ${reference.sourceId}`);
            const source = [...catalog.sources, ...catalog.externalSources].find(item => item.id === reference.sourceId);
            if (source.kind === 'pdf') {
                assert.ok(Number.isInteger(reference.page) && reference.page >= 1 && reference.page <= source.pageCount,
                    `${decision.id}: pagina invalida em ${reference.sourceId}`);
            } else {
                assert.ok(reference.location && typeof reference.location === 'string', `${decision.id}: localizacao DOCX ausente`);
            }
            independentSources.add(reference.sourceId);
        }
        if (decision.reasonKind === 'naturalness' || decision.reasonKind === 'source-conflict') {
            assert.ok(independentSources.size >= 2, `${decision.id}: decisao de consenso exige duas fontes independentes`);
        }
        if (CHECK_LOCAL) {
            const target = path.join(ROOT, decision.target.file);
            assert.ok(fs.existsSync(target), `${decision.id}: arquivo-alvo nao existe`);
        }
    }
}

function validateLocalSources(catalog) {
    for (const source of catalog.sources) {
        const file = path.join(ROOT, source.path);
        assert.ok(fs.existsSync(file), `${source.id}: fonte local ausente`);
        assert.equal(fs.statSync(file).size, source.bytes, `${source.id}: tamanho local divergiu`);
        assert.equal(hashFile(file), source.sha256, `${source.id}: hash local divergiu`);
    }
    for (const source of catalog.externalSources) {
        const file = path.join(ROOT, source.scratchPath);
        assert.ok(fs.existsSync(file), `${source.id}: fonte externa local ausente`);
        assert.equal(fs.statSync(file).size, source.bytes, `${source.id}: tamanho local divergiu`);
        assert.equal(hashFile(file), source.sha256, `${source.id}: hash local divergiu`);
    }
}

function validateOcrCoverage(catalog) {
    assert.ok(fs.existsSync(OCR_COVERAGE_PATH), 'coverage.json do OCR nao foi gerado em scratch/');
    const coverage = readJson(OCR_COVERAGE_PATH);
    assert.equal(coverage.schemaVersion, 1, 'cobertura OCR: schema invalido');
    assert.equal(coverage.summary.totalPdfPages, catalog.summary.pdfPages, 'cobertura OCR: total de paginas divergiu');
    assert.equal(coverage.summary.nativePages, catalog.summary.nativeTextPages, 'cobertura OCR: paginas nativas divergiram');
    assert.equal(coverage.summary.ocrPages, catalog.summary.ocrRequiredPages, 'cobertura OCR incompleta');
    assert.equal(coverage.summary.failedPages, 0, 'cobertura OCR possui falhas');
}

function validateQueue(ledger, queueData) {
    assert.equal(queueData.schemaVersion, 1, 'fila editorial: schemaVersion invalido');
    assert.ok(Array.isArray(queueData.queue), 'fila editorial: queue deve ser uma lista');
    assert.equal(queueData.summary.canonicalUnresolvedCount, 0, 'contagem de unresolved canonicos divergiu');
    assert.equal(queueData.queue.length, 0, 'tamanho da fila editorial divergiu dos unresolved canonicos');

    const canonicalFiles = new Set([
        'database/ja-JP/data_hiragana.js',
        'database/ja-JP/data_katakana.js',
        'database/ja-JP/data_kanji_n5.js',
        'database/ja-JP/data_kanji_n4.js',
        'database/ja-JP/data_kanji_n3.js',
        'database/ja-JP/data_kanji_n2.js',
        'database/ja-JP/data_kanji_n1.js'
    ]);
    const ledgerCanonicalUnresolved = new Set(
        ledger.decisions
            .filter(d => d.state === 'unresolved' && canonicalFiles.has(d.target.file))
            .map(d => d.id)
    );
    assert.equal(ledgerCanonicalUnresolved.size, 0, 'total de unresolved canonicos no ledger divergiu');

    const seenQueueIds = new Set();
    for (const item of queueData.queue) {
        assert.ok(item.id && !seenQueueIds.has(item.id), `item duplicado ou sem id na fila: ${item.id}`);
        seenQueueIds.add(item.id);
        assert.ok(ledgerCanonicalUnresolved.has(item.id), `item na fila nao consta como unresolved canonico no ledger: ${item.id}`);
        assert.ok(canonicalFiles.has(item.file), `arquivo derivado indevido na fila canonica: ${item.file}`);
        assert.ok(item.locator && item.module && item.type && item.currentState === 'unresolved', `${item.id}: campos obrigatorios ausentes`);
        assert.equal(item.reasonKind, 'CANONICAL_EVIDENCE_PENDING', `${item.id}: reasonKind deve ser CANONICAL_EVIDENCE_PENDING`);
        assert.ok(Number.isInteger(item.priority) && item.priority >= 1 && item.priority <= 11, `${item.id}: prioridade invalida`);
    }
}

const QUEUE_PATH = path.join(__dirname, 'JAPANESE_FINAL_EDITORIAL_QUEUE.json');
const catalog = readJson(SOURCES_PATH);
const ledger = readJson(LEDGER_PATH);
const sourceIds = validateSources(catalog);
validateLedger(ledger, sourceIds);
if (fs.existsSync(QUEUE_PATH)) {
    validateQueue(ledger, readJson(QUEUE_PATH));
}
if (CHECK_LOCAL) validateLocalSources(catalog);
if (CHECK_OCR) validateOcrCoverage(catalog);

console.log(`Ledger editorial japones: ${ledger.decisions.length} decisoes, ${catalog.sources.length + catalog.externalSources.length} fontes rastreaveis.`);
if (fs.existsSync(QUEUE_PATH)) console.log(`Fila editorial final: 0 alvos canonicos pendentes (100% certificado).`);
if (CHECK_LOCAL) console.log('Hashes locais do corpus: OK.');
if (CHECK_OCR) console.log('Cobertura integral de extracao/OCR: OK.');
