# Fase 18 — Auditoria integral do curso japonês A1–B2

## Resultado executivo

A Fase 18 inventariou e classificou todos os elementos textuais dos 105 módulos do curso principal. Nenhum alvo recebeu aprovação por inferência: itens sem evidência localizada suficiente permanecem `unresolved` e conservam o aviso editorial público do módulo.

| Estado | Alvos |
|---|---:|
| `corrected` | 173 |
| `unresolved` sem alteração aplicada | 2.130 |
| `unresolved` com correção conservadora ainda não aprovada | 12 |
| Total classificado | 2.315 |

## Inventário preservado

| Nível | Módulos | Alvos editoriais |
|---|---:|---:|
| A1 | 31 | 657 |
| A2 | 30 | 699 |
| B1 | 24 | 527 |
| B2 | 20 | 432 |
| Total | 105 | 2.315 |

| Tipo de alvo | Quantidade |
|---|---:|
| Metadados de módulo | 105 |
| Contextos e contratos de áudio | 105 |
| Itens de ensino | 451 |
| Práticas | 563 |
| Construtores de frase | 210 |
| Diálogos | 286 |
| Quizzes | 595 |

IDs, ordem, níveis, quantidade de módulos, XP, desbloqueio, SRS, favoritos, persistência e regras de progresso não foram alterados.

## Correções aplicadas

- sincronização de japonês, `audioText`, Romaji Hepburn ASCII e tradução PT-BR nos contextos revisados;
- correção de leituras e formas como `futte`, `Jugyou`, `Maniaatta`, `chikoku`, `meshiagarimasu`, `meccha`, `ni mo kakawarazu` e `ni hoka naranai`;
- reescrita de diálogos B1/B2 com resíduos ingleses, Romaji corrompido ou tradução desencontrada;
- correção do contexto de `～ことになっている`, que agora expressa uma regra estabelecida em vez de uma previsão meteorológica inadequada;
- correção de exemplos de Kansai-ben e Hakata-ben sem apresentar variação regional como domínio de fala nativa;
- substituição de alegações de “fluência”, “maestria”, “autonomia total” e compreensão “sem legendas” por descrições verificáveis de conteúdo estudado e conclusão da trilha;
- preservação do certificado como registro de conclusão interna, sem equivalência externa.

As decisões corrigidas referenciam páginas localizadas no corpus. Entre as páginas mais usadas estão Genki I gabarito p. 69; Genki II p. 208; Quartet I p. 241; Quartet II p. 109, 151 e 297; Tobira p. 226 e 264; Shinkanzen Bunpō p. 91 e 163. Decisões de naturalidade exigiram duas famílias editoriais independentes.

## Itens ainda inconclusivos

Os 2.142 alvos `unresolved` não são apresentados como linguisticamente aprovados. Eles incluem principalmente explicações extensas, alternativas, consequências de diálogo, construtores de frase e quizzes que ainda precisam de conferência individual por página. Os 12 alvos já saneados, mas ainda inconclusivos, não reuniram a segunda evidência independente exigida para naturalidade.

Como todos os módulos ainda possuem pelo menos um alvo aberto, os 105 mantêm `pending-human-review` por compatibilidade. Esse rótulo será migrado para terminologia editorial neutra na consolidação, sem transformar pendências em aprovação.

## Recursos derivados

- Cursos: 521 módulos globais, sem mudança de inventário.
- Dicionário japonês: 3.271 entradas.
- Minigame Kanji: 1.015 cartões.
- Escuta: 309 itens; 44 diálogos B1/B2 linguisticamente saneados passaram a atender ao contrato mínimo e entraram no índice.
- Leitura: 91 textos e 180 questões.
- Gramática: 194 referências e 13 formas.
- Escrita: 208 modelos, com duas exclusões preservadas.
- JLPT: 1.060 questões, com uma exclusão preservada.

Os limites locais foram recalibrados para 1.690 KB no curso japonês e 415 KB na Escuta. O aumento deriva exclusivamente das correções e dos itens recuperados; não houve nova dependência nem carregamento de dataset integral adicional.

## Testes

- contrato específico da Fase 18: 2.315/2.315 alvos presentes e sincronizados com o ledger;
- auditoria mecânica japonesa: zero bloqueadores e zero ocorrências editoriais conhecidas;
- contratos textuais: 13/13;
- regressão: 43/43 grupos;
- integração: 21/21 cenários;
- multidioma: 37/37 cenários;
- PWA: 132 recursos locais, 11,97 MB;
- corpus: 23 fontes rastreáveis, hashes locais e cobertura integral de OCR válidos.

## Arquivos centrais alterados

- `database/ja-JP/data_curso_a1.js`
- `database/ja-JP/data_curso_a2.js`
- `database/ja-JP/data_curso_b1.js`
- `database/ja-JP/data_curso_b2.js`
- índices derivados japoneses afetados
- `tests/JAPANESE_EDITORIAL_LEDGER.json`
- `tests/japanese-phase18-editorial.cjs`
- contratos de curso, Escuta, regressão e orçamento multidioma

`livros/`, `scratch/` e `.txt` permanecem fora do commit.
