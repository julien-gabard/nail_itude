import { ReactNode, createElement } from 'react'
import styled from 'styled-components'

export interface IDynamicTypographyProps {
    children: ReactNode
    className: string
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export const DynamicTypography = styled(
    ({ variant, children, className }: IDynamicTypographyProps) =>
        createElement(variant, { className }, children),
)(({ theme }) => ({
    [`@media ${theme.breakpoints.down('lg')}`]: {},
    [`@media ${theme.breakpoints.down('md')}`]: {},
    [`@media ${theme.breakpoints.down('sm')}`]: {},
    [`@media ${theme.breakpoints.down('xs')}`]: {},
}))
