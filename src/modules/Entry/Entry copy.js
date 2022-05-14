import React, {useEffect, useState, useRef} from 'react';
import styles from './Entry.module.scss';
import { motion, useViewportScroll, useSpring, transform } from 'framer-motion';
import { variants } from '../../animations/fadeOut';
import SectionWSidebar from '../../components/SectionWSidebar/SectionWSidebar';
import Image from 'next/image';
import AVIndex from '../../assets/AvantVibes/AVIndex.png'
import AVArchive from '../../assets/AvantVibes/AVArchive.png'
import AVLinks from '../../assets/AvantVibes/AVLinks.png'
import FrogGallery from '../../assets/AvantVibes/FrogGallery.png'
import WarcraftIndex from '../../assets/AvantVibes/WarcraftIndex.png'
import SupremeMain from '../../assets/AvantVibes/SupremeMain2.png'
import SupremeAbout from '../../assets/AvantVibes/SupremeAbout2.png'
import classnames from 'classnames';
import { TextTile, TextPictureTile, PictureTile } from '../../components/Tiles';
import AnimatedCircle from '../../components/AnimatedCircle/AnimatedCircle';
import classNames from 'classnames';

import HoverGallery from '../../components/HoverGallery/HoverGallery';
import ScrollGallery, {VerticalScroll, HorizontalScroll} from '../../modules/ScrollGallery/ScrollGallery';
import { useInView } from 'react-intersection-observer';
import TextBox from '../../components/TextBox/TextBox';
import CentralImage from '../../components/CentralImage/CentralImage';
import HalfPageImage from '../../components/HalfPageImage/HalfPageImage';
import UnderlineText from '../../components/UnderlineText/UnderlineText';
// import dynamic from 'next/dynamic'

// const AnimatedCircle =  dynamic(() =>
//     import('../../components/AnimatedCircle/AnimatedCircle'),
//     { ssr: false }
// );


const EntryPage = () => {
    const mainRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [showImg, setShowImg] = useState(false);

    const { scrollYProgress } = useViewportScroll();
    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
    const [rotateState, setRotateState] = useState(0);

    const [ galleryRef, galleryInView, entry ] = useInView({
        /* fully in view */
        threshold: 0.9,
    });

        // Focus gallery if in view
        useEffect(() => {
            if(galleryInView){
                entry.target.scrollIntoView(true, {behaviour: 'smooth'});
            }
        }, [galleryRef, galleryInView, entry]);



    useEffect(() => {
        return pathLength.onChange((v) => setRotateState(v));
    }, [pathLength]);

    useEffect(() => {
        if(mainRef.current){
            setHeight(mainRef.current.clientHeight);
        }
    }, [ mainRef ]);

    return(
        <main ref={mainRef} className={styles.main}>
            <svg style={{zIndex: 3, position: 'absolute', stroke: 'white', left: '50%', top: '0', transform: 'translateX(-50%)'}} height={`${height}px`}>
                <line x1="50%" y1="0" x2="50%" y2={`${rotateState * 100}%`}></line>
            </svg>
            <div className={styles.nav}>
                <div className={styles.controls}>
                    <UnderlineText>
                        <p>home</p>
                    </UnderlineText>
                    <UnderlineText><p>design</p></UnderlineText>
                    <UnderlineText><p>contact</p></UnderlineText>
                </div>
                <p>{rotateState.toFixed(2)}</p>
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
            <HoverGallery width={'100vw'} src={[AVIndex, AVArchive, AVLinks]}/>
            <section ref={galleryRef} className={styles.content}>
                <section className={styles.sidebar}/>
                <section className={styles.mainContent}>
                    <section className={styles.panel}>
                        <TextBox pos={'right'}>
                            <h3>Process</h3>
                            <section className={styles.subtitle}>
                                digital inspiration
                            </section>
                            <div>
                                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies. The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                                <p><span className={styles.interactText} onClick={() => {console.log('show');setShowImg(prevShowImg => !prevShowImg)}}>Here,</span> the web designer has opted for a simple, high contrast colour scheme of black, white and red as well as saturated monochrome background photo. This makes the site highly readable, and when paired with the simple layout of the site it draws the viewer’s attention to the text content or photo content of the products. One could also draw the connection to this style of design to the physical retail location’s layout schema, opting for a simple uncrowded space where the products themselves are emphasized by the surronding negative spaces.</p>
                            </div>
                            <div>
                                <p>In contrast, the second major design cue was from archaic web design practices, notably the use of tables and loud graphics which became popular in the late 90s and early to mid 00s.</p>
                                <p>One could posit that the popularity of this style was due to the explosion of the web in the early 2000s. With the rise of web development as a profession, as well as software like adobe flash, a growing toolkit was available to designers and amateurs alike. This led to a proliferation of website templates and royalty free assets leading to heavy use of standarised tabular layouts featuring and dynamic elements such as gifs and animations.</p>
                            </div>
                        </TextBox>
                        <HalfPageImage src={SupremeMain} width={'350px'}/>
                    </section>
                    <section className={styles.panel}>
                        <CentralImage src={AVIndex} />
                    </section>
                    <section className={styles.panel}>
                        <TextBox stack={'vert'}>
                            <div>
                                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies. The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                                <p><span className={styles.interactText} onClick={() => {console.log('show');setShowImg(prevShowImg => !prevShowImg)}}>Here,</span> the web designer has opted for a simple, high contrast colour scheme of black, white and red as well as saturated monochrome background photo. This makes the site highly readable, and when paired with the simple layout of the site it draws the viewer’s attention to the text content or photo content of the products. One could also draw the connection to this style of design to the physical retail location’s layout schema, opting for a simple uncrowded space where the products themselves are emphasized by the surronding negative spaces.</p>
                            </div>
                            <div>
                                <p>In contrast, the second major design cue was from archaic web design practices, notably the use of tables and loud graphics which became popular in the late 90s and early to mid 00s.</p>
                                <p>One could posit that the popularity of this style was due to the explosion of the web in the early 2000s. With the rise of web development as a profession, as well as software like adobe flash, a growing toolkit was available to designers and amateurs alike. This led to a proliferation of website templates and royalty free assets leading to heavy use of standarised tabular layouts featuring and dynamic elements such as gifs and animations.</p>
                            </div>
                        </TextBox>
                        <HalfPageImage src={SupremeMain} pos={'right'} width={'350px'}/>
                    </section>
                </section>
                <section className={styles.sidebar}/>
                
            </section>
            <section className={styles.footer}>
                        <div className={styles.footerContent}>
                            
                        </div>
            </section>
        </main>
    );
};

export default EntryPage;

