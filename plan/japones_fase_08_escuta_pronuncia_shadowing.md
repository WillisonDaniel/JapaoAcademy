# Plano de implementação — Fase 8: Escuta, pronúncia e shadowing

## Objetivo

Criar uma área japonesa de prática auditiva e shadowing usando exclusivamente os contratos textuais e o áudio sintetizado já existentes, sem alegar avaliação de pronúncia, sem depender de serviço pago e sem criar progresso ou autenticação paralelos.

## Estado de entrada

- 105 módulos A1–B2 com contratos separados de `displayText`, `audioText`, apoio fonético e tradução.
- `speakKana`/`tocarAudio` usam síntese do navegador com `ja-JP` e permitem velocidade controlada.
- O minigame já possui reconhecimento de voz opcional, mas o resultado não constitui análise fonética.
- A plataforma registra atividade e sessões reais; não existe métrica confiável de pronúncia.
- Parte do conteúdo japonês permanece pendente de revisão editorial humana, condição que deve continuar visível e rastreável.

## Frente 1 — inventário auditivo determinístico

- Criar `tests/japanese-listening-index.cjs` para gerar `database/ja-JP/data_escuta_index.js` a partir dos quatro datasets do curso.
- Incluir somente linhas com `audioText` explícito em escrita japonesa, `displayText`, tradução, nível e ID/módulo de origem válidos.
- Deduplicar por nível + texto de áudio + tradução, preservando a primeira origem.
- Não converter Romaji em japonês, não inventar tradução e não incorporar leituras Kanji marcadas como pendentes.
- Registrar no índice se a linha de origem possui `editorialReview.status === 'pending-human-review'`; o player deve exibir essa condição e nunca convertê-la em aprovação.
- Criar snapshot por nível com contagem, IDs e hash do conteúdo elegível.

## Frente 2 — página e navegação

- Criar `html/ja-JP/escuta.html` e `js/japanese/listening.js`, reutilizando cabeçalho, tema, acessibilidade, áudio, AppState e registro de atividade existentes.
- Adicionar a entrada “Escuta e shadowing” ao hub japonês e ao menu japonês onde houver navegação equivalente.
- Filtros: A1, A2, B1, B2 e “Todos”; o filtro inicial deve aceitar `?level=A1` etc.
- Cada cartão deve mostrar nível e módulo de origem e oferecer “Abrir módulo”, usando a rota e o módulo reais.
- Não alterar o player do curso, IDs, desbloqueio ou progresso A1–B2.

## Frente 3 — modo Escuta

- Fluxo por item: ouvir em velocidade normal, ouvir devagar, revelar texto e tradução, avançar.
- Antes de revelar, manter texto japonês e tradução ocultos visualmente e fora do nome acessível do botão de áudio; disponibilizar instrução clara para leitores de tela.
- Permitir repetição ilimitada sem pontuação, XP ou alegação de acerto.
- Registrar atividade somente no primeiro acionamento real de áudio de cada item na sessão.
- Informar permanentemente: “Áudio sintetizado pelo dispositivo; pode variar entre navegadores e não substitui gravação nativa.”
- Em ausência de síntese, usar o estado de erro recuperável já existente e manter texto disponível.

## Frente 4 — modo Shadowing

- Sequência: ouvir → preparação curta configurável (0/2/4 s) → repetir junto → autoavaliação “Repetir” ou “Consegui acompanhar”.
- A autoavaliação deve permanecer apenas no estado transitório da sessão; não criar taxa de precisão ou domínio.
- Oferecer velocidade normal e lenta e opção de repetir automaticamente uma vez.
- Se `SpeechRecognition` existir, permitir transcrição opcional com consentimento explícito por clique.
- Mostrar a transcrição como retorno bruto do navegador; não calcular similaridade fonética, nota, aprovação ou XP.
- Distinguir claramente: microfone indisponível, permissão negada, silêncio e falha de reconhecimento.

## Frente 5 — privacidade, acessibilidade e offline

- Explicar que síntese e reconhecimento dependem do navegador/dispositivo e que nenhum áudio gravado é persistido pela aplicação.
- Não iniciar microfone automaticamente e sempre permitir concluir a atividade sem microfone.
- Garantir teclado, foco visível, regiões `aria-live`, botão de pausa/cancelamento e respeito a `prefers-reduced-motion`.
- Cachear página, JS e índice no service worker; offline deve oferecer texto e controles, informando quando síntese/reconhecimento não estiverem disponíveis.
- Não adicionar CDN obrigatória, biblioteca de waveform ou arquivo de áudio fictício.

## Frente 6 — integração e métricas reais

- Reusar `registrarAtividadeDiaria` e o controlador de sessão existente com tipo `pronunciation` ou um alias japonês mapeado ao mesmo tipo canônico.
- Não alimentar SM-2, caderno de erros ou histórico SRS a partir de autoavaliação ou transcrição.
- Não criar “percentual de pronúncia”, “fluência”, streak exclusivo ou meta inventada.
- Se o Dashboard puder identificar a rota apenas pelo mapeamento existente, preservar esse comportamento; qualquer novo rótulo deve derivar de evento real.

## Testes

- Índice sincronizado, determinístico, sem Romaji usado como `audioText` japonês e sem duplicatas.
- Cada item possui nível, módulo, origem, texto, tradução e status editorial rastreável.
- Velocidades chamam o motor `ja-JP` existente e não alteram SRS/XP.
- Revelação, repetição e autoavaliação preservam estado transitório.
- Microfone só inicia por ação explícita; transcrição não gera nota.
- Rotas de origem são válidas e o filtro por URL é seguro.
- PWA inclui os três novos recursos e tolera recursos de voz indisponíveis.
- Atualizar regressão/multidioma e executar `npm.cmd test` e `git diff --check`.

## Validação visual e funcional

- 390 px e desktop, claro/escuro:
  - estado inicial e filtro por nível;
  - texto oculto/revelado;
  - velocidades normal/lenta;
  - shadowing com preparação 0/2/4 s;
  - microfone disponível, negado e indisponível;
  - offline e erro de síntese;
  - foco, teclado e `aria-live`.
- Confirmar zero novos erros no console. Se o navegador integrado continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não usar serviço pago, IA externa ou gravações cuja licença/origem não esteja comprovada.
- Não apresentar síntese como voz nativa nem transcrição como avaliação fonética.
- Não alterar datasets editoriais para aumentar artificialmente o índice.
- Não aprovar conteúdo linguístico por teste mecânico.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_08_ESCUTA_PRONUNCIA_SHADOWING.md`.
- Criar o plano decision-complete da Fase 9 — Biblioteca de leitura graduada.
- Fazer commit exclusivo da Fase 8.
- Prosseguir automaticamente para a Fase 9 nas tarefas que não dependam de revisão humana, licenças externas ou serviços pagos.

