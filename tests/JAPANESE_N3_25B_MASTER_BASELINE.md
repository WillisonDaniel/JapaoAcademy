# JAPANESE N3 25B MASTER BASELINE INVENTORY

## Data e Ambiente
- Data: 2026-09-24T23:36:00-03:00
- Node.js: v24.18.0
- Plataforma: Windows / PowerShell

---

## 1. SHA-256 dos Arquivos Relevantes

| Arquivo | SHA-256 |
|---|---|
| `database/ja-JP/data_kanji_n3.js` | `c9e5ff4ca62007b1d04ecd6bb0bcbb9f9217d447d3105309cf3e5f072e3a03c0` |
| `tests/JAPANESE_EDITORIAL_LEDGER.json` | `2469e0ee006bdb5099f75294be0f88454babba30f0cc06e698ac7eccfb4daed0` |
| `tests/JAPANESE_FINAL_EDITORIAL_QUEUE.json` | `4678cab9d9eaa6dc9ff330a62470a92273979bf1e0d03a7949b4c8e46603cdfe` |
| `tests/JAPANESE_N3_25B_EVIDENCE_AUDIT.json` | `4af7b1c924f19ac5c142d912fe9cc3e443c912b6ac9bc8eea899513b2c59e2aa` |
| `tests/JAPANESE_EDITORIAL_SOURCES.json` | `cfe4ba5ce2abc29e03b4131bc19a5919754d5fbbd74e29b3527d9607effcc71f` |
| `tests/JAPANESE_N3_DRAFT_RESIDUE_25B_BASELINE.json` | `a70927bac9ca7fae96ca607e5c84863fc0107bebe0bbc8ce67c862076405e700` |

---

## 2. Totais do Ledger Editorial

- **Total de Itens**: 23.537
- **Approved**: 16.621
- **Corrected**: 2.310
- **Unresolved**: 4.606

---

## 3. Totais da Fila Editorial Final

- **Total na Fila**: 4.606
- **CANONICAL_EVIDENCE_PENDING**: 3.912
- **DERIVED_RULE_PENDING**: 694
- **DERIVED_UPSTREAM_PENDING**: 0

---

## 4. Estado Inicial dos 18 Targets N3

- **Total de Targets**: 18
- **Corrected (Supported)**: 16
  - `kanji-n3-m01-k03-ex1` (酒屋)
  - `kanji-n3-m01-k06-ex1` (氷水)
  - `kanji-n3-m01-k13-ex1` (昼寝)
  - `kanji-n3-m02-k13-ex1` (着物)
  - `kanji-n3-m04-k09-ex1` (既婚)
  - `kanji-n3-m06-k02-ex1` (両手)
  - `kanji-n3-m06-k12-ex1` (丸い)
  - `kanji-n3-m09-k07-ex1` (横断)
  - `kanji-n3-m11-k12-ex1` (真実)
  - `kanji-n3-m13-k10-ex1` (洋服)
  - `kanji-n3-m13-k11-ex0` (近代)
  - `kanji-n3-m14-k05-ex1` (港町)
  - `kanji-n3-m17-k08-ex1` (都合)
  - `kanji-n3-m18-k08-ex1` (未定)
  - `kanji-n3-m18-k10-ex0` (未来)
  - `kanji-n3-m19-k05-ex1` (玉ねぎ)
- **Unresolved (Unsupported / pending-human-review)**: 2
  - `kanji-n3-m08-k08-ex1` (寒波)
  - `kanji-n3-m19-k12-ex1` (永久)

---

## 5. Status da Suíte de Testes

- **Test Suites Executadas**: 46
- **Testes Aprovados**: 46/46 (100% PASS)
- **Editorial Certification Global**: FAIL (esperado até resolução completa das 4.606 pendências)
