const CURSO_RUSSO_A2_DADOS = [];

// Gerador padronizado de módulos handcrafted para o Nível A2 (Pílulas Gramaticais + Dicas + Quizes)
const criarModuloA2Handcrafted = (id, title, desc, missionDesc, audioGuide, grammarPills, dropsList, sentencesList, dialogueList, quizList) => {
    const normalizedQuiz = quizList.map(item => ({
        question: item.question || item.q,
        q: item.q || item.question,
        options: item.options,
        correctIndex: item.correctIndex,
        explanation: item.explanation
    }));

    const pillDrops = (Array.isArray(grammarPills) ? grammarPills : []).map(pill => ({
        type: 'grammar_pill',
        title: pill.title || 'Pílula Gramatical',
        rule: pill.rule || pill.explanation || '',
        formula: pill.formula || '',
        example: pill.example ? (pill.exampleTranslation ? `${pill.example} — "${pill.exampleTranslation}"` : pill.example) : ''
    }));

    const enrichedVocabDrops = dropsList.map(item => {
        if (!item || typeof item !== 'object') return item;
        let dicaText = item.dica || item.tip || item.example || item.timeContext || '';
        if (!dicaText) {
            dicaText = `Expressão essencial A2: "${item.word || item.kanji || ''}" (${item.romaji || ''})`;
        }
        return {
            ...item,
            dica: dicaText,
            tip: dicaText,
            timeContext: dicaText
        };
    });

    const allStage1Drops = [...pillDrops, ...enrichedVocabDrops];

    return {
        id,
        level: 'A2',
        title,
        desc,
        description: desc,
        stage1_context: {
            title,
            missionTitle: title,
            situation: desc,
            missionDescription: missionDesc,
            audioGuide
        },
        grammar_pills: grammarPills,
        drops: allStage1Drops,
        stage2_drops: allStage1Drops,
        stage3_sentences: sentencesList,
        stage3_5_sentenceBuilder: sentencesList,
        stage4_dialogue: dialogueList,
        stage4_dialog: dialogueList,
        quiz: normalizedQuiz,
        stage3_practice: normalizedQuiz,
        stage5_quiz: normalizedQuiz
    };
};

