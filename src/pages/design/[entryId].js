import React, {useEffect, useState, useRef} from 'react';
import styles from '../../modules/Entry/Entry.module.scss';
import { motion, useViewportScroll, useSpring, transform } from 'framer-motion';
import { variants } from '../../animations/fadeOut';
import SectionWSidebar from '../../components/SectionWSidebar/SectionWSidebar';

import HoverGallery from '../../components/HoverGallery/HoverGallery';
import { useInView } from 'react-intersection-observer';
import TextBox from '../../components/TextBox/TextBox';
import CentralImage from '../../components/CentralImage/CentralImage';
import HalfPageImage from '../../components/HalfPageImage/HalfPageImage';
import Nav from '../../components/Nav/Nav';
import { EdgesGeometry } from 'three';
//import fs from "fs";


const TypeMap = {
    TextBox,
    HalfPageImage,
    CentralImage
};

const EntryPage = ({ page }) => {
    const header = page.header;

    const mainRef = useRef(null);
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



    // useEffect(() => {
    //     return pathLength.onChange((v) => setRotateState(v));
    // }, [pathLength]);



    return(
        <main ref={mainRef} className={styles.main}>
            <div className={styles.nav}>
                <Nav/>
                <p>{rotateState.toFixed(2)}</p>
            </div>

            <SectionWSidebar sidebarLeft={true} mainColour="black" sidebarWidth="15%">
                <div className = {styles.titleWrapper}>
                    <div className={styles.titleContent}>
                        <h3 className={styles.title}>{header.title}</h3>
                        <p>{header.subtitle}</p>
                        <h4>Project Started: {header.startDate}</h4>
                    </div>
                    <div className={styles.subtitleContent}>
                        <div className={styles.sideText}>
                            <h3>{header.sidebarTitle}</h3>
                            <p>{header.sidebarSubtitle}</p> 
                        </div>
                    </div>
                </div>

            </SectionWSidebar>
            {page.gallery && <HoverGallery width={'100vw'} src={page.gallery}/> }
            <section ref={galleryRef} className={styles.content}>
                <section className={styles.sidebar}/>
                <section className={styles.mainContent}>
                    {page.panels.map(panel => (
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

export async function getStaticPaths(){
    // const entries = fs.readDirSync('../../../data/design/');
    // console.log(entries);

    // const paths = entries.map(entry => ({
    //     params: {
    //         entryId: entry.split('.')[0]
    //     }
    // }));
    const paths = [ {
        params: { entryId: 'avant-vibes', }
    }, {
        params: { entryId: 'drain-e1' }
    }];

    return {
        paths,
        fallback: false
    }
};

export async function getStaticProps({ params }){
    const entryId = params.entryId;

    const { data } = require('../../../data/design/' + entryId + '.js');

    return {
        props: {
            page: data.page
        }
    }
};


export default EntryPage;

