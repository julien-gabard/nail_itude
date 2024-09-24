import { FC } from 'react'

import * as S from 'styles/components/ui/Spinner'

export interface ISpinnerProps {
    /**
     * Default 24
     */
    size?: number
}

const Spinner: FC<ISpinnerProps> = ({ size = 24 }) => (
    <S.Svg viewBox={`0 0 ${size} ${size}`} $spinnerSize={size}>
        <S.Circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 2}
            $spinnerSize={size}
        ></S.Circle>
    </S.Svg>
)

export default Spinner
