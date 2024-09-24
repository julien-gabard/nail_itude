import 'styled-components'
import { DefaultTheme, createGlobalStyle } from 'styled-components'

export type TDevice = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

declare module 'styled-components' {
    export interface DefaultTheme {
        mode: 'dark' | 'light'
        breakpoints: {
            values: {
                xs: number
                sm: number
                md: number
                lg: number
                xl: number
            }
            unit: string
            up: (device: TDevice) => string
            down: (device: TDevice) => string
            between: (minDevice: TDevice, maxDevice: TDevice) => string
        }
        colors: {
            main: string
            secondary: string
            text: string
            textSecondary: string
            background: string
            backgroundSecondary: string
            border: string
            error: string
            success: string
            info: string
        }
        boxShadow: string
        dropShadow: string
        maxWidth: string
        blur: string
        borderRadius: string
        header: {
            height: string
        }
    }
}

/**
 * Other values theme
 */
export const globalValues = {
    breakpoints: {
        values: {
            xs: 320,
            sm: 425,
            md: 768,
            lg: 1200,
            xl: 1440,
        },
        unit: 'px',
        up: function (device: TDevice) {
            return `only screen and (min-width: ${this.values[device]}${this.unit})`
        },
        down: function (device: TDevice) {
            return `only screen and (max-width: ${this.values[device]}${this.unit})`
        },
        between: function (minDevice: TDevice, maxDevice: TDevice) {
            return `only screen and (min-width: ${this.values[minDevice]}${this.unit}) and (max-width: ${this.values[maxDevice]}${this.unit})`
        },
    },
    maxWidth: '1440px',
    blur: '10px',
    borderRadius: '2px',
    header: {
        height: '50px',
    },
}

/**
 * Color theme light
 */
export const lightTheme: DefaultTheme = {
    mode: 'light',
    colors: {
        main: '#CB3C7B',
        secondary: '#FFB6C1',
        text: '#000000',
        textSecondary: '#ffffff',
        background: '#ffffff',
        backgroundSecondary: '#dcdcdc',
        border: '#aaaaaa',
        error: '#ff3b3b',
        success: '#4acc4a',
        info: '#b5b5ff',
    },
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px',
    dropShadow: '0 5px 5px rgba(0, 0, 0, 0.3)',
    ...globalValues,
}

/**
 * Color theme dark
 */
export const darkTheme: DefaultTheme = {
    mode: 'dark',
    colors: {
        main: '#CB3C7B',
        secondary: '#FFB6C1',
        text: '#ffffff',
        textSecondary: '#000000',
        background: '#282828',
        backgroundSecondary: '#464646',
        border: '#646464',
        error: '#ff6464',
        success: '#64be64',
        info: '#b5b5ff',
    },
    boxShadow: 'rgba(0, 0, 0, 0.6) 0px 5px 10px',
    dropShadow: '0 5px 5px rgba(0, 0, 0, 0.6)',
    ...globalValues,
}

/**
 * Component for applying global styles
 */
export const GlobalStyles = createGlobalStyle<{ $isOpenSideDrawer: boolean }>`
    :root {
        color-scheme: ${({ theme }) => theme.mode};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }
    
    body {
        overflow: ${({ $isOpenSideDrawer }) => ($isOpenSideDrawer ? 'hidden' : 'visible')};
    }
    
    body:has(#carousel) {
        overflow: hidden;
    }
`
