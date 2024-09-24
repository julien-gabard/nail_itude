export type TNumberFormat = (
    value: number,
    /**
     * @default { style: 'currency', currency: 'EUR' }
     */
    options?: Intl.NumberFormatOptions,
) => number | string

/**
 * Allows numbers to be formatted according to language
 */
const numberFormat: TNumberFormat = (value, options = {}) => {
    const defaultOptions = {
        style: 'currency',
        currency: 'EUR',
    }
    const numberFormatOptions = Object.assign({}, defaultOptions, options)

    return new Intl.NumberFormat(
        navigator.language,
        numberFormatOptions,
    ).format(value)
}

export default numberFormat