CURSO_RUSSO_A2_DADOS.push(
    // Módulo 1
    criarModuloA2Handcrafted(
        'ru_a2_mod_01',
        'Módulo 1: Прошлое (O Passado dos Verbos)',
        'Aprenda a falar sobre ações concluídas no passado em russo usando os sufixos de gênero e número.',
        'Domine os sufixos do passado: -л (masculino), -ла (feminino), -ло (neutro) e -ли (plural).',
        'Вчера я читал книгу, а она смотрела фильм.',
        [
            { title: 'Sufixos do Tempo Passado', rule: 'Em russo, o passado concorda em gênero e número com o sujeito, substituindo a terminação do infinitivo (-ть) pelos sufixos -л, -ла, -ло, -ли.', formula: 'Infinitivo sem -ть + -л (M) / -ла (F) / -ло (N) / -ли (Plur)', example: 'Он читал / Она читала / Они читали', exampleTranslation: 'Ele leu / Ela leu / Eles leram' },
            { title: 'Passado do Verbo Быть (Ser/Estar)', rule: 'O verbo ser/estar no passado flexiona normalmente: Был (M), Была (F), Было (N), Были (Plur).', formula: 'Был (M) / Была (F) / Было (N) / Были (Plural)', example: 'Вчера я был дома.', exampleTranslation: 'Ontem eu estava em casa.' }
        ],
        [
            { type: 'vocab', word: 'Вчера', romaji: 'Vchera', translation: 'Ontem', audio: 'Вчера', dica: 'Marcador temporal clássico do passado.' },
            { type: 'vocab', word: 'Раньше', romaji: 'Ranshe', translation: 'Antes / Antigamente', audio: 'Раньше', dica: 'Usado para comparar hábitos passados com o presente.' },
            { type: 'vocab', word: 'Был', romaji: 'Byl', translation: 'Estava / Foi (masculino)', audio: 'Был', dica: 'Passado do verbo ser/estar para sujeitos masculinos.' },
            { type: 'vocab', word: 'Была', romaji: 'Byla', translation: 'Estava / Foi (feminino)', audio: 'Была', dica: 'Passado do verbo ser/estar para sujeitos femininos.' },
            { type: 'vocab', word: 'Смотрел', romaji: 'Smotrel', translation: 'Assistiu / Olhou (masculino)', audio: 'Смотрел', dica: 'Verbo assistir no passado masculino.' }
        ],
        [
            { sentence: 'Вчера я работал весь день.', translation: 'Ontem eu trabalhei o dia todo.', tokens: ['Вчера', 'я', 'работал', 'весь', 'день.'], audio: 'Вчера я работал весь день.' },
            { sentence: 'Они были в театре.', translation: 'Eles estavam no teatro.', tokens: ['Они', 'были', 'в', 'театре.'], audio: 'Они были в театре.' }
        ],
        [
            { speaker: 'Anton', text: 'Где ты был вчера?', translation: 'Onde você estava ontem?', audio: 'Где ты был вчера?' },
            { speaker: 'Elena', text: 'Я была дома и читала книгу.', translation: 'Eu estava em casa e lendo um livro.', audio: 'Я была дома и читала книгу.' }
        ],
        [
            { q: 'Qual é o sufixo do passado para o feminino singular?', options: ['-л', '-ла', '-ло', '-ли'], correctIndex: 1, explanation: 'Feminino usa -ла (ex: читала).' },
            { q: 'Traduza: "Вчера"', options: ['Hoje', 'Amanhã', 'Ontem', 'Agora'], correctIndex: 2, explanation: 'Вчера = Ontem.' },
            { q: 'Forma do verbo быть no passado para "Они" (eles/elas)?', options: ['Был', 'Была', 'Было', 'Были'], correctIndex: 3, explanation: 'Plural usa Были.' },
            { q: 'Como se diz "Ele assistiu um filme"?', options: ['Он смотрела фильм', 'Он смотрел фильм', 'Он смотрели фильм', 'Он смотреть фильм'], correctIndex: 1, explanation: 'Masculino usa sufixo -л: Он смотрел.' },
            { q: 'O que significa "Раньше"?', options: ['Antes / Antigamente', 'Depois', 'Amanhã', 'Nunca'], correctIndex: 0, explanation: 'Раньше = Antes / Antigamente.' }
        ]
    ),

    // Módulo 2
    criarModuloA2Handcrafted(
        'ru_a2_mod_02',
        'Módulo 2: Будущее (O Futuro Simples e Composto)',
        'Aprenda a expressar planos e intenções no futuro usando o futuro composto (Буду + Infinitivo).',
        'Domine a conjugação do auxiliar "быть" no futuro (Буду, Будешь...) seguido do infinitivo.',
        'Завтра я буду отдыхать и читать.',
        [
            { title: 'Futuro Composto (Буду + Infinitivo)', rule: 'Para verbos imperfeitos, o futuro é formado conjugando o verbo быть no futuro + o verbo principal no infinitivo.', formula: 'Я буду / Ты будешь / Он будет / Мы будем / Вы будете / Они будут + [Infinitivo]', example: 'Я буду читать книгу.', exampleTranslation: 'Eu vou ler / lerei um livro.' },
            { title: 'Marcadores de Tempo Futuro', rule: 'Palavras como Завтра (Amanhã) e Скоро (Em breve) indicam ações futuras.', formula: 'Завтра / Скоро / На следующей неделе', example: 'Завтра мы будем отдыхать.', exampleTranslation: 'Amanhã nós vamos descansar.' }
        ],
        [
            { type: 'vocab', word: 'Завтра', romaji: 'Zavtra', translation: 'Amanhã', audio: 'Завтра', dica: 'Marcador principal de tempo futuro.' },
            { type: 'vocab', word: 'Скоро', romaji: 'Skoro', translation: 'Em breve / Logo', audio: 'Скоро', dica: 'Indica algo que acontecerá em pouco tempo.' },
            { type: 'vocab', word: 'Буду', romaji: 'Budu', translation: 'Eu serei / Eu vou', audio: 'Буду', dica: 'Primeira pessoa do verbo ser no futuro ("Я буду").' },
            { type: 'vocab', word: 'Планы', romaji: 'Plany', translation: 'Planos', audio: 'Планы', dica: 'Substantivo plural para projetos e planos futuros.' },
            { type: 'vocab', word: 'Будет', romaji: 'Budet', translation: 'Será / Vai ser', audio: 'Будет', dica: 'Terceira pessoa singular ("Он/Она будет").' }
        ],
        [
            { sentence: 'Завтра я буду работать.', translation: 'Amanhã eu vou trabalhar.', tokens: ['Завтра', 'я', 'буду', 'работать.'], audio: 'Завтра я буду работать.' },
            { sentence: 'Что ты будешь делать завтра?', translation: 'O que você vai fazer amanhã?', tokens: ['Что', 'ты', 'будешь', 'делать', 'завтра?'], audio: 'Что ты будешь делать завтра?' }
        ],
        [
            { speaker: 'Maxim', text: 'Какие у тебя планы на завтра?', translation: 'Quais são seus planos para amanhã?', audio: 'Какие у тебя планы на завтра?' },
            { speaker: 'Anna', text: 'Завтра я буду читать и отдыхать.', translation: 'Amanhã eu vou ler e descansar.', audio: 'Завтра я буду читать и отдыхать.' }
        ],
        [
            { q: 'Como se forma o futuro composto de "читать" para "Я"?', options: ['Я читаю', 'Я буду читать', 'Я читал', 'Я прочитал'], correctIndex: 1, explanation: 'Futuro composto: Я буду читать.' },
            { q: 'Traduza: "Завтра"', options: ['Ontem', 'Hoje', 'Amanhã', 'Agora'], correctIndex: 2, explanation: 'Завтра = Amanhã.' },
            { q: 'Conjugação de "быть" no futuro para "Мы"?', options: ['Буду', 'Будешь', 'Будем', 'Будут'], correctIndex: 2, explanation: 'Мы будем.' },
            { q: 'O que significa "Скоро"?', options: ['Em breve / Logo', 'Ontem', 'Devagar', 'Nunca'], correctIndex: 0, explanation: 'Скоро = Em breve.' },
            { q: 'Traduza: "Что ты будешь делать?"', options: ['O que você fez?', 'O que você vai fazer?', 'O que você faz?', 'Onde você vai?'], correctIndex: 1, explanation: 'O que você vai fazer?' }
        ]
    ),

    // Módulo 3
    criarModuloA2Handcrafted(
        'ru_a2_mod_03',
        'Módulo 3: Аспект глагола I (Imperfeito vs Perfeito)',
        'Compreenda a diferença fundamental entre o aspecto Imperfeito (НСВ) e Perfeito (СВ) nos verbos russos.',
        'Diferencie o aspecto imperfeito (processo/hábito) do aspecto perfeito (resultado único e concluído).',
        'Я долго читал книгу и наконец прочитал её.',
        [
            { title: 'Aspecto Imperfeito (НСВ)', rule: 'O aspecto imperfeito (НСВ) foca no PROCESSO da ação, na sua duração ou na repetição de um hábito.', formula: 'Verbo НСВ (процесс / повторение)', example: 'Я долго писал письмо.', exampleTranslation: 'Eu fiquei um longo tempo escrevendo a carta.' },
            { title: 'Aspecto Perfeito (СВ)', rule: 'O aspecto perfeito (СВ) foca no RESULTADO único de uma ação totalmente concluída.', formula: 'Verbo СВ (результат / факт)', example: 'Я написал письмо.', exampleTranslation: 'Eu escrevi (e terminei) a carta.' }
        ],
        [
            { type: 'vocab', word: 'Делать', romaji: 'Delat', translation: 'Fazer (imperfeito/processo)', audio: 'Делать', dica: 'Foco na ação em andamento (НСВ).' },
            { type: 'vocab', word: 'Сделать', romaji: 'Sdelat', translation: 'Fazer / Concluir (perfeito/resultado)', audio: 'Сделать', dica: 'Foco no resultado final concluído (СВ).' },
            { type: 'vocab', word: 'Прочитать', romaji: 'Prochitat', translation: 'Ler até o fim (perfeito)', audio: 'Прочитать', dica: 'Ler e concluir a leitura (СВ).' },
            { type: 'vocab', word: 'Написать', romaji: 'Napisat', translation: 'Escrever (perfeito)', audio: 'Написать', dica: 'Escrever e finalizar o texto (СВ).' },
            { type: 'vocab', word: 'Наконец', romaji: 'Nakonets', translation: 'Finalmente / Por fim', audio: 'Наконец', dica: 'Muitas vezes acompanha verbos de aspecto perfeito.' }
        ],
        [
            { sentence: 'Я вчера долго писал письмо и наконец написал его.', translation: 'Ontem eu fiquei muito tempo escrevendo a carta e finalmente a escrevi.', tokens: ['Я', 'вчера', 'долго', 'писал', 'письмо', 'и', 'наконец', 'написал', 'его.'], audio: 'Я вчера долго писал письмо и наконец написал его.' },
            { sentence: 'Он сделал домашнее задание.', translation: 'Ele fez (e concluiu) a lição de casa.', tokens: ['Он', 'сделать', 'домашнее', 'задание.'], audio: 'Он сделал домашнее задание.' }
        ],
        [
            { speaker: 'Professora', text: 'Ты прочитал книгу?', translation: 'Você leu (até o fim) o livro?', audio: 'Ты прочитал книгу?' },
            { speaker: 'Aluno', text: 'Да, я прочитал её вчера.', translation: 'Sim, eu o li ontem.', audio: 'Да, я прочитал её вчера.' }
        ],
        [
            { q: 'Qual aspecto foca no RESULTADO da ação?', options: ['Imperfeito (НСВ)', 'Perfeito (СВ)', 'Presente', 'Infinitivo'], correctIndex: 1, explanation: 'O aspecto Perfeito (СВ) foca no resultado.' },
            { q: 'Qual é o par perfeito do verbo "делать"?', options: ['Делать', 'Сделать', 'Поделать', 'Переделать'], correctIndex: 1, explanation: 'Делать (НСВ) ➔ Сделать (СВ).' },
            { q: 'Traduza: "Я написал письмо."', options: ['Estou escrevendo uma carta', 'Escrevi (e concluí) a carta', 'Vou escrever uma carta', 'Gosto de escrever'], correctIndex: 1, explanation: 'Написал indica ação concluída (СВ).' },
            { q: 'O que significa "Наконец"?', options: ['No começo', 'Finalmente', 'Nunca', 'Sempre'], correctIndex: 1, explanation: 'Наконец = Finalmente.' },
            { q: 'Qual aspecto usa-se para repetição diária (hábito)?', options: ['Perfeito (СВ)', 'Imperfeito (НСВ)', 'Futuro simples', 'Passado perfeito'], correctIndex: 1, explanation: 'Repetições usam Imperfeito (НСВ).' }
        ]
    ),

    // Módulo 4
    criarModuloA2Handcrafted(
        'ru_a2_mod_04',
        'Módulo 4: Винительный падеж I (Caso Acusativo - Inanimados)',
        'Aprenda a flexionar objetos diretos inanimados no Caso Acusativo.',
        'Entenda que substantivos masculinos e neutros inanimados não mudam, enquanto os femininos trocam -а por -у e -я por -ю.',
        'Я читаю книгу и пью воду.',
        [
            { title: 'Acusativo Feminino Inanimado', rule: 'No Caso Acusativo (objeto direto), os substantivos femininos terminados em -а mudam para -у, e em -я mudam para -ю.', formula: 'Feminino em -а ➔ -у / Feminino em -я ➔ -ю', example: 'Книга ➔ Книгу / Вода ➔ Воду / Земля ➔ Землю', exampleTranslation: 'Livro ➔ (vejo o) livro / Água ➔ (bebo) água' },
            { title: 'Masculinos e Neutros Inanimados', rule: 'Substantivos masculinos e neutros inanimados permanecem exatamente iguais ao Nominativo.', formula: 'Masculino/Neutro Inanimado = Sem alteração', example: 'Я вижу дом (M). Я ем яблоко (N).', exampleTranslation: 'Eu vejo a casa. Eu como a maçã.' }
        ],
        [
            { type: 'vocab', word: 'Книгу', romaji: 'Knigu', translation: 'Livro (objeto direto acusativo)', audio: 'Книгу', dica: 'Acusativo de Книга (-а ➔ -у).' },
            { type: 'vocab', word: 'Воду', romaji: 'Vodu', translation: 'Água (objeto direto acusativo)', audio: 'Воду', dica: 'Acusativo de Вода (-а ➔ -у).' },
            { type: 'vocab', word: 'Песню', romaji: 'Pesnyu', translation: 'Música / Canção (acusativo)', audio: 'Песню', dica: 'Acusativo de Песня (-я ➔ -ю).' },
            { type: 'vocab', word: 'Газету', romaji: 'Gazetu', translation: 'Jornal (acusativo)', audio: 'Газету', dica: 'Acusativo de Газета (-а ➔ -у).' },
            { type: 'vocab', word: 'Письмо', romaji: 'Pismo', translation: 'Carta (neutro inalterado)', audio: 'Письмо', dica: 'Neutro inanimado não altera terminação.' }
        ],
        [
            { sentence: 'Я читаю интересную книгу.', translation: 'Eu estou lendo um livro interessante.', tokens: ['Я', 'читаю', 'интересную', 'книгу.'], audio: 'Я читаю интересную книгу.' },
            { sentence: 'Она пьёт холодную воду.', translation: 'Ela está bebendo água gelada.', tokens: ['Она', 'пьёт', 'холодную', 'воду.'], audio: 'Она пьёт холодную воду.' }
        ],
        [
            { speaker: 'Victor', text: 'Что ты читаешь?', translation: 'O que você está lendo?', audio: 'Что ты читаешь?' },
            { speaker: 'Maria', text: 'Я читаю газету.', translation: 'Eu estou lendo o jornal.', audio: 'Я читаю газету.' }
        ],
        [
            { q: 'Qual é a forma no Acusativo de "Книга" (livro)?', options: ['Книга', 'Книге', 'Книгу', 'Книги'], correctIndex: 2, explanation: 'Feminino em -а muda para -у: Книгу.' },
            { q: 'O substantivo masculino inanimado "Дом" muda no Acusativo?', options: ['Sim, vira Дому', 'Não, permanece Дом', 'Muda para Дома', 'Muda para Доме'], correctIndex: 1, explanation: 'Masculino inanimado não altera.' },
            { q: 'Acusativo de "Вода" (água)?', options: ['Вода', 'Воде', 'Воду', 'Воды'], correctIndex: 2, explanation: 'Вода ➔ Воду.' },
            { q: 'Acusativo de "Песня" (canção)?', options: ['Песня', 'Песне', 'Песню', 'Песни'], correctIndex: 2, explanation: 'Feminino em -я muda para -ю: Песню.' },
            { q: 'Traduza: "Я ем яблоко."', options: ['Eu vendo uma maçã', 'Eu como uma maçã', 'Eu compro uma maçã', 'Eu vejo uma maçã'], correctIndex: 1, explanation: 'Ем = como (verbo есть).' }
        ]
    ),

    // Módulo 5
    criarModuloA2Handcrafted(
        'ru_a2_mod_05',
        'Módulo 5: Винительный падеж II (Caso Acusativo - Animados)',
        'Aprenda a flexionar objetos diretos animados (pessoas e animais) no Caso Acusativo.',
        'Descubra a regra especial: substantivos masculinos animados no Acusativo usam a mesma forma do Genitivo (-а / -я).',
        'Я вижу друга и знаю этого учителя.',
        [
            { title: 'Acusativo Masculino Animado', rule: 'Ao contrário dos objetos inanimados, os seres masculinos animados (pessoas e animais) recebem a terminação -а (ou -я se terminados em soft sign/й) no Acusativo.', formula: 'Masculino Animado + -а / -я', example: 'Брат ➔ Брата / Друг ➔ Друга / Учитель ➔ Учителя', exampleTranslation: 'Irmão ➔ (vejo o) irmão / Amigo ➔ (conheço o) amigo' },
            { title: 'Animado vs. Inanimado no Masculino', rule: 'Já para inanimados o acusativo é igual ao nominativo. Compare: Я вижу дом (inanimado) vs Я вижу друга (animado).', formula: 'Дом (Inanimado) vs. Друга (Animado)', example: 'Я вижу автобус (inanimado) / Я вижу кота (animado)', exampleTranslation: 'Vejo o ônibus / Vejo o gato' }
        ],
        [
            { type: 'vocab', word: 'Друга', romaji: 'Druga', translation: 'Amigo (acusativo animado)', audio: 'Друга', dica: 'Acusativo de Друг (ganha -а por ser ser vivo).' },
            { type: 'vocab', word: 'Брата', romaji: 'Brata', translation: 'Irmão (acusativo animado)', audio: 'Брата', dica: 'Acusativo de Брат.' },
            { type: 'vocab', word: 'Учителя', romaji: 'Uchitelya', translation: 'Professor (acusativo animado)', audio: 'Учителя', dica: 'Acusativo de Учитель (-ь ➔ -я).' },
            { type: 'vocab', word: 'Кота', romaji: 'Kota', translation: 'Gato (acusativo animado)', audio: 'Кота', dica: 'Animais também são considerados animados em russo.' },
            { type: 'vocab', word: 'Вижу', romaji: 'Vizhu', translation: 'Eu vejo', audio: 'Вижу', dica: 'Verbo видеть (ver) na primeira pessoa.' }
        ],
        [
            { sentence: 'Я вижу своего друга.', translation: 'Eu vejo meu amigo.', tokens: ['Я', 'вижу', 'своего', 'друга.'], audio: 'Я вижу своего друга.' },
            { sentence: 'Мы знаем этого учителя.', translation: 'Nós conhecemos este professor.', tokens: ['Мы', 'знаем', 'этого', 'учителя.'], audio: 'Мы знаем этого учителя.' }
        ],
        [
            { speaker: 'Pavel', text: 'Кого ты видишь?', translation: 'Quem você está vendo?', audio: 'Кого ты видишь?' },
            { speaker: 'Dmitry', text: 'Я вижу моего брата.', translation: 'Eu estou vendo meu irmão.', audio: 'Я вижу моего брата.' }
        ],
        [
            { q: 'Qual a forma no Acusativo de "Друг" em "Eu vejo um amigo"?', options: ['Друг', 'Друга', 'Другу', 'Другом'], correctIndex: 1, explanation: 'Masculino animado recebe -а: Друга.' },
            { q: 'Acusativo de "Кот" (gato)?', options: ['Кот', 'Кота', 'Коту', 'Котом'], correctIndex: 1, explanation: 'Gato é animado, ganha -а: Кота.' },
            { q: 'Pergunta usada para acusativo animado (Quem você vê)?', options: ['Что', 'Кого', 'Где', 'Куда'], correctIndex: 1, explanation: 'Кого ты видишь?' },
            { q: 'Traduza: "Я знаю учителя."', options: ['Eu sou professor', 'Eu conheço o professor', 'Falo com o professor', 'Onde está o professor'], correctIndex: 1, explanation: 'Знаю учителя = conheço o professor.' },
            { q: 'Substantivos masculinos inanimados sofrem essa alteração?', options: ['Sim, sempre', 'Não, ficam iguais ao nominativo', 'Depende da frase', 'Ganham -е'], correctIndex: 1, explanation: 'Apenas os animados mudam.' }
        ]
    ),

    // Módulo 6
    criarModuloA2Handcrafted(
        'ru_a2_mod_06',
        'Módulo 6: Родительный падеж I (Caso Genitivo - Posse e Ausência)',
        'Aprenda a expressar ausência, falta ou não posse de algo com a estrutura "У меня нет..." + Genitivo.',
        'Domine as terminações do Genitivo Singular (Masc/Neutro -а/-я, Fem -ы/-и) na ausência de coisas ou pessoas.',
        'У меня нет времени e у него нет машины.',
        [
            { title: 'Ausência com У меня нет...', rule: 'A negação de posse ou ausência total de algo é expressa pela estrutura "У меня нет" seguida do substantivo obrigatoriamente no Caso Genitivo.', formula: 'У [Genitivo de quem] нет + [Genitivo do que falta]', example: 'У меня нет машины. / У него нет времени.', exampleTranslation: 'Eu não tenho carro. / Ele não tem tempo.' },
            { title: 'Terminações do Genitivo Singular', rule: 'Substantivos masculinos/neutros ganham -а/-я. Femininos terminados em -а mudam para -ы (ou -и após г, к, х, ж, ч, ш, щ).', formula: 'Masc/Neutro: -а/-я | Fem: -ы/-и', example: 'Брат ➔ Брата / Машина ➔ Машины / Книга ➔ Книги', exampleTranslation: 'do irmão / do carro / do livro' }
        ],
        [
            { type: 'vocab', word: 'Нет', romaji: 'Net', translation: 'Não há / Não tem', audio: 'Нет', dica: 'Exige genitivo para expressar ausência.' },
            { type: 'vocab', word: 'Времени', romaji: 'Vremeni', translation: 'Tempo (genitivo)', audio: 'Времени', dica: 'Genitivo irregular da palavra Время.' },
            { type: 'vocab', word: 'Денег', romaji: 'Deneg', translation: 'Dinheiro (genitivo plural)', audio: 'Денег', dica: 'Genitivo plural da palavra Деньги.' },
            { type: 'vocab', word: 'Машины', romaji: 'Mashiny', translation: 'Carro (genitivo)', audio: 'Машины', dica: 'Genitivo de Машина (-а ➔ -ы).' },
            { type: 'vocab', word: 'Проблемы', romaji: 'Problemy', translation: 'Problema (genitivo)', audio: 'Проблемы', dica: 'Sem problemas = "Нет проблем".' }
        ],
        [
            { sentence: 'Извините, у меня нет времени.', translation: 'Com licença, eu não tenho tempo.', tokens: ['Извините,', 'у', 'меня', 'нет', 'времени.'], audio: 'Извините, у меня нет времени.' },
            { sentence: 'У него нет машины.', translation: 'Ele não tem carro.', tokens: ['У', 'него', 'нет', 'машины.'], audio: 'У него нет машины.' }
        ],
        [
            { speaker: 'Ivan', text: 'У тебя есть машина?', translation: 'Você tem carro?', audio: 'У тебя есть машина?' },
            { speaker: 'Olga', text: 'Нет, у меня нет машины.', translation: 'Não, eu não tenho carro.', audio: 'Нет, у меня нет машины.' }
        ],
        [
            { q: 'Qual caso gramatical é exigido após a palavra "нет" (ausência)?', options: ['Acusativo', 'Genitivo', 'Preposicional', 'Dativo'], correctIndex: 1, explanation: 'Ausência exige Caso Genitivo.' },
            { q: 'Como se diz "Eu não tenho tempo"?', options: ['У меня нет время', 'У меня нет времени', 'У меня не время', 'Я не имею время'], correctIndex: 1, explanation: 'У меня нет времени.' },
            { q: 'Genitivo de "Машина" em "нет машины"?', options: ['Машина', 'Машину', 'Машины', 'Машине'], correctIndex: 2, explanation: 'Feminino em -а vira -ы: Машины.' },
            { q: 'Traduza: "У меня нет денег."', options: ['Eu tenho dinheiro', 'Eu não tenho dinheiro', 'Preciso de dinheiro', 'Cadê o dinheiro'], correctIndex: 1, explanation: 'У меня нет денег = Não tenho dinheiro.' },
            { q: 'Qual é a resposta para "Нет проблем"?', options: ['De nada / Sem problemas', 'Por favor', 'Até logo', 'Com licença'], correctIndex: 0, explanation: 'Нет проблем = Sem problemas.' }
        ]
    ),

    // Módulo 7
    criarModuloA2Handcrafted(
        'ru_a2_mod_07',
        'Módulo 7: Родительный падеж II (Quantidade e Números)',
        'Aprenda as regras de contagem e concordância numérica com o Caso Genitivo.',
        'Entenda a regra dos números em russo: 1 concorda no Nominativo; 2, 3, 4 exigem Genitivo Singular; 5 em diante exigem Genitivo Plural.',
        'У меня есть 2 брата и 5 рублей.',
        [
            { title: 'Contagem com 2, 3, 4 (Genitivo Singular)', rule: 'Após os números 2 (два/две), 3 (три) e 4 (четыре), o substantivo entra obrigatoriamente no Genitivo Singular.', formula: '2, 3, 4 + [Genitivo Singular]', example: '2 года / 3 рубля / 4 брата', exampleTranslation: '2 anos / 3 rublos / 4 irmãos' },
            { title: 'Contagem com 5 a 20 (Genitivo Plural)', rule: 'Após os números de 5 a 20 (e dezenas inteiras), o substantivo entra no Genitivo Plural.', formula: '5 a 20 + [Genitivo Plural]', example: '5 лет / 10 рублей / 20 студентов', exampleTranslation: '5 anos / 10 rublos / 20 estudantes' }
        ],
        [
            { type: 'vocab', word: 'Года', romaji: 'Goda', translation: 'Anos (genitivo singular após 2,3,4)', audio: 'Года', dica: 'Usado após 2, 3, 4 (ex: 2 года).' },
            { type: 'vocab', word: 'Лет', romaji: 'Let', translation: 'Anos (genitivo plural após 5+)', audio: 'Лет', dica: 'Palavra especial para anos após números 5+' },
            { type: 'vocab', word: 'Рубля', romaji: 'Rublya', translation: 'Rublos (genitivo singular)', audio: 'Рубля', dica: 'Usado após 2, 3, 4 рубля.' },
            { type: 'vocab', word: 'Рублей', romaji: 'Rubley', translation: 'Rublos (genitivo plural)', audio: 'Рублей', dica: 'Usado após 5 a 20 рублей.' },
            { type: 'vocab', word: 'Сколько', romaji: 'Skolko', translation: 'Quanto(s)', audio: 'Сколько', dica: 'Também exige Genitivo Plural.' }
        ],
        [
            { sentence: 'Мне 25 лет.', translation: 'Eu tenho 25 anos.', tokens: ['Мне', '25', 'лет.'], audio: 'Мне 25 лет.' },
            { sentence: 'Это стоит 3 рубля.', translation: 'Isto custa 3 rublos.', tokens: ['Это', 'стоит', '3', 'рубля.'], audio: 'Это стоит 3 рубля.' }
        ],
        [
            { speaker: 'Serafima', text: 'Сколько тебе лет?', translation: 'Quantos anos você tem?', audio: 'Сколько тебе лет?' },
            { speaker: 'Igor', text: 'Мне 22 года.', translation: 'Eu tenho 22 anos.', audio: 'Мне 22 года.' }
        ],
        [
            { q: 'Qual forma de "ano" usa-se após o número 3 (3 ___)?', options: ['Год', 'Года', 'Лет', 'Году'], correctIndex: 1, explanation: 'Após 2,3,4 usa-se Genitivo Singular: Года.' },
            { q: 'Qual forma de "ano" usa-se após o número 10 (10 ___)?', options: ['Год', 'Года', 'Лет', 'Годами'], correctIndex: 2, explanation: 'Após 5+ usa-se Genitivo Plural: Лет.' },
            { q: 'Traduza: "Мне 20 лет."', options: ['Eu tenho 20 anos', 'Ele tem 20 anos', 'Tenho 2 anos', 'Fazem 20 dias'], correctIndex: 0, explanation: 'Мне 20 лет = Tenho 20 anos.' },
            { q: 'Forma correta de rublos após o número 2 (2 ___)?', options: ['Рубль', 'Рубля', 'Рублей', 'Рублями'], correctIndex: 1, explanation: '2 рубля.' },
            { q: 'Forma correta de rublos após o número 10 (10 ___)?', options: ['Рубль', 'Рубля', 'Рублей', 'Рублями'], correctIndex: 2, explanation: '10 рублей.' }
        ]
    ),

    // Módulo 8
    criarModuloA2Handcrafted(
        'ru_a2_mod_08',
        'Módulo 8: Свободное время и хобби (Lazer e Hobbies)',
        'Aprenda a falar sobre seus passatempos e esportes usando o verbo Заниматься + Caso Instrumental.',
        'Domine o verbo reflexivo Заниматься (praticar/dedicar-se) que exige o Caso Instrumental.',
        'В свободное время я занимаюсь спортом.',
        [
            { title: 'Verbo Заниматься + Instrumental', rule: 'Para dizer que pratica um esporte ou atividade de lazer, usa-se o verbo reflexivo Заниматься seguido do Caso Instrumental (-ом/-ем para masc, -ой/-ей para fem).', formula: 'Заниматься + [Instrumental]', example: 'Спорт ➔ Заниматься спортом / Музыка ➔ Заниматься музыкой', exampleTranslation: 'Praticar esportes / Fazer música' },
            { title: 'Expressão В свободное время', rule: 'Significa "No tempo livre", usada para introduzir hobbies.', formula: 'В свободное время + [Ação]', example: 'В свободное время я читаю.', exampleTranslation: 'No meu tempo livre eu leio.' }
        ],
        [
            { type: 'vocab', word: 'Свободное время', romaji: 'Svobodnoye vremya', translation: 'Tempo livre', audio: 'Свободное время', dica: 'Expressão para momentos de descanso e lazer.' },
            { type: 'vocab', word: 'Хобби', romaji: 'Khobbi', translation: 'Hobby', audio: 'Хобби', dica: 'Palavra indeclinável de origem estrangeira.' },
            { type: 'vocab', word: 'Спортом', romaji: 'Sportom', translation: 'Esporte (instrumental)', audio: 'Спортом', dica: 'Instrumental de Спорт (заниматься спортом).' },
            { type: 'vocab', word: 'Музыкой', romaji: 'Muzykoi', translation: 'Música (instrumental)', audio: 'Музыкой', dica: 'Instrumental de Музыка (заниматься музыкой).' },
            { type: 'vocab', word: 'Плаванием', romaji: 'Plavaniyem', translation: 'Natação (instrumental)', audio: 'Плаванием', dica: 'Praticar natação = заниматься плаванием.' }
        ],
        [
            { sentence: 'Я люблю заниматься спортом.', translation: 'Eu gosto de praticar esportes.', tokens: ['Я', 'люблю', 'заниматься', 'спортом.'], audio: 'Я люблю заниматься спортом.' },
            { sentence: 'Чем ты занимаешься в свободное время?', translation: 'O que você faz no seu tempo livre?', tokens: ['Чем', 'ты', 'занимаешься', 'в', 'свободное', 'время?'], audio: 'Чем ты занимаешься в свободное время?' }
        ],
        [
            { speaker: 'Katya', text: 'У тебя есть хобби?', translation: 'Você tem um hobby?', audio: 'У тебя есть хобби?' },
            { speaker: 'Pedro', text: 'Да, я занимаюсь музыкой.', translation: 'Sim, eu me dedico à música.', audio: 'Да, я занимаюсь музыкой.' }
        ],
        [
            { q: 'Qual caso gramatical é exigido pelo verbo "Заниматься"?', options: ['Acusativo', 'Genitivo', 'Instrumental', 'Preposicional'], correctIndex: 2, explanation: 'Заниматься exige Caso Instrumental.' },
            { q: 'Forma correta de "спорт" em "praticar esportes"?', options: ['Заниматься спорт', 'Заниматься спортом', 'Заниматься спорта', 'Заниматься спорту'], correctIndex: 1, explanation: 'Заниматься спортом.' },
            { q: 'Traduza: "В свободное время"', options: ['No trabalho', 'No tempo livre', 'De manhã', 'No fim de semana'], correctIndex: 1, explanation: 'В свободное время = No tempo livre.' },
            { q: 'Forma correta de "музыка" em "dedicar-se à música"?', options: ['Заниматься музыка', 'Заниматься музыкой', 'Заниматься музыку', 'Заниматься музыке'], correctIndex: 1, explanation: 'Заниматься музыкой.' },
            { q: 'Como se diz "Natação" no Instrumental?', options: ['Плавание', 'Плаванием', 'Плавания', 'Плаванию'], correctIndex: 1, explanation: 'Плаванием.' }
        ]
    ),

    // Módulo 9
    criarModuloA2Handcrafted(
        'ru_a2_mod_09',
        'Módulo 9: Праздники в России (Festas Russas)',
        'Conheça as principais festas russas (Ano Novo, Maslenitsa) e aprenda a saudar com С + Instrumental.',
        'Aprenda fórmulas de felicitação usando a preposição С seguida do Caso Instrumental.',
        'С Новым Годом и с Рождеством!',
        [
            { title: 'Felicitações com С + Instrumental', rule: 'Em russo, felicita-se alguém por uma data comemorativa usando "С" + o nome da festa no Caso Instrumental.', formula: 'С + [Festa no Instrumental]!', example: 'С Новым Годом! / С Днём Рождения!', exampleTranslation: 'Feliz Ano Novo! / Feliz Aniversário!' },
            { title: 'Principais Festas Russas', rule: 'O Ano Novo (Новый Год) é a maior festa do ano na Rússia, celebrada com a árvore (ёлка) e presentes de Ded Moroz (Papai Noel russo).', formula: 'Новый Год (Ano Novo) / Масленица (Maslenitsa)', example: 'Поздравляю с Новым Годом!', exampleTranslation: 'Parabéns pelo Ano Novo!' }
        ],
        [
            { type: 'vocab', word: 'Праздник', romaji: 'Prazdnik', translation: 'Festa / Feriado', audio: 'Праздник', dica: 'Palavra geral para comemorações.' },
            { type: 'vocab', word: 'Подарок', romaji: 'Podarok', translation: 'Presente', audio: 'Подарок', dica: 'Presente dado em aniversários e festas.' },
            { type: 'vocab', word: 'С Новым Годом!', romaji: 'S Novym Godom!', translation: 'Feliz Ano Novo!', audio: 'С Новым Годом!', dica: 'A saudação festiva mais famosa da Rússia.' },
            { type: 'vocab', word: 'С Днём Рождения!', romaji: 'S Dnyom Rozhdeniya!', translation: 'Feliz Aniversário!', audio: 'С Днём Рождения!', dica: 'Felicitação clássica de aniversário.' },
            { type: 'vocab', word: 'Поздравляю!', romaji: 'Pozdravlyayu!', translation: 'Parabéns! / Meus parabéns!', audio: 'Поздравляю!', dica: 'Verbo felicitar na 1ª pessoa.' }
        ],
        [
            { sentence: 'Поздравляю тебя с Новым Годом!', translation: 'Desejo-lhe um Feliz Ano Novo!', tokens: ['Поздравляю', 'тебя', 'с', 'Новым', 'Годом!'], audio: 'Поздравляю тебя с Новым Годом!' },
            { sentence: 'Желаю счастья и здоровья!', translation: 'Desejo felicidade e saúde!', tokens: ['Желаю', 'счастья', 'и', 'здоровья!'], audio: 'Желаю счастья и здоровья!' }
        ],
        [
            { speaker: 'Marina', text: 'С Днём Рождения, Иван!', translation: 'Feliz Aniversário, Ivan!', audio: 'С Днём Рождения, Иван!' },
            { speaker: 'Ivan', text: 'Большое спасибо! Вот твой подарок.', translation: 'Muito obrigado! Aqui está seu presente.', audio: 'Большое спасибо! Вот твой подарок.' }
        ],
        [
            { q: 'Qual preposição é usada nas felicitações ("Feliz Ano Novo!")?', options: ['В', 'На', 'С', 'Из'], correctIndex: 2, explanation: 'Felicitações usam С + Instrumental.' },
            { q: 'Como se diz "Feliz Ano Novo!" em russo?', options: ['С Новым Годом!', 'С Днём Рождения!', 'С праздником!', 'Счастливого пути!'], correctIndex: 0, explanation: 'С Новым Годом!' },
            { q: 'O que significa "Подарок"?', options: ['Festa', 'Presente', 'Bolo', 'Árvore'], correctIndex: 1, explanation: 'Подарок = Presente.' },
            { q: 'Traduza: "С Днём Рождения!"', options: ['Feliz Ano Novo!', 'Feliz Aniversário!', 'Boa viagem!', 'Seja bem-vindo!'], correctIndex: 1, explanation: 'С Днём Рождения! = Feliz Aniversário!' },
            { q: 'Qual é a maior festa comemorativa da Rússia?', options: ['Carnaval', 'Ano Novo (Новый Год)', 'Páscoa', 'Halloween'], correctIndex: 1, explanation: 'O Ano Novo é a maior celebração russa.' }
        ]
    ),

    // Módulo 10
    criarModuloA2Handcrafted(
        'ru_a2_mod_10',
        'Módulo 10: Покупки и сувениры (Matrioska e Lembrancinhas)',
        'Aprenda a comprar lembrancinhas típicas russas e fazer comparações com o termo Чем.',
        'Domine os comparativos de adjetivos (дороже, дешевле, лучше) e a estrutura com Чем.',
        'Эта матрёшка дороже, чем та.',
        [
            { title: 'Grau Comparativo Sintético', rule: 'Muitos adjetivos em russo formam o comparativo adicionando -ее ou com formas especiais irregulares (дороже = mais caro, дешевле = mais barato, лучше = melhor).', formula: 'Дорогой ➔ Дороже | Дешёвый ➔ Дешевле | Хороший ➔ Лучше', example: 'Эта книга дороже.', exampleTranslation: 'Este livro é mais caro.' },
            { title: 'Comparações com Чем', rule: 'Para comparar duas coisas explicitamente, usa-se a palavra "чем" (do que).', formula: '[Item 1] + [Comparativo] + чем + [Item 2]', example: 'Матрёшка дороже, чем шапка.', exampleTranslation: 'A matrioska é mais cara do que o gorro.' }
        ],
        [
            { type: 'vocab', word: 'Матрёшка', romaji: 'Matryoshka', translation: 'Matrioska (boneca russa)', audio: 'Матрёшка', dica: 'Famosa boneca de madeira russa que contém bonecas menores dentro.' },
            { type: 'vocab', word: 'Сувенир', romaji: 'Suvenir', translation: 'Lembrancinha / Souvenir', audio: 'Сувенир', dica: 'Objeto de recordação de viagem.' },
            { type: 'vocab', word: 'Дороже', romaji: 'Dorozhe', translation: 'Mais caro(a)', audio: 'Дороже', dica: 'Comparativo de Дорогой.' },
            { type: 'vocab', word: 'Дешевле', romaji: 'Deshevle', translation: 'Mais barato(a)', audio: 'Дешевле', dica: 'Comparativo de Дешёвый.' },
            { type: 'vocab', word: 'Чем', romaji: 'Chem', translation: 'Do que (em comparações)', audio: 'Чем', dica: 'Conjunção de comparação.' }
        ],
        [
            { sentence: 'Эта матрёшка дороже, чем та.', translation: 'Esta matrioska é mais cara do que aquela.', tokens: ['Эта', 'матрёшка', 'дороже,', 'чем', 'та.'], audio: 'Эта матрёшка дороже, чем та.' },
            { sentence: 'Этот сувенир дешевле.', translation: 'Esta lembrancinha é mais barata.', tokens: ['Этот', 'сувенир', 'дешевле.'], audio: 'Этот сувенир дешевле.' }
        ],
        [
            { speaker: 'Turista', text: 'Сколько стоит эта матрёшка?', translation: 'Quanto custa esta matrioska?', audio: 'Сколько стоит эта матрёшка?' },
            { speaker: 'Vendedor', text: 'Она стоит 1000 рублей. Она лучше и красивее.', translation: 'Ela custa 1000 rublos. Ela é melhor e mais bonita.', audio: 'Она стоит 1000 рублей. Она лучше и красивее.' }
        ],
        [
            { q: 'Qual é o comparativo de "дорогой" (caro)?', options: ['Дороже', 'Дешевле', 'Лучше', 'Хуже'], correctIndex: 0, explanation: 'Дорогой ➔ Дороже (mais caro).' },
            { q: 'Qual é o comparativo de "дешёвый" (barato)?', options: ['Дороже', 'Дешевле', 'Лучше', 'Быстрее'], correctIndex: 1, explanation: 'Дешёвый ➔ Дешевле (mais barato).' },
            { q: 'Qual palavra significa "do que" em comparações?', options: ['Как', 'Что', 'Чем', 'И'], correctIndex: 2, explanation: 'Чем = Do que.' },
            { q: 'O que é uma "Матрёшка"?', options: ['Sopa russa', 'Boneca tradicional de madeira reinhada', 'Gorro de pele', 'Dança russa'], correctIndex: 1, explanation: 'Boneca de madeira russa.' },
            { q: 'Comparativo de "хороший" (bom)?', options: ['Хорошее', 'Лучше', 'Дороже', 'Меньше'], correctIndex: 1, explanation: 'Хороший ➔ Лучше (melhor).' }
        ]
    ),

    // Módulo 11
    criarModuloA2Handcrafted(
        'ru_a2_mod_11',
        'Módulo 11: Описание людей (Descrição Física e Personalidade)',
        'Aprenda a descrever a aparência física e traços de personalidade em russo.',
        'Domine os adjetivos de descrição (высокий, умный, добрый) e a concordância de gênero e número.',
        'Он высокий и умный, а она красивая и добрая.',
        [
            { title: 'Adjetivos de Aparência e Caráter', rule: 'Os adjetivos masculinos terminam em -ый/-ой/-ий e os femininos em -ая/-яя. Eles concordam com a pessoa descrita.', formula: 'Masc: -ый/-ий | Fem: -ая/-яя | Plur: -ые/-ие', example: 'Высокий мужчина / Красивая женщина', exampleTranslation: 'Homem alto / Mulher bonita' },
            { title: 'Descrevendo Cabelos e Olhos', rule: 'Usa-se a estrutura "У него / У неё" + cor dos olhos/cabelos.', formula: 'У него / У неё + [Adjetivo Plural] + глаза / волосы', example: 'У неё голубые глаза и тёмные волосы.', exampleTranslation: 'Ela tem olhos azuis e cabelos escuros.' }
        ],
        [
            { type: 'vocab', word: 'Высокий', romaji: 'Vysoky', translation: 'Alto', audio: 'Высокий', dica: 'Adjetivo masculino de estatura.' },
            { type: 'vocab', word: 'Красивая', romaji: 'Krasivaya', translation: 'Bonita (feminino)', audio: 'Красивая', dica: 'Adjetivo feminino de beleza.' },
            { type: 'vocab', word: 'Умный', romaji: 'Umny', translation: 'Inteligente', audio: 'Умный', dica: 'Adjetivo de capacidade intelectual.' },
            { type: 'vocab', word: 'Добрый', romaji: 'Dobry', translation: 'Bondoso / Gentil', audio: 'Добрый', dica: 'Adjetivo de personalidade positiva.' },
            { type: 'vocab', word: 'Глаза', romaji: 'Glaza', translation: 'Olhos', audio: 'Глаза', dica: 'Substantivo plural (ex: голубые глаза = olhos azuis).' }
        ],
        [
            { sentence: 'Он очень высокий и умный человек.', translation: 'Ele é uma pessoa muito alta e inteligente.', tokens: ['Он', 'очень', 'высокий', 'и', 'умный', 'человек.'], audio: 'Он очень высокий и умный человек.' },
            { sentence: 'У неё красивые зелёные глаза.', translation: 'Ela tem belos olhos verdes.', tokens: ['У', 'неё', 'красивые', 'зелёные', 'глаза.'], audio: 'У неё красивые зелёные глаза.' }
        ],
        [
            { speaker: 'Nina', text: 'Как выглядит твой брат?', translation: 'Como é seu irmão fisicamente?', audio: 'Как выглядит твой брат?' },
            { speaker: 'Boris', text: 'Он высокий, у него тёмные волосы.', translation: 'Ele é alto, tem cabelos escuros.', audio: 'Он высокий, у него тёмные волосы.' }
        ],
        [
            { q: 'Qual adjetivo significa "Inteligente"?', options: ['Добрый', 'Умный', 'Высокий', 'Старый'], correctIndex: 1, explanation: 'Умный = Inteligente.' },
            { q: 'Feminino do adjetivo "высокий" (alto)?', options: ['Высокий', 'Высокая', 'Высокое', 'Высокие'], correctIndex: 1, explanation: 'Feminino usa -ая: Высокая.' },
            { q: 'Traduza: "Добрый"', options: ['Bravo', 'Bondoso / Gentil', 'Triste', 'Frio'], correctIndex: 1, explanation: 'Добрый = Bondoso / Gentil.' },
            { q: 'Como se diz "Olhos azuis"?', options: ['Голубые глаза', 'Зелёные глаза', 'Чёрные глаза', 'Красные глаза'], correctIndex: 0, explanation: 'Голубые глаза.' },
            { q: 'Traduza: "Красивая женщина."', options: ['Mulher alta', 'Mulher inteligente', 'Mulher bonita', 'Mulher jovem'], correctIndex: 2, explanation: 'Mulher bonita.' }
        ]
    ),

    // Módulo 12
    criarModuloA2Handcrafted(
        'ru_a2_mod_12',
        'Módulo 12: В квартире (A Dacha e Casas Russas)',
        'Conheça o interior dos apartamentos russos e a tradição cultural da Дача (casa de campo).',
        'Aprenda o vocabulário da casa e o uso do Caso Preposicional para localização de móveis e cômodos.',
        'Летом мы отдыхаем на даче.',
        [
            { title: 'O Conceito Cultural da Дача', rule: 'A Дача é a tradicional casa de campo russa onde as famílias passam fins de semana e o verão cultivando hortas e fazendo banha (sauna russa).', formula: 'На даче (Na dacha)', example: 'Летом мы всегда ездим на дачу.', exampleTranslation: 'No verão nós sempre vamos para a dacha.' },
            { title: 'Cômodos e Móveis no Preposicional', rule: 'Para dizer em qual cômodo algo está, usa-se В/НА + Preposicional (-е).', formula: 'В комнате / На кухне / В спальне', example: 'Стол стоит в комнате.', exampleTranslation: 'A mesa está na sala.' }
        ],
        [
            { type: 'vocab', word: 'Дача', romaji: 'Dacha', translation: 'Dacha (casa de campo russa)', audio: 'Дача', dica: 'Casa de campo russa tradicional.' },
            { type: 'vocab', word: 'Квартира', romaji: 'Kvartira', translation: 'Apartamento', audio: 'Квартира', dica: 'Moradia urbana típica russa.' },
            { type: 'vocab', word: 'Кухня', romaji: 'Kukhnya', translation: 'Cozinha', audio: 'Кухня', dica: 'Lugar central de convívio na cultura russa.' },
            { type: 'vocab', word: 'Комната', romaji: 'Komnata', translation: 'Quarto / Sala', audio: 'Комната', dica: 'Cômodo genérico da casa.' },
            { type: 'vocab', word: 'Мебель', romaji: 'Mebel', translation: 'Móveis', audio: 'Мебель', dica: 'Substantivo feminino coletivo.' }
        ],
        [
            { sentence: 'Летом наша семья отдыхает на даче.', translation: 'No verão nossa família descansa na dacha.', tokens: ['Летом', 'наша', 'семья', 'отдыхает', 'на', 'даче.'], audio: 'Летом наша семья отдыхает на даче.' },
            { sentence: 'Большой стол стоит на кухне.', translation: 'A mesa grande está na cozinha.', tokens: ['Большой', 'стол', 'стоит', 'на', 'кухне.'], audio: 'Большой стол стоит на кухне.' }
        ],
        [
            { speaker: 'Pavel', text: 'Где ты будешь летом?', translation: 'Onde você vai estar no verão?', audio: 'Где ты будешь летом?' },
            { speaker: 'Elena', text: 'Я буду жить на даче.', translation: 'Eu vou morar na dacha.', audio: 'Я буду жить на даче.' }
        ],
        [
            { q: 'O que é uma "Дача" na cultura russa?', options: ['Apartamento no centro', 'Casa de campo tradicional', 'Hotel de luxo', 'Escritório'], correctIndex: 1, explanation: 'Casa de campo russa tradicional.' },
            { q: 'Como se diz "na cozinha"?', options: ['В кухне', 'На кухне', 'Из кухни', 'С кухней'], correctIndex: 1, explanation: 'Usa-se preposição НА: На кухне.' },
            { q: 'Palavra para "Apartamento"?', options: ['Дача', 'Дом', 'Квартира', 'Комната'], correctIndex: 2, explanation: 'Квартира = Apartamento.' },
            { q: 'Traduza: "В комнате"', options: ['Na rua', 'No quarto / sala', 'Na dacha', 'Na cozinha'], correctIndex: 1, explanation: 'В комнате = No quarto/sala.' },
            { q: 'Preposição usada com "дача" para localização (na dacha)?', options: ['В', 'На', 'Из', 'К'], correctIndex: 1, explanation: 'На даче.' }
        ]
    ),

    // Módulo 13
    criarModuloA2Handcrafted(
        'ru_a2_mod_13',
        'Módulo 13: Звонок по телефону (Ligações e Mensagens)',
        'Aprenda expressões para atender ao telefone e trocar mensagens em russo.',
        'Domine expressões telefônicas universais: Алло (Alô), Слушаю (Pode falar) e Можно...? (Posso falar com...?).',
        'Алло! Слушаю. Можно Ивана к телефону?',
        [
            { title: 'Atendendo ao Telefone', rule: 'Ao atender uma chamada em russo, usam-se as expressões "Алло!" ou "Слушаю!" (Literalmente: "Estou ouvindo!").', formula: 'Алло! / Слушаю! / Да-да!', example: 'Алло! Здравствуйте, я слушаю.', exampleTranslation: 'Alô! Olá, estou ouvindo.' },
            { title: 'Pedindo para Falar com Alguém', rule: 'Para solicitar a presença de alguém na linha, usa-se "Можно + [Nome no Acusativo/Genitivo] + к телефону?".', formula: 'Можно + [Nome] + к телефону?', example: 'Можно Анну к телефону?', exampleTranslation: 'Posso falar com a Anna?' }
        ],
        [
            { type: 'vocab', word: 'Алло', romaji: 'Allo', translation: 'Alô', audio: 'Алло', dica: 'Saudação telefônica universal.' },
            { type: 'vocab', word: 'Слушаю', romaji: 'Slushayu', translation: 'Pode falar / Estou ouvindo', audio: 'Слушаю', dica: 'Forma cortês de atender ao telefone em russo.' },
            { type: 'vocab', word: 'Перезвонить', romaji: 'Perezvonit', translation: 'Retornar a ligação', audio: 'Перезвонить', dica: 'Ligar de volta mais tarde.' },
            { type: 'vocab', word: 'Сообщение', romaji: 'Soobscheniye', translation: 'Mensagem de texto', audio: 'Сообщение', dica: 'SMS ou mensagem de aplicativo.' },
            { type: 'vocab', word: 'Номер', romaji: 'Nomer', translation: 'Número de telefone', audio: 'Номер', dica: 'Número telefônico.' }
        ],
        [
            { sentence: 'Алло! Здравствуйте, можно Ивана?', translation: 'Allo! Olá, posso falar com o Ivan?', tokens: ['Алло!', 'Здравствуйте,', 'можно', 'Ивана?'], audio: 'Алло! Здравствуйте, можно Ивана?' },
            { sentence: 'Я перезвоню вам позже.', translation: 'Eu vou te ligar de volta mais tarde.', tokens: ['Я', 'перезвоню', 'вам', 'позже.'], audio: 'Я перезвоню вам позже.' }
        ],
        [
            { speaker: 'Anton', text: 'Алло! Слушаю.', translation: 'Alô! Pode falar.', audio: 'Алло! Слушаю.' },
            { speaker: 'Beatriz', text: 'Здравствуйте! Это Анна?', translation: 'Olá! É a Anna?', audio: 'Здравствуйте! Это Анна?' }
        ],
        [
            { q: 'Qual expressão significa "Pode falar / Estou ouvindo" ao atender o telefone?', options: ['Привет', 'Слушаю', 'Пока', 'Спасибо'], correctIndex: 1, explanation: 'Слушаю = Estou ouvindo / Pode falar.' },
            { q: 'Como se pede para falar com alguém ao telefone?', options: ['Где Ivan?', 'Можно Ивана к телефону?', 'Кто Ivan?', 'Как Ivan?'], correctIndex: 1, explanation: 'Можно [Nome] к телефону?' },
            { q: 'O que significa "Сообщение"?', options: ['Ligação', 'Mensagem de texto', 'E-mail', 'Telefone'], correctIndex: 1, explanation: 'Сообщение = Mensagem de texto.' },
            { q: 'Verbo que significa "Ligar de volta"?', options: ['Звонить', 'Перезвонить', 'Говорить', 'Слушать'], correctIndex: 1, explanation: 'Перезвонить = Ligar de volta.' },
            { q: 'Saudação de abertura ao telefone?', options: ['Алло', 'До свидания', 'Спасибо', 'Пожалуйста'], correctIndex: 0, explanation: 'Алло.' }
        ]
    ),

    // Módulo 14
    criarModuloA2Handcrafted(
        'ru_a2_mod_14',
        'Módulo 14: Приглашение и встречи (Convites e Encontros)',
        'Aprenda a fazer convites, aceitar ou recusar educadamente e marcar encontros.',
        'Domine o verbo Встречаться с + Instrumental (encontrar-se com alguém) e a partícula Давай (vamos).',
        'Давай встретимся в субботу в парке!',
        [
            { title: 'Encontrar-se com Alguém (Встречаться с)', rule: 'O verbo reflexivo Встречаться (ou встретиться) exige a preposição С seguida do Caso Instrumental.', formula: 'Встречаться с + [Pessoa no Instrumental]', example: 'Я встречаюсь с другом.', exampleTranslation: 'Eu vou me encontrar com meu amigo.' },
            { title: 'Fazendo Convites com Давай', rule: 'Usa-se "Давай" (informal) ou "Давайте" (formal) para convidar alguém a fazer algo.', formula: 'Давай / Давайте + [Ação no Infinitivo/Futuro]', example: 'Давай пойдём в кино!', exampleTranslation: 'Vamos ao cinema!' }
        ],
        [
            { type: 'vocab', word: 'Давай', romaji: 'Davai', translation: 'Vamos! / Bora!', audio: 'Давай', dica: 'Expressão informal para propor algo ou se despedir amigavelmente.' },
            { type: 'vocab', word: 'Встреча', romaji: 'Vstrecha', translation: 'Encontro / Reunião', audio: 'Встреча', dica: 'Substantivo de compromisso marcado.' },
            { type: 'vocab', word: 'Встречаться', romaji: 'Vstrechat-sya', translation: 'Encontrar-se', audio: 'Встречаться', dica: 'Verbo reflexivo de encontro social.' },
            { type: 'vocab', word: 'С удовольствием', romaji: 'S udovolstviyem', translation: 'Com prazer!', audio: 'С удовольствием', dica: 'Expressão entusiasmada para aceitar um convite.' },
            { type: 'vocab', word: 'К сожалению', romaji: 'K sozhaleniyu', translation: 'Infelizmente', audio: 'К сожалению', dica: 'Usado para recusar educadamente um convite.' }
        ],
        [
            { sentence: 'Давай встретимся в субботу!', translation: 'Bora se encontrar no sábado!', tokens: ['Давай', 'встретимся', 'в', 'субботу!'], audio: 'Давай встретимся в субботу!' },
            { sentence: 'С удовольствием пойдём в кино.', translation: 'Com prazer iremos ao cinema.', tokens: ['С', 'удовольствием', 'пойдём', 'в', 'кино.'], audio: 'С удовольствием пойдём в кино.' }
        ],
        [
            { speaker: 'Victor', text: 'Пойдём завтра в кафе?', translation: 'Vamos ao café amanhã?', audio: 'Пойдём завтра в кафе?' },
            { speaker: 'Sofia', text: 'Давай! С удовольствием.', translation: 'Bora! Com prazer.', audio: 'Давай! С удовольствием.' }
        ],
        [
            { q: 'Qual expressão informal é usada para propor uma ação ("Bora/Vamos!")?', options: ['Спасибо', 'Давай', 'Извините', 'Пока'], correctIndex: 1, explanation: 'Давай = Vamos! / Bora!' },
            { q: 'Como se diz "Com prazer!" ao aceitar um convite?', options: ['К сожалению', 'С удовольствием', 'Не хочу', 'Завтра'], correctIndex: 1, explanation: 'С удовольствием = Com prazer!' },
            { q: 'O que significa "К сожалению"?', options: ['Com certeza', 'Infelizmente', 'Com prazer', 'Até logo'], correctIndex: 1, explanation: 'К сожалению = Infelizmente.' },
            { q: 'Qual caso gramatical segue a preposição "с" no verbo встречаться?', options: ['Acusativo', 'Instrumental', 'Genitivo', 'Preposicional'], correctIndex: 1, explanation: 'Встречаться с + Instrumental.' },
            { q: 'Traduza: "Давай встретимся!"', options: ['Vamos conversar!', 'Bora se encontrar!', 'Vamos embora!', 'Até amanhã!'], correctIndex: 1, explanation: 'Bora se encontrar!' }
        ]
    ),

    // Módulo 15
    criarModuloA2Handcrafted(
        'ru_a2_mod_15',
        'Módulo 15: Путешествия по России (Transiberiana)',
        'Aprenda a planejar viagens pela Rússia e compreenda a diferença essencial entre Идти (a pé) e Ехать (de veículo).',
        'Domine os dois verbos de movimento básicos sem prefixo: Идти (deslocar-se a pé) vs. Ехать (deslocar-se por veículo).',
        'Мы едем на поезде по Транссибу в Сибирь.',
        [
            { title: 'Идти vs. Ехать (Verbos de Movimento)', rule: 'Em russo é OBRIGATÓRIO diferenciar o meio de deslocamento: usa-se Идти quando a pessoa vai A PÉ, e Ехать quando vai por QUALQUER VEÍCULO (carro, trem, ônibus).', formula: 'Идти (А pé) vs. Ехать (De veículo)', example: 'Я иду в парк (a pé) / Я еду в Москву (de veículo)', exampleTranslation: 'Vou ao parque a pé / Vou a Moscou de transporte' },
            { title: 'A Ferrovia Transiberiana (Транссиб)', rule: 'A famosa ferrovia conecta Moscou a Vladivostok cruzando toda a Sibéria. Para viajar de trem usa-se Ехать на поезде.', formula: 'Ехать на поезде по Транссибу', example: 'Мы едем на поезде в Сибирь.', exampleTranslation: 'Estamos indo de trem para a Sibéria.' }
        ],
        [
            { type: 'vocab', word: 'Транссиб', romaji: 'Transsib', translation: 'Transiberiana (ferrovia)', audio: 'Транссиб', dica: 'Nome carinhoso da mítica ferrovia russa.' },
            { type: 'vocab', word: 'Поезд', romaji: 'Poyezd', translation: 'Trem', audio: 'Поезд', dica: 'Meio de transporte principal da viagem.' },
            { type: 'vocab', word: 'Идти', romaji: 'Idti', translation: 'Ir a pé', audio: 'Идти', dica: 'Deslocamento pedestre.' },
            { type: 'vocab', word: 'Ехать', romaji: 'Yekhat', translation: 'Ir de veículo', audio: 'Ехать', dica: 'Deslocamento por transporte.' },
            { type: 'vocab', word: 'Билет', romaji: 'Bilet', translation: 'Passagem / Ingresso', audio: 'Билет', dica: 'Passagem de trem ou avião.' }
        ],
        [
            { sentence: 'Мы едем на поезде по Транссибу.', translation: 'Nós estamos viajando de trem pela Transiberiana.', tokens: ['Мы', 'едем', 'на', 'поезде', 'по', 'Транссибу.'], audio: 'Мы едем на поезде по Транссибу.' },
            { sentence: 'Куда ты идёшь? Я иду в магазин.', translation: 'Onde você vai a pé? Vou à loja.', tokens: ['Куда', 'ты', 'идёшь?', 'Я', 'иду', 'в', 'магазин.'], audio: 'Куда ты идёшь? Я иду в магазин.' }
        ],
        [
            { speaker: 'Turista', text: 'Как вы едете в Сибирь?', translation: 'Como vocês vão para a Sibéria?', audio: 'Как вы едете в Сибирь?' },
            { speaker: 'Guia', text: 'Мы едем на поезде.', translation: 'Nós vamos de trem.', audio: 'Мы едем на поезде.' }
        ],
        [
            { q: 'Qual verbo usa-se para ir a um lugar A PÉ?', options: ['Ехать', 'Идти', 'Лететь', 'Плыть'], correctIndex: 1, explanation: 'Идти = Ir a pé.' },
            { q: 'Qual verbo usa-se para ir a um lugar DE CARRO ou TREM?', options: ['Идти', 'Ехать', 'Гулять', 'Стоять'], correctIndex: 1, explanation: 'Ехать = Ir de veículo.' },
            { q: 'O que é o "Транссиб"?', options: ['Um restaurante de Moscou', 'A Ferrovia Transiberiana', 'Um museu', 'Um rio russa'], correctIndex: 1, explanation: 'A lendária Ferrovia Transiberiana.' },
            { q: 'Traduza: "Я иду в парк."', options: ['Vou ao parque de carro', 'Vou ao parque a pé', 'Moro no parque', 'Saio do parque'], correctIndex: 1, explanation: 'Иду indica deslocamento a pé.' },
            { q: 'Como se diz "Passagem / Ingresso"?', options: ['Билет', 'Поезд', 'Багаж', 'Вокзал'], correctIndex: 0, explanation: 'Билет = Passagem / Ingresso.' }
        ]
    ),

    // Módulo 16
    criarModuloA2Handcrafted(
        'ru_a2_mod_16',
        'Módulo 16: В театре и музее (Teatro Bolshoi e Hermitage)',
        'Aprenda o vocabulário cultural para visitar monumentos, o Teatro Bolshoi e o Museu Hermitage.',
        'Domine frases para comprar ingressos em bilheterias e perguntar sobre peças e exposições.',
        'Мы купили билеты в Большой театр e в Эрмитаж.',
        [
            { title: 'O Teatro Bolshoi e o Hermitage', rule: 'O Большой театр (Moscou) é o templo mundial do balé e ópera; o Эрмитаж (São Petersburgo) é um dos maiores museus de arte do planeta.', formula: 'В Большом театре / В Эрмитаже', example: 'Вчера мы были в Большом театре.', exampleTranslation: 'Ontem estávamos no Teatro Bolshoi.' },
            { title: 'Comprando Ingressos na Bilheteria (Касса)', rule: 'Para pedir ingressos usa-se "Дайте, пожалуйста, билеты на...".', formula: 'Билеты на + [Espetáculo/Dia no Acusativo]', example: 'Дайте два билета на балет.', exampleTranslation: 'Me dê dois ingressos para o balé.' }
        ],
        [
            { type: 'vocab', word: 'Театр', romaji: 'Teatr', translation: 'Teatro', audio: 'Театр', dica: 'Instituição cultural de grande prestígio na Rússia.' },
            { type: 'vocab', word: 'Балет', romaji: 'Balet', translation: 'Balé', audio: 'Балет', dica: 'Orgulho cultural nacional russo.' },
            { type: 'vocab', word: 'Музей', romaji: 'Muzey', translation: 'Museu', audio: 'Музей', dica: 'Local de exposições culturais.' },
            { type: 'vocab', word: 'Выставка', romaji: 'Vystavka', translation: 'Exposição / Mostra', audio: 'Выставка', dica: 'Mostra de arte ou história.' },
            { type: 'vocab', word: 'Касса', romaji: 'Kassa', translation: 'Bilheteria / Guichê', audio: 'Касса', dica: 'Local onde se compram bilhetes.' }
        ],
        [
            { sentence: 'Мы купили билеты в Большой театр.', translation: 'Nós compramos ingressos para o Teatro Bolshoi.', tokens: ['Мы', 'купили', 'билеты', 'в', 'Большой', 'театр.'], audio: 'Мы купили билеты в Большой театр.' },
            { sentence: 'В Эрмитаже очень красивая выставка.', translation: 'No Hermitage há uma exposição muito bonita.', tokens: ['В', 'Эрмитаже', 'очень', 'красивая', 'выставка.'], audio: 'В Эрмитаже очень красивая выставка.' }
        ],
        [
            { speaker: 'Visitante', text: 'Здравствуйте! Есть билеты на балет?', translation: 'Olá! Há ingressos para o balé?', audio: 'Здравствуйте! Есть билеты на балет?' },
            { speaker: 'Bilheteiro', text: 'Да, есть dva билета.', translation: 'Sim, há dois ingressos.', audio: 'Да, есть два билета.' }
        ],
        [
            { q: 'Onde fica o famoso Teatro Bolshoi (Большой театр)?', options: ['São Petersburgo', 'Moscou', 'Kazan', 'Sochi'], correctIndex: 1, explanation: 'O Bolshoi fica em Moscou.' },
            { q: 'Onde fica o famoso Museu Hermitage (Эрмитаж)?', options: ['Moscou', 'São Petersburgo', 'Siberia', 'Vladivostok'], correctIndex: 1, explanation: 'O Hermitage fica em São Petersburgo.' },
            { q: 'Como pedir ingressos na bilheteria (Касса)?', options: ['Дайте билеты', 'Где билеты', 'Кто билеты', 'Как билеты'], correctIndex: 0, explanation: 'Дайте, пожалуйста, билеты...' },
            { q: 'Traduza: "Выставка"', options: ['Teatro', 'Exposição / Mostra', 'Cinema', 'Restaurante'], correctIndex: 1, explanation: 'Выставка = Exposição / Mostra.' },
            { q: 'Palavra para "Bilheteria"?', options: ['Касса', 'Театр', 'Балет', 'Музей'], correctIndex: 0, explanation: 'Касса = Bilheteria.' }
        ]
    ),

    // Módulo 17
    criarModuloA2Handcrafted(
        'ru_a2_mod_17',
        'Módulo 17: Природа и сезоны (Natureza e Estações do Ano)',
        'Descreva as quatro estações do ano e use os advérbios temporais de estação no Caso Instrumental.',
        'Domine os advérbios de estação: Зимой (no inverno), Весной (na primavera), Летом (no verão) e Осенью (no outono).',
        'Зимой идет снег, а летом тепло e солнечно.',
        [
            { title: 'Advérbios de Estação (Caso Instrumental)', rule: 'Para responder a "Quando?" referente a uma estação do ano, usa-se a forma do Caso Instrumental do substantivo.', formula: 'Зима ➔ Зимой | Весна ➔ Весной | Лето ➔ Летом | Осень ➔ Осенью', example: 'Зимой очень холодно. Летом жарко.', exampleTranslation: 'No inverno é muito frio. No verão é quente.' },
            { title: 'As Quatro Estações na Rússia', rule: 'A Rússia vive transformações drásticas entre o inverno congelante (зима) e o verão ensolarado (лето).', formula: 'Зима (Inverno) / Весна (Primavera) / Лето (Verão) / Осень (Outono)', example: 'Весной природа красивая.', exampleTranslation: 'Na primavera a natureza é bonita.' }
        ],
        [
            { type: 'vocab', word: 'Зимой', romaji: 'Zimoi', translation: 'No inverno', audio: 'Зимой', dica: 'Advérbio temporal instrumental de Зима.' },
            { type: 'vocab', word: 'Весной', romaji: 'Vesnoi', translation: 'Na primavera', audio: 'Весной', dica: 'Advérbio temporal instrumental de Весна.' },
            { type: 'vocab', word: 'Летом', romaji: 'Letom', translation: 'No verão', audio: 'Летом', dica: 'Advérbio temporal instrumental de Лето.' },
            { type: 'vocab', word: 'Осенью', romaji: 'Osenyu', translation: 'No outono', audio: 'Осенью', dica: 'Advérbio temporal instrumental de Осень.' },
            { type: 'vocab', word: 'Природа', romaji: 'Priroda', translation: 'Natureza', audio: 'Природа', dica: 'Substantivo feminino de meio ambiente.' }
        ],
        [
            { sentence: 'Зимой в России идёт снег e очень холодно.', translation: 'No inverno na Rússia cai neve e faz muito frio.', tokens: ['Зимой', 'в', 'России', 'идёт', 'снег', 'e', 'очень', 'холодно.'], audio: 'Зимой в России идёт снег e очень холодно.' },
            { sentence: 'Летом мы обычно ездим на море.', translation: 'No verão nós geralmente vamos ao mar.', tokens: ['Летом', 'мы', 'обычно', 'ездим', 'на', 'море.'], audio: 'Летом мы обычно ездим на море.' }
        ],
        [
            { speaker: 'Victor', text: 'Какое твоё любимое время года?', translation: 'Qual é a sua estação do ano favorita?', audio: 'Какое твоё любимое время года?' },
            { speaker: 'Anna', text: 'Я люблю лето. Летом тепло!', translation: 'Eu amo o verão. No verão é quente!', audio: 'Я люблю лето. Летом тепло!' }
        ],
        [
            { q: 'Como se diz "No inverno" em russo?', options: ['Зима', 'Зимой', 'Зиме', 'Зимою'], correctIndex: 1, explanation: 'Advérbio no Instrumental: Зимой.' },
            { q: 'Como se diz "No verão"?', options: ['Лето', 'Летом', 'Лете', 'Лета'], correctIndex: 1, explanation: 'Advérbio no Instrumental: Летом.' },
            { q: 'Traduza: "Весной"', options: ['No outono', 'Na primavera', 'No inverno', 'No verão'], correctIndex: 1, explanation: 'Весной = Na primavera.' },
            { q: 'Traduza: "Осенью"', options: ['No outono', 'Na primavera', 'No inverno', 'No verão'], correctIndex: 0, explanation: 'Осенью = No outono.' },
            { q: 'O que significa "Природа"?', options: ['Cidade', 'Natureza', 'Clima', 'Estação'], correctIndex: 1, explanation: 'Природа = Natureza.' }
        ]
    ),

    // Módulo 18
    criarModuloA2Handcrafted(
        'ru_a2_mod_18',
        'Módulo 18: Письма и e-mail (Redação Informal)',
        'Aprenda a redigir e-mails e cartas informais ou semi-formais em russo.',
        'Domine as saudações iniciais (Дорогой / Уважаемый) e as fórmulas de despedida (С уважением, Обнимаю).',
        'Дорогой друг! Пишу тебе из Москвы. С уважением, Иван.',
        [
            { title: 'Saudações de Abertura em Cartas', rule: 'Usa-se "Дорогой" (para homens) ou "Дорогая" (para mulheres) em mensagens afetuosas informais, e "Уважаемый/Уважаемая" para contextos formais.', formula: 'Дорогой + [Nome Masc] / Дорогая + [Nome Fem]', example: 'Дорогой Иван! / Дорогая Анна!', exampleTranslation: 'Querido Ivan! / Querida Anna!' },
            { title: 'Fórmulas de Encerramento', rule: 'Em cartas informais usam-se "Обнимаю" (Abraços) ou "Всего доброго" (Tudo de bom). Em e-mails formais usa-se "С уважением" (Atenciosamente).', formula: 'С уважением (Atenciosamente) / Обнимаю (Abraços)', example: 'С уважением, Viktor Petrov.', exampleTranslation: 'Atenciosamente, Viktor Petrov.' }
        ],
        [
            { type: 'vocab', word: 'Дорогой', romaji: 'Dorogoy', translation: 'Querido (masculino)', audio: 'Дорогой', dica: 'Saudação informal carinhosa.' },
            { type: 'vocab', word: 'Уважаемый', romaji: 'Uvazhayemy', translation: 'Prezado / Respeitável (formal)', audio: 'Уважаемый', dica: 'Saudação formal de e-mails corporativos.' },
            { type: 'vocab', word: 'С уважением', romaji: 'S uvazheniyem', translation: 'Atenciosamente', audio: 'С уважением', dica: 'Fechamento padrão formal.' },
            { type: 'vocab', word: 'Письмо', romaji: 'Pismo', translation: 'Carta / E-mail', audio: 'Письмо', dica: 'Substantivo neutro de correspondência.' },
            { type: 'vocab', word: 'Обнимаю', romaji: 'Obnimayu', translation: 'Um abraço / Abraços', audio: 'Обнимаю', dica: 'Fechamento afetivo entre amigos.' }
        ],
        [
            { sentence: 'Дорогой друг, как твои дела?', translation: 'Querido amigo, como você está?', tokens: ['Дорогой', 'друг,', 'как', 'твои', 'дела?'], audio: 'Дорогой друг, как твои дела?' },
            { sentence: 'Пишу тебе письмо из Санкт-Петербурга.', translation: 'Escrevo-lhe uma carta de São Petersburgo.', tokens: ['Пишу', 'тебе', 'письмо', 'из', 'Санкт-Петербурга.'], audio: 'Пишу тебе письмо из Санкт-Петербурга.' }
        ],
        [
            { speaker: 'Remetente', text: 'Здравствуйте! С уважением, Иван.', translation: 'Olá! Atenciosamente, Ivan.', audio: 'Здравствуйте! С уважением, Иван.' },
            { speaker: 'Destinatário', text: 'Спасибо за письмо!', translation: 'Obrigado pela carta!', audio: 'Спасибо за письмо!' }
        ],
        [
            { q: 'Qual saudação usa-se para iniciar um e-mail informal a um amigo homem ("Querido...")?', options: ['Уважаемый', 'Дорогой', 'С уважением', 'Здравствуйте'], correctIndex: 1, explanation: 'Дорогой = Querido (masculino).' },
            { q: 'Qual fórmula de encerramento significa "Atenciosamente" em e-mails formais?', options: ['Обнимаю', 'С уважением', 'Пока', 'Привет'], correctIndex: 1, explanation: 'С уважением = Atenciosamente.' },
            { q: 'Feminino de "Дорогой" (Querida...)?', options: ['Дорогой', 'Дорогая', 'Дорогое', 'Дорогие'], correctIndex: 1, explanation: 'Feminino: Дорогая.' },
            { q: 'O que significa "Обнимаю"?', options: ['Atenciosamente', 'Um abraço / Abraços', 'Bom dia', 'Por favor'], correctIndex: 1, explanation: 'Обнимаю = Um abraço / Abraços.' },
            { q: 'Traduza: "Письмо"', options: ['Livro', 'Carta / E-mail', 'Jornal', 'Foto'], correctIndex: 1, explanation: 'Письмо = Carta / E-mail.' }
        ]
    ),

    // Módulo 19
    criarModuloA2Handcrafted(
        'ru_a2_mod_19',
        'Módulo 19: Проблемы в поездке (Imprevistos e Ajuda)',
        'Aprenda a reagir a imprevistos de viagem e pedir socorro urgente em russo.',
        'Domine o Modo Imperativo de emergência (Помогите!, Скажите!) e vocabulário de urgência.',
        'Помогите! Я потерял паспорт e багаж.',
        [
            { title: 'Imperativo de Emergência', rule: 'Para pedir ajuda urgente a desconhecidos ou autoridades, usa-se a forma do Imperativo no plural/formal terminada em -те / -ите.', formula: 'Помогите! (Ajude/Ajudem!) | Скажите! (Diga!) | Извините! (Desculpe!)', example: 'Помогите, пожалуйста!', exampleTranslation: 'Por favor, me ajudem!' },
            { title: 'Expressando Perda de Objetos', rule: 'Usa-se o verbo Потерять (perder) no passado: Я потерял (Masc) / Я потеряла (Fem).', example: 'Я потерял паспорт e деньги.', exampleTranslation: 'Eu perdi o passaporte e o dinheiro.' }
        ],
        [
            { type: 'vocab', word: 'Помогите!', romaji: 'Pomogite!', translation: 'Socorro! / Me ajudem!', audio: 'Помогите!', dica: 'Imperativo de emergência essencial.' },
            { type: 'vocab', word: 'Потерял', romaji: 'Poteryal', translation: 'Perdi (masculino)', audio: 'Потерял', dica: 'Passado do verbo perder.' },
            { type: 'vocab', word: 'Потеряла', romaji: 'Poteryala', translation: 'Perdi (feminino)', audio: 'Потеряла', dica: 'Passado feminino de perder.' },
            { type: 'vocab', word: 'Полиция', romaji: 'Politsiya', translation: 'Polícia', audio: 'Полиция', dica: 'Órgão de segurança pública.' },
            { type: 'vocab', word: 'Поликлиника', romaji: 'Poliklinika', translation: 'Posto de saúde / Clínica', audio: 'Поликлиника', dica: 'Atendimento médico público.' }
        ],
        [
            { sentence: 'Помогите, пожалуйста! Я потерял паспорт.', translation: 'Socorro, por favor! Eu perdi o passaporte.', tokens: ['Помогите,', 'пожалуйста!', 'Я', 'потерял', 'паспорт.'], audio: 'Помогите, пожалуйста! Я потерял паспорт.' },
            { sentence: 'Где находится ближайшая полиция?', translation: 'Onde fica a polícia mais próxima?', tokens: ['Где', 'находится', 'ближайшая', 'полиция?'], audio: 'Где находится ближайшая полиция?' }
        ],
        [
            { speaker: 'Vítima', text: 'Помогите! Я потеряла сумку!', translation: 'Socorro! Eu perdi minha bolsa!', audio: 'Помогите! Я потеряла сумку!' },
            { speaker: 'Policial', text: 'Успокойтесь. Где это было?', translation: 'Calme-se. Onde foi isso?', audio: 'Успокойтесь. Где это было?' }
        ],
        [
            { q: 'Como se grita por socorro em russo ("Me ajudem!")?', options: ['Спасибо!', 'Помогите!', 'Здравствуйте!', 'Пока!'], correctIndex: 1, explanation: 'Помогите! = Socorro! / Me ajudem!' },
            { q: 'Como um homem diz "Eu perdi meu passaporte"?', options: ['Я потерял паспорт', 'Я потеряла паспорт', 'Я теряю паспорт', 'Я потеряли паспорт'], correctIndex: 0, explanation: 'Masculino: Я потерял.' },
            { q: 'Como uma mulher diz "Eu perdi minha bolsa"?', options: ['Я потерял сумку', 'Я потеряла сумку', 'Я теряю сумку', 'Я потеряли сумку'], correctIndex: 1, explanation: 'Feminino: Я потеряла.' },
            { q: 'Traduza: "Полиция"', options: ['Farmácia', 'Polícia', 'Hospital', 'Hotel'], correctIndex: 1, explanation: 'Полиция = Polícia.' },
            { q: 'Qual imperativo significa "Diga-me, por favor"?', options: ['Скажите, пожалуйста', 'Помогите', 'Смотрите', 'Читайте'], correctIndex: 0, explanation: 'Скажите = Diga / Fale.' }
        ]
    ),

    // Módulo 20
    criarModuloA2Handcrafted(
        'ru_a2_mod_20',
        'Módulo 20: Чувства и эмоции (Sentimentos e Emoções)',
        'Expressar emoções, estados mentais e sensações físicas usando construções impessoais com o Caso Dativo.',
        'Domine a estrutura "Мне + Advérbio de Estado" (Мне грустно, Мне весело, Мне интересно).',
        'Сегодня мне весело, а вчера было грустно.',
        [
            { title: 'Construção Dativo Impessoal de Estado', rule: 'Em russo, estados emocionais e sensações físicas não usam o verbo ter/ser diretamente, mas sim o Caso Dativo do pronome (Мне, Тебе, Ему, Ей, Нам) + um advérbio curto de estado.', formula: 'Мне / Тебе / Ему / Ей + [Advérbio de Estado]', example: 'Мне грустно / Мне весело / Мне холодно', exampleTranslation: 'Estou triste / Estou feliz / Estou com frio' },
            { title: 'Advérbios de Emoção', rule: 'Principais estados: Весело (Alegre/Divertido), Грустно (Triste), Скучно (Entediado), Интересно (Interessante).', example: 'Нам очень интересно.', exampleTranslation: 'Estamos achando muito interessante.' }
        ],
        [
            { type: 'vocab', word: 'Мне грустно', romaji: 'Mne grustno', translation: 'Estou triste', audio: 'Мне грустно', dica: 'Estado emocional de tristeza.' },
            { type: 'vocab', word: 'Мне весело', romaji: 'Mne veselo', translation: 'Estou alegre / divertido', audio: 'Мне весело', dica: 'Estado de alegria e diversão.' },
            { type: 'vocab', word: 'Мне скучно', romaji: 'Mne skuchno', translation: 'Estou entediado(a)', audio: 'Мне скучно', dica: 'Sensação de tédio.' },
            { type: 'vocab', word: 'Мне интересно', romaji: 'Mne interesno', translation: 'Acho interessante / Tenho interesse', audio: 'Мне интересно', dica: 'Expressa fascínio ou interesse.' },
            { type: 'vocab', word: 'Радость', romaji: 'Radost', translation: 'Alegria', audio: 'Радость', dica: 'Substantivo feminino de felicidade.' }
        ],
        [
            { sentence: 'Сегодня мне очень весело.', translation: 'Hoje eu estou muito alegre.', tokens: ['Сегодня', 'мне', 'очень', 'весело.'], audio: 'Сегодня мне очень весело.' },
            { sentence: 'Ему было скучно на уроке.', translation: 'Ele estava entediado na aula.', tokens: ['Ему', 'было', 'скучно', 'на', 'уроке.'], audio: 'Ему было скучно на уроке.' }
        ],
        [
            { speaker: 'Katya', text: 'Как ты себя чувствуешь?', translation: 'Como você está se sentindo?', audio: 'Как ты себя чувствуешь?' },
            { speaker: 'Pedro', text: 'Мне немного грустно.', translation: 'Estou um pouco triste.', audio: 'Мне немного грустно.' }
        ],
        [
            { q: 'Qual pronome do Dativo usa-se na estrutura de sentimentos para "Eu" (Estou triste)?', options: ['Я', 'Меня', 'Мне', 'Мной'], correctIndex: 2, explanation: 'Estrutura impessoal usa Dativo: Мне.' },
            { q: 'Como se diz "Estou triste" em russo?', options: ['Я грустный', 'Мне грустно', 'Я в грусти', 'Меня грустно'], correctIndex: 1, explanation: 'Мне грустно.' },
            { q: 'O que significa "Мне весело"?', options: ['Estou com frio', 'Estou alegre / divertido', 'Estou com fome', 'Estou com sono'], correctIndex: 1, explanation: 'Мне весело = Estou alegre / divertido.' },
            { q: 'Traduza: "Мне скучно"', options: ['Estou entediado(a)', 'Estou feliz', 'Estou com calor', 'Estou triste'], correctIndex: 0, explanation: 'Мне скучно = Estou entediado(a).' },
            { q: 'Traduza: "Мне интересно"', options: ['Acho chato', 'Acho interessante', 'Não entendo', 'Gosto disso'], correctIndex: 1, explanation: 'Мне интересно = Acho interessante.' }
        ]
    ),

    // Módulo 21
    criarModuloA2Handcrafted(
        'ru_a2_mod_21',
        'Módulo 21: Спорт и Здоровый образ жизни (Esportes)',
        'Diferencie a regência do verbo Играть: Играть в + Acusativo (para esportes) vs. Играть на + Preposicional (para instrumentos).',
        'Aprenda a usar a preposição correta de acordo com a modalidade esportiva ou musical.',
        'Я играю в футбол и играю на гитаре.',
        [
            { title: 'Играть в + Acusativo (Esportes e Jogos)', rule: 'Para esportes, jogos e modalidades coletivas, usa-se o verbo Играть com a preposição В + Acusativo.', formula: 'Играть в + [Esporte no Acusativo]', example: 'Играть в футбол / Играть в хоккей / Играть в шахматы', exampleTranslation: 'Jogar futebol / Jogar hóquei / Jogar xadrez' },
            { title: 'Играть на + Preposicional (Instrumentos)', rule: 'Para tocar instrumentos musicais, usa-se Играть com a preposição НА + Preposicional.', formula: 'Играть на + [Instrumento no Preposicional]', example: 'Играть на гитаре / Играть на пианино', exampleTranslation: 'Tocar violão/guitarra / Tocar piano' }
        ],
        [
            { type: 'vocab', word: 'Футбол', romaji: 'Futbol', translation: 'Futebol', audio: 'Футбол', dica: 'Esporte popular na Rússia.' },
            { type: 'vocab', word: 'Хоккей', romaji: 'Khokkey', translation: 'Hóquei no gelo', audio: 'Хоккей', dica: 'Esporte nacional de inverno da Rússia.' },
            { type: 'vocab', word: 'Гитаре', romaji: 'Gitare', translation: 'Violão / Guitarra (preposicional)', audio: 'Гитаре', dica: 'Tocar violão = играть на гитаре.' },
            { type: 'vocab', word: 'Пианино', romaji: 'Pianino', translation: 'Piano (indeclinável)', audio: 'Пианино', dica: 'Tocar piano = играть на пианино.' },
            { type: 'vocab', word: 'Спорт', romaji: 'Sport', translation: 'Esporte', audio: 'Спорт', dica: 'Atividade física.' }
        ],
        [
            { sentence: 'Зимой мы играем в хоккей.', translation: 'No inverno nós jogamos hóquei no gelo.', tokens: ['Зимой', 'мы', 'играем', 'в', 'хоккей.'], audio: 'Зимой мы играем в хоккей.' },
            { sentence: 'Она умеет играть на гитаре.', translation: 'Ela sabe tocar violão.', tokens: ['Она', 'умеет', 'играть', 'на', 'гитаре.'], audio: 'Она умеет играть на гитаре.' }
        ],
        [
            { speaker: 'Maxim', text: 'Ты играешь в футбол?', translation: 'Você joga futebol?', audio: 'Ты играешь в футбол?' },
            { speaker: 'Igor', text: 'Нет, я играю на гитаре.', translation: 'Não, eu toco violão.', audio: 'Нет, я играю на гитаре.' }
        ],
        [
            { q: 'Qual preposição e caso usam-se para ESPORTES com o verbo играть?', options: ['В + Acusativo', 'На + Preposicional', 'С + Instrumental', 'Из + Genitivo'], correctIndex: 0, explanation: 'Esportes usam В + Acusativo (играть в футбол).' },
            { q: 'Qual preposição e caso usam-se para INSTRUMENTOS MUSICAIS com o verbo играть?', options: ['В + Acusativo', 'На + Preposicional', 'С + Instrumental', 'К + Dativo'], correctIndex: 1, explanation: 'Instrumentos usam На + Preposicional (играть на гитаре).' },
            { q: 'Como se diz "Jogar hóquei no gelo"?', options: ['Играть в хоккей', 'Играть на хоккее', 'Играть с хоккеем', 'Играть хоккей'], correctIndex: 0, explanation: 'Играть в хоккей.' },
            { q: 'Как se diz "Tocar violão"?', options: ['Играть в гитару', 'Играть на гитаре', 'Играть гитару', 'Играть с гитарой'], correctIndex: 1, explanation: 'Играть на гитаре.' },
            { q: 'Esporte nacional de inverno mais popular da Rússia?', options: ['Futebol', 'Hóquei no gelo (Хоккей)', 'Basquete', 'Vôlei'], correctIndex: 1, explanation: 'O hóquei no gelo é paixão nacional na Rússia.' }
        ]
    ),

    // Módulo 22
    criarModuloA2Handcrafted(
        'ru_a2_mod_22',
        'Módulo 22: История и Символы (Símbolos e História da Rússia)',
        'Conheça a história russa, seus símbolos nacionais e aprenda os números ordinais para séculos (Век).',
        'Domine o uso dos numerais ordinais (первый, второй...) e os séculos no Caso Preposicional (В XIX веке).',
        'Москва — древний город с богатой историей.',
        [
            { title: 'Séculos no Preposicional (В ... веке)', rule: 'Para se referir a fatos históricos ocorridos em determinado século, usa-se o número ordinal no Caso Preposicional seguido de "веке".', formula: 'В + [Número Ordinal no Preposicional] + веке', example: 'В девятнадцатом веке (В XIX веке).', exampleTranslation: 'No século XIX.' },
            { title: 'Símbolos Nacionais Russos', rule: 'A bandeira tricolor (белый, синий, красный), o brasão da águia bicéfala (двуглавый орёл) e o Kremlin (Кремль) são os símbolos maiores da federação.', formula: 'Флаг (Bandeira) / Кремль (Kremlin) / История (História)', example: 'Кремль — символ Москвы.', exampleTranslation: 'O Kremlin é o símbolo de Moscou.' }
        ],
        [
            { type: 'vocab', word: 'История', romaji: 'Istoriya', translation: 'História', audio: 'История', dica: 'Substantivo de trajetória histórica ou conto.' },
            { type: 'vocab', word: 'Век', romaji: 'Vek', translation: 'Século', audio: 'Век', dica: 'Período de 100 anos (no preposicional: в веке).' },
            { type: 'vocab', word: 'Символ', romaji: 'Simvol', translation: 'Símbolo', audio: 'Символ', dica: 'Emblema representativo.' },
            { type: 'vocab', word: 'Флаг', romaji: 'Flag', translation: 'Bandeira', audio: 'Флаг', dica: 'Bandeira nacional.' },
            { type: 'vocab', word: 'Россия', romaji: 'Rossiya', translation: 'Rússia', audio: 'Россия', dica: 'Nome do país no Nominativo.' }
        ],
        [
            { sentence: 'Москва имеет очень богатую историю.', translation: 'Moscou tem uma história muito rica.', tokens: ['Москва', 'имеет', 'очень', 'богатую', 'историю.'], audio: 'Москва имеет очень богатую историю.' },
            { sentence: 'Кремль — это древний символ России.', translation: 'O Kremlin é um antigo símbolo da Rússia.', tokens: ['Кремль', '—', 'это', 'древний', 'символ', 'России.'], audio: 'Кремль — это древний символ России.' }
        ],
        [
            { speaker: 'Guia', text: 'В каком веке был построен этот собор?', translation: 'Em qual século foi construída esta catedral?', audio: 'В каком веке был построен этот собор?' },
            { speaker: 'Turista', text: 'В шестнадцатом веке.', translation: 'No século XVI.', audio: 'В шестнадцатом веке.' }
        ],
        [
            { q: 'O que significa a palavra "Век" na história?', options: ['Ano', 'Século', 'Mês', 'Dia'], correctIndex: 1, explanation: 'Век = Século.' },
            { q: 'Como se diz "No século XIX" no Preposicional?', options: ['В девятнадцатый век', 'В девятнадцатом веке', 'В девятнадцатого века', 'В девятнадцатому веку'], correctIndex: 1, explanation: 'В девятнадцатом веке.' },
            { q: 'O que é o "Кремль"?', options: ['Uma montanha da Sibéria', 'Fortaleza histórica e sede do governo em Moscou', 'Um lago', 'Um prato típico'], correctIndex: 1, explanation: 'Fortaleza histórica no centro de Moscou.' },
            { q: 'Cores da bandeira da Rússia (Флаг)?', options: ['Verde, amarelo, azul', 'Branco, azul, vermelho', 'Preto, vermelho, amarelo', 'Azul e amarelo'], correctIndex: 1, explanation: 'Branco, azul e vermelho.' },
            { q: 'Traduza: "История"', options: ['Geografia', 'História', 'Ciência', 'Matemática'], correctIndex: 1, explanation: 'История = História.' }
        ]
    ),

    // Módulo 23
    criarModuloA2Handcrafted(
        'ru_a2_mod_23',
        'Módulo 23: Revisão Geral A2',
        'Consolide os conteúdos gramaticais e práticos fundamentais do Nível A2.',
        'Recapitule o Passado (-л/-ла), o Futuro Composto (Буду), os aspectos verbais (НСВ/СВ), o Acusativo e o Genitivo.',
        'Поздравляем! Вы прошли весь курс уровня А2.',
        [
            { title: 'Resumo dos Tempos e Aspectos A2', rule: 'Revisão: Passado com sufixo -л, Futuro composto com Буду e distinção de aspecto (НСВ processo vs. СВ resultado).', formula: 'Прошлое (-л) / Будущее (Буду+) / Аспект (НСВ vs СВ)', example: 'Я читал ➔ Я прочитал ➔ Я буду читать', exampleTranslation: 'Eu lia ➔ Eu li (concluí) ➔ Eu lerei' },
            { title: 'Resumo dos Casos A2', rule: 'Revisão: Acusativo Feminino (-у/-ю), Acusativo Masculino Animado (-а/-я) e Genitivo de Ausência (У меня нет...).', formula: 'Acusativo (Objeto) vs. Genitivo (Ausência/Posse)', example: 'Я знаю друга. У меня нет времени.', exampleTranslation: 'Conheço o amigo. Não tenho tempo.' }
        ],
        [
            { type: 'vocab', word: 'Прошлое', romaji: 'Proshloye', translation: 'O Passado', audio: 'Прошлое', dica: 'Revisão A2: Tempo passado.' },
            { type: 'vocab', word: 'Будущее', romaji: 'Buduscheye', translation: 'O Futuro', audio: 'Будущее', dica: 'Revisão A2: Tempo futuro.' },
            { type: 'vocab', word: 'У меня нет', romaji: 'U menya net', translation: 'Eu não tenho...', audio: 'У меня нет', dica: 'Revisão A2: Ausência + Genitivo.' },
            { type: 'vocab', word: 'Заниматься', romaji: 'Zanimat-sya', translation: 'Praticar / Dedicar-se', audio: 'Заниматься', dica: 'Revisão A2: Verbo com Instrumental.' },
            { type: 'vocab', word: 'Помогите', romaji: 'Pomogite', translation: 'Socorro! / Me ajudem!', audio: 'Помогите', dica: 'Revisão A2: Imperativo de emergência.' }
        ],
        [
            { sentence: 'Раньше я не говорил по-русски, а теперь говорю хорошо.', translation: 'Antes eu não falava russo, e agora falo bem.', tokens: ['Раньше', 'я', 'не', 'говорил', 'по-русски,', 'а', 'теперь', 'говорю', 'хорошо.'], audio: 'Раньше я не говорил по-русски, а теперь говорю хорошо.' },
            { sentence: 'В будущем я буду жить и работать в России.', translation: 'No futuro eu vou morar e trabalhar na Rússia.', tokens: ['В', 'будущем', 'я', 'буду', 'жить', 'и', 'работать', 'в', 'России.'], audio: 'В будущем я буду жить и работать в России.' }
        ],
        [
            { speaker: 'Professor', text: 'Вы готовы к итоговому тесту А2?', translation: 'Vocês estão prontos para o teste final A2?', audio: 'Вы готовы к итоговому тесту А2?' },
            { speaker: 'Aluno', text: 'Да, мы отлично повторили весь материал!', translation: 'Sim, nós revisamos perfeitamente todo o material!', audio: 'Да, мы отлично повторили весь материал!' }
        ],
        [
            { q: 'Qual sufixo indica o passado feminino singular?', options: ['-л', '-ла', '-ло', '-ли'], correctIndex: 1, explanation: 'Feminino usa sufixo -ла.' },
            { q: 'Como se diz "Eu não tenho tempo"?', options: ['У меня нет время', 'У меня нет времени', 'Я не time', 'У меня не время'], correctIndex: 1, explanation: 'У меня нет времени.' },
            { q: 'Forma no futuro composto de "работать" para "Я"?', options: ['Я работаю', 'Я буду работать', 'Я работал', 'Я поработал'], correctIndex: 1, explanation: 'Я буду работать.' },
            { q: 'Qual caso gramatical é exigido pelo verbo "Заниматься"?', options: ['Acusativo', 'Genitivo', 'Instrumental', 'Preposicional'], correctIndex: 2, explanation: 'Заниматься exige Caso Instrumental.' },
            { q: 'Qual imperativo significa "Socorro / Me ajudem!"?', options: ['Помогите!', 'Здравствуйте!', 'Спасибо!', 'Скажите!'], correctIndex: 0, explanation: 'Помогите!' }
        ]
    ),

    // Módulo 24
    criarModuloA2Handcrafted(
        'ru_a2_mod_24',
        'Módulo 24: Desafio Final A2 (Expedição pela Rússia)',
        'Exame Integrado de Certificação do Nível A2 simulando uma expedição completa por Moscou, São Petersburgo, Lago Baikal e Transiberiana.',
        'Responda às 30 questões do teste integrado de fluência cotidiana para conquistar seu certificado do Nível A2!',
        'Добро пожаловать на итоговый экзамен уровня А2!',
        [
            { title: 'Certificação Interna Nível A2', rule: 'Ao concluir este teste integrado com sucesso, você terá domínios sólidos da gramática e conversação cotidiana do Nível A2.', formula: 'Comunicação Cotidiana (Nível A2 Concluído)', example: 'Поздравляем с успешным прохождением А2!', exampleTranslation: 'Parabéns pela conclusão com sucesso do A2!' },
            { title: 'Estruturas Fundamentais A2', rule: 'Passado (-л/-ла), Futuro (Буду+), Aspectos (НСВ/СВ), Acusativo, Genitivo, Instrumental e Expressões do Dia a Dia.', formula: 'Visão Geral do Nível A2 (Rumo ao Nível B1)', example: 'Я буду путешествовать по России.', exampleTranslation: 'Eu vou viajar pela Rússia.' }
        ],
        [
            { type: 'vocab', word: 'Путешествие', romaji: 'Puteshestviye', translation: 'Viagem / Expedição', audio: 'Путешествие', dica: 'Desafio A2: Aventura e viagem pela Rússia.' },
            { type: 'vocab', word: 'Россия', romaji: 'Rossiya', translation: 'Rússia', audio: 'Россия', dica: 'Desafio A2: País destino da viagem.' },
            { type: 'vocab', word: 'Поезд', romaji: 'Poyezd', translation: 'Trem', audio: 'Поезд', dica: 'Desafio A2: Transporte na Transiberiana.' },
            { type: 'vocab', word: 'Отель', romaji: 'Otel', translation: 'Hotel', audio: 'Отель', dica: 'Desafio A2: Hospedagem durante a viagem.' },
            { type: 'vocab', word: 'Поздравляем!', romaji: 'Pozdravlyayem!', translation: 'Parabéns!', audio: 'Поздравляем!', dica: 'Desafio A2: Felicitação pela conquista da fluência A2!' }
        ],
        [
            { sentence: 'Мы успешно завершили все модули уровня А2!', translation: 'Nós concluímos com sucesso todos os módulos do Nível A2!', tokens: ['Мы', 'успешно', 'завершили', 'все', 'модули', 'уровня', 'А2!'], audio: 'Мы успешно завершили все модули уровня А2!' },
            { sentence: 'Теперь я могу общаться на русском языке!', translation: 'Agora eu posso me comunicar na língua russa!', tokens: ['Теперь', 'я', 'могу', 'общаться', 'на', 'русском', 'языке!'], audio: 'Теперь я могу общаться на русском языке!' }
        ],
        [
            { speaker: 'Examinador', text: 'Вы готовы к финальному тесту?', translation: 'Você está pronto para o teste final?', audio: 'Вы готовы к финальному тесту?' },
            { speaker: 'Estudante', text: 'Да, я полностью готов к экзамену!', translation: 'Sim, estou totalmente pronto para o exame!', audio: 'Да, я полностью готов к экзамену!' }
        ],
        [
            { q: 'Qual sufixo do passado usa-se para o masculino singular em russo?', options: ['-л', '-ла', '-ло', '-ли'], correctIndex: 0, explanation: 'Masculino usa sufixo -л (ex: он читал).' },
            { q: 'Qual sufixo do passado usa-se para o feminino singular?', options: ['-л', '-ла', '-ло', '-ли'], correctIndex: 1, explanation: 'Feminino usa sufixo -ла (ex: она читала).' },
            { q: 'Qual sufixo do passado usa-se para o plural (они)?', options: ['-л', '-ла', '-ло', '-ли'], correctIndex: 3, explanation: 'Plural usa sufixo -ли (ex: они читали).' },
            { q: 'Como se forma o futuro composto de "работать" para "Я"?', options: ['Я работаю', 'Я буду работать', 'Я работал', 'Я поработал'], correctIndex: 1, explanation: 'Futuro composto: Я буду работать.' },
            { q: 'O que significa "Завтра"?', options: ['Ontem', 'Hoje', 'Amanhã', 'Agora'], correctIndex: 2, explanation: 'Завтра = Amanhã.' },
            { q: 'Qual aspecto verbal foca no RESULTADO da ação concluída?', options: ['Imperfeito (НСВ)', 'Perfeito (СВ)', 'Presente', 'Futuro composto'], correctIndex: 1, explanation: 'O aspecto Perfeito (СВ) foca no resultado final.' },
            { q: 'Qual é a forma no Acusativo de "Книга" (livro)?', options: ['Книга', 'Книге', 'Книгу', 'Книги'], correctIndex: 2, explanation: 'Feminino em -а vira -у: Книгу.' },
            { q: 'Qual é a forma no Acusativo de "Друг" em "Eu vejo o amigo"?', options: ['Друг', 'Друга', 'Другу', 'Другом'], correctIndex: 1, explanation: 'Masculino animado recebe -а: Друга.' },
            { q: 'Qual caso gramatical é exigido após a palavra de ausência "нет"?', options: ['Acusativo', 'Genitivo', 'Preposicional', 'Dativo'], correctIndex: 1, explanation: 'Ausência exige Caso Genitivo.' },
            { q: 'Como se diz "Eu não tenho tempo" em russo?', options: ['У меня нет время', 'У меня нет времени', 'Я не время', 'У меня не время'], correctIndex: 1, explanation: 'У меня нет времени.' },
            { q: 'Qual forma de "ano" usa-se após o número 3 (3 ___)?', options: ['Год', 'Года', 'Лет', 'Году'], correctIndex: 1, explanation: 'Após 2,3,4 usa-se Genitivo Singular: Года.' },
            { q: 'Qual forma de "ano" usa-se após o número 20 (20 ___)?', options: ['Год', 'Года', 'Лет', 'Годами'], correctIndex: 2, explanation: 'Após 5+ usa-se Genitivo Plural: Лет.' },
            { q: 'Qual caso gramatical é exigido pelo verbo "Заниматься"?', options: ['Acusativo', 'Instrumental', 'Genitivo', 'Dativo'], correctIndex: 1, explanation: 'Заниматься exige Caso Instrumental.' },
            { q: 'Como se diz "Praticar esportes" em russo?', options: ['Заниматься спорт', 'Заниматься спортом', 'Заниматься спорта', 'Заниматься спорту'], correctIndex: 1, explanation: 'Заниматься спортом.' },
            { q: 'Como se felicita alguém pelo Ano Novo em russo?', options: ['С Новым Годом!', 'С Днём Рождения!', 'С праздником!', 'Пока!'], correctIndex: 0, explanation: 'С Новым Годом!' },
            { q: 'Qual é o comparativo de "дорогой" (caro)?', options: ['Дороже', 'Дешевле', 'Лучше', 'Хуже'], correctIndex: 0, explanation: 'Дорогой ➔ Дороже (mais caro).' },
            { q: 'Qual palavra significa "do que" em comparações ("mais caro do que...")?', options: ['Как', 'Что', 'Чем', 'И'], correctIndex: 2, explanation: 'Чем = Do que.' },
            { q: 'Qual adjetivo significa "Inteligente"?', options: ['Добрый', 'Умный', 'Высокий', 'Старый'], correctIndex: 1, explanation: 'Умный = Inteligente.' },
            { q: 'O que é uma "Дача" na cultura russa?', options: ['Apartamento urbano', 'Casa de campo tradicional', 'Restaurante', 'Estação de metrô'], correctIndex: 1, explanation: 'Casa de campo russa tradicional.' },
            { q: 'Qual expressão usa-se ao atender o telefone ("Pode falar / Estou ouvindo")?', options: ['Привет', 'Слушаю', 'Пока', 'Спасибо'], correctIndex: 1, explanation: 'Слушаю = Pode falar / Estou ouvindo.' },
            { q: 'Qual expressão informal é usada para propor uma ação ("Bora/Vamos!")?', options: ['Спасибо', 'Давай', 'Извините', 'Пока'], correctIndex: 1, explanation: 'Давай = Bora / Vamos!' },
            { q: 'Qual verbo usa-se para ir a um lugar A PÉ?', options: ['Ехать', 'Идти', 'Лететь', 'Плыть'], correctIndex: 1, explanation: 'Идти = Ir a pé.' },
            { q: 'Qual verbo usa-se para ir a um lugar DE VEÍCULO (carro, trem)?', options: ['Идти', 'Ехать', 'Гулять', 'Стоять'], correctIndex: 1, explanation: 'Ехать = Ir de veículo.' },
            { q: 'Onde fica o mundialmente famoso Teatro Bolshoi (Большой театр)?', options: ['São Petersburgo', 'Moscou', 'Kazan', 'Sochi'], correctIndex: 1, explanation: 'O Bolshoi fica em Moscou.' },
            { q: 'Como se diz "No inverno" em russo (advérbio temporal)?', options: ['Зима', 'Зимой', 'Зиме', 'Зимою'], correctIndex: 1, explanation: 'Advérbio no Instrumental: Зимой.' },
            { q: 'Qual fórmula de encerramento significa "Atenciosamente" em e-mails formais?', options: ['Обнимаю', 'С уважением', 'Пока', 'Привет'], correctIndex: 1, explanation: 'С уважением = Atenciosamente.' },
            { q: 'Qual imperativo de emergência significa "Socorro / Me ajudem!"?', options: ['Помогите!', 'Здравствуйте!', 'Спасибо!', 'Скажите!'], correctIndex: 0, explanation: 'Помогите!' },
            { q: 'Como se diz "Estou triste" usando a construção Dativo Impessoal?', options: ['Я грустный', 'Мне грустно', 'Я в грусти', 'Меня грустно'], correctIndex: 1, explanation: 'Мне грустно.' },
            { q: 'Qual regência usa-se para ESPORTES com o verbo играть (jogar futebol)?', options: ['В + Acusativo', 'На + Preposicional', 'С + Instrumental', 'Из + Genitivo'], correctIndex: 0, explanation: 'Esportes usam В + Acusativo (играть в футбол).' },
            { q: 'Qual palavra significa "Parabéns!" ao concluir uma grande conquista?', options: ['Поздравляем!', 'Спасибо', 'Пожалуйста', 'Здравствуйте'], correctIndex: 0, explanation: 'Поздравляем! = Parabéns!' }
        ]
    )
);

if (typeof window !== "undefined") {
    window.CURSO_RUSSO_A2_DADOS = CURSO_RUSSO_A2_DADOS;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { CURSO_RUSSO_A2_DADOS };
}
