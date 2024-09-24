import { FC, ReactNode } from 'react'

import * as S from 'styles/components/AnimatedPageWrapper'
import { animatedPage } from 'config/animated'
import useMediaQuery from 'hooks/useMediaQuery'

export interface IAnimatedWrapPageProps {
    children: ReactNode
    className?: string | undefined
}

const AnimatedPageWrapper: FC<IAnimatedWrapPageProps> = ({
    children,
    className,
}) => {
    const isBelowSm = useMediaQuery('sm')

    const { initial, animate, exit, transition } = animatedPage

    return (
        <S.Container
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className={className}
            $isBelowSm={isBelowSm}
        >
            {children}
        </S.Container>
    )
}

export default AnimatedPageWrapper
