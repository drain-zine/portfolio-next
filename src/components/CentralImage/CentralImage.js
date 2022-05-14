import React from 'react';
import Image from 'next/image';
import styles from './CentralImage.module.scss';

const CentralImage = ({src}) => {
    return(
        <div className={styles.central}>
            <Image src={src} layout={'fill'} />
        </div>
    );
};

export default CentralImage;