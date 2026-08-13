# Fase Japão 14 — QA visual do redesign premium

## Resultado

O redesign japonês foi validado no navegador integrado em 1280×900 e 390×844, nos temas claro e escuro, sem overflow horizontal nem erros de console nas rotas exercidas.

## Medidas antes e depois

| Área | Antes | Depois |
|---|---:|---:|
| Cabeçalho móvel das páginas novas | 415–472 px | 269 px |
| Cabeçalho móvel do hub | 415 px | 277 px |
| Leitura no primeiro carregamento | 91 cards | 12 cards |
| Gramática no primeiro carregamento | 194 cards | 12 cards |
| Escrita no primeiro carregamento | 208 cards | 12 cards |
| Kanji N3 módulo 1 | 20 cards/canvases | 6 cards/canvases |
| Altura móvel do N3 módulo 1 | cerca de 40 mil px | cerca de 20 mil px |

As revisões finais usam lotes de 60 e os módulos regulares usam lotes de 6. Expansões preservam ordem, total e foco.

## Capturas e inspeções

- Hub premium: hero, CTA, resumo real, quatro grupos e card principal destacados.
- Escuta: player central, modo segmentado e painel de retorno.
- Leitura: grid progressivo, toolbar aderente e leitor limitado a 70 caracteres.
- Gramática: lookup destacado, filtros independentes e detalhe estruturado.
- Escrita: stepper dos três modos, banco/sequência e privacidade persistente.
- JLPT: configuração em três etapas, sessão e resultado interno.
- Dashboard japonês e as regressões de Curso, Hiragana, Katakana, Kanji, Dicionário e Minigame foram inspecionados nas duas larguras.

## Interações exercidas

- Escuta: revelar texto, alternar shadowing e caminho de microfone negado.
- Leitura: abrir item, apoios, questões e navegação.
- Gramática: lookup de forma, abertura de detalhe e prática.
- Escrita: abertura de modelo e troca de modo.
- JLPT: iniciar sessão e renderizar questão.
- Coleções: 12→24 itens com foco no primeiro card novo.
- PWA: atualização para `idiomas-academy-v41`; aviso de nova versão observado durante troca de controlador e ação protegida por sessão ativa.

## Acessibilidade

- Controles novos têm pelo menos 44×44 px.
- Foco visível, `aria-live`, hierarquia de títulos e estados vazios foram preservados.
- O carregamento progressivo transfere foco para o primeiro item acrescentado.
- Redução de movimento está centralizada no CSS compartilhado.

## Limitações declaradas

- O caminho de microfone negado foi exercido e exibiu “Permissão do microfone negada”. O caminho autorizado não foi declarado coberto.
- Os comandos de áudio foram acionados funcionalmente, mas a audição humana do som não foi declarada coberta.
- O contrato PWA e a troca de controlador foram testados; uma sessão integral com a rede fisicamente desconectada não foi declarada coberta.
- Os módulos Kanji selecionados têm integridade estrutural coberta pelos contratos N3/N2/N1. A inspeção visual interativa completa ficou limitada aos módulos desbloqueados no estado local, sem contornar as regras de progresso.

## Testes finais

- Regressão: 43/43 grupos.
- Integração: 21/21 cenários.
- Multidioma: 32/32 cenários.
- PWA: 131 recursos locais antes da contagem final desta fase; asset compartilhado incluído.
- `git diff --check`: sem erros.

## Refinamento pós-QA do hub e dos cabeçalhos

- Corrigida a sobreposição dos botões “Idiomas/Japonês” com os títulos do cabeçalho compartilhado.
- Removido o texto residual que reutilizava incorretamente a camada decorativa do cabeçalho das experiências.
- Contadores laterais “x recursos” removidos; títulos, subtítulos e marcadores das seções receberam hierarquia centralizada.
- Resumo da jornada reorganizado em três colunas centralizadas para 105 módulos, 5 trilhas e 12 experiências.
- QA repetida em 1280×900 e 390×844, nos temas claro e escuro: sem sobreposição, overflow horizontal ou novos erros de console.
- Cache atualizado para `idiomas-academy-v42` para distribuir o refinamento visual sem preservar o CSS anterior.
