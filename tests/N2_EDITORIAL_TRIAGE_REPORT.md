# RELATÓRIO DE TRIAGEM EDITORIAL DE QUALIDADE — KANJI N2
## ETAPA N2.1 — EDITORIAL REVIEW TRIAGE REPORT (771 TARGETS)

**Data de Execução:** 2026-09-25T18:15:00-03:00  
**Status do Escopo N2:** EM PROGRESSO (Revisão Humana Controlada)  
**Isolamento Metodológico:** `N2-METHODOLOGY-CLOSED: PASS` mantido intacto  
**Datasets Protegidos:** N1 e N3 100% idênticos ao baseline  

---

### 1. RESUMO EXECUTIVO DA TRIAGEM

| Métrica | Quantidade | Percentual | Ação Editorial Recomendada |
|---|---|---|---|
| **Total de Alvos Triados** | **771** | 100.0% | Auditoria sistemática individual |
| **DATA_QUALITY_ISSUE** | 89 | 11.5% | Correção de rascunhos legados e dados ausentes |
| **EVIDENCE_READY** | 40 | 5.2% | Validação imediata contra testemunhas primárias |
| **EVIDENCE_DEFICIENT** | 619 | 80.3% | Mapeamento bibliográfico página a página |
| **SOURCE_REQUIRED** | 21 | 2.7% | Incorporação de ementas curriculares primárias |
| **AMBIGUOUS** | 2 | 0.3% | Deliberação de política ortográfica/gramatical |
| **REVIEWED_UNRESOLVED** | 0 | 0.0% | Transição pós-revisão humana |

---

### 2. DISTRIBUIÇÃO POR PRIORIDADE DE REVISÃO (P0 A P4)

- **P0 — Crítico (Corrupção estrutural ou palavra ausente)**: 31 alvos (severidade ALTA)
- **P1 — Alta (Evidência pronta ou resíduo de inglês identificável)**: 98 alvos (severidade MÉDIA)
- **P2 — Média (Evidência deficiente, vocabulário canônico padrão)**: 619 alvos (severidade BAIXA)
- **P3 — Baixa/Curricular (Metadados de módulo)**: 21 alvos (severidade MÉDIA)
- **P4 — Especial (Ambiguidade ortográfica ou flexional)**: 2 alvos (severidade MÉDIA)

---

### 3. DIAGNÓSTICO POR TIPO DE PROBLEMA E SEVERIDADE

| Tipo de Problema | Alvos Afetados | Severidade | Descrição Técnica |
|---|---|---|---|
| `MISSING_TARGET_WORD` | 13 | ALTA | Palavra-alvo completamente omitida do `displayText` canônico |
| `NON_ASCII_ROMAJI` | 20 | ALTA | Caracteres kanji chineses/japoneses incorporados no campo `romaji` |
| `ENGLISH_ROMAJI_RESIDUE` | 58 | MÉDIA | Palavras em inglês residuais do antigo gerador (ex: *strategy*, *idea*) |
| `METADATA_SOURCE_NEEDED` | 21 | MÉDIA | Metadados dos 21 módulos necessitando comprovação de ementa |
| `ORTHOGRAPHIC_AMBIGUITY` | 1 | MÉDIA | Variante ortográfica legítima (`疑似` vs `擬似`) pendente de política |
| `INFLECTIONAL_AMBIGUITY` | 1 | MÉDIA | Divergência entre substantivo composto e frase verbal (`国境越え` vs `越える`) |
| `TEXTBOOK_MAPPING_NEEDED` | 619 | BAIXA | Exemplos lexicais corretos que necessitam mapeamento de página primária |

---

### 4. LISTA DOS ALVOS CRÍTICOS E RESIDUAIS (AMOSTRA DETALHADA)

#### 4.1. Alvos P0 — Falta de Palavra-Alvo no DisplayText (13 alvos)

