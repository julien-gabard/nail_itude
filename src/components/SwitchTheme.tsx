import { FC, KeyboardEventHandler, useContext, useMemo } from 'react'

import Icons from 'components/ui/Icons'
import { LayoutContext } from 'contexts/LayoutContext'
import Switch from 'components/ui/Switch'

export interface ISwitchTheme {
    size?: 'small' | 'medium' | 'large'
}

const SwitchTheme: FC<ISwitchTheme> = ({ size = 'medium' }) => {
    const { isDarkTheme, toggleTheme } = useContext(LayoutContext)
    const iconSize = useMemo(() => {
        switch (size) {
            case 'small':
                return '16px'
            case 'medium':
                return '20px'
            case 'large':
                return '26px'
        }
    }, [size])

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
        if (event.key === 'Enter') {
            toggleTheme()
        }
    }

    return (
        <Switch
            isActive={isDarkTheme}
            onClick={toggleTheme}
            onKeyDown={handleKeyDown}
            iconLeft={<Icons iconName='lightMode' size={iconSize} />}
            iconRight={<Icons iconName='darkMode' size={iconSize} />}
            size={size}
        />
    )
}

export default SwitchTheme
