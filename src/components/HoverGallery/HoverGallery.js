import React, { useState, useRef } from 'react';
import ImageCursor from '../ImageCursor/ImageCursor';
import Image from 'next/image';
import styles from './HoverGallery.module.scss';
import { v4 as uuidv4 } from 'uuid';

const HoverGallery = ({src, width = '1080px'}) => {
    const id = `gallery-${uuidv4()}`
    const [hoverImg, setHoverImg] = useState(1);
    const [backgroundImg, setBackgroundImg] = useState(0);
    const galleryRef = useRef(null);


    return(
        <div ref={galleryRef} className={styles.galleryContainer} style={{width}}>
            <ImageCursor src={src[hoverImg]} parentRef={galleryRef} />
            <Image layout={'fill'} src={src[backgroundImg]}/>

            { src.map((child, i) => (
                <div key={`${id}_${i}`} 
                    onMouseEnter={() => setHoverImg(i)}
                    onClick={() => setBackgroundImg(i)}
                >   
                </div>
            ))}
        </div>
    );
}

export default HoverGallery;