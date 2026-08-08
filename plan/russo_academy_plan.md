# 🇷🇺 Russo Academy - Especificação Técnica e Pedagógica

## 🎯 1. Visão Geral
O **Russo Academy (Русский Academy)** é a expansão da plataforma dedicada ao aprendizado do idioma russo, integrando o **Curso do Alfabeto Cirílico (Кириллица)** com treino motor no Canvas e exercícios de fixação, a **Trilha Principal de Conversação (A1 a B2)** com 96 módulos handcrafted, o **Minigame Cirílico Arcade Configurável** e o **Dicionário Cirílico & Glossário**.

A plataforma mantém o padrão arquitetural do **Idiomas Academy**, utilizando o motor JavaScript unificado (`app.js`), síntese de voz nativa (`ru-RU`), persistência em `localStorage` e salvamento de traço caligráfico.

---

## 🎨 2. Identidade Visual & Branding

| Elemento | Especificação |
| :--- | :--- |
| **Paleta Principal** | **Azul Cobalto + Vermelho Rubro + Branco Neve** (`#1E88E5`, `#E53935`, `#FFFFFF`, `#121824`) |
| **Estética Visual** | Dark mode elegante inspirado na arquitetura clássica das cúpulas de Moscou e São Petersburgo |
| **Badge de Nível** | 🔤 Cirílico \| 🟢 A1 (Sobrevivência) \| 🟡 A2 (Cotidiano) \| 🟠 B1 (Autonomia/Casos) \| 🔴 B2 (Fluência) |
| **Voz do Áudio Synth** | `ru-RU` (Russo Nativo - Síntese SpeechSynthesis) |

---

## 🔤 3. Curso do Alfabeto Cirílico (6 Módulos com Exercícios & Tabela Final)

Cada letra do alfabeto cirílico conta com:
- **Card de Caractere**: Letra Maiúscula/Minúscula, Som transliterado e Dica Mnemônica.
- **Treino Motor no Canvas**: Desenho interativo com persistência automática e ordem real dos traços.
- **Vocabulário Prático**: Exemplo real usando a letra aprendida com imagem, áudio e tradução.
- **Exercícios Práticos de Fixação**: No mínimo **5 exercícios interativos por módulo** (aumentando conforme a quantidade de palavras), cobrindo reconhecimento de som, associação visual, digitação e identificação de falso cognato.

---

### 🟡 Módulo 1: Amigos Verdadeiros & Falsos Cognatos Visuais (9 Letras)
- **Letras**: **А а**, **К к**, **М м**, **О о**, **Т т**, **В в**, **Р р**, **С с**, **Х х**
- **Vocabulário Prático**:
  - **Автобус** (Avtóbus - Ônibus)
  - **Кот** (Kot - Gato)
  - **Мама** (Máma - Mãe)
  - **Окно** (Oknó - Janela)
  - **Такси** (Taksí - Táxi)
  - **Вода** (Vadá - Água)
  - **Ресторан** (Restarán - Restaurante)
  - **Сок** (Sok - Suco)
  - **Хлеб** (Khleb - Pão)
- **Exercícios (5 Questões)**:
  1. *Associação de Som*: Qual letra cirílica tem o som de "V" em português? (Opções: В, Б, Р, С ➔ Correto: В).
  2. *Reconhecimento Visual*: Identifique a tradução da palavra "Ресторан" (Restaurante).
  3. *Pegadinha de Falso Cognato*: A letra Р tem som de qual letra latina? (Som de R ➔ Não é P!).
  4. *Tradução por Som*: Como se lê a palavra "Сок"? (Sok / Suco).
  5. *Composição de Palavra*: Selecione as letras que formam "Мама".

---

### 🟢 Módulo 2: Formas Gregas e Novas (6 Letras)
- **Letras**: **Б б**, **Г г**, **Д д**, **З з**, **П п**, **Л л**
- **Vocabulário Prático**:
  - **Бабушка** (Bábushka - Avó)
  - **Город** (Górad - Cidade)
  - **Дом** (Dom - Casa)
  - **Зима** (Zimá - Inverno)
  - **Привет** (Privét - Olá!)
  - **Лимон** (Limón - Limão)
