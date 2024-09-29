import styled from 'styled-components'

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.colors.main};
    padding: 0.5rem;
    text-align: center;
    color: ${({ theme }) =>
        theme.mode === 'light'
            ? theme.colors.textSecondary
            : theme.colors.text};
`
