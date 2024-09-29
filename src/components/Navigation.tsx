import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'

import * as S from 'styles/components/Navigation'
import Typography from 'components/ui/Typography'
import links from 'config/links'

const Navigation = () => {
    const { pathname } = useLocation()

    const [hoverId, setHoverId] = useState<string | null>(null)

    const handleMouseLeave = useCallback(() => setHoverId(null), [])

    const handleMouseEnter = useCallback((path: string) => setHoverId(path), [])

    return (
        <S.Container onMouseLeave={handleMouseLeave}>
            {links.map(link => (
                <S.Link
                    key={link.id}
                    to={link.path}
                    id={link.id}
                    onMouseEnter={() => handleMouseEnter(link.path)}
                >
                    <Typography variant='span'>{link.labelName}</Typography>
                    {link.path === pathname && (
                        <S.WrapBorderLink
                            layoutId='wrap-border-link'
                            style={{ originY: 'top' }}
                        />
                    )}
                    {link.path === hoverId && (
                        <S.BackgroundLinkHover
                            layoutId='background-link-hover'
                            style={{ originY: 'top' }}
                        />
                    )}
                </S.Link>
            ))}
        </S.Container>
    )
}

export default Navigation
