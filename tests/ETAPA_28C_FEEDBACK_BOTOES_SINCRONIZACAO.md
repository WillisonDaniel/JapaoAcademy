# ETAPA 28C — Feedback de botões e sincronização

## Escopo concluído

A subetapa 28C foi implementada sem alterar regras de negócio, persistência, autenticação, estrutura do `AppState`, algoritmos ou critérios de progressão. As mudanças se limitam à apresentação temporária de operações assíncronas e ao estado visual da sincronização já existente.

## Resultado

- 9 fluxos receberam feedback visual de andamento e proteção contra clique duplo.
- 5 estados de sincronização foram padronizados: `Salvo localmente`, `Sincronizando`, `Sincronizado`, `Falha ao sincronizar` e `Offline`.
- 1 indicador discreto e acessível foi integrado ao cabeçalho das 19 páginas.
- Botões restauram conteúdo, disponibilidade e `aria-busy` no sucesso, na falha e nas saídas antecipadas.
- Nenhum toast foi adicionado às gravações silenciosas.
- O funcionamento offline foi preservado.

## Fluxos com feedback

| Fluxo | Durante a operação | Confirmação ou restauração |
| --- | --- | --- |
| Login com e-mail | `Entrando...` | `Entrada concluída` ou restauração após erro |
| Cadastro | `Criando conta...` | `Conta criada` ou restauração após erro |
| Login Google | `Conectando...` | `Conectado` ou restauração após erro |
| Salvar na nuvem | `Salvando...` | `Salvo na nuvem` ou restauração após erro |
| Carregar da nuvem | `Carregando...` | `Dados restaurados` ou restauração após erro |
| Resetar progresso | `Resetando...` | execução original após confirmação |
| Iniciar revisão SRS | `Preparando revisão...` | restauração ao abrir ou quando não há cards |
| Finalizar módulo | `Concluindo módulo...` | restauração após a conclusão original |
| Gerar certificado | `Gerando certificado...` | restauração ao abrir o certificado |

## Indicador de sincronização

O cabeçalho usa uma região `role="status"`, `aria-live="polite"` e `aria-atomic="true"`. O estado é atualizado nos seguintes pontos existentes:

- gravação local;
- início e conclusão de sincronização silenciosa;
- sincronização inicial após autenticação;
- salvamento e carregamento manual da nuvem;
- falha de comunicação ou preparação do backup;
- entrada e saída do modo offline.

## Arquivos modificados nesta subetapa

Total: **30 arquivos**, incluindo teste e este relatório.

### Implementação compartilhada — 9 arquivos

- `app.js`
- `style.css`
- `sw.js`
- `js/core/toast.js`
- `js/core/dom.js`
- `js/core/events.js`
- `js/core/storage.js`
- `js/course/course.js`
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

As páginas receberam somente a versão `28c` do CSS para invalidação segura do cache. Os dois players de curso também encaminham o botão de origem para o feedback de geração do certificado.

### Teste e documentação — 2 arquivos

- `tests/regression.cjs`
- `tests/ETAPA_28C_FEEDBACK_BOTOES_SINCRONIZACAO.md`

## Validação automatizada

Comando executado: `npm.cmd test`.

- **14/14 grupos de regressão aprovados**.
- **5/5 cenários de integração aprovados**.
- Sintaxe JavaScript aprovada.
- Referências locais das 19 páginas aprovadas.
- Contrato específico da 28C aprovado: estados, `aria-busy`, restauração em `finally`, indicador acessível, animação reduzida e integrações previstas.
- `git diff --check` sem erro; apenas avisos de normalização de fim de linha do ambiente Windows.

## Validação visual direcionada

Foi usada uma origem local limpa para evitar interferência do Service Worker anterior. O cache foi atualizado para `japao-academy-v4`.

- **19/19 páginas carregadas** com o indicador visível e rotulado.
- **0** botões permaneceram com `aria-busy="true"` depois da inicialização.
- **0** páginas apresentaram overflow horizontal no viewport de validação.
- **0 ReferenceError**.
- **0 TypeError**.
- **0 unhandled rejection**.
- **0 console.error novo**.
- **0 avisos novos no Console**.
- Tema claro e escuro conferidos visualmente com o indicador preservado.
- Login com credencial deliberadamente inválida confirmou `Entrando...`, botão desabilitado e `aria-busy="true"`; após a falha recuperável, o texto, a classe, o estado habilitado e `aria-busy="false"` foram restaurados.
- Nenhum usuário real foi criado durante esse teste visual.

## Comparativo antes/depois

| Área | Antes | Depois |
| --- | --- | --- |
| Autenticação | Ação sem estado persistente visível | Texto de andamento, bloqueio de clique duplo e restauração segura |
| Nuvem | Resultado dependia principalmente de toast | Botão informa andamento e cabeçalho reflete a sincronização |
| Salvamento local | Sem indicação discreta contínua | Cabeçalho informa `Salvo localmente` |
| Offline e falhas | Estado não consolidado no cabeçalho | Estados `Offline` e `Falha ao sincronizar` padronizados |
| SRS | Início imediato sem confirmação visual | `Preparando revisão...` durante a preparação original |
| Curso | Conclusão sem bloqueio visual do botão | `Concluindo módulo...` e proteção contra clique repetido |
| Certificado | Modal aberto sem indicação de geração | Feedback curto antes da abertura do certificado |
| Reset | Confirmação seguida da ação sem estado visual | `Resetando...` depois da confirmação original |

## Impacto estimado na performance

Impacto **negligenciável**:

- um único elemento de estado adicionado por página;
- um `WeakMap` compartilhado para operações ativas;
- nenhum observer novo;
- nenhum timer contínuo;
- nenhuma dependência externa;
- animações restritas a `transform` e desativadas com `prefers-reduced-motion`;
- sem recriação periódica de DOM.

## Garantias funcionais

- Alteração de regra de negócio: **não**.
- Alteração de algoritmo, XP ou desbloqueio: **não**.
- Alteração da estrutura do `AppState`: **não**.
- Alteração de autenticação ou formato persistido: **não**.
- Alteração funcional intencional: **somente feedback visual e prevenção de clique duplo durante a mesma operação**.
- Regressão detectada: **não**.

## Fora do escopo e próximos passos

Não foram implementados nesta subetapa:

- estados vazios e mensagens de erro padronizadas, reservados para a 28D;
- revisão ampla de toasts, reservada para a 28D;
- transições e auditoria completa de acessibilidade, reservadas para a 28E;
- correções responsivas finais e medições consolidadas, reservadas para a 28F.

**Status da Etapa 28C: concluída. Aguardar autorização antes de iniciar a Etapa 28D.**
