import React, { useState } from 'react';
import ScrollGallery, { VerticalScroll, HorizontalScroll } from '../../modules/ScrollGallery/ScrollGallery';
import styles from '../../styles/landing.module.scss';
import { motion } from 'framer-motion';
import Nav from '../../components/Nav/Nav';
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import test from '../../assets/AvantVibes/AVArchive.png';
import AVIndex from '../../assets/AvantVibes/AVIndex.png';

const colorPairings = [
    {
        backgroundColor: '#fff',
        color: '#000'
    }, {
        backgroundColor: '#333333',
        color: '#EEEEEE'
    }, {
        backgroundColor: '#888888',
        color: '#BBBBBB'
    }, {
        backgroundColor: '#36454F',
        color: '#fff'
    }, {
        backgroundColor: '#F5F5F5',
        color: '#000'
    }
];


const Design = ({tiles}) => {
    console.log(test);
    const [showContents, setShowContents] = useState(false);
    const toggleShowContents = () => setShowContents(prevShowContents => !prevShowContents);

    return( 
        <main className={styles.main}>
            <section className={styles.sidebar}>
                <div className={styles.test}>
                    <Nav/>
                </div>
                
            </section>
            <section className={styles.centralContent}>
                <section className={styles.heading}>
                    <div className={styles.headingContent}>
                        <h1>Design</h1>
                        <p>Some projects random text ahhh roland suck me please</p>
                    </div>
                </section>
                <ScrollGallery verticalUnit={100} horizontalUnit={100} className={styles.gallery}>
                    <VerticalScroll className={classnames(styles.gallerySection, styles.onTop)}>
                        {tiles.map((tile, i) => {
                            const { backgroundColor, color } = colorPairings[i];
                            return(
                                <section style={{
                                        backgroundColor,
                                        color
                                    }}
                                    key={`design_text-${i}`}
                                    className={styles.page} >
                                    <div className={styles.content}>
                                        <Link href={tile.link}><h3>{tile.title}</h3></Link>
                                        <div className={styles.subTitle}>
                                            {tile.subtitle}
                                        </div>
                                    </div>
                                    <div style={{backgroundColor}} className={styles.shadowPage} />
                                </section>
                            );
                        })}
                    </VerticalScroll>
                    <HorizontalScroll className={styles.gallerySection}>
                        <div style={{width: `${tiles.length * 100}vh`}} className={styles.caroseulWrapper}>
                            {tiles.map((tile,i) => (
                                <section className={styles.page} key={`design_img-${i}`}>
                                    <div style={{
                                        backgroundImage: `url(${tile.img.src})`,
                                        backgroundPosition: '15%'
                                    }} className={styles.fullBackground}>
                                    </div>
                                </section>
                            ))}
                        </div>
                    </HorizontalScroll>
                </ScrollGallery>
            </section>
            <section className={styles.sidebar} />
            <motion.section 
                onMouseEnter={toggleShowContents}
                onMouseLeave={toggleShowContents}
                variants={{
                    hide: { width: 'calc((100vw - 200vh) / 2)', transition: {delay: 0.5, duration: 0.5} },
                    show: { width: '15%' }
                }}
                transition={{duration: 0.5, staggerChildren: 0.5}}
                animate={showContents ? 'show' : 'hide'}
                initial={'hide'}
                className={styles.sidebar2}
                style={{
                    position: 'fixed',
                    top: '0',
                    right: '0',
                    zIndex: 1000
                }}
            >
                <motion.p className={styles.title}
                    variants={{
                        hide: { opacity: 0},
                        show: { opacity: 1, transition: {delay: 0.5}}
                    }}
                    animate={!showContents ? 'show' : 'hide'}
                >
                    index
                </motion.p>
                <motion.div
                    variants={{
                        hide: { opacity: 0 },
                        show: { opacity: 1, display: 'block', transition: {delay: 0.5} }
                    }}
                    
                    className={styles.contentsWrapper}
                    style={{
                        display: showContents ? 'block' : setTimeout(() => 'none', 500)
                    }}
                >
                    <h5>contents</h5>
                    {tiles.map((tile, i ) => 
                        <motion.div
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.2}}
                        >
                            <Link href={tile.link} key={`contents-${i}`}>
                                <p>{i}.&nbsp;&nbsp;{tile.title}</p>
                            </Link>
                        </motion.div>
                        )}
                </motion.div>
               
                </motion.section>
        </main>      
    );
};


export async function getStaticProps(){
    const paths = process.env.paths.map(p => p.split('.')[0]);

    const tiles = paths.map(p => {
        const { data } =  require('../../../data/design/' + p + '.js');
        console.log(data.tile);
        return({
        ...data.tile,
        link: `/design/${p}`
    })});

    return {
        props: {
            tiles
        }
    }
};

export default Design;