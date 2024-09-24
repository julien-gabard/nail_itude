import { Await, useLoaderData } from 'react-router-dom'
import { Suspense, useState } from 'react'

import * as S from 'styles/pages/Photos'
import AnimatedPageWrapper from 'components/AnimatedPageWrapper'
import Error from 'pages/Error'
import Gallery from 'components/Gallery'
import Loading from 'components/Loading'
import Ribbon from 'components/ui/Ribbon'

const Photos = () => {
    const [data] = useState(useLoaderData() as Record<string, string>)

    return (
        <AnimatedPageWrapper>
            {/* TITLE PAGE */}
            <Ribbon>
                <S.Title>Mes photos</S.Title>
            </Ribbon>

            {/* GRID VIEW AND CAROUSEL VIEW */}
            {/*
                TODO REPLACE LOADING TO SKELETON GALLERY PHOTOS
                - To test loading, increase the setTimout timer in the api/getPhotos.ts file
             */}
            <Suspense fallback={<Loading />}>
                <Await resolve={data.dataPromise} errorElement={<Error />}>
                    <Gallery />
                </Await>
            </Suspense>
        </AnimatedPageWrapper>
    )
}

export default Photos