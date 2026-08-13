# Fase 3C — Correção editorial B1 e B2

## Estado de entrada

- Commit-base: `738a330` (`feat: corrige conteudo japones A1 e A2`).
- B1: 24 módulos e 89 ocorrências-alvo.
- B2: 20 módulos e 72 ocorrências-alvo.
- Total: 161 ocorrências de guia/diálogo sem escrita japonesa.
- A remoção preexistente de `.txt` permaneceu fora do escopo.

## Implementação concluída

- Migrados os 44 guias B1/B2 para o contrato textual explícito.
- Migradas 121 linhas de diálogo/cenário:
  - 66 falas B1;
  - 55 falas ou cenas B2.
- Criados 44 objetivos `canDo` observáveis.
- Todo módulo B1/B2 recebeu `editorialReview.status = "pending-human-review"`.
- Japonês, áudio, Romaji, tradução e cenário permanecem separados.
- Marcadores `[Seu Nome]` foram removidos do `audioText`.
- Silêncio e aplausos do módulo B2 de apresentação foram convertidos em cenário com áudio vazio.
- O encerramento B2 agora declara apenas entrega do certificado de conclusão da trilha, sem “Master Certificate”.
- Corrigidas formas objetivamente defeituosas do legado, como palavras inglesas inseridas em frases japonesas, flexões romanizadas quebradas e mensagens administrativas sem sentido completo.
- Criada `tests/JAPANESE_B1_B2_HUMAN_REVIEW.md` com 165 contratos:
  - 44 guias;
  - 121 diálogos/cenários.

Os 165 contratos excedem as 161 ocorrências iniciais porque quatro guias que já continham algum caractere japonês também foram normalizados para manter contrato uniforme.

## Resultado da auditoria

| Nível | Antes | Depois |
|---|---:|---:|
| B1 | 89 | 0 |
| B2 | 72 | 0 |
| Total B1/B2 | 161 | 0 |
| Backlog japonês global | 7.688 | 7.527 |

Todos os níveis A1–B2 agora possuem zero ocorrências das regras `audio-guide-no-japanese` e `dialogue-no-japanese`. Não foi criada allowlist ampla.

## Proteções de integridade

- Snapshots estruturais preservados:
  - B1: `1963747d67c549242073eb9f419c3a86fabc82d3b6b2ce5ab19011c54b674dae`;
  - B2: `91f8860fee76d18bd2c958fabc097e5bf3269dde716f6780721f1978e3374dd2`.
- Os snapshots ignoram somente `audio`, `content`, `canDo` e `editorialReview`.
- IDs, ordem, quizzes, respostas, XP e estruturas persistidas continuam idênticos.
- A auditoria exige nos 105 módulos:
  - contrato completo de seis campos para o guia;
  - status exato `pending-human-review`;
  - ausência de marcador de nome no áudio;
  - japonês em fala contratada;
  - distinção entre fala e cenário sem áudio.

## Testes

- Contrato textual: **13/13**.
- Regressão: **32/32**.
- Integração: **20/20**.
- Multidioma: **26/26**.
- Auditoria japonesa: **0 bloqueadores**, 7.527 editoriais restantes.
- Índices de curso, dicionário e minigame: aprovados.
- PWA/offline: **114 recursos**, 10,71 MB, aprovado.
- Suíte completa `npm.cmd test`: aprovada.
- `git diff --check`: aprovado.

O curso japonês carrega 1.657.560 bytes locais, arredondados para 1.619 KB. O teto protegido permanece em 1.620 KB; a margem de aproximadamente 1 KB exige otimização ou carregamento por nível antes de novo crescimento nessa página.

## Validação visual e revisão humana

O navegador integrado voltou a falhar antes de abrir a página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de validação em 390 px/desktop, temas, áudio ouvido ou console. A pendência continua aberta.

As 165 entradas permanecem `pending-human-review`. Testes mecânicos não aprovam naturalidade, registro, dialetos, 敬語 ou nuance cultural.

O plano decision-complete da próxima etapa está em `plan/japones_fase_04_recuperacao_kanji_n3.md`.
