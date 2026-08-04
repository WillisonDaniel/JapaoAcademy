# Etapa 28B — Skeletons e carregamentos

Data: 02/08/2026  
Escopo: implementação mínima de carregamentos visuais, sem alteração de regra de negócio

## Resultado executivo

Foi criado um padrão reutilizável de skeleton compatível com os temas claro e escuro, com animação leve e desativação por `prefers-reduced-motion`. Os placeholders foram aplicados somente a áreas que recebem conteúdo por renderização dinâmica real. Não foram adicionados atrasos artificiais, bibliotecas, observers ou timers de carregamento.

Todos os contêineres implementados começam com `aria-busy="true"` e retornam a `aria-busy="false"` assim que o conteúdo é inserido. Na inspeção final das 19 páginas, nenhum estado de carregamento permaneceu visível ou preso.

## Estados adicionados

| Fluxo | Instâncias | Comportamento |
| --- | ---: | --- |
| Dicionários dedicados | 2 | Três cards skeleton estáveis até a compilação e primeira renderização. |
| Dicionário global compartilhado | 1 | Skeleton no contêiner injetado enquanto o glossário ainda não foi renderizado. |
| Painéis SRS | 11 | Descrição e contador usam placeholder até a sincronização do badge terminar. |
| Abas de módulos dinâmicos | 7 | Placeholders curtos para Hiragana, Katakana e Kanji N5–N1. |
| Conteúdo de módulo dinâmico | 8 | Skeleton agregado para Hiragana, Katakana, Kanji N5–N1 e Phrasal Verbs. |
| Mural de conquistas | 1 | Dois cards skeleton antes da renderização do catálogo, usando o próximo frame disponível. |
| **Total** | **30** | **5 padrões reutilizáveis em 30 pontos de carregamento.** |

## Decisões de segurança

- Trilhas CEFR já presentes no HTML não receberam skeleton artificial, pois não aguardam uma operação dinâmica real.
- Páginas Kanji grandes usam um único skeleton agregado no contêiner; não são criados centenas de placeholders por item.
- O mural de conquistas usa `requestAnimationFrame`, sem duração forçada ou timer artificial.
- Sincronização de progresso e estados de botões permanecem reservados para a Etapa 28C.
- Ranking não possui um painel dinâmico dedicado na implementação atual; o fluxo compartilhado disponível é o mural de conquistas.
- A identificação do cache estático do Service Worker foi atualizada de `v2` para `v3` para entregar imediatamente os novos recursos visuais e descartar somente assets antigos. Progresso, autenticação, AppState, Firebase e dados do usuário não são afetados.
- As 19 páginas passaram a solicitar `style.css?v=28b`, evitando que a folha anterior seja reutilizada por um cache offline já instalado.

## Arquivos modificados

### Interface HTML — 19

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
- `html/en-US/minigame_ingles.html`
- `html/en-US/phrasal_verbs.html`
- `html/en-US/pronuncia_ingles.html`

### Implementação compartilhada — 10

- `style.css`
- `sw.js`
- `js/core/dictionary.js`
- `js/core/dom.js`
- `js/course/course.js`
- `js/course/tabs.js`
- `js/game/ranking.js`
- `js/kanji/kanji-render.js`
- `js/phrasal/render.js`
- `js/srs/deck.js`

### Testes e documentação — 2

- `tests/regression.cjs`
- `tests/ETAPA_28B_SKELETONS_CARREGAMENTOS.md`

Total da subetapa: **31 arquivos**. O arquivo `tests/README.md` já estava modificado antes da 28B e não foi alterado nesta subetapa.

## Testes automatizados

- Regressão: **13/13 grupos aprovados**.
- Integração: **5/5 cenários aprovados**.
- Novo contrato automatizado: presença dos skeletons, `aria-busy` inicial/final e `prefers-reduced-motion`.
- `git diff --check`: aprovado, sem erro de whitespace.

## Validação visual das 19 páginas

| Resultado | Total |
| --- | ---: |
| Páginas abertas e renderizadas | 19/19 |
| `aria-busy="true"` visível após conclusão | 0 |
| Texto residual “Carregando/Loading” | 0 |
| Imagens quebradas | 0 |
| Overflow horizontal no desktop auditado | 0 |
| Avisos ou erros no Console | 0 |

Foram verificados especificamente:

- dicionários japonês e inglês com 30 cards renderizados e `aria-busy="false"`;
- curso japonês com painel SRS finalizado;
- Hiragana com abas e módulo finalizados;
- Kanji N1, a página de maior DOM, sem skeleton preso;
- Phrasal Verbs com conteúdo finalizado;
- mural com 35 conquistas após a troca do skeleton;
- cores do skeleton no tema escuro e retorno ao tema original;
- ausência de salto horizontal ou sobreposição na área inspecionada.

## Impacto estimado na performance

- Nós temporários máximos por skeleton de dicionário: 15 elementos leves, removidos na primeira renderização.
- Módulos grandes: nenhum nó de skeleton por card; o desenho é feito por gradientes CSS no próprio contêiner.
- Timers artificiais: **0**.
- Bibliotecas adicionadas: **0**.
- Observers adicionados: **0**.
- Impacto esperado no tempo interativo: **desprezível**.
- Benefício esperado: menor percepção de área vazia e indicação acessível do trabalho em andamento.

## Garantias funcionais

- Regra de negócio alterada: **não**.
- AppState alterado: **não**.
- Persistência de progresso alterada: **não**.
- Firebase ou autenticação alterados: **não**.
- Algoritmo SRS/SM-2 alterado: **não**.
- Critérios de desbloqueio, XP, datasets ou quizzes alterados: **não**.
- Regressão encontrada: **não**.

## Próxima subetapa

A Etapa 28C deve implementar feedback de botões e o indicador discreto de sincronização. Nenhuma implementação da 28C foi iniciada neste trabalho.
