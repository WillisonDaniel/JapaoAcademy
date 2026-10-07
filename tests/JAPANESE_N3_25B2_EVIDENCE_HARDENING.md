# RELATÓRIO DE HARDENING DE PROVENIÊNCIA DE EVIDÊNCIAS — ETAPA 25B.2

## 1. Contexto e Objetivo

A Etapa 25B.2 estabelece uma camada criptográfica e determinística de proveniência para os 18 targets corrigidos do Kanji N3. A validação deixa de depender exclusivamente de flags booleanas (`sourceHashVerified: true`, `renderedPageInspected: true`) e passa a ancorar-se em fingerprints SHA-256 da fonte (`sourceSha256`), do artefato JSON da página extraída (`corpusArtifactSha256`), e do texto normalizado (`pageTextSha256`), além de delimitar rigorosamente o escopo de sustentação (`supports`) e refinar as localizações no KANJIDIC2.

---

## 2. Reconciliação Real de Referências (25B → 25B.1)

Na Etapa 25B, referências bibliográficas preliminares foram atribuídas durante a revisão inicial. Na Etapa 25B.1, ao inspecionar o corpus local página a página, as referências foram refinadas para as páginas que documentam os termos e estruturas de forma direta.

```text
Total de Targets Auditados:                     18
Referências Primárias Mantidas (mesma fonte/pág): 5 (27,8%)
Referências Primárias Substituídas/Refinadas:    13 (72,2%)
  - Apenas número de página refinado no mesmo livro: 4
  - Fonte e página refinadas para obra direta:        9
Localizações KANJIDIC2 Refinadas (leitura exata): 18 (100%)
```

### Matriz Detalhada de Reconciliação por Target

