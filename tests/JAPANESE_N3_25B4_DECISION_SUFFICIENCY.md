# PORTÃO DE SUFICIÊNCIA DE DECISÃO & CORRECTION-DELTA — ETAPA 25B.4

## 1. Visão Geral

A Etapa 25B.4 estabelece o portão de evidência em nível de decisão (*decision-level evidence*). Uma alegação isolada de contexto ou a mera presença do caractere no KANJIDIC2 não são mais suficientes para certificar uma alteração como `corrected`. Para que um alvo seja sustentado, é mandatória a prova cumulativa de:
1. **Target Identity**: identidade e existência lexical do composto/vocabulário utilizado.
2. **Correction Delta**: sustentação probatória das correções ortográficas, gramaticais, sintáticas ou colocacionais que transformaram o texto pré-25B na sentença final.
3. **Tradução e Campos Mecânicos**: integridade semântica da tradução e consistência mecânica (`audioText === displayText`, etc.).

---

## 2. Tabela de Suficiência de Decisão dos 18 Targets N3

| Target | Kanji | Palavra | Identity | Delta | Translation | Decision | State |
|---|:---:|:---|:---:|:---:|:---:|:---:|:---:|
| 1 | 港 | 港 (minato) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 2 | 港 | 空港 (kuukou) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 3 | 招 | 招く (maneku) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 4 | 偶 | 偶然 (guuzen) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 5 | 恋 | 恋人 (koibito) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 6 | 寒 | 寒波 (kanpa) | **UNSUPPORTED** | **UNSUPPORTED** | SUPPORTED | **UNSUPPORTED** | `unresolved` |
| 7 | 刷 | 印刷 (insatsu) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 8 | 厚 | 濃厚 (noukou) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 9 | 薄 | 薄い (usui) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 10 | 硬 | 硬い (katai) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 11 | 律 | 自律 (jiritsu) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 12 | 禁 | 禁止 (kinshi) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 13 | 党 | 野党 (yatou) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 14 | 政 | 政治 (seiji) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 15 | 既 | 既婚 (kikon) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 16 | 未 | 未来 (mirai) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 17 | 久 | 久々 (hisahisa) | SUPPORTED | SUPPORTED | SUPPORTED | **SUPPORTED** | `corrected` |
| 18 | 久 | 永久 (eikyuu) | **UNSUPPORTED** | **UNSUPPORTED** | SUPPORTED | **UNSUPPORTED** | `unresolved` |

---

## 3. Tabela Detalhada de Correction Claims

