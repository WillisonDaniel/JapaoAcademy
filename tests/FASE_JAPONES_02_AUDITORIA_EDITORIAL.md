# Fase 2 — Auditoria editorial japonesa

## Estado de entrada

- Commit-base da fase: `dba1c1f` (`fix: corrige transparência pedagógica do japonês`).
- Baseline preservado: 105 módulos A1–B2, 16 módulos de Kana, 92 módulos de Kanji, 2.215 registros e 1.267 caracteres Kanji únicos.
- A remoção preexistente de `.txt` permaneceu fora do escopo e do commit.

## Implementação concluída

- Criada a auditoria determinística `tests/japanese-editorial-audit.cjs`.
- Adicionados os comandos `audit:japanese` e `audit:japanese:check`.
- A verificação japonesa passou a integrar o comando completo `npm test`.
- Criados dois artefatos derivados:
  - `tests/JAPANESE_EDITORIAL_OCCURRENCES.json`, para consumo mecânico;
  - `tests/JAPANESE_EDITORIAL_REVIEW.md`, para triagem humana.
- Adicionado um grupo de regressão dedicado ao contrato da auditoria.
- Incluídas fixtures sintéticas em memória para provar detecção e aceitação das regras.
- A allowlist possui somente uma exceção exata, identificada por dataset, módulo, campo, regra e motivo.

Nenhum dataset pedagógico, ID, progresso, SRS ou regra de desbloqueio foi alterado nesta fase.

## Resultado da auditoria

| Classificação | Quantidade |
|---|---:|
| Bloqueadores técnicos | 0 |
| Ocorrências editoriais | 7.839 |
| Exceções documentadas | 1 |
| Total inventariado | 7.840 |

Uma mesma entrada pode aparecer em mais de uma regra. Portanto, o total de ocorrências não representa a quantidade de módulos ou frases distintas que precisam ser reescritos.

### Distribuição por regra

| Regra | Quantidade |
|---|---:|
| Exemplo de Kanji sem o caractere-alvo | 3.449 |
| Exemplo de Kanji sem escrita japonesa | 3.382 |
| Leitura de Kanji somente em alfabeto latino | 663 |
| Diálogo sem escrita japonesa | 211 |
| Guia de áudio sem escrita japonesa | 101 |
| Intrusão de inglês | 34 |

### Distribuição por nível

| Nível | Ocorrências |
|---|---:|
| A1 | 33 |
| A2 | 118 |
| B1 | 89 |
| B2 | 72 |
| N5 | 12 |
| N4 | 89 |
| N3 | 1.409 |
| N2 | 1.491 |
| N1 | 4.527 |

## Verificação

- Auditoria japonesa em modo de escrita: **0 bloqueadores**.
- Auditoria japonesa em modo de verificação: **aprovada**.
- Regressão: **29/29 grupos aprovados**.
- Integração: **20/20 cenários aprovados**.
- Multidioma: **26/26 cenários aprovados**.
- Índices de cursos, dicionário e minigame: **aprovados**.
- PWA/offline: **114 recursos, aprovado**.
- Suíte completa `npm.cmd test`: **aprovada**.

Não houve alteração visual nesta fase; por isso, não foi criada uma nova alegação de cobertura visual. A pendência de validação visual da Fase 1 continua registrada no relatório daquela fase.

## Pendências encaminhadas

- Separar texto exibido, texto de áudio, Furigana, Romaji e tradução no contrato do player.
- Corrigir progressivamente A1–B2 sem alterar IDs e regras de progresso.
- Tratar o grande passivo dos exemplos e leituras N3–N1 em lotes revisáveis.
- Submeter conteúdo japonês novo ou reescrito à revisão editorial humana antes de considerá-lo aprovado linguisticamente.

O plano decision-complete da próxima etapa está em `plan/japones_fase_03a_contrato_textual_player.md`.
