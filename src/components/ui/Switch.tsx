import {
    FC,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactElement,
} from 'react'

import * as S from 'styles/components/ui/Switch'
import { animatedSwitch } from 'config/animated'

export interface ISwitchProps {
    className?: string | undefined
    /**
     * Default false
     */
    isActive?: boolean
    iconLeft?: ReactElement | undefined
    iconRight?: ReactElement | undefined
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
    onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined
    /**
     * Default 'small'
     */
    size?: 'small' | 'medium' | 'large'
}

const Switch: FC<ISwitchProps> = ({
    className,
    isActive = false,
    iconLeft,
    iconRight,
    onClick,
    onKeyDown,
    size = 'small',
}) => {
    const { transition } = animatedSwitch

    return (
        <S.Container
            id='switch'
            className={className}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onKeyDown}
            $isActive={isActive}
            $size={size}
        >
            <S.Circle layout transition={transition} $size={size}>
                {isActive ? iconRight : iconLeft}
            </S.Circle>
        </S.Container>
    )
}

export default Switch