| Target | ID da Claim | Tipo | Claim / Conteúdo do Delta | Evidência | Status |
|---|---|---|---|---|:---:|
| 港 | `claim-m1-k0-ex0-1` | orthography | `大きな船` (kanji regular em substituição ao kana disperso) | `genki-2e-2-textbook:p277` | SUPPORTED |
| 港 | `claim-m1-k0-ex0-2` | collocation | `港に船が泊まる` (verbo natural para navios aportados) | `genki-2e-2-textbook:p277` | SUPPORTED |
| 港 | `claim-m1-k0-ex0-3` | inflection | `泊まっています` (forma contínua/estativa) | `genki-2e-2-textbook:p277` | SUPPORTED |
| 空港 | `claim-m1-k0-ex1-1` | orthography | `到着` (kanji formal substituindo kana) | `genki-2e-2-textbook:p277` | SUPPORTED |
| 空港 | `claim-m1-k0-ex1-2` | inflection | `到着しました` (passado polido natural) | `genki-2e-2-textbook:p277` | SUPPORTED |
| 空港 | `claim-m1-k0-ex1-3` | collocation | `予定より早く空港に到着する` | `genki-2e-2-textbook:p277` | SUPPORTED |
| 招く | `claim-m1-k2-ex0-1` | inflection | `招きます` (inflexão correta godan em substituição ao erro `招います`) | `quartet-1-textbook:p346` | SUPPORTED |
| 招く | `claim-m1-k2-ex0-2` | orthography | `友人 / 家` (ortografia canônica) | `quartet-1-textbook:p346` | SUPPORTED |
| 招く | `claim-m1-k2-ex0-3` | collocation | `友人を家に招く` (convite social a amigos) | `quartet-1-textbook:p346` | SUPPORTED |
| 偶然 | `claim-m1-k7-ex0-1` | inflection | `会いました` (forma polida em substituição ao fragmento `あおうと`) | `quartet-1-textbook:p46` | SUPPORTED |
| 偶然 | `claim-m1-k7-ex0-2` | orthography | `友達 / 駅` | `quartet-1-textbook:p46` | SUPPORTED |
| 偶然 | `claim-m1-k7-ex0-3` | collocation | `偶然昔の友達に会う` (encontro fortuito) | `quartet-1-textbook:p46` | SUPPORTED |
| 恋人 | `claim-m4-k7-ex0-1` | lexical-replacement | `映画を見に行きます` (substituição do fragmento de rascunho por atividade autêntica) | `tobira-2009:p395` | SUPPORTED |
| 恋人 | `claim-m4-k7-ex0-2` | case-particle | `恋人と` (partícula comitativa natural) | `tobira-2009:p395` | SUPPORTED |
| 恋人 | `claim-m4-k7-ex0-3` | collocation | `休日に恋人と映画を見に行く` | `tobira-2009:p395` | SUPPORTED |
| 寒波 | `claim-m9-k11-ex1-1` | collocation | `寒波がやってくる` | Nenhuma fonte catalogada | **UNSUPPORTED** |
| 寒波 | `claim-m9-k11-ex1-2` | orthography | `日本列島 / 強い寒波` | Nenhuma fonte catalogada | **UNSUPPORTED** |
| 印刷 | `claim-m12-k6-ex0-1` | lexical-replacement | `書類` (substituição do resíduo de rascunho `ぱぺル`) | `genki-2e-1-textbook:p17` | SUPPORTED |
| 印刷 | `claim-m12-k6-ex0-2` | collocation | `書類を印刷する` (colocação formal de impressão de documentos) | `genki-2e-1-textbook:p17` | SUPPORTED |
| 印刷 | `claim-m12-k6-ex0-3` | inflection | `印刷します` (desinência polida) | `genki-2e-1-textbook:p17` | SUPPORTED |
| 濃厚 | `claim-m16-k3-ex1-1` | orthography | `スープ` (katakana regular substituindo resíduo misto `そうプ`) | `quartet-2-textbook:p321` | SUPPORTED |
| 濃厚 | `claim-m16-k3-ex1-2` | collocation | `濃厚なスープ` (colocação gastronômica estabelecida) | `quartet-2-textbook:p321` | SUPPORTED |
| 濃厚 | `claim-m16-k3-ex1-3` | grammar-structure | `XはYが特徴です` (estrutura descritiva autêntica) | `quartet-2-textbook:p321` | SUPPORTED |
| 薄い | `claim-m16-k4-ex0-1` | lexical-replacement | `紙` (substituição de `ぱぺル`) | `tobira-2009:p294` | SUPPORTED |
| 薄い | `claim-m16-k4-ex0-2` | collocation | `薄い紙` (papel fino) | `tobira-2009:p294` | SUPPORTED |
| 薄い | `claim-m16-k4-ex0-3` | grammar-structure | `ノートの薄い紙に丁寧に文字を書く` | `tobira-2009:p294` | SUPPORTED |
| 硬い | `claim-m16-k12-ex0-1` | lexical-replacement | `石` (substituição de `スとね`) | `shinkanzen-n1-kanji:p210` | SUPPORTED |
| 硬い | `claim-m16-k12-ex0-2` | collocation | `硬い石` (pedra dura) | `shinkanzen-n1-kanji:p210` | SUPPORTED |
| 硬い | `claim-m16-k12-ex0-3` | orthography | `海岸 / 石` | `shinkanzen-n1-kanji:p210` | SUPPORTED |
| 自律 | `claim-m17-k2-ex1-1` | lexical-replacement | `生活を送ります` (substituição de `ぺルそん`) | `quartet-2-textbook:p356` | SUPPORTED |
| 自律 | `claim-m17-k2-ex1-2` | collocation | `自律した生活` (vida autônoma) | `quartet-2-textbook:p356` | SUPPORTED |
| 自律 | `claim-m17-k2-ex1-3` | grammar-structure | `一人暮らしを始めて...生活を送る` | `quartet-2-textbook:p356` | SUPPORTED |
| 禁止 | `claim-m17-k3-ex0-1` | orthography | `駐車` (kanji substituindo erro `ちゅしゃ`) | `genki-2e-2-textbook:p323` | SUPPORTED |
| 禁止 | `claim-m17-k3-ex0-2` | collocation | `駐車禁止` (composto regulatório) | `genki-2e-2-textbook:p323` | SUPPORTED |
| 禁止 | `claim-m17-k3-ex0-3` | grammar-structure | `〜になっています` (estado prescritivo) | `genki-2e-2-textbook:p323` | SUPPORTED |
| 野党 | `claim-m17-k10-ex1-1` | lexical-replacement | `議論します` (substituição de `でばて`) | `shinkanzen-n1-bunpo:p33` | SUPPORTED |
| 野党 | `claim-m17-k10-ex1-2` | contrast | `与党と野党` (antítese política parlamentar) | `shinkanzen-n1-bunpo:p33` | SUPPORTED |
| 野党 | `claim-m17-k10-ex1-3` | collocation | `政策について議論する` | `shinkanzen-n1-bunpo:p33` | SUPPORTED |
| 政治 | `claim-m17-k18-ex0-1` | lexical-replacement | `深く学んでいます` (substituição de `でばて`) | `tobira-2009:p357` | SUPPORTED |
| 政治 | `claim-m17-k18-ex0-2` | collocation | `日本の政治について学ぶ` | `tobira-2009:p357` | SUPPORTED |
| 政治 | `claim-m17-k18-ex0-3` | grammar-structure | `〜について深く学んでいる` | `tobira-2009:p357` | SUPPORTED |
| 既婚 | `claim-m18-k9-ex1-1` | lexical-replacement | `未婚かを記入します` (substituição de `ぺルそん`) | `shinkanzen-n1-kanji:p109` | SUPPORTED |
| 既婚 | `claim-m18-k9-ex1-2` | contrast | `既婚か未婚か` (diferenciação formal de estado civil) | `shinkanzen-n1-kanji:p109` | SUPPORTED |
| 既婚 | `claim-m18-k9-ex1-3` | collocation | `書類に記入する` | `shinkanzen-n1-kanji:p109` | SUPPORTED |
| 未来 | `claim-m18-k10-ex0-1` | lexical-replacement | `毎日一生懸命勉強します` (substituição de `ドれあム`) | `genki-2e-2-textbook:p297` | SUPPORTED |
| 未来 | `claim-m18-k10-ex0-2` | collocation | `明るい未来` (colocação atestada) | `genki-2e-2-textbook:p297` | SUPPORTED |
| 未来 | `claim-m18-k10-ex0-3` | grammar-structure | `〜のために` (construção de finalidade) | `genki-2e-2-textbook:p297` | SUPPORTED |
| 久々 | `claim-m18-k12-ex0-1` | orthography | `久々に` (remoção do espaçamento indevido `久々 に`) | `shinkanzen-n1-bunpo:p158` | SUPPORTED |
| 久々 | `claim-m18-k12-ex0-2` | inflection | `会って食事をしました` (substituição do fragmento `にあおうと`) | `shinkanzen-n1-bunpo:p158` | SUPPORTED |
| 久々 | `claim-m18-k12-ex0-3` | collocation | `久々に会う` (reencontro após longo tempo) | `shinkanzen-n1-bunpo:p158` | SUPPORTED |
| 永久 | `claim-m18-k12-ex1-1` | collocation | `永久平和を願う` | Nenhuma fonte catalogada | **UNSUPPORTED** |
| 永久 | `claim-m18-k12-ex1-2` | orthography | `永久平和` | Nenhuma fonte catalogada | **UNSUPPORTED** |

---

## 4. Contabilidade Final da Auditoria de Suficiência

```text
18 TARGETS:
Decision sufficient:          16 (88,9%)
Decision insufficient:         2 (11,1% — 寒波, 永久)

LEDGER:
Corrected mantidos:           16
Reabertos para unresolved:     2 (寒波, 永久)

QUEUE:
Antes:  4.604 (3.910 canônicos + 694 derivados)
Depois: 4.606 (3.912 canônicos + 694 derivados)
```
