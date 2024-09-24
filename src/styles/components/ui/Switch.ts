import { motion } from 'framer-motion'
import styled from 'styled-components'

export interface IContainerProps {
    $isActive?: boolean
    $size: 'small' | 'medium' | 'large'
}

export interface ICircleProps {
    $size: 'small' | 'medium' | 'large'
}

// box-shadow: ${({ theme }) =>
//     theme.mode === 'dark'
//         ? 'inset 0 -2px 5px 0 rgba(255, 255, 255, 0.5)'
//         : 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.5)'};

export const Container = styled(motion.div)<IContainerProps>`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    display: flex;
    justify-content: ${({ $isActive }) =>
        $isActive ? 'flex-end' : 'flex-start'};
    align-items: center;
    padding: 0 2px;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: transparent;

    ${({ $size }) => {
        switch ($size) {
            case 'small':
                return `
                    width: 44px;
                    height: 24px;
                `
            case 'medium':
                return `
                    width: 56px;
                    height: 32px;
                `
            case 'large':
                return `
                    width: 72px;
                    height: 40px;
                `
        }
    }}
`

export const Circle = styled(motion.div)<ICircleProps>`
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $size }) => {
        switch ($size) {
            case 'small':
                return `
                    width: 20px;
                    height: 20px;
                `
            case 'medium':
                return `
                    width: 28px;
                    height: 28px;
                `
            case 'large':
                return `
                    width: 36px;
                    height: 36px;
                `
        }
    }}
`
