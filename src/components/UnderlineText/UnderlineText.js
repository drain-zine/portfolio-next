import React, { useState } from 'react';
import styles from './UnderlineText.module.scss';
import Marquee from 'react-fast-marquee';

const UnderlineText = ({children, color='white', speed = 1, direction = 'right', ...props}) => {
    const [hover, setHover] = useState(false);
    
    return(
        <div 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            className={styles.container} 
            style={{color}}
            {...props}
        >
            {children}
            <Marquee play={hover} direction={direction} speed={speed} gradient={false}>
                <div style={{ backgroundColor: color }} className={styles.underline}/>
            </Marquee>
        </div>
    );
};

export default UnderlineText;