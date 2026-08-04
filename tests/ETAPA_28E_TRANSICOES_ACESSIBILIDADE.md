# ETAPA 28E — Transições e acessibilidade

Data da validação: 03/08/2026

## Resultado

A subetapa 28E foi concluída dentro do modo Safe UX Enhancement. Foram adicionadas transições leves, sem timers artificiais de carregamento, e corrigidos os principais contratos de acessibilidade de foco, diálogos, formulários, filtros e notificações. Nenhuma regra de negócio, dataset, estrutura do AppState, persistência, autenticação ou rota foi alterada.

## Escopo implementado

- Foco visível global para links, botões, campos e elementos com `tabindex`.
- Gerenciador reutilizável de diálogos com `role="dialog"`, `aria-modal`, nome acessível, foco inicial, retenção de Tab, Escape e retorno do foco ao acionador.
- Abas de autenticação com `tablist`, `tab`, `tabpanel`, `aria-selected` e navegação por setas, Home e End.
- Associação de labels nos formulários de autenticação e opções.
- Nomes acessíveis nos campos de busca, minigames e respostas textuais de quizzes.
- Estados `aria-pressed` nos filtros do dicionário e modos SRS.
- Prevenção da injeção do modal de dicionário em páginas que já possuem o dicionário dedicado, eliminando IDs duplicados.
- Sistema de toast existente padronizado em sucesso, informação, aviso e erro, com deduplicação, fila, limite de três notificações simultâneas, regiões vivas e fechamento manual para erros.
- Transições de 180–220 ms baseadas em `opacity` e `transform` na entrada de conteúdo, respostas, cards e diálogos.
- Respeito global a `prefers-reduced-motion: reduce`.
- Cache visual atualizado para `style.css?v=28e` nas 19 páginas e service worker `japao-academy-v6`.

## Contagem da subetapa

| Métrica | Resultado |
| --- | ---: |
| Arquivos modificados pela 28E | 33 |
| Páginas HTML atualizadas | 19 |
| Arquivos JavaScript atualizados | 10 |
| Folhas/cache/testes/relatório | 4 |
| Fluxos com transição leve | 7 |
| Classes de problemas de acessibilidade corrigidas | 19 |
| Categorias de toast padronizadas | 4 |
| Regras de negócio alteradas | 0 |
| Alterações funcionais de fluxo | 0 |
| Regressões encontradas | 0 |

## Arquivos modificados

### HTML — 19 páginas

- `index.html`
- `hub_japones.html`
- `hub_ingles.html`
- `html/ja-JP/curso.html`
- `html/ja-JP/dicionario.html`
- `html/ja-JP/hiragana.html`
- `html/ja-JP/katakana.html`
- `html/ja-JP/kanji.html`
- `html/ja-JP/kanji_n5.html`
- `html/ja-JP/kanji_n4.html`
- `html/ja-JP/kanji_n3.html`
- `html/ja-JP/kanji_n2.html`
- `html/ja-JP/kanji_n1.html`
- `html/ja-JP/minigame.html`
- `html/en-US/curso_ingles.html`
- `html/en-US/dicionario_ingles.html`
- `html/en-US/phrasal_verbs.html`
- `html/en-US/pronuncia_ingles.html`
- `html/en-US/minigame_ingles.html`

### JavaScript — 10 arquivos

- `js/core/toast.js`
- `js/core/dom.js`
- `js/core/dictionary.js`
- `js/core/utils.js`
- `js/course/course.js`
- `js/course/quiz.js`
- `js/game/ranking.js`
- `js/game/xp.js`
- `js/srs/deck.js`
- `js/srs/review.js`

### Estilo, cache e testes — 4 arquivos

- `style.css`
- `sw.js`
- `tests/regression.cjs`
- `tests/ETAPA_28E_TRANSICOES_ACESSIBILIDADE.md`

## Problemas de acessibilidade corrigidos

1. Ausência de foco visível consistente.
2. Modais sem semântica uniforme de diálogo.
3. Modais sem nome acessível uniforme.
4. Foco inicial não direcionado ao conteúdo aberto.
5. Tabulação capaz de escapar do modal.
6. Foco não devolvido ao acionador após o fechamento.
7. Fechamento por Escape sem integração com o controle de foco.
8. Botões de fechar sem nome acessível em diálogos prioritários.
9. Campos de autenticação sem associação explícita de label.
10. Campos das opções sem associação explícita de label.
11. Buscas prioritárias dependentes apenas de placeholder.
12. Respostas de minigames sem nome acessível.
13. Respostas textuais de quizzes sem nome acessível.
14. Abas de autenticação sem papéis e estados ARIA.
15. Abas de autenticação sem navegação por setas/Home/End.
16. Filtros do dicionário sem estado pressionado anunciado.
17. Modos do SRS sem estado pressionado anunciado.
18. Toasts sem distinção adequada entre `status` e `alert` e sem fechamento manual de erro.
19. Modal duplicado do dicionário gerando IDs repetidos na página dedicada.

