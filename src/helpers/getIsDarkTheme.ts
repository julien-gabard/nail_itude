/**
 * Checks whether the isDarkTheme key is present in the local storage and the theme mode selected in the browser
 */
const getIsDarkTheme = (): boolean =>
    localStorage.getItem('isDarkTheme') === null
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : localStorage.getItem('isDarkTheme') === 'true'

export default getIsDarkTheme
