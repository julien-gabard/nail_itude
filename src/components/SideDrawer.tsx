import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'

import * as S from 'styles/components/SideDrawer'
import Icons from 'components/ui/Icons'
import { LayoutContext } from 'contexts/LayoutContext'
import LogoFull from 'components/ui/LogoFull'
import SwitchTheme from 'components/SwitchTheme'
import { animatedSideDrawer } from 'config/animated'
import links from 'config/links'
import useMediaQuery from 'hooks/useMediaQuery'

const SideDrawer = () => {
    const isBelowSm = useMediaQuery('sm')
    const { isOpenSideDrawer, setIsOpenSideDrawer } = useContext(LayoutContext)

    const { variants, nav, item } = animatedSideDrawer

    return (
        <AnimatePresence mode='wait'>
            {isOpenSideDrawer && (
                <S.Container
                    key='side-drawer'
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={variants}
                    $isBelowSm={isBelowSm}
                >
                    <S.Nav variants={nav}>
                        {links.map(link => (
                            <motion.div key={link.id} variants={item}>
                                <S.Link
                                    to={link.path}
                                    id={link.id}
                                    onClick={() => setIsOpenSideDrawer(false)}
                                >
                                    <Icons
                                        iconName={link.iconName}
                                        size='24px'
                                    />
                                    <span>{link.labelName}</span>
                                </S.Link>
                            </motion.div>
                        ))}
                    </S.Nav>
                    <LogoFull />
                    <SwitchTheme size='large' />
                    <S.Footer>
                        © Copyright 2024 GID, Inc. All rights reserved.
                    </S.Footer>
                </S.Container>
            )}
        </AnimatePresence>
    )
}

export default SideDrawer
