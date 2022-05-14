import React, { useEffect, useState } from 'react';
import styles from './ScrollGallery.module.scss';
import { motion, transform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useIdleTimer } from 'react-idle-timer';
import classnames from 'classnames';

export const VerticalScroll = ({children}) => (
    <>
        {children}
    </>
);

export const HorizontalScroll = ({children}) => (
    <>
        {children}
    </>
);


const ScrollGallery = ({children, className, verticalUnit = 100, horizontalUnit = 35, debug = true, ...props}) => {
    const thresh = 50;
    const damping = 0.5;
    const timeout = 500;

    const aspectRatio =  horizontalUnit / verticalUnit;
    const nElements = React.Children.count(children[0].props.children);

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

    const accumScroll = (delta) => setCumulativeScroll(prevCumulativeScroll => Math.max(Math.min(prevCumulativeScroll + (delta * damping), 0), ( nElements - 1) * -1*verticalUnit));
    //const accumScroll = (delta) => setCumulativeScroll(prevCumulativeScroll => prevCumulativeScroll + (delta * damping));
    const resetAccum = () => setCumulativeScroll(0);

    const debounceScroll = () => {
        setScrollLock(true);
        setTimeout(() => setScrollLock(false), 500);
    };
    

    // Listen to mouse
    useEffect(() => {
        const update = (e) => {
            console.log('update cb')
            if(galleryFocus){
                const delta = e.wheelDelta;
                setScrollDir(Math.sign(delta));
                !scrollLock && accumScroll(delta);
                console.log('in update scroll');
                if(cumulativeScroll < 0 && Math.sign(delta) >= 0 ){
                    console.log('stop prop ' + cumulativeScroll);
                    e.preventDefault();
                    e.stopPropagation();
                    return false;    
                }

                
            }
        }

        window.addEventListener('mousewheel', update,  { passive:false });

        return () => {
            window.removeEventListener('mousewheel', update);
        }
    }, [setScrollDir, accumScroll, cumulativeScroll, galleryFocus, scrollLock]);


    
    // Focus gallery if in view
    useEffect(() => {
        if(galleryInView){
            entry.target.scrollIntoView(true, {behaviour: 'smooth'});
            setGalleryFocus(true);
            debounceScroll();
        }else{
            setGalleryFocus(false);
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
                    if(activeEntry < nElements - 1){ // make sure we aren't on last entry
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
        if(debug){
            console.log('gallery focus: ' + galleryFocus, ' activeEntry: ' + activeEntry + ' scroll lock: ' + scrollLock);
            console.log('cum scroll: ' + cumulativeScroll);
        }
    }, [debug, galleryFocus, activeEntry, cumulativeScroll, scrollLock]);

    return (
        <section className={classnames(styles.scrollGalleryContainer, className)} {...props} ref={galleryRef}>
                {children.map(c => (
                    <>
                        {c.type === VerticalScroll ?
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
                                className={c.props.className}
                            >
                                {c}
                                
                            </motion.div> : 
                                <div style={{overflow: 'hidden'}}>
                                    <motion.div
                                        variants = {{
                                            scroll: {
                                                x:`${aspectRatio * (cumulativeScroll)}vh`,
                                                transition: {duration: scrollLock ? 0.5 : 0}
                    
                                            },
                                        }}
                                        animate={
                                            galleryFocus && 'scroll'
                                        }
                                        className={c.props.className}
                                        >
                                            {c}
                                        </motion.div>
                                </div>
                            
                        
                        }
                    </>
                ))}
                
                
        </section>
    );
};

export default ScrollGallery;