| ID | Kanji | Termo | Ref. Fase 25B | Ref. Fase 25B.1 / Atual | Tipo de Mudança | Justificativa |
|---|:---:|:---|:---|:---|:---:|:---|
| `ja-phase19-n3-n3-m1-kanjis-0-examples-0` | 港 | 港 (minato) | `tobira-2009:p15` | `genki-2e-2-textbook:p277` | Fonte + Pág | Genki II p.277 documenta diretamente o Kanji e kunyomi みなと |
| `ja-phase19-n3-n3-m1-kanjis-0-examples-1` | 港 | 空港 (kuukou) | `genki-2e-2-textbook:p142` | `genki-2e-2-textbook:p277` | Página | Refinada para a seção de Kanji da lição 13 (p.277) |
| `ja-phase19-n3-n3-m1-kanjis-2-examples-0` | 招 | 招く (maneku) | `tobira-2009:p88` | `tobira-2009:p88` | Mantida | Documenta a regência e uso do verbo |
| `ja-phase19-n3-n3-m1-kanjis-7-examples-0` | 偶 | 偶然 (guuzen) | `genki-2e-2-textbook:p160` | `genki-2e-2-textbook:p160` | Mantida | Documenta o advérbio 偶然 em encontros casuais |
| `ja-phase19-n3-n3-m4-kanjis-7-examples-0` | 恋 | 恋人 (koibito) | `genki-2e-1-textbook:p204` | `genki-2e-1-textbook:p204` | Mantida | Documenta o vocabulário e padrão com と |
| `ja-phase19-n3-n3-m9-kanjis-11-examples-1` | 寒 | 寒波 (kanpa) | `tobira-2009:p112` | `tobira-2009:p112` | Mantida | Contexto geográfico e climático de 日本列島 |
| `ja-phase19-n3-n3-m12-kanjis-6-examples-0` | 刷 | 印刷 (insatsu) | `tobira-2009:p178` | `genki-2e-1-textbook:p17` | Fonte + Pág | Genki I p.17 define e exemplifica 印刷 diretamente |
| `ja-phase19-n3-n3-m16-kanjis-3-examples-1` | 厚 | 濃厚 (noukou) | `quartet-1-textbook:p145` | `quartet-2-textbook:p321` | Fonte + Pág | Quartet II p.321 introduz formalmente o adjetivo 濃厚 |
| `ja-phase19-n3-n3-m16-kanjis-4-examples-0` | 薄 | 薄い (usui) | `genki-2e-1-textbook:p118` | `tobira-2009:p294` | Fonte + Pág | Tobira p.294 ensina 薄い no contexto de espessura de papel |
| `ja-phase19-n3-n3-m16-kanjis-12-examples-0` | 硬 | 硬い (katai) | `genki-2e-2-textbook:p96` | `quartet-1-textbook:p30` | Fonte + Pág | Quartet I p.30 traz discussão explícita de rigidez física |
| `ja-phase19-n3-n3-m17-kanjis-2-examples-1` | 律 | 自律 (jiritsu) | `tobira-2009:p210` | `quartet-2-textbook:p356` | Fonte + Pág | Quartet II p.356 indexa formalmente o composto 自律 |
| `ja-phase19-n3-n3-m17-kanjis-3-examples-0` | 禁 | 禁止 (kinshi) | `genki-2e-2-textbook:p178` | `genki-2e-2-textbook:p323` | Página | Entrada lexical exata do Kanji 禁 e termo 禁止 |
| `ja-phase19-n3-n3-m17-kanjis-10-examples-1` | 党 | 野党 (yatou) | `tobira-2009:p320` | `shinkanzen-n1-bunpo:p33` | Fonte + Pág | Shinkanzen Bunpo p.33 traz a oposição 与党 / 野党 |
| `ja-phase19-n3-n3-m17-kanjis-18-examples-0` | 政 | 政治 (seiji) | `tobira-2009:p315` | `genki-2e-2-textbook:p321` | Fonte + Pág | Genki II p.321 traz a frase de estudo de política |
| `ja-phase19-n3-n3-m18-kanjis-9-examples-1` | 既 | 既婚 (kikon) | `quartet-1-textbook:p82` | `quartet-1-textbook:p260` | Página | Quartet I p.260 apresenta o contraste 既婚 vs 未婚 |
| `ja-phase19-n3-n3-m18-kanjis-10-examples-0` | 未 | 未来 (mirai) | `genki-2e-2-textbook:p220` | `genki-2e-2-textbook:p297` | Página | Entrada lexical da lição 16 do Genki II |
| `ja-phase19-n3-n3-m18-kanjis-12-examples-0` | 久 | 久々 (hisahisa) | `quartet-1-textbook:p190` | `shinkanzen-n1-bunpo:p158` | Fonte + Pág | Shinkanzen Bunpo p.158 exemplifica o advérbio 久々に |
| `ja-phase19-n3-n3-m18-kanjis-12-examples-1` | 久 | 永久 (eikyuu) | `tobira-2009:p340` | `tobira-2009:p340` | Mantida | Expressão e aspiração de paz mundial (平和を願う) |

---

## 3. Delimitação do Escopo de Sustentação (`supports`)

O campo `supports` foi estritamente restringido ao que cada página documentalmente comprova:

- Fontes lexicais e de lista de vocabulário sustentam `["target-word", "target-reading", "meaning"]`.
- Fontes gramaticais e de sentenças completas sustentam `["grammar-pattern", "collocation", "contrast", "register"]`.
- KANJIDIC2 sustenta exclusivamente `["character-reading"]`.

Nenhum suporte de colocação ou naturalidade foi artificialmente atribuído a páginas que contêm apenas definições de vocabulário.

---

## 4. Contratos de Automação e Verificação Criptográfica

Dois modos de validação são fornecidos pelo script `tests/japanese-n3-evidence-provenance.cjs`:

1. **Modo Contrato (`node tests/japanese-n3-evidence-provenance.cjs`)**:
   Valida a integridade estrutural do JSON, formato SHA-256 dos hashes, correspondência entre catálogo, ledger e evidence audit, conformidade dos valores de `supports` e imutabilidade da baseline 25B.
2. **Modo Local Estrito (`node tests/japanese-n3-evidence-provenance.cjs --check-local`)**:
   Lê os arquivos reais dos PDFs no disco, recalcula os hashes de cada arquivo `page-XXXX.json` e normaliza o texto extraído, comparando com os valores registrados no evidence audit.
