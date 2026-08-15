# Fase 13 — Hub por habilidades, Dashboard e auditoria de release

## Resultado

A fase final consolidou a área japonesa sem criar métricas ou persistência paralelas. O hub agora é organizado por habilidades e o Dashboard mostra somente sessões japonesas realmente registradas.

## Hub por habilidades

Quatro grupos públicos:

1. Fundamentos: curso, Hiragana, Katakana, Kanji e gramática.
2. Compreensão: escuta, leitura e dicionário.
3. Produção e prática: escrita e minigame.
4. Acompanhamento: preparação JLPT e Meu Progresso.

Foram removidas do hub alegações de plataforma “definitiva”, domínio do idioma, minigame “oficial” e vocabulário “de proficiência”. O aviso sobre níveis JLPT de referência e revisão humana permanece visível.

## Dashboard por habilidade

`criarResumoHabilidadesJaponesDashboard` considera somente `sessions` com `language === 'ja-JP'` e classifica por prefixo real de `contentId` ou `activityType` existente:

- Curso, Kana, Kanji, Escuta, Leitura, Gramática, Escrita;
- Dicionário, Minigame, Revisão SRS e Preparação JLPT;
- Outros para sessões japonesas não reconhecidas.

Cada cartão apresenta número de sessões, segundos reais convertidos para exibição em minutos e última atividade registrada. Sessões de outros idiomas são ignoradas. `dailyAggregates` sem origem detalhada não são redistribuídos. Nenhuma chave, migração ou formato persistido foi alterado.

## Contratos e auditoria final

- Contratos finais: **7/7**.
- Regressão: **42/42** grupos.
- Integração: **21/21** cenários.
- Multidioma: **32/32** cenários.
- PWA: **130 recursos**, aproximadamente **11,80 MB**, cache `idiomas-academy-v40`.
- Auditoria editorial japonesa: 105 módulos A1–B2, 16 Kana, 92 Kanji e 252 ocorrências editoriais inventariadas.
- Busca pública direcionada não encontrou alegações proibidas; a frase “não constitui uma lista oficial” permanece intencionalmente como aviso.
- A suíte integral será executada uma última vez imediatamente antes do commit.

## Cadeia de commits do roadmap

| Fase | Commit |
|---|---|
| 1 | `dba1c1f` |
| 2 | `634aaea` |
| 3A | `2128229` |
| 3B | `738a330` |
| 3C | `ce43ace` |
| 4 | `20dd148` |
| 5 | `a3358dc` |
| 6 | `f8782e6` |
| 7 | `9112b13` |
| 8 | `640648b` |
| 9 | `1279381` |
| 10 | `6973692` |
| 11 | `8519a03` |
| 12 | `80f7d26` |
| 13 | commit exclusivo que contém este relatório |

A Fase 0 foi materializada documentalmente antes das alterações funcionais e entrou na cadeia inicial do roadmap.

## Pendências editoriais humanas

- Conteúdo A1–B2 e N3–N1 continua total ou parcialmente `pending-human-review`.
- 158 leituras N1 ambíguas permanecem sem conversão inferida.
- 169 referências gramaticais estão pendentes de revisão humana.
- 208 modelos de escrita estão pendentes; duas divergências permanecem excluídas.
- 757 questões N3–N1 de preparação permanecem pendentes; uma questão N4 segue excluída.
- Auditorias mecânicas não aprovam naturalidade, nuance, tradução ou gabaritos.

## QA visual/console pendente

A tentativa final de iniciar o navegador integrado falhou antes de abrir qualquer página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de validação visual, responsiva, de temas, áudio/microfone real ou console. O checklist reproduzível está em `roadmap/JAPONES_ACADEMY_RELEASE_CHECKLIST.md`.

## Recomendação de release

O roadmap está mecanicamente implementado e protegido por testes locais. A área **não deve ser declarada pronta para produção** até que:

1. uma pessoa qualificada conclua a revisão editorial pendente;
2. a matriz visual/console seja executada em navegador funcional;
3. os itens bloqueadores encontrados nessas revisões sejam corrigidos e retestados.

Nenhum push, deploy ou publicação externa foi realizado, pois isso exige solicitação específica.
