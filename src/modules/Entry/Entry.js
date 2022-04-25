import React from 'react';
import styles from './Entry.module.scss';
import { motion, useViewportScroll } from 'framer-motion';
import { variants } from '../../animations/fadeOut';
import SectionWSidebar from '../../components/SectionWSidebar/SectionWSidebar';
import Image from 'next/image';
import AVIndex from '../../assets/AvantVibes/AVIndex.png'
import AVArchive from '../../assets/AvantVibes/AVArchive.png'
import AVLinks from '../../assets/AvantVibes/AVLinks.png'
import FrogGallery from '../../assets/AvantVibes/FrogGallery.png'
import WarcraftIndex from '../../assets/AvantVibes/WarcraftIndex.png'
import SupremeMain from '../../assets/AvantVibes/SupremeMain2.png'
import SupremeAbout from '../../assets/AvantVibes/SupremeAbout.png'
import classnames from 'classnames';
import { TextTile, TextPictureTile, PictureTile } from '../../components/Tiles';

import dynamic from 'next/dynamic'

const AnimatedCircle =  dynamic(() =>
    import('../../components/AnimatedCircle/AnimatedCircle'),
    { ssr: false }
);


const EntryPage = () => {
    return(
        <main className={styles.main}>
            <div className={styles.nav}>
                <div className={styles.spacer}>

                </div>
                {/* <div className={styles.controls}>
                    <h3>Home</h3>
                    <p>Test</p>
                </div> */}
                
            </div>
            <SectionWSidebar sidebarLeft={true} mainColour="black" sidebarWidth="15%">
                <div className = {styles.titleWrapper}>
                    <div className={styles.titleContent}>
                        <h3 className={styles.title}>Avant Vibes</h3>
                        <p>Avant Vibes, powered by Monster Energy® is a weekly delve into the forefront of vibe culture, ranging from the most fuego fits to the most diesel tracks out right now. Follow your hosts as they center their chakras, live, laugh, and love in the center of it all. Peace forever, R.I.P Jerry. - Scraped from “About Page”</p>
                        <h4>Project Started: 2019</h4>
                    </div>
                    <div className={styles.subtitleContent}>
                        <div className={styles.sideText}>
                            <h3>digital thoughts</h3>
                            <p>an experiment in sound</p> 
                        </div>
                    </div>
                </div>

            </SectionWSidebar>
            <Image width={'1080px'} src={AVIndex}/>

            <section className={styles.contents}>
                <section className={styles.sideBar}/>
                <div>
                    <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies. The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                    <p>Here, the web designer has opted for a simple, high contrast colour scheme of black, white and red as well as saturated monochrome background photo. This makes the site highly readable, and when paired with the simple layout of the site it draws the viewer’s attention to the text content or photo content of the products. One could also draw the connection to this style of design to the physical retail location’s layout schema, opting for a simple uncrowded space where the products themselves are emphasized by the surronding negative spaces.</p>
                </div>
                <div>
                    <p>In contrast, the second major design cue was from archaic web design practices, notably the use of tables and loud graphics which became popular in the late 90s and early to mid 00s.</p>
                    <p>One could posit that the popularity of this style was due to the explosion of the web in the early 2000s. With the rise of web development as a profession, as well as software like adobe flash, a growing toolkit was available to designers and amateurs alike. This led to a proliferation of website templates and royalty free assets leading to heavy use of standarised tabular layouts featuring and dynamic elements such as gifs and animations.</p>
                </div>
                <div className={styles.doubleColumn}>
                    <div>
                        <Image width={'380px'} src={SupremeMain}/>
                    </div>
                </div>
                <div>
                </div>
                <section className={styles.sideBar}/>
                
            </section>
            <section className={styles.contents}>
                <section className={styles.sideBar}/>
                <div className={classnames(styles.doubleColumn, styles.relative)}>
                    <div className={styles.halfColSpacer}></div>
                    <AnimatedCircle />
                    <h3 className={styles.rotatedTitle}>process</h3>
                </div>
                <div style={{backgroundColor: 'black'}}></div>
                <div>
                    <p>Simultaneous to this, digital drawing and CGI software were becoming less expensive and less performance intense. This led to the heavy incorporation of graphic assets and backgrounds on sites, which was coupled with the increased use of bright primary and secondary colours, providing an element of contrast against chromatically busy pages.</p>
                    <p>This was particularly popular among hobbyist and amateur websites, allowing one to create a unique site and potentially show off their own design work. Some elements of this practice were utilised in professional websites, specifically “themed” websites meant to promote products such as games, film and tv or to exist alongside these products as guides or the blossoming “wiki” site.</p>
                </div>
                <div>
                    <p>With this, and the minimalist design practice as explored above in mind, the Avant Vibes website combines these by taking complementary design elements from both. The simple, high-contrast colour schemes and text boxes are taken from the minimalist approach and combined with tables and low contrast or greyscaled 3D renders and assets to provide a unique visual style.</p>
                </div>
                <section className={styles.sideBar}/>
            </section>
            <section className={styles.contentsFitToHeight}>
                <section className={styles.sideBar}/>
                <div className={styles.doubleColumn}>
                    <Image width={'576px'} height={'576px'} src={WarcraftIndex}/>
                </div>
                <div style={{backgroundColor: 'black'}}></div>
                <div className={styles.doubleColumn}>
                    <Image width={'576px'} height={'576px'} src={FrogGallery}/>
                </div>
                <section className={styles.sideBar}/>
            </section>
            {/* <section className={styles.contentsHalfHeight}>
                <section className={styles.sideBar}/>
                <div className={styles.spread}>
                    <div className={styles.quoteBars}>
                        <h3>the dialectic</h3>
                        <h3>of simplicity</h3>
                        <h3>and chaos </h3>
                    </div>
                </div>
                <section className={styles.sideBar}/>
            </section> */}
            <section className={styles.contents}>
                <section/>
                <div className={classnames(styles.doubleColumn, styles.extend)}>
                    <div>
                        <p>Simultaneous to this, digital drawing and CGI software were becoming less expensive and less performance intense. This led to the heavy incorporation of graphic assets and backgrounds on sites, which was coupled with the increased use of bright primary and secondary colours, providing an element of contrast against chromatically busy pages.</p>
                        <p>This was particularly popular among hobbyist and amateur websites, allowing one to create a unique site and potentially show off their own design work. Some elements of this practice were utilised in professional websites, specifically “themed” websites meant to promote products such as games, film and tv or to exist alongside these products as guides or the blossoming “wiki” site.</p>
                    </div>
                    <div>
                        <p>Simultaneous to this, digital drawing and CGI software were becoming less expensive and less performance intense. This led to the heavy incorporation of graphic assets and backgrounds on sites, which was coupled with the increased use of bright primary and secondary colours, providing an element of contrast against chromatically busy pages.</p>
                        <p>This was particularly popular among hobbyist and amateur websites, allowing one to create a unique site and potentially show off their own design work. Some elements of this practice were utilised in professional websites, specifically “themed” websites meant to promote products such as games, film and tv or to exist alongside these products as guides or the blossoming “wiki” site.</p>
                    </div>
                </div>
                <div style={{backgroundColor: 'black'}}/>
                <div/>
                <div/>
                <section/>
            </section>

            {/* <Image width={'1080px'} src={AVLinks}/> */}
            
        </main>
    );
};

export default EntryPage;

