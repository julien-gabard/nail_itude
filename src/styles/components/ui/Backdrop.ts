import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
    height: 100%;
    width: 100%;
    position: fixed;
    backdrop-filter: blur(${({ theme }) => theme.blur});
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    z-index: 10;
`
