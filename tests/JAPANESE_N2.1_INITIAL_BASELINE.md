# BASELINE INICIAL DA ETAPA N2.1 — REVISÃO EDITORIAL HUMANA N2
# JAPANESE N2.1 INITIAL SNAPSHOT: TARGETS → TRIAGE → QUEUE → PILOT BATCH

## Data do Registro: 2026-09-25T18:10:00-03:00
## Sistema: Japão Academy / Idiomas Academy
## Escopo: Kanji N2 (Primeira Fase de Revisão Editorial Humana dos 771 Targets)
## Status: CONGELADO / BASELINE INICIAL DA ETAPA N2.1

---

## 1. INTEGRIDADE DOS DATASETS PROTEGIDOS

Os hashes SHA-256 e o estado byte-level de todos os datasets foram congelados antes de qualquer operação:

| Dataset | Caminho | Hash SHA-256 Inicial | Status |
|---|---|---|---|
| **Kanji N3** | `database/ja-JP/data_kanji_n3.js` | `C9E5FF4CA62007B1D04ECD6BB0BCBB9F9217D447D3105309CF3E5F072E3A03C0` | **PROTEGIDO / INTACTO** |
| **Kanji N1** | `database/ja-JP/data_kanji_n1.js` | `64BACAA4E00B2D025897E81295B8AB16ACE69382095A63AA360264DC20B4CF2C` | **PROTEGIDO / INTACTO** |
| **Kanji N2** | `database/ja-JP/data_kanji_n2.js` | `B6A86705FE9B094C119E1CE17ED10BC1A9BFBDED12477136DC574ABCBE268545` | **ESCOPO N2.1 / INTACTO** |

---

## 2. ESTADO INICIAL DOS TARGETS N2

- **Total de Targets N2**: 771 alvos (21 metadados de módulos + 750 exemplos de vocabulário).
- **Estado no Decision Engine**:
  - `SUPPORTED`: 0
  - `UNSUPPORTED`: 771
  - `decisionSufficient`: 0 (100% dos alvos pendentes de prova bibliográfica primária)
- **Estado no Ledger Editorial (`tests/JAPANESE_EDITORIAL_LEDGER.json`)**:
  - `unresolved`: 771 decisões relativas a `data_kanji_n2.js` (21 `kanji-metadata` + 750 `kanji-example`).
  - `approved`: 1.772 decisões (identidade de kanji, leituras, quizzes).
  - `corrected`: 8 decisões (readingText Fase 22B).
- **Estado na Fila Editorial (`tests/JAPANESE_FINAL_EDITORIAL_QUEUE.json`)**:
  - 771 alvos N2 classificados como `CANONICAL_EVIDENCE_PENDING` / `unresolved`.
- **Estado na Tabela de Revisão Humana (`tests/JAPANESE_KANJI_N2_HUMAN_REVIEW.md`)**:
  - 770 linhas de conteúdo N2 (20 grammar + 750 examples), todas marcadas como `pending-human-review`.

---

## 3. ARTEFATOS AUDITADOS DO FECHAMENTO N2 (REFERÊNCIAS IMUTÁVEIS)

- `tests/JAPANESE_N2_MASTER_BASELINE.md`: Preservado integralmente.
- `tests/JAPANESE_N2_MASTER_REPORT.md`: Preservado integralmente.
- `tests/JAPANESE_N2_FINAL_CERTIFICATION.md`: Preservado integralmente (`N2-METHODOLOGY-CLOSED: PASS`).
- `tests/JAPANESE_N2_WITNESS_MANIFEST.json`: 13 testemunhas validadas (`8D06DDEF71AD2F2EAF335D17D97B7A1479DA9C0E0664229BE89605B63F4F1101`).
- `tests/JAPANESE_N2_EVIDENCE_AUDIT.json`: 771 alvos auditados (`48AA727F2ADCB1D9C546D344F8177FAECCE3A9826A2DD1A46DAFF9464CC61606`).
