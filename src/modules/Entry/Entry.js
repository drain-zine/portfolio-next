import React from 'react';
import styles from './Entry.module.scss';
import { motion } from 'framer-motion';
import { variants } from '../../animations/fadeOut';
import SectionWSidebar from '../../components/SectionWSidebar/SectionWSidebar';
import Image from 'next/image';
import AVIndex from '../../assets/AvantVibes/AVindex.png'
import classnames from 'classnames';

const EntryPage = () => (
    // <main className={styles.main}>
    //     <section className={styles.sidebar} />
    //     <section 
    //         className={styles.mainContent} >
    //         <motion.header 
    //             className = {styles.header}
    //             variants={variants}
    //             initial={'initial'}
    //             animate={'in'}
    //             exit={'out'}
    //         >
    //             <div className = {styles.headerContent}>
    //                 <h3 className={styles.title}>Ligma</h3>
    //                 <p>Text here!</p>
    //             </div>
    //         </motion.header>
    //         <motion.header 
    //             className = {styles.header}
    //             variants={variants}
    //             initial={'initial'}
    //             animate={'in'}
    //             exit={'out'}
    //         >
    //             <div className = {styles.headerContent}>
    //                 <h3 className={styles.title}>Ligma</h3>
    //                 <p>Text here!</p>
    //             </div>
    //         </motion.header>
    //         <motion.header 
    //             className = {styles.header}
    //             variants={variants}
    //             initial={'initial'}
    //             animate={'in'}
    //             exit={'out'}
    //         >
    //             <div className = {styles.headerContent}>
    //                 <h3 className={styles.title}>Ligma</h3>
    //                 <p>Text here!</p>
    //             </div>
    //         </motion.header>
    //         <section className={styles.contents}>
    //         </section>
    //     </section>
    // </main>
    <main className={styles.main}>
        <SectionWSidebar sidebarLeft={true} mainColour="black" sidebarWidth="15%">
            <div className = {styles.titleWrapper}>
                <div className={styles.titleContent}>
                    <h3 className={styles.title}>Avant Vibes</h3>
                    <p>Avant Vibes, powered by Monster Energy® is a weekly delve into the forefront of vibe culture, ranging from the most fuego fits to the most diesel tracks out right now. Follow your hosts as they center their chakras, live, laugh, and love in the center of it all. Peace forever, R.I.P Jerry. - Scraped from “About Page”</p>
                    <h4>Project Started: 2019</h4>
                </div>
                <div className={styles.subtitleContent}>

                </div>
            </div>
        </SectionWSidebar>
        <section className={styles.contents}>
            <div className={classnames(styles.tile, styles.leftText)}>
                <div className={styles.text}> { /* left Text tile*/}
                    <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
                    <p>The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                </div>
                
                <Image src={AVIndex}></Image>
            </div>

            <div className={classnames(styles.tile, styles.rightText)}> { /* right Text tile*/}
                <Image src={AVIndex}></Image>
                <div className={styles.text}> 
                    <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
                    <p>The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                </div>
            </div>
        </section>
    </main>
);

export default EntryPage;

