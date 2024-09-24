import { FC, ReactNode } from 'react'

import * as S from 'styles/components/ui/Card'

export interface ICardProps {
    children: ReactNode
    /**
     * Default ''
     */
    className?: string
}

const Card: FC<ICardProps> = ({ children, className = '' }) => (
    <S.CardContainer className={className}>{children}</S.CardContainer>
)

export default Card
