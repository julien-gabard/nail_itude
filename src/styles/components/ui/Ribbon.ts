import styled from 'styled-components'

export interface IRibbonProps {
    $ribbonSize: number
    $depth: number
    $cutoutPart: number
}

export const Container = styled.div<IRibbonProps>`
    color: #ffffff;
    padding: 0
        calc(
            ${({ $ribbonSize }) => `${$ribbonSize}em`} +
                ${({ $depth }) => `${$depth}em`} + 1em
        )
        ${({ $depth }) => `${$depth}em`};
    line-height: 1.8;
    background: linear-gradient(
            90deg,
            #0004 ${({ $depth }) => `${$depth}em`},
            #0000 0 calc(100% - ${({ $depth }) => `${$depth}em`}),
            #0004 0
        )
        50% / calc(100% - 2 * ${({ $ribbonSize }) => `${$ribbonSize}em`}) 100%
        no-repeat;
    clip-path: polygon(
        0 100%,
        ${({ $ribbonSize }) => `${$ribbonSize}em`} 100%,
        calc(
                ${({ $ribbonSize }) => `${$ribbonSize}em`} +
                    ${({ $depth }) => `${$depth}em`}
            )
            calc(100% - ${({ $depth }) => `${$depth}em`}),
        calc(
                100% - ${({ $ribbonSize }) => `${$ribbonSize}em`} -
                    ${({ $depth }) => `${$depth}em`}
            )
            calc(100% - ${({ $depth }) => `${$depth}em`}),
        calc(100% - ${({ $ribbonSize }) => `${$ribbonSize}em`}) 100%,
        100% 100%,
        calc(100% - ${({ $cutoutPart }) => `${$cutoutPart}em`})
            calc(50% + ${({ $depth }) => `${$depth}em`} / 2),
        100% ${({ $depth }) => `${$depth}em`},
        calc(100% - ${({ $ribbonSize }) => `${$ribbonSize}em`})
            ${({ $depth }) => `${$depth}em`},
        calc(
                100% - ${({ $ribbonSize }) => `${$ribbonSize}em`} -
                    ${({ $depth }) => `${$depth}em`}
            )
            0,
        calc(
                ${({ $ribbonSize }) => `${$ribbonSize}em`} +
                    ${({ $depth }) => `${$depth}em`}
            )
            0,
        ${({ $ribbonSize }) => `${$ribbonSize}em`}
            ${({ $depth }) => `${$depth}em`},
        0 ${({ $depth }) => `${$depth}em`},
        ${({ $cutoutPart }) => `${$cutoutPart}em`}
            calc(50% + ${({ $depth }) => `${$depth}em`} / 2)
    );
    background-color: ${({ theme }) => theme.colors.main}; /* the main color */
    width: fit-content;
`
