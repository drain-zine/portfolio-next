import React, { useState, useRef } from 'react';
import ImageCursor from '../ImageCursor/ImageCursor';
import Image from 'next/image';
import styles from './HoverGallery.module.scss';
import { v4 as uuidv4 } from 'uuid';

const HoverGallery = ({src, width = '1080px', height, debug = false}) => {
    const id = `gallery-${uuidv4()}`;
    const useToggle = src.length === 2; // for gallery of 2 items
    const [hoverImgIdx, setHoverImgIdx] = useState(1);
    const [backgroundImgIdx, setBackgroundImgIdx] = useState(0);
    const galleryRef = useRef(null);

    const [toggle, setToggle] = useState(false);

    const hoverImg = useToggle ? (
        toggle ?  src[0] : src[1] 
    ) : src[hoverImgIdx];

    const backgroundImg = useToggle ? (
        toggle ? src[1] : src[0]
    ) : src[backgroundImgIdx];



    return(
        <div ref={galleryRef} className={styles.galleryContainer} style={{width, height}}>
            <ImageCursor src={hoverImg} parentRef={galleryRef} debug />
            <Image layout={'fill'} src={backgroundImg}/>

            { useToggle ? 
                <div 
                    onClick={() => {
                        setToggle(prevToggle => !prevToggle);
                    }}
                />
                : src.map((child, i) => (
                <div key={`${id}_${i}`} 
                    onMouseEnter={() => setHoverImgIdx(i)}
                    onClick={() => setBackgroundImgIdx(i)}
                />
            ))}
        </div>
    );
}

export default HoverGallery;