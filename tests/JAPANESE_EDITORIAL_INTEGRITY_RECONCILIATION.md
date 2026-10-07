# Relatório de Reconciliação da Integridade Editorial — Japão Academy

**Etapa**: 25A.1 — Fechamento da Integridade Editorial: Reason Kind, Readings e Contratos  
**Data**: 2026-08-21  
**Modo**: STRICT EDITORIAL CONSISTENCY FIX + METADATA ONLY + NO LINGUISTIC CONTENT CHANGE

---

## 1. Contexto e Objetivo

A auditoria de integridade identificou que o ledger global (`tests/JAPANESE_EDITORIAL_LEDGER.json`) apresentava anteriormente um estado artificialmente fechado (`20.538 approved, 2.999 corrected, 0 unresolved`), enquanto os datasets canônicos (`data_kanji_n3.js`, `data_kanji_n2.js`, `data_kanji_n1.js`, etc.) e os índices derivados (`data_gramatica_index.js`, `data_jlpt_pratica_index.js`) mantinham milhares de tags `pending-human-review`.

A Etapa 25A e o refinamento 25A.1 tiveram como objetivo exclusivo **restaurar a consistência matemática e editorial estrita entre todas as autoridades de verdade**, distinguindo com rigor semântico as pendências canônicas (`CANONICAL_EVIDENCE_PENDING`) das pendências de regras/distratores derivadas (`DERIVED_RULE_PENDING`), sem alterar qualquer conteúdo linguístico ou esconder pendências.

---

## 2. Conflitos Encontrados e Tipificados

| Código | Tipo de Conflito | Quantidade | Ação de Reconciliação |
|---|---|---:|---|
| **Conflito A** | Ledger `approved/corrected` × Dataset canônico `pending-human-review` | **3.928** | Decisões no ledger reabertas para `unresolved` |
| **Conflito B** | Ledger `approved/corrected` × Relatório humano `pending` | **3.928** | Reconciliado pelo reabrimento formal no ledger |
| **Conflito C** | Ledger `approved/corrected` × Índice derivado `pending-human-review` | **694** | 64 decisões de Gramática e 630 de JLPT reabertas para `unresolved` |
| **Conflito D** | Ledger `unresolved` × Dataset `approved` | **0** | Nenhum target aprovado no dataset estava indevidamente como unresolved |
| **Conflito E** | Dataset e ledger concordam, mas índice derivado diverge | **694** | Resolvido pelo reabrimento correspondente de derivados |
| **Conflito F** | Fila editorial vazia/desalinhada em relação ao estado real | **4.622** | Fila `JAPANESE_FINAL_EDITORIAL_QUEUE.json` regenerada integralmente |
| **Conflito G** | Relatório de certificação declarando 100% com pendências reais | **4.622** | Editorial Certification Gate atualizado para declarar `FAIL` |

---

## 3. Decisões Reabertas no Ledger

Nenhuma promoção artificial (`pending-human-review -> approved`) foi realizada. Aplicou-se a regra estrita de segurança editorial: **quando a evidência de aprovação não puder ser sustentada, a decisão é reaberta (`approved/corrected -> unresolved`)**.

- **Transições de Estado**:
  - `approved -> unresolved`: **3.917**
  - `corrected -> unresolved`: **705**
  - **Total de Decisões Reabertas**: **4.622 decisões**
- **Classificação Semântica das Pendências**:
  - `canonical unresolved` (`CANONICAL_EVIDENCE_PENDING`): **3.928**
  - `derived upstream pending` (`DERIVED_UPSTREAM_PENDING`): **0** (todos os upstreams canônicos estão atualmente aprovados ou corrigidos)
  - `derived rule pending` (`DERIVED_RULE_PENDING`): **694** (pendências de distratores, alternativas, gabaritos ou regras próprias dos recursos derivados)
- **Histórico Preservado**: Cada decisão reaberta no ledger recebeu os campos:
  - `previousState`: estado anterior (`approved` ou `corrected`)
  - `reopenedReason`: motivo da reabertura (`conflict-with-dataset-pending-human-review` ou `derived-rule-pending`)
  - `reopenedAt`: timestamp da operação (`2026-08-21T07:15:00.000Z`)

