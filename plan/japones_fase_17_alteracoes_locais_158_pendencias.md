# Plano de implementacao - Fase 17: alteracoes locais e 158 pendencias

## Objetivo

Auditar, com evidencia localizada, todas as mudancas japonesas que ja estavam no worktree antes da Fase 16; resolver as 158 leituras N1 e decidir a excecao N5 sem apagar trabalho valido nem forcar consenso.

## Estado de entrada

- Suite funcional: 43/43 grupos de regressao, 21/21 cenarios de integracao e 32/32 cenarios multidioma.
- Backlog automatizado: 158 ocorrencias `reading-pending-human-review` em N1 e uma excecao N5 `kanji-example-missing-target` classificada como `allowed`.
- Alteracoes locais preexistentes em A2, Kanji N5-N1, indices derivados, relatorios e contratos.
- Corpus textual: 21 documentos rastreados, 4.238 paginas PDF e OCR local pesquisavel.
- Audio: explicitamente fora desta fase.

## 1. Congelamento e inventario do baseline local

- Gerar em `scratch/` um patch e hashes dos arquivos modificados antes de qualquer correcao da Fase 17.
- Classificar cada hunk preexistente como:
  - correcao linguistica candidata;
  - migracao tecnica/editorial;
  - indice derivado;
  - atualizacao de snapshot/limite;
  - relatorio gerado.
- Preservar `.txt` fora do commit e nunca incluir `livros/` ou `scratch/`.
- Manter IDs, ordem, contagens, XP, SRS, progresso, favoritos, persistencia e desbloqueio.

## 2. Auditoria das mudancas preexistentes

- A2: conferir a romanizacao com apostrofo de `Kin'en`, o japonês e a traducao relacionados.
- N5 e N4: validar cada leitura, significado, frase, Romaji e quiz alterados; confirmar se a remocao das pendencias reflete evidencia real.
- N3 e N2: validar substituicoes e metadados de revisao, separando conversao mecanica de decisao linguistica.
- N1: validar o mapa ampliado de substituicoes editoriais e impedir que traducoes inglesas sejam tratadas como leituras japonesas.
- Indices: confirmar que dicionario e minigame sao derivados exatos dos datasets canonicos.
- Contratos: atualizar snapshots e limites apenas depois de demonstrar a mudanca canonica correspondente.
- Registrar uma decisao no ledger para todo valor linguistico alterado ou mantido conscientemente.

## 3. Resolucao das 158 leituras N1

- Gerar uma fila estavel a partir de `JAPANESE_EDITORIAL_OCCURRENCES.json`, contendo modulo, indice, caractere, significado, on'yomi, kun'yomi, exemplos e hash anterior.
- Para cada ocorrencia:
  1. localizar o caractere e a leitura no Shinkanzen N1 Kanji quando presente;
  2. conferir a pagina renderizada, nao apenas o OCR;
  3. usar o contexto dos exemplos do dataset para distinguir on'yomi, kun'yomi, nanori, leitura lexical e traducao indevidamente inserida;
  4. recorrer a fonte institucional ou academica permitida quando a fonte local nao resolver o caso;
  5. aplicar Hepburn ASCII somente em campos explicitamente romanizados; campos de leitura japonesa devem permanecer em Kana conforme o contrato do dataset;
  6. registrar `approved`, `corrected`, `unresolved` ou `excluded` com pagina, justificativa e confianca.
- Leituras meramente repetidas, traducoes inglesas e formas impossiveis nao podem ser aprovadas por semelhanca.
- Se duas fontes qualificadas divergirem e o contexto nao resolver, manter `unresolved`.

## 4. Excecao N5

- Revisar o exemplo de homofonia `あめ` no modulo 1.
- Decidir entre:
  - reposicionar como nota pedagogica fora da lista de exemplos do caractere;
  - reescrever com o Kanji-alvo, se houver suporte e se preservar o objetivo;
  - manter como excecao aprovada com justificativa e fonte;
  - excluir se nao pertencer ao objetivo do card.
- Remover a allowlist somente quando a estrutura deixar de exigir excecao; nao mascarar o caso com uma regra ampla.

## 5. Aplicacao e derivacoes

- Fazer correcoes diretamente nos datasets canonicos.
- Regenerar, nesta ordem:
  1. cursos;
  2. dicionario;
  3. minigame Kanji;
  4. Escuta;
  5. Leitura;
  6. Gramatica;
  7. Escrita;
  8. JLPT.
- Atualizar os relatorios editoriais com nomes neutros; manter os caminhos `*_HUMAN_REVIEW.md` somente como compatibilidade temporaria se algum contrato ainda depender deles.
- Itens `approved` e `corrected` deixam de exibir aviso publico de pendencia; `unresolved` continua visivel.

## 6. Contratos e testes

- Exigir 159 decisoes rastreaveis nesta fase: 158 leituras N1 e uma decisao N5.
- Confirmar que cada alvo ainda existe e que o `beforeHash` corresponde ao valor auditado.
- Validar referencias e limites de pagina pelo contrato do ledger.
- Comparar inventarios antes/depois de modulos, caracteres, exemplos, quizzes e respostas.
- Executar:
  - `npm.cmd run audit:japanese:sources:local`;
  - `npm.cmd run audit:japanese:check`;
  - todos os geradores em modo `--check`;
  - `npm.cmd test`;
  - `npm.cmd run test:pwa`;
  - `git diff --check`.
- Confirmar 43/43, 21/21 e 32/32 ou resultados superiores.

## 7. Fechamento automatico

- Criar `tests/FASE_JAPONES_17_ALTERACOES_LOCAIS_158_PENDENCIAS.md`.
- Registrar decisoes por estado, arquivos alterados, fontes/paginas, casos inconclusivos e invariantes.
- Criar o plano decision-complete da Fase 18 - Auditoria integral do curso A1-B2.
- Fazer commit exclusivo da Fase 17, sem `.txt`, `livros/` ou `scratch/`.
- Prosseguir automaticamente para a Fase 18.
