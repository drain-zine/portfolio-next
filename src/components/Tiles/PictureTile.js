import React from 'react';
import Image from 'next/image';
import Tile from './Tile';

const PictureTile = ({xMargin = '0', imgSrc}) => (
    <Tile xMargin={xMargin} type={'PictureTile'}>
        <Image src={imgSrc}></Image> 
    </Tile>
);

export default PictureTile;