- **Exercícios (5 Questões)**:
  1. *Associação de Forma*: A letra Д se parece com qual objeto? (Uma casinha/portal com pernas).
  2. *Reconhecimento de Som*: Qual letra representa o som de Z em "Зима"? (З).
  3. *Leitura Prática*: Traduza a palavra de saudação "Привет" (Olá!).
  4. *Diferença de Sons*: Qual é a diferença entre Б (B) e В (V)?
  5. *Identificação por Áudio*: Ouça o áudio "Дом" e selecione a escrita cirílica correta.

---

### 🔵 Módulo 3: Vogais Especiais e Suaves (7 Letras)
- **Letras**: **Е е**, **Ё ё**, **И и**, **Й й**, **Э э**, **Ю ю**, **Я я**
- **Vocabulário Prático**:
  - **Если** (Yésli - Se)
  - **Ёлка** (Yólka - Árvore de Natal)
  - **Имя** (Ímya - Nome)
  - **Чай** (Chai - Chá)
  - **Это** (Éto - Isto/Isso)
  - **Юг** (Yug - Sul)
  - **Яблоко** (Yáblaka - Maçã)
- **Exercícios (6 Questões)**:
  1. *Significado Único*: A letra Я isolada significa qual pronome pessoal? (Significa "EU").
  2. *Regra da Tônica*: A letra Ё leva dois pontos. Qual é a regra de acentuação dela? (É SEMPRE tônica!).
  3. *Diferença de Vogais*: Qual letra representa o som aberto "É"? (Э).
  4. *Reconhecimento de Palavra*: Traduza "Яблоко" (Maçã).
  5. *Associação Visual*: Qual letra parece um N invertido? (И - som de I).
  6. *Composição Sonora*: Ouça "Чай" e escolha a semivogal final correta (Й).

---

### 🟣 Módulo 4: Os Sons Chiados & Sibilantes (5 Letras)
- **Letras**: **Ж ж**, **Ч ч**, **Ш ш**, **Щ щ**, **Ц ц**
- **Vocabulário Prático**:
  - **Журнал** (Zhurnál - Revista)
  - **Часы** (Chasý - Relógio)
  - **Школа** (Shkóla - Escola)
  - **Борщ** (Borsch - Sopa típica)
  - **Царь** (Tsar - Imperador)
- **Exercícios (6 Questões)**:
  1. *Associação de Forma*: A letra Ж se parece com qual inseto? (Um besouro/borboleta - som de J de janela).
  2. *Diferença de Chiados*: Qual é a diferença de som entre Ш (CH duro) e Щ (SH suave longo)?
  3. *Reconhecimento de Som*: Qual letra tem o som de "TS" como em tsunami? (Ц).
  4. *Leitura de Palavra*: Traduza "Школа" (Escola).
  5. *Identificação de Prato*: A famosa sopa russa "Борщ" termina com qual letra sibilante? (Щ).
  6. *Associação Numérica*: A letra Ч se parece com qual número latino? (Número 4 - som de TCH).

---

