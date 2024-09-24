import { FC, ReactElement } from 'react'

import * as S from 'styles/components/ui/RibbonTail'

export interface IRibbonTailProps {
    /**
     * Default ''
     */
    children?: string | number | ReactElement
    /**
     * Default 0.5
     */
    foldedPart?: number
    /**
     * Default 0.8
     */
    ribbonShape?: number
}

const RibbonTail: FC<IRibbonTailProps> = ({
    children = '',
    foldedPart = 0.5,
    ribbonShape = 0.8,
}) => (
    <S.Container $foldedPart={foldedPart} $ribbonShape={ribbonShape}>
        {children}
    </S.Container>
)

export default RibbonTail
