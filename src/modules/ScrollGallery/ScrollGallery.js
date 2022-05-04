import React, { useEffect, useState } from 'react';
import styles from './ScrollGallery.module.scss';
import { motion, transform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useIdleTimer } from 'react-idle-timer';

const ScrollGallery = ({children, verticalUnit = '100', horizontalUnit = '100', debug = true}) => {
    const thresh = 50;
    const damping = 0.5;
    const timeout = 500;
    const aspectRatio = verticalUnit / horizontalUnit;

    const [scrollDir, setScrollDir] = useState(0);
    const [cumulativeScroll, setCumulativeScroll] = useState(0);
    const [activeEntry, setActiveEntry] = useState(0);
    const [galleryFocus, setGalleryFocus] = useState(false);
    const [scrollLock, setScrollLock] = useState(false);
    const [isIdle, setIsIdle] = useState(false);

    useIdleTimer({
        timeout,
        onActive: () => setIsIdle(false),
        onIdle: () => setIsIdle(true)
      });


    const [ galleryRef, galleryInView, entry ] = useInView({
        /* fully in view */
        threshold: 0.9,
    });

    const [ firstChildRef, firstChildInView ] = useInView({
        /* fully in view */
        threshold: 0.98,
    });

    const accumScroll = (delta) => setCumulativeScroll(prevCumulativeScroll => Math.max(Math.min(prevCumulativeScroll + (delta * damping), 0), ( children.length - 1) * -1*verticalUnit));
    const resetAccum = () => setCumulativeScroll(0);

    const debounceScroll = () => {
        setScrollLock(true);
        setTimeout(() => setScrollLock(false), 500);
    };
    

    // Listen to mouse
    useEffect(() => {
        let timer;
        const update = (e) => {
            if(galleryFocus && !scrollLock){
                const delta = e.wheelDelta;
                setScrollDir(Math.sign(delta));
                // setScrollDelta(delta);

                // if(timer !== null){
                // // //setFinalScroll(cumulativeScroll);
                // //     clearTimeout(timer);
                // // }

                // // timer = setTimeout(() => {
                // //     console.log('resetting accum');
                // //     resetAccum();
                // // //resetAccum();
                // // }, 1000);
    
                if(cumulativeScroll !== 0 && Math.sign(delta) >= 0 ){
                    console.log('here!');
                    // e.preventDefault();
                    // e.stopPropagation();
                    // return false;    
                }

                accumScroll(delta);
            }
            // //setFinalScroll(0);
        }

        window.addEventListener('wheel', update,  { passive:false });

        return () => {
            window.removeEventListener('wheel', update);
        }
    }, [setScrollDir, accumScroll, cumulativeScroll, galleryFocus, firstChildInView, scrollLock]);


    
    // Focus gallery if in view
    useEffect(() => {
        if(galleryInView){
            entry.target.scrollIntoView(true, {behaviour: 'smooth'});
            setGalleryFocus(true);
        }else{
            //setGalleryFocus(false);
        }
    }, [galleryInView, entry]);

    // Handle scroll snapping
    useEffect(() => {
        if(!scrollLock){
            const entry = activeEntry;
            if(isIdle){ // Snap back if idle
                setCumulativeScroll( -1 * verticalUnit * entry); 
                debounceScroll();
            }else{
                if(scrollDir < 0 && cumulativeScroll <  -1 * thresh + activeEntry * -1 * verticalUnit){ // scroll down snapping
                    if(activeEntry < children.length - 1){ // make sure we aren't on last entry
                            setActiveEntry(entry + 1);
                            setCumulativeScroll( -1 * verticalUnit * (entry + 1));
                            debounceScroll();
                    }
                }else if(scrollDir > 0 && cumulativeScroll > thresh + activeEntry * -1 * verticalUnit){ // scroll up snapping
                    if(activeEntry > 0){ // make sure we aren't on first entry
                            setActiveEntry(entry - 1);
                            setCumulativeScroll( -1 * verticalUnit * (entry - 1));
                            debounceScroll();
                        }
                }
            }
        }
        
    }, [cumulativeScroll, scrollLock, activeEntry, scrollDir, isIdle]);

    useEffect(() => {
        console.log('gallery focus: ' + galleryFocus, ' activeEntry: ' + activeEntry + ' scroll lock: ' + scrollLock);
        console.log('cum scroll: ' + cumulativeScroll);
    }, [galleryFocus, activeEntry, cumulativeScroll, scrollLock]);

    return (
        <section className={styles.scrollGalleryContainer} ref={galleryRef}>
                <motion.div
                    variants = {{
                        scroll: {
                            y:`${cumulativeScroll}vh`,
                            transition: {duration: scrollLock ? 0.5 : 0}

                        },
                    }}
                    animate={
                        galleryFocus && 'scroll'
                    }
                >
                    {children}
                    
                </motion.div>
        </section>
    );
};

export default ScrollGallery;