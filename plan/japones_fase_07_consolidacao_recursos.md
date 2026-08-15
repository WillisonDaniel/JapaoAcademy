# Plano de implementação — Fase 7: Consolidação de Kana, dicionário, minigame, escrita e SRS

## Objetivo

Consolidar os recursos japoneses já existentes em uma experiência coerente e rastreável, sem criar autenticação, persistência ou baralhos paralelos. Fechar a dívida mecânica de N5/N4, alinhar Kana, dicionário, minigame, escrita e SRS e preservar todos os dados persistidos.

## Estado de entrada

- Hiragana: 8 módulos, 277 itens e 70 questões.
- Katakana: 8 módulos, 271 itens e 70 questões.
- Dicionário japonês: 3.271 entradas.
- Minigame Kanji: 1.015 cartões, N5–N1.
- PWA: 115 recursos locais.
- Auditoria japonesa: zero bloqueadores e 258 ocorrências editoriais:
  - N1: 158 leituras `pending-human-review`;
  - N4: 89 leituras latinas;
  - N5: cinco leituras latinas, seis exemplos sem alvo e uma exceção documentada.

## Frente 1 — saneamento N5/N4

- Criar snapshot estrutural de N5 e N4.
- Corrigir manualmente os seis exemplos N5 para conter o caractere estudado, preservando significado e traduções.
- Manter a comparação de homófonos do primeiro Kanji N5 como exceção explícita; não removê-la apenas para zerar a contagem.
- Classificar as 94 leituras latinas N5/N4 no mesmo contrato usado no N1.
- Não converter automaticamente valores conceituais ou estrangeiros (`parte`, “conceito histórico”).
- Para Romaji plausível, registrar proposta em Kana, mas manter status `pending-human-review` até aprovação qualificada.
- Exibir o aviso editorial existente nos cards afetados.
- Meta: zero `reading-latin-only`, zero ocorrências editoriais de alvo N5/N4, 94 leituras pendentes e uma exceção permitida.

## Frente 2 — Kana e navegação

- Preservar os 16 módulos, IDs, ordem, quizzes, XP e desbloqueio.
- Auditar links entre hubs, Hiragana, Katakana, dicionário, minigame e revisão SRS.
- Adicionar ao fechamento de cada trilha Kana ações consistentes: revisar no SRS, praticar no minigame e consultar no dicionário.
- Reusar `iniciarRevisaoSRS`, modos `hiragana`/`katakana` e filtros existentes; não criar novos decks.
- Manter a explicação do módulo 6 de Hiragana e a tabela completa do módulo 8.

## Frente 3 — dicionário

- Validar equivalência entre os datasets e o índice de 3.271 entradas.
- Nos cards de Kana/Kanji, apresentar origem e nível reais já existentes no índice.
- Reusar favoritos, áudio e canvas existentes.
- Adicionar ações contextuais somente quando houver destino válido: abrir trilha correspondente e iniciar revisão do deck correto.
- Não carregar datasets integrais na página do dicionário; preservar o índice leve e o orçamento atual.

## Frente 4 — minigame

- Preservar os 1.015 cartões e os modos Hiragana, Katakana, N5–N1 e conjunto Kanji.
- Propagar nível/origem do índice para feedback e acessibilidade.
- Garantir que respostas incorretas possam usar `registrarErroSRS` e que acertos não alterem o algoritmo SRS fora de uma avaliação formal.
- Testar entrada por Kana, Romaji e controles de teclado/touch sem mudar critérios de resposta.
- Manter Wanakana como dependência remota opcional com comportamento offline explícito.

## Frente 5 — escrita e ordem de traços

- Preservar `verificarTracoCanvas`, limiares e XP da Fase 1.
- Unificar os estados “Verificar forma”, “ordem indisponível offline” e “falha online” no curso e dicionário.
- Garantir que ausência de KanjiVG nunca gere vetor inventado.
- Registrar tentativa de escrita como atividade de estudo somente por evento real; não estimar precisão nem alimentar o SRS como resposta correta.
- Tornar o aviso de leitura editorial acessível e visualmente discreto em cards e tabela de revisão.

## Frente 6 — SRS e persistência

- Auditar os sete decks japoneses existentes: curso principal, Hiragana, Katakana e Kanji N5–N1 conforme o registro central.
- Confirmar chaves canônicas, migração, deduplicação, favoritos, caderno de erros, badges e filtros.
- Centralizar apenas mapeamentos duplicados de rótulos/rotas, preservando chaves persistidas e pontes legadas.
- Criar testes ponta a ponta: item do dicionário → favorito → deck correto; erro no minigame → caderno de erros; ação no hub → revisão correta.
- Não criar métricas de domínio, precisão de escrita ou proficiência sem eventos reais.

## Auditoria, testes e desempenho

- Criar `tests/japanese-resources-contract.cjs` e `tests/JAPANESE_KANA_N5_N4_HUMAN_REVIEW.md`.
- Atualizar auditoria japonesa para reconhecer as 94 leituras pendentes e preservar as 158 do N1.
- Regenerar dicionário e minigame somente após mudanças de leitura.
- Preservar snapshots N3/N2/N1 e criar snapshots N5/N4.
- Executar `npm.cmd test` e `git diff --check`.
- Manter os tetos individuais das páginas Kanji e o orçamento leve do dicionário/minigame; qualquer recalibração deve ser específica e medida.

## Validação visual

- 390 px e desktop, temas claro/escuro:
  - Hiragana módulos 6 e 8;
  - Katakana módulo final;
  - dicionário em Kana e Kanji;
  - minigame nos modos Kana e Kanji;
  - Kanji N5 e N4 com leitura pendente;
  - revisão SRS iniciada por cada origem.
- Testar teclado, touch, foco, leitores de tela, áudio, estados offline e zero novos erros no console.
- Se o navegador integrado continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não alterar IDs, chaves SRS, progresso, XP, desbloqueio ou algoritmo SM-2.
- Não introduzir armazenamento, autenticação ou baralhos paralelos.
- Não aprovar conteúdo linguístico por teste mecânico.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_07_CONSOLIDACAO_RECURSOS.md`.
- Criar o plano decision-complete da Fase 8 — Escuta, pronúncia e shadowing.
- Fazer commit exclusivo da Fase 7.
- Prosseguir automaticamente para a Fase 8 nas tarefas que não dependam de revisão humana ou serviços pagos.
