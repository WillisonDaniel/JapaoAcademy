/**
 * Banco de Dados Central do Dicionário & Glossário de Espanhol (A1 a B2)
 * Contém Alfabeto (27 letras), Falsos Cognatos, Heterotónicos, Regionalismos por País, Vocabulário e Gramática.
 */

const DICIONARIO_ESPANHOL_DADOS = {
    // 1. Grid do Alfabeto Espanhol (27 Letras - A a Z + Ñ)
    alfabeto: [
        { letter: "A a", name: "a", phonetic: "/a/", example: "Agua", translation: "Água" },
        { letter: "B b", name: "be", phonetic: "/be/", example: "Barco", translation: "Barco" },
        { letter: "C c", name: "ce", phonetic: "/θe/ ou /se/", example: "Casa", translation: "Casa" },
        { letter: "D d", name: "de", phonetic: "/de/", example: "Día", translation: "Dia" },
        { letter: "E e", name: "e", phonetic: "/e/", example: "Estrella", translation: "Estrela" },
        { letter: "F f", name: "efe", phonetic: "/efe/", example: "Flor", translation: "Flor" },
        { letter: "G g", name: "ge", phonetic: "/xe/ ou /he/", example: "Gato", translation: "Gato" },
        { letter: "H h", name: "hache", phonetic: "/atʃe/ (muda)", example: "Hotel", translation: "Hotel" },
        { letter: "I i", name: "i", phonetic: "/i/", example: "Isla", translation: "Ilha" },
        { letter: "J j", name: "jota", phonetic: "/xota/", example: "Jardín", translation: "Jardim" },
        { letter: "K k", name: "ka", phonetic: "/ka/", example: "Kilo", translation: "Quilo" },
        { letter: "L l", name: "ele", phonetic: "/ele/", example: "Luna", translation: "Lua" },
        { letter: "M m", name: "eme", phonetic: "/eme/", example: "Mesa", translation: "Mesa" },
        { letter: "N n", name: "ene", phonetic: "/ene/", example: "Nube", translation: "Nuvem" },
        { letter: "Ñ ñ", name: "eñe", phonetic: "/eɲe/", example: "Niño", translation: "Criança / Menino" },
        { letter: "O o", name: "o", phonetic: "/o/", example: "Ojo", translation: "Olho" },
        { letter: "P p", name: "pe", phonetic: "/pe/", example: "Pan", translation: "Pão" },
        { letter: "Q q", name: "cu", phonetic: "/ku/", example: "Queso", translation: "Queijo" },
        { letter: "R r", name: "ere / erre", phonetic: "/ere/", example: "Río", translation: "Rio" },
        { letter: "S s", name: "ese", phonetic: "/ese/", example: "Sol", translation: "Sol" },
        { letter: "T t", name: "te", phonetic: "/te/", example: "Tren", translation: "Trem" },
        { letter: "U u", name: "u", phonetic: "/u/", example: "Uva", translation: "Uva" },
        { letter: "V v", name: "uve", phonetic: "/ube/", example: "Viento", translation: "Vento" },
        { letter: "W w", name: "uve doble", phonetic: "/ube doble/", example: "Wifi", translation: "Wi-Fi" },
        { letter: "X x", name: "equis", phonetic: "/ekis/", example: "Éxito", translation: "Sucesso" },
        { letter: "Y y", name: "i griega / ye", phonetic: "/je/ ou /i/", example: "Ya", translation: "Já" },
        { letter: "Z z", name: "zeta", phonetic: "/θeta/ ou /seta/", example: "Zapato", translation: "Sapato" }
    ],

    // 2. Cards de Falsos Cognatos (Falsos Amigos Traiçoeiros) - Populado dinamicamente pela Trilha Oficial
    // 3. Cards de Heterotónicos (Compilado dinamicamente do Banco Centralizado de Fonética)
    heterotonicos: [],

    // 4. Tabela de Regionalismos por País (Compilado dinamicamente do Banco Centralizado de Fonética)
    regionalismos: [],

    // 5. Vocabulário A1-B2 Compilado
    vocabulario: [
        { word: "Hola", meaning: "Olá", level: "A1", example: "¡Hola! ¿Cómo estás?", audio: "Hola" },
        { word: "Buenos días", meaning: "Bom dia", level: "A1", example: "Buenos días a todos.", audio: "Buenos días" },
        { word: "Por favor", meaning: "Por favor", level: "A1", example: "Un café, por favor.", audio: "Por favor" },
        { word: "Gracias", meaning: "Obrigado(a)", level: "A1", example: "Muchas gracias por tu ayuda.", audio: "Gracias" },
        { word: "Desayuno", meaning: "Café da manhã", level: "A2", example: "Tomamos el desayuno a las ocho.", audio: "Desayuno" },
        { word: "Alojamiento", meaning: "Hospedagem / Alojamento", level: "A2", example: "Buscamos un alojamiento en el centro.", audio: "Alojamiento" },
        { word: "Ojalá", meaning: "Tomara que / Quem dera", level: "B1", example: "¡Ojalá apruebes el examen!", audio: "Ojalá" },
        { word: "Sin embargo", meaning: "No entanto / Contudo", level: "B1", example: "Estudió mucho; sin embargo, no pasó.", audio: "Sin embargo" },
        { word: "Hacer hincapié", meaning: "Enfatizar / Destacar", level: "B2", example: "Quisiera hacer hincapié en la importancia de la educación.", audio: "Hacer hincapié" },
        { word: "Pase lo que pase", meaning: "Aconteça o que acontecer", level: "B2", example: "Seguiremos adelante pase lo que pase.", audio: "Pase lo que pase" }
    ],

    // 6. Biblioteca de Gramática A1-B2
    gramatica: [
        { title: "Verbos SER vs ESTAR", level: "A1", rule: "Usa-se SER para características permanentes e identidade. Usa-se ESTAR para localizações e estados temporários.", formula: "SER (identidade) vs ESTAR (estado/local)", example: "Ella es alta (SER) pero hoy está cansada (ESTAR)." },
        { title: "Pretérito Indefinido vs Imperfecto", level: "A2", rule: "Indefinido indica ações pontuais e concluídas no passado. Imperfecto descreve hábitos, contexto ou ações em curso.", formula: "Indefinido (ação pontual) + Imperfecto (descrição/hábito)", example: "Ayer llovió (Indefinido) mientras caminaba (Imperfecto)." },
        { title: "Presente de Subjuntivo para Desejos", level: "B1", rule: "Expressa desejos, esperanças e vontades após expressões como 'Ojalá', 'Espero que' e 'Quiero que'.", formula: "Verbo de Desejo + que + Subjuntivo", example: "Espero que tengas un excelente viaje." },
        { title: "Condicionais Irreais do Passado", level: "B2", rule: "Expressa hipóteses e arrependimentos no passado que não aconteceram.", formula: "Si + Pluscuamperfecto de Subj. ➔ Condicional Compuesto", example: "Si hubiera sabido la verdad, habría actuado diferente." }
    ]
};

// Aliases para compatibilidade total com testes de auditoria
DICIONARIO_ESPANHOL_DADOS.falsosAmigos = DICIONARIO_ESPANHOL_DADOS.falsosCognatos;
const DADOS_ESPANHOL_DICIONARIO = DICIONARIO_ESPANHOL_DADOS;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DICIONARIO_ESPANHOL_DADOS;
}
if (typeof window !== 'undefined') {
    window.DICIONARIO_ESPANHOL_DADOS = DICIONARIO_ESPANHOL_DADOS;
    window.DADOS_ESPANHOL_DICIONARIO = DADOS_ESPANHOL_DICIONARIO;
}
