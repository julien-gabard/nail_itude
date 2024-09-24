import styled from 'styled-components'

import Button from 'components/ui/Button'

export const Title = styled.h1`
    text-align: center;
    font-family: Meriendia, system-ui, sans-serif;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    flex: 1;
    justify-content: center;
`

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.background}cc;
    border-color: ${({ theme }) => theme.colors.border};
`

export const Legend = styled.legend`
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0 0.5rem;
`

export const ButtonSend = styled(Button)`
    align-self: flex-end;
`
