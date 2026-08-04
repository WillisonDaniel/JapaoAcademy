# Etapa 29 — Dashboard “Meu Progresso”

## Resultado

Foi criada uma página pessoal global do **Idiomas Academy**, baseada somente em dados reais já existentes ou em estruturas vazias preparadas para medições futuras. O dashboard agrega Japonês e Inglês, aceita a inclusão futura de outros idiomas por meio de um registro único e não cria autenticação, SRS ou persistência paralelos.

## Modelo base de dados (versão 1)

Cada conta autenticada utiliza a chave local `ja_dashboard_data_<uid>`, normalizada no formato:

```text
{
  version: 1,
  dailyGoalMinutes: 15,
  firstAccessDate: "YYYY-MM-DD" | null,
  activityByDate: { "YYYY-MM-DD": quantidade },
  studyMinutesByDate: { "YYYY-MM-DD": minutos },
  sessions: [
    { id, date, activityType, durationMinutes, activityCount }
  ]
}
```

- Metas permitidas: 10, 15, 20, 30, 45 ou 60 minutos.
- `activityByDate` migra o histórico real já presente em `ja_activity_history`.
- `studyMinutesByDate` e `sessions` começam vazios; não são preenchidos com valores simulados.
- Sessões são limitadas às 50 entradas mais recentes e seus campos são normalizados.
- Datas novas usam o calendário local no formato `YYYY-MM-DD`.
- O campo `dashboardData` é acrescentado ao documento existente do Firestore com `merge: true`.
- As chaves técnicas legadas com prefixos `ja_` e `japao_` foram preservadas para não perder progresso existente; o dashboard interpreta esses dados como progresso global da conta.

## Métricas utilizadas

| Indicador | Fonte |
| --- | --- |
| XP | `ja_user_xp` |
| Sequência | `ja_streak_data` |
| Módulos concluídos | `japao_academy_progress.modulosConcluidos` |
| Progresso geral | módulos concluídos / módulos reais A1–B2 de todos os idiomas registrados |
| Progresso por idioma | IDs concluídos comparados aos datasets reais de Japonês e Inglês |
| Trilhas extras | arrays reais `progress_kanji*` e `progress_phrasal_verbs` |
| Revisões pendentes | decks SRS existentes e `dueDate` |
| Resumo semanal | atividade real agregada nos últimos sete dias |
| Minutos estudados | zero até existirem sessões confiáveis |

A taxa de acertos foi omitida porque o projeto ainda não mantém um histórico agregado confiável para esse indicador.

## Acesso e redirecionamento

- Login por e-mail, login Google e cadastro aguardam a sincronização e abrem `Meu Progresso` na raiz do Idiomas Academy.
- O observador Firebase não redireciona páginas comuns, evitando loops.
- Acesso direto sem autenticação mostra uma apresentação com ações reais de entrar e cadastrar.
- Dados pessoais permanecem ocultos enquanto a autenticação e a sincronização não forem concluídas.
- Nomes são inseridos com `textContent`, sem interpretar HTML.
- O botão `Revisar agora` encaminha ao painel SRS correspondente e reutiliza `iniciarSessaoSRS`.
- Cada idioma oferece ações próprias para explorar seu hub e iniciar ou continuar o curso.
- O endereço antigo em `html/ja-JP/meu-progresso.html` redireciona para a página global, preservando compatibilidade.

## Arquivos alterados

1. `meu-progresso.html`
2. `html/ja-JP/meu-progresso.html` (redirecionamento legado)
3. `js/dashboard/meu-progresso.js`
4. `js/core/storage.js`
5. `js/core/dom.js`
6. `js/game/xp.js`
7. `app.js`
8. `style.css`
9. `sw.js`
10. `tests/regression.cjs`
11. `tests/integration.cjs`
12. `tests/README.md`
13. `tests/ETAPA_29_DASHBOARD_MEU_PROGRESSO.md`

## Cobertura automatizada

- página autenticada e apresentação sem autenticação;
- redirecionamento do login Google e contratos de login/cadastro;
- primeiro acesso, progresso existente e separação por idioma;
- metas permitidas e persistência por UID;
- migração de dados antigos e JSON corrompido;
- SRS pendente, próxima revisão e deck corrompido;
- gráfico com atividade real e estado sem dados;
- sincronização Firestore sem perda de campos antigos;
- nome contendo HTML malicioso;
- temas, responsividade, ARIA e movimento reduzido;
- referências locais, sintaxe e cache offline.

