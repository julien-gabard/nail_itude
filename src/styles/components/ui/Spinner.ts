import styled from 'styled-components'

export interface ISvgProps {
    $spinnerSize: number
}

export interface ICircleProps {
    $spinnerSize: number
}

export const Svg = styled.svg<ISvgProps>`
    height: ${({ $spinnerSize }) => $spinnerSize}px;
    width: ${({ $spinnerSize }) => $spinnerSize}px;
`

export const Circle = styled.circle<ICircleProps>`
    animation: spinner 2s linear infinite;
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.main};
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: ${({ $spinnerSize }) => 3.14 * $spinnerSize};
    transform-origin: ${({ $spinnerSize }) => 0.5 * $spinnerSize}px
        ${({ $spinnerSize }) => 0.5 * $spinnerSize}px 0;

    @keyframes spinner {
        0% {
            stroke-dashoffset: ${({ $spinnerSize }) => 0.66 * $spinnerSize};
            transform: rotate(0deg);
        }
        50% {
            stroke-dashoffset: ${({ $spinnerSize }) => 3.14 * $spinnerSize};
            transform: rotate(720deg);
        }
        100% {
            stroke-dashoffset: ${({ $spinnerSize }) => 0.66 * $spinnerSize};
            transform: rotate(1080deg);
        }
    }
`
