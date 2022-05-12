import React, { useState } from 'react';
import styles from './UnderlineText.module.scss';
import Marquee from 'react-fast-marquee';

const UnderlineText = ({children, speed = 1, direction = 'right', ...props}) => {
    const [hover, setHover] = useState(false);
    
    return(
        <div 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            className={styles.container} 
            {...props}
        >
            {children}
            <Marquee play={hover} direction={direction} speed={speed} gradient={false}>
                <div className={styles.underline}/>
            </Marquee>
        </div>
    );
};

export default UnderlineText;