'use strict';

/**
 * JAPANESE N2 EDITORIAL DECISION ENGINE
 * Master Audit: DATASET -> EVIDENCE -> WITNESS -> PROOF -> DECISION ENGINE -> ADVERSARIAL VALIDATION -> CLOSURE
 *
 * Deterministic evaluation of N2 editorial claims and targets without declarative biases.
 * Zero causal dependence on target.decision, target.ledgerState, or target.decisionEvidenceProfile.
 */

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');

const ALLOWED_CLAIM_TYPES = new Set([
    'lexical-replacement',
    'orthography',
    'inflection',
    'case-particle',
    'collocation',
    'grammar-structure',
    'semantic-fit',
    'register',
    'translation',
    'word-order',
    'contrast'
]);

/**
 * Matriz de compatibilidade entre Claim Type e Proof Type
 */
const ALLOWED_PROOF_TYPES_FOR_CLAIM = {
    'orthography': new Set(['orthography', 'target-word', 'character-reading', 'character-meaning']),
    'collocation': new Set(['collocation', 'target-word', 'grammar-pattern', 'context']),
    'inflection': new Set(['inflection', 'target-word', 'grammar-pattern']),
    'contrast': new Set(['contrast', 'target-word']),
    'case-particle': new Set(['case-particle', 'target-word', 'grammar-pattern']),
    'grammar-structure': new Set(['grammar-structure', 'grammar-pattern', 'target-word']),
    'lexical-replacement': new Set(['lexical-replacement', 'target-word']),
    'translation': new Set(['translation', 'meaning']),
    'semantic-fit': new Set(['semantic-fit', 'target-word', 'context']),
    'word-order': new Set(['word-order', 'grammar-pattern']),
    'register': new Set(['register', 'context'])
};

/**
 * Relações lógicas e determinísticas aceitas para asserção de prova
 */
const ALLOWED_NORMALIZED_RELATIONS = new Set([
    'EQUALS',
    'DIFFERS_FROM',
    'CORRECTED_TO',
    'MATCHES',
    'TRANSLATION_MATCH',
    'READING_MATCH'
]);

/**
 * Matriz de Capacidades do Tipo de Fonte (N2)
 * Define os limites epistêmicos e pedagógicos de cada fonte.
 */
const CAPABILITY_MATRIX_N2 = {
    'kanji-dictionary': {
        allowedClaims: new Set([
            'character-reading',
            'character-meaning',
            'stroke-count',
            'radical',
            'orthography'
        ]),
        forbiddenClaims: new Set([
            'collocation',
            'sentence-naturalness',
            'inflection',
            'register',
            'case-particle',
            'grammar-structure',
            'word-order'
        ])
    },
    'textbook-vocabulary': {
        allowedClaims: new Set([
            'target-word',
            'target-reading',
            'meaning',
            'lexical-replacement',
            'orthography',
            'contrast',
            'semantic-fit',
            'translation'
        ]),
        forbiddenClaims: new Set([
            'sentence-naturalness'
        ])
    },
    'textbook-grammar': {
        allowedClaims: new Set([
            'target-word',
            'target-reading',
            'meaning',
            'grammar-structure',
            'case-particle',
            'inflection',
            'collocation',
            'register',
            'contrast',
            'word-order',
            'lexical-replacement',
            'orthography',
            'semantic-fit',
            'translation'
        ]),
        forbiddenClaims: new Set()
    },
    'advanced-course': {
        allowedClaims: new Set([
            'target-word',
            'target-reading',
            'meaning',
            'grammar-structure',
            'case-particle',
            'inflection',
            'collocation',
            'register',
            'contrast',
            'word-order',
            'lexical-replacement',
            'orthography',
            'semantic-fit',
            'translation'
        ]),
        forbiddenClaims: new Set()
    },
    'workbook-exercise': {
        allowedClaims: new Set([
            'target-word',
            'target-reading',
            'meaning',
            'contrast',
            'case-particle',
            'collocation',
            'grammar-structure',
            'lexical-replacement',
            'orthography',
            'semantic-fit',
            'translation'
        ]),
        forbiddenClaims: new Set()
    },
    'unknown': {
        allowedClaims: new Set(),
        forbiddenClaims: new Set(ALLOWED_CLAIM_TYPES)
    }
};

/**
 * Classifica a categoria pedagógica de uma fonte
 */
