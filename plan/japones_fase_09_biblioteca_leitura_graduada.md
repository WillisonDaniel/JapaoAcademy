# Plano de implementação — Fase 9: Biblioteca de leitura graduada

## Objetivo

Criar uma biblioteca japonesa de leitura graduada baseada apenas em textos já existentes e rastreáveis no projeto, com apoios progressivos, áudio sintetizado transparente e compreensão sem conteúdo inventado.

## Estado de entrada

- 105 módulos A1–B2 com contratos textuais explícitos e 265 trechos auditivos deduplicados.
- 92 módulos Kanji, alguns com `readingText` e quizzes de compreensão.
- Preferências existentes para Furigana e Romaji.
- Dicionário japonês com 3.271 entradas e índice leve.
- Parte do conteúdo permanece `pending-human-review`; testes mecânicos não constituem aprovação editorial.
- Não há acervo externo licenciado de graded readers nem autorização para serviço pago.

## Frente 1 — inventário e critérios editoriais

- Criar `tests/japanese-reading-index.cjs` para inventariar candidatos nos datasets existentes.
- Fontes permitidas:
  - `readingText` já presente nos módulos Kanji;
  - diálogos A1–B2 somente quando formarem uma sequência explícita com traduções e origem rastreável;
  - perguntas de compreensão já associadas à fonte.
- Não concatenar frases desconexas para fabricar histórias.
- Não traduzir, reescrever ou criar perguntas automaticamente.
- Exigir texto japonês, título/origem, nível, tradução quando disponível e status editorial.
- Classificar como “texto curto”, “diálogo” ou “leitura de módulo” conforme a estrutura original, sem inferir gênero literário.
- Se um nível não possuir material suficiente, mostrar disponibilidade real em vez de preencher artificialmente.

## Frente 2 — nível de referência

- Manter o nível original A1–B2 quando vier do curso.
- Para textos Kanji, usar somente o nível de referência JLPT já declarado pelo dataset e exibir o aviso “não constitui lista oficial do JLPT”.
- Não converter JLPT em CEFR por equivalência automática.
- Permitir filtros separados por origem: Curso A1–B2 e Kanji N5–N1.
- Snapshot do índice deve registrar contagem por nível, origem, tipo e status editorial.

## Frente 3 — página da biblioteca

- Criar `html/ja-JP/leitura.html`, `js/japanese/reading.js` e `database/ja-JP/data_leitura_index.js`.
- Adicionar “Biblioteca de leitura” ao hub japonês.
- Lista inicial com título, nível de referência, tipo, módulo de origem, extensão real em caracteres e status editorial.
- Filtros por origem, nível e tipo; busca somente nos metadados/textos existentes.
- Aceitar parâmetros seguros `?source=`, `?level=` e `?text=` para links internos.
- Carregar apenas o índice gerado; não importar todos os datasets na página.

## Frente 4 — leitor graduado

- Exibir texto em blocos preservando parágrafos e marcação original segura.
- Controles independentes: Furigana, Romaji, tradução e modo foco.
- Respeitar as preferências globais existentes quando compatíveis; não criar uma segunda configuração persistida.
- Áudio normal/lento via `tocarAudio` com aviso de voz sintetizada.
- Navegação anterior/próximo, retorno à biblioteca e “Abrir módulo de origem” sem contornar desbloqueios.
- Não calcular velocidade, compreensão ou domínio sem eventos reais do usuário.

## Frente 5 — vocabulário e compreensão

- Reusar links/ações do dicionário somente para tokens que já existam no índice japonês.
- Não segmentar japonês por espaços nem inventar leitura de palavras desconhecidas.
- Quando a fonte possuir questões de compreensão, preservar pergunta, alternativas e resposta existentes.
- Quando não houver questão associada, informar “Sem exercício de compreensão nesta leitura”; não gerar quiz automático.
- Respostas de compreensão podem dar feedback local, mas não alteram SRS, certificado ou progresso do curso.
- Registrar atividade real ao abrir/acionar áudio/responder, com deduplicação por sessão e sem XP novo.

## Frente 6 — acessibilidade, segurança e offline

- Texto japonês com `lang="ja"`, foco visível, regiões `aria-live` e controles por teclado.
- Tradução/Furigana/Romaji ocultos também devem respeitar a árvore acessível.
- Sanitizar qualquer HTML oriundo dos datasets por allowlist mínima ou renderização via `textContent`.
- Respeitar `prefers-reduced-motion` e oferecer modo foco sem animação obrigatória.
- Cachear página, controlador e índice; offline mantém leitura e tradução, informando quando síntese não existir.
- Nenhuma CDN nova, IA externa, serviço pago ou conteúdo sem licença comprovada.

## Testes

- Índice determinístico, sincronizado, sem duplicatas e sem texto criado pela geração.
- Cada item aponta para fonte e módulo reais e mantém status editorial.
- Contagens por nível/origem/tipo correspondem aos datasets.
- Nenhuma equivalência automática CEFR↔JLPT.
- Nenhuma pergunta de compreensão aparece sem pergunta original.
- Página usa índice leve, rotas válidas e sanitização segura.
- Controles de apoio respeitam estado e acessibilidade; áudio usa `ja-JP`.
- Nenhuma resposta altera XP, SM-2, certificado ou desbloqueio.
- PWA inclui os três recursos novos.
- Atualizar regressão/multidioma e executar `npm.cmd test` e `git diff --check`.

## Validação visual

- 390 px e desktop, claro/escuro:
  - biblioteca vazia e preenchida;
  - filtros Curso/JLPT e níveis disponíveis;
  - texto com cada combinação de Furigana/Romaji/tradução;
  - modo foco e textos longos;
  - compreensão com e sem quiz;
  - origem bloqueada/desbloqueada;
  - áudio disponível/indisponível e offline;
  - teclado, foco e leitor de tela.
- Confirmar zero novos erros no console. Se o navegador interno continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não inventar graded readers, traduções, perguntas, leituras ou equivalências de nível.
- Não apresentar conteúdo pendente como revisado.
- Não importar datasets integrais na página da biblioteca.
- Não criar persistência, autenticação, SRS ou métricas paralelas.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_09_BIBLIOTECA_LEITURA_GRADUADA.md`.
- Criar o plano decision-complete da Fase 10 — Referência gramatical e conjugação.
- Fazer commit exclusivo da Fase 9.
- Prosseguir automaticamente para a Fase 10 nas tarefas que não dependam de revisão humana ou conteúdo externo licenciado.

