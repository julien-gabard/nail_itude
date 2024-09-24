import { AnimatePresence, PanInfo, wrap } from 'framer-motion'
import { FC, MouseEventHandler, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

import * as S from 'styles/components/Carousel'
import Icons from 'components/ui/Icons'
import { TDataPhotos } from 'types/dataPhotos'
import { animatedCarousel } from 'config/animated'
import swipePower from 'helpers/swipePower'

export interface ICarouselProps {
    data: TDataPhotos
    handleClose?: MouseEventHandler<HTMLButtonElement>
    selectedId?: number
}

const Carousel: FC<ICarouselProps> = ({
    data,
    handleClose,
    selectedId = 0,
}) => {
    const [[page, direction], setPage] = useState<[number, number]>([
        selectedId,
        0,
    ])

    const { transition, variants } = animatedCarousel
    const imageIndex = wrap(0, data.length, page)

    const paginate = useCallback(
        (newDirection: number) => {
            setPage([page + newDirection, newDirection])
        },
        [page],
    )

    const handeDragEnd = useCallback(
        (
            _event: MouseEvent | TouchEvent | PointerEvent,
            { offset, velocity }: PanInfo,
        ) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -10000) {
                paginate(1)
            } else if (swipe > 10000) {
                paginate(-1)
            }
        },
        [paginate],
    )

    return createPortal(
        <S.Container id='carousel'>
            {/* FULLSCREEN IMAGE AND SWITCH */}
            <AnimatePresence initial={false} custom={direction}>
                <S.Image
                    key={page}
                    src={data[imageIndex].photo}
                    alt={data[imageIndex].id}
                    custom={direction}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    variants={variants}
                    transition={transition}
                    drag='x'
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handeDragEnd}
                />
            </AnimatePresence>

            {/* CONTROLS : CLOSE, PREVIEW AND NEXT */}
            <S.ButtonClose ariaLabel='close image' onClick={handleClose}>
                <Icons iconName='close' size='24px' />
            </S.ButtonClose>
            <S.ButtonNext ariaLabel='next image' onClick={() => paginate(-1)}>
                <Icons iconName='arrowBack' size='24px' />
            </S.ButtonNext>
            <S.ButtonPrev ariaLabel='preview iamge' onClick={() => paginate(1)}>
                <Icons iconName='arrowForward' size='24px' />
            </S.ButtonPrev>
        </S.Container>,
        document.body,
    )
}

export default Carousel
