# ETAPA 28D — Estados vazios e erros recuperáveis

## Escopo concluído

A subetapa 28D padronizou estados vazios e mensagens de erros recuperáveis sem alterar regras de negócio, datasets, autenticação, persistência, algoritmos, critérios de desbloqueio ou estrutura do `AppState`.

Foi criado um componente visual compartilhado, usado apenas quando não há conteúdo ou quando uma operação recuperável falha. O sistema de toast existente foi reutilizado; nenhum sistema paralelo foi adicionado.

## Estados vazios adicionados

Total: **12 estados ou variações úteis**.

| Área | Estado | Orientação ou ação real |
| --- | --- | --- |
| SRS | Nenhuma revisão disponível | Concluir o Módulo 1 |
| SRS | Nenhuma revisão pendente | Voltar amanhã ou iniciar prática livre |
| SRS | Nenhum favorito no baralho | Favoritar cards ou itens do dicionário |
| SRS | Caderno de erros vazio | Continuar praticando |
| Dicionários | Nenhum resultado encontrado | Limpar busca e filtros |
| Conquistas | Nenhuma conquista desbloqueada | Concluir a primeira aula |
| Atividade | Nenhuma atividade recente | Estudar um módulo ou fazer uma revisão |
| Nuvem | Nenhum progresso salvo | Salvar os dados locais agora |
| Curso | Nenhum cartão de vocabulário | Voltar à trilha e escolher outro módulo |
| Pronúncia | Nenhum tópico encontrado | Limpar filtros e voltar ao A1 |
| Quiz de pronúncia | Nenhuma questão disponível | Escolher outro nível |
| Minigame | Nenhum item para os filtros | Alterar filtros ou categoria |

Todos os estados possuem título curto, explicação e recomendação. Botões são exibidos somente quando existe uma ação real.

## Erros recuperáveis padronizados

Foram tratados visualmente os seguintes grupos:

- falha de rede e Firebase;
- falha ao salvar ou restaurar progresso;
- progresso local inválido;
- falha de login, cadastro, Google e logout;
- áudio indisponível ou falha na síntese de voz;
- reconhecimento de voz sem suporte, sem permissão, sem microfone, sem fala ou com falha de rede;
- dataset ausente no dicionário;
- dataset ausente em pronúncia;
- falha crítica de inicialização;
- indisponibilidade do microfone no minigame.

As mensagens exibidas ao usuário não incluem códigos ou mensagens técnicas do Firebase, da Web Speech API ou de exceções. Esses detalhes continuam registrados exclusivamente no Console.

## Melhorias acessíveis

- estados vazios usam `role="status"` e `aria-live="polite"`;
- erros inline usam `role="alert"` e `aria-live="assertive"`;
- mensagens usam `aria-atomic="true"`;
- contador do dicionário anuncia a quantidade de resultados;
- botões SRS impossíveis são ocultados enquanto o estado está vazio;
- estados carregados não permanecem com `aria-busy="true"` visível.

## Arquivos modificados nesta subetapa

Total: **37 arquivos**, incluindo teste e este relatório.

### Implementação compartilhada e integrações — 16 arquivos

- `app.js`
- `style.css`
- `sw.js`
- `js/core/toast.js`
- `js/core/audio.js`
- `js/core/dictionary.js`
- `js/core/dom.js`
- `js/core/storage.js`
- `js/course/course.js`
- `js/game/minigames.js`
- `js/game/ranking.js`
- `js/pronunciation/quiz.js`
- `js/pronunciation/render.js`
- `js/pronunciation/speech-recognition.js`
- `js/srs/deck.js`
- `js/srs/review.js`

### Páginas — 19 arquivos

- `index.html`
- `hub_japones.html`
- `hub_ingles.html`
- `html/ja-JP/curso.html`
- `html/ja-JP/dicionario.html`
- `html/ja-JP/hiragana.html`
- `html/ja-JP/katakana.html`
- `html/ja-JP/kanji.html`
- `html/ja-JP/kanji_n5.html`
- `html/ja-JP/kanji_n4.html`
- `html/ja-JP/kanji_n3.html`
- `html/ja-JP/kanji_n2.html`
- `html/ja-JP/kanji_n1.html`
- `html/ja-JP/minigame.html`
- `html/en-US/curso_ingles.html`
- `html/en-US/dicionario_ingles.html`
- `html/en-US/minigame_ingles.html`
- `html/en-US/phrasal_verbs.html`
- `html/en-US/pronuncia_ingles.html`

