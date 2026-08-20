# Fase 21 — Consolidação e release textual japonês

## Resultado executivo

A auditoria textual baseada em fontes está integralmente **classificada**, mas não integralmente aprovada. O ledger possui 23.534 decisões rastreáveis:

| Estado | Alvos |
|---|---:|
| Aprovados | 6.126 |
| Corrigidos | 410 |
| Inconclusivos | 16.998 |
| Excluídos | 0 |
| Total | 23.534 |

Assim, 6.536 alvos possuem evidência suficiente para aprovação ou correção, enquanto 16.998 continuam publicamente tratados como inconclusivos. Nenhuma pendência foi promovida por inferência.

## Cobertura consolidada

- Alterações locais iniciais: 159 decisões preservadas.
- Curso japonês A1–B2: 2.315 alvos classificados.
- Kana e Kanji N5–N1: 14.899 alvos classificados.
- Dicionário, Minigame, Escuta, Leitura, Gramática, Escrita e JLPT: 6.161 registros classificados.
- Corpus: 20 PDFs, 4.238 páginas, um DOCX e 23 fontes catalogadas quando incluídas as fontes institucionais externas.
- Extração: 398 páginas com camada textual e 3.840 páginas processadas por OCR; 144 páginas de baixa confiança permanecem explicitamente registradas.
- Áudio: 464 MP3 inventariados e adiados para uma fase auditiva independente.

## Ajustes públicos da consolidação

- A interface agora usa “decisão editorial inconclusiva” e “aprovação editorial”, sem apresentar o trabalho como revisão humana.
- Os estados internos `pending-human-review` foram preservados por compatibilidade, mas não aparecem ao público como proveniência humana.
- O curso substituiu “Fluência Social” e “Maestria” por “Comunicação prática” e “Integração e conclusão”.
- A contagem pública de Escuta foi sincronizada com o índice atual: 309 trechos.
- O cache foi atualizado para `idiomas-academy-v46` e todas as páginas japonesas compartilhadas usam `japanese-experience.css?v=46`.
- Filtros e controles de seleção das cinco experiências novas receberam alvo mínimo de 44 px; o controle do cronômetro do JLPT atingiu 62 px no celular.

## QA visual

Matriz exercida em 1280×900 e 390×844, temas claro e escuro:

- Hub, Curso, Hiragana, Katakana, hub Kanji, N5, N3, N1, Dicionário, Minigame, Escuta, Leitura, Gramática, Escrita e JLPT.
- Sem overflow horizontal e sem novos erros no console nas 15 páginas.
- Cabeçalhos móveis medidos: 241 px no hub; 279 px na maioria das páginas; 300 px nos níveis Kanji; 317 px no Dicionário; 415 px no Minigame.
- Os filtros visíveis das cinco experiências novas medem 44 px após a correção; o CTA do JLPT possui gradiente opaco visível, borda, contraste e sombra.
- Fluxos exercidos sem erro de console: abertura do leitor por card, oficina de escrita por card, detalhe gramatical e consulta com falha segura, revelação/Shadowing em Escuta, início de sessão JLPT e resposta digitada mantida apenas na sessão.
- Capturas locais, fora do Git: `scratch/phase21-qa/hub-mobile-dark.png`, `course-mobile-dark.png`, `kanji-n1-mobile-dark.png` e `jlpt-mobile-dark-v46.png`.

## Limitações e dívida preservada

- O cabeçalho móvel de Dicionário e Minigame ultrapassa a meta de 300 px; o Minigame chega a 415 px.
- Controles pequenos preexistentes em Kana, Dicionário e Minigame não foram ampliados nesta fase editorial.
- Áudio efetivamente ouvido, microfone autorizado e modo offline real não foram declarados cobertos nesta fase.
- Páginas Kanji continuam longas, embora a renderização progressiva preserve desempenho e foco.
- Os 16.998 casos inconclusivos impedem declarar o japonês integralmente aprovado ou linguisticamente finalizado.

## Validação automatizada

- `japanese-phase21-release.cjs` fixa cobertura, estados, nomenclatura pública, versões PWA, contagem de Escuta e alvos de toque.
- `japanese-editorial-ledger.cjs --check-local` valida fontes, hashes e alvos locais.
- A suíte completa, PWA e `git diff --check` são critérios obrigatórios do commit desta fase.

## Próxima fase

O plano `plan/japones_fase_22_auditoria_auditiva_464_mp3.md` foi preparado. A auditoria auditiva não foi iniciada automaticamente porque exige uma execução dedicada e escuta real das faixas.
