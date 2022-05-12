import React from 'react';
import styles from './HalfPageImage.module.scss';
import classnames from 'classnames';
import Image from 'next/image';
import HoverGallery from '../HoverGallery/HoverGallery';

const HalfPageImage = ({src, width, height, pos = 'left', centre = true, top, left, right, bottom}) => {
    return(
        <div className={classnames(styles[pos], styles.container)}>
            <div style={{left, top, right, bottom, height, width, transform: centre ? 'translate(-50%,-50%)' : undefined }}className={styles.centreImg}>
                { Array.isArray(src) ? 
                    <HoverGallery width={'100%'} height={'100%'} src={src}/> :
                    <Image src={src} layout={'fill'} /> 
                }
            </div>
        </div>
    );
}

export default HalfPageImage;