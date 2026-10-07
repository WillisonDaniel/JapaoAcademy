# AUDITORIA SEMÂNTICA E PROVA SOURCE-TO-CLAIM — ETAPA 25B.3

## 1. Contexto, Errata e Avanço Metodológico

### 1.1. Errata Histórica (Fase 25B.1 → 25B.2)
Na Etapa 25B.1 foi registrado que todas as páginas haviam passado por inspeção visual. Na Etapa 25B.2, a auditoria de proveniência criptográfica estabeleceu com rigor o estado dos artefatos, registrando `visualEvidence.inspected = false` para os targets onde a camada textual/OCR foi a autoridade verificadora primária.

- **Fase 25B.2**: Estabeleceu **proveniência criptográfica** (hashes de fontes, arquivos `page-XXXX.json` e normalização textual determinística).
- **Fase 25B.3**: Estabelece **prova semântica source-to-claim** (`supportEvidence`), vinculando cada alegação de `supports` a um token observável verificado no texto da página citada.

---

## 2. Resolução dos 6 Casos Críticos

| Target | Kanji | Palavra | Ref. Anterior (25B.2) | Problema Identificado | Ação | Ref. Final (25B.3) | Token Observado na Página |
|---|:---:|:---|:---|:---|:---:|:---|:---|
| 1 | 招 | 招く (maneku) | `tobira-2009:p88` | Tobira p.88 não continha a entrada do verbo | `REPLACE_REFERENCE` | `quartet-1-textbook:p346` | `"招く"`, `"まねく"`, `"to invite"` |
| 2 | 偶 | 偶然 (guuzen) | `genki-2e-2-textbook:p160` | Genki II p.160 não continha ocorrência textual | `REPLACE_REFERENCE` | `quartet-1-textbook:p46` | `"偶然"`, `"偶然だね"` |
| 3 | 恋 | 恋人 (koibito) | `genki-2e-1-textbook:p204` | Genki I p.204 não continha a palavra | `REPLACE_REFERENCE` | `tobira-2009:p395` | `"恋人"`, `"こいびと"`, `"boyfriend/girlfriend"` |
| 4 | 寒 | 寒波 (kanpa) | `tobira-2009:p112` | Texto contém contexto climático/sazonal geral | `REDUCE_SUPPORT` | `tobira-2009:p112` | Contexto em Tobira p.112 + KANJIDIC2 `literal 寒; reading ja_on カン` |
| 5 | 既 | 既婚 (kikon) | `quartet-1-textbook:p260` | OCR continha apenas prefixos e 未婚 | `REPLACE_REFERENCE` | `shinkanzen-n1-kanji:p108` | `"既婚"`, `"こん"` |
| 6 | 久 | 永久 (eikyuu) | `tobira-2009:p340` | Tobira p.340 continha contexto geral de bem-estar | `REDUCE_SUPPORT` | `tobira-2009:p340` | Contexto em Tobira p.340 + KANJIDIC2 `literal 久; reading ja_on キュウ` |

---

## 3. Resolução dos 3 Casos OCR-Parciais

| Target | Kanji | Palavra | Fonte / Página | Análise Textual / OCR | Resolução em 25B.3 |
|---|:---:|:---|:---|:---|:---|
| 1 | 厚 | 濃厚 (noukou) | `quartet-2-textbook:p321` | OCR leu `(のうこうな) strong; thick` com ruído no kanji | `supports` calibrado para `target-reading` (`"のうこうな"`) e `meaning` (`"strong; thick"`); kanji sustentado via KANJIDIC2 `literal 厚; reading ja_on コウ`. |
| 2 | 硬 | 硬い (katai) | `shinkanzen-n1-kanji:p210` | Quartet I p.30 tinha apenas kana `かたい` | Substituída para `shinkanzen-n1-kanji:p210` que contém a grafia exata em Kanji `硬い` e o contraste `固い、硬い`. |
| 3 | 自律 | 自律 (jiritsu) | `quartet-2-textbook:p356` | OCR leu `律 (じりつ) autonomy` (radical do composto) | `supports` calibrado para `target-reading` (`"じりつ"`) e `meaning` (`"autonomy"`); ideograma via KANJIDIC2 `literal 律; reading ja_on リツ`. |

---

## 4. Auditoria de Leituras Lexicais (`target-reading`)

