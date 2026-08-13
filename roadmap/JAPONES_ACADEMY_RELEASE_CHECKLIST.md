# Checklist de release — área japonesa

## 1. Validação automatizada reproduzível

- [ ] Executar `npm.cmd test` na raiz.
- [ ] Confirmar todos os índices sincronizados: curso, dicionário, minigame, escuta, leitura, gramática, escrita e JLPT.
- [ ] Confirmar auditoria japonesa sem novos bloqueadores mecânicos.
- [ ] Executar `git diff --check`.
- [ ] Confirmar que alterações preexistentes não relacionadas continuam fora do commit.
- [ ] Confirmar PWA abaixo do orçamento de 12 MB.

## 2. Revisão editorial humana obrigatória

- [ ] Revisar `tests/JAPANESE_EDITORIAL_REVIEW.md` e `tests/JAPANESE_EDITORIAL_OCCURRENCES.json`.
- [ ] Revisar os inventários humanos N3, N2 e N1.
- [ ] Resolver as 158 leituras N1 ambíguas sem conversão automática.
- [ ] Revisar `tests/JAPANESE_GRAMMAR_HUMAN_REVIEW.md`.
- [ ] Decidir as duas divergências de escrita em `tests/JAPANESE_WRITING_HUMAN_REVIEW.md`.
- [ ] Corrigir ou confirmar a questão N4 excluída em `tests/JAPANESE_JLPT_HUMAN_REVIEW.md`.
- [ ] Somente depois disso alterar `pending-human-review`; auditorias mecânicas não equivalem a aprovação.

## 3. QA visual e funcional obrigatório

Em 390 px e desktop, temas claro e escuro:

- [ ] Hub japonês: quatro grupos, todos os links, foco e teclado.
- [ ] Curso A1–B2 e certificado de conclusão.
- [ ] Hiragana e Katakana.
- [ ] Hub Kanji e páginas N5–N1.
- [ ] Dicionário, minigame, canvas e estados sem ordem de traços.
- [ ] Escuta/shadowing: voz, velocidade, microfone permitido/negado e offline.
- [ ] Leitura: apoios, foco, questões, origem e offline.
- [ ] Gramática: filtros CEFR/JLPT, lookup conhecido/desconhecido e áudio indisponível.
- [ ] Escrita: três modos, blocos repetidos, comparação e privacidade.
- [ ] Preparação JLPT: configuração, escolha, digitação, cronômetro e resultado.
- [ ] Dashboard: autenticado, sem dados, sessões japonesas e mistura de idiomas.
- [ ] Confirmar zero novos erros no console em todos os fluxos.

## 4. Transparência pública

- [ ] Nenhuma página afirma lista oficial de Kanji/JLPT.
- [ ] Certificado permanece de conclusão interna.
- [ ] Preparação JLPT não usa escala, pesos, tempo ou previsão oficial.
- [ ] Escrita não classifica variantes como linguisticamente erradas.
- [ ] Reconhecimento de voz não é apresentado como avaliação fonética.
- [ ] Conteúdo pendente continua identificado.

## 5. Publicação

- [ ] Definir branch/commit aprovado para publicação.
- [ ] Solicitar explicitamente push/deploy; o roadmap local não autoriza publicação externa.
- [ ] Após push, verificar SHA remoto.
- [ ] Após deploy, repetir smoke test online e offline.
- [ ] Registrar versão do cache e data do release.

## Condição atual

Implementação e testes locais estão concluídos. A área não deve ser declarada pronta para produção enquanto a revisão editorial humana e a matriz visual/console acima permanecerem pendentes.
