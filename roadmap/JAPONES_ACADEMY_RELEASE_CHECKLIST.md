# Checklist de Release — Área Japonesa (Japão Academy)

Este documento registra o estado real e auditado da área de Japonês, distinguindo categoricamente validação mecânica de decisão editorial humana.

---

## 1. Distinção Rígida dos Quatro Estados Editoriais

| Estado | Significado Técnico e Operacional | Quantidade no Ledger |
|---|---|---:|
| **AUDITED** | Conteúdo processado pelo pipeline formal de auditoria contra fontes canônicas. | **23.537 itens** (100% catalogados) |
| **APPROVED** | Conteúdo com aderência direta comprovada às fontes, confirmado sem alterações. | **9.387 itens** |
| **CORRECTED** | Conteúdo que continha inconsistências, corrigido com base em evidências verificáveis. | **303 itens** |
| **UNRESOLVED** | Conteúdo com evidência insuficiente nas fontes locais, preservado como pendente. | **13.847 itens** |

> [!NOTE]
> Nenhum item é classificado como "100% revisado" para indicar apenas "100% classificado". Os itens `UNRESOLVED` (especialmente Kanji N3–N1) permanecem identificados explicitamente sem conversão artificial.

---

## 2. Contagens Canônicas Sincronizadas

As contagens abaixo são derivadas diretamente dos índices e datasets canônicos:

- **Escuta e Shadowing (`data_escuta_index.js`)**: **319 itens**
- **Biblioteca de Leitura (`data_leitura_index.js`)**: **91 textos** e **181 questões** de compreensão
- **Oficina de Escrita (`data_escrita_index.js`)**: **210 modelos**
- **Referência Gramatical (`data_gramatica_index.js`)**: **194 referências** e **13 formas** de conjugação
- **Preparação JLPT (`data_jlpt_pratica_index.js`)**: **1.061 questões** (181 leitura + 880 quizzes de módulo)
- **Trilhas de Kanji N5–N1**: **92 módulos** (N5: 11, N4: 16, N3: 19, N2: 21, N1: 25) • 2.215 registros • 1.267 caracteres únicos

---

## 3. Checklist Operacional de Release

### 3.1. Validação Automatizada Reproduzível
- [x] Executar `npm.cmd test` na raiz (44 grupos de regressão, 21 de integração, 38 multidioma, 9 JLPT, 9 recursos japoneses — 100% verde).
- [x] Confirmar sincronização dos 7 índices derivados (`course-index`, `dictionary-index`, `minigame-index`, `listening-index`, `reading-index`, `grammar-index`, `writing-index`, `jlpt-index`).
- [x] Confirmar auditoria editorial determinística (`tests/japanese-editorial-ledger.cjs`, `tests/japanese-editorial-audit.cjs`).
- [x] Confirmar PWA offline dentro do orçamento formalizado (131 recursos locais, 14,42 MB; meta <= 15,0 MB, hard cap <= 16,0 MB).
- [ ] Executar `git diff --check` antes de commits externos.
- [ ] Confirmar que alterações preexistentes não relacionadas continuam fora do commit.

### 3.2. Revisão Editorial e Rastreabilidade
- [x] Inventário e ledger de 23.537 decisões (`tests/JAPANESE_EDITORIAL_LEDGER.json`).
- [x] Eliminação do `romaji-draft.js` em runtime nos Kanji N3–N1 (Etapa 23A).
- [x] Reconciliação do ledger editorial sem conversões artificiais (Etapa 23B).
- [x] Fechamento editorial de Gramática (207 entradas) e Banco JLPT (1.061 questões) (Etapa 23C).
- [x] Correção da hierarquia de áudio SRS priorizando japonês canônico (Etapa 23D).
- [x] Auditoria de budget e performance N3 sem sobrecarga (Etapa 23E).
- [x] Agregação de progresso global real N5–N1 no dashboard Kanji (Etapa 23F).
- [x] Dinamização da contagem JLPT a partir do índice sem números hardcoded (Etapa 23G).
- [x] Contrato do minigame alinhado para leitura Romaji/Kana sem promessa de português (Etapa 23H).
- [ ] Resolução futura com novas fontes físicas das pendências restantes de Kanji N3–N1 (`UNRESOLVED`).

### 3.3. QA Visual e Experiência do Usuário
- [x] QA visual executado nos temas claro e escuro (desktop e viewport móvel 390px).
- [x] Hub Japonês: 4 grupos temáticos, navegação por teclado e foco acessível.
- [x] Curso A1–B2 e emissão de certificado interno.
- [x] Hiragana e Katakana com tabelas e traçados.
- [x] Hub Kanji com 5 níveis e visualização progressiva de módulos.
- [x] Dicionário, minigame Kana Master Pro, canvas de escrita e fallback de traços.
- [x] Escuta e Shadowing com controle de velocidade, autoavaliação e síntese de voz.
- [x] Biblioteca de Leitura com controle de apoios e questões associadas.
- [x] Gramática com filtros CEFR vs JLPT isolados e busca semântica.
- [x] Oficina de escrita guiada sem persistência de texto livre.
- [x] Preparação JLPT com configuração balanceada, cronômetro pessoal e revisão.
- [x] Dashboard Meu Progresso com isolamento de métricas reais por idioma.
- [x] Zero novos erros no console nos fluxos principais.

### 3.4. Transparência Pedagógica
- [x] Nenhuma página afirma ser lista oficial do JLPT.
- [x] Certificados declaram conclusão de curso interno na plataforma.
- [x] Preparação JLPT não simula pontuação escalada oficial nem garante aprovação.
- [x] Escrita não penaliza variantes ortográficas como erro linguístico.
- [x] Reconhecimento de voz não promete avaliação fonética clínica.
- [x] Minigame comunica claramente a exigência de leitura em Romaji ou Kana.
- [x] Conteúdos com pendência editorial continuam sinalizados com transparência.

### 3.5. Publicação
- [ ] Definir branch e commit aprovado para publicação de produção.
- [ ] Solicitar explicitamente deploy/push (processo manual externo).
- [ ] Verificar integridade do SHA e smoke test online/offline pós-deploy.

---

## 4. Condição Atual

A área de Japonês encontra-se com implementação e validação automatizada 100% concluídas e estáveis. O acervo editorial está catalogado com 9.690 itens aprovados/corrigidos e 13.847 pendências rastreadas, garantindo que nenhum conteúdo seja promovido artificialmente sem base em fontes documentais verificáveis.