## Fase 1 avançada — medição confiável de sessões

Concluída em 2026-08-03. A estrutura é migrada automaticamente para a versão 2 ao ser lida, sem remover os campos da versão 1:

```text
{
  version: 2,
  dailyGoalMinutes,
  preferenceUpdatedAt,
  firstAccessDate,
  activityByDate,
  studySecondsByDate,
  studyMinutesByDate,
  dailyAggregates: {
    "YYYY-MM-DD": {
      sessionIds, activeSeconds, activities, interactions,
      xpEarned, sessionCount, languages, activityTypes, updatedAt
    }
  },
  lifetimeTotals: {
    activeSeconds, sessions, activities, interactions, xpEarned
  },
  sessions: [{
    id, userId, date, startedAt, endedAt, activeSeconds,
    language, activityType, contentId, interactionCount,
    activityCount, xpEarned, endReason
  }],
  updatedAt
}
```

### Regras de medição

- A API central em `js/core/study-session.js` mantém no máximo uma sessão ativa.
- A contagem começa somente depois de uma interação relevante dentro de uma experiência de estudo.
- Dashboard, página inicial, hubs, autenticação e navegação comum não geram tempo.
- A página oculta pausa a medição imediatamente.
- Dois minutos sem interação pausam a medição; uma nova interação retoma a mesma sessão.
- O tempo é acumulado internamente em segundos e arredondado apenas na interface.
- Sessões com menos de 15 segundos ativos ou sem interação são descartadas.
- Troca de atividade finaliza a sessão anterior antes de iniciar a próxima.
- Fechamento, saída e conclusão gravam um motivo explícito.
- Rascunhos locais permitem recuperar uma sessão interrompida por recarregamento sem criar outro ID.
- XP é calculado pela diferença entre o início e o fim quando existe uma fonte local segura.

### Fluxos instrumentados

- curso A1–B2 em Japonês e Inglês;
- quiz real de pronúncia;
- revisão SRS e cada card avaliado;
- Hiragana e Katakana;
- Kanji N5–N1;
- dicionários Japonês e Inglês;
- pronúncia;
- Phrasal Verbs;
- minigames.

Kana, Kanji, dicionários, pronúncia, Phrasal Verbs e minigames usam o rastreador central da própria página. Curso, conclusão de módulos, quiz e SRS também emitem eventos explícitos nos pontos funcionais já existentes.

### Persistência, retenção e mesclagem

- Máximo de 200 sessões resumidas recentes por UID.
- Agregados diários limitados aos 366 dias mais recentes.
- Totais acumulados são preservados quando os detalhes antigos saem da retenção.
- IDs são deduplicados no registro local e na união com o Firestore.
- Agregados locais e remotos usam união de IDs e máximos determinísticos por métrica, evitando soma dupla.
- Preferências usam `preferenceUpdatedAt`; dados v1 sem timestamp são aceitos quando o perfil local está vazio.
- O registro local ocorre antes da tentativa de sincronização remota.
- Não existe gravação remota a cada segundo; a nuvem é atualizada na conclusão da sessão.
- Falha ou ausência do Firebase não impede a gravação local.

### Validação automatizada da Fase 1

- Resultado inicial antes da implementação: 18/18 grupos de regressão e 9/9 cenários de integração.
- Cobertura adicionada: migração v1→v2, JSON inválido, sessão curta, ausência de usuário, início, pausa, retomada, conclusão, inatividade, troca de atividade, temporizador único, idempotência, retenção e mesclagem local/remota.
- Resultado após a implementação: 19/19 grupos de regressão e 12/12 cenários de integração.

### Validação visual da Fase 1

- Dashboard autenticado verificado em desktop (1265 px) e celular (390 px).
- Temas claro e escuro verificados nos dois formatos.
- Sem rolagem horizontal indevida no conteúdo.
- Meta diária mostra o estado inicial baseado na nova medição real.
- O módulo central é carregado uma única vez e expõe o marcador invisível `data-study-session-ready="true"` após inicializar.
- Console: 0 `ReferenceError`, 0 `TypeError`, 0 rejeições não tratadas e 0 erros novos.

