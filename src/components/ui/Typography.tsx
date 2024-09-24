import { FC, ReactNode } from 'react'

import * as S from 'styles/components/ui/Typography'

export interface ITypographyProps {
    children: ReactNode
    className?: string
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const Typography: FC<ITypographyProps> = ({
    children,
    className = '',
    variant = 'p',
}) => (
    <S.DynamicTypography variant={variant} className={className}>
        {children}
    </S.DynamicTypography>
)

export default Typography
