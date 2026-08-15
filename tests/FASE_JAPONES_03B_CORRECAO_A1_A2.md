# Fase 3B — Correção editorial A1 e A2

## Estado de entrada

- Commit-base: `2128229` (`feat: separa contrato textual do curso japones`).
- A1: 31 módulos e 33 ocorrências-alvo.
- A2: 30 módulos e 118 ocorrências-alvo.
- Total: 151 ocorrências de guia/diálogo sem escrita japonesa.
- A remoção preexistente de `.txt` permaneceu fora do escopo.

## Implementação concluída

- Migrados os 61 guias de áudio A1/A2 para o contrato textual.
- Migradas 90 linhas de diálogo/cenário:
  - 2 situações A1 que não representam fala;
  - 88 falas A2 antes apresentadas em Romaji/português.
- Adicionados 61 resultados `canDo`, um por módulo.
- Todo módulo alterado recebeu `editorialReview.status = "pending-human-review"`.
- `[Seu Nome]` permanece disponível no texto exibido, mas foi removido de todos os `audioText`.
- Ação cênica e pausa A1 receberam `audioText` vazio; o player não tenta pronunciá-las.
- Japonês, Romaji, tradução e cenário passaram a ocupar campos independentes.
- Foram corrigidos erros objetivos do legado durante a migração, incluindo grafias associadas a `maasa`, `suportsusimasu`, `Kino`, `Tsuugi`, `kooki`, `kais(u)` e `Coosu Kanryou`.
- Criada a tabela `tests/JAPANESE_A1_A2_HUMAN_REVIEW.md` com as 151 entradas para revisão humana.

## Resultado da auditoria

| Nível | Antes | Depois |
|---|---:|---:|
| A1 | 33 | 0 |
| A2 | 118 | 0 |
| Total A1/A2 | 151 | 0 |
| Backlog japonês global | 7.839 | 7.688 |

A redução de 151 é exata e corresponde somente às regras `audio-guide-no-japanese` e `dialogue-no-japanese`. Nenhuma allowlist ampla foi criada.

## Proteções de integridade

- Snapshots SHA-256 ignorando somente os novos campos editoriais:
  - A1: `52fd4f27dc2b2b8c404773a60f6ef4c9d7fbd4f49454c108a30346f05ad1afbc`;
  - A2: `7a6f6983da1c2e1771ffdcbbbe98e6e3bd89e57c9a9b90ab754d8adcc517b1bf`.
- Os snapshots provam a preservação da estrutura legada, incluindo IDs, ordem, quizzes, respostas e índices corretos.
- A auditoria agora bloqueia:
  - contrato obrigatório ausente nos guias A1/A2;
  - marcador de nome dentro de `audioText`;
  - status editorial diferente de `pending-human-review`;
  - fala contratada sem japonês em `displayText` ou `audioText`.
- Cenários sem fala são reconhecidos explicitamente e não mascaram diálogos inválidos.

## Testes

- Contrato textual: **11/11**.
- Regressão: **31/31**.
- Integração: **20/20**.
- Multidioma: **26/26**.
- Auditoria japonesa: **0 bloqueadores**, 7.688 editoriais restantes.
- Índices de curso, dicionário e minigame: aprovados.
- PWA/offline: **114 recursos**, 10,69 MB, aprovado.
- Suíte completa `npm.cmd test`: aprovada.
- `git diff --check`: aprovado.

O conteúdo editorial acrescentou aproximadamente 18 KB acima do orçamento anterior do curso japonês. O limite protegido foi recalibrado de 1.580 KB para 1.620 KB; o carregamento medido ficou em 1.598 KB. O teste permanece ativo com margem de cerca de 22 KB.

## Validação visual e revisão humana

A inicialização do navegador integrado continua falhando antes de abrir a página com:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de cobertura visual, áudio ouvido ou console inspecionado. Essas verificações permanecem pendentes.

Da mesma forma, `pending-human-review` não equivale a aprovação linguística. A tabela de revisão humana precisa ser analisada por uma pessoa qualificada antes de o japonês novo ser marcado como editorialmente aprovado.

O plano decision-complete da próxima etapa está em `plan/japones_fase_03c_correcao_b1_b2.md`.
