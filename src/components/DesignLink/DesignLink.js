import React, { useEffect, useState, useRef } from 'react';
import styles from './DesignLink.module.scss';
import Link from 'next/link';
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/fontawesome-free-regular'
import { variants } from '../../animations/fadeOut';
import { motion } from 'framer-motion';

const DesignLink = ({index, title, description, date, link}) => {

    return (
        <motion.section variants={variants} className={styles.designLink}>
            <section className={styles.sidebar}>
                <h3>{index}</h3>
            </section>
            <section className={styles.information}>
                <div className={styles.title}>
                    <Link scroll={false} href='/entry'><h4>{title}</h4></Link>
                    <span className={styles.separator}>
                        <FontAwesomeIcon className={styles.icon} icon={faCircle} />
                    </span>
                    <span className={styles.date}>{date}</span>
                    { link ? 
                        (
                            <div className={classnames(styles.shadowLink, styles.hover)} >
                                <Link 
                                    href={link} >
                                    <p>LINK</p>
                                </Link>
                            </div>
                        ) : (
                            <p className={styles.shadowLink}>OFFLINE</p>
                        ) 
                    }
                </div>
                <div>{description.map((p, i) => 
                        <motion.p key={`${index}__${i}`} variants={variants}>{p}</motion.p>
                    )}
                </div>
            </section>
        </motion.section>
    );
}

export default DesignLink;