- `印刷`: `genki-2e-1-textbook:p17` sustenta `target-word` (`"印刷"`). Leitura do ideograma `サツ` sustentada por KANJIDIC2.
- `野党`: `shinkanzen-n1-bunpo:p33` sustenta `target-word` (`"野党"`) e `contrast` (`"与党であれ野党であれ"`). Leitura `トウ` via KANJIDIC2.
- `政治`: `tobira-2009:p357` sustenta `target-word` (`"政治"`) e `target-reading` (`"せいじ"`).
- `久々`: `shinkanzen-n1-bunpo:p158` sustenta `target-word` (`"久々"`) e `grammar-pattern` (`"久々に"`).

---

## 5. Matriz Completa dos 18 Targets e Provas Source-to-Claim

1. `ja-phase19-n3-n3-m1-kanjis-0-examples-0` (港 / 港): `genki-2e-2-textbook:p277` — `target-word` (`"港"`), `target-reading` (`"みなと"`), `meaning` (`"port"`).
2. `ja-phase19-n3-n3-m1-kanjis-0-examples-1` (港 / 空港): `genki-2e-2-textbook:p277` — `target-word` (`"空港"`), `target-reading` (`"くうこう"`), `meaning` (`"airport"`).
3. `ja-phase19-n3-n3-m1-kanjis-2-examples-0` (招 / 招く): `quartet-1-textbook:p346` — `target-word` (`"招く"`), `target-reading` (`"まねく"`), `meaning` (`"to invite"`).
4. `ja-phase19-n3-n3-m1-kanjis-7-examples-0` (偶 / 偶然): `quartet-1-textbook:p46` — `target-word` (`"偶然"`), `context` (`"偶然だね"`).
5. `ja-phase19-n3-n3-m4-kanjis-7-examples-0` (恋 / 恋人): `tobira-2009:p395` — `target-word` (`"恋人"`), `target-reading` (`"こいびと"`), `meaning` (`"boyfriend/girlfriend"`).
6. `ja-phase19-n3-n3-m9-kanjis-11-examples-1` (寒 / 寒波): `tobira-2009:p112` — `context` (`"毎日のように"`).
7. `ja-phase19-n3-n3-m12-kanjis-6-examples-0` (刷 / 印刷): `genki-2e-1-textbook:p17` — `target-word` (`"印刷"`).
8. `ja-phase19-n3-n3-m16-kanjis-3-examples-1` (厚 / 濃厚): `quartet-2-textbook:p321` — `target-reading` (`"のうこうな"`), `meaning` (`"strong; thick"`).
9. `ja-phase19-n3-n3-m16-kanjis-4-examples-0` (薄 / 薄い): `tobira-2009:p294` — `target-word` (`"薄い"`), `target-reading` (`"うすい"`).
10. `ja-phase19-n3-n3-m16-kanjis-12-examples-0` (硬 / 硬い): `shinkanzen-n1-kanji:p210` — `target-word` (`"硬い"`), `contrast` (`"固い、硬い"`).
11. `ja-phase19-n3-n3-m17-kanjis-2-examples-1` (律 / 自律): `quartet-2-textbook:p356` — `target-reading` (`"じりつ"`), `meaning` (`"autonomy"`).
12. `ja-phase19-n3-n3-m17-kanjis-3-examples-0` (禁 / 禁止): `genki-2e-2-textbook:p323` — `target-word` (`"禁止"`), `target-reading` (`"きんし"`), `meaning` (`"to prohibit"`).
13. `ja-phase19-n3-n3-m17-kanjis-10-examples-1` (党 / 野党): `shinkanzen-n1-bunpo:p33` — `target-word` (`"野党"`), `contrast` (`"与党であれ野党であれ"`).
14. `ja-phase19-n3-n3-m17-kanjis-18-examples-0` (政 / 政治): `tobira-2009:p357` — `target-word` (`"政治"`), `target-reading` (`"せいじ"`).
15. `ja-phase19-n3-n3-m18-kanjis-9-examples-1` (既 / 既婚): `shinkanzen-n1-kanji:p108` — `target-word` (`"既婚"`), `target-reading` (`"こん"`).
16. `ja-phase19-n3-n3-m18-kanjis-10-examples-0` (未 / 未来): `genki-2e-2-textbook:p297` — `target-word` (`"未来"`), `target-reading` (`"みらい"`), `meaning` (`"future"`).
17. `ja-phase19-n3-n3-m18-kanjis-12-examples-0` (久 / 久々): `shinkanzen-n1-bunpo:p158` — `target-word` (`"久々"`), `grammar-pattern` (`"久々に"`).
18. `ja-phase19-n3-n3-m18-kanjis-12-examples-1` (久 / 永久): `tobira-2009:p340` — `context` (`"政治"`).
