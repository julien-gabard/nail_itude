import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background}01;
    backdrop-filter: blur(10px);
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
`
