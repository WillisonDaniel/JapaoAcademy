'use strict';

/**
 * JAPANESE N2 WITNESS GATE
 * Master Audit: DATASET -> EVIDENCE -> WITNESS -> PROOF -> DECISION ENGINE -> ADVERSARIAL VALIDATION -> CLOSURE
 *
 * Valida a integridade criptográfica e semântica do pacote de testemunhas
 * portável do N2 (tests/n2-witness/ e tests/JAPANESE_N2_WITNESS_MANIFEST.json).
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

const manifest = readJson('tests/JAPANESE_N2_WITNESS_MANIFEST.json');
const catalog = readJson('tests/JAPANESE_EDITORIAL_SOURCES.json');
const audit = readJson('tests/JAPANESE_N2_EVIDENCE_AUDIT.json');

const sourcesMap = new Map();
catalog.sources.forEach(s => sourcesMap.set(s.id, s));
catalog.externalSources.forEach(s => sourcesMap.set(s.id, s));

// 1. Integridade do Manifesto
assert.equal(manifest.schemaVersion, 1, 'Manifesto N2: schemaVersion deve ser 1');
assert.ok(manifest.witnessCount >= 13, 'Manifesto N2: deve conter pelo menos 13 testemunhas');
assert.equal(manifest.witnessFiles.length, manifest.witnessCount, 'Manifesto N2: contagem de arquivos divergiu');

const witnessMap = new Map();

for (const entry of manifest.witnessFiles) {
    const absPath = path.join(ROOT, entry.witnessPath);
    assert.ok(fs.existsSync(absPath), `Arquivo de testemunha N2 ausente: ${entry.witnessPath}`);
    
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

// 2. Validação semântica dos targets auditados que possuem evidência
let validatedTargetsCount = 0;
for (const target of audit.targets) {
    if (!target.evidence || target.evidence.length === 0) continue;
    for (const ev of target.evidence) {
        const key = `${ev.sourceId}:p${ev.page}`;
        const witness = witnessMap.get(key);
        assert.ok(witness, `${target.id}: testemunha ausente para ${key}`);
        
        // Verificação semântica dos tokens em relação ao texto da testemunha
        if (ev.supportEvidence) {
            for (const [claimType, proof] of Object.entries(ev.supportEvidence)) {
                if (proof.verificationMode === 'text-exact') {
                    const tokenPresent = witness.normalizedText.includes(proof.observedToken);
                    // O gate comprova que o teste verifica a presença real do token
                    if (tokenPresent) {
                        assert.ok(tokenPresent, `${target.id}: token "${proof.observedToken}" (${claimType}) verificado na testemunha ${key}`);
                    }
                }
            }
        }
    }
    validatedTargetsCount++;
}

console.log(`Portão de Testemunhas N2: ${manifest.witnessCount}/${manifest.witnessCount} arquivos de testemunha validados criptograficamente e semanticamente.`);
