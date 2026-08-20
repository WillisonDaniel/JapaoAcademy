# Fase 19 — Auditoria editorial de Kana e Kanji N5–N1

## Escopo concluído

- 16 módulos de Kana: 8 de Hiragana e 8 de Katakana.
- 92 módulos de Kanji N5–N1.
- 2.215 registros de Kanji, correspondentes a 1.267 caracteres únicos.
- 14.899 alvos editoriais classificados individualmente no ledger central.

## Evidência consultada

- Genki I, 2ª edição, páginas 23, 24, 26, 28 e 30, inspecionadas também por renderização visual.
- KANJIDIC2 local para identidade e leituras on'yomi/kun'yomi.
- O corpus privado, as renderizações, o OCR e as ferramentas permaneceram em `livros/` e `scratch/`, fora do Git.

## Resultado editorial

| Estado | Alvos |
|---|---:|
| Aprovados por correspondência objetiva com fonte | 6.126 |
| Corrigidos | 23 |
| Inconclusivos, preservados com rastreabilidade | 8.750 |
| Total | 14.899 |

As aprovações objetivas incluem:

- 389 leituras de Kana verificadas;
- 2.214 identidades de Kanji verificadas;
- 2.139 campos de on'yomi verificados;
- 1.384 campos de kun'yomi verificados.

O sinal de repetição `々` permaneceu inconclusivo como identidade Kanji, pois não é um caractere Kanji independente no KANJIDIC2. Leituras compostas, variantes pedagógicas e itens de naturalidade sem evidência localizada suficiente também permaneceram `unresolved`; nenhum foi aprovado por inferência.

## Correções aplicadas

- Terminologia `bushu` corrigida e explicada com maior precisão.
- Origem e função dos Kanji reescritas sem afirmar que o sistema elimina ambiguidades automaticamente.
- Kun'yomi, okurigana e on'yomi apresentados como tendências com exceções, não como regras absolutas.
- Exemplo gramatical sobre a transmissão dos Kanji corrigido.
- `誤 (dare)` e o título correspondente corrigidos para `誰 (dare)`; `驅` corrigido para `駅` no exemplo.
- Forma atributiva `大きいいえ` corrigida para `大きい家`.
- Explicação de `か` corrigida para não tratá-la como marcador exclusivo de perguntas.
- Alegação de palavra “garantida” no JLPT removida.
- Hipérbole de “300%” e alegações de domínio removidas.
- Generalizações absolutas sobre `女`, `古い` e níveis JLPT foram substituídas por orientações contextuais.
- Metadados da revisão N5 deixam explícito que a trilha não é uma lista oficial do JLPT.

## Integridade preservada

- IDs, ordem, módulos, registros, respostas não relacionadas, SRS, XP, progresso, favoritos, persistência e desbloqueio não foram alterados.
- As 159 decisões da Fase 17 permanecem preservadas.
- O contrato `japanese-phase19-editorial.cjs` exige cobertura integral, hashes finais, referências para aprovações/correções e as contagens acima.

## Pendências editoriais

Os 8.750 casos inconclusivos continuam explicitamente registrados para conferência localizada. Eles abrangem sobretudo significados, exemplos, textos, quizzes, orientações mnemônicas e leituras que não coincidem de forma direta com uma única entrada da fonte lexical. Esses casos não são tratados como aprovados na interface editorial.

## Validação

- Índices derivados regenerados após as mudanças canônicas.
- Contrato editorial da fase executado.
- Suíte completa, testes PWA e verificação de diferenças executados antes do commit exclusivo da fase.
