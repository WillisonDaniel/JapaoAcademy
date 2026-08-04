# Etapa 28A — Auditoria de UX e estados atuais

Data da auditoria: 02/08/2026  
Escopo: diagnóstico somente, sem alteração de código funcional  
Ambiente visual: navegador integrado, servidor local em `http://127.0.0.1:8767`, viewport desktop de 1280 × 720 px

## Resumo executivo

As 19 páginas HTML foram abertas e inspecionadas. Não foram encontrados erros novos no Console, imagens quebradas ou rolagem horizontal no viewport desktop utilizado. A aplicação possui bons feedbacks pontuais para quizzes, pronúncia e conclusão da revisão SRS, mas não tem um padrão compartilhado para carregamento, salvamento, sincronização, estados vazios, erros recuperáveis e modais acessíveis.

O principal achado transversal é que nenhuma das 19 páginas apresentou `aria-busy`. As operações de autenticação e nuvem não desabilitam seus botões durante a execução, e a gravação local/sincronização silenciosa não possui indicador persistente. Também foram observados campos sem rótulo programático e modais sem semântica de diálogo ou gerenciamento de foco.

## Método e baseline

- Inventário estático dos 19 documentos HTML e dos componentes compartilhados de UX.
- Inspeção visual individual das 19 páginas em 1280 × 720 px.
- Inspeção de Console, imagens, overflow horizontal, campos, botões e atributos ARIA.
- Exercícios dirigidos: filtros SRS, modal de opções, busca sem resultados no dicionário e modal de conquistas.
- Teste automatizado de regressão: **12/12 grupos aprovados**.
- Teste automatizado de integração: **5/5 cenários aprovados**.
- Console no percurso auditado: **0 `ReferenceError`, 0 `TypeError`, 0 rejeição não tratada e 0 `console.error` novo**.

## Inventário por página