function classifySourceCategory(sourceId, catalog) {
    if (!sourceId || typeof sourceId !== 'string') return 'unknown';
    if (sourceId === 'edrdg-kanjidic2' || sourceId === 'bunka-joyo-kanji-2010') {
        return 'kanji-dictionary';
    }
    if (sourceId === 'quartet-2-textbook' || sourceId === 'tobira-2009') {
        return 'advanced-course';
    }
    if (sourceId === 'quartet-1-textbook' || (sourceId.includes('shinkanzen') && sourceId.includes('bunpo'))) {
        return 'textbook-grammar';
    }
    if (sourceId.includes('shinkanzen') && sourceId.includes('kanji')) {
        return 'workbook-exercise';
    }
    if (sourceId.includes('textbook')) {
        return 'textbook-grammar';
    }
    if (sourceId.includes('workbook')) {
        return 'workbook-exercise';
    }
    if (sourceId.includes('vocabulary')) {
        return 'textbook-vocabulary';
    }
    return 'unknown';
}

/**
 * Resolve o objeto witness da página a partir do witnessMap, diretório tests/n2-witness ou corpus
 */
function resolvePageWitness(ev, options = {}) {
    if (!ev) return null;
    const lookupKey = ev.evidenceId || `${ev.sourceId}:p${ev.page}`;
    if (options.witnessMap && options.witnessMap.has(lookupKey)) {
        return options.witnessMap.get(lookupKey);
    }

    const n2WitnessPath = path.join(ROOT, 'tests', 'n2-witness', `${ev.sourceId}-p${String(ev.page).padStart(4, '0')}.json`);
    if (fs.existsSync(n2WitnessPath)) {
        try {
            return JSON.parse(fs.readFileSync(n2WitnessPath, 'utf8'));
        } catch (_) {}
    }

    // Fallback para scratch/japanese-corpus
    if (ev.pageEvidence && ev.pageEvidence.corpusArtifact) {
        const artPath = path.join(ROOT, ev.pageEvidence.corpusArtifact);
        if (fs.existsSync(artPath)) {
            try {
                return JSON.parse(fs.readFileSync(artPath, 'utf8'));
            } catch (_) {}
        }
    } else if (ev.sourceId && ev.page) {
        const corpusPath = path.join(ROOT, 'scratch', 'japanese-corpus', ev.sourceId, `page-${String(ev.page).padStart(4, '0')}.json`);
        if (fs.existsSync(corpusPath)) {
            try {
                return JSON.parse(fs.readFileSync(corpusPath, 'utf8'));
            } catch (_) {}
        }
    }

    return null;
}

/**
 * Resolve o texto da página a partir do artefato local ou do witness bundle
 */
function resolvePageText(ev, options = {}) {
    const witness = resolvePageWitness(ev, options);
    if (witness) {
        return witness.normalizedText || String(witness.text || witness.ocrText || '').trim().replace(/\s+/g, ' ');
    }
    return null;
}

/**
 * Normaliza os campos do exemplo
 */
function extractExampleFields(datasetExample) {
    if (!datasetExample) return { ex: null, character: '', displayText: '', audioText: '', romaji: '', meaning: '' };
    const ex = datasetExample.example || datasetExample;
    const content = ex.content || {};
    return {
        ex,
        character: datasetExample.character || '',
        displayText: content.displayText || ex.displayText || '',
        audioText: content.audioText || ex.audioText || '',
        romaji: content.romaji || ex.romaji || ex.sentence || '',
        meaning: content.translation || ex.meaning || ex.sentenceMeaning || ''
    };
}

/**
 * Localiza o exemplo no dataset N2 a partir do targetId
 */
function findDatasetExample(targetId, dataset) {
    if (!targetId || !Array.isArray(dataset)) return null;
    const m = targetId.match(/(?:n2-m|ja-phase19-n2-n2-m)(\d+)-kanjis-(\d+)-examples-(\d+)/);
    if (!m) return null;
    const modNum = parseInt(m[1], 10);
    const kanjiIdx = parseInt(m[2], 10);
    const exIdx = parseInt(m[3], 10);

    const mod = dataset.find(item => item.module === modNum);
    if (!mod || !mod.kanjis || !mod.kanjis[kanjiIdx]) return null;
    const kanji = mod.kanjis[kanjiIdx];
    if (!kanji.examples || !kanji.examples[exIdx]) return null;

    return {
        example: kanji.examples[exIdx],
        character: kanji.character,
        moduleNumber: modNum,
        kanjiIndex: kanjiIdx,
        exampleIndex: exIdx
    };
}

