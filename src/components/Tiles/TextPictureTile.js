import React from 'react';
import Image from 'next/image';
import Tile from './Tile';
import styles from './Tiles.module.scss';

const TextPictureTile = ({children, xMargin = '0', imgSrc, textPos = 'left'}) => (
    <Tile xMargin={xMargin} type={'TextPictureTile'} className={styles[textPos]}>
        <div className={styles.text}> 
            {children}
        </div>
        {imgSrc && <Image src={imgSrc}></Image> }
    </Tile>
);

export default TextPictureTile;