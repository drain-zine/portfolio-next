const staggerChildren = 0.8;
const duration = 0.5

export const variants = {
    in: {
      transition: {
        staggerChildren,
        staggerDirection: -1,
        duration
      }
    },
    out: {
      transition: {
        staggerChildren,
        duration
      }
    },
    initial: {
        transition: {
            staggerChildren,
            duration
        }
    }
  };