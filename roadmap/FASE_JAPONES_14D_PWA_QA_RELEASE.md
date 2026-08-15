# Fase Japão 14D — PWA, acessibilidade e release visual

## PWA e atualização

- Consolidar a versão dos links de `japanese-experience.css`.
- Atualizar o cache para `idiomas-academy-v41` e confirmar o asset no precache.
- Detectar troca de controlador do Service Worker e exibir aviso acessível “Nova versão disponível”.
- Oferecer ação explícita “Recarregar agora”; nunca recarregar automaticamente durante uma atividade.

## Contratos

- Verificar ausência dos cinco CSS inline antigos e presença da camada compartilhada.
- Cobrir helper, lotes 12/6/60, contagens, foco, filtros, links profundos e equivalência dos totais.
- Preservar snapshots, SRS, XP, persistência, desbloqueio e estados editoriais.
- Executar suíte completa, PWA e `git diff --check`.

## QA de release

- 1280×900 e 390×844, claro/escuro: hub, cinco experiências e Dashboard japonês.
- Regressão visual: Curso, Hiragana, Katakana, Kanji, Dicionário e Minigame.
- Validar os módulos selecionados de N3, N2 e N1, expansão e canvases.
- Exercitar teclado, foco, toque, filtros, buscas, estados vazios e console.
- Testar microfone negado/indisponível. Declarar áudio ouvido, microfone autorizado e offline real somente quando exercidos de fato.
- Criar `tests/FASE_JAPONES_14_QA_VISUAL_REDESIGN.md` com medidas, resultados e limitações.
- Fazer commit final exclusivo, mantendo `.txt` fora do commit.
