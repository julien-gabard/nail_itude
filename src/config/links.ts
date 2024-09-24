import { IRoutes } from 'types/routes'

const links: IRoutes[] = [
    {
        id: 'home',
        path: '/',
        labelName: 'Accueil',
        iconName: 'home',
    },
    {
        id: 'photos',
        path: '/photos',
        labelName: 'Photos',
        iconName: 'photoLibrary',
    },
    {
        id: 'prices',
        path: '/tarifs',
        labelName: 'Tarifs',
        iconName: 'sell',
    },
    {
        id: 'contact',
        path: '/contact',
        labelName: 'Contact',
        iconName: 'info',
    },
]

export default links