## Transições aplicadas

| Fluxo | Antes | Depois |
| --- | --- | --- |
| Etapas do curso | Troca imediata | Entrada curta com opacidade e deslocamento vertical |
| Resultados do dicionário | Substituição seca | Entrada curta após busca/filtro |
| Mural de conquistas/ranking | Grid instantâneo | Entrada leve do conteúdo |
| Resumo do SRS | Texto trocado diretamente | Atualização com entrada discreta |
| Cards SRS | Card substituído diretamente | Entrada curta do card |
| Resposta SRS | Resposta aparecia sem transição | Revelação curta por opacidade/transform |
| Diálogos | Abertura imediata | Entrada de 180 ms sem bloquear navegação |

Todas as transições usam `opacity` e `transform`. O CSS desativa efetivamente animações e transições quando o sistema solicita redução de movimento.

## Testes automatizados

- `npm.cmd test`: aprovado.
- Regressão: **16/16 grupos aprovados**.
- Integração: **5/5 cenários aprovados**.
- `git diff --check`: aprovado, sem erro de whitespace.
- Referências CSS: **19/19** páginas em `style.css?v=28e`; nenhuma referência `v=28d` restante.
- Service worker: `japao-academy-v6`.

## Validação visual e interativa

O teste foi executado no navegador integrado em servidor local limpo.

- Modal de autenticação reconhecido como diálogo e com `aria-modal="true"`.
- Foco inicial confirmado no campo de e-mail.
- Foco visível confirmado com outline sólido de 3 px e offset de 3 px.
- Navegação por ArrowRight confirmou a troca da aba Login para Cadastro, com atualização de `aria-selected` e foco.
- Escape fechou o modal e devolveu o foco a `#btn-auth-hdr`.
- Tentativa de login inválida produziu um `alert` recuperável com botão de fechamento acessível.
- Dicionário japonês compilou 3.271 itens, encerrou `aria-busy`, manteve um único campo de busca e nenhum ID duplicado.
- Filtro inicial do dicionário expôs `aria-pressed="true"`.
- Tema escuro permaneceu funcional, com fundo `rgb(17, 25, 43)` e texto `rgb(240, 244, 248)` na página inicial.
- Auditoria das 19 páginas: zero `ReferenceError`, zero `TypeError`, zero unhandled rejection, zero `console.error`, zero ID duplicado, zero diálogo sem papel e zero controle de formulário visível sem nome acessível. O único rádio interno de compatibilidade do minigame inglês permanece explicitamente oculto (`display:none`) e não integra a árvore acessível.

## Resultado por página

| Página | Console | IDs | Diálogos | Controles visíveis |
| --- | --- | --- | --- | --- |
| `index.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `hub_japones.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `hub_ingles.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/curso.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/dicionario.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/hiragana.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/katakana.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/kanji.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/kanji_n5.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/kanji_n4.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/kanji_n3.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/kanji_n2.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/kanji_n1.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/ja-JP/minigame.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/en-US/curso_ingles.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/en-US/dicionario_ingles.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/en-US/phrasal_verbs.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/en-US/pronuncia_ingles.html` | Aprovado | Aprovado | Aprovado | Aprovado |
| `html/en-US/minigame_ingles.html` | Aprovado | Aprovado | Aprovado | Aprovado |

## Impacto estimado na performance

Baixo. Não foram adicionados observers, bibliotecas, imagens, polling ou delays artificiais. As animações duram no máximo 220 ms, reutilizam `opacity` e `transform`, e cada elemento mantém no máximo um timer de limpeza em `WeakMap`. O sistema de toast limita o DOM a três notificações visíveis e processa as demais em fila. Não foi identificada degradação perceptível durante a navegação pelas 19 páginas.

## Limites desta subetapa

- A matriz responsiva de 360, 390, 768, 1024 px e desktop amplo pertence à 28F e não foi executada nesta subetapa.
- Não houve redesenho de páginas, alteração de conteúdo pedagógico ou mudança funcional.

## Encerramento

A Etapa 28E está aprovada. O próximo passo autorizado pela ordem definida é a **Etapa 28F — Responsividade e validação final**.
