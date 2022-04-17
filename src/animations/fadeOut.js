const staggerChildren = 0.5
const duration = 1;

export const variants = {
    initial: { opacity: 0 },
    in: { 
        opacity: 1,    
        transition: {
            staggerChildren,
            duration
        }
     },
    out: { 
        opacity: 0,
        transition: {
            staggerChildren,
            staggerDirection: -1,
            duration
        } 
    }
}