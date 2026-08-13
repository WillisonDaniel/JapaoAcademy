# Fase Japão 14C — Listas progressivas e Kanji

## Implementação

- `window.JapaneseUI.createProgressiveCollection` foi isolado nos controladores japoneses que o utilizam.
- Leitura, Gramática e Escrita renderizam 12 itens por lote.
- Os filtros reiniciam a coleção sobre o conjunto completo e os links profundos continuam abrindo diretamente o item solicitado.
- O botão informa `Exibindo X de Y`, carrega mais 12 e transfere foco ao primeiro card novo.
- Kanji renderiza 6 cards regulares ou 60 células de revisão por lote.
- Canvases são anexados e inicializados somente por lote; `data-initialized` mantém a idempotência.
- IDs, ordem, datasets, quizzes, SRS, favoritos, XP e desbloqueio foram preservados.

## Evidência

- Mobile 390×844: Leitura 12/91, Gramática 12/194 e Escrita 12/208; após expansão, 24 itens e foco no primeiro novo card.
- Kanji N3 módulo 1: 6/20 cards, 6 canvases presentes e 6 inicializados, sem overflow.
- Contratos Kanji N3/N2/N1 preservam todos os módulos e snapshots.
- Regressão ampliada para 43 grupos.
- O orçamento de script das trilhas foi reajustado apenas pelos bytes do helper progressivo local.

## Próxima fase

O fechamento de PWA, acessibilidade e release está detalhado em `roadmap/FASE_JAPONES_14D_PWA_QA_RELEASE.md`.
