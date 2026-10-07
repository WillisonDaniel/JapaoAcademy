# PROTOCOLO DE HANDOFF METODOLÓGICO: KANJI N2
# TRANSIÇÃO DO PILOTO N3 (ETAPAS 25B → 25B.4 → MASTER CLOSURE) PARA O SANEAMENTO N2 (ETAPA 26)

## Status: PROTOCOLO CONGELADO / AGUARDANDO CONVOCAÇÃO FORMAL DA ETAPA 26
## Regra de Ouro: PROIBIDO ALTERAR CONTEÚDO OU METADADOS DO N2 ANTES DA CONVOCAÇÃO FORMAL

---

## 1. OBJETIVO DO PROTOCOLO

Este documento formaliza a transferência metodológica e técnica desenvolvida e blindada durante o saneamento do Kanji N3 (Etapas 25B.1 a 25B.4 e Master Closure).

O objetivo é assegurar que o saneamento do Kanji N2 seja executado com o mesmo nível de rigor epistemológico, sem regressões conceituais, sem aprovações em lote (bulk approval) e sem vieses de sucesso (hardcoded success biases).

---

## 2. COMPONENTES METODOLÓGICOS TRANSFERÍVEIS

### 2.1. O Princípio Central: Evidência → Claim → Decisão → Ledger → Queue → Witness → Certificação
Nenhum item pode ser classificado como `SUPPORTED` ou `corrected` por declaração direta em JSON. O estado deve ser derivado determinística e reprodutivelmente da avaliação do Decision Engine.

### 2.2. O Decision Engine (`evaluateDecision`)
A arquitetura do engine do N3 (`tests/japanese-n3-decision-engine.cjs`) serve de modelo direto para o N2:
1. **Identidade do Target (`evaluateTargetIdentity`)**:
   - Presença do kanji e da palavra-alvo (ou radical de flexão para verbos/adjetivos) no `displayText`.
   - Prova de leitura lexical integral para compostos multi-kanji (rejeição de leituras parciais como 'こん' para '既婚').
2. **Delta da Correção (`evaluateCorrectionDelta`)**:
   - Cada modificação realizada em relação à baseline deve estar associada a pelo menos uma `correctionClaim`.
   - Cada claim é avaliada contra as fontes citadas e a matriz de capacidades.
3. **Avaliação Semântica e Tradução (`evaluateTranslation`)**:
   - Verificação de significado não vazio, não truncado e livre de placeholders (`TODO`, `pending`, `fixme`, `...`).
   - Distinção rigorosa entre placeholders em inglês e vocábulos legítimos da língua portuguesa (como "todo / todos os dias").
4. **Campos Mecânicos (`evaluateMechanicalFields`)**:
   - Validação de `audioText` e `romaji` (transliteração Hepburn válida), garantindo ausência de resíduos de rascunho (`[draft]`, `{residue}`).

### 2.3. Matriz de Capacidades do Tipo de Fonte (`CAPABILITY_MATRIX`)
- **Dicionários de Kanji (KANJIDIC)**:
  - Podem atestar: leituras isoladas de caracteres (on/kun), glosas de caracteres, traços, radicais e glifo individual.
  - NÃO podem atestar: colocações (`collocation`), flexões gramaticais (`inflection`), partículas (`case-particle`), estruturas sintáticas (`grammar-structure`), registros formais (`register`) ou naturalidade frasal (`sentence-naturalness`).
- **Livros Didáticos e Coleções (Genki, Quartet, Tobira, Shinkanzen)**:
  - Competência determinada pelo formato pedagógico da seção (listas de vocabulário vs. textos de leitura vs. exercícios de gramática).

### 2.4. Pacote de Testemunhas Portáveis (`witness-bundle`)
- Todo artefato de página citado deve ser preservado de forma compacta em `tests/n2-witness/`.
- Manifesto criptográfico `tests/JAPANESE_N2_WITNESS_MANIFEST.json` com SHA-256 do arquivo e do texto normalizado.
- Suporte nativo ao modo portável sem necessidade de ter os gigabytes de PDFs no ambiente CI/CD.

### 2.5. Suíte de Mutações Adversariais Obrigatória
- Implementação de mutações análogas às mutações A–L do N3 antes de qualquer aprovação de alvos no N2.

---

## 3. ROTEIRO PASSO A PASSO PARA A ETAPA 26 (KANJI N2)

Quando a Etapa 26 for iniciada pelo usuário, seguir estritamente o ciclo:

```
AUDITAR
   ↓
CORRIGIR
   ↓
TESTAR
   ↓
RECONCILIAR
   ↓
AUDITAR NOVAMENTE
   ↓
GATE FINAL
```

### Passo 1: Inventário e Baseline Imutável
- Extrair hash SHA-256 de `database/ja-JP/data_kanji_n2.js`.
- Mapear todos os alvos com resíduos do antigo Romaji-Draft ou pendências canônicas no N2.
- Congelar `tests/JAPANESE_N2_DRAFT_RESIDUE_BASELINE.json`.

### Passo 2: Investigação Bibliográfica Primária
- Localizar cada alvo no corpus de livros didáticos (Genki II, Quartet I/II, Tobira, Shinkanzen Master N2/N1).
- Extrair a página exata em `scratch/japanese-corpus/` com hash SHA-256 e proveniência criptográfica.
- Preservar `renderedPageInspected = false` para páginas obtidas via OCR onde a camada de texto for inequívoca.

### Passo 3: Implementação do Engine N2
- Instanciar `tests/japanese-n2-decision-engine.cjs`.
- Implementar as regras semânticas, de identidade, delta e mecânicas específicas do N2.

### Passo 4: Suíte Adversarial N2
- Criar `tests/japanese-n2-adversarial-mutation.cjs` com mutações atômicas para validar a sensibilidade do engine.

### Passo 5: Reconciliação Tríplice
- Sincronizar simultaneamente:
  - `data_kanji_n2.js` (`editorialReview.status`)
  - `JAPANESE_EDITORIAL_LEDGER.json` (`decisions`)
  - `JAPANESE_FINAL_EDITORIAL_QUEUE.json` (`queue`)
  - `JAPANESE_N2_EVIDENCE_AUDIT.json`

---

## 4. RESTRIÇÕES ABSOLUTAS

1. **NÃO antecipar o N2**: Nenhuma linha de `data_kanji_n2.js` deve ser alterada durante o encerramento do N3.
2. **NÃO alterar o N1**: O Kanji N1 permanece intacto até a sua etapa dedicada.
3. **NÃO realizar aprovação em lote**: Cada alvo do N2 deverá possuir citação primária, prova textual e claims atômicas justificadas.
