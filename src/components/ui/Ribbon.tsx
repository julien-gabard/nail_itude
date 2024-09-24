import { FC, ReactElement } from 'react'

import * as S from 'styles/components/ui/Ribbon'

export interface IRibbonProps {
    /**
     * Default ''
     */
    children?: string | number | ReactElement
    /**
     * Default 1.5
     */
    cutoutPart?: number
    /**
     * Default 0.5
     */
    depth?: number
    /**
     * Default 3
     */
    ribbonSize?: number
}

const Ribbon: FC<IRibbonProps> = ({
    children = '',
    cutoutPart = 1.5,
    depth = 0.5,
    ribbonSize = 3,
}) => (
    <S.Container
        $ribbonSize={ribbonSize}
        $depth={depth}
        $cutoutPart={cutoutPart}
    >
        {children}
    </S.Container>
)

export default Ribbon
