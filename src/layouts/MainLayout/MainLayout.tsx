import { ScrollRestoration } from 'react-router-dom'

import useMediaQuery from 'hooks/useMediaQuery'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const MainLayout = () => {
    const isBelowMd = useMediaQuery('md')

    return (
        <>
            {/*
                Header and navigation
            */}
            <Header />

            {/*
                This component will emulate the browser's scroll restoration on
                location changes after loaders have completed to ensure the scroll
                position is restored to the right spot, even across domains.
            */}
            <ScrollRestoration />

            {/*
                Main content page
            */}
            <Main />

            {/*
                Footer content info
            */}
            {!isBelowMd && <Footer />}
        </>
    )
}

export default MainLayout