### 🔴 Módulo 5: Vogal Gutural e Sinais Mutos (3 Letras)
- **Letras**: **Ы ы**, **Ъ ъ**, **Ь ь**
- **Vocabulário Prático**:
  - **Сыр** (Syr - Queijo)
  - **Объект** (Abyékt - Objeto)
  - **Мать** (Mat' - Mãe)
- **Exercícios (6 Questões)**:
  1. *Função Gramatical*: O sinal suave (Ь) possui som próprio? (Não! Ele apenas suaviza/palataliza a consoante anterior).
  2. *Função Gramatical*: Qual é a função do sinal duro (Ъ)? (Impede que a consoante anterior se fundal com a vogal seguinte).
  3. *Fonética Gutural*: Como se pronuncia a vogal Ы? (Som de "I" produzido no fundo da garganta).
  4. *Leitura de Palavra*: Traduza "Сыр" (Queijo).
  5. *Contraste Fonético*: Qual é a diferença entre "Мато" (sem sinal) e "Мать" (com sinal suave)?
  6. *Desafio do Alfabeto*: Identifique qual das três letras modifica o som sem ter som próprio.

---

### 🏛️ Módulo 6: Tabela Interativa Completa do Alfabeto Cirílico
O Módulo 6 é a **Central de Referência e Consolidação**:
- **Grid Completo de 33 Cards Interativos**: Exibição ordenada de A a Я.
- **Filtros por Categoria**: `Todas (33)` | `Vogais (10)` | `Consoantes (21)` | `Sinais Mutos (2)`.
- **Recursos por Card**:
  - Áudio de pronúncia isolada da letra (`ru-RU`).
  - Nome da letra em russo (*А, Бэ, Вэ, Гэ, Дэ...*).
  - Exemplo prático de palavra + áudio da palavra + imagem ilustrativa.
  - Botão de treino rápido no Canvas.

---

## ⚡ 4. Minigame Cirílico Arcade (Configurável)

Inspirado no minigame do Japonês (`minigame.html`), permitindo personalização total antes do start:

### ⚙️ Painel de Configuração da Partida:
1. **Modo 1: Apenas Letras Cirílicas**:
   - O jogador pode filtrar e selecionar exatamente os módulos do alfabeto que já aprendeu: `Módulo 1`, `Módulo 2`, `Módulo 3`, `Módulo 4`, `Módulo 5` ou `Todos os Módulos`.
2. **Modo 2: Palavras Variadas da Trilha**:
   - O jogador escolhe o nível das palavras: `🟢 Nível A1`, `🟡 Nível A2`, `🟠 Nível B1`, `🔴 Nível B2` ou `Misto (A1-B2)`.
3. **Modo de Entrada**: `Múltipla Escolha 🔘`, `Digitação ⌨️` ou `Reconhecimento por Voz 🎙️`.

---

## 🗺️ 5. Mapa Curricular da Trilha Principal de Conversação (96 Módulos: A1 a B2)

### 🟢 Nível A1: Russo de Sobrevivência (24 Módulos)
*Foco: Saudações, apresentações, família, números, comida, orientação em Moscou e introdução aos Casos Nominativo e Preposicional.*

1. **Здравствуйте! (Saudações e Cortesia)** | 💡 *Pílula*: Formas formais (*Здравствуйте*) vs. informais (*Привет*). | 📖 *Vocab*: Здравствуйте, Привет, Спасибо, Пожалуйста.
2. **Меня зовут... (Apresentações)** | 💡 *Pílula*: Estrutura "Меня зовут + Nome" (lit. "Me chamam..."). | 📖 *Vocab*: Имя, Фамилия, Как вас зовут?, Очень приятно.
3. **Кто это? Что это? (Identificação de Pessoas e Objetos)** | 💡 *Pílula*: Uso de Это como pronome neutro universal. | 📖 *Vocab*: Кто, Что, Это, Человек, Вещь.
4. **Я из Бразилии (Países e Nacionalidades)** | 💡 *Pílula*: Introdução ao Caso Genitivo com a preposição Из. | 📖 *Vocab*: Бразилия, Россия, Из, Национальный.
5. **Моя семья (Família e Posesivos)** | 💡 *Pílula*: Pronomes Posesivos no Nominativo (Мой, Моя, Моё, Мои). | 📖 *Vocab*: Мама, Папа, Брат, Сестра, Семья.
6. **Профессии (Profissões e Trabalho)** | 💡 *Pílula*: O omissão do verbo SER no presente (*Я врач* = Eu sou médico). | 📖 *Vocab*: Врач, Учитель, Инженер, Студент.
7. **Где ты живешь? (Caso Preposicional I - Lugares)** | 💡 *Pílula*: Terminação -е no Caso Preposicional com a preposição В / НА. | 📖 *Vocab*: Город, Дом, Улица, В, На.
8. **Числа 1-20 (Números e Contagem)** | 💡 *Pílula*: Concordância dos números 1 (Один/Одна) e 2 (Два/Две). | 📖 *Vocab*: Один, Два, Три, Четыre, Пять...
9. **В ресторане (Restaurante e Pedidos)** | 💡 *Pílula*: Expressão Я буду... (Eu vou querer...) + Acusativo. | 📖 *Vocab*: Меню, Вода, Чай, Кофе, Счёт.
10. **Русская кухня (Comidas Típicas Russas)** | 💡 *Pílula*: Adjetivos de sabor e concordância de gênero. | 📖 *Vocab*: Борщ, Блины, Пельмени, Вкусный.
11. **В метро Москвы (Navegação no Metrô de Moscou)** | 💡 *Pílula*: Caso Preposicional para estações de transporte. | 📖 *Vocab*: Метро, Станция, Поезд, Вход, Выход.
12. **Который час? (Horas e Tempo)** | 💡 *Pílula*: Expressar horas cheias e momentos do dia. | 📖 *Vocab*: Час, Минута, Утро, День, Вечер.
13. **Дни недели и месяцы (Dias da Semana e Meses)** | 💡 *Pílula*: Preposição В + Acusativo para dias da semana. | 📖 *Vocab*: Понедельник, Вторник, Январь...
14. **Мой день (Rotina Diária e Verbos do Presente)** | 💡 *Pílula*: Conjugação de 1ª Conjugação (-ать ➔ -ю, -ешь, -ет). | 📖 *Vocab*: Читать, Знать, Делать, Работать.
15. **Что ты делаешь? (Verbos de 2ª Conjugação)** | 💡 *Pílula*: Conjugação de 2ª Conjugação (-ить ➔ -ю/у, -ишь, -ит). | 📖 *Vocab*: Говорить, Смотреть, Учить, Жить.
16. **В магазине (Compras e Preços)** | 💡 *Pílula*: Uso de Сколько стоит...? + Caso Genitivo. | 📖 *Vocab*: Сколько, Стоить, Рубль, Деньги.
17. **Одежда и цвета (Roupas e Cores)** | 💡 *Pílula*: Concordância de adjetivos qualificativos (-ый, -ая, -ое, -ые). | 📖 *Vocab*: Рубашка, Брюки, Красный, Синий.
18. **Погода в России (O Clima na Rússia)** | 💡 *Pílula*: Expressões impessoais de clima (*Холодно, Тепло, Идёт снег*). | 📖 *Vocab*: Холодно, Жарко, Снег, Дождь, Солнце.
19. **В отеле (Check-in e Hospedagem)** | 💡 *Pílula*: Pedidos formais com Будьте добры... | 📖 *Vocab*: Отель, Номер, Ключ, Бронь.
20. **Здоровье и аптека (Saúde e Farmácia)** | 💡 *Pílula*: Expressão У меня болит... (Estou com dor em...). | 📖 *Vocab*: Больница, Лекарство, Голова, Боль.
21. **Транспорт в городе (Transportes Urbanos)** | 💡 *Pílula*: Preposição На + Caso Preposicional para meios de transporte. | 📖 *Vocab*: Автобус, Такси, Трамвай, Ехать.
22. **Ориентация в городе (Direções e Localização)** | 💡 *Pílula*: Advérbios de direção (*Направо, Налево, Прямо*). | 📖 *Vocab*: Право, Лево, Прямо, Рядом, Далеко.
23. **Revisão Geral A1** | 💡 *Pílula*: Consolidação de Nominativo, Preposicional e Conjugações. | 📖 *Vocab*: Síntese A1.
24. **Desafio Final A1: Simulação no Aeroporto de Moscou** | 💡 *Pílula*: Teste integrado com imigração, táxi e hotel. | 📖 *Vocab*: Avaliação A1.

---

### 🟡 Nível A2: Comunicação Cotidiana (24 Módulos)
*Foco: Passado, Futuro, Aspectos Verbais (Imperfeito vs Perfeito), Caso Acusativo e Genitivo.*

1. **Прошлое (O Passado dos Verbos)** | 💡 *Pílula*: Formação do passado com sufixo -л, -ла, -ло, -ли. | 📖 *Vocab*: Вчера, Раньше, Bыть, Жить.
2. **Будущее (O Futuro Simples e Composto)** | 💡 *Pílula*: Futuro composto (*Буду + Infinitivo*). | 📖 *Vocab*: Завтра, Скоро, Будущее.
3. **Аспект глагола I (Imperfeito vs Perfeito - Conceito)** | 💡 *Pílula*: Diferença entre Ação Contínua (НСВ) e Concluída (СВ). | 📖 *Vocab*: Делать / Сделать, Читать / Прочитать.
4. **Винительный падеж I (Caso Acusativo - Objetos Inanimados)** | 💡 *Pílula*: Alteração de substantivos femininos (-а ➔ -у, -я ➔ -ю). | 📖 *Vocab*: Книга ➔ Книгу, Вода ➔ Воду.
5. **Винительный падеж II (Caso Acusativo - Seres Animados)** | 💡 *Pílula*: Substantivos masculinos animados recebem terminação de Genitivo (-а/-я). | 📖 *Vocab*: Вижу друга, знаю врача.
6. **Родительный падеж I (Caso Genitivo - Posse e Ausência)** | 💡 *Pílula*: Expressão У меня нет... (Eu não tenho...) + Genitivo. | 📖 *Vocab*: Нет времени, нет денег.
7. **Родительный падеж II (Quantidade e Números)** | 💡 *Pílula*: Uso de Genitivo Singular após 2, 3, 4 e Plural após 5+. | 📖 *Vocab*: 2 рубля, 5 рублей.
8. **Свободное время и хобби (Lazer e Hobbies)** | 💡 *Pílula*: Verbo Заниматься + Caso Instrumental básico. | 📖 *Vocab*: Спорт, Музыка, Кино, Чтение.
9. **Праздники в России (Festas Russas: Ano Novo e Maslenitsa)** | 💡 *Pílula*: Cumprimentos festivos com С + Instrumental (*С Новым Годом!*). | 📖 *Vocab*: Новый Год, Рождество, Праздник.
10. **Покупки и сувениры (Matrioska e Lembrancinhas)** | 💡 *Pílula*: Comparativos com Чем e Mais que. | 📖 *Vocab*: Матрёшка, Сувенир, Подарок.
11. **Описание людей (Descrição Física e Personalidade)** | 💡 *Pílula*: Adjetivos no Acusativo e Genitivo. | 📖 *Vocab*: Высокий, Умный, Добрый.
12. **В квартире (A Dacha e Casas Russas)** | 💡 *Pílula*: O conceito cultural da Дача (Casa de campo russa). | 📖 *Vocab*: Дача, Комната, Кухня, Мебель.
13. **Звонок по телефону (Ligações e Mensagens)** | 💡 *Pílula*: Expressões de atendimento telefônico (*Ало, Слушаю*). | 📖 *Vocab*: Алло, Телефон, Сообщение.
14. **Приглашение и встречи (Convites e Encontros)** | 💡 *Pílula*: Verbo Встречаться с + Instrumental. | 📖 *Vocab*: Встреча, Пойти, Времени.
15. **Путешествия по России (Viagens pela Rússia - Transiberiana)** | 💡 *Pílula*: Verbos de movimento básicos (Идти vs Ехать). | 📖 *Vocab*: Поезд, Билет, Вагон, Путешествие.
16. **В театре и музее (Teatro Bolshoi e Museu Hermitage)** | 💡 *Pílula*: Pedir ingressos e horários culturais. | 📖 *Vocab*: Театр, Билет, Сцена, Выставка.
17. **Природа и сезоны (Natureza e Estações do Ano)** | 💡 *Pílula*: Advérbios de tempo e estação (*Весной, Летом, Осенью, Зимой*). | 📖 *Vocab*: Весна, Лето, Осень, Зима.
18. **Письма и e-mail (Redação Informal de E-mails)** | 💡 *Pílula*: Fórmulas de início (*Дорогой/Дорогая*) e despedida (*С уважением*). | 📖 *Vocab*: Письмо, Привет, Пока.
19. **Проблемы в поездке (Imprevistos e Ajuda)** | 💡 *Pílula*: Imperativo de emergência (*Помогите! Позовите!*). | 📖 *Vocab*: Помощь, Потерять, Чемодан.
20. **Чувства и эмоции (Sentimentos e Sentimentos)** | 💡 *Pílula*: Expressões com Мне + Adjetivo curto (*Мне грустно, Мне весело*). | 📖 *Vocab*: Радость, Грусть, Усталость.
21. **Спорт e Здоровый образ жизни (Esportes)** | 💡 *Pílula*: Играть в + Acusativo (esportes) vs Играть на + Preposicional (instrumentos). | 📖 *Vocab*: Футбол, Хоккей, Гитара.
22. **История e Символы (Símbolos e História da Rússia)** | 💡 *Pílula*: Numerais ordinais para séculos e datas. | 📖 *Vocab*: История, Флаг, Герб, Века.
23. **Revisão Geral A2** | 💡 *Pílula*: Consolidação de Passado, Futuro, Acusativo e Genitivo. | 📖 *Vocab*: Síntese A2.
24. **Desafio Final A2: Planejando uma Viagem pela Rússia** | 💡 *Pílula*: Projeto integrado de itinerário e reservas. | 📖 *Vocab*: Avaliação A2.

---

### 🟠 Nível B1: Autonomia & Os 6 Casos Gramaticais (24 Módulos)
*Foco: Casos Dativo e Instrumental, Verbos de Movimento sem/com prefixos e Aspectos Verbais Avançados.*

1. **Дательный падеж I (Caso Dativo - Objeto Indireto)** | 💡 *Pílula*: Terminações -у/-ю (M) e -е (F) para indicar destinatário. | 📖 *Vocab*: Давать, Звонить, Писать + Dativo.
2. **Дательный падеж II (Idade e Frases Impessoais)** | 💡 *Pílula*: Expressar idade (*Мне 25 лет*) e necessidade (*Мне нужно*). | 📖 *Vocab*: Нужно, Можно, Нельзя.
3. **Творительный падеж I (Caso Instrumental - Instrumento e Companhia)** | 💡 *Pílula*: Terminações -ом/-ем e -ой/-ей com a preposição С. | 📖 *Vocab*: С другом, с помощью.
4. **Творительный падеж II (Profissão e Mudança de Estado)** | 💡 *Pílula*: Verbos Быть, Стать, Работать + Instrumental. | 📖 *Vocab*: Стал врачом, работает инженером.
5. **Глаголы движения I (Verbos de Movimento Sem Prefixo - Ir a pé)** | 💡 *Pílula*: Diferença entre Unidirecional (Идти) e Multidirecional (Ходить). | 📖 *Vocab*: Идти vs Ходить.
6. **Глаголы движения II (Verbos de Movimento Sem Prefixo - Ir de Transporte)** | 💡 *Pílula*: Diferença entre Ехать (unidirecional) e Ездить (multidirecional). | 📖 *Vocab*: Ехать vs Ездить.
7. **Глаголы движения III (Prefixos de Movimento: По-, При-, У-)** | 💡 *Pílula*: По- (partida), При- (chegada), У- (saída definitiva). | 📖 *Vocab*: Прийти, Уйти, Поехать.
8. **Глаголы движения IV (Prefixos de Movimento: В-, Вы-, Про-, Пере-)** | 💡 *Pílula*: В- (entrar), Вы- (sair), Про- (passar por), Пере- (atravessar). | 📖 *Vocab*: Войти, Выйти, Перейти.
9. **Аспект глагола II (Aspecto no Passado e Futuro)** | 💡 *Pílula*: Nuances de resultado vs processo contínuo no passado. | 📖 *Vocab*: Решать / Решить.
10. **Аспект глагола III (Aspecto no Imperativo e Infinitivo)** | 💡 *Pílula*: Uso de Imperfeito para convites e Perfeito para ordens diretas. | 📖 *Vocab*: Читайте! vs Прочитайте!
11. **Сравнительная степень (Comparativos e Superlativos Avançados)** | 💡 *Pílula*: Formação com Более / Менее e sufixo -ее. | 📖 *Vocab*: Быстрее, Лучше, Позже.
12. **Условное наклонение (Modo Condicional e Hipóteses)** | 💡 *Pílula*: Uso da partícula Бы (*Если бы я знал, я бы пошёл*). | 📖 *Vocab*: Если бы, Бы.
13. **Косвенная речь (Discurso Indireto e Relatos)** | 💡 *Pílula*: Conectores Что, Чтобы, Где, Как no discurso indireto. | 📖 *Vocab*: Он сказал, что...
14. **Деловая переписка (E-mails Formais e Protocolo Corporativo)** | 💡 *Pílula*: Redação formal corporativa russa. | 📖 *Vocab*: Уважаемый, Сообщаем.
15. **Собеседование (Entrevistas de Emprego em Russo)** | 💡 *Pílula*: Descrever competências e experiência prévia. | 📖 *Vocab*: Опыт, Навыки, Резюме.
16. **Сложные предлоги (Preposições Complexas dos Casos)** | 💡 *Pílula*: Preposições Из-за (por causa de), Благодаря (graças a). | 📖 *Vocab*: Из-за, Благодаря, Во время.
17. **Русская литература I (Introdução aos Clássicos: Pushkin e Tchekhov)** | 💡 *Pílula*: Vocabulário poético e descritivo. | 📖 *Vocab*: Поэма, Рассказ, Герой.
18. **СМИ и новости (Leitura de Notícias em Russo)** | 💡 *Pílula*: Vocabulário jornalístico de imprensa russa. | 📖 *Vocab*: Новости, Событие, Газета.
19. **Экология и общество (Meio Ambiente e Sociedade)** | 💡 *Pílula*: Expressar opinião com Я считаю, что... | 📖 *Vocab*: Природа, Экология, Мнение.
20. **Выражение причины и следствия (Causa e Consequência)** | 💡 *Pílula*: Conectores Потому что, Поэтому, Так как. | 📖 *Vocab*: Потому что, Поэтому.
21. **Выражение цели (Orações Finais e Propósito)** | 💡 *Pílula*: Estrutura Для того чтобы + Infinitivo / Subjuntivo. | 📖 *Vocab*: Чтобы, Цель.
22. **Русский юмор e выражения (Humor Russo e Expressões)** | 💡 *Pílula*: Expressões idiomáticas clássicas (*Ни пуха ни пера, Дойти до ручки*). | 📖 *Vocab*: Идиомы, Юмор.
23. **Revisão Geral B1** | 💡 *Pílula*: Consolidação dos 6 Casos e Verbos de Movimento com Prefixo. | 📖 *Vocab*: Síntese B1.
24. **Desafio Final B1: Debate Simulado e Apresentação de Projeto** | 💡 *Pílula*: Defesa de ponto de vista em público. | 📖 *Vocab*: Avaliação B1.

---

### 🔴 Nível B2: Fluência Avançada & Domínio Mídia/Corporativo (24 Módulos)
*Foco: Particípios, Gerúndios, Subjuntivo Avançado, Notícias Nativa, Literatura Profunda e Negociação.*

1. **Причастие I (Particípios Ativos no Presente e Passado)** | 💡 *Pílula*: Formação com sufixos -ущ-/-ющ-, -ащ-/-ящ-, -вш-. | 📖 *Vocab*: Читающий, Сделавший.
2. **Причастие II (Particípios Passivos no Presente e Passado)** | 💡 *Pílula*: Formação com sufixos -ем-/-им-, -нн-, -т-. | 📖 *Vocab*: Читаемый, Написанный.
3. **Краткие причастия (Particípios Curtos na Voz Passiva)** | 💡 *Pílula*: Formas curtas na voz passiva (*Дом построен*). | 📖 *Vocab*: Построен, Открыт, Закрыт.
4. **Деепричастие I (Gerúndios no Imperfeito - Ações Simultâneas)** | 💡 *Pílula*: Formação com sufixos -а/-я (*Читая книгу, он пил чай*). | 📖 *Vocab*: Читая, Сидя, Зная.
5. **Деепричастие II (Gerúndios no Perfeito - Ações Anteriores)** | 💡 *Pílula*: Formação com sufixos -в/-вши (*Прочитав письмо, он ушёл*). | 📖 *Vocab*: Прочитав, Сделав.
6. **Переговоры e бизнес (Negociação Executive e Resolução de Conflitos)** | 💡 *Pílula*: Linguagem diplomática corporativa. | 📖 *Vocab*: Переговоры, Договор, Соглашение.
7. **Юридический язык (Linguagem Jurídica e Burocrática Básica)** | 💡 *Pílula*: Interpretação de contratos e vistos russos. | 📖 *Vocab*: Закон, Права, Контракт.
8. **Экономика и финансы (Economia e Mercado)** | 💡 *Pílula*: Vocabulário financeiro de alto nível. | 📖 *Vocab*: Инфляция, Рынок, Инвестиции.
9. **Анализ прессы (Análise de Periódicos Nativos - TASS, RIA Novosti)** | 💡 *Pílula*: Estilo jornalístico informativo nativo. | 📖 *Vocab*: Пресса, Статья, Репортаж.
10. **Подкасты e радио (Compreensão de Podcasts Nativos em Velocidade Real)** | 💡 *Pílula*: Captar nuances de velocidade e abreviações da fala. | 📖 *Vocab*: Подкаст, Эфир, Ведущий.
11. **Кино и сериалы (Cinema e Séries Russas sem Legendas)** | 💡 *Pílula*: Gírias modernas e linguagem de rua russa. | 📖 *Vocab*: Кино, Фильм, Роль, Сценарий.
12. **Научные тексты (Redação Acadêmica e Científica)** | 💡 *Pílula*: Estruturação de teses e relatórios acadêmicos. | 📖 *Vocab*: Исследование, Анализ, Вывод.
13. **Русская литература II (Dostoiévski e Tolstói)** | 💡 *Pílula*: Análise estilística de *Crime e Castigo* e *Guerra e Paz*. | 📖 *Vocab*: Роман, Философия, Душа.
14. **Русская поэзия (Poesia Russa: Esenin, Akhmatova, Tsvetaeva)** | 💡 *Pílula*: Métrica, rima e sonoridade poética russa. | 📖 *Vocab*: Стихи, Поэзия, Рифма.
15. **Политика и международные отношения (Relações Internacionais)** | 💡 *Pílula*: Discursos oficiais e diplomacia. | 📖 *Vocab*: Политика, Дипломатия, Союз.
16. **Технологии и ИИ (Tecnologia e Inteligência Artificial)** | 💡 *Pílula*: Vocabulário de TI e inovação tecnológica. | 📖 *Vocab*: Технология, Данные, Сеть.
17. **Сложный синтаксис (Sintaxe Avançada e Períodos Compostos)** | 💡 *Pílula*: Orações subordinadas condicionais e concessivas complexas. | 📖 *Vocab*: Несмотря на то что...
18. **Стилистика русского языка (Estilística e Registros de Fala)** | 💡 *Pílula*: Distinção entre registro formal, neutro e coloquial. | 📖 *Vocab*: Стилистика, Речь.
19. **Идиоматика высокого уровня (Expressões Idiomáticas Avançadas)** | 💡 *Pílula*: Provérbios e metálforas da sabedoria popular russa. | 📖 *Vocab*: Пословицы, Поговорки.
20. **Публичное выступление (Oratória e Discursos Públicos)** | 💡 *Pílula*: Técnicas de persuasão e dicção em russo. | 📖 *Vocab*: Речь, Выступление, Публика.
21. **Симуляция интервью (Simulación de Entrevista na Mídia Nativa)** | 💡 *Pílula*: Responder a perguntas complexas sob pressão. | 📖 *Vocab*: Интервью, Ответ, Вопрос.
22. **Эссе и публицистика (Redação de Ensaios Pessoais)** | 💡 *Pílula*: Argumentação coesa e elegante em prosa. | 📖 *Vocab*: Эссе, Текст, Аргумент.
23. **Регламент и сертификация (Revisão Geral de Fluidez B2)** | 💡 *Pílula*: Preparação para certificação oficial TORFL / ТРКИ. | 📖 *Vocab*: Экзамен, ТРКИ, Сертификат.
24. **Desafio Final B2: Exame Integrado de Fluidez e Certificação Interna** | 💡 *Pílula*: Avaliação global de conversação, escrita e compreensão nativa. | 📖 *Vocab*: Avaliação B2.

---

## 🛠️ 6. Mapa de Arquivos & Estrutura de Diretórios Proposta

```
WIP/
 ├── hub_idiomas.html                     # [MODIFICAR] Adicionar Card do Russo Academy
 ├── hub_russo.html                       # [NOVO] Dashboard principal do curso de Russo
 ├── html/ru-RU/
 │    ├── russo_curso.html               # [NOVO] Player do curso em 5 estágios
 │    ├── russo_cirilico.html             # [NOVO] Curso do Alfabeto Cirílico (6 Módulos + Tabela + Canvas)
 │    ├── russo_minigame.html             # [NOVO] Arena Arcade Cirílica Configurável
 │    └── russo_dicionario.html           # [NOVO] Dicionário Cirílico & Glossário
 ├── database/ru-RU/
 │    ├── data_russo_cirilico.js         # [NOVO] Banco de Dados do Alfabeto Cirílico (33 Letras + Exercícios)
 │    ├── data_curso_russo_a1.js         # [NOVO] Banco de Dados Módulos A1 (24 Módulos)
 │    ├── data_curso_russo_a2.js         # [NOVO] Banco de Dados Módulos A2 (24 Módulos)
 │    ├── data_curso_russo_b1.js         # [NOVO] Banco de Dados Módulos B1 (24 Módulos)
 │    ├── data_curso_russo_b2.js         # [NOVO] Banco de Dados Módulos B2 (24 Módulos)
 │    └── data_russo_dicionario.js       # [NOVO] Dados do Dicionário Russo
 ├── app.js                               # [MODIFICAR] Suporte ao idioma RU e rotas de XP
 └── style.css                            # [MODIFICAR] Variáveis e temas do Russo Academy
```
