// Preguntas y respuestas mejoradas
const questions = [
    {
        question: "¿Qué cualidad valoras más en ti mismo?",
        options: [
            { text: "Lealtad a mis amigos y sueños", value: ["luffy", "zoro", "nami", "usopp", "sanji", "chopper", "robin", "franky", "brook", "jinbe", "ace", "sabo", "shanks"] },
            { text: "Fuerza, habilidad y disciplina", value: ["zoro", "luffy", "sanji", "jinbe", "franky", "brook", "kizaru", "fujitora", "mihawk", "akainu"] },
            { text: "Inteligencia y estrategia", value: ["nami", "robin", "usopp", "law", "doflamingo", "crocodile", "drake"] },
            { text: "Creatividad e inventiva", value: ["franky", "usopp", "chopper", "vegapunk"] },
            { text: "Justicia y orden", value: ["akainu", "kizaru", "fujitora", "smoker", "garp", "sengoku"] }
        ]
    },
    {
        question: "¿Cómo afrontas los desafíos?",
        options: [
            { text: "De frente, sin miedo", value: ["luffy", "zoro", "sanji", "ace", "shanks", "akainu"] },
            { text: "Con un plan bien pensado", value: ["nami", "robin", "law", "doflamingo", "crocodile", "drake", "sengoku"] },
            { text: "Improvisando sobre la marcha", value: ["usopp", "franky", "brook", "kizaru"] },
            { text: "Con cuidado y precaución", value: ["chopper", "jinbe", "smoker", "fujitora"] },
            { text: "Usando cualquier medio necesario", value: ["akainu", "blackbeard", "crocodile", "lucci"] }
        ]
    },
    {
        question: "¿Qué rol prefieres en un grupo?",
        options: [
            { text: "Líder", value: ["luffy", "law", "shanks", "blackbeard", "doflamingo", "dragon", "akainu", "sengoku"] },
            { text: "Guerrero fuerte", value: ["zoro", "sanji", "jinbe", "ace", "mihawk", "kizaru", "fujitora"] },
            { text: "Estratega/táctico", value: ["nami", "robin", "law", "sabo", "crocodile", "drake"] },
            { text: "Apoyo o especialista", value: ["chopper", "franky", "usopp", "brook", "vegapunk"] },
            { text: "Observador/independiente", value: ["mihawk", "kuma", "aokiji", "smoker"] }
        ]
    },
    {
        question: "¿Cuál es tu sueño más grande?",
        options: [
            { text: "Ser el mejor en algo", value: ["zoro", "luffy", "sanji", "mihawk", "akainu"] },
            { text: "Conocer el mundo y sus secretos", value: ["nami", "robin", "brook", "vegapunk"] },
            { text: "Proteger a los que quiero", value: ["chopper", "jinbe", "sanji", "ace", "sabo", "garp"] },
            { text: "Inventar algo revolucionario", value: ["franky", "usopp", "vegapunk"] },
            { text: "Cambiar el sistema establecido", value: ["dragon", "sabo", "akainu", "doflamingo"] }
        ]
    },
    {
        question: "¿Cómo te comportas en situaciones difíciles?",
        options: [
            { text: "Mantengo la calma y animo a los demás", value: ["luffy", "shanks", "jinbe", "fujitora", "garp"] },
            { text: "Me enfoco en encontrar una solución lógica", value: ["nami", "robin", "law", "sengoku", "drake"] },
            { text: "Me pongo nervioso pero sigo adelante", value: ["usopp", "chopper"] },
            { text: "Actúo con determinación sin importar el peligro", value: ["zoro", "sanji", "franky", "ace", "sabo", "akainu"] },
            { text: "Analizo cómo sacar provecho de la situación", value: ["blackbeard", "doflamingo", "crocodile"] }
        ]
    },
    {
        question: "¿Qué tipo de humor tienes?",
        options: [
            { text: "Tonto y alegre", value: ["luffy", "chopper", "franky", "kizaru"] },
            { text: "Sarcástico/irónico", value: ["zoro", "sanji", "law", "aokiji", "mihawk"] },
            { text: "Chistoso y payaso", value: ["usopp", "brook"] },
            { text: "Serio pero con toques de humor", value: ["nami", "robin", "jinbe", "smoker", "fujitora"] },
            { text: "Siniestro/manipulador", value: ["doflamingo", "blackbeard", "crocodile"] }
        ]
    },
    {
        question: "¿Cuál es tu relación con la comida?",
        options: [
            { text: "¡Comer es lo mejor del mundo!", value: ["luffy", "sanji", "chopper"] },
            { text: "Me gusta pero con moderación", value: ["zoro", "nami", "robin", "law"] },
            { text: "Disfruto cocinando para otros", value: ["sanji"] },
            { text: "Tengo una dieta especial", value: ["chopper", "brook"] },
            { text: "No le doy mucha importancia", value: ["akainu", "mihawk", "doflamingo"] }
        ]
    },
    {
        question: "¿Qué harías si un amigo está en peligro?",
        options: [
            { text: "Lo ayudaría sin pensarlo", value: ["luffy", "zoro", "sanji", "ace", "shanks"] },
            { text: "Analizaría la situación primero", value: ["nami", "robin", "law", "sengoku", "drake"] },
            { text: "Intentaría ayudar pero con miedo", value: ["usopp", "chopper"] },
            { text: "Buscaría refuerzos o una solución creativa", value: ["jinbe", "franky", "brook"] },
            { text: "Evaluaría si vale la pena el riesgo", value: ["blackbeard", "doflamingo", "crocodile"] }
        ]
    },
    {
        question: "¿Qué poder te gustaría tener?",
        options: [
            { text: "Fuerza física sobrehumana", value: ["zoro", "luffy", "sanji", "jinbe", "garp"] },
            { text: "Una Fruta del Diablo poderosa", value: ["luffy", "ace", "law", "doflamingo", "crocodile", "akainu", "kizaru"] },
            { text: "Haki avanzado", value: ["shanks", "mihawk", "rayleigh", "garp"] },
            { text: "Inteligencia/inventiva superior", value: ["vegapunk", "franky", "usopp"] },
            { text: "Habilidades de combate únicas", value: ["sanji", "brook", "lucci"] }
        ]
    },
    {
        question: "¿Cómo ves el mundo?",
        options: [
            { text: "Como un lugar lleno de aventuras por descubrir", value: ["luffy", "roger", "shanks", "brook"] },
            { text: "Como un sistema corrupto que debe cambiar", value: ["dragon", "sabo", "robin", "law"] },
            { text: "Como un lugar donde solo los fuertes sobreviven", value: ["zoro", "akainu", "mihawk", "blackbeard"] },
            { text: "Como un rompecabezas complejo por entender", value: ["vegapunk", "robin", "law"] },
            { text: "Como un lugar que debe ser ordenado y controlado", value: ["akainu", "sengoku", "doflamingo"] }
        ]
    }
];

