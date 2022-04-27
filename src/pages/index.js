import Link from 'next/link';
import React from 'react';
import styles from '../styles/index.module.scss'
import { variants } from '../animations/fadeOut';
import { staggerVariants } from '../animations/stagger';
import { motion } from 'framer-motion';

const slideVariants=  {
    out: { x: '65%' }
};

const Home = () => {
    return (
        <motion.main
            className={styles.main}
            variants={staggerVariants}
            initial={'initial'}
            animate={'in'}
            exit={'out'}
        >
            <motion.div 
                className={styles.animatableContainer}
                variants={staggerVariants}
            >
                {/* <div className={styles.line}/> */}
                <motion.section 
                className={styles.nav}
                            variants={staggerVariants}>
                    <motion.h3
                        variants={variants}
                    >
                        contents</motion.h3>
                    <motion.div className={styles.links}>
                        <Link
                            href='/design'
                        >
                            <motion.h3
                                variants={variants}
                            >
                                design</motion.h3>
                        </Link>
                        <motion.h3                        
                            variants={variants}
                        >
                            digital posters</motion.h3>
                        <motion.h3                        
                            variants={variants}
                        >
                            details</motion.h3>
                    </motion.div>
                </motion.section>
                <svg className={styles.circleSvg} width="100%" height="100%" viewBox="0 0 100vw 100vh">
                    <defs>
                        <g id="lines">
                            <motion.line
                                variants={{
                                    in: {x: '0%'},
                                    out: {x: '-100%'},
                                    initial: {x: '0%'}

                                }} 
                                    // transition={{duration: 0.8 }}
                                x1="0" 
                                x2="100%" 
                                y1="50%" 
                                y2="50%" 
                                strokeWidth="10" />
                        </g>
                        <circle className={styles.circle} id="circle" cx="15%" cy="15%" r="15%"/>
                    </defs>
                    <use href='#lines' stroke='white' fill='none'/>
                    <mask id='mask'>
                        <rect width="100%" height="100%" fill="white"/>
                        <use href='#lines' stroke='black'/>
                    </mask>
                    <use href='#circle' fill='black' /*stroke='none'*//>
                    <use href="#circle" fill="white" /* stroke='none' */ mask="url(#mask)"/>
                </svg>
            </motion.div>
             <motion.section 
                variants={variants}
                className={styles.content}
                >
                {/* <div className={styles.title}>
                    <h1>Tom</h1>
                    <h1>Stannett</h1>
                </div> */}
                <div className={styles.title2}>
                    <p>Tom Stannett</p>
                </div>
                {/*<div className={styles.nav}>
                    <Link
                        href='/design'
                    >
                        <h3>design</h3>
                    </Link>
                    <h3>other</h3>
                    <h3>details</h3>
                </div> */}
            </motion.section> 
            <motion.section
                        className={styles.blackBackground}
                        variants={slideVariants}
                    >
            </motion.section>
        </motion.main>
    );
};

export default Home;