---

## 4. Estado Final Reconciliado por Área (18 Áreas)

| Área | Ledger Approved | Ledger Corrected | Ledger Unresolved | Total Ledger | Status Dataset / Índice |
|---|---:|---:|---:|---:|---|
| **Hiragana** | 459 | 0 | 0 | 459 | 0 pending tags (100% certificado) |
| **Katakana** | 435 | 0 | 0 | 435 | 0 pending tags (100% certificado) |
| **Kanji N5** | 1.134 | 29 | 6 | 1.169 | 6 pending tags |
| **Kanji N4** | 1.524 | 13 | 0 | 1.537 | 0 pending tags (100% certificado) |
| **Kanji N3** | 1.636 | 59 | 739 | 2.434 | 739 pending tags |
| **Kanji N2** | 1.696 | 84 | 771 | 2.551 | 771 pending tags |
| **Kanji N1** | 3.659 | 402 | 2.412 | 6.473 | 2.412 pending tags |
| **Curso A1** | 152 | 495 | 0 | 647 | 0 pending tags (100% certificado) |
| **Curso A2** | 537 | 162 | 0 | 699 | 0 pending tags (100% certificado) |
| **Curso B1** | 315 | 212 | 0 | 527 | 0 pending tags (100% certificado) |
| **Curso B2** | 203 | 229 | 0 | 432 | 0 pending tags (100% certificado) |
| **Listening** | 29 | 290 | 0 | 319 | 319 ok (100% sustentado) |
| **Reading** | 37 | 54 | 0 | 91 | 91 ok (100% sustentado) |
| **Grammar** | 85 | 58 | 64 | 207 | 64 pending, 143 ok |
| **Writing** | 4 | 206 | 0 | 210 | 210 ok (100% sustentado) |
| **JLPT** | 408 | 23 | 630 | 1.061 | 630 pending, 431 ok |
| **Dictionary** | 2.959 | 312 | 0 | 3.271 | 3.271 ok (100% sincronizado) |
| **Minigame** | 1.015 | 0 | 0 | 1.015 | 1.015 ok (100% sincronizado) |
| **TOTAL** | **16.621** | **2.294** | **4.622** | **23.537** | **4.622 pendências reais mapeadas** |

---

## 5. Nova Fila Editorial (`tests/JAPANESE_FINAL_EDITORIAL_QUEUE.json`)

A fila editorial foi completamente regenerada a partir dos dados reais e sincronizada com o ledger:
- `totalLedgerUnresolved`: **4.622**
- `canonicalUnresolvedCount` (`CANONICAL_EVIDENCE_PENDING`): **3.928**
- `derivedUnresolvedCount`: **694**
- `derivedUpstreamPendingCount` (`DERIVED_UPSTREAM_PENDING`): **0**
- `derivedRulePendingCount` (`DERIVED_RULE_PENDING`): **694**

---

## 6. Novo Contrato de Consistência (`tests/japanese-editorial-consistency.cjs`)

Criado teste automatizado contínuo que cruza:
- **Ledger** (`tests/JAPANESE_EDITORIAL_LEDGER.json`)
- **Datasets Canônicos** (`data_hiragana.js`, `data_katakana.js`, `data_kanji_n5..n1.js`)
- **Índices Derivados** (`data_gramatica_index.js`, `data_jlpt_pratica_index.js`, etc.)
- **Fila Editorial** (`tests/JAPANESE_FINAL_EDITORIAL_QUEUE.json`)
- **Validação de Aviso de Reading Kanji**: Garante que apenas leituras com status `pending-human-review` exibam o badge na UI, evitando avisos falsos para as 158 leituras `corrected`.

---

## 7. Status do Editorial Certification Gate

```text
EDITORIAL CERTIFICATION: FAIL
```
*(Resultado esperado e legítimo da Etapa 25A/25A.1: o portão de publicação rejeita a certificação global enquanto houver 4.622 pendências reais mapeadas a serem auditadas nas etapas subsequentes).*
