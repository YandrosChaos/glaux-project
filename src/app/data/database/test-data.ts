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
            description: 'asentar la secuencia numérica del 1 al 10'
        }, {
            type: ObjectiveTypeEnum.conceptual,
            description: 'utilizar el juego de forma lúdica'
        },
        {
            type: ObjectiveTypeEnum.conceptual,
            description: 'Identificar los distintos números'
        },
        {
            type: ObjectiveTypeEnum.procedural,
            description: 'coger soltura a la hora de contar'
        }],
        resources: [{
            type: ResourceTypeEnum.material,
            description: 'colchonetas con números o papel continuo con los números escritos'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'tiza'
        }],
        teacherRole: 'El maestro deberá de dirigir la actividad diciendo a los niños como deben de realizar la actividad',
        description: [
            'Se indicará a los niños que se sienten en asamblea haciendo una media esfera.',
            'Una vez que los niños estén colocados se pondrá los números del 1 al 10 en el suelo, en orden y en línea. ',
            `Cuando los números están colocados el profesor irá llamando a los alumnos 
            de uno en uno para que se coloquen en el uno y, mientras saltan de uno a otro, 
            vayan diciendo el número en el que están`
        ],
        steps: [
            {
                position: 1,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: "Se indicará a los niños que se sienten en asamblea haciendo una media esfera.",
                paragraphs: ["Se indicará a los niños que se sienten en asamblea haciendo una media esfera."],
            },
            {
                position: 2,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: "Una vez que los niños estén colocados se pondrá los números del 1 al 10 en el suelo, en orden y en línea.",
                paragraphs: ["Una vez que los niños estén colocados se pondrá los números del 1 al 10 en el suelo, en orden y en línea."],
            },
            {
                position: 3,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: `Cuando los números están colocados el profesor irá llamando a los alumnos 
                de uno en uno para que se coloquen en el uno y, mientras saltan de uno a otro, 
                vayan diciendo el número en el que están`,
                paragraphs: [`Cuando los números están colocados el profesor irá llamando a los alumnos 
                de uno en uno para que se coloquen en el uno y, mientras saltan de uno a otro, 
                vayan diciendo el número en el que están`],
            },
        ],
        variations: [
            `Una vez que ya dominan la actividad se le puede decir a los niños que se 
            coloquen en un número específico o que cuenten una serie de números, por 
            ejemplo decirle que se coloquen en el 3 y que cuenten 2 números, acabando 
            en el 5. No obstante esta variante solo se podrá llevar a cabo una vez que 
            el niño ya domine los números.`
        ]
    },
    {
        hash: 'def',
        type: "Plástica",
        methodology: ActivityMethodologyEnum.noGuided,
        name: 'La Familia Gallina',
        recommendedAges: [3],
        minutes: 60,
        imgLink: 'https://cdn5.dibujos.net/dibujos/pintados/202024/familia-gallina-animales-la-granja-11831045.jpg',
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
            description: 'experimentar con la textura de los colores'
        },
        ],
        resources: [{
            type: ResourceTypeEnum.material,
            description: 'pintura de dedos'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'folios'
        }],
        teacherRole:
            `El educador deberá dirigir la actividad diciendo a los niños los pasos que deben de 
        dar para poder llegar a realizar la gallina y los polluelos`,
        description: [
            'Se harán grupos de 5 niños para que sean más manejables y se les dirá que se sienten en su sitio.',
            `Una vez sentados se le explicará la actividad, diciéndoles que se les va a pintar la mano para hacer 
            una gallina y a sus pollos.`,
            `La actividad consistiría en pintar primero la yema de los dedos de los niños y decirles que la plasmen 
            en el folio. Una vez realizado este proceso 2 o 3 veces se le pintara la mano entera y se les pedirá 
            que la pongan al lado de las otras marcas de los dedos.`,
            `Una vez hecho esto el profesor deberá de, con un rotulador, dibujar el ojo y el pico para que así 
            parezca una gallina.`
        ],
        steps: [
            {
                position: 1,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: "Se harán grupos de 5 niños para que sean más manejables y se les dirá que se sienten en su sitio. ",
                paragraphs: ["Se harán grupos de 5 niños para que sean más manejables y se les dirá que se sienten en su sitio. "],
            },
            {
                position: 2,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: `Una vez sentados se le explicará la actividad, diciéndoles que se les va a pintar la mano para hacer 
                una gallina y a sus pollos.`,
                paragraphs: [`Una vez sentados se le explicará la actividad, diciéndoles que se les va a pintar la mano para hacer 
                una gallina y a sus pollos.`],
            },
            {
                position: 3,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: `La actividad consistiría en pintar primero la yema de los dedos de los niños y decirles que la plasmen 
                en el folio. Una vez realizado este proceso 2 o 3 veces se le pintara la mano entera y se les pedirá 
                que la pongan al lado de las otras marcas de los dedos.`,
                paragraphs: [`La actividad consistiría en pintar primero la yema de los dedos de los niños y decirles que la plasmen 
                en el folio. Una vez realizado este proceso 2 o 3 veces se le pintara la mano entera y se les pedirá 
                que la pongan al lado de las otras marcas de los dedos.`],
            },
            {
                position: 4,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: `Una vez hecho esto el profesor deberá de, con un rotulador, dibujar el ojo y el pico para que así 
                parezca una gallina.`,
                paragraphs: [`Una vez hecho esto el profesor deberá de, con un rotulador, dibujar el ojo y el pico para que así 
                parezca una gallina.`],
            },
        ],
        variations: []
    },
    {
        hash: 'qwe',
        type: "Motricidad",
        methodology: ActivityMethodologyEnum.semiGuided,
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
            description: 'ser capaz de compartir y convivir con sus iguales'
        },
        {
            type: ObjectiveTypeEnum.conceptual,
            description: 'experimentar distintos objetos del otoño'
        },
        {
            type: ObjectiveTypeEnum.conceptual,
            description: 'reconocer su entorno'
        }
        ],
        resources: [{
            type: ResourceTypeEnum.material,
            description: 'piñas'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'hojas secas'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'piedras'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'ramas'
        },
        {
            type: ResourceTypeEnum.material,
            description: 'pequeños troncos'
        }],
        teacherRole:
            `El maestro es mero observador y no debe de intervenir salvo que sea necesario siendo una actividad no dirigida`,
        description: [
            `Se creará una instalación con elementos otoñales. para ello se colocaran en una sala, en la que no estén los niños, 
            distintos objetos cuidando siempre de la estética intentando hacerlo lo más atractivo posible.`,
            `Una vez que la instalación ya esté hecha se llevará a los niños a la sala y se les dejará entrar y que experimenten 
            con ellos haciendo lo que consideren. El educador no debería de decirles nada y solo intervenir si es necesario.`,
        ],
        steps: [
            {
                position: 1,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: `Se creará una instalación con elementos otoñales. para ello se colocaran en una sala, en la que no estén los niños, 
                distintos objetos cuidando siempre de la estética intentando hacerlo lo más atractivo posible.`,
                paragraphs: [`Se creará una instalación con elementos otoñales. para ello se colocaran en una sala, en la que no estén los niños, 
                distintos objetos cuidando siempre de la estética intentando hacerlo lo más atractivo posible.`],
            },
            {
                position: 1,
                imageLink: "https://juegostradicionales.net/wp-content/uploads/2018/08/juego-de-la-rayuela.jpg",
                resume: `Una vez que la instalación ya esté hecha se llevará a los niños a la sala y se les dejará entrar y que experimenten 
                con ellos haciendo lo que consideren. El educador no debería de decirles nada y solo intervenir si es necesario.`,
                paragraphs: [`Una vez que la instalación ya esté hecha se llevará a los niños a la sala y se les dejará entrar y que experimenten 
                con ellos haciendo lo que consideren. El educador no debería de decirles nada y solo intervenir si es necesario.`],
            },
        ],
        variations: []
    },
];