// Personajes ampliados con más detalles
const characters = {
    // Piratas Sombrero de Paja
    luffy: {
        name: "Monkey D. Luffy",
        image: "https://i.pinimg.com/736x/09/3c/48/093c4838360d6d06501e98fdc32f4648.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Gomu Gomu no Mi (Paramecia)",
        haki: "Conquistador, Armadura, Observación",
        bounty: "3,000,000,000 Berries",
        description: "¡Eres Luffy! El futuro Rey de los Piratas. Como capitán de los Sombrero de Paja, tu sueño es ser el más libre del mundo. Tu actitud despreocupada pero determinada inspira lealtad en tus amigos. Aunque a veces actúas sin pensar, tu instinto rara vez te falla. Tu poder viene de la Fruta Gomu Gomu y tu Haki avanzado."
    },
    zoro: {
        name: "Roronoa Zoro",
        image: "https://i.pinimg.com/736x/56/07/9c/56079c474a35dcfd08e626a2fa2b28bf.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Ninguna",
        haki: "Armadura, Observación",
        bounty: "1,111,000,000 Berries",
        description: "¡Eres Zoro! El espadachín más fuerte que aspira a ser el mejor del mundo. Tu disciplina y ética de trabajo son legendarias. Como combatiente principal de los Sombrero de Paja, tu estilo de tres espadas es único. Aunque tu sentido de dirección es pésimo, nadie duda de tu fuerza y lealtad al capitán."
    },
    nami: {
        name: "Nami",
        image: "https://i.pinimg.com/736x/c5/71/14/c571147d4291dbb0bae0a44535758ed8.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Ninguna",
        haki: "Ninguno conocido",
        bounty: "366,000,000 Berries",
        description: "¡Eres Nami! La brillante navegante con un gran corazón. Tu inteligencia y habilidades cartográficas son insuperables. Aunque al principio parecías interesada solo por el dinero, en realidad eres extremadamente leal. Tu Clima-Tact es un arma formidable que combina ciencia y creatividad."
    },
    usopp: {
        name: "Usopp",
        image: "https://i.pinimg.com/736x/27/05/3f/27053fd5aa22468c0779accc7385dba9.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Ninguna",
        haki: "Observación",
        bounty: "500,000,000 Berries",
        description: "¡Eres Usopp! El francotirador valiente a pesar de su miedo. Tus mentiras a menudo se hacen realidad, mostrando tu creatividad. Desarrollaste el Haki de Observación, permitiéndote disparar con precisión increíble. Aunque te asustas fácilmente, cuando se trata de proteger a tus amigos, encuentras coraje."
    },
    sanji: {
        name: "Sanji",
        image: "https://i.pinimg.com/736x/75/aa/c7/75aac75973bfaefd1bdece6f1c10f410.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Ninguna (pero modificado genéticamente)",
        haki: "Armadura, Observación",
        bounty: "1,032,000,000 Berries",
        description: "¡Eres Sanji! El cocinero caballeroso con patadas letales. Tu código de honor te impone no usar tus manos para pelear. Tus habilidades culinarias son legendarias y nunca niegas comida a quien la necesite. Tu estilo de pelea combina artes marciales con tu fuego interno, resultando en el Diable Jambe."
    },
    chopper: {
        name: "Tony Tony Chopper",
        image: "https://i.pinimg.com/736x/e5/03/b1/e503b1b174eba5bf760d019772e02716.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Hito Hito no Mi",
        haki: "Ninguno conocido",
        bounty: "1,000 Berries (malentendido)",
        description: "¡Eres Chopper! El adorable médico reno. Tu Fruta del Diablo te da habilidades humanas y múltiples transformaciones. Aunque te avergüenzan los elogios, eres un médico brillante. Tu inocencia y curiosidad te hacen querible, pero en batalla tus formas de combate son formidables."
    },
    robin: {
        name: "Nico Robin",
        image: "https://i.pinimg.com/736x/ab/de/10/abde10872e9b0d049d25259b96355051.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Hana Hana no Mi",
        haki: "Ninguno conocido",
        bounty: "930,000,000 Berries",
        description: "¡Eres Robin! La arqueóloga que puede leer los Poneglyphs. Tu Fruta del Diablo te permite florecer partes de tu cuerpo en cualquier superficie. Tras un pasado trágico, encontraste una familia con los Sombrero de Paja. Tu conocimiento de la historia perdida es crucial para encontrar el One Piece."
    },
    franky: {
        name: "Franky",
        image: "https://i.pinimg.com/736x/b1/45/28/b14528c261ec1b5377c7ffbe97247d2e.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Ninguna (es un cyborg)",
        haki: "Ninguno conocido",
        bounty: "394,000,000 Berries",
        description: "¡Eres Franky! El cyborg super ingeniero. Construiste el Thousand Sunny y mantienes el barco en perfecto estado. Tu actitud 'SUPER' y tu cuerpo lleno de armas secretas te hacen un oponente formidable. Aunque extravagante, tu corazón es grande y siempre estás dispuesto a ayudar."
    },
    brook: {
        name: "Brook",
        image: "https://i.pinimg.com/736x/80/e7/d7/80e7d76c1d103469f9aad4d745de1af1.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Yomi Yomi no Mi",
        haki: "Ninguno conocido",
        bounty: "383,000,000 Berries",
        description: "¡Eres Brook! El esqueleto músico con un espíritu joven. Tu Fruta del Diablo te devolvió a la vida, dándote habilidades únicas. Como músico de la tripulación, alegras a todos con tus canciones. Tu estilo de esgrima rápido y tu capacidad de afectar almas te hacen un combatiente único."
    },
    jinbe: {
        name: "Jinbe",
        image: "https://i.pinimg.com/736x/76/72/17/767217234eda1c4ede3ef5767475453f.jpg",
        faction: "Piratas Sombrero de Paja",
        devilFruit: "Ninguna",
        haki: "Armadura",
        bounty: "1,100,000,000 Berries",
        description: "¡Eres Jinbe! El caballero del mar. Como timonel de los Sombrero de Paja, tus habilidades de pelea de pez-hombre son excepcionales, especialmente en el agua. Eres sabio, sereno y mantienes la calma en cualquier situación. Tu sentido de la justicia y lealtad son inquebrantables."
    },
    
    // Otros Piratas
    law: {
        name: "Trafalgar D. Water Law",
        image: "https://i.pinimg.com/736x/78/2d/7e/782d7e4cf1dd61f5b46ef5026f1e5ccd.jpg",
        faction: "Piratas Heart",
        devilFruit: "Ope Ope no Mi",
        haki: "Armadura, Observación",
        bounty: "3,000,000,000 Berries",
        description: "¡Eres Law! El cirujano de la muerte. Tu Fruta del Diablo te permite crear un 'room' donde manipulas el espacio. Aunque frío en apariencia, valoras profundamente a tu tripulación. Tu inteligencia estratégica te hace un oponente peligroso. Formaste una alianza con Luffy para derrotar a Kaido."
    },
    kid: {
        name: "Eustass Kid",
        image: "https://i.pinimg.com/736x/4d/f9/6c/4df96c24b3e5069a3f70c88bcf181d25.jpg",
        faction: "Piratas Kid",
        devilFruit: "Jiki Jiki no Mi (Magnetismo)",
        haki: "Armadura, Conquistador",
        bounty: "3,000,000,000 Berries",
        description: "¡Eres Kid! Un supernova temperamental con poderes magnéticos. Tu actitud agresiva y desafiante te hace similar a Luffy, pero más violento. Como capitán de los Piratas Kid, no toleras traiciones. Tu Fruta del Diablo te permite controlar el magnetismo, creando construcciones metálicas gigantes."
    },
    shanks: {
        name: "Shanks el Pelirrojo",
        image: "https://i.pinimg.com/736x/a8/53/d7/a853d7b31f181c40b3e75762e629b95b.jpg",
        faction: "Piratas Pelirrojo",
        devilFruit: "Ninguna",
        haki: "Conquistador, Armadura, Observación",
        bounty: "4,048,900,000 Berries",
        description: "¡Eres Shanks! Uno de los Cuatro Emperadores. A pesar de tu poder inmenso, prefieres resolver conflictos diplomáticamente. Tu Haki de Conquistador es tan fuerte que puede afectar el entorno. Fuiste mentor de Luffy y le diste su icónico sombrero de paja."
    },
    blackbeard: {
        name: "Marshall D. Teach",
        image: "https://i.pinimg.com/736x/71/ef/67/71ef677e1bbc921fe790341f37a7d618.jpg",
        faction: "Piratas Blackbeard",
        devilFruit: "Yami Yami no Mi + Gura Gura no Mi",
        haki: "Desconocido (posiblemente todos)",
        bounty: "3,996,000,000 Berries",
        description: "¡Eres Blackbeard! El único conocido en poseer dos Frutas del Diablo. Tu ambición no tiene límites y planeaste meticulosamente tu ascenso al poder. Traicionaste a los Piratas Barbablanca para obtener la Fruta de la Oscuridad, y luego la del Terremoto. Ahora eres uno de los Cuatro Emperadores."
    },
    buggy: {
        name: "Buggy el Payaso",
        image: "https://i.pinimg.com/474x/f0/83/5a/f0835ad9d12868ccf8dc5023f7899172.jpg",
        faction: "Piratas Buggy / Cross Guild",
        devilFruit: "Bara Bara no Mi",
        haki: "Ninguno conocido",
        bounty: "3,189,000,000 Berries",
        description: "¡Eres Buggy! El payaso afortunado. Aunque no eres particularmente fuerte, tu suerte te ha llevado a ser considerado un Emperador. Tu Fruta del Diablo te permite separar tu cuerpo en partes. Recientemente formaste la Cross Guild con Mihawk y Crocodile, ofreciendo recompensas por Marines."
    },
    crocodile: {
        name: "Sir Crocodile",
        image: "https://i.pinimg.com/736x/0e/ed/30/0eed30edf26f5bffffcaab6008db735f.jpg",
        faction: "Cross Guild (anteriormente Baroque Works)",
        devilFruit: "Suna Suna no Mi (Arena)",
        haki: "Posiblemente Armadura",
        bounty: "1,965,000,000 Berries",
        description: "¡Eres Crocodile! El ex-Shichibukai que casi conquista Arabasta. Tu Fruta de la Arena te permite controlar y transformarte en arena. Tras ser derrotado por Luffy, reapareciste como co-líder de la Cross Guild. Tu personalidad fría y calculadora oculta una mente estratégica brillante."
    },
    doflamingo: {
        name: "Donquixote Doflamingo",
        image: "https://i.pinimg.com/736x/92/36/20/923620462bdbf8d001f967e6dcc6d73f.jpg",
        faction: "Familia Donquixote (encarcelado)",
        devilFruit: "Ito Ito no Mi (Hilos)",
        haki: "Conquistador, Armadura, Observación",
        bounty: "340,000,000 Berries (congelada)",
        description: "¡Eres Doflamingo! El ex-noble celestial que gobernó Dressrosa. Tu Fruta del Diablo te permite crear y controlar hilos afilados. Tu personalidad carismática pero sádica te hizo un villano memorable. Aunque ahora estás encarcelado, tu influencia en el mundo aún se siente."
    },
    mihawk: {
        name: "Dracule Mihawk",
        image: "https://i.pinimg.com/474x/ef/14/ce/ef14ce6989e67eea1ad53f433b0ce731.jpg",
        faction: "Cross Guild (anteriormente Shichibukai)",
        devilFruit: "Ninguna",
        haki: "Posiblemente todos",
        bounty: "3,590,000,000 Berries",
        description: "¡Eres Mihawk! El mejor espadachín del mundo. Wield Yoru, la espada negra más grande. Tu habilidad con la espada es legendaria, sirviendo como objetivo de Zoro. Aunque solitario por naturaleza, recientemente te uniste a la Cross Guild. Tu poder es comparable al de un Emperador."
    },
    boa: {
        name: "Boa Hancock",
        image: "https://i.pinimg.com/236x/fb/47/9a/fb479ac43c5c5cef89188d1cc42e326d.jpg",
        faction: "Piratas Kuja (ex-Shichibukai)",
        devilFruit: "Mero Mero no Mi (Amor)",
        haki: "Conquistador, Armadura, Observación",
        bounty: "1,659,000,000 Berries",
        description: "¡Eres Boa Hancock! La emperatriz pirata más bella. Tu Fruta del Diablo te permite petrificar a quienes sientan atracción por ti. Como líder de las Kuja, eres una de las pocas mujeres con Haki de Conquistador. Tu amor por Luffy te ha hecho más humana de lo que admites."
    },
    ace: {
        name: "Portgas D. Ace",
        image: "https://i.pinimg.com/474x/d4/c9/1d/d4c91d83ddee18daca6dd3c6e41c7cd7.jpg",
        faction: "Piratas Barbablanca (fallecido)",
        devilFruit: "Mera Mera no Mi (Fuego)",
        haki: "Armadura, Observación",
        bounty: "550,000,000 Berries",
        description: "¡Eres Ace! El hermano mayor de Luffy e hijo de Roger. Tu Fruta del Diablo te permitía crear y controlar fuego. Como comandante de la segunda división de los Barbablanca, eras amado por todos. Tu sentido del honor y lealtad eran inquebrantables, hasta tu trágico final en Marineford."
    },
    
    // Marines
    akainu: {
        name: "Sakazuki (Akainu)",
        image: "https://i.pinimg.com/474x/a6/23/b3/a623b35b3158b1850e6cba6112375ba7.jpg",
        faction: "Marines (Almirante de Flota)",
        devilFruit: "Magu Magu no Mi (Magma)",
        haki: "Armadura, Observación",
        bounty: "N/A (Marine)",
        description: "¡Eres Akainu! El actual Almirante de Flota de los Marines. Tu justicia absoluta no deja espacio para la compasión. Tu Fruta del Diablo te permite crear magma, una de las más destructivas. Fuiste responsable de la muerte de Ace y heridas graves de Aokiji en su duelo por el liderazgo."
    },
    kizaru: {
        name: "Borsalino (Kizaru)",
        image: "https://i.pinimg.com/236x/c3/e4/b6/c3e4b618394ebc74c9f6c8e3d093899c.jpg",
        faction: "Marines (Almirante)",
        devilFruit: "Pika Pika no Mi (Luz)",
        haki: "Armadura, Observación",
        bounty: "N/A (Marine)",
        description: "¡Eres Kizaru! El almirante más relajado pero peligroso. Tu Fruta de la Luz te da velocidad y poder de ataque increíbles. Aunque pareces distraído, eres un oponente formidable. Tu frase '¿Te has preguntado alguna vez si eres lo suficientemente rápido?' aterroriza a tus enemigos."
    },
    fujitora: {
        name: "Issho (Fujitora)",
        image: "https://i.pinimg.com/236x/18/d6/18/18d618651cbebdb5bf579041781d09bd.jpg",
        faction: "Marines (Almirante)",
        devilFruit: "Zushi Zushi no Mi (Gravedad)",
        haki: "Armadura, Observación",
        bounty: "N/A (Marine)",
        description: "¡Eres Fujitora! El almirante ciego con un fuerte sentido de justicia. Tu Fruta del Diablo te permite manipular la gravedad, convocando meteoritos del cielo. Aunque marine, criticas abiertamente el sistema de los Shichibukai. Prefieres no ver para juzgar a las personas por sus acciones, no apariencias."
    },
    garp: {
        name: "Monkey D. Garp",
        image: "https://i.pinimg.com/474x/dc/ad/39/dcad39ff4999df0a3f91acaea1088d32.jpg",
        faction: "Marines (Vicealmirante)",
        devilFruit: "Ninguna",
        haki: "Armadura, Observación (posiblemente Conquistador)",
        bounty: "N/A (Marine)",
        description: "¡Eres Garp! El Héroe de los Marines y abuelo de Luffy. Aunque podrías haber sido almirante, rechazaste el ascenso para mantener tu libertad. Tu fuerza física pura es legendaria, rivalizando con el mismo Roger. A pesar de ser marine, tu familia son piratas notorios, causándote conflicto interno."
    },
    smoker: {
        name: "Smoker",
        image: "https://i.pinimg.com/236x/56/6a/07/566a0762d116d091b1b035c3821f3c62.jpg",
        faction: "Marines (Vicealmirante)",
        devilFruit: "Moku Moku no Mi (Humo)",
        haki: "Armadura",
        bounty: "N/A (Marine)",
        description: "¡Eres Smoker! El marine que persiguió a Luffy desde East Blue. Tu Fruta del Diablo te permite transformarte en humo. Aunque inicialmente seguías la justicia absoluta, tras los eventos en Punk Hazard comenzaste a cuestionar las acciones de los Marines. Tu jitte de marino se especializa en atrapar usuarios de frutas del diablo."
    },
    sengoku: {
        name: "Sengoku el Buda",
        image: "https://i.pinimg.com/236x/2a/d5/44/2ad544de107699f202b50b189be9edb3.jpg",
        faction: "Marines (Ex-Almirante de Flota)",
        devilFruit: "Hito Hito no Mi, Modelo: Daibutsu",
        haki: "Conquistador, Armadura, Observación",
        bounty: "N/A (Marine)",
        description: "¡Eres Sengoku! El ex-Almirante de Flota conocido como 'El Buda'. Tu Fruta del Diablo te permite transformarte en un buda dorado gigante. Fuiste responsable de la estrategia en Marineford. Aunque retirado, sigues siendo una figura respetada. Tu pacifismo actual contrasta con tu dura reputación en servicio activo."
    },
    
    // Revolucionarios y otros
    dragon: {
        name: "Monkey D. Dragon",
        image: "https://i.pinimg.com/474x/f9/be/92/f9be92a0b755f5ad3fdc4441102381cc.jpg",
        faction: "Ejército Revolucionario",
        devilFruit: "Desconocida (posiblemente relacionada con clima)",
        haki: "Posiblemente todos",
        bounty: "Desconocida (la más alta?)",
        description: "¡Eres Dragon! El hombre más buscado del mundo y líder del Ejército Revolucionario. Padre de Luffy e hijo de Garp, tu objetivo es derrocar al Gobierno Mundial. Tu aparición en Loguetown mostró tu conexión con fenómenos climáticos extraños. Operas en las sombras, pero tu influencia se siente en todo el mundo."
    },
    sabo: {
        name: "Sabo",
        image: "https://i.pinimg.com/236x/89/6e/b3/896eb378920d810cbe42b06b5f3342b5.jpg",
        faction: "Ejército Revolucionario (Jefe de Estado Mayor)",
        devilFruit: "Mera Mera no Mi (Fuego)",
        haki: "Armadura, Observación",
        bounty: "602,000,000 Berries",
        description: "¡Eres Sabo! El hermano adoptivo de Luffy y Ace, y actual Jefe de Estado Mayor de los Revolucionarios. Tras recuperar tus memorias, heredaste el poder de la Fruta de Fuego de Ace. Tu estilo de pelea combina artes marciales con tu Fruta del Diablo. Estratega brillante y poderoso combatiente, eres la mano derecha de Dragon."
    },
    ivankov: {
        name: "Emporio Ivankov",
        image: "https://i.pinimg.com/736x/70/e5/0d/70e50db7cd6c8bbc04a33a2fc77df521.jpg",
        faction: "Ejército Revolucionario",
        devilFruit: "Horu Horu no Mi (Hormonas)",
        haki: "Ninguno conocido",
        bounty: "Desconocida",
        description: "¡Eres Ivankov! La revolucionaria excéntrica que controla las hormonas. Tu Fruta del Diablo te permite manipular hormonas para curar, cambiar género o potenciar habilidades. Como reina del Kamabakka Kingdom y comandante revolucionaria, eres una figura clave en la resistencia contra el Gobierno Mundial. Tu personalidad extravagante oculta una lealtad inquebrantable a Dragon."
    },
    
    // Otros
    vegapunk: {
        name: "Dr. Vegapunk",
        image: "https://i.pinimg.com/474x/c2/88/71/c28871da532ad0661981d6f5ee9748ef.jpg",
        faction: "Gobierno Mundial (científico)",
        devilFruit: "Ninguna conocida",
        haki: "Ninguno conocido",
        bounty: "N/A",
        description: "¡Eres Vegapunk! El científico más inteligente del mundo. Tus inventos revolucionaron la tecnología en One Piece, desde los Pacifistas hasta la replicación de Frutas del Diablo. Aunque trabajas para el Gobierno Mundial, tus verdaderas lealtades son misteriosas. Tu mente es tu arma más poderosa, capaz de entender cualquier fenómeno científico."
    },
    roger: {
        name: "Gol D. Roger",
        image: "https://i.pinimg.com/236x/fd/3d/a8/fd3da893b2f16c8b130cb6f4ba8445b7.jpg",
        faction: "Piratas Roger (fallecido)",
        devilFruit: "Desconocida (posiblemente ninguna)",
        haki: "Conquistador, Armadura, Observación",
        bounty: "5,564,800,000 Berries",
        description: "¡Eres Roger! El Rey de los Piratas original. Tu leyenda dio inicio a la Gran Era Pirata. Conociste los secretos del mundo y llegaste a Laugh Tale. Aunque ejecutado, tu espíritu vive en la nueva generación. Tu fuerza era tal que podías oír la 'voz de todas las cosas', una habilidad única compartida solo con unos pocos."
    },
    rayleigh: {
        name: "Silvers Rayleigh",
        image: "https://i.pinimg.com/474x/da/18/2a/da182aff0a10d9d265eace38b23878c9.jpg",
        faction: "Ex-Piratas Roger",
        devilFruit: "Ninguna",
        haki: "Conquistador, Armadura, Observación",
        bounty: "Desconocida (ex-pirata)",
        description: "¡Eres Rayleigh! La 'Mancha Oscura' y antiguo primer mate de Roger. Considerado un leyenda viviente, tu dominio del Haki es incomparable. Entrenaste a Luffy durante los dos años de timeskip. Aunque retirado, tu simple presencia en Sabaody detuvo a un almirante. Eres la prueba de que la edad no disminuye la verdadera fuerza."
    }
};

