# Plano de implementação — Fase 3B: Correção editorial A1 e A2

## Objetivo

Migrar A1 e A2 para o contrato textual da Fase 3A, substituindo Romaji usado como conteúdo principal por japonês real, sem alterar IDs, ordem, progresso, XP, respostas corretas ou desbloqueio. Todo texto japonês novo permanecerá pendente de revisão editorial humana.

## Estado de entrada mensurável

| Nível | Módulos | Guia de áudio sem japonês | Diálogo sem japonês | Total editorial |
|---|---:|---:|---:|---:|
| A1 | 31 | 31 | 2 | 33 |
| A2 | 30 | 30 | 88 | 118 |
| Total | 61 | 61 | 90 | 151 |

As duas ocorrências A1 de diálogo são indicações não pronunciáveis (`*(Limpando o balcão do outro lado da sala)*` e `...`). Elas devem ser tratadas como cenário/pausa, não convertidas artificialmente em fala japonesa.

## Estratégia de edição

- Trabalhar em quatro lotes revisáveis:
  1. A1 módulos 01–16;
  2. A1 módulos 17–31;
  3. A2 módulos 01–15;
  4. A2 módulos 16–30.
- Após cada lote, executar a auditoria japonesa e os testes do contrato textual.
- Não usar transliteração automática como fonte editorial final.
- Preservar a frase antiga somente nos campos de apoio necessários; não manter Romaji e tradução concatenados em `displayText` ou `audioText`.

## Migração dos guias de áudio

Para os 61 `stage1_context.audioGuide`:

- manter `audioGuide` por compatibilidade;
- adicionar `audio` com:
  - `displayText` em escrita japonesa natural;
  - `audioText` somente com a fala japonesa;
  - `furigana` quando houver Kanji acima do repertório esperado do módulo;
  - `romaji` separado;
  - `translation` em português;
  - `scenario` vazio, salvo contexto cênico real;
- não enviar títulos, explicações ou tradução ao TTS;
- adicionar `editorialReview: { status: 'pending-human-review', phase: '3B' }` no módulo ou item alterado.

## Migração dos diálogos

### A1

- Mover a ação de `a1_mod_03` para `content.scenario`, deixando `audioText` vazio se a linha não contiver fala.
- Representar a pausa de `a1_mod_21` como cenário/pausa acessível, sem TTS de reticências.
- Confirmar que as demais falas A1 já contêm escrita japonesa ou registrar correções específicas reveladas pela inspeção manual.

### A2

- Migrar as 88 falas apontadas pela auditoria para `content`.
- Separar rigorosamente:
  - japonês em `displayText` e `audioText`;
  - leitura em `furigana`/`romaji`;
  - português em `translation`;
  - ações e ambiente em `scenario`.
- Corrigir durante a migração erros objetivos presentes no Romaji legado, incluindo formas suspeitas já inventariadas como `maasa`, `suportsusimasu`, `Kino`, `Tsuugi`, `kooki`, `kais(u)` e `Coosu Kanryou`; cada correção deve ser registrada no relatório da fase.
- Preservar `[Seu Nome]` somente no texto exibido quando necessário. O `audioText` deve usar uma formulação japonesa pronunciável que não leia o marcador literal.
- Manter opções, feedbacks e índices corretos do diálogo, exceto quando houver inconsistência objetiva comprovada por teste.

## Resultados `canDo`

- Adicionar um `canDo` observável por módulo A1/A2, alinhado ao conteúdo já existente.
- Redigir em português, com um único resultado curto e verificável.
- Não prometer fluência, domínio amplo ou competência externa.
- Marcar os novos objetivos como parte do mesmo lote pendente de revisão humana.

## Auditoria e rastreabilidade

- Ampliar `tests/japanese-editorial-audit.cjs` para exigir o contrato explícito nos módulos A1/A2 migrados.
- A auditoria deve distinguir linha cênica sem TTS de fala japonesa ausente.
- Meta mecânica da fase: reduzir de 151 para zero as ocorrências A1/A2 das regras `audio-guide-no-japanese` e `dialogue-no-japanese`, salvo exceção exata, justificada e aprovada no relatório.
- Não adicionar allowlist ampla por nível, módulo inteiro ou tipo de campo.
- Atualizar `JAPANESE_EDITORIAL_OCCURRENCES.json` e `JAPANESE_EDITORIAL_REVIEW.md` após cada lote e no fechamento.
- Gerar uma tabela de revisão humana contendo módulo, campo, japonês, Romaji, tradução e status.

## Testes

- Adicionar fixtures para:
  - linha falada válida em japonês;
  - linha de cenário válida sem áudio;
  - marcador `[Seu Nome]` ausente do `audioText`;
  - tradução e cenário não concatenados ao TTS;
  - metadado `pending-human-review` não interpretado como aprovação.
- Validar 61 módulos, IDs únicos e ordem original.
- Confirmar que respostas, índices corretos e quantidades de exercícios permanecem estáveis por snapshot estrutural antes/depois.
- Executar `npm.cmd run audit:japanese:check`, `npm.cmd run test:japanese-text`, `npm.cmd test` e `git diff --check`.

## Validação visual

- Validar ao menos um módulo de cada lote em 390 px e desktop, temas claro e escuro.
- Alternar Furigana e Romaji e confirmar que o texto principal nunca desaparece indevidamente.
- Ouvir guia e diálogo, verificando que o TTS não pronuncia Romaji, português, marcação de nome ou cenário.
- Confirmar zero novos erros no console.
- Se o navegador integrado continuar indisponível, registrar a falha exata e manter a cobertura visual pendente, sem bloquear as verificações determinísticas.

## Restrições

- Não alterar B1, B2 ou datasets Kanji nesta fase.
- Não mudar IDs, sequência, XP, progresso, SRS, certificado ou desbloqueio.
- Não declarar revisão humana concluída sem participação humana qualificada.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_03B_CORRECAO_A1_A2.md`.
- Criar o plano decision-complete da Fase 3C — Correção editorial B1 e B2.
- Fazer commit exclusivo da Fase 3B.
- Prosseguir automaticamente para a Fase 3C nas tarefas técnicas independentes de aprovação editorial humana.
