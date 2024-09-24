import { useAsyncValue } from 'react-router-dom'
import { useState } from 'react'

import * as S from 'styles/components/Gallery'
import Carousel from 'components/Carousel'
import { TDataPhotos } from 'types/dataPhotos'
import { animatedGallery } from 'config/animated'
import useMediaQuery from 'hooks/useMediaQuery'

const Gallery = () => {
    const isBelowSm = useMediaQuery('sm')
    const photos = useAsyncValue() as TDataPhotos

    const [selectedId, setSelectedId] = useState<number | null>(null)

    const { variantsContainer, variantsImage } = animatedGallery

    return (
        <S.Container
            initial='hidden'
            animate='visible'
            variants={variantsContainer}
            $isBelowSm={isBelowSm}
        >
            {photos.map((image, index) => (
                <S.Figure
                    key={image.id}
                    variants={variantsImage}
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                >
                    <S.Image
                        src={image.photo}
                        alt={image.id}
                        onClick={() => setSelectedId(index)}
                    />
                </S.Figure>
            ))}
            {selectedId !== null && (
                <Carousel
                    data={photos}
                    selectedId={selectedId}
                    handleClose={() => setSelectedId(null)}
                />
            )}
        </S.Container>
    )
}

export default Gallery
