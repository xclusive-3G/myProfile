export const fade = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? - 40 : direction === 'right' ? -40 : 0,
            y: direction === 'up' ? -40 : direction === 'down' ? -40 : 0
        },
        show: {
            y:0,
            x:0,
            opacity:1,
            transition: {
                type:"spring",
                duration: 1.2,
                delay: delay,
                ease:'easeInOut',
                stiffness:500
            }
        }
    }
}