/**
 * Avaliação Atômica de Correction Claim N2
 */
function evaluateCorrectionClaim(claim, target, evidenceList, options = {}) {
    if (!claim || !claim.id) {
        return { claimId: 'unknown', status: 'UNSUPPORTED', reasons: ['CLAIM_ID_MISSING'] };
    }

    if (!ALLOWED_CLAIM_TYPES.has(claim.type)) {
        return { claimId: claim.id, status: 'UNSUPPORTED', reasons: [`INVALID_CLAIM_TYPE: ${claim.type}`] };
    }

    if (!claim.claim || typeof claim.claim !== 'string' || claim.claim.trim().length === 0) {
        return { claimId: claim.id, status: 'UNSUPPORTED', reasons: ['EMPTY_CLAIM_TEXT'] };
    }

    // 1. Validação de Vínculo Explícito Claim -> Proof
    if (claim.proofForClaimId !== undefined) {
        if (claim.proofForClaimId !== claim.id) {
            return {
                claimId: claim.id,
                status: 'UNSUPPORTED',
                reasons: [`PROOF_ID_MISMATCH: proofForClaimId "${claim.proofForClaimId}" does not match claim.id "${claim.id}"`]
            };
        }
    }

    if (claim.proofRequired === true && !claim.proofForClaimId) {
        return {
            claimId: claim.id,
            status: 'UNSUPPORTED',
            reasons: ['MISSING_PROOF_BINDING: claim requires explicit proof binding but proofForClaimId is absent']
        };
    }

    if (claim.proofType !== undefined) {
        const allowedProofs = ALLOWED_PROOF_TYPES_FOR_CLAIM[claim.type];
        if (!allowedProofs || !allowedProofs.has(claim.proofType)) {
            return {
                claimId: claim.id,
                status: 'UNSUPPORTED',
                reasons: [`INCOMPATIBLE_PROOF_TYPE: proofType "${claim.proofType}" is incompatible with claim type "${claim.type}"`]
            };
        }
    }

    if (claim.normalizedRelation !== undefined) {
        if (!ALLOWED_NORMALIZED_RELATIONS.has(claim.normalizedRelation)) {
            return {
                claimId: claim.id,
                status: 'UNSUPPORTED',
                reasons: [`INVALID_NORMALIZED_RELATION: "${claim.normalizedRelation}"`]
            };
        }
    }

    const refs = Array.isArray(claim.evidenceRefs) ? claim.evidenceRefs : [];
    if (refs.length === 0) {
        return { claimId: claim.id, status: 'UNSUPPORTED', reasons: ['NO_EVIDENCE_REFS'] };
    }

    const validSupportingRefs = [];
    const refFailures = [];

    for (const ref of refs) {
        if (ref === 'edrdg-kanjidic2' || ref === 'kanjidic2') {
            const cap = CAPABILITY_MATRIX_N2['kanji-dictionary'];
            if (cap.forbiddenClaims.has(claim.type)) {
                refFailures.push(`SOURCE_INCAPABLE: edrdg-kanjidic2 cannot support claim type "${claim.type}"`);
                continue;
            }
            if (claim.type === 'orthography' && claim.claim && claim.claim.length > 1) {
                refFailures.push(`SOURCE_INCAPABLE: edrdg-kanjidic2 cannot support multi-character orthography "${claim.claim}"`);
                continue;
            }
            if (!target.kanjidicEvidence || !target.kanjidicEvidence.verified) {
                refFailures.push('KANJIDIC_NOT_VERIFIED');
                continue;
            }
            validSupportingRefs.push(ref);
            continue;
        }

        // Localizar a evidência correspondente
        const ev = (evidenceList || []).find(e => 
            e.evidenceId === ref || 
            `${e.sourceId}:p${e.page}` === ref ||
            (e.sourceId === ref)
        );

        if (!ev) {
            refFailures.push(`ORPHAN_REFERENCE: ref "${ref}" not found in target.evidence`);
            continue;
        }

        // Verificar matriz de capacidades
        const cat = classifySourceCategory(ev.sourceId, options.catalog);
        const matrixEntry = CAPABILITY_MATRIX_N2[cat];
        if (!matrixEntry || matrixEntry.allowedClaims.size === 0 || matrixEntry.forbiddenClaims.has(claim.type) || !matrixEntry.allowedClaims.has(claim.type)) {
            refFailures.push(`SOURCE_INCAPABLE: source "${ev.sourceId}" (${cat}) is incapable/forbidden to support "${claim.type}"`);
            continue;
        }

        // Suporte lexical para palavra-alvo
        const baseWord = (target.word || '').split(' ')[0].trim();
        const targetChar = target.character || (baseWord ? baseWord[0] : '');
        if (claim.claim === baseWord || claim.claim === targetChar) {
            const hasLexicalSupport = Array.isArray(ev.supports) && (ev.supports.includes('target-word') || ev.supports.includes('character-reading') || ev.supports.includes('radical'));
            if (!hasLexicalSupport) {
                refFailures.push(`EVIDENCE_DOES_NOT_SUPPORT_TARGET_WORD: evidence "${ref}" does not declare target-word support for "${claim.claim}"`);
                continue;
            }
        }

        // Verificação textual
        if (options.checkText) {
            const pageText = resolvePageText(ev, options);
            if (pageText !== null && ev.supportEvidence) {
                let evidenceValid = true;
                for (const [supKey, supObj] of Object.entries(ev.supportEvidence)) {
                    if (supObj && supObj.observedToken && (supObj.verificationMode === 'text-exact' || supObj.verificationMode === 'lexical-gloss')) {
                        if (!pageText.includes(supObj.observedToken)) {
                            evidenceValid = false;
                            refFailures.push(`TOKEN_NOT_FOUND_IN_PAGE_TEXT: observed token "${supObj.observedToken}" for "${supKey}" not found in page text for ${ref}`);
                        }
                    }
                }
                if (!evidenceValid) {
                    continue;
                }
            }

            if (claim.observedToken && pageText !== null) {
                if (!pageText.includes(claim.observedToken)) {
                    refFailures.push(`OBSERVED_TOKEN_NOT_IN_PAGE: observedToken "${claim.observedToken}" not attested in page text for ${ref}`);
                    continue;
                }
            }

            const displayText = (options.datasetExample ? extractExampleFields(options.datasetExample).displayText : '') || (target && target.finalDisplayText) || '';
            const pageTextOrEmpty = resolvePageText(ev, options) || '';
            const obsTokens = Object.values(ev.supportEvidence || {})
                .map(s => s && s.observedToken)
                .filter(Boolean);

            const inPage = pageTextOrEmpty.length > 0 && pageTextOrEmpty.includes(claim.claim);
            const matchesObs = obsTokens.some(tok => claim.claim.includes(tok) || tok.includes(claim.claim));

            const witnessObj = resolvePageWitness(ev, options);
            const isAssociatedWitness = witnessObj && Array.isArray(witnessObj.associatedTargets) && witnessObj.associatedTargets.includes(target.id);

            const kanjiStem = baseWord.replace(/[\u3040-\u309f]+$/, '');
            const pageHasTargetWitness = isAssociatedWitness ||
                (kanjiStem && pageTextOrEmpty.includes(kanjiStem)) || 
                (targetChar && pageTextOrEmpty.includes(targetChar)) || 
                (obsTokens.length > 0 && obsTokens.some(tok => pageTextOrEmpty.includes(tok) && (baseWord.includes(tok) || tok.includes(baseWord))));
            const witnessHasTargetOrClaim = pageHasTargetWitness || inPage || matchesObs;
            if (pageTextOrEmpty && !witnessHasTargetOrClaim) {
                refFailures.push(`IRRELEVANT_WITNESS: page text for "${ref}" does not contain target "${baseWord}" or claim "${claim.claim}"`);
                continue;
            }

            let isReflectedInText = inPage || matchesObs;
            if (!isReflectedInText && displayText) {
                const rawClaim = (claim.claim || '').replace(/^[〜~]/, '');
                const words = rawClaim.match(/[\u4e00-\u9faf\u30a0-\u30ff]+[ぁ-ん]*/g) || [rawClaim.trim()];
                isReflectedInText = words.some(w => {
                    const kanjiOnly = w.match(/[\u4e00-\u9faf\u30a0-\u30ff]+/);
                    const stem = kanjiOnly ? kanjiOnly[0] : w.replace(/[ぁ-ん]+$/, '');
                    return displayText.includes(w) || (stem.length > 0 && displayText.includes(stem));
                });
            }

            if (!isReflectedInText) {
                refFailures.push(`CLAIM_NOT_SUBSTANTIATED_BY_EVIDENCE: claim "${claim.claim}" is neither attested in evidence nor reflected in final dataset`);
                continue;
            }

            if (claim.expectedToken && !claim.claim.includes(claim.expectedToken)) {
                refFailures.push(`CLAIM_EXPECTED_TOKEN_MISMATCH: expectedToken "${claim.expectedToken}" is not consistent with claim "${claim.claim}"`);
                continue;
            }

            if (claim.normalizedRelation) {
                const exp = claim.expectedToken || claim.claim;
                const obs = claim.observedToken || (obsTokens[0] || '');
                let assertionPass = false;

                if (claim.normalizedRelation === 'EQUALS') {
                    assertionPass = (obs === exp);
                } else if (claim.normalizedRelation === 'DIFFERS_FROM') {
                    assertionPass = (obs !== exp);
                } else if (claim.normalizedRelation === 'CORRECTED_TO') {
                    assertionPass = (obs !== exp) && (!displayText || displayText.includes(exp) || isReflectedInText);
                } else if (claim.normalizedRelation === 'MATCHES') {
                    assertionPass = exp.includes(obs) || obs.includes(exp) || inPage || matchesObs || isReflectedInText;
                } else if (claim.normalizedRelation === 'READING_MATCH') {
                    assertionPass = (ev.supportEvidence && ev.supportEvidence['target-reading'] && ev.supportEvidence['target-reading'].observedToken === obs);
                } else if (claim.normalizedRelation === 'TRANSLATION_MATCH') {
                    assertionPass = (ev.supportEvidence && ev.supportEvidence['meaning'] && ev.supportEvidence['meaning'].observedToken === obs);
                }

                if (!assertionPass) {
                    refFailures.push(`PROOF_ASSERTION_FAILED: normalizedRelation "${claim.normalizedRelation}" evaluated to false (obs="${obs}", exp="${exp}")`);
                    continue;
                }
            }
        }

        validSupportingRefs.push(ref);
    }

    if (validSupportingRefs.length > 0) {
        return { claimId: claim.id, type: claim.type, status: 'SUPPORTED', validSupportingRefs, reasons: [] };
    }

    return {
        claimId: claim.id,
        type: claim.type,
        status: 'UNSUPPORTED',
        reasons: refFailures.length > 0 ? refFailures : ['NO_VALID_SUPPORTING_REFERENCES']
    };
}

