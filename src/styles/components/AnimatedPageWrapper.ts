import { motion } from 'framer-motion'
import styled from 'styled-components'

import background from 'assets/images/background.webp'

export interface IContainerProps {
    $isBelowSm?: boolean
}

export const Container = styled(motion.main)<IContainerProps>`
    flex: 1;
    padding: ${({ $isBelowSm }) => ($isBelowSm ? '2rem 1rem' : '2rem')};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    position: relative;

    // &:after {
    //     content: '';
    //     width: 100%;
    //     height: 100%;
    //     background-image: url(${background});
    //     background-size: cover;
    //     background-position: center;
    //     background-attachment: fixed;
    //     position: absolute;
    //     z-index: -1;
    //     opacity: 0.2;
    // }
`