- `ja-phase19-n2-n2-m1-kanjis-1-examples-1`: Palavra-alvo `残業 (zangyou)` ausente em `"今年の会社の営業実績が大幅に伸びました。"`
- `ja-phase19-n2-n2-m1-kanjis-7-examples-1`: Palavra-alvo `営業 (eigyou)` ausente em `"地域社会のために病院を経営します。"`
- `ja-phase19-n2-n2-m1-kanjis-16-examples-0`: Palavra-alvo `勤務 (kinmu)` ausente em `"毎日のデスクワークで事務作業をこなします。"`
- `ja-phase19-n2-n2-m2-kanjis-3-examples-0`: Palavra-alvo `損害 (songai)` ausente em `"無理な投資が原因で多額の損失を出しました。"`
- `ja-phase19-n2-n2-m2-kanjis-11-examples-0`: Palavra-alvo `負債 (fusai)` ausente em `"国の財政を支えるために国債が発行されます。"`
- `ja-phase19-n2-n2-m2-kanjis-18-examples-0`: Palavra-alvo `負担 (futan)` ausente em `"会社の負債を計画的に返済していきます。"`
- `ja-phase19-n2-n2-m4-kanjis-18-examples-0`: Palavra-alvo `総裁 (sousai)` ausente em `"最高裁判所で歴史的な判決が言い渡されます。"`
- `ja-phase19-n2-n2-m5-kanjis-4-examples-1`: Palavra-alvo `勝訴 (shouso)` ausente em `"訴訟で勝ったという報告。"`
- `ja-phase19-n2-n2-m6-kanjis-0-examples-0`: Palavra-alvo `報道 (houdou)` ausente em `"研究成果を学会で詳しく報告します。"`
- `ja-phase19-n2-n2-m12-kanjis-9-examples-1`: Palavra-alvo `東屋 (azumaya)` ausente em `"公園の休憩亭。"`
- `ja-phase19-n2-n2-m13-kanjis-18-examples-1`: Palavra-alvo `難民 (nanmin)` ausente em `"海上で孤立した遭難者の救助活動を行います。"`
- `ja-phase19-n2-n2-m15-kanjis-2-examples-0`: Palavra-alvo `抑制 (yokusei)` ausente em `"感情の高ぶりを抑えて冷静に対処します。"`
- `ja-phase19-n2-n2-m19-kanjis-12-examples-1`: Palavra-alvo `赤字損 (akajison)` ausente em `"あかじの損失。"`

#### 4.2. Alvos P0 — Romaji com Caracteres Não-ASCII (20 alvos)

