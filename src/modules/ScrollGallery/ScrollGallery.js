import React, { useEffect, useState } from 'react';
import styles from './ScrollGallery.module.scss';
import { motion, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollGallery = ({children, debug = true}) => {
    const thresh = 30;
    const damping = 1.1;
    const [scrollDelta, setScrollDelta] = useState(0);
    const [cumulativeScroll, setCumulativeScroll] = useState(0);
    const [finalScroll, setFinalScroll] = useState(0);
    const [pageScrollState, setPageScrollState] = useState(0);
    const [galleryFocus, setGalleryFocus] = useState(false);

    const [ galleryRef, galleryInView, entry ] = useInView({
        /* fully in view */
        threshold: 0.95,
      });

    const [ firstChildRef, firstChildInView ] = useInView({
        /* fully in view */
        threshold: 0.98,
      });



    const pageScroll = useSpring(cumulativeScroll, { stiffness: 400, damping: 90 });  

    // Damp cumulative scroll w framer
    useEffect(() => {
        return pageScroll.onChange((v) => { console.log(v); setPageScrollState(v);});
    }, [pageScroll]);

    // Scroll into view when gallery is 95% in viewport
    useEffect(() => {
        if(galleryInView && Math.sign(scrollDelta) < 0){
            setGalleryFocus(true);
            setCumulativeScroll(0);
            setFinalScroll(0);
        }
    }, [galleryInView]);

    // Apply sticky gallery scroll effect
    useEffect(() => {
        if(galleryFocus){
            console.log('scrolling')
            entry.target.scrollIntoView(true, {behaviour: 'smooth'});
        }
    }, [entry, galleryFocus]);

    // Lock viewport to gallery
    useEffect(() => {
        const update = (e) => {
            const delta = e.wheelDelta;
            setScrollDelta(delta);
            // DISABLE UPWARD SCROLLING IF FIRST CHILD IS NOT IN VIEW
            if(!firstChildInView && galleryFocus && Math.sign(delta) >= 0){
                e.preventDefault();
                e.stopPropagation();
                return false; 
            }else if(firstChildInView && galleryFocus &&  Math.sign(delta) >= 0){
                setGalleryFocus(false);
            }
        };

        window.addEventListener('mousewheel', update,  { passive:false });

        return () => {
            window.removeEventListener('mousewheel', update);
        }
    }, [setScrollDelta, firstChildInView, galleryFocus, cumulativeScroll]);

    // accumulate wheel delta
    useEffect(() => {
        if(scrollDelta === 0){
            setFinalScroll(cumulativeScroll);
            setCumulativeScroll(0);
        }else{
            if(Math.abs(cumulativeScroll) > thresh){
                // apply threshold
                setCumulativeScroll(Math.sign(cumulativeScroll) * thresh);
            }
            setCumulativeScroll(prevCumulativeScroll => (prevCumulativeScroll + scrollDelta) / damping);
        }
    }, [scrollDelta]);

    // Debug hook
    useEffect(() => {
        if(debug){
            console.log('delta: ' + scrollDelta + ' cum: ' + cumulativeScroll + ' inView: ' + galleryInView);
            console.log('damped: ' + pageScrollState + ' final ' + finalScroll + ' firstChildView: ' + firstChildInView);
            console.log('focus: ' + galleryFocus);
        }
    }, [scrollDelta, cumulativeScroll, galleryInView, pageScrollState, finalScroll, firstChildInView, galleryFocus]);

    return (
        <section className={styles.scrollGalleryContainer} ref={galleryRef}>
            {/* {children.map((c, i) => (
                <motion.div
                    id={i === 0? 'ref' : 'noref'}
                    ref={i === 0 ? firstChildRef : undefined}
                    variants={{
                        scrollLink: {
                            y: firstChildInView ? `${Math.min(cumulativeScroll, 0)}%` : `${cumulativeScroll}%`
                        },
                        fullScroll: {
                            y: firstChildInView ? `${Math.min(Math.sign(finalScroll) * 100, 0)}%` : `${Math.sign(finalScroll) * 100}%`,
                            transition: {
                                duration: 0.5
                            }
                        }
                    }}
                    animate={
                         galleryFocus && ( Math.abs(finalScroll) <= thresh ? 
                            'scrollLink' :
                            'fullScroll' )
                    }
                >
                    {c}
                </motion.div>
            ))} */}

            {children.map((c, i) => (
                <motion.div>
                    {c}
                </motion.div>
            ))}
        </section>
    );
};

export default ScrollGallery;