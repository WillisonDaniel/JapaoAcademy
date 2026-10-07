# Fase 22B — Auditoria editorial da Leitura japonesa

## Resultado

A biblioteca de Leitura foi auditada integralmente a partir dos 91 textos canônicos dos módulos Kanji N5–N1. Todos os textos, perguntas, alternativas e gabaritos agora possuem decisão editorial rastreável e fonte localizada.

| Estado | Textos | Questões | Total canônico |
|---|---:|---:|---:|
| Aprovados | 37 | 164 | 201 |
| Corrigidos | 54 | 17 | 71 |
| Inconclusivos | 0 | 0 | 0 |
| Total | 91 | 181 | 272 |

A pergunta inicial do módulo N4-01, antes excluída porque o gabarito dizia `tanto親切`, foi corrigida para `とても親切` e recuperada. Por isso, o índice de Leitura passou de 180 para **181 questões**, e o banco interno JLPT passou de 1.060 para **1.061 questões**, sem introdução de conteúdo novo.

## Correções editoriais

### N5

- a transmissão histórica dos kanjis foi formulada com maior precisão;
- `Beteu água` foi corrigido para `Bebeu água`;
- a revisão final passou a declarar o inventário real de 104 caracteres únicos, sem alegar domínio pessoal.

### N4

- foram corrigidos Romaji como `tanoshimashu`, `chikakata`, `hataraitemasu`, `shitemasu` e `mochiaruitemasu`;
- traduções como `sobrava um vento`, `loja silenciosa` e `troco de trem` foram naturalizadas em PT-BR;
- `Beteu chá` e `暖か茶` foram corrigidos;
- a revisão final deixou de afirmar “mais de 150” caracteres e passou a informar os **147 caracteres únicos** efetivamente presentes.

### N3

- foram reescritas construções inválidas ou pouco naturais, entre elas `頼まれた務む`, `舞ります`, `未来の季節` e `壊れたものを整えて改めます`;
- a hipótese científica passou de “provar” para `検証する`;
- foram corrigidos Romaji mistos ou incorretos como `wa互i`, `kijiti`, `kite踊rimasu`, `sharp na shiten` e `bassera-re`;
- a tabela final passou a ser uma atividade de conferência de leituras e significados, sem afirmar conclusão automática.

### N2

- foram corrigidos `iiiwatasaremasu`, `kasetu`, `agetasu` e a grafia semântica `利益を追及` → `利益を追求`;
- concordância, voz e naturalidade das traduções foram revistas;
- o contexto acadêmico de `教授` foi alinhado a `大学`.

### N1

- cinco blocos de Romaji que pertenciam a textos diferentes foram realinhados aos respectivos textos canônicos;
- foram corrigidas construções como `不満が醸造され`, `全社を挙げて`, `粗末な風合い` e `古来の教えを研鑽する`;
- traduções de literatura, biologia, diplomacia, estética e geografia foram alinhadas ao japonês;
- `試行錯誤` passou a `shikou-sakugo`;
- a revisão final deixou de alegar que o aluno “aprendeu” os 1.267 caracteres e passou a declarar somente que a trilha os reúne;
- a marcação `ruby`/`rt` foi preservada nos textos corrigidos.

## Rastreabilidade e efeitos derivados

- Fase 19: 6.327 aprovações, 93 correções e 8.479 casos inconclusivos.
- Leitura derivada: 37 aprovações, 54 correções e zero casos inconclusivos.
- JLPT derivado: as 181 perguntas de compreensão estão editorialmente sustentadas; permanecem abertas apenas questões oriundas dos quizzes de módulos ainda não auditados.
- Ledger global: 23.537 alvos; 7.764 aprovados, 1.926 corrigidos e 13.847 inconclusivos.
- Recursos derivados: 6.174 alvos; 230 aprovados, 576 corrigidos e 5.368 inconclusivos.
- O cache PWA foi atualizado para `idiomas-academy-v51`.

IDs, módulos, rotas, SRS, XP, progresso, favoritos, desbloqueio e persistência não foram alterados. Os limites de tamanho continuam protegidos; apenas os orçamentos N4 e do índice leve de Leitura foram ajustados para acomodar as correções rastreáveis.

## Validação

- 91/91 textos com japonês, Romaji e tradução preenchidos;
- 181/181 perguntas com gabarito contido nas alternativas;
- zero Romaji com caracteres japoneses misturados;
- zero marcação HTML fora de `ruby` e `rt`;
- hashes locais das 21 fontes, cobertura de 4.238 páginas e OCR integral validados;
- contratos específicos da Fase 22B aprovados;
- `git diff --check` sem erros de whitespace;
- suíte completa exigida antes do commit.

## Plano decision-complete da Fase 22C — Gramática

1. Auditar as 194 referências gramaticais e as 13 formas pesquisáveis sem misturar CEFR e JLPT.
2. Resolver primeiro os 89 alvos `grammar` dos módulos Kanji N5–N1; as referências do curso A1–B2 continuarão derivadas das decisões já concluídas na Fase 21B.
3. Conferir título, explicação, fórmula, exemplo, tradução e Romaji; naturalidade ou conflito exigirá duas fontes independentes localizadas.
4. Corrigir o dataset canônico antes de regenerar `data_gramatica_index.js`.
5. Manter as 13 formas somente quando sua transformação estiver explicitamente sustentada; não transformar o lookup em conjugador universal.
6. Atualizar hashes e estados no ledger, remover avisos apenas dos itens resolvidos e preservar qualquer caso sem evidência como inconclusivo.
7. Executar contratos de Gramática, suíte completa, `git diff --check`, relatório da fase e commit isolado.
