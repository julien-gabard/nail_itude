import styled from 'styled-components'

export const Label = styled.label`
    display: inline-flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    font-weight: 500;
`

export const Textarea = styled.textarea`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    padding: 1rem 2rem 1rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.background}cc;
`