| Página/Módulo | Estado atual | Problema de UX | Melhoria segura proposta |
| --- | --- | --- | --- |
| `index.html` — painel principal | Cards, progresso e acesso às conquistas são exibidos diretamente. | Não há estado inicial de carregamento; o modal de conquistas mostra 35 cards bloqueados sem resumo ou orientação quando nenhum foi liberado. | Skeleton curto apenas durante dados realmente pendentes; resumo vazio com próximo passo; semântica e foco do modal. |
| `hub_japones.html` | Trilhas e cards são renderizados de uma vez. | Não comunica montagem/carregamento e não destaca de forma consistente desbloqueios recentes. | Skeleton estável para trilhas/cards e destaque breve do conteúdo recém-desbloqueado. |
| `hub_ingles.html` | Trilhas e cards são renderizados de uma vez. | Mesmos estados ausentes do hub japonês. | Reutilizar os mesmos componentes visuais e textos do hub japonês. |
| `html/ja-JP/curso.html` | Painel SRS exibe contagem e instrução; módulos aparecem diretamente. | Ausência de `aria-busy`; estado vazio usa ação “Iniciar Revisão” mesmo sem cards; filtro SRS auditado não atualizou a orientação visual. | Estado vazio com ação real, anúncio acessível e skeleton somente durante compilação; registrar inconsistência do filtro fora do escopo UX. |
| `html/en-US/curso_ingles.html` | Estrutura equivalente ao curso japonês. | Mesmas lacunas de carregamento, ação vazia e anúncio. | Aplicar o componente compartilhado do curso japonês. |
| `html/ja-JP/hiragana.html` | Conteúdo e quizzes aparecem diretamente; feedback do quiz usa regiões ao vivo. | Dez campos visíveis do quiz não tinham rótulo programático; sem transição/estado de montagem. | Associar rótulos sem mudar layout e usar entrada leve dos cards. |
| `html/ja-JP/katakana.html` | Conteúdo e quizzes aparecem diretamente; feedback do quiz usa regiões ao vivo. | Dez campos visíveis do quiz não tinham rótulo programático; sem transição/estado de montagem. | Mesmo padrão acessível e visual do Hiragana. |
| `html/ja-JP/kanji.html` | Hub de níveis carregado diretamente. | Não diferencia carregamento real de estado pronto e não anuncia desbloqueios. | Skeleton de cards, `aria-busy` no contêiner e destaque breve de desbloqueio. |
| `html/ja-JP/kanji_n5.html` | Módulos e quiz são exibidos diretamente. | Quatro campos visíveis do quiz sem rótulo programático; possível troca visual tardia do cabeçalho de autenticação. | Rótulos associados e placeholder estável no cabeçalho enquanto o estado de autenticação é resolvido. |
| `html/ja-JP/kanji_n4.html` | Módulos e quiz são exibidos diretamente. | Cinco campos visíveis do quiz sem rótulo programático; sem estado de montagem. | Rótulos associados e entrada leve dos cards. |
| `html/ja-JP/kanji_n3.html` | Grande conjunto de conteúdo renderizado no DOM (aprox. 1.458 nós na tela auditada). | Custo visual/DOM elevado; não há percepção intermediária de carregamento. | Adicionar feedback durante trabalho real e animar somente o primeiro lote, sem timers artificiais nem recriação de DOM. |
| `html/ja-JP/kanji_n2.html` | Grande conjunto de conteúdo renderizado no DOM (aprox. 1.407 nós). | Mesma lacuna de percepção e risco de animações excessivas. | Skeleton mínimo e animações limitadas aos elementos que entram em uso. |
| `html/ja-JP/kanji_n1.html` | Maior página auditada (aprox. 2.584 nós e 533 botões visíveis). | Qualquer animação em massa pode degradar desempenho e acessibilidade. | Evitar animação por item; usar estado de contêiner e transição agregada. |
| `html/ja-JP/dicionario.html` | Glossário é compilado e renderizado; busca sem resultado mostra uma linha. | Sem `aria-busy` ou skeleton; busca sem resultados não tem explicação/ação nem anúncio; campo de busca sem rótulo programático; IDs duplicados com o modal global. | Skeleton durante compilação real, estado vazio completo, rótulo e região ao vivo; impedir duplicação do componente global nesta página. |
| `html/en-US/dicionario_ingles.html` | Comportamento equivalente ao dicionário japonês. | Mesmas lacunas de carregamento, vazio, rótulo e IDs. | Reutilizar o mesmo componente acessível do dicionário japonês. |
| `html/ja-JP/minigame.html` | Cards e ações aparecem diretamente. | Não há feedback compartilhado de preparação/erro recuperável. | Estado breve apenas se houver inicialização real; mensagens padronizadas para falhas recuperáveis. |
| `html/en-US/minigame_ingles.html` | Cards e ações aparecem diretamente. | Mesma ausência de padrão do minigame japonês. | Reutilizar estados e transições do minigame japonês. |
| `html/en-US/phrasal_verbs.html` | Conteúdo e filtros aparecem diretamente. | Sem estado de carregamento ou ausência de resultados padronizada. | `aria-busy` durante trabalho real, transição curta de filtros e estado vazio útil. |
| `html/en-US/pronuncia_ingles.html` | Botão muda durante escuta e há mensagens de acerto/erro. | Campo de busca sem rótulo programático; erro pode expor código técnico; falha ao iniciar reconhecimento pode terminar sem orientação; áudio sintetizado não informa indisponibilidade/falha. | Rótulo, mensagens amigáveis com ação de recuperação e detalhes apenas no Console. |

## Inventário dos estados compartilhados

