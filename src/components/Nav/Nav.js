import React from 'react';
import UnderlineText from '../../components/UnderlineText/UnderlineText';
import styles from './Nav.module.scss';

const Nav = () => (
    <div className={styles.controls}>
        <UnderlineText><p>home</p></UnderlineText>
        <UnderlineText><p>design</p></UnderlineText>
        <UnderlineText><p>contact</p></UnderlineText>
    </div>
);

export default Nav;