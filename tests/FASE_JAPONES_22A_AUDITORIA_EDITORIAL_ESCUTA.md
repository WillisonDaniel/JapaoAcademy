# Fase 22A — Auditoria editorial da Escuta japonesa

## Resultado

A coleção de Escuta foi auditada como projeção determinística do curso A1–B2. Os 319 trechos agora apontam para um alvo canônico existente, sustentado e acompanhado das respectivas referências editoriais.

| Estado | Quantidade |
|---|---:|
| Aprovados | 29 |
| Corrigidos no curso de origem | 290 |
| Inconclusivos | 0 |
| Total | 319 |

## Correções encontradas durante a auditoria

O gerador de rastreabilidade usava um campo `sourceIndex` inexistente no índice público. Por isso, 216 diálogos apareciam como inconclusivos embora suas origens A1–B2 já estivessem sustentadas. A posição passou a ser recuperada do identificador estável do trecho.

Também foram corrigidos quatro resíduos deixados pela remoção do marcador de nome:

- `の趣味は何ですか。` → `趣味は何ですか。`;
- `は日本語が上手ですね！` → `日本語が上手ですね！`;
- `様、お部屋は四〇二号室です。` → `お客様、お部屋は四〇二号室です。`;
- `の生きがいは何ですか。` → `生きがいは何ですか。`.

Texto visível, texto enviado à síntese de voz, Romaji e tradução foram alinhados no dataset canônico e no índice derivado. IDs, módulos, quantidade de trechos, navegação, progresso, XP, SRS e persistência permaneceram inalterados.

## Rastreabilidade e validação

- 319/319 decisões derivadas possuem exatamente uma origem canônica A1–B2.
- Nenhum trecho foi aprovado por semelhança ou inferência.
- As quatro correções preservam as referências já localizadas no *Genki I*, *Quartet II* e *Tobira*.
- O ledger global passou a 7.366 aprovações, 1.781 correções e 14.389 casos inconclusivos.
- Nos recursos derivados restam 5.639 casos inconclusivos, todos fora de Escuta e Escrita.
- O cache PWA foi atualizado para `idiomas-academy-v50`.

## Plano da Fase 22B — Leitura

1. Auditar os 91 textos e suas 180 perguntas contra os módulos Kanji de origem.
2. Separar correções linguísticas de marcação HTML e preservar somente `ruby` e `rt` permitidos.
3. Conferir naturalidade, leitura, tradução, alternativas e gabaritos; decisões de naturalidade exigirão duas evidências independentes.
4. Corrigir primeiro o dataset canônico Kanji e regenerar o índice de Leitura, nunca o contrário.
5. Registrar hashes, referências e estados individuais; itens sem fonte suficiente permanecerão inconclusivos.
6. Executar contratos de Leitura, suíte completa, `git diff --check` e criar commit isolado.
