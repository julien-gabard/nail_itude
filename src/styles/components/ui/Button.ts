import styled, { css } from 'styled-components'

export interface IButtonProps {
    $isDisabled: boolean
}

export const Button = styled.button<IButtonProps>`
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    display: inline-flex;
    font-size: inherit;
    gap: 0.5rem;
    padding: 0.5rem 1rem;

    ${({ $isDisabled, theme }) => {
        if (!$isDisabled) {
            return css`
                background-color: ${theme.colors.main};
                color: ${theme.mode === 'light'
                    ? theme.colors.textSecondary
                    : theme.colors.text};
                cursor: pointer;
            `
        }
    }}

    -webkit-tap-highlight-color: transparent;

    &:hover {
    }
`
