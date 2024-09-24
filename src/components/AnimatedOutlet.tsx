import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { cloneElement } from 'react'

const AnimatedOutlet = () => {
    const { pathname } = useLocation()
    const element = useOutlet()

    return (
        <AnimatePresence mode='wait' initial={false}>
            {element && cloneElement(element, { key: pathname })}
        </AnimatePresence>
    )
}

export default AnimatedOutlet
