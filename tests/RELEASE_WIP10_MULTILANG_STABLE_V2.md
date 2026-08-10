# Fechamento — WIP(10) multilang stable v2

Este documento separa evidência técnica reproduzível de validações que dependem de conta real ou revisão humana. A tag final não deve ser criada ou movida enquanto houver um item obrigatório pendente.

## Concluído

- [x] Suíte completa verde: 26 grupos de regressão, 20 cenários de integração e 24 cenários multidioma.
- [x] Índices leves sincronizados com cursos, dicionários e minigame.
- [x] Migração SRS v2, isolamento dos 16 decks e XP centralizado protegidos por testes.
- [x] PWA com 104 recursos locais e 10,24 MB, abaixo do limite de 12 MB.
- [x] Instalação limpa validada em origem local nova.
- [x] Servidor desligado após a instalação; Dashboard, hub russo, curso russo, cirílico, dicionário russo e minigame russo abriram do cache.
- [x] Páginas afetadas por dependências ausentes — Falsos Amigos, conjugação espanhola, hiragana, Kanji N5 e minigame japonês — revalidadas offline.
- [x] Cache atualizado para `idiomas-academy-v31` após restringir as opções japonesas de leitura ao curso de japonês; ativação preserva o cache atual e remove caches antigos.
- [x] Auditoria russa sem erros técnicos bloqueadores nem ocorrências pendentes.
- [x] Revisão editorial integral dos 96 módulos russos A1–B2 concluída com apoio do dicionário e da gramática indicados para a rodada.
- [x] Consistência entre frases, tokens, áudios, diálogos, vocabulário e quizzes russos protegida por teste permanente.
- [x] Dashboard preenchido validado em 1280×900 e 390×844 nos filtros `all`, `ja-JP`, `en-US`, `es-ES` e `ru-RU`, sem overflow global nem erros no console.
- [x] Cursos de japonês, inglês, espanhol e russo validados em desktop e 390×844, sem overflow global nem erros no console.
- [x] Atualização real de uma instalação `v28` para `v29` validada; o conteúdo legado foi substituído e Dashboard e área russa reabriram sem o servidor.
- [x] Modal de autenticação fecha assim que o Firebase confirma o usuário, sem aguardar a sincronização do Firestore; Google, e-mail e cadastro estão protegidos por testes.
- [x] Login com Google e cadastro por e-mail validados com Firebase real; o estado autenticado aparece corretamente no site e no console do Firebase.

## Pendências obrigatórias

Nenhuma. A tag existente `wip10-multilang-stable-v2` será reposicionada para o commit final desta rodada, conforme autorização explícita.

## Regra da tag e do remoto

Somente após todos os itens pendentes:

1. executar `npm.cmd test` e `git diff --check`;
2. confirmar que a árvore de trabalho está limpa;
3. criar ou reposicionar `wip10-multilang-stable-v2` com autorização explícita;
4. enviar commits e tag ao remoto apenas com autorização explícita.

O curso russo passou pela revisão editorial integral registrada nesta versão, mas não deve ser anunciado como certificado por falante nativo ou acreditado por uma instituição externa.
