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
        typography: {
            htmlFontSize: string
            h1: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h2: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h3: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h4: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h5: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h6: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            p: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            span: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
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
    typography: {
        htmlFontSize: '16px',
        h1: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '6rem',
            fontWeight: 300,
            '@media (max-width: 1024px)': {
                fontSize: '5.4rem',
            },
            '@media (max-width: 768px)': {
                fontSize: '4.7rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '3.5rem',
            },
        },
        h2: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '3.75rem',
            fontWeight: 300,
            '@media (max-width: 1024px)': {
                fontSize: '3.3rem',
            },
            '@media (max-width: 768px)': {
                fontSize: '3.125rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '2.4rem',
            },
        },
        h3: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '3rem',
            fontWeight: 400,
            '@media (max-width: 1024px)': {
                fontSize: '2.8rem',
            },
            '@media (max-width: 768px)': {
                fontSize: '2.6rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '2rem',
            },
        },
        h4: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '2rem',
            fontWeight: 400,
            '@media (max-width: 768px)': {
                fontSize: '1.8rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '1.6rem',
            },
        },
        h5: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 400,
            '@media (max-width: 768px)': {
                fontSize: '1.3rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '1.25rem',
            },
        },
        h6: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1.25rem',
            fontWeight: 500,
            '@media (max-width: 425px)': {
                fontSize: '1.125rem',
            },
        },
        p: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
        },
        span: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
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
