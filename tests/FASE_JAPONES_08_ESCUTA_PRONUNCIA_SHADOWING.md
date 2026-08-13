# Fase 8 — Escuta, pronúncia e shadowing

## Resultado

Foi criada uma área japonesa de prática auditiva baseada exclusivamente nos contratos A1–B2 já existentes.

- Nova página: `html/ja-JP/escuta.html`.
- Novo controlador: `js/japanese/listening.js`.
- Novo índice leve e gerado: `database/ja-JP/data_escuta_index.js`.
- Entrada adicionada ao hub japonês.
- Cache PWA atualizado de v34 para v35.

A página declara que usa voz sintetizada pelo dispositivo, que a transcrição é retorno bruto do navegador e que nenhuma dessas operações constitui avaliação fonética ou substitui gravação nativa.

## Inventário auditivo

O gerador incluiu apenas contratos com `displayText`, `audioText` em escrita japonesa, tradução e origem válidos. Não houve conversão de Romaji, criação de tradução ou composição automática de frases.

| Nível | Trechos |
|---|---:|
| A1 | 29 |
| A2 | 117 |
| B1 | 66 |
| B2 | 53 |
| Total | 265 |

O índice foi deduplicado por nível, áudio e tradução. Snapshot mecânico: `0cb8c2f4437bec31`.

Cada item mantém ID, nível, ID/índice/título do módulo, origem, texto, Romaji quando existente, tradução e status editorial. Trechos de módulos ainda pendentes exibem aviso explícito; não foram classificados como aprovados.

## Funcionalidades

- Filtros A1, A2, B1, B2 e Todos, inclusive por `?level=`.
- Escuta em velocidade normal e lenta.
- Texto e tradução ocultos até ação de revelar.
- Shadowing com preparação de 0, 2 ou 4 segundos.
- Repetição conjunta opcional por mais uma vez.
- Autoavaliação transitória “Quero repetir”/“Consegui acompanhar”, sem nota.
- Reconhecimento de voz opcional, iniciado somente por clique.
- Estados distintos para permissão negada, microfone indisponível, silêncio e falha genérica.
- Retorno ao módulo de origem com validação dos bloqueios atuais do curso.
- Registro de atividade apenas no primeiro áudio real de cada item por sessão.
- Sessão reutiliza o tipo canônico `pronunciation`.

Não há XP, SM-2, caderno de erros, taxa de precisão, similaridade, domínio, streak específico, armazenamento de gravação ou persistência paralela.

## Arquivos principais

- `html/ja-JP/escuta.html`
- `js/japanese/listening.js`
- `database/ja-JP/data_escuta_index.js`
- `tests/japanese-listening-index.cjs`
- `tests/japanese-listening-contract.cjs`
- `js/core/audio.js`
- `js/course/course.js`
- `hub_japones.html`
- `sw.js`
- `package.json`
- `tests/regression.cjs`
- `tests/multilang.cjs`

## Verificações

- Índice auditivo: 265 itens, sincronizado e determinístico.
- Contrato específico: 7/7.
- Regressão: 37/37.
- Integração: 20/20.
- Multidioma: 27/27.
- PWA: 118 recursos locais, 10,88 MB.
- Página de escuta: 377.785 bytes locais, 18 scripts.
- `npm.cmd test`: aprovado.
- `git diff --check`: aprovado.

## Validação visual e limitações

A tentativa de validação no navegador interno falhou antes de abrir a página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Assim, não há alegação de validação visual em 390 px/desktop, temas claro/escuro, áudio real, permissões de microfone, foco, leitor de tela, offline interativo ou console. Esses itens permanecem pendentes até a infraestrutura do navegador funcionar.

A qualidade da voz depende do sistema operacional e do navegador. A plataforma não oferece gravações nativas nesta fase e não apresenta transcrição como medida de pronúncia. O conteúdo marcado `pending-human-review` continua dependendo de revisão editorial humana qualificada.

