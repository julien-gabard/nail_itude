import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export interface IContainerProps {
    $isBelowMd: boolean
}

export const Container = styled.header<IContainerProps>`
    color: ${({ theme }) => theme.colors.text};
    display: grid;
    justify-items: start;
    grid-template-columns: repeat(
        ${({ $isBelowMd }) => ($isBelowMd ? 2 : 3)},
        1fr
    );
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 0 2rem;
    top: 0;
    height: ${({ theme }) => theme.header.height};
    position: sticky;
    z-index: 15;

    & button {
        justify-self: end;
        -webkit-tap-highlight-color: transparent;
    }

    & #switch {
        justify-self: end;
    }
`

export const Title = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
`