- `ja-phase19-n2-n2-m1-kanjis-1-examples-1`: `残業 (zangyou)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Zangyou o减らす."
- `ja-phase19-n2-n2-m1-kanjis-7-examples-0`: `経営 (keiei)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Keiei o学ぶ."
- `ja-phase19-n2-n2-m2-kanjis-8-examples-0`: `契約 (keiyaku)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Keiyaku o結ぶ."
- `ja-phase19-n2-n2-m2-kanjis-11-examples-0`: `負債 (fusai)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Fusai o抱える."
- `ja-phase19-n2-n2-m3-kanjis-14-examples-1`: `募金 (bokin)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Bokin ni協力."
- `ja-phase19-n2-n2-m4-kanjis-5-examples-1`: `一挙 (ikkyo)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Ikkyo ni解決."
- `ja-phase19-n2-n2-m4-kanjis-6-examples-0`: `内閣 (naikaku)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Naikaku総理大臣."
- `ja-phase19-n2-n2-m4-kanjis-10-examples-0`: `政権 (seiken)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Seiken交代."
- `ja-phase19-n2-n2-m5-kanjis-0-examples-0`: `犯罪 (hanzai)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Hanzai o防ぐ."
- `ja-phase19-n2-n2-m5-kanjis-4-examples-0`: `訴訟 (soshou)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Soshou o起こす."
- `ja-phase19-n2-n2-m5-kanjis-13-examples-1`: `違憲 (iken)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Iken no判決."
- `ja-phase19-n2-n2-m8-kanjis-16-examples-0`: `洗脳 (sennou)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Sennou o防ぐ."
- `ja-phase19-n2-n2-m8-kanjis-17-examples-0`: `筋肉 (kinniku)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Kinniku o鍛える."
- `ja-phase19-n2-n2-m9-kanjis-5-examples-0`: `暴風 (boufuu)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Boufuu u警報."
- `ja-phase19-n2-n2-m10-kanjis-11-examples-0`: `県庁 (kenchou)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Kenchou所在地."
- `ja-phase19-n2-n2-m13-kanjis-12-examples-0`: `紛争 (funsou)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Funsou no解決."
- `ja-phase19-n2-n2-m16-kanjis-6-examples-1`: `感涙 (kanrui)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Kanrui o流す."
- `ja-phase19-n2-n2-m16-kanjis-17-examples-1`: `懐古 (kaiko)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Kaiko趣味."
- `ja-phase19-n2-n2-m17-kanjis-17-examples-0`: `解答 (kaitou)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Kaitou用紙."
- `ja-phase19-n2-n2-m20-kanjis-1-examples-0`: `婚姻 (kon'in)` — ROMAJI_CONTAINS_KANJI_RESIDUE: "Kon'in届."

#### 4.3. Alvos P1 — Amostra de Resíduos de Inglês no Romaji (Top 15 de 58 alvos)

- `ja-phase19-n2-n2-m1-kanjis-0-examples-0`: `企業 (kigyou)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Kigyou no strategy."
- `ja-phase19-n2-n2-m1-kanjis-2-examples-1`: `招待 (shoutai)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Shoutai-jou o send."
- `ja-phase19-n2-n2-m1-kanjis-3-examples-1`: `独創 (dokusou)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Dokusou-teki na idea."
- `ja-phase19-n2-n2-m1-kanjis-5-examples-1`: `幹事 (kanji)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Party no kanji."
- `ja-phase19-n2-n2-m1-kanjis-6-examples-1`: `任命 (ninmei)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Manager ni ninmei."
- `ja-phase19-n2-n2-m1-kanjis-11-examples-1`: `企画案 (kikakuan)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Kikakuan o submit."
- `ja-phase19-n2-n2-m1-kanjis-13-examples-1`: `導入 (dounyuu)` — ROMAJI_CONTAINS_ENGLISH_WORD: "System no dounyuu."
- `ja-phase19-n2-n2-m1-kanjis-14-examples-1`: `立派 (rippa)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Rippa na leader."
- `ja-phase19-n2-n2-m1-kanjis-15-examples-1`: `金属 (kinzoku)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Kinzoku no material."
- `ja-phase19-n2-n2-m1-kanjis-17-examples-1`: `統計 (toukei)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Toukei data."
- `ja-phase19-n2-n2-m1-kanjis-18-examples-0`: `融資 (yuushi)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Bank no yuushi."
- `ja-phase19-n2-n2-m1-kanjis-18-examples-1`: `金融 (kin'yuu)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Kin'yuu market."
- `ja-phase19-n2-n2-m2-kanjis-1-examples-1`: `評価 (hyouka)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Good hyouka."
- `ja-phase19-n2-n2-m2-kanjis-10-examples-1`: `賃金 (chingin)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Chingin no raise."
- `ja-phase19-n2-n2-m2-kanjis-13-examples-1`: `変換 (henkan)` — ROMAJI_CONTAINS_ENGLISH_WORD: "Data no henkan."

#### 4.4. Alvos P4 — Casos Ambíguos (2 alvos)

- `ja-phase19-n2-n2-m7-kanjis-7-examples-0`: `疑似 (giji)` no texto `"擬似体験。"` (Tipo: ORTHOGRAPHIC_AMBIGUITY)
- `ja-phase19-n2-n2-m14-kanjis-12-examples-0`: `国境越え (kokkyougoe)` no texto `"国境を越える。"` (Tipo: INFLECTIONAL_AMBIGUITY)

---

### 5. CONCLUSÃO DA TRIAGEM E DIRETRIZ PARA O PILOTO CONTROLADO

1. A triagem confirma que os 771 alvos N2 possuem problemas qualitativos heterogêneos.
2. É estritamente vedada a aprovação ou correção automática em lote.
3. Selecionou-se um **Piloto Controlado de exatamente 20 alvos** representativos de todas as categorias e níveis de prioridade para a Etapa N2.1.
4. O resultado da triagem fundamenta diretamente o artefato `tests/N2_EDITORIAL_REVIEW_QUEUE.json`.