As páginas receberam somente a versão `28d` do CSS. O cache foi atualizado para `japao-academy-v5`.

### Teste e documentação — 2 arquivos

- `tests/regression.cjs`
- `tests/ETAPA_28D_ESTADOS_VAZIOS_ERROS.md`

## Validação automatizada

Comando executado: `npm.cmd test`.

- **15/15 grupos de regressão aprovados**.
- **5/5 cenários de integração aprovados**.
- Sintaxe JavaScript aprovada.
- Referências locais das 19 páginas aprovadas.
- Contrato específico da 28D aprovado.
- `git diff --check` sem erro; apenas avisos de normalização de fim de linha do ambiente Windows.

## Validação visual

Uma origem local limpa foi usada para evitar interferência de versões anteriores do Service Worker.

- **19/19 páginas carregadas**.
- **0 ReferenceError**.
- **0 TypeError**.
- **0 unhandled rejection**.
- **0 console.error novo**.
- **0 avisos novos no Console**.
- **0 páginas com overflow horizontal** no viewport de validação.
- **0 estados vazios malformados**.
- **0 carregamentos visíveis presos em `aria-busy="true"`**.
- Tema claro e escuro validados.

Fluxos dirigidos conferidos:

- SRS sem módulos concluídos;
- favoritos vazios;
- caderno de erros vazio;
- busca sem resultados nos dicionários japonês e inglês;
- recuperação pelo botão `Limpar busca e filtros`;
- conquistas ainda não desbloqueadas;
- atividade recente vazia.

Durante o teste visual, foi identificado e corrigido um detalhe no dicionário inglês: o alfabeto continuava visível durante uma busca sem resultados. Agora o alfabeto é ocultado somente enquanto existe uma busca ativa, permitindo que o estado vazio apareça imediatamente.

O estado de backup inexistente depende de uma conta autenticada sem documento no Firestore e não foi provocado com uma conta real. Sua integração foi protegida pelo teste automatizado e pela inspeção do fluxo, evitando criação ou alteração de dados externos durante esta subetapa.

## Comparativo antes/depois

| Área | Antes | Depois |
| --- | --- | --- |
| SRS vazio | Texto genérico, botão impossível e alertas nativos | Estado contextual, orientação e ação somente quando válida |
| Dicionários | Linha simples sem recuperação | Título, explicação, anúncio e botão para limpar filtros |
| Favoritos e erros | Alertas bloqueantes | Feedback inline e toast existente |
| Conquistas | Apenas 35 cards bloqueados | Resumo inicial com próximo passo, preservando o catálogo |
| Atividade | Heatmap totalmente vazio | Explicação sobre como registrar a primeira atividade |
| Backup inexistente | Toast sem ação | Estado inline com ação `Salvar agora` |
| Áudio e voz | Falha silenciosa ou código técnico visível | Mensagem amigável e orientação de recuperação |
| Firebase | Mensagem técnica da exceção no toast | Detalhe técnico somente no Console |
| Dataset ausente | Área vazia ou texto de carregamento indefinido | Erro claro com ação `Tentar novamente` |

## Impacto estimado na performance

Impacto **negligenciável**:

- componente gerado somente quando necessário;
- nenhum observer novo;
- nenhum timer contínuo;
- nenhuma dependência externa;
- um pequeno bloco de DOM substitui áreas que já estariam vazias;
- o catálogo de conquistas e os datasets permanecem inalterados.

## Garantias funcionais

- Alteração de regra de negócio: **não**.
- Alteração do algoritmo SRS/SM-2: **não**.
- Alteração de XP ou desbloqueio: **não**.
- Alteração da estrutura do `AppState`: **não**.
- Alteração de autenticação ou formato persistido: **não**.
- Alteração funcional intencional: **somente apresentação de estados e recuperação visual real**.
- Regressão detectada: **não**.
- Problemas responsivos específicos corrigidos: **0 nesta subetapa**; o componente compartilhado possui adaptação móvel, mas a matriz completa pertence à 28F.

## Fora do escopo

- categorias, fila, deduplicação e fechamento manual dos toasts: 28E;
- foco, semântica completa dos modais e rótulos de formulários: 28E;
- transições de filtros e cards: 28E;
- matriz responsiva completa e medições finais: 28F.

**Status da Etapa 28D: concluída. Aguardar autorização antes de iniciar a Etapa 28E.**
