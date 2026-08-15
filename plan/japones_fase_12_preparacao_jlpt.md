# Plano de implementação — Fase 12: Preparação JLPT

## Objetivo

Organizar questões já existentes das trilhas Kanji em sessões de preparação por nível de referência JLPT, com resultados internos transparentes, sem afiliação oficial, sem equivalência CEFR e sem alegar previsão de aprovação no exame.

## Estado de entrada

- Trilhas N5–N1 com 92 módulos, 880 questões de módulo e 181 questões brutas de compreensão.
- A biblioteca da Fase 9 já validou 180 questões de compreensão e excluiu uma resposta N4 que não pertence às opções.
- Os níveis são referências pedagógicas JLPT, não listas oficiais.
- Conteúdo N3–N1 permanece pendente de revisão editorial humana.
- Não existe base local validada para reproduzir pesos, tempos ou escala oficial do JLPT.

## Frente 1 — inventário de questões

- Criar `tests/japanese-jlpt-index.cjs`.
- Extrair somente:
  - questões `quiz` dos módulos Kanji com pergunta e resposta explícitas;
  - questões de compreensão já aceitas pelo mesmo normalizador da Fase 9.
- Para múltipla escolha, exigir que a resposta pertença às opções.
- Para resposta digitada, preservar resposta e tipo originais; não inventar alternativas.
- Registrar nível, módulo, origem (`module-quiz` ou `reading-comprehension`), tipo, pergunta, opções, resposta, rota e status editorial.
- Deduplicar apenas itens textualmente idênticos dentro da mesma origem/módulo.
- Excluir e inventariar itens inválidos em `tests/JAPANESE_JLPT_HUMAN_REVIEW.md`.
- Gerar `database/ja-JP/data_jlpt_pratica_index.js` e snapshot por nível/origem/tipo/status.

## Frente 2 — página de preparação

- Criar `html/ja-JP/jlpt.html` e `js/japanese/jlpt.js`.
- Adicionar “Preparação JLPT” ao hub japonês.
- Avisos públicos:
  - trilha pedagógica por níveis de referência;
  - não é conteúdo oficial nem afiliado ao JLPT;
  - resultado é interno e não prevê aprovação, proficiência ou pontuação oficial.
- Escolha independente de N5–N1, origem e quantidade de 10 ou 20 itens.
- Exibir contagem real disponível antes de iniciar.

## Frente 3 — sessões determinísticas e acessíveis

- Seleção local balanceada por módulos, com ordem determinística derivada do nível e opção escolhida; não usar servidor nem IA.
- Não misturar níveis silenciosamente.
- Questões de escolha usam as opções originais.
- Questões digitadas comparam apenas normalização conservadora: NFKC, trim e caixa para Romaji; nenhuma transliteração ou sinônimo inferido.
- Navegação anterior/próxima, progresso textual, teclado, foco e `aria-live`.
- Temporizador opcional apenas como cronômetro pessoal, sem limite ou alegação de equivalência oficial.
- `prefers-reduced-motion`, alvos de toque e layout responsivo.

## Frente 4 — resultado interno transparente

- Resultado mostra:
  - itens correspondentes ao gabarito armazenado;
  - itens diferentes/não respondidos;
  - detalhamento por origem e nível selecionado.
- Para resposta digitada, usar “corresponde ao gabarito registrado”, não “única resposta correta”.
- Não converter porcentagem em escala JLPT, CEFR, proficiência ou probabilidade de aprovação.
- Linkar cada revisão ao módulo real sem contornar bloqueio.
- Permitir nova sessão local, sem salvar histórico nesta fase.

## Frente 5 — estado, atividade e offline

- Sessão e respostas ficam apenas em memória; reload reinicia a sessão.
- Registrar atividade agregada real ao iniciar, responder e concluir, sem persistir respostas.
- Não alterar XP, SRS, certificado, progresso ou desbloqueios.
- Não criar autenticação, armazenamento, analytics ou sincronização paralelos.
- Cachear página, controlador e índice; atualizar versão do cache.

## Frente 6 — contratos permanentes

- Criar `tests/japanese-jlpt-contract.cjs`.
- Verificar:
  - índice determinístico e sincronizado com os datasets;
  - resposta de escolha sempre pertence às opções;
  - item digitado preserva gabarito explícito;
  - a questão N4 inválida da Fase 9 continua excluída;
  - nenhum nível, alternativa, sinônimo ou regra é inferido;
  - seleção não mistura níveis e é determinística;
  - cronômetro não cria limite oficial;
  - resultado não usa escala, aprovação ou proficiência oficial;
  - respostas não persistem nem são transmitidas;
  - nenhuma ação altera XP, SRS, certificado ou desbloqueios;
  - origens permanecem protegidas;
  - página carrega somente índice leve;
  - PWA inclui os três recursos.
- Ampliar regressão e multidioma.

## Validação

- Executar `npm.cmd test` e `git diff --check`.
- Validar visualmente em 390 px e desktop, claro/escuro:
  - configuração N5–N1;
  - 10/20 itens e origens;
  - escolha e resposta digitada;
  - anterior/próxima e teclado;
  - cronômetro ligado/desligado;
  - resultado e revisão;
  - status editorial, offline e estados vazios.
- Confirmar zero novos erros no console. Se o navegador integrado continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não usar marca, escala, tempo, peso ou composição como se fossem oficiais.
- Não prever aprovação, proficiência ou equivalência CEFR.
- Não inventar questões, opções, respostas, sinônimos ou transliterações.
- Não persistir respostas ou histórico nesta fase.
- Não criar XP, SRS, autenticação ou métricas paralelas.
- Não alterar datasets, IDs, progressão ou bloqueios existentes.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_12_PREPARACAO_JLPT.md`.
- Criar o plano decision-complete da Fase 13 — Hub por habilidades, Dashboard e release.
- Fazer commit exclusivo da Fase 12.
- Prosseguir automaticamente para a Fase 13 nas tarefas que não dependam de revisão humana.
