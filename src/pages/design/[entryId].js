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
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';


const TypeMap = {
    TextBox,
    HalfPageImage,
    CentralImage
};

const EntryPage = ({ page, nextEntry, prevEntry }) => {
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
                <Nav color={'black'}/>
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

                                    children.push(el.text.map(t => <div className={styles.markdown}><ReactMarkdown>{t}</ReactMarkdown></div>));
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
                            <h3>Next</h3>
                            <div className={styles.footerNav}>
                                {prevEntry ? <Link href={prevEntry.link}>
                                    <div>
                                        <h4>{prevEntry.title}</h4>
                                    </div>
                                </Link> : <div/> }
                                { nextEntry ? <Link href={nextEntry.link}>
                                    <div>
                                        <h4>{nextEntry.title}</h4>
                                    </div>
                                </Link> : <div /> }
                            </div>
                        </div>
            </section>
        </main>
    );
};

export async function getStaticPaths(){
    // pretend we have an API
    const entries = process.env.paths;

    const paths = entries.map((entry, i) => ({
            params: {
                entryId: entry.split('.')[0]
            }
    }));

    return {
        paths,
        fallback: false
    }
};

export async function getStaticProps({ params }){
    const entryId = params.entryId;
    const entries = process.env.paths;
    const i = entries.indexOf(entryId + '.js');
    const n = entries.length;

    console.log(i);

    let nextEntry = null;
    let prevEntry = null;



    const { data } = require('../../../data/design/' + entryId + '.js');

    if(i <  (n - 1)){
        const { data: nextEntryData} =  require('../../../data/design/' + entries[i+1]);
        nextEntry = {
            title: nextEntryData.tile.title,
            link: `/design/${entries[i+1].split('.')[0]}`
        }
    }

    if(i > 0){
        const { data: prevEntryData} =  require('../../../data/design/' + entries[i-1]);
        prevEntry = {
            title: prevEntryData.tile.title,
            link: `/design/${entries[i-1].split('.')[0]}`
        }
    }
    
    return {
        props: {
            page: data.page,
            nextEntry,
            prevEntry
        }
    }
};


export default EntryPage;