// Variables del test
let currentQuestion = 0;
let answers = {};
let characterScores = {};

// Inicializar el test
function initTest() {
    // Inicializar puntajes
    Object.keys(characters).forEach(character => {
        characterScores[character] = 0;
    });
    
    // Mostrar primera pregunta
    showQuestion(currentQuestion);
}

// Mostrar pregunta
function showQuestion(index) {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    
    const questionDiv = document.createElement('div');
    questionDiv.className = `question ${index === currentQuestion ? 'active' : ''}`;
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = questions[index].question;
    questionDiv.appendChild(questionText);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    
    questions[index].options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.dataset.index = i;
        optionDiv.onclick = () => selectOption(optionDiv, option.value);
        optionsDiv.appendChild(optionDiv);
    });
    
    questionDiv.appendChild(optionsDiv);
    questionsContainer.appendChild(questionDiv);
    
    // Actualizar progreso
    updateProgress();
    
    // Actualizar botones de navegación
    updateNavigation();
}

// Seleccionar opción
function selectOption(optionElement, characterValues) {
    // Deseleccionar otras opciones en la misma pregunta
    const options = optionElement.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Seleccionar esta opción
    optionElement.classList.add('selected');
    
    // Guardar respuesta
    answers[currentQuestion] = characterValues;
}

    // Actualizar barra de progreso y mini Luffy
