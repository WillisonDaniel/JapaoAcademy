# BASELINE CRIPTOGRÁFICO E INVENTÁRIO FÍSICO KANJI N2
# JAPANESE N2 MASTER BASELINE: DATASET → LEDGER → QUEUE → AUDIT → SOURCES → WITNESSES

## Data do Registro: 2026-09-25T01:30:00-03:00
## Sistema: Japão Academy / Idiomas Academy
## Escopo: Kanji N2 (Dataset Real, Metadados, Exemplos, Fila e Ledger Editorial)
## Status: CONGELADO / AUDITADO

---

## 1. REGRA ABSOLUTA DE PROTEÇÃO DOS DATASETS

Antes de qualquer operação, os hashes criptográficos dos datasets principais foram extraídos e congelados.
Os datasets de N3 e N1 são estritamente protegidos e devem permanecer 100% byte-idênticos durante toda a auditoria do N2.

| Arquivo | Papel no Projeto | Tamanho (Bytes) | Hash SHA-256 Imutável |
|---|---|---:|---|
| `database/ja-JP/data_kanji_n2.js` | **Escopo da Auditoria N2** | 1.067.287 | `B6A86705FE9B094C119E1CE17ED10BC1A9BFBDED12477136DC574ABCBE268545` |
| `database/ja-JP/data_kanji_n3.js` | **PROTEGIDO (N3 fechado)** | 753.295 | `C9E5FF4CA62007B1D04ECD6BB0BCBB9F9217D447D3105309CF3E5F072E3A03C0` |
| `database/ja-JP/data_kanji_n1.js` | **PROTEGIDO (N1 intocado)** | 2.908.746 | `64BACAA4E00B2D025897E81295B8AB16ACE69382095A63AA360264DC20B4CF2C` |

---

## 2. INVENTÁRIO FÍSICO E ESTRUTURAL DO DATASET N2 (`database/ja-JP/data_kanji_n2.js`)

- **Módulos**: 21 (Módulos 1 a 20 de ensino, Módulo 21 de revisão geral).
- **Total de Registros de Kanji**: 375 registros.
- **Caracteres Kanji Únicos**: 342 caracteres.
- **Total de Exemplos de Vocabulário**: 750 exemplos (2 por kanji nos 20 módulos).
- **Contratos Gramaticais**: 20 contratos (um por módulo de ensino, contendo `grammar.content`).
- **Estado Editorial no Dataset**:
  - `modules[*].editorialReview.status`: 21 com `pending-human-review`.
  - `examples[*].editorialReview.status`: 750 com `pending-human-review` (`phase: "5"`, `targetReplaced: true`).
- **Snapshot Estrutural (`stripEditorial`)**:
  - Hash SHA-256: `79f0d8d544479d7d046fd839c39012a0dbfb04f0ac33c4ed83101dedcc44c0ed`.

---

## 3. INVENTÁRIO DO LEDGER EDITORIAL (`tests/JAPANESE_EDITORIAL_LEDGER.json`)

- **Hash SHA-256 do Ledger**: `2469E0EE006BDB5099F75294BE0F88454BABBA30F0CC06E698AC7ECCFB4DAED0` (21.805.956 bytes).
- **Total de Decisões no Ledger**: 23.537 decisões.
- **Decisões Totais Associadas a N2**: 2.831 decisões.
  - No dataset principal `database/ja-JP/data_kanji_n2.js`: 2.551 decisões.
    - `approved`: 1.772 (identidade do kanji, leituras on/kun, quizzes de fixação).
    - `corrected`: 8 (conteúdo de leitura corrigido na Fase 22B: módulos 2, 5, 7, 10, 14, 16, 17, 19).
    - `unresolved`: 771 (21 `kanji-metadata` + 750 `kanji-example`, todos reabertos por `conflict-with-dataset-pending-human-review`).
  - Em índices auxiliares N2 (`data_leitura_index.js`, `data_gramatica_index.js`, `data_jlpt_pratica_index.js`): 280 decisões (60 approved, 220 unresolved).
- **Total de Referências Bibliográficas em Decisões N2**: 2.951 referências.
- **Referências Órfãs**: 0 (todas apontam para fontes conhecidas do catálogo).
- **Fontes Citadas no Ledger N2**:
  - `quartet-2-textbook`: 1.956 referências.
  - `edrdg-kanjidic2`: 975 referências.
  - `tobira-2009`: 20 referências.

---

## 4. INVENTÁRIO DA FILA EDITORIAL FINAL (`tests/JAPANESE_FINAL_EDITORIAL_QUEUE.json`)

- **Hash SHA-256 da Fila**: `4678CAB9D9EAA6DC9FF330A62470A92273979BF1E0D03A7949B4C8E46603CDFE` (1.758.266 bytes).
- **Total de Itens na Fila Global**: 4.606 itens (idêntico ao total de `unresolved` no ledger).
- **Total de Alvos N2 na Fila**: 771 itens.
  - `kanji-metadata`: 21 itens (`ja-phase19-n2-n2-m1-module-metadata` a `m21`).
  - `kanji-example`: 750 itens (`ja-phase19-n2-n2-m1-kanjis-0-examples-0` a `m21...`).
  - Estado de todos os 771 alvos: `currentState: "unresolved"`, `reasonKind: "CANONICAL_EVIDENCE_PENDING"`.

---

## 5. INVENTÁRIO DE ARQUIVOS DE AUDITORIA E TESTES RELEVANTES