### Arquivos da Fase 1

1. `js/core/storage.js`
2. `js/core/study-session.js`
3. `js/core/events.js`
4. `js/course/course.js`
5. `js/course/tabs.js`
6. `js/srs/review.js`
7. `js/srs/engine.js`
8. `js/pronunciation/quiz.js`
9. `js/dashboard/meu-progresso.js`
10. `sw.js`
11. `tests/regression.cjs`
12. `tests/integration.cjs`
13. `tests/README.md`
14. `tests/ETAPA_29_DASHBOARD_MEU_PROGRESSO.md`

## Fase 2 avançada — estatísticas

Concluída em 2026-08-03. Foi adicionada uma seção global de Estatísticas, sem alterar o modelo v2 nem criar outra persistência.

### Filtros

- Período: 7, 30 ou 90 dias.
- Idioma: todos, Japonês (`ja-JP`) ou Inglês (`en-US`).
- Atividade: todas ou apenas tipos realmente encontrados nos agregados e sessões do usuário.
- A alteração ocorre no navegador sem recarregar a página.
- Os filtros atualizam as estatísticas, as distribuições textuais e o resumo semanal existente.

### Fórmulas

| Métrica | Fórmula e fonte |
| --- | --- |
| Minutos hoje, 7 e 30 dias | soma de `activeSeconds` no intervalo ÷ 60 |
| Dias ativos | quantidade de dias com tempo ativo ou atividade real registrada |
| Média por dia ativo | minutos medidos ÷ dias que possuem tempo ativo medido |
| Atividades concluídas | soma de `dailyAggregates.activities`; com filtro específico, soma das sessões detalhadas compatíveis |
| Sessões realizadas | soma de `dailyAggregates.sessionCount`; com filtro específico, quantidade de sessões compatíveis |
| Revisões respondidas | soma de `activityCount` das sessões com `activityType: "srs"` |
| Taxa de acertos | `Dados insuficientes`; acertos e erros históricos ainda não são persistidos |
| Metas alcançadas | dias medidos em que `activeSeconds >= dailyGoalMinutes × 60` |
| Cumprimento da meta | metas alcançadas ÷ dias medidos elegíveis × 100 |
| Maior sequência conhecida | maior quantidade de dias ativos consecutivos nos dados disponíveis, preservando a sequência global persistida quando aplicável |
| XP no período | soma de `xpEarned` dos agregados ou sessões compatíveis |
| Distribuição | proporção do tempo por idioma ou atividade; se não houver minutos, usa atividades detalhadas e identifica a troca de métrica |

A meta atual é aplicada aos dias históricos porque o projeto ainda não mantém um histórico de alterações da preferência. Essa limitação aparece na interface e não produz valores simulados.

### Confiabilidade

- Dias futuros não entram nos intervalos.
- Valores negativos, inválidos ou não numéricos são neutralizados.
- Dados anteriores à primeira medição continuam aparecendo nas métricas compatíveis de atividade, mas não recebem tempo ou XP estimado.
- Intervalos iniciados antes da primeira medição são identificados como parciais.
- Divisão por zero resulta em `Dados insuficientes`.
- A taxa de acertos permanece indisponível até existir fonte confiável na Fase 5.
- Combinações de idioma e atividade usam somente sessões detalhadas reais, pois os agregados não possuem uma dimensão cruzada segura.

### Validação da Fase 2

- Baseline: 19/19 grupos de regressão e 12/12 cenários de integração.
- Resultado final: 20/20 grupos de regressão e 13/13 cenários de integração.
- Cobertura: períodos 7/30/90, filtros, dados legados, dias sem dados, dias futuros, valores inválidos, divisão por zero, distribuições e indisponibilidade da taxa de acertos.
- Desktop validado em 1280 px e celular em 390 px.
- Temas claro e escuro validados.
- Filtros, estado vazio, textos auxiliares e distribuições verificados visualmente.
- Sem rolagem horizontal indevida.
- Console: 0 `ReferenceError`, 0 `TypeError`, 0 rejeições não tratadas e 0 erros novos.

### Arquivos da Fase 2

