# Fase 4 — Recuperação do Kanji N3

## Estado de entrada

- Commit-base: `ce43ace` (`feat: corrige conteudo japones B1 e B2`).
- 19 módulos — 18 de ensino e 1 de revisão.
- 360 registros, 353 caracteres únicos e 720 exemplos.
- 1.409 ocorrências editoriais N3:
  - 684 exemplos sem escrita japonesa;
  - 719 exemplos sem o Kanji-alvo;
  - 4 intrusões inglesas;
  - 2 leituras somente latinas.
- Backlog editorial japonês global: 7.527.
- A remoção preexistente de `.txt` permaneceu fora do escopo.

## Implementação concluída

- Os 720 exemplos N3 receberam contrato explícito com japonês exibido, áudio japonês, Romaji legado, tradução e status `pending-human-review`.
- Os 18 módulos de ensino receberam contrato equivalente para o exemplo gramatical.
- O player Kanji agora prefere o contrato editorial, mantém fallback legado, escapa o conteúdo e envia apenas `audioText` ao TTS.
- Os controles existentes de Romaji e Furigana continuam sendo respeitados.
- Os handlers de áudio novos não usam JavaScript inline.
- As leituras `BOU / BAKU` e `ZOU` foram corrigidas para Kana + Romaji.
- O módulo 19 continua sendo a revisão final N3, mas não alega domínio integral nem usa a contagem imprecisa de 370 Kanji.
- O índice do dicionário foi regenerado e permanece com 3.271 entradas japonesas.

## Natureza editorial do conteúdo

As frases japonesas desta fase são **rascunhos gerados deterministicamente a partir do Romaji legado**. Dez exceções objetivas foram substituídas manualmente quando a conversão não conseguia preservar o Kanji-alvo sem resíduos latinos.

Os testes confirmam escrita japonesa, presença do alvo, separação dos campos e rastreabilidade; eles **não confirmam naturalidade, correção gramatical, registro, colocação lexical, nuance cultural ou adequação real ao N3**. Nenhum dos 738 contratos novos foi marcado como aprovado:

- 720 exemplos;
- 18 exemplos gramaticais.

A fila completa está em `tests/JAPANESE_KANJI_N3_HUMAN_REVIEW.md` e exige revisão humana qualificada antes de aprovação editorial.

## Resultado da auditoria

| Regra N3 | Antes | Depois |
|---|---:|---:|
| Exemplo sem escrita japonesa | 684 | 0 |
| Exemplo sem Kanji-alvo | 719 | 0 |
| Intrusão inglesa | 4 | 0 |
| Leitura somente latina | 2 | 0 |
| Total N3 | 1.409 | 0 |
| Backlog japonês global | 7.527 | 6.118 |

O backlog restante está concentrado em N5/N4/N2/N1; o N2 permanece com 1.491 ocorrências e o N1 com 4.527. Não foi criada allowlist ampla para o N3.

## Proteções de integridade

- Snapshot estrutural N3: `23d00eb9b56f99c918566cfa032ea8b6b4a4501c2c63c99a220a9a4233cd3043`.
- O snapshot ignora somente `content` e `editorialReview`, as duas leituras corrigidas e o texto de transparência autorizado no módulo 19.
- Contagens preservadas: 19 módulos, 360 registros, 353 únicos e 720 exemplos.
- Quizzes, respostas não relacionadas, ordem, progresso, SRS, XP, canvas e desbloqueio permanecem preservados.
- O orçamento da página N3 foi recalibrado de 965 para 971 KB para acomodar o contrato editorial; a carga medida é 993.391 bytes (970,11 KB).
- N5, N4, N2 e N1 mantiveram seus tetos anteriores; N5 mede 699,97 KB sob o teto de 700 KB.

## Testes

- Contrato Kanji N3: **7/7**.
- Contrato textual geral: **13/13**.
- Regressão: **33/33**.
- Integração: **20/20**.
- Multidioma: **26/26**.
- Auditoria japonesa: **0 bloqueadores**, 6.118 ocorrências editoriais restantes.
- Índices de curso, dicionário e minigame: aprovados.
- PWA/offline: **114 recursos**, 10,72 MB, aprovado.
- Suíte completa `npm.cmd test`: aprovada.
- `git diff --check`: aprovado.

## Validação visual e de áudio

O navegador integrado falhou antes de abrir qualquer página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de validação em 390 px/desktop, temas claro/escuro, áudio ouvido ou console. A validação visual dos módulos 1, 9, 18 e 19 permanece pendente.

O plano decision-complete da próxima etapa está em `plan/japones_fase_05_recuperacao_kanji_n2.md`.
