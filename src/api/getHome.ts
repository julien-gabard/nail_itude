import { json } from 'react-router-dom'

import { IDataHome } from 'types/dataHome'

const fakeData: IDataHome = {
    titlePart: "Bienvenue chez Nail'itude !",
    descriptionPart: [
        "Je suis ravie de vous accueillir sur mon site officiel. Chez Nail'itude, je suis passionné par la beauté et le soin des ongles. Que vous recherchiez une manucure élégante, une pédicure relaxante ou des créations artistiques uniques, je suis là pour réaliser tous vos souhaits.",
        "Explorez mes services de haute qualité. J'utilise les meilleures techniques et les dernières tendances pour garantir que vos ongles soient toujours à la hauteur de vos attentes.",
        "Prenez rendez-vous dès aujourd'hui et laissez-moi sublimer vos ongles dans une ambiance chaleureuse et accueillante. Votre satisfaction est ma priorité !",
        "Merci de votre visite et à très bientôt chez Nail'itude !",
    ],
    servicesPart: [
        {
            id: 'home_service_1',
            title: '',
            message:
                "Je suis ravi de vous offrir des services de pédicure, manucure et dessins d'ongles de haute qualité. Voici ce que je vous propose :",
        },
        {
            id: 'home_service_2',
            title: 'Pédicure',
            message:
                "Offrez à vos pieds l'attention qu'ils méritent avec mes soins de pédicure relaxants et revitalisants. J'utilise des produits de première qualité pour adoucir et hydrater votre peau, tout en veillant à ce que vos ongles soient impeccablement coupés, limés et polis.",
        },
        {
            id: 'home_service_3',
            title: 'Manucure',
            message:
                "Mes services de manucure sont conçus pour embellir et renforcer vos ongles. Que vous préfériez une manucure classique, Française ou tendance, j'ai ce qu'il vous faut. Mes techniques précises et mon souci du détail garantiront des ongles soignés et élégants",
        },
        {
            id: 'home_service_4',
            title: "Dessins d'Ongles",
            message:
                "Exprimez votre créativité et votre style avec mes dessins d'ongles uniques. Des motifs simples et élégants aux œuvres d'art complexes, je peux transformer vos ongles en véritables chefs-d'œuvre.",
        },
        {
            id: 'home_service_5',
            title: 'Pourquoi choisir mes services ?',
            message: [
                "Produits de Qualité : J'utilise des produits de soin haut de gamme pour assurer la santé et la beauté de vos ongles et de votre peau.",
                'Professionnalisme : Je suis formées et expérimentées, prêtes à vous offrir un service impeccable.',
                "Ambiance Relaxante : Profitez d'un moment de détente dans un cadre agréable et apaisant.",
            ],
        },
    ],
    photosPart: {
        messages: [
            "Envie d'inspiration pour vos ongles ?",
            'Découvrez mes dernières créations en photos !',
        ],
    },
}

const getHome = () => json(fakeData, { status: 200 })

export default getHome
