import styled, { css } from 'styled-components'

export interface ILabelProps {
    $labelPosition?: 'left' | undefined
}

export const Label = styled.label<ILabelProps>`
    display: grid;
    width: 100%;

    ${({ $labelPosition }) => {
        switch ($labelPosition) {
            case 'left':
                return css`
                    grid-template-columns: auto 1fr;
                    grid-template-rows: repeat(3, auto);
                    grid-template-areas: '. info' 'label input' '. error';
                    align-items: center;
                `
            default:
                return css`
                    grid-template-rows: repeat(4, auto);
                    grid-template-areas: 'label' 'info' 'input' 'error';
                `
        }
    }}
`

export const LabelName = styled.span`
    font-weight: 500;
    grid-area: label;
    margin-right: 1rem;
`

export const MessageInfo = styled.span`
    font-size: 12px;
    grid-area: info;
`

export const Input = styled.input`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1rem 2rem 1rem 1rem;
    font-size: 1em;
    width: 100%;
    justify-items: center;
    outline: none;
    transition: border-color 300ms linear;
    grid-area: input;
    margin: 0.5rem 0;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.main};
    }

    &:valid {
        border: 1px solid ${({ theme }) => theme.colors.success};
    }

    &:invalid {
        border: 1px solid ${({ theme }) => theme.colors.error};
    }
`

export const MessageError = styled.span`
    font-size: 12px;
    grid-area: error;
    color: ${({ theme }) => theme.colors.error};
`
