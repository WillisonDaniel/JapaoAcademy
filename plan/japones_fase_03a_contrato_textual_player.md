# Plano de implementação — Fase 3A: Contrato textual e player japonês

## Objetivo

Criar um contrato textual retrocompatível para que o player diferencie o que deve ser exibido, pronunciado e usado como apoio pedagógico. Esta fase prepara a correção editorial A1–B2 sem migrar os 105 módulos de uma só vez e sem alterar progresso, IDs ou desbloqueio.

## Escopo funcional

### Contrato normalizado

- Criar em `js/course/moduleNormalizer.js` um normalizador reutilizável para entradas textuais japonesas.
- Aceitar, quando presentes, os campos:
  - `displayText`: escrita mostrada como conteúdo principal;
  - `audioText`: escrita enviada ao TTS;
  - `furigana`: apoio de leitura em Kana;
  - `romaji`: transliteração latina;
  - `translation`: tradução em português;
  - `scenario`: descrição de cena, separada da tradução;
  - `canDo`: resultado observável da aula.
- Preservar todos os campos legados. O normalizador deve acrescentar o contrato novo sem remover `text`, `npcMessage`, `audioGuide`, `translation` ou `scenario`.
- Não inferir Furigana, Romaji, tradução ou japonês inexistente. Ausência deve permanecer ausência explícita.
- Para conteúdo legado, usar o texto principal existente como fallback de `displayText` e `audioText`, preservando o comportamento até a migração editorial.
- Manter `scenario` independente. Por compatibilidade, `translation` pode continuar refletindo o fallback antigo somente nos aliases legados; os novos campos normalizados não devem declarar uma cena como tradução.

### Contexto, vocabulário e diálogo

- Normalizar `stage1_context.audioGuide` em uma propriedade adicional `context.audio`, sem apagar `audioGuide`.
- Adicionar a cada cartão de vocabulário um objeto `content` com o contrato textual, mantendo os campos atuais no nível raiz.
- Adicionar a cada linha de diálogo um objeto `content` com o contrato textual e manter os aliases usados pelos módulos antigos.
- Expor `canDo` no módulo normalizado apenas quando o dataset o fornecer; não fabricar objetivos a partir de títulos ou descrições.

### Renderização e áudio

- Atualizar `js/course/course.js` para preferir o novo contrato e usar os campos legados apenas como fallback.
- Renderizar, em regiões semanticamente distintas:
  - conteúdo principal;
  - Furigana, quando fornecido e habilitado;
  - Romaji, quando fornecido e habilitado;
  - tradução;
  - cenário, quando existir.
- O botão de áudio deve enviar exclusivamente `audioText` ao sintetizador.
- Não enviar tradução, Romaji, indicações cênicas ou marcação HTML ao TTS quando `audioText` explícito existir.
- Escapar conteúdo inserido em HTML e argumentos de eventos para impedir que apóstrofos ou marcação quebrem o player.
- Manter o layout e os cinco estágios do player; esta fase não redesenha a página do curso.

### Opções de leitura

- Reutilizar `getOpcoesLeitura()` e as chaves existentes `ja_opt_furigana` e `ja_opt_romaji`.
- Não criar preferências paralelas nem redefinir escolhas já persistidas pelo usuário.
- Aplicar as opções ao novo Furigana e Romaji do player.
- Na ausência de preferência persistida, manter os defaults atuais: Furigana ligado e Romaji desligado.
- Não esconder conteúdo principal japonês quando um apoio de leitura estiver ausente.

### Compatibilidade por idioma

- Ativar o contrato específico apenas para conteúdo japonês ou entradas que forneçam os novos campos.
- Inglês, espanhol, russo e italiano devem manter a renderização e o áudio atuais.
- Nenhum dataset será reestruturado em massa nesta fase.

## Testes

- Ampliar `tests/integration.cjs` ou criar fixture dedicada para validar:
  - módulo legado produz o mesmo texto principal e áudio de antes;
  - módulo novo mantém separados `displayText`, `audioText`, `furigana`, `romaji`, `translation` e `scenario`;
  - cenário não passa a ser tradução no novo contrato;
  - `canDo` só existe quando declarado;
  - TTS recebe somente `audioText` explícito;
  - Furigana e Romaji respeitam as preferências existentes;
  - conteúdo sem apoio opcional continua renderizável;
  - outros idiomas não sofrem alteração de contrato observável.
- Adicionar regressões para impedir o retorno do uso direto de `speechText` completo no TTS quando houver `audioText`.
- Confirmar que permanecem 105 módulos japoneses e que os IDs não mudam.
- Executar `npm.cmd test` e `git diff --check`.

## Validação visual

- Validar um módulo legado e uma fixture/módulo com contrato novo em 390 px e desktop, temas claro e escuro.
- Conferir vocabulário, diálogo, botões de áudio, ausência/presença de Furigana e Romaji e textos longos.
- Confirmar zero novos erros no console.
- Se o navegador integrado continuar indisponível, registrar exatamente a falha e manter a validação visual como pendência, sem bloquear testes determinísticos nem alegar cobertura inexistente.

## Restrições

- Não reescrever conteúdo japonês em larga escala.
- Não alterar IDs, ordem de módulos, XP, progresso, SRS, certificado ou desbloqueio.
- Não criar transliteração ou tradução automaticamente.
- Não considerar texto linguisticamente aprovado sem revisão humana.
- Preservar a remoção preexistente de `.txt` fora do commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_03A_CONTRATO_TEXTUAL_PLAYER.md`.
- Criar o plano decision-complete da Fase 3B — Correção editorial A1 e A2.
- Fazer commit exclusivo da Fase 3A.
- Prosseguir automaticamente para a Fase 3B.
