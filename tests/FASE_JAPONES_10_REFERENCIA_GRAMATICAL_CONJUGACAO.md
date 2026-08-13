# Fase 10 — Referência gramatical e formas

## Resultado

A Fase 10 criou uma referência pesquisável baseada exclusivamente em campos gramaticais já existentes. A ferramenta não se apresenta como conjugador universal, não completa paradigmas e não infere equivalências entre CEFR e JLPT.

## Inventário materializado

- **194 referências gramaticais**:
  - 105 do curso A1–B2 (CEFR);
  - 89 de gramática aplicada nas trilhas Kanji N5–N1 (referência JLPT).
- **13 relações de forma** explicitamente escritas em exemplos cujo próprio contexto declara conjugação, negação, passado, forma casual, forma TE ou desejo.
- **169 referências** marcadas como `pending-human-review`.
- Snapshot determinístico: `4262b7510f89b2c7`.
- Índice leve: **146.825 bytes**; a página carrega somente o artefato gerado, não os datasets integrais.

O plano de entrada mencionava 87 blocos Kanji. O inventário ao vivo encontrou 89: N5=10, N4=15, N3=19, N2=20 e N1=25. A contagem real foi adotada e protegida por teste.

## Arquivos e integrações

- `database/ja-JP/data_gramatica_index.js`: índice gerado com `references` e `forms`.
- `html/ja-JP/gramatica.html`: busca, filtros independentes, consulta de formas e detalhe.
- `js/japanese/grammar.js`: renderização segura, origens, áudio restrito e prática local.
- `tests/japanese-grammar-index.cjs`: gerador, snapshot e inventário humano.
- `tests/japanese-grammar-contract.cjs`: sete contratos permanentes.
- `tests/JAPANESE_GRAMMAR_HUMAN_REVIEW.md`: lacunas e necessidade de revisão qualificada.
- Hub japonês e PWA atualizados; cache `idiomas-academy-v37`.

## Decisões pedagógicas

- CEFR e JLPT permanecem dimensões distintas.
- Categoria ausente permanece `sem-categoria`.
- Grupo verbal, transitividade, irregularidade e relações ausentes não são inferidos.
- Exercícios, feedback e alternativas incorretas não alimentam regras ou formas.
- Busca de forma exige correspondência conhecida; entradas desconhecidas recebem estado seguro.
- Áudio usa somente `audioText` japonês explícito; exemplos sem esse campo ficam sem síntese.
- Prática não concede XP, não altera SRS, certificado, desbloqueio ou progresso de curso.
- Rotas de origem delegam a decisão de acesso aos bloqueios existentes.

## Validação

- Índice gramatical: **194 referências / 13 formas**, sincronizado.
- Contratos da Fase 10: **7/7**.
- Regressão: **39/39** grupos.
- Integração: **20/20** cenários.
- Multidioma: **29/29** cenários.
- PWA: **124 recursos**, aproximadamente **11,22 MB**.
- `npm.cmd test`: aprovado integralmente.

## Validação visual pendente

A tentativa de iniciar o navegador integrado falhou antes de abrir a página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Portanto, não há alegação de cobertura visual, responsiva, de tema, áudio real ou console nesta fase. A matriz 390 px/desktop e claro/escuro permanece pendente até o navegador estar funcional.

## Pendências humanas

- As 169 referências marcadas continuam sem aprovação editorial humana.
- “Sem marcação editorial” não significa conteúdo aprovado.
- Terminologia, exemplos, traduções, Romaji e completude exigem revisão por pessoa qualificada.

## Próxima fase

O plano completo da Fase 11 está em `plan/japones_fase_11_producao_escrita_guiada.md`.
