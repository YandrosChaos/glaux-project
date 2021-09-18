import { Activity, ActivityMethodologyEnum } from '../interfaces/activity/activity.interface';
import { ObjectiveTypeEnum } from '../interfaces/activity/objective.interface';
import { ResourceTypeEnum } from '../interfaces/activity/resource.interface';

export const testData: Activity[] = [
    {
        hash: 'abc',
        type: "Contenidos Académicos",
        methodology: ActivityMethodologyEnum.guided,
        name: 'La Rayuela',
        recommendedAges: [3],
        minutes: 30,
        imgLink: 'https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg',
        learningAreas: [
            'Desarrollo del lenguaje como centro del aprendizaje',
            'Conocimiento y progresivo control de su cuerpo',
            'El juego y el movimiento'
        ],
        objectives: [{
            type: ObjectiveTypeEnum.attitudinal,
            description: 'Asentar la secuencia numérica del 1 al 10'
        }, {
            type: ObjectiveTypeEnum.conceptual,
            description: 'Utilizar el juego de forma lúdica'
        },
        {
            type: ObjectiveTypeEnum.conceptual,
            description: 'Identificar los distintos números'
        },
        {
            type: ObjectiveTypeEnum.procedural,
            description: 'Coger soltura a la hora de contar'
        }],
        resources: [{
            type: ResourceTypeEnum.material,
            description: 'Colchonetas con números o papel continuo con los números escritos'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'Tiza'
        }],
        teacherRole: 'El maestro deberá dirigir la actividad diciendo a los niños cómo deben realizarla.',
        description: [
            `La Rayuela es un juego muy bonito para los niños, además de no requerir casi de material. 
            Los niños podrán mejorar su equilibrio y coordinación, a la vez que practican los números.`,
            `Este popular juego se conoce también como truque, luche, el cuadrado, la chilena, el avión o el volantín.`
        ],
        steps: [
            {
                position: 1,
                imageLink: "https://media.istockphoto.com/illustrations/group-of-children-seated-in-semi-circle-illustration-id480118258?k=20&m=480118258&s=612x612&w=0&h=pQhDHbga69iEl9qa10vyYP8s6dzhKGCrC5WAlpM6-iE=",
                resume: "Sentar a los niños",
                paragraphs: ["Se indicará a los niños que se sienten en asamblea, formando una media esfera."],
            },
            {
                position: 2,
                imageLink: "https://media.vertbaudet.es/Pictures/vertbaudet/182700/alfombra-de-actividades-rayuela-y-puzzle-de-espuma-4-discos.jpg",
                resume: "Preparar el juego",
                paragraphs: [
                    "Una vez que los niños estén colocados, se pondrán los números del 1 al 10 en el suelo, en orden.",
                    "¡Puedes variar la disposición de las casillas para hacer el juego aún más entretenido!",
                ],
            },
            {
                position: 3,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: `¡A jugar!`,
                paragraphs: [`Cuando los números están colocados, el profesor irá llamando a los alumnos 
                de uno en uno para que se coloquen en el uno. Cuando salten a una nueva posición, 
                deberán decir el número de la nueva casilla.`],
            },
        ],
        variations: [
            `Una vez que ya dominan la actividad, se le puede decir a los niños que se 
            coloquen en un número específico o que cuenten una serie de números. Por 
            ejemplo, pedir que se coloquen en el 3 y que cuenten 2 números, acabando 
            en el 5.`,
            `Esta variante solo se podrá llevar a cabo una vez que 
            el niño ya domine los números.`,
        ]
    },
    {
        hash: 'def',
        type: "Plástica",
        methodology: ActivityMethodologyEnum.guided,
        name: 'La Familia Gallina',
        recommendedAges: [3],
        minutes: 60,
        imgLink: 'https://i.pinimg.com/originals/b7/7b/9f/b77b9fa9f008deec7281ef4f79801a62.png',
        learningAreas: [
            'Conocimiento y progresivo control de su cuerpo',
            'El juego y el movimiento',
            'Descubrimiento del entorno',
            'Equilibrio y desarrollo de su afectividad'
        ],
        objectives: [{
            type: ObjectiveTypeEnum.attitudinal,
            description: 'Reconocer distintos animales'
        }, {
            type: ObjectiveTypeEnum.conceptual,
            description: 'Experimentar con la textura de los colores'
        },
        ],
        resources: [{
            type: ResourceTypeEnum.material,
            description: 'Pintura de dedos'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'Folios'
        }],
        teacherRole:
            `El educador deberá dirigir la actividad, diciendo a los niños los pasos que deben de 
            seguir para poder realizarla.`,
        description: [
            `Esta actividad consiste en hacer una gallina con pintura de dedos. Es una actividad muy sencilla que 
            se puede hacer de un montón de formas diferentes.`,
        ],
        steps: [
            {
                position: 1,
                imageLink: "https://media.istockphoto.com/illustrations/group-of-children-seated-in-semi-circle-illustration-id480118258?k=20&m=480118258&s=612x612&w=0&h=pQhDHbga69iEl9qa10vyYP8s6dzhKGCrC5WAlpM6-iE=",
                resume: "Agrupar y sentar",
                paragraphs: ["Se harán grupos de 5 niños para que sean más manejables. Después se les dirá que se sienten en su sitio. "],
            },
            {
                position: 2,
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzTzdAGxCDCUNnt3EAME_l_8_i62w3O1kPQ&usqp=CAU",
                resume: `Explicación`,
                paragraphs: [
                    `Una vez sentados, se les debe explicar la actividad a los niños.`,
                    ],
            },
            {
                position: 3,
                imageLink: "https://i.pinimg.com/originals/05/99/e2/0599e2040ca3db6fbc863f06b1f59662.jpg",
                resume: `Vamos a ello`,
                paragraphs: [
                    `Una vez sentados, se les explicará la actividad. Esta consistiría en pintar primero la yema de los dedos 
                    de los niños y decirles que la plasmen en el folio.`,
                    `Una vez realizado este proceso 2 o 3 veces se le pintara la mano entera y se les pedirá 
                    que la pongan al lado de las otras marcas de los dedos.`,],
            },
            {
                position: 4,
                imageLink: "https://4.bp.blogspot.com/-n5-ZMNFqlQs/WmDeaC6sGII/AAAAAAAAfmY/BcVaeaLdpCw-XJgwm08NgrLP03FnjRKqgCLcBGAs/s1600/2017-11-10%2B11.59.31.jpg",
                resume: `¡Gallinas!`,
                paragraphs: [`El profesor debe pintar el ojo, las patas y el pico de una gallina. Recomendamos usar un rotulador para ello.`],
            },
        ],
        variations: []
    },
    {
        hash: 'qwe',
        type: "Motricidad",
        methodology: ActivityMethodologyEnum.noGuided,
        name: 'Llega el Otoño',
        recommendedAges: [2, 3, 4, 5],
        minutes: 60,
        imgLink: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/09/16/los-arboles-de-hoja-caduca-pierden-sus-hojas-durante-el-otono.jpeg',
        learningAreas: [
            'Conocimiento y progresivo control de su cuerpo',
            'El juego y el movimiento',
            'Descubrimiento del entorno',
            'Convivencia con los demás'
        ],
        objectives: [{
            type: ObjectiveTypeEnum.attitudinal,
            description: 'Reconocer los distintos elementos otoñales'
        }, {
            type: ObjectiveTypeEnum.conceptual,
            description: 'Ser capaz de compartir y convivir con sus iguales'
        },
        {
            type: ObjectiveTypeEnum.conceptual,
            description: 'Experimentar distintos objetos del otoño'
        },
        {
            type: ObjectiveTypeEnum.conceptual,
            description: 'Reconocer su entorno'
        }
        ],
        resources: [{
            type: ResourceTypeEnum.material,
            description: 'Piñas'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'Hojas secas'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'Piedras'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'Ramas'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'Pequeños troncos'
        }],
        teacherRole:
            `El maestro es un mero observador. No debe intervenir, salvo que sea necesario.`,
        description: [
            `Esta actividad puede ser trabajosa, pero permite a los niños experimentar con el entorno. Puede ser interesante para
            fechas especiales, como el inicio del otoño o el Día del Árbol.`,
        ],
        steps: [
            {
                position: 1,
                imageLink: "https://www.manualidadesinfantiles.org/wp-content/uploads/arbol-otono-1.jpg",
                resume: `Preparar el terreno`,
                paragraphs: [
                    `Se creará una sala con elementos otoñales. Para ello, se colocaran en una sala en la que no estén los niños
                    distintos objetos cuidando siempre de la estética.`,
                    `¡Recuerda intentar hacerlo lo más atractivo posible!`,
            ],
            },
            {
                position: 2,
                imageLink: "https://bricolaje10.com/wp-content/uploads/2020/12/manualidades-para-ninos-dia-arbol-2021-FOTOS-arboles-de-papel-istock.jpg",
                resume: `¡A jugar!`,
                paragraphs: [
                    `Una vez que la instalación ya esté preparada, lleva a los niños y déjales entrar. Que experimenten 
                    con ellos haciendo lo que consideren.`,
                    `El educador no debe de decirles nada. Intervén solo si es necesario.`,
                ],
            },
        ],
        variations: []
    },
];
