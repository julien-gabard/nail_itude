import styled from 'styled-components'

export const CardContainer = styled.article`
    background: ${({ theme }) => theme.colors.background}cc;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
`
