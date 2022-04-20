import React from 'react';
import styles from './Entry.module.scss';
import { motion } from 'framer-motion';
import { variants } from '../../animations/fadeOut';
import SectionWSidebar from '../../components/SectionWSidebar/SectionWSidebar';
import Image from 'next/image';
import AVIndex from '../../assets/AvantVibes/AVindex.png'
import classnames from 'classnames';
import { TextTile, TextPictureTile, PictureTile } from '../../components/Tiles';

const EntryPage = () => (
    <main className={styles.main}>
        <SectionWSidebar sidebarLeft={true} mainColour="black" sidebarWidth="15%">
            <div className = {styles.titleWrapper}>
                <div className={styles.titleContent}>
                    <h3 className={styles.title}>Avant Vibes</h3>
                    <p>Avant Vibes, powered by Monster Energy® is a weekly delve into the forefront of vibe culture, ranging from the most fuego fits to the most diesel tracks out right now. Follow your hosts as they center their chakras, live, laugh, and love in the center of it all. Peace forever, R.I.P Jerry. - Scraped from “About Page”</p>
                    <h4>Project Started: 2019</h4>
                </div>
                <div className={styles.subtitleContent}>
                <div className={styles.sideText}>
                    <h3>Digital Thoughts</h3>
                    <p>An experiment in sound</p> 
            </div>
                </div>
            </div>

        </SectionWSidebar>
        <section className={styles.contents}>
            <PictureTile imgSrc={AVIndex} />
            {/* <TextPictureTile imgSrc={AVIndex}>
                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
                <p>The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
            </TextPictureTile>

            <TextPictureTile textPos={'right'} imgSrc={AVIndex}>
                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
                <p>The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
            </TextPictureTile>

            <TextTile>
                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
                <p>The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
            </TextTile> 

            <TextTile textDir={'row'}>
                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
                <p>The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies.</p>
            </TextTile>  */}

           
        </section>
    </main>
);

export default EntryPage;

