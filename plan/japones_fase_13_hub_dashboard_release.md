# Plano de implementação — Fase 13: Hub por habilidades, Dashboard e release

## Objetivo

Consolidar as entregas japonesas em uma navegação por habilidades, mostrar no Dashboard somente atividade japonesa realmente registrada e executar o fechamento técnico/editorial do roadmap sem ocultar pendências humanas ou validações indisponíveis.

## Estado de entrada

- Fases 0–12 materializadas em relatórios e commits exclusivos.
- Hub japonês contém curso, Kana, Kanji, dicionário, minigame, escuta, leitura, gramática, escrita e preparação JLPT.
- Sessões reais preservam `language`, `activityType`, `contentId`, duração e contagem de interações.
- Novos recursos usam prefixos rastreáveis em `contentId`: `listening-`, `reading-`, `grammar-`, `writing-` e `jlpt-practice`.
- Dashboard já lê `sessions` reais e não deve estimar atividade histórica ausente.
- Navegador integrado permanece indisponível nas últimas fases.

## Frente 1 — hub por habilidades

- Reorganizar `hub_japones.html` em quatro seções sem remover rotas:
  1. Fundamentos: curso, Hiragana, Katakana, Kanji, gramática;
  2. Compreensão: escuta, leitura e dicionário;
  3. Produção e prática: escrita, minigame e SRS/revisões já existentes quando houver rota segura;
  4. Acompanhamento: preparação JLPT e Meu Progresso.
- Preservar todos os `href` existentes e adicionar link ao Dashboard pessoal.
- Substituir resíduos públicos de “definitiva”, “dominar”, “oficial” e “proficiência” no hub por linguagem pedagógica transparente.
- Incluir aviso compacto de status editorial e de níveis JLPT de referência.
- Manter carregamento leve, teclado, foco, temas e responsividade.

## Frente 2 — mapa real de habilidades no Dashboard

- Adicionar seção “Atividade em japonês por habilidade” em `meu-progresso.html`.
- Implementar em `js/dashboard/meu-progresso.js` uma função pura que recebe sessões persistidas e considera apenas `language === 'ja-JP'`.
- Classificar somente por evidência explícita:
  - `listening-` ou `activityType === 'pronunciation'` → Escuta;
  - `reading-` → Leitura;
  - `grammar-` → Gramática;
  - `writing-` → Escrita;
  - `jlpt-practice` → Preparação JLPT;
  - `kana`, `kanji`, `dictionary`, `minigame`, `srs` → respectivos rótulos;
  - `course` sem prefixo novo → Curso;
  - desconhecido → Outros, sem inferência adicional.
- Exibir por habilidade apenas sessões válidas, minutos ativos somados e última atividade real.
- Não reconstruir histórico anterior, não estimar tempo e não usar agregados sem `contentId` para atribuir habilidade.
- Estado vazio: “Ainda não há sessões japonesas registradas por habilidade”.
- Respeitar filtro/autenticação e dados do usuário já existentes; nenhuma nova chave persistida.

## Frente 3 — contratos e migração zero

- Não alterar formato de sessão, storage, Firebase ou migrações.
- Criar `tests/japanese-release-contract.cjs` cobrindo:
  - todas as rotas japonesas presentes e agrupadas;
  - ausência das alegações públicas proibidas no hub;
  - classificação de habilidades determinística com fixtures reais;
  - sessões não japonesas ignoradas;
  - sessões desconhecidas preservadas em “Outros”;
  - soma de tempo e última data sem estimativa;
  - estado vazio correto;
  - nenhuma nova persistência, XP, SRS ou autenticação;
  - relatórios das fases 0–13 e planos 1–13 presentes;
  - PWA/cache e referências locais válidos.
- Ampliar regressão, integração apenas se o fluxo do Dashboard exigir, e multidioma.

## Frente 4 — auditoria final de release

- Executar todas as auditorias, índices e contratos por `npm.cmd test`.
- Executar `git diff --check` e verificar que somente `.txt` permanece fora dos commits após o fechamento.
- Verificar tamanhos dos hubs, novas páginas e precache dentro dos orçamentos atuais.
- Procurar no escopo público japonês alegações proibidas: domínio integral, lista oficial, certificado oficial, proficiência externa, escala/pontuação oficial e correção linguística artificial.
- Confirmar que todos os itens `pending-human-review` continuam identificáveis.
- Registrar matriz de funcionalidades, contagens finais, hashes, versões de cache e commits no relatório final.

## Frente 5 — validação visual final

- Tentar novamente o navegador integrado.
- Em 390 px e desktop, claro/escuro, validar:
  - hub completo e quatro grupos;
  - Dashboard com dados, sem dados e mistura de idiomas;
  - escuta, leitura, gramática, escrita e JLPT;
  - foco, teclado e console.
- Se indisponível, registrar a falha exata e declarar o release tecnicamente testado, porém com QA visual pendente; não usar “pronto para produção” sem essa cobertura.

## Frente 6 — fechamento do roadmap

- Criar `tests/FASE_JAPONES_13_HUB_DASHBOARD_RELEASE.md` com:
  - entregas e arquivos;
  - resultados completos dos testes;
  - commits das fases;
  - pendências editoriais humanas;
  - pendência visual/console;
  - recomendação objetiva de release e condições restantes.
- Criar `roadmap/JAPONES_ACADEMY_RELEASE_CHECKLIST.md` com checklist reproduzível para revisão humana e QA visual futuro.
- Atualizar o roadmap mestre marcando fases mecanicamente concluídas, sem marcar conteúdo como editorialmente aprovado.
- Atualizar cache PWA se os arquivos públicos mudarem.

## Restrições

- Não inventar métricas históricas ou redistribuir agregados sem evidência.
- Não criar novas chaves persistidas, autenticação, Firebase ou analytics.
- Não alterar datasets, IDs, progressão, XP, SRS ou certificados.
- Não afirmar aprovação editorial, proficiência, oficialidade ou prontidão de produção sem evidência.
- Não publicar, enviar ao remoto ou implantar: essas ações exigem pedido específico do usuário.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Fazer commit exclusivo da Fase 13.
- Confirmar o estado final do worktree e a cadeia de commits do roadmap.
- Encerrar o plano automático somente depois que todos os testes locais passarem e as pendências restantes estiverem registradas com precisão.
