# Fase 21B — Aprovação editorial textual item a item

## Objetivo

Resolver os 10.892 alvos canônicos ainda classificados como `unresolved` e, depois, reclassificar os 6.106 registros derivados sem promover conteúdo por inferência.

## Estado de entrada

- 23.534 decisões no ledger: 6.126 `approved`, 410 `corrected` e 16.998 `unresolved`.
- Curso A1–B2: 2.142 alvos inconclusivos.
- Kana e Kanji: 8.750 alvos inconclusivos.
- Recursos derivados: 6.106 registros inconclusivos por origem ou regra própria pendente.
- Corpus local validado: 20 PDFs, 4.238 páginas, um DOCX e fontes institucionais catalogadas.

## Política de decisão

1. Fatos objetivos exigem pelo menos uma fonte localizada e visualmente conferida quando OCR, furigana, tabelas ou texto vertical puderem alterar a leitura.
2. Naturalidade, registro, tradução contextual ou conflito exigem duas famílias editoriais independentes.
3. Cada alvo será `approved`, `corrected`, `excluded` ou continuará `unresolved` por conflito real documentado.
4. Aprovação parcial de campos não aprova automaticamente o objeto agregado.
5. IDs, ordem, módulos, XP, SRS, progresso, favoritos, persistência e desbloqueio permanecem invariáveis.

## Lotes de execução

### 21B.1 — Curso A1

- Auditar 31 módulos e 657 alvos.
- Corrigir generalizações, japonês, Romaji, tradução, diálogos, práticas e gabaritos.
- Remover o aviso do módulo somente quando todos os seus alvos estiverem sustentados.

### 21B.2 — Curso A2

- Auditar 30 módulos e 699 alvos com o mesmo contrato.

### 21B.3 — Cursos B1 e B2

- Auditar 44 módulos e 959 alvos, exigindo duas famílias para naturalidade e registro avançado.

### 21B.4 — Kana

- Resolver significados, exemplos, Romaji, traduções, quizzes e orientações dos 16 módulos.

### 21B.5 — Kanji N5 e N4

- Resolver leituras compostas, significados, exemplos, gramática e quizzes; manter `々` separado de identidade Kanji.

### 21B.6 — Kanji N3, N2 e N1

- Avançar por nível e módulo, com inspeção reforçada de colocação, registro e traduções contextuais.

### 21B.7 — Recursos derivados

- Regenerar os sete índices após a autoridade canônica.
- Propagar somente decisões sustentadas e auditar separadamente regras próprias de Dicionário, Minigame, Escuta, Leitura, Gramática, Escrita e JLPT.

## Fechamento de cada lote

- Atualizar ledger, hashes finais, relatório e teste específico.
- Regenerar apenas os índices afetados.
- Executar contratos editoriais, `npm.cmd test`, PWA e `git diff --check`.
- Fazer commit exclusivo, mantendo `livros/`, `scratch/` e `.txt` fora do Git.
- Prosseguir automaticamente ao lote seguinte.

## Critério de conclusão

A fase termina quando todos os 16.998 casos tiverem análise individual. Casos sem consenso poderão continuar `unresolved`, mas nenhum caso permanecerá aberto apenas por falta de processamento.
