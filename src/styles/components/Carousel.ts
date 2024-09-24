import { motion } from 'framer-motion'
import styled from 'styled-components'

import Button from 'components/ui/Button'

export const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: ${({ theme }) => theme.colors.background}69;
    backdrop-filter: blur(${({ theme }) => theme.blur});
`

export const Image = styled(motion.img)`
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    z-index: 21;
`

export const ButtonNext = styled(Button)`
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 21;
    background-color: ${({ theme }) => theme.colors.background}30;
    color: inherit;
`

export const ButtonPrev = styled(Button)`
    position: absolute;
    right: 0;
    height: 100%;
    z-index: 21;
    background-color: ${({ theme }) => theme.colors.background}30;
    color: inherit;
`

export const ButtonClose = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 22;
    background-color: transparent;
    color: inherit;
`
