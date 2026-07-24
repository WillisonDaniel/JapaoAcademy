# Japão Academy - Regras e Arquitetura Global do Projeto

## 🎯 Objetivo
Plataforma mobile-first e data-driven para aprendizado do idioma japonês, englobando o Curso Principal (CEFR A1) e Módulos de Fixação/Alfabetização (Hiragana, Katakana, Kanji N5 e Minigame com reconhecimento de voz/digitação).

## 🧱 Arquitetura de Arquivos
- `index.html`: Portal de entrada e navegação principal da plataforma.
- `curso.html` & `data_curso_a1.js`: Trilha principal de conversação A1 (módulos pedagógicos em 5 etapas) e seu banco de dados centralizado.
- `hiragana.html` & `data_hiragana.js`: Módulo de aprendizado de Hiragana e tabela fonética.
- `katakana.html` & `data_katakana.js`: Módulo de aprendizado de Katakana.
- `kanji_n5.html` & `data_kanji_n5.js`: Módulo de estudo e dicionário de Kanji N5 com exemplos e Kunyomi/Onyomi.
- `minigame.html`: Arena de prática rápida com vidas, combos, suporte a microfone/fala e ranking.
- `app.js`: Motor JavaScript unificado que gerencia temas, sintetizador de áudio (SpeechSynthesis), efeitos de som (Web Audio API), progresso em `localStorage` e renderização de todos os cursos.
- `style.css`: Folha de estilos global responsiva com suporte a temas.

## 📚 Padrão dos Módulos da Trilha A1 (`data_curso_a1.js`)
Cada módulo do curso principal segue o formato hiper-imersivo:
1. Stage 1 (Contexto): `missionTitle`, `missionDescription`, `audioGuide`.
2. Stage 2 (Drops): Lista com cards de vocabulário e pílulas gramaticais (`grammar_pill`).
3. Stage 3 (Prática): ARRAY com no MÍNIMO 5 exercícios interativos (`stage3_practice`) - podendo expandir conforme a complexidade.
4. Stage 4 (Diálogo): ARRAY com no MÍNIMO 3 simulações de conversa real (`stage4_dialog`) - podendo expandir conforme a complexidade.
5. Stage 5 (Quiz & XP): Tela de conclusão e recompensa XP.

## 🗺️ Mapeamento Curricular: Nível A1 (Japonês de Sobrevivência)
31 módulos exatos para o Nível A1, divididos em 6 grandes blocos temáticos:

### 🟢 Bloco 1: Primeiros Passos & Etiqueta Social (Módulos 1 a 5)
- **Módulo 1: Saudações do Dia a Dia** (*Ohayou gozaimasu, Konnichiwa, Konbanwa*) | 🖼️ *Visual: Linha do tempo com sol nascendo, sol no topo e lua brilhando.*
- **Módulo 2: O Prazer em Conhecer** (*Hajimemashite, Watashi wa [Nome] desu, Yoroshiku*) | 🖼️ *Visual: Duas pessoas fazendo uma reverência leve (ojigi) trocando cartões de visita.*
- **Módulo 3: As Palavras Mágicas** (*Arigatou, Sumimasen, Gomen nasai*) | 🖼️ *Visual: Alguém pedindo licença para passar em uma multidão ou agradecendo um presente.*
- **Módulo 4: Sim, Não e Despedidas** (*Hai, Iie, Sayounara, Ja ne, Mata ne*) | 🖼️ *Visual: Amigos acenando tchau na estação de trem e gestos de concordar/discordar com a cabeça.*
- **Módulo 5: Quem é Quem?** (*Anata, Sensei, Gakusei, Tomodachi*) | 🖼️ *Visual: Uma sala de aula com destaque apontando para o professor e para os alunos.*

