import { useCallback, useLayoutEffect, useState } from 'react'

/**
 * Determine the width and height of the window
 */
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })

    const handleSize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, [])

    useLayoutEffect(() => {
        handleSize()

        window.addEventListener('resize', handleSize)

        return () => window.removeEventListener('resize', handleSize)
    }, [handleSize])

    return windowSize
}

export default useWindowSize
