# Fase 21B — Aprovação editorial textual item a item

## Estado atual

A fase foi iniciada pelo curso A1. O primeiro lote cobre integralmente o módulo `a1_mod_01`.

| Resultado do lote inicial | Alvos |
|---|---:|
| Aprovados sem alteração | 6 |
| Corrigidos e aprovados | 15 |
| Inconclusivos restantes no módulo | 0 |
| Total auditado | 21 |

Após regenerar os recursos derivados, o ledger global passou a registrar 6.133 aprovações, 427 correções e 16.974 casos inconclusivos. A redução inicial foi de 24 pendências: 21 alvos canônicos e três projeções determinísticas em Escuta e Escrita.

## Evidência inspecionada

- Genki I, 2ª edição, p. 35: saudações, Romaji e significados.
- Genki I, 2ª edição, p. 42–43: padrão nominal `X は Y です` e formação de perguntas com `か`.
- Quartet I, 1ª edição, p. 47: apresentação pessoal e uso contextual de `です`, como segunda família editorial.

As páginas foram renderizadas e verificadas visualmente; os PNGs permanecem em `scratch/phase21b-source-review/`.

## Correções do módulo A1-01

- Remoção de horários apresentados como fronteiras universais para saudações.
- `です` deixou de ser descrito como equivalente geral aos verbos “ser/estar”.
- O padrão passou a ser apresentado como `X は Y です`, com predicado nominal polido.
- Absolutos como “sempre no final”, “estrutura perfeita” e “nunca pode vir” foram removidos.
- `カロス` foi corrigido para `カルロス`.
- Diálogos e feedbacks foram normalizados em japonês, pontuação e registro.
- Apresentações desnecessárias na padaria e no ryokan foram removidas das respostas corretas.
- Quizzes e práticas foram sincronizados com a explicação corrigida.

## Integridade

- IDs, ordem, XP, desbloqueio, SRS, progresso, favoritos e persistência foram preservados.
- O aviso editorial foi removido somente do módulo A1-01, porque seus 21 alvos estão sustentados.
- Os outros 30 módulos A1 permanecem inconclusivos e continuam sinalizados.

## Lote A1-02

| Resultado | Alvos |
|---|---:|
| Aprovados sem alteração | 1 |
| Corrigidos e aprovados | 20 |
| Inconclusivos restantes no módulo | 0 |
| Total auditado | 21 |

O módulo de primeiras apresentações foi conferido nas mesmas duas famílias editoriais. Foram removidas alegações universais sobre uma fórmula obrigatória, corrigidos `じめまして`, `[Seu Nome]・さん`, pontuação, Romaji de `こちらこそ` e respostas pouco naturais. O módulo agora distingue um modelo frequente de uma regra absoluta.

Após a propagação, o ledger global contém 6.134 aprovações, 450 correções e 16.950 casos inconclusivos. Os dois primeiros módulos somam 42 alvos canônicos sustentados e seis projeções derivadas retiradas da fila aberta.

## Lote A1-03

| Resultado | Alvos |
|---|---:|
| Aprovados sem alteração | 2 |
| Corrigidos e aprovados | 19 |
| Inconclusivos restantes no módulo | 0 |
| Total auditado | 21 |

O módulo foi conferido em Genki I, p. 35, e Tobira, p. 58. Foram normalizados registro e significado de `ありがとうございます`, `すみません` e `ごめんなさい`; removidas metáforas e absolutos; corrigidos diálogos e gabaritos; e substituídos dois exercícios de escrita que não correspondiam ao tema do módulo.

O ledger global passou a 6.136 aprovações, 471 correções e 16.927 casos inconclusivos. A redução adicional é de 23 pendências: 20 alvos canônicos anteriormente abertos e três projeções derivadas.

## Lote A1-04

| Resultado | Alvos |
|---|---:|
| Aprovados sem alteração | 2 |
| Corrigidos e aprovados | 20 |
| Inconclusivos restantes no módulo | 0 |
| Total auditado | 22 |

O módulo foi conferido em Genki I, p. 35–36, e Tobira, p. 50. A revisão passou a tratar `さようなら` como despedida dependente de contexto — e não como um “adeus final” obrigatório —, regularizou a romanização de `じゃあね`, corrigiu o significado de `おつかれさまでした` e tornou situações profissionais e casuais menos absolutas. Os dois exercícios de montagem agora praticam despedidas do próprio módulo.

Após a propagação, o ledger global contém 6.138 aprovações, 494 correções e 16.902 casos inconclusivos. Os quatro módulos já auditados somam 85 alvos canônicos sustentados; a redução neste lote foi de 25 pendências canônicas e três projeções derivadas.

## Próximo lote automático

Continuar no módulo A1-05 e seguintes, repetindo localização de fonte, correção, ledger, testes e remoção granular de avisos.

Como este lote altera datasets públicos e índices derivados, o cache PWA foi atualizado para `idiomas-academy-v47`. O asset visual permanece em `v46`, pois não houve alteração de CSS.
