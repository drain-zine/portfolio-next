import React from 'react';
import Tile from './Tile';
import styles from './Tiles.module.scss';

const TextTile = ({children, xMargin = '0', textDir = 'column'}) => (
    <Tile xMargin={xMargin} type={'TextTile'} className={styles[textDir]}>
       { children.map((c,i) => (
           <div key={i} className={styles.colWrapper}>{c}</div>
       )) }
    </Tile>
);

export default TextTile;