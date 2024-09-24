import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import Error from 'pages/Error'
import MainLayout from 'layouts/MainLayout/MainLayout'
import getHome from 'api/getHome'
import getPhotos from 'api/getPhotos'

const Router = createBrowserRouter(
    [
        {
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    loader: getHome,
                    shouldRevalidate: () => false,
                    Component: lazy(() => import('../pages/Home')),
                },
                {
                    path: 'photos',
                    loader: getPhotos,
                    shouldRevalidate: () => false,
                    Component: lazy(() => import('../pages/Photos')),
                },
                {
                    path: 'tarifs',
                    Component: lazy(() => import('../pages/Prices')),
                    children: [
                        {
                            path: 'tarifs/manucure',
                        },
                        {
                            path: 'tarifs/pedicure',
                        },
                        {
                            path: 'tarifs/dessin-dongles',
                        },
                    ],
                },
                {
                    path: 'contact',
                    Component: lazy(() => import('../pages/Contact')),
                },
            ],
        },
    ],
    {
        basename: '/nailitude/',
    },
)

export default Router
