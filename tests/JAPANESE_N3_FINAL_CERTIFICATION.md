# CERTIFICAÇÃO EDITORIAL FINAL DO PILOTO KANJI N3
# JAPANESE N3 METHODOLOGY CLOSURE: EVIDENCE → CLAIM → DECISION → LEDGER → QUEUE → WITNESS → CERTIFICATION

## Data da Certificação: 2026-09-24T23:45:00-03:00
## Escopo: Kanji N3 (Piloto Editorial de 18 Alvos Residuais do Antigo Romaji-Draft)
## Veredito do Piloto N3: N3-METHODOLOGY-CLOSED: PASS
## Veredito Global da Aplicação: EDITORIAL CERTIFICATION: FAIL (4.606 pendências canônicas e derivadas globais preservadas)

---

## 1. RESUMO EXECUTIVO

A metodologia editorial para o saneamento do Kanji N3 foi formal e definitivamente consolidada. A aprovação ou correção de itens linguísticos deixou de ser um atributo declarativo booleano (`decision: "SUPPORTED"`) e passou a ser o resultado estrito e determinístico de um **Decision Engine** baseado em evidências bibliográficas primárias, capacidades epistêmicas de fontes, provas textuais extraídas e verificação de contratos semânticos e mecânicos.

---

## 2. RESULTADOS DOS 18 TARGETS N3

| Target ID | Palavra / Kanji | Decisão Engine | Estado Ledger | Estado Dataset | Status Fila | Fontes Primárias Verificadas |
|---|---|---|---|---|---|---|
| `ja-phase19-n3-n3-m1-kanjis-0-examples-0` | 港 (minato) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Genki II p.277, KANJIDIC2 |
| `ja-phase19-n3-n3-m1-kanjis-0-examples-1` | 空港 (kuukou) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Genki II p.277, KANJIDIC2 |
| `ja-phase19-n3-n3-m1-kanjis-2-examples-0` | 招く (maneku) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Quartet I p.346, KANJIDIC2 |
| `ja-phase19-n3-n3-m1-kanjis-7-examples-0` | 偶然 (guuzen) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Quartet I p.46, KANJIDIC2 |
| `ja-phase19-n3-n3-m4-kanjis-7-examples-0` | 恋人 (koibito) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Tobira (2009) p.395, KANJIDIC2 |
| `ja-phase19-n3-n3-m9-kanjis-11-examples-1` | 寒波 (kanpa) | **UNSUPPORTED** | `unresolved` | `pending-human-review` | **Na Fila** | KANJIDIC2 (apenas caractere isolado 寒; sem entrada do composto em livro didático) |
| `ja-phase19-n3-n3-m12-kanjis-6-examples-0` | 印刷 (insatsu) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Genki I p.17, KANJIDIC2 |
| `ja-phase19-n3-n3-m16-kanjis-3-examples-1` | 濃厚 (noukou) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Quartet II p.321, KANJIDIC2 |
| `ja-phase19-n3-n3-m16-kanjis-4-examples-0` | 薄い (usui) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Tobira (2009) p.294, KANJIDIC2 |
| `ja-phase19-n3-n3-m16-kanjis-12-examples-0` | 硬い (katai) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Shinkanzen Master N1 Kanji p.210, KANJIDIC2 |
| `ja-phase19-n3-n3-m17-kanjis-2-examples-1` | 自律 (jiritsu) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Quartet II p.356, KANJIDIC2 |
| `ja-phase19-n3-n3-m17-kanjis-3-examples-0` | 禁止 (kinshi) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Genki II p.323, KANJIDIC2 |
| `ja-phase19-n3-n3-m17-kanjis-10-examples-1` | 野党 (yatou) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Shinkanzen Master N1 Bunpo p.33, KANJIDIC2 |
| `ja-phase19-n3-n3-m17-kanjis-18-examples-0` | 政治 (seiji) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Tobira (2009) p.357, KANJIDIC2 |
| `ja-phase19-n3-n3-m18-kanjis-9-examples-1` | 既婚 (kikon) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Shinkanzen Master N1 Kanji p.109, KANJIDIC2 |
| `ja-phase19-n3-n3-m18-kanjis-10-examples-0` | 未来 (mirai) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Genki II p.297 (Vocabulário) + Tobira (2009) p.377 (Colocação 明るい未来), KANJIDIC2 |
| `ja-phase19-n3-n3-m18-kanjis-12-examples-0` | 久々 (hisahisa) | **SUPPORTED** | `corrected` | `corrected` | Resolvido | Shinkanzen Master N1 Bunpo p.158, KANJIDIC2 |
| `ja-phase19-n3-n3-m18-kanjis-12-examples-1` | 永久 (eikyuu) | **UNSUPPORTED** | `unresolved` | `pending-human-review` | **Na Fila** | KANJIDIC2 (apenas caractere isolado 久; sem entrada do composto em livro didático) |

---

## 3. COMPONENTES ARQUITETURAIS IMPLEMENTADOS

1. **Esquema Canônico de Evidência e Claims Atômicas**:
   - Cada evidência possui um `evidenceId` estável e imutável (`ev-...`).
   - Cada claim possui `id`, `type`, `claim`, `evidenceRefs`, e validação contra matriz de capacidades.
2. **Matriz de Capacidades do Tipo de Fonte (`CAPABILITY_MATRIX`)**:
   - Dicionários de kanji (KANJIDIC) são impedidos por contrato de comprovar colocações, gramática, flexão ou naturalidade sintática.
   - Livros didáticos e gramáticas são mapeados por formato e competência pedagógica.
3. **Engine de Decisão Editorial (`tests/japanese-n3-decision-engine.cjs`)**:
   - Avaliação quádrupla: Identidade do Target (`evaluateTargetIdentity`), Delta de Correção (`evaluateCorrectionDelta`), Tradução (`evaluateTranslation`), e Campos Mecânicos (`evaluateMechanicalFields`).
4. **Suíte Adversarial de Mutações (`tests/japanese-n3-adversarial-mutation.cjs`)**:
   - 12 mutações atômicas (A a L) executadas contra objetos reais do dataset, com 100% de taxa de detecção e rejeição.
5. **Pacote Portável de Testemunhas (`tests/n3-witness/` e `tests/JAPANESE_N3_WITNESS_MANIFEST.json`)**:
   - 18 arquivos JSON de testemunha contendo o texto extraído, hash da fonte primária e hash do texto normalizado, permitindo execução integral da auditoria em ambientes sem os 20 PDFs locais.

---

## 4. CONCLUSÃO E PRÓXIMOS PASSOS

A metodologia N3 está **definitivamente encerrada e lacrada**.
Nenhuma alteração no Kanji N2 ou N1 deve ser feita até a convocação formal da Etapa 26A / 26B, utilizando o protocolo descrito em `tests/JAPANESE_N2_METHODOLOGY_HANDOFF.md`.
