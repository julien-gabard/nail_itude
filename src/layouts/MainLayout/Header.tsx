import { BurgerButton } from '@julien-gabard/novakit'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import * as S from 'styles/layout/Header'
import Backdrop from 'components/ui/Backdrop'
import { LayoutContext } from 'contexts/LayoutContext'
import Navigation from 'components/Navigation'
import SideDrawer from 'components/SideDrawer'
import SwitchTheme from 'components/SwitchTheme'
import Typography from 'components/ui/Typography'
import useMediaQuery from 'hooks/useMediaQuery'

const Header = () => {
    const isBelowMd = useMediaQuery('md')
    const { isOpenSideDrawer, setIsOpenSideDrawer, toggleSideDrawer } =
        useContext(LayoutContext)
    const theme = useTheme()

    return (
        <>
            <S.Container $isBelowMd={isBelowMd}>
                <S.Title to='/'>
                    <Typography variant='h5'>Nail&apos;itude</Typography>
                </S.Title>
                {isBelowMd ? (
                    <>
                        <BurgerButton
                            color={theme.colors.text}
                            isRounded
                            strokeWidth={2}
                            isActive={isOpenSideDrawer}
                            onClick={toggleSideDrawer}
                        />
                        <SideDrawer />
                    </>
                ) : (
                    <>
                        <Navigation />
                        <SwitchTheme />
                    </>
                )}
            </S.Container>
            <Backdrop
                show={isOpenSideDrawer && isBelowMd}
                onClick={() => setIsOpenSideDrawer(false)}
            />
        </>
    )
}

export default Header
