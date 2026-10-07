# Fase 20 — Auditoria editorial dos recursos japoneses derivados

## Cobertura

| Recurso | Registros classificados |
|---|---:|
| Dicionário | 3.271 |
| Minigame Kanji | 1.015 |
| Escuta | 309 |
| Leitura | 91 |
| Gramática, incluindo formas | 207 |
| Escrita | 208 |
| Preparação JLPT | 1.060 |
| Total | 6.161 |

## Resultado

- 55 registros derivados de correções canônicas localizadas foram classificados como `corrected`.
- 6.106 registros permaneceram `unresolved` porque a origem canônica ou uma regra própria do recurso ainda não possui evidência editorial suficiente.
- Nenhum registro inconclusivo foi promovido a aprovado por estar presente em um índice gerado.

Distribuição das correções propagadas:

- Escuta: 50 contextos auditivos derivados de alvos corrigidos do curso.
- Gramática: 3 referências N5 derivadas dos blocos corrigidos na Fase 19.
- JLPT: 2 questões derivadas dos quizzes N5 corrigidos.

Dicionário, Minigame, Leitura e Escrita permanecem integralmente inconclusivos no nível de registro agregado. Isso não significa que todos os seus campos estejam errados: significa que pelo menos uma parte linguística ou regra de montagem ainda depende de um alvo canônico inconclusivo, e por isso o registro completo não foi aprovado por inferência.

## Rastreabilidade e compatibilidade

- Cada registro derivado possui alvo estável, hash final, recurso e decisão no ledger central.
- Correções propagadas apontam para decisões canônicas existentes e reutilizam somente referências localizadas válidas.
- Os índices continuam determinísticos e mantêm suas contagens, IDs públicos, rotas, filtros, lotes, gabaritos e exclusões.
- Os relatórios de Gramática, Escrita e JLPT foram migrados de `*_HUMAN_REVIEW.md` para `*_EDITORIAL_REVIEW.md`.
- Os contratos agora apontam para os nomes neutros; a redação registra decisões inconclusivas sem atribuir a aprovação a uma identidade humana ou automática.

## Integridade preservada

- Nenhuma alteração em AppState, Firebase, SRS, XP, progresso, favoritos, persistência ou desbloqueio.
- Os sete geradores continuam sendo a autoridade dos índices públicos.
- Questões continuam com gabarito presente nas opções; modelos de escrita mantêm blocos equivalentes; formas gramaticais continuam ligadas à referência de origem.

## Validação

- `japanese-phase20-editorial.cjs` cobre os 6.161 registros, hashes, estados, origens e relatórios neutros.
- Contratos individuais dos sete recursos foram executados.
- Suíte completa, PWA e `git diff --check` executados antes do commit exclusivo.
