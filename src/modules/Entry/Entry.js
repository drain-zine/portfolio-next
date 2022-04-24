import React from 'react';
import styles from './Entry.module.scss';
import { motion } from 'framer-motion';
import { variants } from '../../animations/fadeOut';
import SectionWSidebar from '../../components/SectionWSidebar/SectionWSidebar';
import Image from 'next/image';
import AVIndex from '../../assets/AvantVibes/AVIndex.png'
import AVArchive from '../../assets/AvantVibes/AVArchive.png'
import AVLinks from '../../assets/AvantVibes/AVLinks.png'
import FrogGallery from '../../assets/AvantVibes/FrogGallery.png'
import WarcraftIndex from '../../assets/AvantVibes/WarcraftIndex.png'
import SupremeMain from '../../assets/AvantVibes/SupremeMain.png'
import SupremeAbout from '../../assets/AvantVibes/SupremeAbout.png'
import classnames from 'classnames';
import { TextTile, TextPictureTile, PictureTile } from '../../components/Tiles';

const EntryPage = () => (
    <main className={styles.main}>
        <div className={styles.scrollingText}>
            <h3>Home</h3>
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
            <div className={styles.tempTile}>
                <div className={styles.tempText}>
                    <p>The Avant Vibes webpage took two design cues from seemingly disparate design philosophies. The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.</p>
                    <p>Here, the web designer has opted for a simple, high contrast colour scheme of black, white and red as well as saturated monochrome background photo. This makes the site highly readable, and when paired with the simple layout of the site it draws the viewer’s attention to the text content or photo content of the products. One could also draw the connection to this style of design to the physical retail location’s layout schema, opting for a simple uncrowded space where the products themselves are emphasized by the surronding negative spaces.</p>
                    <p>In contrast, the second major design cue was from archaic web design practices, notably the use of tables and loud graphics which became popular in the late 90s and early to mid 00s.</p>
                   
                </div>
                <div className={styles.tempImg}>
                     <Image width={'500px'} height={'500px'} src={SupremeMain}/>
                     <p>One could posit that the popularity of this style was due to the explosion of the web in the early 2000s. With the rise of web development as a profession, as well as software like adobe flash, a growing toolkit was available to designers and amateurs alike. This led to a proliferation of website templates and royalty free assets leading to heavy use of standarised tabular layouts featuring and dynamic elements such as gifs and animations.</p>
                </div>
            </div>
            <div className={styles.centralImg} >
                <Image width={'1336px'} src={AVArchive}/>
                <div className={styles.sideText2}>
                        <h3>digital thoughts</h3>
                    </div>
            </div>

            <div className={styles.tempTile}>
                <div className={styles.tempTextVert}>
                <p>Simultaneous to this, digital drawing and CGI software were becoming less expensive and less performance intense. This led to the heavy incorporation of graphic assets and backgrounds on sites, which was coupled with the increased use of bright primary and secondary colours, providing an element of contrast against chromatically busy pages.</p> 
                    <p>This was particularly popular among hobbyist and amateur websites, allowing one to create a unique site and potentially show off their own design work. Some elements of this practice were utilised in professional websites, specifically “themed” websites meant to promote products such as games, film and tv or to exist alongside these products as guides or the blossoming “wiki” site.</p>
                    <p>With this, and the minimalist design practice as explored above in mind, the Avant Vibes website combines these by taking complementary design elements from both. The simple, high-contrast colour schemes and text boxes are taken from the minimalist approach and combined with tables and low contrast or greyscaled 3D renders and assets to provide a unique visual style.</p>
                </div>
                {/* <div>
                    <div className={styles.tempImg}>
                        <Image width={'500px'} height={'500px'} src={FrogGallery}/>
                    </div>
                    <div className={styles.tempImg}>
                        <Image width={'500px'} height={'500px'} src={WarcraftIndex}/>
                    </div>
                </div> */}

            </div>


            {/** PUT A FULL SIZE IMG LOOKS SICK! */}
            {/* 

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
            </TextTile> 

            <PictureTile imgSrc={AVIndex} /> */}
            
        </section>
        <Image width={'1080px'} src={AVLinks}/>
        
    </main>
);

export default EntryPage;

