# Fase Japones 15 - Redesign cromatico das experiencias

## Resultado

As cinco experiencias japonesas receberam uma fundacao cromatica compartilhada e identidades pedagogicas proprias:

| Experiencia | Cor principal | Aplicacao |
|---|---|---|
| Escuta | Azul-ciano | Controles, player, transcricao e autoavaliacao |
| Leitura | Azul-petroleo | Filtros, cards, toolbar, leitor e compreensao |
| Gramatica | Indigo-violeta | Lookup, filtros, cards, formula, exemplo e pratica |
| Escrita | Vermelho-coral | Cards, stepper, prompt, sequencia e comparacao |
| JLPT | Vermelho-dourado | Configuracao, CTA, sessao, respostas e resultado |

Foram definidos todos os tokens visuais antes ausentes. O contrato automatico encontrou 29 referencias `--jp-*`, todas com definicao valida nos temas claro e escuro.

## Interfaces e compatibilidade

- Novos tokens internos: `--jp-page-primary`, `--jp-page-accent`, `--jp-page-soft` e `--jp-page-text`.
- Novas classes internas: `jp-action-primary`, `jp-action-secondary`, `jp-action-tertiary` e `jp-action-accent`.
- Estados dinamicos de Leitura e Gramatica recebem `data-answer-state`; revisoes JLPT recebem `is-correct`, `is-incorrect` ou `is-unanswered`.
- IDs, datasets, AppState, Firebase, SRS, XP, persistencia, desbloqueio, lotes progressivos e regras pedagogicas permaneceram inalterados.
- As cinco paginas usam `japanese-experience.css?v=43`; o cache foi atualizado para `idiomas-academy-v43`.

## QA visual e interativa

Matriz executada no navegador integrado em 1280x900 e 390x844, temas claro e escuro.

- Todas as paginas: zero overflow horizontal; paineis com raio de 24 px, sombra efetiva, borda e fundo cromatico.
- Mobile: menor controle interativo visivel com 44 px nas cinco experiencias; nenhum controle abaixo do limite.
- Escuta: texto revelado, Shadowing selecionado, transcricao com permissao negada, autoavaliacao e aviso editorial inspecionados.
- Leitura: 12 de 91 cards, leitor, traducao, toolbar, pergunta e resposta correta inspecionados.
- Gramatica: lookup `Tabemasu`, tres resultados, lista, detalhe, formula azulada e exemplo vermelho inspecionados.
- Escrita: 12 cards, oficina, tres modos, banco azul, sequencia coral e CTA de comparacao inspecionados.
- JLPT: configuracao, CTA, sessao de 10 itens, resposta selecionada e resultado com 8 corretas, 1 incorreta e 1 nao respondida inspecionados.
- Foco visivel: anel dourado de 3 px com afastamento de 3 px e halo adicional.
- Console: zero novos erros nas paginas da matriz.

## Contraste

- Texto branco nos preenchimentos principais escuros: razoes entre 5.47:1 e 7.10:1.
- Badge de disponibilidade JLPT no tema escuro: 10.38:1.
- Estados correto, incorreto e nao respondido usam simultaneamente texto, fundo e borda; a informacao nao depende apenas de cor.

## Testes

- Contrato cromatico japones: 4/4.
- Regressao: 43/43 grupos.
- Integracao: 21/21 cenarios.
- Multidioma: 32/32 cenarios.
- PWA: 131 recursos locais, 11.85 MB.
- `npm.cmd test`: aprovado.
- `git diff --check`: aprovado.

## Limitacoes declaradas

- O caminho de microfone negado foi exercido; o caminho autorizado nao foi declarado coberto.
- Os comandos de audio preservam seus contratos automatizados, mas audicao humana do som nao foi declarada coberta.
- A validacao PWA cobre contrato e cache; uma sessao integral com rede fisicamente desconectada nao foi repetida nesta fase.
