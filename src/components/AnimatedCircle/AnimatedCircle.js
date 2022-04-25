import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useSpring } from 'framer-motion';
import styles from './AnimatedCircle.module.scss';

const AnimatedCircle = () => {
    const rotateRef = useRef(null);
    const { scrollYProgress } = useViewportScroll();
    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
    const [rotateState, setRotateState] = useState(0);


    useEffect(() => {
        return pathLength.onChange((v) => setRotateState(v));
    }, [pathLength]);

    useEffect(() => {
        if(rotateRef.current){
            rotateRef.current.style.transform = `translate(0, -50%) rotate(${rotateState * 360}deg)`;
        }
    }, [rotateState, rotateRef]);

    return(
        <div className={styles.animateableContainer}>
            <svg 
                viewBox="0 0 64 64" 
                className={styles.circleContainer}
                ref={rotateRef}
                style={{
                    transform: 'translate(0, -50%)'
                }}
            >
                <motion.circle r="16" cx="50%" cy="50%">
                </motion.circle>

                <motion.circle r="24" cx="50%" cy="50%">
                </motion.circle>

                
            </svg>
            <svg
                viewBox="0 0 64 64" 
                className={styles.lineContainer}
            >
                <line x1="50%" y1="0" x2="50%" y2="150%"
                    strokeDasharray='100%'
                    strokeDashoffset={`${100 - (100 * rotateState)}%`}
                
                />
            </svg>
            <svg
                viewBox="0 0 64 64" 
                className={styles.lineContainerRotate}
                style={{transform: 'translate(18.55%, -80%) rotate(45deg)'}}
            >
                <line x1="50%" y1="0" x2="50%" y2="300%"
                    strokeDasharray='100%'
                    strokeDashoffset={`${100 - (100 * rotateState)}%`}
                
                />
            </svg>
        </div>
    );
}

export default AnimatedCircle;