// (En tu script.js, busca esta función o créala si no existe)
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressBar = document.querySelector('.progress-bar');
    const miniLuffy = document.querySelector('.mini-luffy');
    
    // Actualiza la barra y la posición de Luffy
    progressBar.style.width = `${progress}%`;
    miniLuffy.style.left = `${progress}%`;
    
    // Activa animación de Luffy
    miniLuffy.style.display = 'block';
    miniLuffy.classList.add('running');
    
    // Muestra la carne al completar
    if (progress >= 100) {
      document.querySelector('.meat-reward').style.opacity = '1';
      miniLuffy.classList.remove('running');
    }
  }


// Actualizar botones de navegación
function updateNavigation() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').textContent = 
        currentQuestion === questions.length - 1 ? 'Ver resultado' : 'Siguiente';
}

// Navegar a la siguiente pregunta
function nextQuestion() {
    if (!answers[currentQuestion]) {
        alert('Por favor selecciona una opción');
        return;
    }
    
    // Sumar puntos a los personajes seleccionados
    answers[currentQuestion].forEach(character => {
        characterScores[character] += 1;
    });
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

// Navegar a la pregunta anterior
function prevQuestion() {
    if (currentQuestion > 0) {
        // Restar puntos de la pregunta actual si ya estaba respondida
        if (answers[currentQuestion]) {
            answers[currentQuestion].forEach(character => {
                characterScores[character] -= 1;
            });
            delete answers[currentQuestion];
        }
        
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// Mostrar resultado
function showResult() {
    // Determinar personaje con mayor puntaje
    let maxScore = -1;
    let resultCharacter = 'luffy'; // Default
    
    Object.keys(characterScores).forEach(character => {
        if (characterScores[character] > maxScore) {
            maxScore = characterScores[character];
            resultCharacter = character;
        }
    });
    
    // Mostrar resultado
    const character = characters[resultCharacter];
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-image').src = character.image;
    document.getElementById('character-faction').textContent = character.faction;
    document.getElementById('character-devil-fruit').textContent = character.devilFruit;
    document.getElementById('character-haki').textContent = character.haki;
    document.getElementById('character-bounty').textContent = character.bounty;
    document.getElementById('character-description').textContent = character.description;
    
    // Ocultar test y mostrar resultado
    document.querySelector('.test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    // Animación especial
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.animation = 'none';
    setTimeout(() => {
        resultContainer.style.animation = 'fadeIn 1.5s ease-out';
    }, 10);
}

// Reiniciar test
function restartTest() {
    currentQuestion = 0;
    answers = {};
    characterScores = {};
    
    Object.keys(characters).forEach(character => {
        characterScores[character] = 0;
    });
    
    document.querySelector('.test-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    
    showQuestion(currentQuestion);
}

// Compartir resultado
function shareResult() {
    const characterName = document.getElementById('character-name').textContent;
    const text = `¡Acabo de descubrir que mi personalidad en One Piece es como ${characterName}! ¿Y tú? Haz el test aquí: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'One Piece Personality Test',
            text: text,
            url: window.location.href
        }).catch(err => {
            console.log('Error al compartir:', err);
            fallbackShare(text);
        });
    } else {
        fallbackShare(text);
    }
}

// Fallback para compartir
function fallbackShare(text) {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
}

// Event listeners
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);

// Iniciar el test cuando la página cargue
window.onload = initTest;

