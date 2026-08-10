# Fechamento local — WIP11 Italiano A1

Data da validação: 10 de agosto de 2026.

## Entrega funcional

- [x] `it-IT` registrado como quinto idioma canônico, com aliases e áudio `it-IT`.
- [x] Hub italiano e cartão no seletor de idiomas.
- [x] Curso A1 com exatamente 30 módulos e IDs `it_a1_mod_01` a `it_a1_mod_30`.
- [x] A2, B1 e B2 visíveis como “Em breve” e não interativos.
- [x] Índice leve com 443 módulos únicos provenientes de 17 datasets.
- [x] Dicionário italiano com 358 entradas únicas, busca, categorias, favoritos e alfabeto completo.
- [x] SRS, sessões, progresso e histórico usando `it-IT` e `it_srs_a1_deck`.
- [x] Dashboard com cinco idiomas e denominador italiano limitado aos 30 módulos A1.
- [x] Migração SRS v2 preservada sem adicionar italiano às fontes legadas.
- [x] Opções japonesas de leitura ausentes nas páginas italianas.

## Auditoria e PWA

- [x] Auditoria italiana: 180 itens de vocabulário, 60 regras, 60 frases, 60 falas e 150 exercícios consistentes.
- [x] Zero erros técnicos bloqueadores no relatório editorial italiano.
- [x] Auto-revisão editorial documentada sem alegação de certificação externa ou por falante nativo.
- [x] Cache `idiomas-academy-v33` com 107 recursos e 10,30 MB, abaixo do limite de 12 MB.
- [x] Hub e curso italiano A1 disponíveis em instalação limpa offline.
- [x] Dicionário fora do precache; primeiro acesso offline recebe orientação clara e, após uma abertura online, o cache dinâmico o mantém disponível.

## QA final

- [x] `npm.cmd test`: 27/27 regressões, 20/20 integrações e 26/26 cenários multidioma.
- [x] `git diff --check` sem erros.
- [x] Curso validado em 1280×900 e 390×844, sem overflow e sem erros no console.
- [x] Primeira aula aberta com conteúdo real após correção de `getTodosOsCursos()`.
- [x] Dashboard autenticado por fixture validado em 1280×900 e 390×844.
- [x] Filtros `all`, `ja-JP`, `en-US`, `es-ES`, `ru-RU` e `it-IT` exercitados sem erros.
- [x] Métricas, gráficos, calendário, histórico e insights presentes com filtro italiano.
- [x] Dicionário validado em desktop e celular: 358 entradas visíveis, filtro Alfabeto com 26 letras e busca por `stazione`.
- [x] Ambiente de QA sem voz instalada: fallback amigável protegido por teste; seleção de `it-IT` protegida por teste quando a síntese está disponível.

## Estado de entrega

Os cinco commits desta rodada são locais. A tag local prevista é `wip11-italian-a1-stable`. Nenhum commit ou tag desta rodada deve ser enviado ao remoto sem autorização posterior.
