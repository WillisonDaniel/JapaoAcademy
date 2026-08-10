# Fechamento — WIP(10) multilang stable v2

Este documento separa evidência técnica reproduzível de validações que dependem de conta real ou revisão humana. A tag final não deve ser criada ou movida enquanto houver um item obrigatório pendente.

## Concluído

- [x] Suíte completa verde: 26 grupos de regressão, 18 cenários de integração e 24 cenários multidioma.
- [x] Índices leves sincronizados com cursos, dicionários e minigame.
- [x] Migração SRS v2, isolamento dos 16 decks e XP centralizado protegidos por testes.
- [x] PWA com 104 recursos locais e 10,23 MB, abaixo do limite de 12 MB.
- [x] Instalação limpa validada em origem local nova.
- [x] Servidor desligado após a instalação; Dashboard, hub russo, curso russo, cirílico, dicionário russo e minigame russo abriram do cache.
- [x] Páginas afetadas por dependências ausentes — Falsos Amigos, conjugação espanhola, hiragana, Kanji N5 e minigame japonês — revalidadas offline.
- [x] Cache atualizado para `idiomas-academy-v28`; ativação preserva o cache atual e remove caches antigos.
- [x] Auditoria russa sem erros técnicos bloqueadores.
- [x] Relatório russo consolidado em 19 decisões editoriais únicas, sem alterar conteúdo sem aprovação humana.

## Pendente antes da tag final

- [ ] Revisor fluente concluir a revisão integral do russo A1–B2 e preencher `tests/RUSSIAN_EDITORIAL_REVIEW.md`.
- [ ] Testar login/cadastro, restauração, progresso, XP, SRS e Dashboard com uma conta Firebase real de QA.
- [ ] Repetir a matriz visual final do Dashboard preenchido em 1280×900 e 390×844, nos filtros `all`, `ja-JP`, `en-US`, `es-ES` e `ru-RU`.
- [ ] Validar os quatro cursos em desktop e celular, sem overflow nem erros visíveis.
- [ ] Confirmar atualização em uma instalação que ainda possua o cache imediatamente anterior.
- [ ] Decidir o destino da tag existente `wip10-multilang-stable-v2`, que aponta para uma versão anterior a esta rodada.

## Regra da tag e do remoto

Somente após todos os itens pendentes:

1. executar `npm.cmd test` e `git diff --check`;
2. confirmar que a árvore de trabalho está limpa;
3. criar ou reposicionar `wip10-multilang-stable-v2` com autorização explícita;
4. enviar commits e tag ao remoto apenas com autorização explícita.

O curso russo não deve ser anunciado como linguisticamente certificado enquanto a aprovação humana estiver pendente.