| Arquivo | Papel / Função | Tamanho (Bytes) | Hash SHA-256 |
|---|---|---:|---|
| `tests/JAPANESE_KANJI_N2_HUMAN_REVIEW.md` | Tabela de revisão humana N2 (gerada deterministicamente) | 127.694 | `734722026D48F061AAB4088D2F55E689C5570F3AA9BAE0E924313756E9BBC4BA` |
| `tests/FASE_JAPONES_05_RECUPERACAO_KANJI_N2.md` | Registro histórico da conversão mecânica da Fase 5 | 4.303 | `3D5C166E8A7627CF3132CF8A4EE9F4424D1AC066F2F44DEFFCBE08896010409B` |
| `tests/JAPANESE_N2_METHODOLOGY_HANDOFF.md` | Protocolo de handoff metodológico do N3 para o N2 | 5.460 | `39F6C3AE13AEDE5F2FF0578D961BD47872E12DABC1B778D8B60A5BF1E7F7B186` |
| `tests/kanji-n2-contract.cjs` | Contrato mecânico e de integridade N2 (8/8 contratos) | 5.538 | `2DB2C297658F9423A44D2458E0CE5586DA14C19FE7219131CE0D96A91BD58A6F` |
| `tests/japanese-editorial-ledger.cjs` | Validação de integridade do ledger, fontes e fila | 14.172 | `8804955FF16AD954F780387E627A1DC582E66B27E676F70FC44836BBCD04D2FB` |
| `tests/japanese-editorial-audit.cjs` | Auditoria geral e verificação byte-level da tabela humana | 36.150 | `826EE46FB92CDB05BB1C72CE1D34A8995EE9666D48C72DD1FBF622EA55BF2571` |
| `tests/JAPANESE_EDITORIAL_SOURCES.json` | Catálogo canônico de fontes bibliográficas (21 fontes) | 20.478 | `CFE4BA5CE2ABC29E03B4131BC19A5919754D5FBBD74E29B3527D9607EFFCC71F` |
| `tests/JAPANESE_EDITORIAL_OCCURRENCES.json` | Relatório de ocorrências editoriais ativas (0 bloqueadores) | 1.645 | `F5315123F0D81AE44EBEDF089C733F8E396C993DACD77DCF57339D13E9272923` |

---

## 6. INVENTÁRIO DE RESÍDUOS E ANOMALIAS DO N2

Uma varredura exaustiva sobre os 750 exemplos do N2 revelou os seguintes dados empíricos:

1. **Placeholders de Desenvolvimento (`[draft]`, `FIXME`, `placeholder`, `residue`, `incomplete`, `????`)**:
   - Total encontrado: **0** ocorrências.
   - Ocorrências de strings como "todo" foram comprovadas como termos legítimos em português ("Por todos os cantos do país", "métodos").
2. **Discrepâncias entre Palavra-Alvo (`word`) e `displayText`**:
   - Total: **21** exemplos onde a string exata da palavra não aparece no `displayText`.
   - Inclui compostos divergentes (ex.: `残業` vs `営業`, `勤務` vs `事務`, `損害` vs `損失`, `負債` vs `国債`, `総裁` vs `最高裁判所`, `難民` vs `遭難者`).
   - Inclui variantes ortográficas (ex.: `疑似` vs `擬似`).
   - Inclui flexões verbais legítimas (ex.: `立ち寄る` → `立ち寄ります`, `挙げる` → `挙げて`).
3. **Resíduos de Romaji com Vocábulos Ingleses**:
   - Total: **98** exemplos com palavras em inglês preservadas no romaji legado (`strategy`, `report`, `idea`, `submit`, `material`, `bank`, `market`, `rescue`, `freedom`, etc.).
4. **Resíduos com Caracteres Não-ASCII / Não-Kana no Romaji Legado**:
   - Total: **11** exemplos contendo kanjis chineses/japoneses incorporados na string romaji (ex.: `Zangyou o减らす.`, `Bokin ni協力.`, `Ikkyo ni解決.`, `Seiken交代.`, `Naikaku総理大臣.`).
5. **Artefatos de Kana Fonético no `displayText`**:
   - Total: **176** exemplos contendo transcrições fonéticas provisórias do antigo helper (ex.: `クルあっス`, `ぱぺル`, `せんド`, `まてりあル`).

---

## 7. MATRIZ DE RECONCILIAÇÃO INICIAL

```
DATASET N2 (750 exemplos + 21 módulos = 771 alvos)
   ├── status: "pending-human-review" (771/771)
   └── targetReplaced: true (750/750)
         ↕ (1:1 exato)
LEDGER EDITORIAL (2.551 decisões em data_kanji_n2.js)
   ├── unresolved: 771 decisões (21 metadata + 750 examples)
   ├── approved: 1.772 decisões (identidade, leituras, quizzes)
   └── corrected: 8 decisões (readingText Fase 22B)
         ↕ (1:1 exato)
FILA EDITORIAL (4.606 itens globais)
   └── N2 na Fila: exatamente 771 itens unresolved (CANONICAL_EVIDENCE_PENDING)
         ↕ (1:1 exato)
TABELA HUMANA (JAPANESE_KANJI_N2_HUMAN_REVIEW.md)
   └── 770 linhas de conteúdo (20 grammar + 750 examples), todas pending-human-review
```

Tolerância a inconsistências inexplicadas: **ZERO**.
