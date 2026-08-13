# Plano de implementação — Fase 10: Referência gramatical e conjugação

## Objetivo

Transformar as explicações gramaticais e formas verbais já presentes no curso em uma referência pesquisável e rastreável, sem criar regras, paradigmas ou equivalências de nível por inferência.

## Estado de entrada

- 105 módulos A1–B2 com regras, exemplos, práticas e contratos editoriais.
- 92 módulos Kanji com 87 blocos de gramática aplicada nos níveis de referência N5–N1.
- Player com `displayText`, `audioText`, Romaji, tradução e origem separados.
- Não existe hoje um conjugador japonês geral validado editorialmente.
- Conteúdo A1–B2 e N3–N1 permanece total ou parcialmente `pending-human-review`.

## Frente 1 — inventário gramatical

- Criar `tests/japanese-grammar-index.cjs` para mapear:
  - regras explícitas do curso A1–B2;
  - blocos `grammar` das trilhas Kanji;
  - exercícios de conjugação somente quando declaram forma de entrada, forma de saída e resposta.
- Registrar fonte, nível original, módulo, título, regra, fórmula quando existente, exemplos e status editorial.
- Deduplicar apenas entradas textualmente idênticas dentro da mesma origem/nível.
- Não extrair “regras” de feedback, alternativas erradas ou traduções livres.
- Não converter JLPT em CEFR nem CEFR em JLPT.

## Frente 2 — índice e taxonomia conservadora

- Criar `database/ja-JP/data_gramatica_index.js` com duas coleções:
  - `references`: explicações e exemplos existentes;
  - `forms`: pares explícitos de conjugação existentes.
- Usar categorias apenas quando já declaradas no dataset; caso contrário, `sem-categoria`.
- Formas verbais recebem rótulo somente se o dataset o declara; não inferir grupo verbal, transitividade ou irregularidade.
- Snapshot por origem, nível, categoria, módulos e status editorial.
- Inventariar lacunas e conflitos em `tests/JAPANESE_GRAMMAR_HUMAN_REVIEW.md`.

## Frente 3 — página de referência

- Criar `html/ja-JP/gramatica.html` e `js/japanese/grammar.js`.
- Adicionar “Gramática e formas” ao hub japonês.
- Filtros independentes: origem Curso/Aplicada em Kanji, CEFR A1–B2 e referência JLPT N5–N1.
- Busca em título, regra, fórmula e exemplos existentes.
- Cada entrada exibe fonte, status editorial e link para módulo real.
- Carregar apenas o índice gerado, sem importar os datasets completos.

## Frente 4 — visualização de regra

- Renderizar regra, fórmula, exemplo japonês, Romaji e tradução somente quando disponíveis.
- Controles de Furigana/Romaji reutilizam preferências globais; ausência de apoio deve ser declarada.
- Áudio sintetizado usa somente `audioText` explícito; não deve falar fórmula em português como japonês.
- Comparação lado a lado somente para itens explicitamente relacionados por origem/categoria; não criar equivalência sem evidência.
- Sanitizar conteúdo e evitar handlers com texto interpolado.

## Frente 5 — prática de formas, não “conjugador universal”

- Criar um consultor de formas por lookup dos pares explícitos do índice.
- Entrada só retorna resultados para itens conhecidos; estado vazio explica que a ferramenta não conjuga verbos arbitrários.
- Permitir prática local de reconhecimento/seleção com respostas já existentes.
- Não gerar forma por algoritmo nesta fase, pois isso exigiria regras editoriais e exceções ainda não validadas.
- Não atribuir nota de proficiência, XP, SRS ou domínio.

## Frente 6 — integração, acessibilidade e offline

- Links de origem respeitam bloqueios existentes do curso/Kanji.
- Link geral para dicionário; links por termo somente se houver correspondência exata comprovada no índice leve.
- Registrar atividade real ao abrir entrada, ouvir ou responder, deduplicada por sessão.
- Teclado, foco visível, `aria-live`, tabelas responsivas e `prefers-reduced-motion`.
- Cachear página, controlador e índice; offline preserva consulta e informa indisponibilidade de síntese.
- Nenhuma dependência paga, IA externa ou persistência paralela.

## Testes

- Índice determinístico e sincronizado; contagens correspondem aos datasets.
- Cada regra/forma aponta para fonte real e status editorial.
- Nenhuma regra vem de alternativa incorreta ou feedback.
- Nenhuma equivalência CEFR↔JLPT ou classificação verbal inferida.
- Lookup retorna somente formas indexadas e falha de modo seguro para desconhecidas.
- Áudio usa apenas japonês explícito; ausência de apoio não cria fallback inventado.
- Nenhuma ação altera XP, SM-2, certificado ou desbloqueio.
- Página usa índice leve, HTML seguro e rotas válidas.
- PWA inclui os três recursos novos.
- Atualizar regressão/multidioma e executar `npm.cmd test` e `git diff --check`.

## Validação visual

- 390 px e desktop, claro/escuro:
  - lista e busca;
  - filtros CEFR e JLPT separados;
  - regra com/sem fórmula e apoios;
  - tabela de formas longa;
  - lookup conhecido/desconhecido;
  - status editorial e origem bloqueada;
  - áudio disponível/indisponível e offline;
  - teclado, foco e leitor de tela.
- Confirmar zero novos erros no console. Se o navegador interno continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não criar conjugador universal sem base editorial validada.
- Não inferir grupo verbal, irregularidade, equivalência de nível ou regra ausente.
- Não apresentar conteúdo pendente como aprovado.
- Não carregar datasets integrais na página de referência.
- Não criar persistência, autenticação, SRS ou métricas paralelas.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_10_REFERENCIA_GRAMATICAL_CONJUGACAO.md`.
- Criar o plano decision-complete da Fase 11 — Escrita guiada.
- Fazer commit exclusivo da Fase 10.
- Prosseguir automaticamente para a Fase 11 nas tarefas que não dependam de revisão humana.

