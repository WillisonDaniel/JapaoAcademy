# Plano de implementação — Fase 3C: Correção editorial B1 e B2

## Objetivo

Migrar B1 e B2 para o contrato textual da Fase 3A, substituindo Romaji usado como fala principal por japonês natural e separando áudio, apoios e tradução. Preservar integralmente IDs, sequência, exercícios, respostas, XP, progresso e desbloqueio.

## Estado de entrada

| Nível | Módulos | Guia sem japonês | Diálogo sem japonês | Total editorial-alvo |
|---|---:|---:|---:|---:|
| B1 | 24 | 23 | 66 | 89 |
| B2 | 20 | 17 | 55 | 72 |
| Total | 44 | 40 | 121 | 161 |

Snapshots estruturais de entrada:

- B1: `1963747d67c549242073eb9f419c3a86fabc82d3b6b2ce5ab19011c54b674dae`;
- B2: `91f8860fee76d18bd2c958fabc097e5bf3269dde716f6780721f1978e3374dd2`.

## Estratégia de execução

- Trabalhar em quatro lotes:
  1. B1 módulos 01–12;
  2. B1 módulos 13–24;
  3. B2 módulos 01–10;
  4. B2 módulos 11–20.
- Executar auditoria e snapshots após cada lote.
- Manter japonês novo com `editorialReview.status = "pending-human-review"`.
- Não promover Romaji legado a fonte linguística aprovada; usá-lo apenas como pista para conferir o conteúdo e registrar correções objetivas.

## Guias e diálogos

- Dar aos 44 módulos um `stage1_context.audio` explícito, inclusive quando o guia legado já contém japonês, para manter contrato uniforme.
- Migrar as 121 falas apontadas pela auditoria.
- Manter falas que já estão em japonês no caminho legado, salvo quando a inspeção revelar concatenação de tradução, cenário ou marcador impronunciável.
- Separar `displayText`, `audioText`, `furigana`, `romaji`, `translation` e `scenario`.
- Remover `[Seu Nome]`, setas, barras alternativas, explicações e português do `audioText`.
- Tratar ações cênicas e pausas como cenário sem áudio.
- Usar registro e polidez coerentes com a situação; não misturar casual, 丁寧語 e 敬語 sem justificativa contextual.
- Evitar Romaji como apoio padrão em B1/B2. Ele pode permanecer no contrato para opção explícita do aluno, mas o texto principal deve ser japonês.

## Resultados `canDo`

- Adicionar um objetivo curto, observável e compatível com o conteúdo de cada um dos 44 módulos.
- Não declarar fluência, domínio amplo, equivalência JLPT ou proficiência externa.
- Incluir os objetivos na revisão humana da fase.

## Auditoria e revisão humana

- Estender as exigências de contrato/status da auditoria para B1/B2 após a migração.
- Meta mecânica: reduzir as 161 ocorrências B1/B2 das duas regras-alvo para zero, sem allowlist ampla.
- Criar `tests/JAPANESE_B1_B2_HUMAN_REVIEW.md` com módulo, campo, japonês, Romaji, tradução/cenário e status.
- Manter o backlog Kanji fora do escopo e numericamente inalterado nesta fase.

## Testes

- Adicionar snapshots B1/B2 que ignorem somente `audio`, `content`, `canDo` e `editorialReview`.
- Validar:
  - 44 guias contratados;
  - 121 diálogos migrados;
  - 44 objetivos `canDo`;
  - zero marcador de nome no áudio;
  - zero tradução/cenário concatenado ao TTS;
  - 44 status `pending-human-review`;
  - zero ocorrência-alvo B1/B2;
  - respostas, índices corretos e estrutura original preservados.
- Executar `npm.cmd run audit:japanese:check`, `npm.cmd run test:japanese-text`, `npm.cmd test` e `git diff --check`.
- Reavaliar o orçamento de carregamento com os bytes reais. Preferir representação compacta ou carregamento por nível se a margem protegida for ultrapassada; qualquer recalibração deve ser explícita e baseada no tamanho medido.

## Validação visual

- Validar ao menos um módulo de cada lote em 390 px e desktop, temas claro e escuro.
- Conferir textos longos, Furigana, Romaji opcional, tradução, cenário e TTS.
- Confirmar zero erros novos no console.
- Se o navegador integrado não inicializar, registrar a falha exata e manter a cobertura pendente.

## Restrições

- Não alterar A1/A2, Kana ou Kanji, exceto proteções de teste compartilhadas.
- Não alterar IDs, ordem, XP, progresso, SRS, certificado ou desbloqueio.
- Não marcar conteúdo como aprovado sem revisão humana qualificada.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_03C_CORRECAO_B1_B2.md`.
- Criar o plano decision-complete da Fase 4 — Reestruturação pedagógica e prática comunicativa.
- Fazer commit exclusivo da Fase 3C.
- Prosseguir automaticamente para a Fase 4 nas tarefas que não dependam da aprovação editorial humana.
