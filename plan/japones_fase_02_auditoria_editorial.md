# Plano de implementação — Fase 2: Auditoria editorial japonesa

## Objetivo

Criar uma auditoria automatizada, determinística e permanente para localizar problemas estruturais/editoriais em todos os datasets japoneses, sem reescrever língua natural nem bloquear o baseline legado de uma só vez.

## Fontes auditadas

- Curso principal: A1, A2, B1 e B2.
- Cursos especiais: Hiragana e Katakana.
- Kanji: N5, N4, N3, N2 e N1.
- Índices derivados: dicionário japonês e minigame Kanji, apenas para sincronização.

## Classificação

- `blocking`: quebra estrutural, ID duplicado, resposta inválida, campo obrigatório ausente ou índice divergente.
- `editorial`: conteúdo que exige correção/revisão humana, como Romaji principal, mistura indevida de inglês, leitura latina ou exemplo sem o Kanji-alvo.
- `allowed`: exceção explicitamente documentada e identificada por regra estreita.

O comando padrão falhará apenas para ocorrências `blocking`. Ocorrências `editorial` serão inventariadas por nível e permanecerão visíveis até as fases de correção correspondentes.

## Implementação

- Criar `tests/japanese-editorial-audit.cjs` com `--write` para atualizar relatórios e modo padrão somente de verificação.
- Carregar datasets em contextos isolados e produzir ocorrências com `dataset`, `level`, `moduleId`, `field`, `rule`, `severity` e amostra curta.
- Regras do curso principal:
  - módulos e IDs válidos/únicos;
  - estruturas de diálogo e quiz completas;
  - exatamente uma resposta correta quando aplicável;
  - `npcMessage` e `audioGuide` sem escrita japonesa classificados como `editorial` conforme nível;
  - mistura de Romaji com palavras inglesas não autorizadas;
  - áudio não japonês em campos destinados ao TTS `ja-JP`.
- Regras de Kana:
  - oito módulos por curso;
  - Kana, Romaji e significados obrigatórios;
  - respostas de quiz correspondentes ao conteúdo;
  - exceções de empréstimos estrangeiros restritas ao Katakana.
- Regras de Kanji:
  - módulos, números e contagens estáveis;
  - caractere, significado e leituras presentes;
  - leitura on/kun somente latina classificada como `editorial`;
  - exemplos sem escrita japonesa ou com termos ingleses indevidos classificados como `editorial`;
  - exemplo deve conter o caractere-alvo ou registrar exceção explícita;
  - quizzes com respostas válidas;
  - metadados `pending-human-review` reconhecidos, mas nunca tratados como aprovação.
- Criar uma allowlist pequena em código, com motivo obrigatório e identidade exata do registro; proibir padrões amplos por nível inteiro.
- Gerar:
  - `tests/JAPANESE_EDITORIAL_OCCURRENCES.json` para consumo mecânico;
  - `tests/JAPANESE_EDITORIAL_REVIEW.md` para leitura humana.
- Adicionar scripts `audit:japanese` e `audit:japanese:check` ao `package.json`.
- Inserir `audit:japanese:check` no `npm test` antes das suítes de regressão.
- Adicionar contratos em `tests/regression.cjs` para garantir a presença da auditoria, dos relatórios e das regras essenciais.

## Segurança e compatibilidade

- Não alterar datasets pedagógicos nesta fase, exceto se a própria auditoria revelar erro estrutural que impeça sua execução; qualquer exceção deve ser documentada.
- Não corrigir automaticamente Romaji, traduções, leituras, frases ou respostas.
- Não alterar IDs, índices, progresso, SRS ou regras de negócio.
- Não fazer a suíte falhar por dívida editorial já inventariada; as fases 3–6 reduzirão esse backlog progressivamente.

## Testes e aceitação

- Executar auditoria em modo de escrita e depois em modo de verificação.
- Criar fixtures sintéticas em memória para provar que cada regra detecta um caso inválido e aceita um caso válido.
- Confirmar contagens-base: 105 módulos principais, 16 módulos Kana, 92 módulos Kanji, 2.215 registros e 1.267 caracteres únicos.
- Confirmar que o relatório contabiliza separadamente A1, A2, B1, B2 e N5–N1.
- Executar `npm.cmd test` com 28/28 regressão, 20/20 integração e 26/26 multidioma ou resultados superiores.
- Executar `git diff --check` e confirmar que `.txt` continua fora do commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_02_AUDITORIA_EDITORIAL.md`.
- Criar o plano decision-complete da Fase 3A — Contrato textual e player.
- Fazer commit exclusivo da Fase 2.
- Prosseguir automaticamente para a Fase 3A.