/**
 * Avaliação Determinística da Identidade do Target N2
 */
function evaluateTargetIdentity(target, datasetExample, evidenceList, options = {}) {
    const reasons = [];
    const fields = extractExampleFields(datasetExample);

    if (!fields.ex) {
        return { targetIdentityVerified: false, reasons: ['DATASET_EXAMPLE_MISSING'] };
    }

    const { displayText, character } = fields;

    // 1. Caractere kanji presente no displayText
    if (character && (!displayText || !displayText.includes(character))) {
        reasons.push(`CHARACTER_MISSING_IN_DISPLAY_TEXT: character "${character}" missing in displayText`);
    }

    // 2. Palavra-alvo presente no displayText (com suporte a flexões e radicais)
    const rawWord = target.word || fields.ex.word || '';
    const m = rawWord.match(/^([^\s(]+)/);
    const baseWord = m ? m[1].trim() : rawWord.trim();
    const kanjiStem = baseWord.replace(/[\u3040-\u309f]+$/, '');

    // Tratar variantes ortográficas conhecidas (ex.: 疑似 vs 擬似)
    const altStem = kanjiStem === '疑似' ? '擬似' : (kanjiStem === '擬似' ? '疑似' : '');

    const wordPresent = Boolean(
        displayText && (
            displayText.includes(baseWord) || 
            (kanjiStem.length > 0 && displayText.includes(kanjiStem)) ||
            (altStem.length > 0 && displayText.includes(altStem))
        )
    );

    if (baseWord && !wordPresent) {
        reasons.push(`TARGET_WORD_NOT_REPRESENTED_IN_DISPLAY_TEXT: word "${baseWord}" not represented in "${displayText}"`);
    }

    // 3. Verificação de Leitura Lexical Completa para compostos (Anti-Partição)
    const isMultiKanjiCompound = baseWord.length >= 2 && /^[\u4e00-\u9faf]+$/.test(baseWord);
    if (isMultiKanjiCompound) {
        const hasCompoundLexicalSupport = (evidenceList || []).some(ev => 
            Array.isArray(ev.supports) && (ev.supports.includes('target-word') || ev.supports.includes('target-reading'))
        );
        if (!hasCompoundLexicalSupport) {
            reasons.push('UNSUPPORTED_COMPOUND_NO_LEXICAL_ENTRY');
        } else {
            for (const ev of evidenceList || []) {
                if (ev.supportEvidence && ev.supportEvidence['target-reading']) {
                    const token = ev.supportEvidence['target-reading'].observedToken;
                    if (token && token.length < 3) {
                        reasons.push(`PARTIAL_READING_INSUFFICIENT: token "${token}" is only partial reading for compound "${baseWord}"`);
                    }
                }
            }
        }
    }

    return {
        targetIdentityVerified: reasons.length === 0,
        reasons
    };
}

/**
 * Avaliação do Delta da Correção N2
 */
function evaluateCorrectionDelta(target, datasetExample, baselineExample, evidenceList, options = {}) {
    if (!Array.isArray(evidenceList)) {
        if (evidenceList && typeof evidenceList === 'object') {
            options = evidenceList;
        }
        evidenceList = (target && Array.isArray(target.evidence)) ? target.evidence : [];
    }
    const reasons = [];
    const claimResults = [];

    const claims = Array.isArray(target.correctionClaims) ? target.correctionClaims : [];
    if (claims.length === 0) {
        return {
            correctionDeltaVerified: false,
            claimResults: [],
            reasons: ['NO_CORRECTION_CLAIMS_DEFINED']
        };
    }

    let allClaimsSupported = true;

    for (const claim of claims) {
        const res = evaluateCorrectionClaim(claim, target, evidenceList, options);
        claimResults.push(res);
        if (res.status !== 'SUPPORTED') {
            allClaimsSupported = false;
            reasons.push(`CLAIM_FAILED: ${claim.id} (${claim.type}) - ${res.reasons.join('; ')}`);
        }
    }

    const fields = extractExampleFields(datasetExample);
    const displayText = fields.displayText || '';

    const baseText = baselineExample ? (
        baselineExample.currentDisplayText || 
        baselineExample.baselineDisplayText || 
        (baselineExample.content && baselineExample.content.displayText) || 
        (baselineExample.baselineExample && baselineExample.baselineExample.content && baselineExample.baselineExample.content.displayText) || 
        ''
    ) : '';

    for (const claim of claims) {
        if (claim.proofMode === 'context-only') {
            continue;
        }

        const isExplicitDelta = claim.proofMode === 'correction-delta' || 
            claim.baselineValue !== undefined || 
            claim.expectedFinalValue !== undefined;

        if (isExplicitDelta) {
            const expectedFinal = claim.expectedFinalValue || claim.claim;
            const baselineVal = claim.baselineValue;

            if (expectedFinal) {
                if (!displayText.includes(expectedFinal)) {
                    allClaimsSupported = false;
                    reasons.push(`FINAL_VALUE_MISMATCH: final text "${displayText}" does not contain expectedFinalValue "${expectedFinal}" for ${claim.id}`);
                }
            }

            if (baselineVal && baseText) {
                if (!baseText.includes(baselineVal)) {
                    allClaimsSupported = false;
                    reasons.push(`BASELINE_PRECONDITION_FAILED: baseline "${baseText}" does not contain required baselineValue "${baselineVal}" for ${claim.id}`);
                }
            }

            if (expectedFinal && baseText && baseText.includes(expectedFinal)) {
                allClaimsSupported = false;
                reasons.push(`BASELINE_ALREADY_CORRECT: baseline already contains expectedFinalValue "${expectedFinal}" - no correction occurred for ${claim.id}`);
            }

            if (claim.normalizedRelation === 'CORRECTED_TO' && baselineVal) {
                if (displayText.includes(baselineVal)) {
                    allClaimsSupported = false;
                    reasons.push(`CORRECTION_DELTA_FAILED: final text still contains corrupted baselineValue "${baselineVal}" for ${claim.id}`);
                }
            }
        }
    }

    if (displayText) {
        for (const claim of claims) {
            if (claim.proofMode === 'context-only') continue;
            const rawClaim = (claim.expectedFinalValue || claim.claim || '')
                .replace(/^[〜~]/, '')
                .replace(/\s*\(sem espaço\)/, '');
            const words = rawClaim.match(/[\u4e00-\u9faf\u30a0-\u30ff]+[ぁ-ん]*/g) || [rawClaim.trim()];
            const isReflected = words.some(w => {
                const kanjiOnly = w.match(/[\u4e00-\u9faf\u30a0-\u30ff]+/);
                const stem = kanjiOnly ? kanjiOnly[0] : w.replace(/[ぁ-ん]+$/, '');
                return displayText.includes(w) || (stem.length > 0 && displayText.includes(stem));
            });
            if (!isReflected && words.length > 0) {
                allClaimsSupported = false;
                reasons.push(`CLAIM_NOT_REFLECTED_IN_DATASET: claim "${claim.claim}" not reflected in displayText "${displayText}"`);
            }
        }
    }

    const FORBIDDEN_DRAFT_RESIDUES = [
        'ふねがたつ', 'arrival', 'Kuukou ni hayaku', '招います', 'あおうと',
        'とうちゃく。', 'ぱぺル', 'そうプ', 'スとね', 'ぺルそん',
        'ちゅしゃ禁止', 'でばて', 'ドれあム', 'つずき', 'クルあっス',
        'せんド', 'すブみト', 'まてりあル', 'ばんク', '減らす'
    ];

    for (const residue of FORBIDDEN_DRAFT_RESIDUES) {
        if (displayText.includes(residue)) {
            allClaimsSupported = false;
            reasons.push(`BASELINE_RESIDUE_DETECTED: displayText contains forbidden draft residue "${residue}"`);
        }
    }

    if (baseText && displayText && displayText === baseText) {
        allClaimsSupported = false;
        reasons.push(`NO_BASELINE_TRANSFORMATION: displayText is identical to uncorrected baseline "${baseText}"`);
    }

    return {
        correctionDeltaVerified: allClaimsSupported,
        claimResults,
        reasons
    };
}

/**
 * Avaliação de Tradução / Significado N2
 */
function evaluateTranslation(target, datasetExample, evidenceList, options = {}) {
    const reasons = [];
    const fields = extractExampleFields(datasetExample);

    if (!fields.ex) {
        return { translationVerified: false, reasons: ['DATASET_EXAMPLE_MISSING'] };
    }

    const ex = fields.ex;
    const content = ex.content || {};
    const textsToCheck = [ex.meaning, ex.sentenceMeaning, content.translation].filter(v => v !== undefined && v !== null);

    if (textsToCheck.length === 0) {
        return { translationVerified: false, reasons: ['MEANING_EMPTY_OR_TOO_SHORT'] };
    }

    const isPlaceholder = (str) => 
        /\bTODO\b/.test(str) || 
        /\[(?:todo|pending|fixme|corrigir|verificar)\]/i.test(str) || 
        /\b(?:pending|fixme)\b/i.test(str) || 
        /^\s*(?:todo|fixme|corrigir|verificar)\s*:/i.test(str) || 
        /\?{2,}|\.{3,}/.test(str);

    for (const t of textsToCheck) {
        const str = String(t).trim();
        if (str.length < 3) {
            reasons.push('MEANING_EMPTY_OR_TOO_SHORT');
        }
        if (isPlaceholder(str)) {
            reasons.push(`MEANING_IS_PLACEHOLDER: "${str}"`);
        }
    }

    return {
        translationVerified: reasons.length === 0,
        reasons
    };
}

/**
 * Avaliação dos Campos Mecânicos N2
 */
function evaluateMechanicalFields(target, datasetExample, options = {}) {
    const reasons = [];
    const fields = extractExampleFields(datasetExample);

    if (!fields.ex) {
        return { mechanicalFieldsVerified: false, reasons: ['DATASET_EXAMPLE_MISSING'] };
    }

    const { audioText, romaji, displayText } = fields;

    // 1. audioText
    if (!audioText || typeof audioText !== 'string' || audioText.trim().length === 0) {
        reasons.push('AUDIOTEXT_MISSING_OR_EMPTY');
    } else {
        if (/[\{\}\[\]\<\>]/.test(audioText)) {
            reasons.push(`AUDIOTEXT_CONTAINS_DRAFT_TAGS: "${audioText}"`);
        }
        if (/[A-Za-z]/.test(audioText)) {
            reasons.push(`AUDIOTEXT_CONTAINS_LATIN: "${audioText}"`);
        }
    }

    // 2. romaji
    if (!romaji || typeof romaji !== 'string' || romaji.trim().length === 0) {
        reasons.push('ROMAJI_MISSING_OR_EMPTY');
    } else {
        if (/(TODO|PENDING|\[draft\]|\{residue\})/i.test(romaji)) {
            reasons.push(`ROMAJI_CONTAINS_PLACEHOLDERS: "${romaji}"`);
        }
        // Resíduos de palavras em inglês do antigo gerador
        const commonEnglish = /\b(strategy|report|idea|party|manager|bank|market|submit|material|raise|good|experience|freedom|rescue|cafe|emotion|example|flag|fate|book|loss|lead|cost|system|leader|center|level|point|news|speed|power|team|service|plan|member|image|chance|check|order|case|sign|space|site|card|class|step|style|design|start|top|data|send)\b/i;
        if (commonEnglish.test(romaji)) {
            reasons.push(`ROMAJI_CONTAINS_ENGLISH_WORD: "${romaji}"`);
        }
        // Caracteres kanji chineses/japoneses incorporados no romaji legado
        if (/[\u4e00-\u9faf]/.test(romaji)) {
            reasons.push(`ROMAJI_CONTAINS_KANJI_RESIDUE: "${romaji}"`);
        }
    }

    // 3. displayText
    if (!displayText || typeof displayText !== 'string' || displayText.trim().length === 0) {
        reasons.push('DISPLAYTEXT_MISSING_OR_EMPTY');
    } else {
        if (/(TODO|PENDING|\[draft\]|\{residue\})/i.test(displayText)) {
            reasons.push(`DISPLAYTEXT_CONTAINS_PLACEHOLDERS: "${displayText}"`);
        }
        if (/[A-Za-z]/.test(displayText)) {
            reasons.push(`DISPLAYTEXT_CONTAINS_LATIN: "${displayText}"`);
        }
    }

    return {
        mechanicalFieldsVerified: reasons.length === 0,
        reasons
    };
}

/**
 * Engine de Decisão Editorial N2
 * Totalmente determinístico e independente de campos declarativos
 */
function evaluateDecision(target, datasetExample, baselineExample, options = {}) {
    if (!target) {
        return {
            targetId: 'unknown',
            decisionSufficient: false,
            decision: 'UNSUPPORTED',
            expectedLedgerState: 'unresolved',
            profile: {
                targetIdentityVerified: false,
                correctionDeltaVerified: false,
                translationVerified: false,
                mechanicalFieldsVerified: false
            },
            evaluations: {}
        };
    }

    const idEval = evaluateTargetIdentity(target, datasetExample, target.evidence, options);
    const deltaEval = evaluateCorrectionDelta(target, datasetExample, baselineExample, target.evidence, options);
    const transEval = evaluateTranslation(target, datasetExample, target.evidence, options);
    const mechEval = evaluateMechanicalFields(target, datasetExample, options);

    const decisionSufficient = 
        idEval.targetIdentityVerified &&
        deltaEval.correctionDeltaVerified &&
        transEval.translationVerified &&
        mechEval.mechanicalFieldsVerified;

    const decision = decisionSufficient ? 'SUPPORTED' : 'UNSUPPORTED';
    const expectedLedgerState = decisionSufficient ? 'corrected' : 'unresolved';

    return {
        targetId: target.id,
        decisionSufficient,
        decision,
        expectedLedgerState,
        profile: {
            targetIdentityVerified: idEval.targetIdentityVerified,
            correctionDeltaVerified: deltaEval.correctionDeltaVerified,
            translationVerified: transEval.translationVerified,
            mechanicalFieldsVerified: mechEval.mechanicalFieldsVerified
        },
        evaluations: {
            identity: idEval,
            delta: deltaEval,
            translation: transEval,
            mechanical: mechEval
        }
    };
}

module.exports = {
    ALLOWED_CLAIM_TYPES,
    ALLOWED_PROOF_TYPES_FOR_CLAIM,
    ALLOWED_NORMALIZED_RELATIONS,
    CAPABILITY_MATRIX_N2,
    classifySourceCategory,
    resolvePageWitness,
    resolvePageText,
    findDatasetExample,
    extractExampleFields,
    evaluateCorrectionClaim,
    evaluateTargetIdentity,
    evaluateCorrectionDelta,
    evaluateTranslation,
    evaluateMechanicalFields,
    evaluateDecision
};
