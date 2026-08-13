# Fase 0 — Baseline e inventário da área de Japonês

Data: 13/08/2026
Branch: `feature/italiano-completo`
Commit de entrada: `0daba45`

## Estado do repositório

- Alteração preexistente preservada: `.txt` removido.
- Nenhuma regra de negócio ou arquivo da aplicação foi alterado nesta fase.

## Testes diretamente executados

- Regressão: 27/27 grupos.
- Integração: 20/20 cenários.
- Multidioma: 26/26 cenários.
- Índice de cursos: 521 módulos nos cinco idiomas.
- Dicionário japonês: 3.271 entradas.
- Índice do minigame Kanji: 1.015 cards.
- PWA: 114 recursos locais, 10,66 MB.

## Inventário japonês

| Área | Contagem |
|---|---:|
| Curso principal A1–B2 | 105 módulos |
| Hiragana | 8 módulos |
| Katakana | 8 módulos |
| Kanji N5–N1 | 92 módulos |
| Registros de Kanji | 2.215 |
| Caracteres Kanji únicos | 1.267 |
| Páginas próprias em `html/ja-JP` | 12 |
| Hub japonês | 1 |

### Curso principal

| Nível | Módulos | Diálogos sem escrita japonesa | Guias de áudio sem escrita japonesa |
|---|---:|---:|---:|
| A1 | 31 | 2/64 | 31/31 |
| A2 | 30 | 88/90 | 30/30 |
| B1 | 24 | 66/72 | 23/24 |
| B2 | 20 | 55/60 | 17/20 |

### Kanji

| Nível | Módulos | Registros | Únicos | Exemplos sem escrita japonesa | Leituras somente latinas |
|---|---:|---:|---:|---:|---:|
| N5 | 11 | 201 | 104 | 0/210 | 5 |
| N4 | 16 | 289 | 147 | 0/152 | 89 |
| N3 | 19 | 360 | 353 | 684/720 | 2 |
| N2 | 21 | 375 | 342 | 730/750 | 2 |
| N1 | 25 | 990 | 822 | 1.968/1.980 | 565 |

## Contratos de persistência identificados

- Curso principal: IDs de módulos dentro de `progressoGlobal.modulosConcluidos` e cards SRS derivados de `modId`.
- Cursos especiais: progresso por índices em chaves próprias do AppState.
- Decks japoneses: `ja_srs_a1_deck`, `ja_srs_a2_deck`, `ja_srs_b1_deck`, `ja_srs_b2_deck`, `ja_srs_hiragana_deck`, `ja_srs_katakana_deck` e decks Kanji N5–N1.
- Escrita: `user_stroke_save_<canvasId>` e `user_stroke_save_sym_<caractere>`.
- Certificado: `b2_certified`, `b2_score`, `cert_date` e `cert_hash`.

## Conclusão

O baseline está estável. A prioridade imediata é corrigir alegações pedagógicas objetivamente incorretas e rótulos que atribuem à aplicação capacidades que ela não mede.