| Estado | Situação atual | Problema de UX | Melhoria proposta para a subetapa indicada |
| --- | --- | --- | --- |
| Carregamento inicial | Inicializadores e renderizações executam sem indicador comum. | Área pode parecer vazia ou pronta antes da conclusão; 0 usos de `aria-busy` nas 19 páginas. | 28B: componente skeleton reutilizável e `aria-busy`, sem atraso artificial. |
| Compilação do dicionário | Compilação síncrona seguida da renderização. | Não há feedback visual nem anúncio acessível. | 28B: skeleton estável enquanto o trabalho real ocorre; remoção imediata ao terminar. |
| Trilhas e cards de módulos | Conteúdo aparece diretamente. | Falta percepção de preparação e a troca tardia do estado autenticado pode causar oscilação no cabeçalho. | 28B: placeholders dimensionados e estado estável do cabeçalho. |
| Nenhuma revisão pendente | Painel mostra zero cards e texto genérico. | Botão continua sugerindo iniciar uma sessão impossível; ao clicar, usa alerta nativo. | 28D: estado vazio completo sem botão inválido e ação recomendada real. |
| Favoritos e caderno de erros vazios | A inicialização usa alertas nativos. | Feedback bloqueia a navegação e não integra título, explicação e ação. | 28D: estado inline no painel SRS e anúncio acessível. |
| Fim da revisão SRS | Já apresenta título, quantidade revisada, XP e retorno ao hub. | Falta apenas harmonização visual e foco acessível. | 28E: preservar o fluxo e ajustar transição/foco. |
| Busca sem resultados | Dicionário mostra “Nenhum resultado encontrado para a busca”. | Não oferece explicação, limpar filtros ou anúncio; contador não usa `aria-live`. | 28D: título, explicação, ação real e região ao vivo. |
| Favoritos, erros, atividades e backup vazios | Não existe padrão único entre áreas. | Textos e ações variam ou não existem. | 28D: componente de estado vazio reutilizável com conteúdo específico. |
| Salvamento local | Gravação acontece silenciosamente. | Usuário não sabe se a ação terminou. | 28C: indicador discreto “Salvo localmente”, sem toast por gravação silenciosa. |
| Sincronização Firebase | Sincronização silenciosa registra falha apenas no Console; ações manuais usam toast. | Não há status persistente “sincronizando/sincronizado/offline/falha”. | 28C: indicador no cabeçalho/usuário sem alterar persistência. |
| Login, cadastro e Google | Toast após resultado; botão permanece disponível durante a promessa. | Clique duplo possível e ausência de “Entrando/Criando conta”. | 28C: invólucro visual que desabilita e sempre restaura o botão. |
| Salvar/carregar nuvem | Toast após resultado; botões não mudam durante a operação. | Ação pode ser repetida e falta progresso. | 28C: “Salvando/Carregando” e restauração em `finally`. |
| Resetar progresso | Confirmação e alerta nativo de sucesso. | Feedback bloqueante e inconsistente com o sistema existente. | 28C/28D: estado de botão e toast existente, sem mudar confirmação/regra. |
| Conclusão e desbloqueio | Conclusão de módulo já gera XP e toast; SRS tem bom resumo. | Próximo módulo não recebe destaque consistente nem próximo passo recomendado. | 28E: realce curto, resumo e recomendação não bloqueante. |
| Conquistas | Toast/confete ao desbloquear; modal lista todos os cards bloqueados. | Zero conquistas não é explicado como estado vazio. | 28D/28E: resumo vazio e foco acessível, preservando desbloqueio. |
| Áudio | Fala sintetizada não apresenta erro ao usuário quando indisponível. | Falha parece clique sem resposta. | 28D: mensagem amigável e tentativa novamente quando aplicável. |
| Reconhecimento de voz | Possui estado “escutando” e aviso de incompatibilidade. | Alguns erros exibem código técnico; exceção ao iniciar pode ficar silenciosa. | 28D: categorias amigáveis e recuperação, mantendo detalhes no Console. |
| Offline | Eventos usam notificações transitórias. | Não há indicador discreto e persistente do estado atual. | 28C: integrar “Offline” ao indicador de sincronização. |
| Toasts | Existe um único sistema com `role="alert"` e `aria-live="polite"`. | Sem categorias estruturadas, deduplicação/fila limitada ou fechamento manual de erros importantes. | 28E: evoluir o sistema existente; não criar outro. |
| Modais | Escape fecha os modais. | Sem `role="dialog"`, `aria-modal`, foco inicial e retorno de foco; alguns campos não têm rótulo associado. | 28E: semântica e gerenciamento de foco sem alterar layout. |
| Foco e movimento reduzido | Há estilos `:focus` pontuais. | Não há padrão `:focus-visible` nem regra `prefers-reduced-motion`. | 28E: foco consistente e desativação/redução centralizada das animações. |

## Evidências e riscos prioritários

