# Fase 21 — Consolidação e release textual japonês

## Objetivo

Consolidar a auditoria textual baseada em fontes, tornar o estado editorial público coerente com o ledger e produzir um release reproduzível sem converter pendências em aprovações artificiais.

## Estado de entrada

- 2.315 alvos do curso A1–B2 classificados na Fase 18.
- 14.899 alvos de Kana/Kanji classificados na Fase 19.
- 6.161 registros derivados classificados na Fase 20.
- 159 correções anteriores preservadas.
- Casos inconclusivos permanecem abertos e devem continuar sinalizados.

## Implementação

1. Validar que toda decisão aponta para alvo existente, hash atual e fonte catalogada quando aprovada ou corrigida.
2. Produzir uma visão consolidada por área, estado, arquivo e família de fonte.
3. Remover avisos públicos apenas de itens cujo conjunto exibido esteja integralmente `approved` ou `corrected`.
4. Manter aviso editorial nos módulos e experiências que agreguem qualquer alvo `unresolved`.
5. Substituir frases públicas “aprovação humana” por “aprovação editorial”, sem ocultar limites ou apresentar a auditoria como certificação externa.
6. Preservar o estado interno `pending-human-review` como chave de compatibilidade enquanto controladores e datasets dependerem dele; a interface exibirá terminologia neutra.
7. Atualizar relatórios consolidados e referências documentais para os nomes editoriais neutros usados pelos contratos ativos.
8. Atualizar o cache PWA somente se um asset público for alterado.

## QA textual e visual

- Executar busca de alegações proibidas: oficialidade JLPT, fluência, domínio integral, aprovação humana pública e métricas inventadas.
- Validar Curso, Hiragana, Katakana, hub Kanji, N5, N3, N1, Dicionário, Minigame, Escuta, Leitura, Gramática, Escrita e JLPT.
- Matriz visual: 1280×900 e 390×844, temas claro/escuro, sem overflow horizontal e sem novos erros no console.
- Conferir estados pendentes, detalhes, filtros, buscas, lotes progressivos, links profundos e gabaritos.
- Áudio ouvido, microfone autorizado e offline real somente serão declarados cobertos quando exercidos de fato.

## Fechamento

- Criar relatório final textual com cobertura, correções, casos abertos, fontes e limitações.
- Executar `npm.cmd test`, contratos editoriais, PWA e `git diff --check`.
- Fazer commit exclusivo sem `livros/`, `scratch/` ou `.txt`.
- Criar o plano decision-complete da Fase 22 — auditoria auditiva dos 464 MP3 — sem iniciar a escuta dos áudios automaticamente nesta fase textual.
