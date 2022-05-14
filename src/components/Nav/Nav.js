import React from 'react';
import UnderlineText from '../../components/UnderlineText/UnderlineText';
import styles from './Nav.module.scss';

import Link from 'next/link';

const Nav = ({color}) => (
    <div className={styles.controls}>
        <UnderlineText color={color}><Link href='/'><p>home</p></Link></UnderlineText>
        <UnderlineText color={color}><Link href='/'><p>design</p></Link></UnderlineText>
        <UnderlineText color={color}><Link href='/'><p>contact</p></Link></UnderlineText>
    </div>
);

export default Nav;