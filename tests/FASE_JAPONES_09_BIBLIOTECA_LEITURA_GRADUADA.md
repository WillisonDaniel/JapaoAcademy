# Fase 9 — Biblioteca de leitura graduada

## Resultado

Foi criada uma biblioteca leve com os textos completos de leitura que já existiam nas trilhas Kanji.

- Página: `html/ja-JP/leitura.html`.
- Controlador: `js/japanese/reading.js`.
- Índice gerado: `database/ja-JP/data_leitura_index.js`.
- Entrada adicionada ao hub japonês.
- Cache PWA atualizado para v36.

Nenhum texto, tradução, pergunta ou equivalência de nível foi criado pelo gerador.

## Inventário

| Referência | Textos |
|---|---:|
| N5 | 11 |
| N4 | 16 |
| N3 | 19 |
| N2 | 20 |
| N1 | 25 |
| Total | 91 |

Os 91 textos possuem título, módulo e rota de origem, HTML japonês restrito a `ruby`/`rt`, texto plano, Romaji, tradução, extensão real, questões elegíveis e status editorial. Snapshot: `5ee4d012bbcfd963`.

A biblioteca apresenta somente níveis de referência JLPT. Não existe conversão automática para CEFR, e a página informa que a trilha não constitui lista oficial do JLPT.

## Compreensão

Foram encontradas 181 questões brutas.

- 180 possuem resposta original válida, por texto ou índice numérico, e foram preservadas.
- Uma questão do módulo N4 1 foi excluída porque a resposta armazenada `Muito gentis (tanto親切)` não coincide com nenhuma opção; nenhuma correção foi inferida.
- Leitura sem questão elegível mostra um estado honesto em vez de quiz gerado.
- Respostas produzem somente feedback local e atividade real deduplicada; não alteram XP, SRS ou progresso do curso.

## Funcionalidades

- Filtros N5–N1 e busca em título, módulo e texto existente.
- Links seguros por `?source=kanji&level=&text=`.
- Furigana, Romaji, tradução e modo foco.
- Preferências globais existentes usadas como estado inicial quando compatíveis.
- Áudio sintetizado em `ja-JP`, normal e lento.
- HTML de leitura sanitizado por allowlist `ruby`/`rt`; metadados e questões renderizados com `textContent`.
- Abertura do módulo de origem sem contornar o bloqueio de nível Kanji.
- Link geral para o dicionário, sem segmentação automática de japonês.
- Aviso explícito em 64 textos N3–N1 marcados `pending-human-review`.
- “Sem marcação editorial” é explicado como diferente de aprovação humana.

Não foram criados favoritos paralelos, velocidade de leitura, palavras por minuto, domínio, XP, SM-2 ou certificado.

## Arquivos principais

- `html/ja-JP/leitura.html`
- `js/japanese/reading.js`
- `database/ja-JP/data_leitura_index.js`
- `tests/japanese-reading-index.cjs`
- `tests/japanese-reading-contract.cjs`
- `js/kanji/kanji-render.js`
- `hub_japones.html`
- `sw.js`
- `package.json`
- `tests/regression.cjs`
- `tests/multilang.cjs`

## Verificações

- Índice: 91 textos, 180 questões, sincronizado.
- Contrato específico: 6/6.
- Regressão: 38/38.
- Integração: 20/20.
- Multidioma: 28/28.
- PWA: 121 recursos locais, 11,03 MB.
- Biblioteca: 431.021 bytes locais, 18 scripts.
- `npm.cmd test`: aprovado.
- `git diff --check`: aprovado.

## Validação visual e pendências

A tentativa de abrir a biblioteca no navegador interno falhou antes do carregamento:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de validação em 390 px/desktop, temas claro/escuro, foco, leitor de tela, áudio, offline interativo ou console. Esses itens permanecem pendentes.

Também continuam pendentes a revisão editorial humana dos 64 textos marcados e a correção qualificada da questão N4 excluída.

