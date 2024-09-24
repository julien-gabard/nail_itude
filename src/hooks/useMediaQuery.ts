import { useCallback, useLayoutEffect, useState } from 'react'

import { TDevice, globalValues } from 'config/theme'

export type TUseBreakpoint = (device: TDevice) => boolean

const { breakpoints } = globalValues

const getIsUndefinedWindow = () =>
    typeof window === 'undefined' || typeof window.matchMedia === 'undefined'

const getMatches = (mediaQuery: string): boolean => {
    if (getIsUndefinedWindow()) {
        return false
    }

    return window.matchMedia(mediaQuery).matches
}

/**
 * Is a hook for responding to CSS media queries in JavaScript.
 * It evaluates a device string and returns a boolean indicating whether the query matches.
 *
 * @author Gabard Julien
 */
const useMediaQuery: TUseBreakpoint = device => {
    const [isMatches, setIsMatches] = useState<boolean>(
        getMatches(
            device === 'xl' ? breakpoints.up(device) : breakpoints.down(device),
        ),
    )

    const handleChange = useCallback((event: MediaQueryListEvent) => {
        setIsMatches(event.matches)
    }, [])

    useLayoutEffect(() => {
        if (getIsUndefinedWindow()) {
            return
        }

        const mediaQueryList = window.matchMedia(
            device === 'xl' ? breakpoints.up(device) : breakpoints.down(device),
        )

        mediaQueryList.addEventListener('change', handleChange)

        return () => {
            mediaQueryList.removeEventListener('change', handleChange)
        }
    }, [device, handleChange])

    return isMatches
}

export default useMediaQuery