### 🟡 Bloco 2: Identidade, Origem & Profissões (Módulos 6 a 10)
- **Módulo 6: De Onde Você É?** (*Nihon, Burajiru, -jin, -go*) | 🖼️ *Visual: Mapa-múndi e bandeiras do Brasil e Japão com personagens vestindo roupas típicas.*
- **Módulo 7: Profissões I - O Básico** (*Isha, Kaishain, Gakusei, Kyoushi*) | 🖼️ *Visual: Ícones de profissões (médico com jaleco, trabalhador de terno com pasta, estudante).*
- **Módulo 8: Profissões II - O Dia a Dia** (*Keisatsukan, Ten'in, Enginia, Shufu*) | 🖼️ *Visual: Policial em um posto Koban, atendente de loja de conveniência, programador no PC.*
- **Módulo 9: A Fórmula "X é Y"** (*X wa Y desu / X wa Y ja arimasen*) | 🖼️ *Visual: Dois blocos de montar se encaixando (Afirmação) e se separando com um "X" vermelho (Negação).*
- **Módulo 10: A Arte de Perguntar** (*Uso da partícula "Ka" no final das frases: ... desu ka?*) | 🖼️ *Visual: Um personagem com uma grande expressão de dúvida e um ponto de interrogação flutuante.*

### 🟠 Bloco 3: O Mundo ao Redor & Pertences (Módulos 11 a 15)
- **Módulo 11: Isso, Aquilo e Aquilo Lá!** (*Kore, Sore, Are, Dore*) | 🖼️ *Visual: Três cenas apontando para um objeto na própria mão, na mão do amigo, e outro bem longe.*
- **Módulo 12: A Partícula da Posse "No"** (*Watashi no hon, Dare no?*) | 🖼️ *Visual: Um personagem segurando um livro com uma etiqueta brilhante com o seu próprio nome.*
- **Módulo 13: O Kit de Sobrevivência Pessoal** (*Sumaho, Kagi, Megane, Saifu, Baggu*) | 🖼️ *Visual: Um "inventário de bolso" com celular, chaves, óculos, carteira e bolsa.*
- **Módulo 14: Móveis e Objetos de Estudo** (*Tsukue, Isu, Pasokon, Pen, Noto*) | 🖼️ *Visual: Uma escrivaninha organizada com notebook, caderno, caneta e uma cadeira ergonômica.*
- **Módulo 15: Locais Essenciais** (*Toire, Heya, Gakkou, Kaisha, Eki*) | 🖼️ *Visual: Placas e fachadas de banheiro, quarto, prédio escolar, escritório e estação de trem.*

### 🔴 Bloco 4: Números, Dinheiro & Compras no Konbini (Módulos 16 a 20)
- **Módulo 16: Contando de 1 a 10** (*Ichi, Ni, San, Shi/Yon...*) | 🖼️ *Visual: As mãos mostrando a forma clássica japonesa de contar com os dedos.*
- **Módulo 17: Dinheiro e Preços** (*Contagem até 10.000, En, Ikura desu ka?*) | 🖼️ *Visual: Notas de Iene, moedas brilhantes e uma etiqueta de preço de loja.*
- **Módulo 18: Comprando na Loja de Conveniência** (*Kore o kudasai, Fukuro, Kaado*) | 🖼️ *Visual: O balcão de um "Konbini" clássico no momento de pagar as compras.*
- **Módulo 19: Comida & Bebida I** (*Mizu, Ocha, Gohan, Pan, Niku, Sakana*) | 🖼️ *Visual: Copo d'água suado, xícara de chá verde fumegante, tigela de arroz e pão fatiado.*
- **Módulo 20: Comida & Bebida II e Sabores** (*Yasai, Kudamono, Oishii, Takai, Yasui*) | 🖼️ *Visual: Frutas e vegetais coloridos, e um personagem comendo algo delicioso com olhos brilhando.*

### 🟣 Bloco 5: Tempo, Horários & Rotina (Módulos 21 a 25)
- **Módulo 21: Que Horas São?** (*...ji ...fun desu, Han, Ima*) | 🖼️ *Visual: Relógios analógicos e digitais marcando horários exatos.*
- **Módulo 22: Os Dias da Semana** (*Getsuyoubi a Nichiyoubi*) | 🖼️ *Visual: Um calendário de folhinha com os dias marcados em cores diferentes.*
- **Módulo 23: As Partes do Dia e do Tempo** (*Asa, Hiru, Yoru, Kyou, Ashita, Kinou*) | 🖼️ *Visual: Uma janela mostrando a transição entre manhã, tarde e noite estrelada.*
- **Módulo 24: Verbos de Ação I - Consumo** (*Tabemasu, Nomimasu, Mimasu, Kikimasu*) | 🖼️ *Visual: Quatro quadrinhos mostrando alguém comendo, bebendo, assistindo TV e ouvindo música com fones.*
- **Módulo 25: Verbos de Ação II - Movimento** (*Ikimasu, Kimasu, Kaerimasu*) | 🖼️ *Visual: Setas e bonequinhos indo para um destino, chegando e voltando para a casa.*

### 🟤 Bloco 6: Navegação, Existência & Desafio Final (Módulos 26 a 31)
- **Módulo 26: Pelo Transporte Público** (*Densha, Basu, Takushi, Chikatetsu*) | 🖼️ *Visual: Trem-bala (Shinkansen), ônibus urbano japonês e um táxi com portas automáticas.*
- **Módulo 27: Perdido na Rua: Onde Fica?** (*...wa doko desu ka?, Koko, Soko, Asoko*) | 🖼️ *Visual: Um turista segurando um mapa no celular perguntando para uma pessoa apontando a direção.*
- **Módulo 28: Coisas que Existem - Arimasu** (*Usado para objetos inanimados e plantas: Hon ga arimasu*) | 🖼️ *Visual: Uma caixa aberta mostrando objetos e livros guardados dentro dela.*
- **Módulo 29: Pessoas e Animais que Existem - Imasu** (*Usado para seres vivos: Inu ga imasu, Tomodachi ga imasu*) | 🖼️ *Visual: Um parque com pessoas caminhando, gatos correndo e cachorros brincando.*
- **Módulo 30: Conectando Ideias Básicas** (*E, Mas, Também: Soshite, Demo, Mo*) | 🖼️ *Visual: Uma ponte conectando duas ilhas de ideias e sinais de trânsito indicando transição.*
- **Módulo 31: Revisão Geral & O Desafio do Aeroporto** (*Simulação Prática A1*) | 🖼️ *Visual: Um carimbo de passaporte japonês de "Aprovado no Nível A1" e um troféu dourado!*

---

## 🗺️ Mapeamento Curricular: Nível A2 (Comunicação do Dia a Dia)

### 🟢 Seção 1: Minha Rotina & Estilo de Vida (Módulos 1 a 5)
*O objetivo aqui é estender a capacidade de descrever o dia a dia e frequências.*
- **Módulo 1: A Minha Rotina Diária** (*Acordar, tomar banho, escovar os dentes, dormir*)
- **Módulo 2: Com que Frequência?** (*Adverbios: Sempre, às vezes, raramente, nunca*)
- **Módulo 3: Fim de Semana e Hobbies** (*Praticar esportes, jogar, ler livros, ver animes*)
- **Módulo 4: Adjetivos em Ação (Parte 1)** (*Descrever coisas e lugares: Adjetivos -i*)
- **Módulo 5: Adjetivos em Ação (Parte 2)** (*Descrever pessoas e estados: Adjetivos -na*)

### 🟡 Seção 2: Passado, Experiências e Histórias (Módulos 6 a 10)
*O aluno aprende a falar sobre o que aconteceu e o que costumava fazer.*
- **Módulo 6: O Passado dos Verbos** (*Forma -mashita / -masen deshita: "Eu comi", "Eu não fui"*)
- **Módulo 7: O Passado dos Adjetivos** (*"O dia estava quente", "A prova não foi difícil"*)
- **Módulo 8: Onde você esteve?** (*Descrever eventos passados e viagens curtas*)
- **Módulo 9: Expressando Gostos e Habilidades** (*Suki / Kirai / Jouzu / Heta*)
- **Módulo 10: Comparando Coisas** (*"A é mais barato que B", "Qual é o melhor?"*)

### 🟠 Seção 3: Conexão, Pedidos e Regras (Módulos 11 a 15)
*Dominando a famosa "Forma TE" para pedir favores e falar de proibições.*
- **Módulo 11: A Mágica da Forma TE (Parte 1)** (*A regra de conjunção dos verbos*)
- **Módulo 12: Pedindo Favores com Educação** (*...te kudasai: "Por favor, escreva aqui"*)
- **Módulo 13: O que você está fazendo agora?** (*Ação contínua: ...te imasu*)
- **Módulo 14: Pedindo Permissão** (*...te mo ii desu ka: "Posso entrar?"*)
- **Módulo 15: Proibições e Regras** (*...te wa ikemasen: "Não pode tirar fotos aqui"*)

### 🔴 Seção 4: Compras, Viagens e Navegação Avançada (Módulos 16 a 20)
*Movimentando-se pelo Japão com confiança em estações, hotéis e lojas.*
- **Módulo 16: Conectando Ações em Sequência** (*"Fui para casa, comi e dormi"*)
- **Módulo 17: Comprando Passagens e Traslados** (*Linhas de trem, baldeação, expressos*)
- **Módulo 18: No Hotel e Ryokan** (*Check-in, pedir toalhas, perguntar do café*)
- **Módulo 19: Dando e Recebendo Direções detalhadas** (*Vire à direita, passe a ponte, em frente ao posto*)
- **Módulo 20: Expressando Desejos pessoais** (*Forma -tai: "Quero ir ao Japão", "Quero comer ramen"*)

### 🟣 Seção 5: Saúde, Clima e Sentimentos (Módulos 21 a 25)
*Lidando com imprevistos e expressando o estado físico/emocional.*
- **Módulo 21: O Clima e as Estações do Ano** (*Chuva, neve, calor, "Acho que vai chover"*)
- **Módulo 22: Na Farmácia e no Médico** (*Sintomas: Dor de cabeça, febre, resfriado*)
- **Módulo 23: Expressando Necessidade** (*Forma -nakereba narimasen: "Tenho que tomar o remédio"*)
- **Módulo 24: Dando Conselhos Leves** (*...hou ga ii desu: "É melhor você descansar"*)
- **Módulo 25: Explicando Motivos e Razões** (*Uso do ...kara e ...nde: "Não fui porque estava doente"*)

### 🟤 Seção 6: Vida Social, Interações e Convites (Módulos 26 a 30)
*Preparando o aluno para fazer amigos e interagir socialmente no nível B1.*
- **Módulo 26: Fazendo Convites** (*...mashou / ...masen ka: "Vamos tomar um café?"*)
- **Módulo 27: Aceitando e Recusando com Delicadeza** (*"Adoraria!", "Infelizmente hoje não dá..."*)
- **Módulo 28: Dar e Receber Presentes/Favores** (*Ageru / Morau / Kureru*)
- **Módulo 29: Planos e Intenções para o Futuro** (*...tsumori desu: "Pretendo viajar no mês que vem"*)
- **Módulo 30: Desafio de Simulação A2** (*Projeto Integrado: Planejando uma viagem em grupo*)

## 🗺️ Mapeamento Curricular: Nível B1 (Independência & Fluência Social)
### 🟢 Seção 1: O Mundo Informal & Conversa Fluida (Módulos 1 a 4)
*Transição da fala polida (Desu/Masu) para a fala casual do dia a dia entre amigos.*
- **Módulo 1: A Forma Casual (Futsuu-kei)** (*Dominando o tom informal em conversas reais*)
- **Módulo 2: Contração de Verbos na Fala Real** (*...te iru ➔ ...teru, ...nakereba ➔ ...nakya*)
- **Módulo 3: Expressando Citações e Pensamentos** (*...to omoimasu / ...to iimashita: "Acho que...", "Ele disse que..."*)
- **Módulo 4: Dúvidas e Incertezas** (*...ka dou ka / ...kamo shiremasen: "Se sim ou não", "Pode ser que..."*)
### 🟡 Seção 2: Narrativa, Causas e Imprevistos (Módulos 5 a 8)
*Aprender a explicar o "porquê" das coisas e relatar acidentes ou situações chatas.*
- **Módulo 5: Explicando Razões com Nuance** (*...node / ...kara / ...no de: Justificativas formais e informais*)
- **Módulo 6: Expressando Arrependimento e Conclusão** (*Forma -chau / -te shimaimashita: "Puxa, perdi o trem!"*)
- **Módulo 7: Voz Passiva (Ukemi)** (*"Fui criticado", "Eles construíram aquele prédio"*)
- **Módulo 8: Situações de Incômodo (Passiva de Incômodo)** (*"Choveu e me molhei", "O vizinho fez barulho"*)
### 🟠 Seção 3: Hipóteses, Condições e Mudanças (Módulos 9 a 12)
*Construindo frases complexas do tipo "Se X acontecer, então Y".*
- **Módulo 9: Condicionais I - Tara & To** (*"Se eu for ao Japão...", "Quando você aperta o botão..."*)
- **Módulo 10: Condicionais II - Ba & Nara** (*"Se for barato...", "Se o assunto for esse..."*)
- **Módulo 11: Mudança de Estado e Hábitos** (*...youn ni naru / ...koto ni suru: "Passei a entender", "Decidi estudar"*)
- **Módulo 12: Tentativas e Experiências** (*...te miru / ...koto ga aru: "Vou tentar comer", "Já tive a experiência de..."*)
### 🔴 Seção 4: Transações de Favores & Relações Humanas (Módulos 13 a 16)
*Dominando a teia social de como pedir, fazer e receber favores no Japão.*
- **Módulo 13: Favores em Ação I** (*...te ageru / ...te kureru: "Fiz um favor para ele", "Ele fez por mim"*)
- **Módulo 14: Favores em Ação II** (*...te morau: "Consegui que alguém fizesse algo por mim"*)
- **Módulo 15: Voz Causativa (Saseru)** (*Fazer alguém fazer algo ou permitir que faça*)
- **Módulo 16: Causativa-Passiva** (*"Fui forçado a fazer algo / Pediram para eu fazer"*)
### 🟣 Seção 5: Sociedade, Trabalho & Introdução ao Keigo (Módulos 17 a 20)
*O vocabulário e a etiqueta para o ambiente corporativo e de negócios.*
- **Módulo 17: Linguagem de Respeito (Sonkeigo)** (*Como elevar as ações do cliente ou chefe*)
- **Módulo 18: Linguagem de Humildade (Kenjougo)** (*Como abaixar a própria posição em sinal de respeito*)
- **Módulo 19: E-mails e Telefonemas Profissionais** (*Expressões clássicas: Osaki ni shitsurei shimasu, Osewa ni narimasu*)
- **Módulo 20: Entrevistas de Emprego & Apresentação Corporativa** (*Explicar experiências passadas e metas*)
### 🟤 Seção 6: Cultura, Nuances & Desafio B1 (Módulos 21 a 24)
*Compreensão de mídias, textos mais longos e autonomia total.*
- **Módulo 21: Expressando Aparência e Sensações** (*...sou desu / ...mitai desu: "Parece saboroso", "Parece que vai chover"*)
- **Módulo 22: Regras da Sociedade Japonesa** (*Reciclagem, regras de moradia, etiqueta em banhos públicos/Onsen*)
- **Módulo 23: Leitura e Interpretação de Notícias/Avisos** (*Avisos de terremoto, atraso de trens, anúncios de lojas*)
- **Módulo 24: Desafio de Simulação B1** (*Projeto Integrado: Uma entrevista de trabalho / Resolução de um imprevisto burocrático no Japão*)

🗺️ Mapeamento Curricular: Nível B2 (Fluência Avançada & Domínio Mídia/Corporativo)
🟢 Seção 1: Nuances Avançadas & Expressão de Emoções (Módulos 1 a 4)
Captando os detalhes sutis de sentimentos, frustrações e expectativas na língua.

Módulo 1: Expressando Expectativas e Decepções (...hazukashii, ...ni nihonki, ...koto ni natte iru)

Módulo 2: Nuances de "Apenas" e "Somente" Avançados (...dake de naku, ...ni suginai, ...nomi)

Módulo 3: Expressando Julgamentos e Críticas Sutis (...kuse ni, ...wari ni wa, ...te bakari iru)

Módulo 4: Linguagem Figurada e Expressões Idiomáticas (Kanyouku) (Usando provérbios e expressões com partes do corpo: "olhos", "mãos", "boca")

🟡 Seção 2: O Mundo dos Negócios & Etiqueta Corporativa (Módulos 5 a 8)
Dominando a comunicação profissional de alto nível usada nas empresas japonesas.

Módulo 5: Keigo Avançado (Sonkeigo e Kenjougo Profundos) (Expressões formais de alta liderança)

Módulo 6: Redação de E-mails Corporativos & Relatórios (Estrutura formal de e-mail:挨拶, 本題, 結び)

Módulo 7: Negociação & Resolução de Conflitos (Discordar com extrema polidez, propor alternativas diplomáticas)

Módulo 8: Apresentações e Discursos de Negócios (Formato de apresentações executivas e relatórios formais)

🟠 Seção 3: Análise de Mídia, Notícias & Atualidades (Módulos 9 a 12)
Capacidade de consumir conteúdo nativo em tempo real.

Módulo 9: Leitura de Notícias e Jornalismo (NHK News) (Vocabulário de política, economia e tecnologia)

Módulo 10: Anúncios, Editais e Avisos Governamentais (Interpretação de documentos oficiais e burocracia no Japão)

Módulo 11: Entendendo Mídia & Animes sem Legendas (Gírias modernas, dialetos regionais (Kansai-ben) e abreviações da internet)

Módulo 12: Temas Sociais e Ambientais (Discussão sobre sociedade envelhecida, meio ambiente e tecnologia)

🔴 Seção 4: Argumentação, Debates & Textos Acadêmicos (Módulos 13 a 16)
Aprender a defender pontos de vista complexos com coesão e elegância.

Módulo 13: Conectores Lógicos e Transição Acadêmica (...sae ...ba, ...ni mo karawazu, ...ni tsukete)

Módulo 14: Defendendo Teses e Pontos de Vista (...to ieru darou, ...noshite wa, ...ni hokanaranai)

Módulo 15: Leitura Dramática & Literatura Japonesa (Análise de contos, crônicas e ensaios curtos nativos)

Módulo 16: Análise de Causa e Efeito Avançados (...no kekka, ...ni yorite, ...o kikkake ni)

🟣 Seção 5: Imersão Total & Maestria (Módulos 17 a 20)
O encerramento da jornada de aprendizado da Japão Academy.

Módulo 17: Dialetos e Variações Regionais (Entendendo as diferenças do japonês de Kansai, Kyushu e Tohoku)

Módulo 18: Onomatopeias e Mimetismos Avançados (Gitaijo / Giseigo) (Expressar sensações táteis, emocionais e visuais nativas)

Módulo 19: Etiqueta Cultural Avançada & Filosofia Japonesa (Conceitos como Omotenashi, Wabi-Sabi, Ikigai aplicados à língua)

Módulo 20: O Grande Desafio B2 (Trabalho de Conclusão de Curso) (Simulação real: Apresentação de um projeto corporativo/pessoal inteiramente em japonês)

## ⛩️ Mapeamento Curricular: JLPT N3 Kanji
- **Total de Kanjis Novos:** ~370 Kanjis
- **Estrutura:** 18 Módulos Temáticos de Estudo + 1 Módulo Final de Tabela Geral e Revisão (`isReviewTable: true`, Total: 19 Módulos)
- **Média por Módulo:** ~18 a 20 Kanjis
- **Recursos por Módulo:** Explicação Gramatical N3, Cards de Kanjis (Kun/On/Exemplos/Mnemônicos/Canvas), Bloco de Leitura Guiada com Furigana e Romaji e Quiz de 10 Questões.

### 🗺️ Mapa Temático dos Módulos do N3

#### 🟢 Bloco 1: Cotidiano Avançado e Vida Social
- **Módulo 1: Vida Urbana, Moradia e Trânsito Complexo**
  - Temas: Bairros, construções urbanas, sinais de trânsito, acidentes e vias públicas.
  - Exemplos de Kanjis: 港 (porto), 渡 (atravessar), 招 (convidar), 築 (construir).
- **Módulo 2: Vestuário, Moda e Cuidados Pessoais**
  - Temas: Roupas, tecidos, cores complexas, calçados e estética.
  - Exemplos de Kanjis: 服 (roupa - revisão/composto), 換 (trocar), 髪 (cabelo), 姿 (figura/aparência).
- **Módulo 3: Alimentação, Culinária e Ingredientes Avançados**
  - Temas: Métodos de cozimento, sabores complexos, utensílios e restaurantes.
  - Exemplos de Kanjis: 焼 (assar/grelhar), 煮 (cozinhar/ferver), 皿 (prato), 汁 (sopa/caldo).
- **Módulo 4: Relações Humanas, Sentimentos e Emoções**
  - Temas: Relações interpessoais, sentimentos, traços de personalidade e empatia.
  - Exemplos de Kanjis: 悲 (tristeza), 怒 (raiva), 害 (dano/prejuízo), 喜 (alegria).

#### 🔵 Bloco 2: Trabalho, Economia e Sociedade
- **Módulo 5: Trabalho, Escritório e Profissões**
  - Temas: Emprego, reuniões, cargos, setores corporativos e tarefas.
  - Exemplos de Kanjis: 職 (emprego/cargo), 係 (encarregado), 務 (dever/tarefa), 頼 (confiar/pedir).
- **Módulo 6: Comércio, Finanças e Negócios**
  - Temas: Compras, pagamentos, bancos, taxas e economia básica.
  - Exemplos de Kanjis: 費 (custo/despesa), 税 (imposto), 貯 (economizar/poupar), 賃 (aluguel/tarifa).
- **Módulo 7: Saúde, Medicina e Sintomas**
  - Temas: Doenças, exames, órgãos do corpo, remédios e hospitalização.
  - Exemplos de Kanjis: 痛 (dor), 治 (curar), 薬 (remédio), 牙/歯 (dente).
- **Módulo 8: Educação, Ciência e Tecnologia**
  - Temas: Matérias escolares, pesquisas, experimentos, computadores e inovação.
  - Exemplos de Kanjis: 研 (pesquisar), 究 (investigar), 術 (técnica/arte), 科 (ciência/seção).

#### 🟡 Bloco 3: Natureza, Meio Ambiente e Geografia
- **Módulo 9: Clima, Desastres Naturais e Meteorologia**
  - Temas: Estações, tempestades, terremotos, temperatura e clima.
  - Exemplos de Kanjis: 波 (onda), 津 (porto/tsunami), 震 (tremer/terremoto), 暴 (violento/tempestade).
- **Módulo 10: Geografia, Relevo e Países**
  - Temas: Regiões, fronteiras, capitais, clima e terreno.
  - Exemplos de Kanjis: 域 (região/área), 陸 (terra firme/continente), 坂 (ladeira), 湾 (baía).
- **Módulo 11: Animais, Plantas e Ecossistemas**
  - Temas: Fauna, flora, preservação, florestas e ecologia.
  - Exemplos de Kanjis: 虫 (inseto), 芝 (grama), 植 (plantar), 畜 (pecuária).

#### 🟣 Bloco 4: Comunicação, Cultura e Mídia
- **Módulo 12: Mídia, Notícias e Imprensa**
  - Temas: Jornais, artigos, transmissões de TV, entrevistas e reportagens.
  - Exemplos de Kanjis: 報 (informação/relatório), 告 (anunciar/notificar), 録 (gravar), 放送 (transmissão).
- **Módulo 13: Cultura, Tradições e Artes**
  - Temas: Festivais, história, música, teatro e arte tradicional.
  - Exemplos de Kanjis: 劇 (teatro/drama), 舞 (dança/palco), 演 (atuação), 祭 (festival).
- **Módulo 14: Viagens, Lazer e Esportes**
  - Temas: Turismo, hotéis, passeios, bagagens e esportes.
  - Exemplos de Kanjis: 旅 (viagem), 宿 (hospedagem/pousada), 景 (vista/paisagem), 投 (arremessar/jogar).

#### 🔴 Bloco 5: Ações, Verbos e Conceitos Abstratos
- **Módulo 15: Verbos de Transformação e Mudança**
  - Temas: Crescimento, alteração, decisão, começo e fim.
  - Exemplos de Kanjis: 変 (mudar), 化 (transformar), 決 (decidir), 始/終 (iniciar/terminar).
- **Módulo 16: Adjetivos e Qualidades Intermediárias**
  - Temas: Graus de intensidade, formatos, utilidade e estados físicos.
  - Exemplos de Kanjis: 複 (complexo), 算 (calcular), 易 (fácil/simples), 難 (difícil).
- **Módulo 17: Regras, Leis e Sociedade Política**
  - Temas: Direitos, deveres, regras sociais, justiça e governança.
  - Exemplos de Kanjis: 規 (regra/norma), 則 (regulamento), 律 (lei), 認 (reconhecer/aprovar).
- **Módulo 18: Tempo Relativo, Frequência e Ordem**
  - Temas: Passado recente, prazos, ordem cronológica e momentos.
  - Exemplos de Kanjis: 序 (ordem/sequência), 昔 (antigamente), 頃 (por volta de), 続 (continuar).
- **Módulo 19: Tabela Geral e Revisão N3 (`isReviewTable: true`)**
  - Conteúdo: Grade completa de consulta rápida de todos os ~370 Kanjis do N3 com áudio e integração instantânea ao Dicionário.

## ⛩️ Mapeamento Curricular: JLPT N2 Kanji
- **Total de Kanjis Novos:** ~380 Kanjis
- **Estrutura:** 20 Módulos Temáticos de Estudo + 1 Módulo Final de Tabela Geral e Revisão (`isReviewTable: true`, Total: 21 Módulos)
- **Média por Módulo:** ~18 a 20 Kanjis
- **Recursos por Módulo:** Explicação Gramatical N2, Cards de Kanjis (Kun/On/Exemplos/Mnemônicos/Canvas), Bloco de Leitura Guiada com Furigana e Romaji e Quiz de 10 Questões.

### 🗺️ Mapa Temático dos Módulos do N2

#### 🟢 Bloco 1: Negócios, Economia e Ambiente Corporativo
- **Módulo 1: Mundo Corporativo, Gestão e Estrutura de Empresas**
  - Temas: Diretoria, departamentos, contratação, estratégias e negociações de negócios.
  - Exemplos de Kanjis: 企 (empresa/planejar), 業 (negócio - compostos), 招 (convidar/atrair), 創 (criar/fundar).
- **Módulo 2: Finanças, Mercado, Contratos e Comércio Internacional**
  - Temas: Ações, investimentos, lucros, prejuízos, taxas de câmbio e contratos.
  - Exemplos de Kanjis: 財 (fortuna/patrimônio), 価 (valor/preço), 益 (lucro/benefício), 損 (perda/dano).
- **Módulo 3: Emprego, Trabalho, Direitos e Relações Trabalhistas**
  - Temas: Salário, aposentadoria, condições de trabalho, demissão e sindicato.
  - Exemplos de Kanjis: 雇 (empregar), 賃 (salário/aluguel - avançado), 職 (cargo/ocupação - avançado), 避 (evitar/esquivar).

#### 🔵 Bloco 2: Sociedade, Leis, Política e Governo
- **Módulo 4: Política, Eleições e Governança**
  - Temas: Partidos, votação, parlamento, políticas públicas e democracia.
  - Exemplos de Kanjis: 政 (política/governo), 治 (governar/curar), 票 (voto/cédula), 争 (disputar/contender).
- **Módulo 5: Leis, Justiça, Crime e Direitos Civis**
  - Temas: Tribunais, julgamentos, leis, infrações, regulamentações e direitos humanos.
  - Exemplos de Kanjis: 律 (lei/ritmo), 犯 (crime/cometer), 罪 (culpa/delito), 裁判 (julgamento).
- **Módulo 6: Notícias, Imprensa e Mídia de Massa**
  - Temas: Jornalismo, manchetes, entrevistas, transmissões de rádio/TV e liberdade de expressão.
  - Exemplos de Kanjis: 報 (relatório/notícia), 独 (independente/sozinho), 演 (apresentar/performar), 論 (argumentar/tese).

#### 🟡 Bloco 3: Ciência, Tecnologia e Medicina Avançada
- **Módulo 7: Ciência, Pesquisa e Método Científico**
  - Temas: Experimentos, teorias, descobertas, dados estatísticos e análise de laboratório.
  - Exemplos de Kanjis: 説 (teoria/explicar), 測 (medir/estimar), 験 (testar/verificar), 査 (investigar/examinar).
- **Módulo 8: Tecnologia, Engenharia e Sociedade Digital**
  - Temas: Software, redes, inteligência artificial, máquinas e inovação tecnológica.
  - Exemplos de Kanjis: 技 (técnica/habilidade), 構 (construção/estrutura), 備 (equipar/preparar), 導 (guiar/conduzir).
- **Módulo 9: Saúde Pública, Medicina e Anatomia Humana**
  - Temas: Órgãos internos, tratamento médico, cirurgia, sintomas e epidemias.
  - Exemplos de Kanjis: 臓 (órgão interno), 診 (examinar/diagnosticar), 療 (tratamento), 症 (sintoma).

#### 🟣 Bloco 4: Meio Ambiente, Geografia e Fenômenos Naturais
- **Módulo 10: Ecologia, Meio Ambiente e Sustentabilidade**
  - Temas: Reciclagem, poluição, recursos naturais, aquecimento global e energias renováveis.
  - Exemplos de Kanjis: 環 (meio ambiente/anel), 境 (fronteira/limite), 護 (proteger), 廃 (descartar/abandonar).
- **Módulo 11: Geologia, Desastres e Prevenção de Risco**
  - Temas: Terremotos, erupções, furacões, evacuação e estruturas de segurança.
  - Exemplos de Kanjis: 震 (tremer/sismo), 災 (desastre/calamidade), 防 (prevenir/defender), 避 (evacuar/abrigar).

#### 🔴 Bloco 5: Psicologia, Relações e Expressões Humanas
- **Módulo 12: Psicologia, Estado Mental e Emoções Complexas**
  - Temas: Ansiedade, confiança, estresse, motivação, percepção e inteligência emocional.
  - Exemplos de Kanjis: 態 (estado/condição), 惑 (ilusão/perplexidade), 悩 (preocupar-se), 欲 (desejar/ambição).
- **Módulo 13: Relações Sociais, Redes e Convivência Comunitária**
  - Temas: Comunidade, vizinhança, etiqueta social, cooperação e conflitos interpessoais.
  - Exemplos de Kanjis: 協 (cooperar), 団 (grupo/organização), 互 (mútuo/recíproco), 礼 (cortesia/agradecimento).

#### 🟤 Bloco 6: Cultura, Arte, Literatura e Filosofia
- **Módulo 14: Literatura, Leitura de Ensaios e Escrita Acadêmica**
  - Temas: Romances, poesias, citações, ensaios e crítica literária.
  - Exemplos de Kanjis: 評 (avaliar/criticar), 描 (descrever/desenhar), 著 (escrever/autor), 誌 (revista/registro).
- **Módulo 15: Artes, História e Patrimônio Cultural**
  - Temas: Museus, monumentos, tradições históricas, arquitetura clássica e exposições.
  - Exemplos de Kanjis: 歴 (história/passado), 史 (crônica/história), 展 (exibir/expandir), 宝 (tesouro/precioso).

#### 🟠 Bloco 7: Verbos de Ação Avançados e Modificadores
- **Módulo 16: Verbos de Mudança, Decisão e Conclusão**
  - Temas: Alterar, determinar, julgar, resolver e alcançar objetivos.
  - Exemplos de Kanjis: 定 (decidir/fixar), 判 (julgar/discernir), 達 (atingir/alcançar), 済 (concluir/resolver).
- **Módulo 17: Verbos de Relação, Causa e Efeito**
  - Temas: Influenciar, causar, depender, resultar e vincular fatos.
  - Exemplos de Kanjis: 因 (causa/origem), 結 (vincular/concluir), 促 (promover/estimular), 影響 (influência).
- **Módulo 18: Adjetivos e Qualidades de Alto Nível**
  - Temas: Complexidade, precisão, raridade, abundância e proporção.
  - Exemplos de Kanjis: 密 (denso/secreto), 確 (certo/preciso), 豊 (abundante/rico), 珍 (raro/curioso).
- **Módulo 19: Tempo Relativo, Prazos e Transição Historico-Social**
  - Temas: Prazos formais, períodos históricos, evolução temporária e frequência.
  - Exemplos de Kanjis: 限 (limite/prazo), 期 (período/fase), 経 (passar o tempo/experiência), 延 (adiar/estender).
- **Módulo 20: Expressões Figuradas, Onomatopeias e Linguagem Formal (Keigo Avançado)**
  - Temas: Keigo institucional, metáforas cotidianas de negócios e conectores formais.
  - Exemplos de Kanjis: 拝 (reverenciar/ver em Keigo), 承 (consentir/entender), 謙 (humilde), 遜 (modesto).
- **Módulo 21: Tabela Geral e Revisão N2 (`isReviewTable: true`)**
  - Conteúdo: Grade completa de consulta rápida de todos os ~380 Kanjis do N2 com suporte a áudio TTS, busca e integração total com o Dicionário Universal.

## ⛩️ Mapeamento Curricular: JLPT N1 Kanji
- **Total de Kanjis Novos:** ~1.136 Kanjis (fechando a lista completa de 2.136 Jōyō Kanjis)
- **Estrutura:** 24 Módulos Temáticos de Estudo + 1 Módulo Final de Tabela Geral e Revisão (`isReviewTable: true`, Total: 25 Módulos)
- **Média por Módulo:** ~45 a 50 Kanjis
- **Recursos por Módulo:** Explicação Gramatical N1, Cards de Kanjis (Kun/On/Exemplos/Mnemônicos/Canvas), Bloco de Leitura Guiada com Furigana e Romaji e Quiz de 10 Questões.

### 🗺️ Mapa Temático dos Módulos do N1

#### 🟢 Bloco 1: Filosofia, Pensamento e Abstração Profunda
- **Módulo 1: Filosofia, Ética, Existência e Psicologia Humana**
  - Temas: Dilemas morais, consciência, virtude, subjetividade e destino.
  - Exemplos de Kanjis: 哲 (filosofia), 倫 (ética), 魂 (alma), 凝 (concentrar/congelar), 悟 (despertar/compreender).
- **Módulo 2: Religião, Espiritualidade e Tradições Antigas**
  - Temas: Ritos, crenças, mitologia, templos clássicos e textos sagrados.
  - Exemplos de Kanjis: 禅 (Zen), 僧 (monge), 祈 (rezar/orar), 幽 (oculto/escuridão), 遍 (universal/amplo).

#### 🔵 Bloco 2: Direito, Geopolítica e Burocracia Estatal
- **Módulo 3: Direito Constitucional, Legislação e Jurisprudência**
  - Temas: Artigos constitucionais, cláusulas, processos judiciais complexos e sanções.
  - Exemplos de Kanjis: 憲 (constituição), 條/条 (artigo/cláusula), 訴 (processar/alegar), 赦 (perdoar/anistiar).
- **Módulo 4: Relações Internacionais, Diplomas e Geopolítica**
  - Temas: Tratados de paz, embaixadas, soberania, conflitos globais e negociações de cúpula.
  - Exemplos de Kanjis: 邦 (nação/país), 盟 (aliança/pacto), 領 (território/domínio), 侵 (invadir), 妥 (compromisso/concessão).
- **Módulo 5: Administração Pública, Burocracia e Finanças Públicas**
  - Temas: Orçamento de estado, auditorias, políticas fiscais e regulamentação bancária central.
  - Exemplos de Kanjis: 幣 (moeda/câmbio), 監査 (auditoria), 租 (imposto/tributo), 滞 (estagnar/atrasar).

#### 🟡 Bloco 3: Economia Avançada, Indústria e Mercados Globais
- **Módulo 6: Macroeconomia, Câmbio e Mercados Financeiros**
  - Temas: Inflação, flutuação cambial, fusões corporativas (M&A) e ativos financeiros.
  - Exemplos de Kanjis: 騰 (subir/inflacionar), 暴 (despencar/violento - compostos), 膨 (inflar/expandir), 融 (financiar/fundir).
- **Módulo 7: Indústria Pesada, Logística e Infraestrutura Nacional**
  - Temas: Mineração, energia nuclear, usinas, malha rodoviária e transportes marítimos.
  - Exemplos de Kanjis: 坑 (mina), 汽 (vapor), 搬 (transportar/carregar), 蓄 (acumular/armazenar).

#### 🟣 Bloco 4: Ciências da Natureza, Medicina e Astronomia
- **Módulo 8: Física, Química e Fenômenos Quânticos/Atômicos**
  - Temas: Partículas, compostos químicos, reações, física teórica e elementos.
  - Exemplos de Kanjis: 融 (fusão), 凝 (condensação), 磁 (magnetismo), 硝 (nitrato/pólvora).
- **Módulo 9: Biologia Avançada, Genética e Anatomia Detalhada**
  - Temas: DNA, tecidos celulares, biociência, patologias raras e imunologia.
  - Exemplos de Kanjis: 胞 (célula), 膜 (membrana), 菌 (bactéria/fungo), 胎 (feto/embrião).
- **Módulo 10: Astronomia, Meteorologia Avançada e Ciências da Terra**
  - Temas: Constelações, atmosfera, placas tectônicas, órbita espacial e erupções.
  - Exemplos de Kanjis: 彗 (cometa), 軌 (órbita/trilho), 霜 (geada), 霧 (névoa/neblina).

#### 🔴 Bloco 5: Literatura, Arte e Linguagem Formal
- **Módulo 11: Literatura Clássica, Poesia e Expressão Escrita (Bungo)**
  - Temas: Estilo literário antigo, prosa clássica, metáforas poéticas e antologias.
  - Exemplos de Kanjis: 詠 (recitar poesia), 雅 (elegância/refinamento), 愁 (melancolia), 吟 (cantarolar/recitar).
- **Módulo 12: Arquitetura, Belas Artes e Estética Tradicional**
  - Temas: Escultura, caligrafia, gravuras, cerâmica e teoria da arte.
  - Exemplos de Kanjis: 彫 (esculpir), 漆 (laqueado/urushi), 匠 (artesão/mestre), 陶 (cerâmica).
- **Módulo 13: Linguagem Jornalística de Elite e Redação de Ensaios**
  - Temas: Artigos de opinião, editoriais, críticas políticas e ensaios acadêmicos.
  - Exemplos de Kanjis: 箇 (item/tópico), 彙 (vocabulário/coleção), 歪 (distorcer/falsificar), 弊 (vício/mal).

#### 🟤 Bloco 6: Fenômenos Sociais, Demografia e Sociologia
- **Módulo 14: Demografia, Urbanização e Transformações Sociais**
  - Temas: Envelhecimento populacional, êxodo rural, diversidade e sociologia urbana.
  - Exemplos de Kanjis: 衰 (declinar/fraquejar), 孤 (solitário/órfão), 摩 (desgastar/fricionar), 疎 (alienar/distanciar).
- **Módulo 15: Psicologia Comportamental e Patologias Sociais**
  - Temas: Preconceito, discriminação, distúrbios comportamentais e dinâmicas de grupo.
  - Exemplos de Kanjis: 偏 (parcial/preconceituoso), 虐 (maltratar/abusar), 嫉 (inveja/ciúme), 傲 (arrogância).

#### 🟠 Bloco 7: Expressões Idiomáticas (Yojijukugo) e Nuances Formais
- **Módulo 16: Expressões Idiomáticas de 4 Caracteres (Yojijukugo) - Parte 1**
  - Temas: Expressões clássicas chinesas sobre sabedoria, perseverança e natureza.
  - Exemplos de Kanjis: 臥 (deitar/perseverar), 薪 (lenha), 勉 (esforço - compostos eruditos).
- **Módulo 17: Expressões Idiomáticas de 4 Caracteres (Yojijukugo) - Parte 2**
  - Temas: Expressões de relações humanas, sorte, mudança rápida e contradição.
  - Exemplos de Kanjis: 矛盾 (contradição), 試 (tentativa - erudito), 錯 (confusão/erro).
- **Módulo 18: Linguagem Honorífica Máxima (Keigo de Alto Nível)**
  - Temas: Linguagem protocolar da Família Imperial, alta diplomacia e ritos formais.
  - Exemplos de Kanjis: 陛 (sua majestade), 殿 (palácio/senhor), 賜 (conceder/agradecer), 奉 (oferecer/dedicar).

#### ⚪ Bloco 8: Verbos e Adjetivos Eruditos de Uso Raro/Específico
- **Módulo 19: Verbos Eruditos de Estado, Transformação e Ocorrência**
  - Temas: Surgir, desvanecer, oscilar, intensificar e ocultar.
  - Exemplos de Kanjis: 漂 (derrapar/boiar), 潜 (submergir/esconder), 弄 (manipular/brincar com).
- **Módulo 20: Verbos Eruditos de Destruição, Restauração e Controle**
  - Temas: Aniquilar, restaurar, subjugar, restringir e libertar.
  - Exemplos de Kanjis: 滅 (destruir/extinguir), 抑 (reprimir), 縛 (amarrar/restringir), 阻 (bloquear/impedir).
- **Módulo 21: Adjetivos Eruditos de Textura, Forma e Sensação**
  - Temas: Bruto, refinado, escorregadio, áspero, vago e límpido.
  - Exemplos de Kanjis: 粗 (grosseiro/bruto), 滑 (liso/escorregadio), 潤 (úmido/lucrativo), 茫 (vasto/indefinido).
- **Módulo 22: Adjetivos Eruditos de Intensidade e Escala**
  - Temas: Extremamente denso, insignificante, gigante, minúsculo e eterno.
  - Exemplos de Kanjis: 莫 (enorme/vasto), 微 (minúsculo), 悠 (eterno/calmo), 烈 (intenso/feroz).
- **Módulo 23: Partículas Históricas, Prefixos e Sufixos Arcaicos**
  - Temas: Modificadores de texto acadêmico e marcas de registro formal antigo.
  - Exemplos de Kanjis: 尚 (ainda assim), 且 (além disso), 概 (geralmente/esboço).
- **Módulo 24: Kanjis de Nomes Próprios, Regiões Históricas e Geografia do Japão**
  - Temas: Prefeituras japonesas, topônimos históricos e nomes de famílias tradicionais.
  - Exemplos de Kanjis: 阜 (Prefeitura de Gifu), 潟 (Prefeitura de Niigata), 媛 (Prefeitura de Ehime), 茨 (Prefeitura de Ibaraki).
- **Módulo 25: Tabela Geral e Revisão N1 (`isReviewTable: true`)**
  - Conteúdo: Tabela completa e dicionário interativo de todos os ~1.136 Kanjis do N1, concluindo a grade integral de 2.136 Kanjis do Japão Academy!

## 👤 Personalização Dinâmica
- Nome do aluno salvo em `localStorage` sob a chave `ja_nome_usuario`.
- Função `fNome()` no `app.js` substitui marcadores `[Seu Nome]` ou `[Nome]` dinamicamente nas lições e diálogos do `data_curso_a1.js`.

## 🧠 Sistema de SRS Modular e Isolado por Curso (Repetição Espaçada)
- Baralhos pessoais 100% independentes salvos em `localStorage`:
  - `ja_srs_deck` ➔ Curso A1 (Vocabulário e Pílulas Gramaticais).
  - `ja_srs_hiragana_deck` ➔ Hiragana (Caracteres + Vocabulário).
  - `ja_srs_katakana_deck` ➔ Katakana (Caracteres + Vocabulário).
  - `ja_srs_kanji_deck` ➔ Kanji N5 (Kanjis, Kunyomi/Onyomi e Exemplos).
- Sincronização automatizada (`sincronizarBaralhoSRS(tipo)`) parametrizada para cada modalidade.
- Motor de inicialização `iniciarSessaoSRS(tipo)` e renderizador de flashcards adaptativo (`renderizarCardSRS()`) integrado a `curso.html`, `hiragana.html`, `katakana.html` e `kanji_n5.html`.

## 🎨 Identidade Visual e Design System (`style.css`)
- **Cores & Temas:**
  - Tema Claro: Fundo `--bg-color: #f4f7f6`, Cards `--card-bg: #ffffff`, Texto `--text-main: #333333`, Bordas `--border-color: #e0e0e0`.
  - Tema Escuro (`.dark-theme`): Fundo `#0f172a`, Cards `#1e293b`, Texto `#f1f5f9`, Bordas `#334155`.
  - Cores Primárias por Módulo: Hiragana `#d90429` (Vermelho), Katakana `#028090` (Turquesa), Kanji `#b45309` (Dourado/Âmbar), Minigame `#7e22ce` (Roxo).
  - Feedback: Sucesso `#38b000` / `#22c55e`, Erro `#d00000` / `#ef4444`, Destaques `#e63946`.
- **Tipografia:**
  - Geral: `'Segoe UI', sans-serif`.
  - Títulos/Destaques: `'Fredoka', sans-serif`.
  - Ideogramas/Kana/Kanji: `'Noto Sans JP', sans-serif` (`.kana-text`).
- **Animações & Feedback:**
  - Transições suaves (`0.2s` - `0.3s`), `fadeInPage` / `fadeOutPage`.
  - Efeitos táteis de resposta: `pop`, `shake`, `glow-success`, `glow-error` e elevação no hover (`translateY(-3px)` a `(-5px)`).

## 🛠️ Regras para Edição Automática (Agentes AI / Roo Code)
- Ao adicionar novos módulos ao curso A1:
  1. Insira os objetos no `data_curso_a1.js`.
  2. Atualize o vetor `CURSO_A1_DADOS` no final do `data_curso_a1.js`.
  3. Crie os botões `<button class="btn-modulo bloqueado" id="mod-X-btn" onclick="iniciarModulo(X)" disabled>` correspondentes no `curso.html`.
- Mantenha a integridade dos utilitários globais do `app.js` (como `playBeep`, `speakKana`, `applySavedTheme` e trocas de abas).
- Preserve rigorosamente a identidade visual e tokens CSS declarados em `style.css`.