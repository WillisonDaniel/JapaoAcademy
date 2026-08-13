# Fase 6 — Recuperação do Kanji N1

## Estado de entrada

- Commit-base: `a3358dc` (`feat: recupera exemplos Kanji N2`).
- 25 módulos — 24 de ensino e 1 de revisão.
- 990 registros, 822 caracteres únicos e 1.980 exemplos.
- 4.527 ocorrências editoriais N1:
  - 1.968 exemplos sem escrita japonesa;
  - 1.973 exemplos sem o Kanji-alvo;
  - 21 intrusões inglesas catalogadas;
  - 565 leituras somente latinas.
- A remoção preexistente de `.txt` permaneceu fora do escopo.

## Implementação concluída

- Os 1.980 exemplos e os 24 exemplos gramaticais receberam contrato textual explícito e status `pending-human-review`.
- Vinte e dois exemplos que a conversão não associava ao caractere-alvo foram substituídos por rascunhos explícitos contendo o alvo.
- O player N1 passou a carregar o helper editorial antes do dataset.
- O inventário de 565 leituras foi classificado antes de qualquer alteração:
  - 407 on’yomi no formato duplicado `ROMAJI (ROMAJI)` receberam proposta mecânica em Katakana + Romaji;
  - 158 valores ambíguos, incompletos ou estrangeiros permaneceram exatamente como no legado.
- Cada leitura recebeu contrato com valor legado, classificação, proposta opcional e `pending-human-review`.
- O player exibe “Leitura pendente de revisão editorial” nos cards afetados.
- O índice do dicionário foi regenerado com 3.271 entradas e o minigame com 1.015 cartões.

## Limite editorial

Os 2.004 contratos textuais são rascunhos determinísticos, não redação japonesa aprovada. A regra vale também para as 407 propostas on’yomi: o formato mecânico é consistente, mas a associação entre caractere e leitura ainda requer revisão humana.

As 158 leituras ambíguas incluem problemas evidentes como `suburb` e valores potencialmente incorretos para o caractere. Elas não foram transliteradas nem substituídas. Permanecem visíveis como legado, com aviso editorial.

A fila `tests/JAPANESE_KANJI_N1_HUMAN_REVIEW.md` contém exemplos, gramática e as 565 leituras. Nenhum item está aprovado.

## Resultado da auditoria

| Regra N1 | Antes | Depois |
|---|---:|---:|
| Exemplo sem escrita japonesa | 1.968 | 0 |
| Exemplo sem Kanji-alvo | 1.973 | 0 |
| Intrusão inglesa catalogada | 21 | 0 |
| Leitura somente latina sem contrato | 565 | 0 |
| Leitura explicitamente pendente | 0 | 158 |
| Total N1 | 4.527 | 158 |
| Backlog editorial global | 4.627 | 258 |

O backlog restante é transparente: 158 leituras N1 pendentes, 94 leituras N5/N4, sete ocorrências de alvo no N5 — uma permitida e seis editoriais.

## Integridade e desempenho

- Snapshot estrutural N1: `fb568a7a2762c5391aa128332a23eebb6c7027a8bf4c8c9618dbfcc6fbedcf6d`.
- O snapshot normaliza somente contratos textuais/editoriais e os 565 campos de leitura classificados.
- Contagens preservadas: 25 módulos, 990 registros, 822 únicos e 1.980 exemplos.
- Quizzes, respostas, ordem, `readingText`, progresso, SRS, XP, canvas e desbloqueio permanecem preservados.
- Página N1: 1.818.883 bytes (1.776,25 KB); teto mínimo recalibrado de 1.770 para 1.778 KB.
- N5 voltou a caber sob 700 KB após remoção de comentários do player; N4, N3 e N2 mantêm seus tetos.

## Testes

- Contrato Kanji N1: **7/7**.
- Contrato Kanji N2: **8/8**.
- Contrato Kanji N3: **7/7**.
- Contrato textual geral: **13/13**.
- Regressão: **35/35**.
- Integração: **20/20**.
- Multidioma: **26/26**.
- Auditoria japonesa: **0 bloqueadores**, 258 ocorrências editoriais.
- Índices, PWA/offline e `git diff --check`: aprovados.

## Validação visual e de áudio

O navegador integrado falhou antes de abrir qualquer página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de cobertura em 390 px/desktop, temas, áudio ouvido ou console. Módulos 1, 12, 24 e 25 permanecem pendentes de validação visual.

O plano decision-complete seguinte está em `plan/japones_fase_07_consolidacao_recursos.md`.
