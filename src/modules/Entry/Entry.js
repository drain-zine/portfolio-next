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
import { data } from '../../../data/design/avant-vibes';

import HoverGallery from '../../components/HoverGallery/HoverGallery';
import ScrollGallery, {VerticalScroll, HorizontalScroll} from '../../modules/ScrollGallery/ScrollGallery';
import { useInView } from 'react-intersection-observer';
import TextBox from '../../components/TextBox/TextBox';
import CentralImage from '../../components/CentralImage/CentralImage';
import HalfPageImage from '../../components/HalfPageImage/HalfPageImage';
import UnderlineText from '../../components/UnderlineText/UnderlineText';
import Nav from '../../components/Nav/Nav';


const TypeMap = {
    TextBox,
    HalfPageImage,
    CentralImage
};

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
            <div className={styles.nav}>
                <Nav/>
                <p>{rotateState.toFixed(2)}</p>
            </div>

            <SectionWSidebar sidebarLeft={true} mainColour="black" sidebarWidth="15%">
                <div className = {styles.titleWrapper}>
                    <div className={styles.titleContent}>
                        <h3 className={styles.title}>{data.page.header.title}</h3>
                        <p>{data.page.header.subtitle}</p>
                        <h4>Project Started: {data.page.header.startDate}</h4>
                    </div>
                    <div className={styles.subtitleContent}>
                        <div className={styles.sideText}>
                            <h3>{data.page.header.sidebarTitle}</h3>
                            <p>{data.page.header.sidebarSubtitle}</p> 
                        </div>
                    </div>
                </div>

            </SectionWSidebar>
            {data.page.gallery && <HoverGallery width={'100vw'} src={data.page.gallery}/> }
            <section ref={galleryRef} className={styles.content}>
                <section className={styles.sidebar}/>
                <section className={styles.mainContent}>
                    {data.page.panels.map(panel => (
                        <section className={styles.panel}>
                            { panel.map(el => {
                                let children;

                                if(el.meta.type === 'TextBox'){
                                    children = [];
                                    if(el.title){
                                        children.push(<h3>{el.title}</h3>);
                                    }

                                    if(el.subtitle){
                                        children.push( 
                                            <section className={styles.subtitle}>
                                                {el.subtitle}
                                            </section>
                                        );
                                    }

                                    children.push(el.text.map(t => <div>{t}</div>));
                                }

                                return React.createElement(
                                    TypeMap[el.meta.type],
                                    el.meta.props,
                                    children
                                )
                            }) }
                        </section>
                    ))}
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