1. **Carregamento acessível:** nenhum contêiner auditado utilizou `aria-busy`; skeletons devem representar somente operações reais.
2. **Acessibilidade de formulários:** foram observados campos sem rótulo programático em autenticação/opções, dicionários, pronúncia e quizzes de Hiragana, Katakana, Kanji N5 e N4.
3. **Modais:** Escape funciona, porém os modais auditados não anunciam diálogo, não recebem foco inicial e não devolvem foco ao acionador.
4. **IDs duplicados:** o dicionário global injetado e as páginas de dicionário usam `dict-search-input` e `dict-results-container`, gerando dois elementos com o mesmo ID.
5. **Sincronização:** salvamento local e sincronização silenciosa não comunicam estado; falhas silenciosas ficam somente no Console.
6. **Erros técnicos:** autenticação/nuvem e reconhecimento de voz podem inserir a mensagem/código técnico diretamente no toast.
7. **Performance visual:** Kanji N1, N2 e N3 têm DOM grande; animações item a item e skeletons excessivos são contraindicados.
8. **Inconsistência funcional observada:** a seleção visual dos filtros “Favoritos/Caderno de Erros” no painel SRS não atualizou a orientação exibida durante o reteste. Por envolver estado funcional, o problema deve ser corrigido em uma etapa de bugfix separada ou mediante autorização específica, não misturado às melhorias visuais da Etapa 28.

## Priorização para as próximas subetapas

### 28B — Skeletons e carregamentos

- Criar estilos/componentes reutilizáveis, com tema claro/escuro e movimento reduzido.
- Aplicar primeiro a dicionários, trilhas/cards, painel SRS e áreas de ranking/conquistas.
- Instrumentar `aria-busy` no contêiner correto e preservar dimensões para evitar salto de layout.
- Não adicionar timers artificiais e não animar individualmente centenas de cards Kanji.

### 28C — Feedback de botões e sincronização

- Criar utilitário visual de estado de botão sem alterar a função de negócio.
- Cobrir autenticação, nuvem, início de revisão, conclusão e certificado onde existente.
- Adicionar indicador discreto para local, sincronizando, sincronizado, falha e offline.

### 28D — Estados vazios e erros

- Padronizar SRS, dicionários, favoritos, erros, conquistas, atividade e backup inexistente.
- Trocar alertas de vazio por feedback inline/toast existente quando não alterar o fluxo.
- Manter detalhes técnicos no Console e oferecer recuperação real ao usuário.

### 28E — Transições e acessibilidade

- Evoluir o toast existente com categorias, deduplicação e fechamento manual de erros importantes.
- Corrigir rótulos, foco visível, semântica/foco de modais e regiões ao vivo.
- Usar transições de 120–250 ms com `opacity`/`transform` e `prefers-reduced-motion`.

### 28F — Responsividade e validação final

- Executar a matriz completa em 360, 390, 768, 1024 px e desktop amplo.
- Medir overflow, foco, modais, tabelas, ranking, certificado e custo de DOM/animações.
- Corrigir somente problemas comprovados e repetir os testes automatizados e visuais nas 19 páginas.

## Resultado da subetapa 28A

1. Arquivos funcionais modificados: **0**.
2. Arquivo de documentação adicionado: **1** (`tests/ETAPA_28A_AUDITORIA_UX.md`).
3. Estados de carregamento adicionados: **0** — diagnóstico somente.
4. Estados vazios adicionados: **0** — diagnóstico somente.
5. Fluxos com novo feedback visual: **0** — diagnóstico somente.
6. Problemas de acessibilidade corrigidos: **0** — diagnóstico somente.
7. Problemas responsivos corrigidos: **0** — diagnóstico somente.
8. Alteração de regra de negócio: **não**.
9. Alteração funcional: **não**.
10. Regressão observada: **não nos testes automatizados ou no percurso visual auditado**.
11. Impacto na performance: **nenhum nesta subetapa**.
12. Resultado das páginas: **19/19 abriram sem erro novo no Console, imagem quebrada ou overflow horizontal em 1280 × 720 px**.
13. Comparativo antes/depois: **não aplicável à 28A, pois nenhuma interface foi alterada**.
14. Melhorias futuras não implementadas: todo o backlog das subetapas 28B–28F acima.

## Limite da validação desta subetapa

A inspeção visual da 28A estabeleceu o baseline desktop. A matriz responsiva completa e os retestes finais pertencem à 28F conforme a ordem obrigatória definida para a Etapa 28. Nenhuma implementação da 28B ou posterior foi iniciada.
