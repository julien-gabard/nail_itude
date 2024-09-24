import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

import AnimatedPageWrapper from 'components/AnimatedPageWrapper'
import { IDataHome } from 'types/dataHome'

const Home = () => {
    const [data] = useState<IDataHome>(useLoaderData() as IDataHome)

    console.log('toto data', data)

    return (
        <AnimatedPageWrapper>
            <h1>Titre de la page</h1>
        </AnimatedPageWrapper>
    )
}

export default Home
