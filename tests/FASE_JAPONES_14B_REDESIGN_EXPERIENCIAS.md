# Fase Japão 14B — Redesign das experiências

## Implementação concluída

- Escuta, Leitura, Gramática, Escrita e preparação JLPT passaram a usar `japanese-experience.css`.
- Os cinco blocos CSS inline foram removidos.
- Cada página recebeu hero contextual, dado real e hierarquia visual consistente.
- Escuta prioriza player, modos segmentados, controles principais e autoavaliação secundária.
- Leitura limita o texto a aproximadamente 70 caracteres por linha e separa apoios, ações e compreensão.
- Gramática destaca a consulta de formas e mantém CEFR/JLPT independentes.
- Escrita apresenta os três modos como stepper e mantém privacidade visível.
- JLPT apresenta configuração em três etapas, sessão e resultado sem alegação oficial.

## Compatibilidade

- IDs, datasets, controladores, rotas, AppState, SRS, XP e persistência não foram alterados.
- O contrato de escuta foi ajustado para verificar redução de movimento no CSS compartilhado.
- Estados `pending-human-review` permanecem públicos e inalterados.

## QA

- Contratos dedicados: Escuta 7/7, Leitura 6/6, Gramática 7/7, Escrita 7/7 e JLPT 8/8.
- Fluxos móveis exercidos: revelar/shadowing, abrir leitura, lookup/detalhe gramatical, stepper de escrita e iniciar JLPT.
- Mobile 390×844: cabeçalhos em 269 px, controles de tema 44×44 px, zero overflow e zero erros de console.
- Desktop 1280×900: grids equilibrados em três colunas, leitor responsivo, zero overflow e zero erros de console.
- Temas claro/escuro exercidos nas páginas compartilhadas.

## Próxima fase

O plano decision-complete está em `roadmap/FASE_JAPONES_14C_LISTAS_PROGRESSIVAS_KANJI.md`.
