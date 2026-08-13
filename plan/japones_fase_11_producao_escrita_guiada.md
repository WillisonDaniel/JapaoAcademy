# Plano de implementação — Fase 11: Produção escrita guiada

## Objetivo

Transformar os construtores de frase e modelos explicitamente existentes no curso A1–B2 em uma oficina de produção escrita local e rastreável, sem correção aberta por IA, sem alegar naturalidade e sem criar respostas linguísticas que não estejam nos datasets.

## Estado de entrada

- 105 módulos A1–B2, cada um com estruturas de produção e status editorial preservado.
- Player já normaliza `stage3_5_sentenceBuilder` como `sentenceBuilder`.
- Referência gramatical da Fase 10 oferece origens e filtros CEFR independentes de JLPT.
- Não existe avaliador qualificado de texto livre nem serviço externo autorizado.
- Todo conteúdo A1–B2 permanece `pending-human-review`.

## Frente 1 — inventário determinístico

- Criar `tests/japanese-writing-index.cjs`.
- Extrair somente itens A1–B2 que possuam:
  - frase japonesa explícita (`sentenceJp`, ou alias japonês comprovado);
  - tradução explícita;
  - `chunks` explícitos não vazios.
- Registrar ID, CEFR, módulo, índice, título, frase, tradução, blocos, rota e status editorial.
- Excluir itens sem japonês, traduções ausentes, blocos vazios e modelos cuja resposta dependa de placeholder não resolvido.
- Não extrair gabaritos de feedback, alternativas erradas ou texto narrativo.
- Gerar `database/ja-JP/data_escrita_index.js` e snapshot por nível/módulo/status.
- Registrar exclusões e lacunas em `tests/JAPANESE_WRITING_HUMAN_REVIEW.md`; nenhuma exclusão será “corrigida” por inferência.

## Frente 2 — oficina de escrita guiada

- Criar `html/ja-JP/escrita.html` e `js/japanese/writing.js`.
- Adicionar “Escrita guiada” ao hub japonês.
- Filtros por CEFR, módulo e busca em tradução/frase existente.
- Três modos progressivos, todos baseados no mesmo gabarito explícito:
  1. ordenar blocos existentes;
  2. copiar a frase com modelo visível;
  3. reconstruir com modelo oculto e dica de tradução.
- Reutilizar preferência de Romaji apenas quando o índice tiver apoio explícito; não transliterar automaticamente nesta fase.
- Exibir status editorial e link protegido para o módulo real.

## Frente 3 — comparação transparente

- Normalização permitida apenas para comparação mecânica:
  - Unicode NFKC;
  - trim e espaços repetidos;
  - equivalência opcional entre espaços japoneses/ASCII quando a frase de origem já os alterna.
- Resultado deve usar “corresponde ao modelo registrado” ou “difere do modelo registrado”.
- Não usar “correto”, “natural”, “fluente”, “gramaticalmente perfeito” ou nota de proficiência para texto livre.
- Mostrar diferenças por segmentos de texto com nós DOM seguros, sem `innerHTML` interpolado.
- Aceitar somente o modelo explícito como referência; não rejeitar variantes como linguisticamente erradas.

## Frente 4 — atividade e privacidade

- Texto digitado permanece somente na memória da página por padrão.
- Não enviar texto a Firebase, IA, analytics ou terceiros.
- Não criar `localStorage`, banco, autenticação ou histórico paralelo.
- Registrar apenas atividade agregada real ao abrir, ouvir, ordenar ou comparar, deduplicada por sessão; nunca registrar o conteúdo digitado.
- Não conceder XP, não alterar SRS, certificado, desbloqueio ou métricas de acerto.

## Frente 5 — áudio, acessibilidade e offline

- Síntese usa somente a frase japonesa explícita do modelo.
- Áudio deve declarar que é sintetizado; offline sem voz apresenta indisponibilidade segura.
- Blocos operáveis por botão e teclado, com alternativa “mover para cima/baixo” e foco preservado.
- `aria-live` para comparação, instruções associadas ao campo e alvo mínimo de toque.
- Layout responsivo, temas claro/escuro e `prefers-reduced-motion`.
- Cachear página, controlador e índice; atualizar versão do cache.

## Frente 6 — contratos permanentes

- Criar `tests/japanese-writing-contract.cjs`.
- Verificar:
  - índice sincronizado e todas as origens reais;
  - apenas frases, traduções e blocos explícitos são publicados;
  - placeholders dependentes de personalização ficam excluídos/inventariados;
  - normalização é limitada e determinística;
  - comparação não afirma correção linguística de variantes;
  - texto digitado não persiste nem sai do dispositivo;
  - áudio usa somente japonês explícito;
  - nenhuma ação altera XP, SRS, certificado ou bloqueios;
  - origem respeita o fluxo existente do curso;
  - página carrega apenas índice leve;
  - PWA inclui os três recursos novos.
- Ampliar regressão e multidioma com grupo/cenário da Fase 11.

## Validação

- Executar `npm.cmd test` e `git diff --check`.
- Validar visualmente em 390 px e desktop, claro/escuro:
  - filtros e lista;
  - três modos;
  - blocos longos e repetidos;
  - teclado e foco;
  - comparação igual/diferente;
  - status editorial;
  - áudio disponível/indisponível;
  - offline e estado vazio.
- Confirmar zero novos erros no console. Se o navegador integrado continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não implementar correção aberta por IA ou algoritmo gramatical.
- Não inventar frases, variantes, Romaji, tradução ou explicação.
- Não classificar texto livre como natural, correto ou proficiente.
- Não salvar nem transmitir a produção do usuário.
- Não criar XP, SRS, persistência ou autenticação paralelos.
- Não alterar datasets, IDs, respostas, progressão ou desbloqueios existentes.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_11_PRODUCAO_ESCRITA_GUIADA.md`.
- Criar o plano decision-complete da Fase 12 — Preparação JLPT.
- Fazer commit exclusivo da Fase 11.
- Prosseguir automaticamente para a Fase 12 nas tarefas que não dependam de revisão humana.
