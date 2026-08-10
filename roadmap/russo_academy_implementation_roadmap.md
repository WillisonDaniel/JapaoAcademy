# 🇷🇺 Russo Academy - Roadmap de Implementação Phased (8 Fases)

## 📌 Visão Geral da Estratégia de Desenvolvimento
Para garantir estanqueidade, zero regressão de código e validação pedagógica contínua, o desenvolvimento do **Russo Academy (Русский Academy)** será executado em **8 Fases Individuais**.

---

## 🎨 Fase 1: Fundação Visual & Navegação (HUBs & Layout) — [EM EXECUÇÃO]
- **Objetivo**: Criar a estrutura visual completa do curso sem lógica de banco de dados interna.
- **Entregáveis**:
  - `hub_idiomas.html`: Adição do Card do Russo Academy com branding Azul Cobalto (`#1E88E5`) + Vermelho Rubro (`#E53935`).
  - `hub_russo.html`: Dashboard principal com os cards na ordem estrita solicitada:
    1. 📚 **Curso de Russo (Trilhas A1 a B2)**
    2. 🔤 **Curso do Alfabeto Cirílico (Кириллица)**
    3. ⚡ **Minigame Cirílico Arcade**
    4. 📖 **Dicionário Cirílico & Glossário**
  - `style.css`: Inclusão das variáveis CSS do tema Russo e regras de responsividade.

---

## 🔤 Fase 2: Curso do Alfabeto Cirílico & Canvas Engine
- **Objetivo**: Implementar a alfabetização em cirílico com treino motor e exercícios.
- **Entregáveis**:
  - `database/ru-RU/data_russo_cirilico.js`: As 33 letras divididas nos Módulos 1 a 5 com mnemônicos, vocabulário prático e 5+ exercícios por módulo.
  - `html/ru-RU/russo_cirilico.html`: Player do Alfabeto com treino no Canvas, persistência em `localStorage` e o **Módulo 6: Tabela Completa do Alfabeto Cirílico**.

---

## 🟢 Fase 3: Trilha Principal - Nível A1 (Russo de Sobrevivência)
- **Objetivo**: Lançar os primeiros 24 módulos da trilha de conversação.
- **Entregáveis**:
  - `database/ru-RU/data_curso_russo_a1.js`: 24 Módulos handcrafted (Saudações, Metrô de Moscou, Restaurantes, Casos Nominativo e Preposicional).
  - `html/ru-RU/russo_curso.html`: Player de 5 estágios com áudios guias `ru-RU`.

---

## 🟡 Fase 4: Trilha Principal - Nível A2 (Comunicação Cotidiana)
- **Objetivo**: Lançar os 24 módulos do nível intermediário inicial.
- **Entregáveis**:
  - `database/ru-RU/data_curso_russo_a2.js`: 24 Módulos handcrafted (Passado, Futuro, Aspectos Verbais Imperfeito/Perfeito, Casos Acusativo e Genitivo).

---

## 🟠 Fase 5: Trilha Principal - Nível B1 (Autonomia & 6 Casos Gramaticais)
- **Objetivo**: Lançar os 24 módulos de consolidação gramatical profunda.
- **Entregáveis**:
  - `database/ru-RU/data_curso_russo_b1.js`: 24 Módulos handcrafted (Casos Dativo e Instrumental, Verbos de Movimento com Prefixo *По-, При-, У-, В-, Вы-*).

---

## 🔴 Fase 6: Trilha Principal - Nível B2 (Fluência Avançada & Notícias Nativas)
- **Objetivo**: Lançar os 24 módulos de fluência e mídia nativa.
- **Entregáveis**:
  - `database/ru-RU/data_curso_russo_b2.js`: 24 Módulos handcrafted (Particípios, Gerúndios, Linguagem Corporativa e Literatura Russa).

---

## ⚡ Fase 7: Minigame Cirílico Arcade Configurável
- **Objetivo**: Lançar a arena de treino de reflexo e leitura cirílica.
- **Entregáveis**:
  - `html/ru-RU/russo_minigame.html`: Painel com seleção de modo (Apenas Letras Módulos 1-5 vs Palavras Variadas A1-B2) + Modos de resposta (Múltipla Escolha, Digitação, Voz).

---

## 📖 Fase 8: Dicionário Cirílico & Glossário
- **Objetivo**: Lançar o dicionário completo e sistema de bookmarks.
- **Entregáveis**:
  - `database/ru-RU/data_russo_dicionario.js` e `html/ru-RU/russo_dicionario.html`: Busca cirílica, transcrição fonética e filtros.

---

## 🗺️ Mapa de Arquivos Final

```
WIP/
 ├── hub_idiomas.html                     # [FASE 1] Card do Russo Academy
 ├── hub_russo.html                       # [FASE 1] Dashboard Principal do Russo
 ├── html/ru-RU/
 │    ├── russo_cirilico.html             # [FASE 2] Curso do Alfabeto Cirílico
 │    ├── russo_curso.html               # [FASE 3] Player de Conversação A1-B2
 │    ├── russo_minigame.html             # [FASE 7] Arena Arcade Cirílica
 │    └── russo_dicionario.html           # [FASE 8] Dicionário & Glossário
 ├── database/ru-RU/
 │    ├── data_russo_cirilico.js         # [FASE 2] Dados do Alfabeto (33 Letras)
 │    ├── data_curso_russo_a1.js         # [FASE 3] Dados A1 (24 Módulos)
 │    ├── data_curso_russo_a2.js         # [FASE 4] Dados A2 (24 Módulos)
 │    ├── data_curso_russo_b1.js         # [FASE 5] Dados B1 (24 Módulos)
 │    ├── data_curso_russo_b2.js         # [FASE 6] Dados B2 (24 Módulos)
 │    └── data_russo_dicionario.js       # [FASE 8] Dados do Dicionário Russo
 ├── app.js                               # [FASE 1 e 3] Suporte ao idioma RU
 └── style.css                            # [FASE 1] Tema visual Russo Academy
```
