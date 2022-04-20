import React from 'react';
import classnames from 'classnames';
import styles from './Tiles.module.scss';

const Tile = ({children, xMargin, type, className}) => (
    <div style={{marginLeft: xMargin}} className={classnames(styles[type], styles.tile, className)}>
        {children}
    </div>
);

export default Tile;