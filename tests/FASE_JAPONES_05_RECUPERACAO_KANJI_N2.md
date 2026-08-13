# Fase 5 — Recuperação do Kanji N2

## Estado de entrada

- Commit-base: `20dd148` (`feat: recupera exemplos Kanji N3`).
- 21 módulos — 20 de ensino e 1 de revisão.
- 375 registros, 342 caracteres únicos e 750 exemplos.
- 1.491 ocorrências editoriais N2:
  - 730 exemplos sem escrita japonesa;
  - 750 exemplos sem o Kanji-alvo;
  - 9 intrusões inglesas catalogadas;
  - 2 leituras somente latinas.
- Backlog editorial japonês global: 6.118.
- A remoção preexistente de `.txt` permaneceu fora do escopo.

## Implementação concluída

- Os 750 exemplos N2 receberam contrato explícito com escrita japonesa, áudio separado, Romaji legado, tradução e status `pending-human-review`.
- Os 20 módulos de ensino receberam o mesmo contrato para o exemplo gramatical.
- Nove exemplos que não preservavam o Kanji-alvo foram corrigidos explicitamente.
- As leituras `KIN (KIN)` e `DATSU (DATSU)` foram corrigidas para `キン (KIN)` e `ダツ (DATSU)`.
- O módulo 21 agora informa os 375 registros reais e não afirma que 380 Kanji foram integralmente aprendidos.
- A lógica genérica foi extraída para `js/kanji/romaji-draft.js`, carregado somente por N3 e N2.
- O N3 foi migrado para o helper compartilhado mantendo conteúdo e snapshot idênticos.
- O helper inclui fallback fonético em Kana para tokens latinos desconhecidos; esse fallback existe para impedir texto/áudio latino e **não equivale a tradução ou redação japonesa natural**.
- O índice do dicionário foi regenerado e permanece com 3.271 entradas.
- O índice do minigame foi regenerado e permanece com 1.015 cartões.
- O cache offline passou a incluir o helper e agora valida 115 recursos.

## Natureza editorial do conteúdo

Os 770 contratos desta fase são rascunhos determinísticos derivados do Romaji legado:

- 750 exemplos;
- 20 exemplos gramaticais.

Os testes comprovam estrutura, escrita não latina, presença do caractere-alvo, separação do áudio e rastreabilidade. Eles **não comprovam naturalidade, significado real de tokens estrangeiros, gramática, partículas, flexão, registro, nuance cultural ou adequação ao N2**.

Todo conteúdo permanece `pending-human-review`. A fila completa está em `tests/JAPANESE_KANJI_N2_HUMAN_REVIEW.md`; nenhuma linha foi denominada aprovada.

## Resultado da auditoria

| Regra N2 | Antes | Depois |
|---|---:|---:|
| Exemplo sem escrita japonesa | 730 | 0 |
| Exemplo sem Kanji-alvo | 750 | 0 |
| Intrusão inglesa catalogada | 9 | 0 |
| Leitura somente latina | 2 | 0 |
| Total N2 | 1.491 | 0 |
| Backlog japonês global | 6.118 | 4.627 |

O backlog restante é N5/N4/N1. O N1 responde por 4.527 ocorrências. Não foi criada allowlist ampla para o N2.

## Integridade e desempenho

- Snapshot estrutural N2: `5a70dff97bf428118a9c509c9ba54419f9b5a66f5cd4bff20358521426e8d02e`.
- O snapshot ignora somente `content`, `editorialReview`, as duas leituras corrigidas e a transparência autorizada no módulo 21.
- Contagens preservadas: 21 módulos, 375 registros, 342 únicos e 750 exemplos.
- Quizzes, respostas não relacionadas, ordem, progresso, SRS, XP, canvas e desbloqueio permanecem preservados.
- N2: 1.029.685 bytes (1.005,55 KB); teto mínimo recalibrado de 1.000 para 1.007 KB.
- N3: 996.271 bytes (972,92 KB); teto recalibrado de 971 para 974 KB depois da extração do helper.
- N5, N4 e N1 não carregam o helper e mantiveram os tetos anteriores.

## Testes

- Contrato Kanji N2: **8/8**.
- Contrato Kanji N3: **7/7**.
- Contrato textual geral: **13/13**.
- Regressão: **34/34**.
- Integração: **20/20**.
- Multidioma: **26/26**.
- Auditoria japonesa: **0 bloqueadores**, 4.627 ocorrências editoriais restantes.
- Índices de curso, dicionário e minigame: aprovados.
- PWA/offline: **115 recursos**, 10,73 MB, aprovado.
- Suíte completa `npm.cmd test`: aprovada.

## Validação visual e de áudio

O navegador integrado falhou antes de abrir qualquer página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de validação em 390 px/desktop, temas claro/escuro, áudio ouvido ou console. A validação visual dos módulos 1, 10, 20 e 21 permanece pendente.

O plano decision-complete da próxima etapa está em `plan/japones_fase_06_recuperacao_kanji_n1.md`.
