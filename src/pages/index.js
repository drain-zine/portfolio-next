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
            <motion.section 
                variants={variants}
                initial={'initial'}
                animate={'in'}
                exit={'out'}
                className={styles.content}
                >
                <div className={styles.title}>
                    <h1>Tom</h1>
                    <h1>Stannett</h1>
                </div>
                <div className={styles.nav}>
                    <Link
                        href='/design'
                    >
                        <h3>design</h3>
                    </Link>
                    <h3>other</h3>
                    <h3>details</h3>
                </div>
            </motion.section>
            <motion.section
                        className={styles.blackBackground}
                        variants={slideVariants}
                        out={'out'}
                    >
            </motion.section>
        </motion.main>
    );
};

export default Home;