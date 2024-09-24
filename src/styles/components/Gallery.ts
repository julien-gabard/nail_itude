import { motion } from 'framer-motion'
import styled from 'styled-components'

export interface IGalleryProps {
    $isBelowSm?: boolean
}

export const Container = styled(motion.div)<IGalleryProps>`
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        ${({ $isBelowSm }) => ($isBelowSm ? '100px' : '150px')}
    );
    grid-auto-rows: ${({ $isBelowSm }) => ($isBelowSm ? '100px' : '150px')};
    grid-auto-flow: dense;
    gap: 1rem;
    width: 100%;
    flex: 1;
    justify-content: center;
    align-content: center;
    max-width: ${({ theme }) => theme.maxWidth};
`

export const Figure = styled(motion.figure)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
