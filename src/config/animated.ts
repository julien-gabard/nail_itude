/**
 * Page animation
 */
export const animatedPage = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: 'backInOut' },
}

/**
 * Animation of the side drawer, nav and links
 */
export const animatedSideDrawer = {
    variants: {
        open: {
            x: 0,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        closed: {
            x: '-100%',
            transition: { duration: 0.3, ease: 'easeInOut', delay: 0.3 },
        },
    },
    nav: {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    },
    item: {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    },
}

/**
 * Animation of the backdrop component
 */
export const animatedBackdrop = {
    open: {
        opacity: 1,
        transition: { duration: 0.3, ease: 'linear' },
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.3, ease: 'linear' },
    },
}

/**
 * Animation of the switch component
 */
export const animatedSwitch = {
    transition: {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    },
}

/**
 * Animation of the image carousel
 */
export const animatedCarousel = {
    variants: {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    },
    transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
    },
}

/**
 * Animation of the image gallery
 */
export const animatedGallery = {
    variantsContainer: {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    },
    variantsImage: {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    },
}
