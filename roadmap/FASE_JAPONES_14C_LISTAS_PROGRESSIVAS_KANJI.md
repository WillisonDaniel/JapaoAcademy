# Fase Japão 14C — Listas progressivas e densidade Kanji

## Objetivo

Reduzir o custo inicial e a altura das bibliotecas japonesas e dos módulos Kanji, preservando integralmente dados, regras pedagógicas, progresso e links profundos.

## Helper compartilhado

- Expor `window.JapaneseUI.createProgressiveCollection` por um recurso já carregado nas páginas japonesas, sem aumentar o orçamento de scripts.
- Receber coleção, tamanho do lote, função de renderização, contêiner, rótulo de contagem e botão.
- Oferecer `reset(items)`, `loadMore()`, `revealThrough(predicate)` e consulta do estado atual.
- Após expansão por teclado/clique, mover foco para o primeiro item novo.

## Bibliotecas

- Leitura, Gramática e Escrita começam com 12 cards e acrescentam 12.
- Exibir `Exibindo X de Y` e `Carregar mais` apenas quando houver itens restantes.
- Busca/filtros operam sobre o dataset completo e reiniciam o lote.
- Links profundos revelam o item necessário antes de abri-lo.
- Estado vazio mantém contagem e remove o botão de expansão.

## Kanji

- Módulos regulares começam com 6 cards e acrescentam 6.
- Revisões finais começam com 60 caracteres e acrescentam 60.
- Preservar IDs, ordem, gramática, leitura, quizzes, SRS, favoritos, XP e desbloqueio.
- Inicializar canvas somente após anexar cada lote; `data-initialized` continua sendo a trava idempotente.

## Verificação

- Ampliar a regressão com contratos para o helper, lotes, contagens, filtros, foco e links profundos.
- Validar N3 1/9/18/19, N2 1/10/20/21 e N1 1/12/24/25 em desktop e mobile.
- Confirmar equivalência do total de itens após todas as expansões.
- Executar a suíte completa e `git diff --check`.
- Registrar relatório da Fase 14C, criar o plano detalhado da Fase 14D e fazer commit exclusivo sem `.txt`.
