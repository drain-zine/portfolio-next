import React, { useEffect, useState, useRef } from 'react';
import { useGetScrollY } from '../../hooks/useGetScrollY';
import Image from 'next/image';
import styles from './ImageCursor.module.scss';
import { useIdleTimer } from 'react-idle-timer';
import { motion } from 'framer-motion';

const ImageCursor = ({src, parentRef, debug = false, width='25vw'}) => {
    const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
    const [mouseYOffset, setMouseYOffset] = useState(0);
    const [parentHeight, setParentHeight] = useState(0);
    const cursorRef = useRef(null);
    const scrollY = useGetScrollY();
    const timeout = 1250;
    const fadeTime = 0.5;

    const [isIdle, setIsIdle] = useState(false)

    useIdleTimer({
      timeout,
      onActive: () => setIsIdle(false),
      onIdle: () => setIsIdle(true)
    });

    const diff = mouseCoord.y - mouseYOffset;
    const showCursorImage = diff >= 0 && diff <= parentHeight;

    useEffect(() => {
        if(parentRef.current){
           setParentHeight(parentRef.current.clientHeight);
        }
    }, [parentRef])

    useEffect(() => {
        if(parentRef.current){
            const viewportOffset = parentRef.current.getBoundingClientRect();
            setMouseYOffset(viewportOffset.top);
        }
    }, [parentRef, scrollY]);
    
    useEffect(() => {
        const update = (e) =>  setMouseCoord({x: e.x, y: e.y});

        window.addEventListener('mousemove', update);
        window.addEventListener('touchmove', update);

        return () => {
            window.removeEventListener('mousemove', update);
            window.removeEventListener('touchmove', update);
        }
    }, [setMouseCoord]);

    useEffect(() => {
        if(debug){
            console.log('y: ' + mouseCoord.y, ' offset: ' + mouseYOffset, ' diff: ' + diff);
            console.log('pH: ' + parentHeight + ' show: ' + showCursorImage);
        }
    }, [mouseCoord, mouseYOffset, showCursorImage, diff])
    
    return(
        <div ref={cursorRef} className={styles.cursorContainer} style={{width, top: Math.max(0,mouseCoord.y - mouseYOffset), left: mouseCoord.x, transform: 'translate(-50%,-50%)'}}>
            <motion.div
                variants={{
                    in: { opacity: 1 },
                    out: { opacity: 0 },
                    initial: { opacity: 1}
                }}
                initial={'initial'}
                animate={(!isIdle && showCursorImage) ? 'in' : 'out'}
                transition={{duration: fadeTime}}
            >
                <Image layout={'fill'} src={src}/>
            </motion.div>
        </div>
    );
}

export default ImageCursor;