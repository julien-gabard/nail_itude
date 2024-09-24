import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export interface IContainerProps {
    $isBelowSm: boolean
}

export const Container = styled(motion.div)<IContainerProps>`
    background-color: ${({ theme }) => theme.colors.background};
    height: calc(100dvh - ${({ theme }) => theme.header.height});
    width: ${({ $isBelowSm }) => (!$isBelowSm ? '50%' : '100%')};
    position: absolute;
    top: ${({ theme }) => theme.header.height};
    padding: 2rem;
    display: grid;
    grid-template-rows: auto minmax(150px, 1fr) auto auto;
    gap: 2rem;
    justify-items: center;
    align-items: center;
    overflow-y: auto;

    & #logo-full {
        filter: drop-shadow(${({ theme }) => theme.dropShadow});
    }

    & #switch {
        justify-self: center;
    }
`

export const Nav = styled(motion.nav)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

export const Link = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.5rem 1rem;
    width: 100%;

    &.active {
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        box-shadow: ${({ theme }) => theme.boxShadow};
        border: none;
    }
`

export const Footer = styled.p`
    font-size: 12px;
    user-select: none;
`
