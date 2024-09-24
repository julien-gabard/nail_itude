import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { createPortal } from 'react-dom'

import * as S from 'styles/components/ui/Backdrop'
import { animatedBackdrop } from 'config/animated'

export interface IBackdropProps {
    onClick?: () => void
    /**
     * Default false
     */
    show?: boolean
}

const Backdrop: FC<IBackdropProps> = ({ onClick, show = false }) =>
    createPortal(
        <AnimatePresence mode='wait'>
            {show && (
                <S.Container
                    key='backdrop'
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={animatedBackdrop}
                    onClick={onClick}
                />
            )}
        </AnimatePresence>,
        document.body,
    )

export default Backdrop
