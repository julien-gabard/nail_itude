import styled from 'styled-components'

export interface IContainerProps {
    $foldedPart: number
    $ribbonShape: number
}

export const Container = styled.div<IContainerProps>`
    background: ${({ theme }) => theme.colors.main};
    border-bottom: ${({ $foldedPart }) => `${$foldedPart}em`} solid #0005;
    border-left: ${({ $ribbonShape }) => `${$ribbonShape}em`} solid #0000;
    clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - ${({ $foldedPart }) => `${$foldedPart}em`}),
        calc(100% - ${({ $foldedPart }) => `${$foldedPart}em`}) 100%,
        calc(100% - ${({ $foldedPart }) => `${$foldedPart}em`})
            calc(100% - ${({ $foldedPart }) => `${$foldedPart}em`}),
        0 calc(100% - ${({ $foldedPart }) => `${$foldedPart}em`}),
        ${({ $ribbonShape }) => `${$ribbonShape}em`}
            calc(50% - ${({ $foldedPart }) => `${$foldedPart}em`} / 2)
    );
    color: #ffffff;
    font-size: inherit;
    font-weight: bold;
    line-height: 1.8;
    padding-inline: 1.5em 1.5em;
    position: absolute;
    right: calc(-1 * ${({ $foldedPart }) => `${$foldedPart}em`});
    top: 57%;
    transform: translateY(-50%);
`
