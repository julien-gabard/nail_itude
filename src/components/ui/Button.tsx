import { FC, MouseEventHandler, ReactNode } from 'react'

import * as S from 'styles/components/ui/Button'

export interface IButtonProps {
    /**
     * Default 'button'
     */
    ariaLabel?: string
    children: ReactNode
    /**
     * Default ''
     */
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    /**
     * Default false
     */
    isDisabled?: boolean
    /**
     * Default 'button'
     */
    type?: 'button' | 'submit' | 'reset'
}

const Button: FC<IButtonProps> = ({
    ariaLabel = 'button',
    children,
    className = '',
    onClick = event => event,
    isDisabled = false,
    type = 'button',
}) => (
    <S.Button
        type={type}
        aria-label={ariaLabel}
        onClick={onClick}
        className={className}
        disabled={isDisabled}
        $isDisabled={isDisabled}
    >
        {children}
    </S.Button>
)

export default Button
