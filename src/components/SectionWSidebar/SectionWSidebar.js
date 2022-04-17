import React from 'react';
import styles from './SectionWSidebar.module.scss';

const SectionWSidebar = ({children, mainColour = 'white', sidebarLeft=false, sidebarWidth = '35%', height = '100vh'}) => {
    console.log(sidebarWidth.match(/\d+/g).join(''));
    const width = `${100-parseInt(sidebarWidth.match(/\d+/g).join(''))}%`;

    return(
        <section className={styles.container}>
            {sidebarLeft && <section style={{width: sidebarWidth, height}} className={mainColour === 'white' ? styles.black : styles.white}/> }
            <section style={{width, height}} className={styles[mainColour]}>
                {children}
            </section>
            {!sidebarLeft && <section style={{width: sidebarWidth, height}} className={mainColour === 'white' ? styles.black : styles.white}/> }
        </section>

    );
};

export default SectionWSidebar;