1. `meu-progresso.html`
2. `html/ja-JP/meu-progresso.html`
3. `js/dashboard/meu-progresso.js`
4. `style.css`
5. `sw.js`
6. `tests/regression.cjs`
7. `tests/integration.cjs`
8. `tests/README.md`
9. `tests/ETAPA_29_DASHBOARD_MEU_PROGRESSO.md`

## Fase 3 avançada — gráficos de aprendizado

Concluída em 2026-08-03. O resumo semanal foi ampliado para uma seção de gráficos acessíveis, sem alterar o modelo v2, a persistência, a sincronização ou regras funcionais.

### Gráficos e fontes

- **Evolução no período:** série diária dos 7, 30 ou 90 dias selecionados, usando as mesmas linhas filtradas das Estatísticas.
- **Métricas de evolução:** minutos (`activeSeconds ÷ 60`), atividades concluídas (`activities`) ou revisões SRS (`reviews`).
- **Distribuição do estudo:** proporção por idioma ou tipo de atividade. Usa tempo ativo quando disponível e atividades concluídas como alternativa explicitamente identificada.
- **Desempenho das revisões:** permanece em `Dados insuficientes`. A aplicação ainda não possui histórico confiável de acertos e erros; esse registro pertence à Fase 5.
- Dias sem estudo aparecem como zero na série; dias futuros não são incluídos.
- No primeiro acesso, a seção permanece visível para apresentar os estados vazios e explicar como os gráficos serão preenchidos.
- Nenhum valor é inventado, interpolado ou estimado.

### Implementação e acessibilidade

- O gráfico de evolução usa SVG nativo criado no navegador, sem biblioteca externa.
- A distribuição usa barras CSS leves e mantém valor percentual, quantidade e unidade em texto.
- Todos os gráficos possuem legenda contextual, unidade, rótulos e nome acessível.
- Séries e distribuições possuem alternativa textual completa para tecnologias assistivas.
- A informação não depende somente da cor: pontos, linha, rótulos, valores e percentuais identificam os dados.
- Os controles de métrica e agrupamento atualizam a visualização sem recarregar a página.
- O layout passa de duas para uma coluna em telas menores e não cria rolagem horizontal.
- Temas claro e escuro usam as cores semânticas existentes; não foram adicionadas animações.

### Validação da Fase 3

- Baseline: 20/20 grupos de regressão e 13/13 cenários de integração.
- Resultado final: 21/21 grupos de regressão e 14/14 cenários de integração.
- Cobertura automatizada: períodos 7/30/90, minutos, atividades, revisões, distribuição por idioma e atividade, percentuais, ausência de dados, SVG nativo, alternativas textuais, responsividade e ausência de bibliotecas de gráficos.
- Desktop validado em 1280 px nos temas claro e escuro; os estados vazios, controles, hierarquia visual e contraste permaneceram legíveis.
- Celular validado em 390 × 844 px nos temas claro e escuro; os painéis ficaram em uma coluna, controles ocuparam a largura disponível e não houve rolagem horizontal.
- Mudanças de métrica e agrupamento foram testadas sem recarregar a página.
- Console no desktop e no celular: 0 erros, 0 avisos, 0 `ReferenceError`, 0 `TypeError` e 0 rejeições não tratadas.
- O modelo de dados permanece na versão 2 e não houve migração adicional.
- Não houve alteração de regra de negócio, SRS, XP, autenticação ou sincronização.

### Arquivos da Fase 3

1. `meu-progresso.html`
2. `html/ja-JP/meu-progresso.html`
3. `js/dashboard/meu-progresso.js`
4. `style.css`
5. `sw.js`
6. `tests/regression.cjs`
7. `tests/integration.cjs`
8. `tests/README.md`
9. `tests/ETAPA_29_DASHBOARD_MEU_PROGRESSO.md`

## Funcionalidades ainda adiadas

- calendário mensal;
- histórico detalhado de respostas e revisões;
- taxa histórica de acertos;
- insights determinísticos locais;
- previsões, insights por IA, ranking social e notificações push permanecem fora do escopo.

## Validação

A validação automatizada deve ser executada com:

```powershell
npm.cmd test
```

Os testes visuais no navegador fazem parte da validação sempre que a alteração afetar interface, layout ou navegação.
