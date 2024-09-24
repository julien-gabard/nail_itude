import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-self: center;
    gap: 2rem;
    height: 100%;
`

export const Link = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    gap: 0.3rem;
    position: relative;
    padding: 0.5rem 1rem;
    user-select: none;
`

export const WrapBorderLink = styled(motion.div)`
    position: absolute;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    top: 0;
    left: 0;
    right: 0;
`

export const BackgroundLinkHover = styled(motion.div)`
    position: absolute;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`
