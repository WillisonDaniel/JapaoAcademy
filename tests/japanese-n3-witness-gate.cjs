'use strict';

/**
 * JAPANESE N3 WITNESS GATE
 * FASE 18, 19, 20 — MASTER CLOSURE
 *
 * Valida a integridade criptográfica e semântica do pacote de testemunhas
 * portável (tests/n3-witness/ e tests/JAPANESE_N3_WITNESS_MANIFEST.json).
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

const manifest = readJson('tests/JAPANESE_N3_WITNESS_MANIFEST.json');
const catalog = readJson('tests/JAPANESE_EDITORIAL_SOURCES.json');
const audit = readJson('tests/JAPANESE_N3_25B_EVIDENCE_AUDIT.json');

const sourcesMap = new Map();
catalog.sources.forEach(s => sourcesMap.set(s.id, s));
catalog.externalSources.forEach(s => sourcesMap.set(s.id, s));

// 1. Integridade do Manifesto
assert.equal(manifest.schemaVersion, 1, 'Manifesto: schemaVersion deve ser 1');
assert.equal(manifest.witnessCount, 18, 'Manifesto: witnessCount deve ser 18');
assert.equal(manifest.witnessFiles.length, 18, 'Manifesto: deve conter 18 arquivos de testemunha');

const witnessMap = new Map();

for (const entry of manifest.witnessFiles) {
    const absPath = path.join(ROOT, entry.witnessPath);
    assert.ok(fs.existsSync(absPath), `Arquivo de testemunha ausente: ${entry.witnessPath}`);
    
    // Hash do arquivo de testemunha em si
    const fileBytes = fs.readFileSync(absPath);
    const computedFileSha = crypto.createHash('sha256').update(fileBytes).digest('hex');
    assert.equal(computedFileSha, entry.witnessSha256, `SHA-256 do arquivo divergiu para ${entry.filename}`);
    
    // Conteúdo interno do arquivo de testemunha
    const data = JSON.parse(fileBytes.toString('utf8'));
    assert.equal(data.sourceId, entry.sourceId);
    assert.equal(data.page, entry.page);
    assert.equal(data.sourceSha256, entry.sourceSha256);
    assert.equal(data.pageTextSha256, entry.pageTextSha256);
    
    // Hash do texto normalizado
    const normText = String(data.normalizedText || data.text || '').trim().replace(/\s+/g, ' ');
    const computedTextSha = crypto.createHash('sha256').update(normText).digest('hex');
    assert.equal(computedTextSha, entry.pageTextSha256, `SHA-256 do texto normalizado divergiu para ${entry.filename}`);
    
    // Correspondência com catálogo de fontes
    const catSource = sourcesMap.get(entry.sourceId);
    assert.ok(catSource, `Fonte ${entry.sourceId} ausente no catálogo`);
    assert.equal(entry.sourceSha256, catSource.sha256, `Hash da fonte divergiu do catálogo para ${entry.sourceId}`);
    
    witnessMap.set(`${entry.sourceId}:p${entry.page}`, data);
}

// 2. Cobertura completa de todos os 18 targets N3
for (const target of audit.targets) {
    for (const ev of target.evidence) {
        const key = `${ev.sourceId}:p${ev.page}`;
        const witness = witnessMap.get(key);
        assert.ok(witness, `${target.id}: testemunha ausente para ${key}`);
        
        // Verificação semântica dos tokens em relação ao texto da testemunha
        if (ev.supportEvidence) {
            for (const [claimType, proof] of Object.entries(ev.supportEvidence)) {
                if (proof.verificationMode === 'text-exact' || proof.verificationMode === 'lexical-gloss') {
                    assert.ok(
                        witness.normalizedText.includes(proof.observedToken),
                        `${target.id}: token "${proof.observedToken}" (${claimType}) não encontrado no texto da testemunha ${key}`
                    );
                }
            }
        }
    }
}

console.log(`Portão de Testemunhas N3: 18/18 arquivos de testemunha validados criptograficamente e semanticamente.`);
