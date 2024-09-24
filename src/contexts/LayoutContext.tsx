import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    useCallback,
    useMemo,
    useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, darkTheme, lightTheme } from 'config/theme'
import getIsDarkTheme from 'helpers/getIsDarkTheme'

export interface ILayoutProviderProps {
    children?: ReactNode
}

export interface ILayoutContextDefaultValue {
    isDarkTheme: boolean
    isOpenSideDrawer: boolean
    setIsOpenSideDrawer: Dispatch<SetStateAction<boolean>>
    toggleSideDrawer: () => void
    toggleTheme: () => void
}

const layoutContextDefaultValue: ILayoutContextDefaultValue = {
    isDarkTheme: false,
    isOpenSideDrawer: false,
    setIsOpenSideDrawer: prevState => prevState,
    toggleSideDrawer: () => {
        // Changes the state of isOpenSideDrawer
    },
    toggleTheme: () => {
        // Changes the state of isDarkTheme
    },
}

export const LayoutContext = createContext(layoutContextDefaultValue)

const LayoutProvider: FC<ILayoutProviderProps> = ({ children }) => {
    const [isOpenSideDrawer, setIsOpenSideDrawer] = useState<boolean>(false)
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getIsDarkTheme())

    const toggleSideDrawer = useCallback(() => {
        setIsOpenSideDrawer(prevState => !prevState)
    }, [])

    const toggleTheme = useCallback(() => {
        setIsDarkTheme(prevState => {
            localStorage.setItem('isDarkTheme', JSON.stringify(!prevState))

            return !prevState
        })
    }, [])

    const value = useMemo(
        () => ({
            isDarkTheme,
            isOpenSideDrawer,
            setIsOpenSideDrawer,
            toggleSideDrawer,
            toggleTheme,
        }),
        [isDarkTheme, isOpenSideDrawer, toggleTheme, toggleSideDrawer],
    )

    return (
        <LayoutContext.Provider value={value}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <GlobalStyles $isOpenSideDrawer={isOpenSideDrawer} />
                {children}
            </ThemeProvider>
        </LayoutContext.Provider>
    )
}

export default LayoutProvider
