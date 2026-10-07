# Fase 18 — Auditoria integral do curso japonês A1–B2

## Objetivo e limite

Classificar e revisar todos os elementos textuais dos 105 módulos do curso principal, sem alterar IDs, ordem, desbloqueio, XP, SRS, persistência ou estrutura do player. Kana, Kanji e recursos derivados entram apenas para regeneração; sua revisão canônica ocorrerá nas fases seguintes.

## Inventário executável

1. Gerar alvos estáveis para cada módulo e cada campo auditável:
   - título, descrição, objetivo `can-do` e cenário;
   - textos principal e de áudio, Furigana, Romaji e tradução;
   - vocabulário e exemplos;
   - explicações gramaticais, fórmulas e observações de registro;
   - diálogos, opções e consequências;
   - exercícios, perguntas, alternativas e gabaritos.
2. Registrar hash anterior e vínculo entre campos dependentes para impedir que japonês, Romaji, tradução e resposta se desencontrem.
3. Preservar snapshots estruturais dos 31 módulos A1, 30 A2, 24 B1 e 20 B2.

## Fontes por faixa

- A1–A2: Genki I/II, livros de exercícios e gabaritos; listas oficiais de vocabulário em PT quando disponíveis.
- B1–B2: Quartet I/II, Tobira, Shinkanzen Bunpō/Goi/Kanji e listas de vocabulário em português.
- Conflitos de uso, registro ou naturalidade: segunda evidência independente no corpus ou fonte institucional permitida.
- Toda referência indicará livro e página; OCR de baixa confiança exigirá inspeção da página renderizada antes da decisão.

## Ordem de revisão

### Lote A — A1 e A2

- validar primeiro japonês e função comunicativa;
- sincronizar Romaji Hepburn ASCII e tradução PT-BR;
- revisar vocabulário, diálogos e registro;
- conferir cada quiz contra o conteúdo efetivamente ensinado.

### Lote B — B1 e B2

- revisar flexões, conectores, modalidade, pragmática e nível de formalidade;
- eliminar traduções literais, inglês residual e frases administrativamente artificiais;
- validar distinções semânticas e respostas em contexto;
- exigir duas fontes quando a decisão for de naturalidade ou houver conflito.

## Estados e aplicação

- `approved`: valor existente sustentado por fonte localizada;
- `corrected`: valor alterado com antes/depois e justificativa;
- `unresolved`: evidência insuficiente ou conflito real;
- `excluded`: item inadequado, com justificativa e preservação do histórico no ledger.

Módulos só perderão o aviso público de pendência quando todos os seus alvos obrigatórios estiverem `approved` ou `corrected`. Um alvo `unresolved` mantém o aviso apenas naquele módulo.

## Regeneração

Após cada lote, regenerar Curso, Dicionário, Escuta, Leitura, Gramática, Escrita e JLPT. Comparar contagens e snapshots e aceitar diferenças somente quando derivadas de uma decisão registrada.

## Testes de aceitação

- 105 módulos e IDs invariáveis;
- 100% dos alvos do curso presentes no ledger;
- nenhuma aprovação sem fonte; duas fontes para naturalidade/conflito;
- japonês, áudio, Furigana, Romaji e tradução sincronizados;
- gabaritos únicos e válidos;
- zero intrusão inglesa ou placeholder no texto japonês;
- suíte completa, contratos editoriais, snapshots, PWA e `git diff --check` aprovados.

## Fechamento

- criar `tests/FASE_JAPONES_18_AUDITORIA_CURSO_A1_B2.md`;
- registrar inventário antes/depois, decisões por estado, fontes e páginas, correções e casos abertos;
- criar o plano decision-complete da Fase 19 — Kana e Kanji N5–N1;
- fazer commit isolado, excluindo `.txt`, `livros/` e `scratch/`;
- prosseguir automaticamente para a Fase 19.
