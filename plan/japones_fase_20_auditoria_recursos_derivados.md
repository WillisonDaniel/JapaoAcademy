# Fase 20 — Auditoria editorial dos recursos japoneses derivados

## Objetivo

Regenerar e auditar Dicionário, Minigame, Escuta, Leitura, Gramática, Escrita e JLPT a partir dos datasets canônicos já classificados, distinguindo derivação mecânica de regras próprias de cada experiência.

## Estado de entrada

- Curso A1–B2: 2.315 alvos classificados na Fase 18.
- Kana/Kanji: 14.899 alvos classificados na Fase 19.
- 159 decisões anteriores preservadas na Fase 17.
- Casos inconclusivos permanecem abertos e não podem ser promovidos por mera cópia para um índice derivado.

## Implementação

1. Regenerar os sete índices a partir dos datasets canônicos atuais.
2. Inventariar cada registro derivado com chave estável, origem canônica e hash final.
3. Classificar como `approved` somente os campos que sejam cópias determinísticas de um alvo canônico aprovado ou corrigido.
4. Propagar `unresolved` quando a origem canônica estiver inconclusiva.
5. Auditar separadamente campos próprios do recurso: normalização, pesquisa, alternativas, distratores, segmentação, instruções, rótulos, exclusões e regras de montagem.
6. Corrigir apenas erros sustentados por fonte localizada; conflitos e decisões de naturalidade exigem duas evidências independentes.
7. Preservar IDs públicos, links profundos, filtros, lotes progressivos, XP, SRS, favoritos, progresso e persistência.

## Contratos

- Todo item derivado deve apontar para uma origem canônica existente ou declarar explicitamente sua regra própria.
- Hashes e contagens dos índices devem coincidir com a regeneração.
- Nenhum item inconclusivo na origem pode aparecer como editorialmente aprovado no derivado.
- Distratores e gabaritos devem permanecer consistentes, sem duplicatas equivalentes ou resposta ausente.
- Avisos editoriais devem acompanhar apenas itens inconclusivos.

## Fechamento

- Criar relatório da Fase 20 com inventário antes/depois, decisões, correções e limitações.
- Executar contratos dos sete recursos, suíte completa, PWA e `git diff --check`.
- Fazer commit exclusivo sem `livros/`, `scratch/` ou `.txt`.
- Criar plano decision-complete da Fase 21 — consolidação e release textual — e prosseguir automaticamente.
