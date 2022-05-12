import React from 'react';
import LandingPage from '../modules/Design/Design';
import ScrollGallery, { VerticalScroll, HorizontalScroll } from '../modules/ScrollGallery/ScrollGallery';
import styles from '../styles/landing.module.scss';

import AVIndex from '../assets/AvantVibes/AVIndex.png';
import AVArchive from '../assets/AvantVibes/AVArchive.png';
import AVLinks from '../assets/AvantVibes/AVLinks.png';
import classnames from 'classnames';

const Design = () => {
    return( 
        // <LandingPage />  
        <main className={styles.main}>
            <section className={styles.sidebar}/>
            <section className={styles.centralContent}>
                <section className={styles.heading}>
                    <div className={styles.headingContent}>
                        <h1>Design</h1>
                        <p>Some projects random text ahhh roland suck me please</p>
                    </div>
                </section>
                <ScrollGallery verticalUnit={100} horizontalUnit={100} className={styles.gallery}>
                    <VerticalScroll className={classnames(styles.gallerySection, styles.onTop)}>
                        <section style={{
                                backgroundColor: '#fff',
                                color: '#black'
                            }}
                            className={styles.page}>
                            <div className={styles.content}>
                                <h3>Ligma</h3>
                                <div className={styles.subTitle}>
                                    experiments in ligma and sugma
                                </div>
                            </div>
                            <div styles={{backgroundColor: '#fff'}} className={styles.shadowPage} />
                        </section>
                        <section style={{
                                backgroundColor: '#36454F',
                                color: '#fff'
                            }} className={styles.page}>
                            <div className={styles.content}>
                                <h3>Sugma</h3>
                                <div className={styles.subTitle}>
                                    can you uh bofa deez nuts?
                                </div>
                            </div>
                            <div style={{backgroundColor: '#36454F'}} className={styles.shadowPage} />
                        </section>
                        <section style={{
                                backgroundColor: '#F5F5F5',
                                color: '#000'
                            }} className={styles.page}>
                            <div className={styles.content}>
                                <h3>Hello Chuchu :)</h3>
                                <div className={styles.subTitle}>
                                    for my baby - sending u virtual cuddles
                                </div>
                            </div>
                            <div style={{backgroundColor: '#F5F5F5'}} className={styles.shadowPage} />
                        </section>
                    </VerticalScroll>
                    <HorizontalScroll className={styles.gallerySection}>
                        <div style={{width: '300vh'}} className={styles.caroseulWrapper}>
                            <section className={styles.page}>
                                <div style={{
                                    backgroundImage: `url(${AVIndex.src})`,
                                    backgroundPosition: '15%'
                                }} className={styles.fullBackground}>
                                    {/* //<Image src={AVIndex} raw  /> */}
                                </div>
                            </section>
                            <section className={styles.page}>
                                <div style={{
                                    backgroundImage: `url(${AVArchive.src})`,
                                    backgroundPosition: '15%'
                                }} className={styles.fullBackground}>
                                    {/* //<Image src={AVIndex} raw  /> */}
                                </div>
                            </section>
                            <section className={styles.page}>
                                <div style={{
                                    backgroundImage: `url(${AVLinks.src})`,
                                    backgroundPosition: '15%'
                                }} className={styles.fullBackground}>
                                    {/* //<Image src={AVIndex} raw  /> */}
                                </div>
                            </section>
                        </div>
                    </HorizontalScroll>
                </ScrollGallery>
            </section>
            <section className={styles.sidebar}/>
        </main>      
    );
};

export default Design;