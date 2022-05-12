import React, { useEffect, useState, useRef } from 'react';
import { useGetScrollY } from '../../hooks/useGetScrollY';
import Image from 'next/image';
import styles from './ImageCursor.module.scss';
import { useIdleTimer } from 'react-idle-timer';
import { motion } from 'framer-motion';

const ImageCursor = ({src, parentRef, debug = false, width='25vw'}) => {
    const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [parentDim, setParentDim] = useState({ w: 0, h: 0 });
    const cursorRef = useRef(null);
    const scrollY = useGetScrollY();
    const timeout = 1250;
    const fadeTime = 0.5;

    const [isIdle, setIsIdle] = useState(true)

    useIdleTimer({
      timeout,
      onActive: () => setIsIdle(false),
      onIdle: () => setIsIdle(true)
    });

    const diff = {
        x: mouseCoord.x - mouseOffset.x,
        y: mouseCoord.y - mouseOffset.y
    };

    const showCursorImage = diff.x >= 0 && diff.y >= 0 
        && diff.y <= parentDim.h && diff.x <= parentDim.w;

    useEffect(() => {
        if(parentRef.current){
           setParentDim({w: parentRef.current.clientWidth, h: parentRef.current.clientHeight});
        }
    }, [parentRef])

    useEffect(() => {
        if(parentRef.current){
            const viewportOffset = parentRef.current.getBoundingClientRect();
            setMouseOffset({x: viewportOffset.left, y: viewportOffset.top});
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
            console.log('loc: (' + mouseCoord.x + ',' + mouseCoord.y + ') offset: (' + mouseOffset.x + ','+mouseOffset.y + '), diff: (' + diff.x + ','+diff.y + ')');
            console.log('parentDims: (' + parentDim.w + ',' + parentDim.h + ') show: ' + showCursorImage);
        }
    }, [mouseCoord, mouseOffset, parentDim, showCursorImage, diff])
    
    return(
        <div ref={cursorRef} className={styles.cursorContainer} style={{width, top: Math.max(0,diff.y), left: Math.max(0,diff.x), transform: 'translate(-50%,-50%)'}}>
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