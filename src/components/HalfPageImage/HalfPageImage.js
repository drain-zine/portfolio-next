import React from 'react';
import styles from './HalfPageImage.module.scss';
import classnames from 'classnames';
import Image from 'next/image';

const HalfPageImage = ({src, width, pos = 'left'}) => {
    return(
        <div className={classnames(styles[pos], styles.container)}>
            <div className={styles.centreImg}>
                <Image src={src} width={width} />
            </div>
        </div>
    );
}

export default HalfPageImage;