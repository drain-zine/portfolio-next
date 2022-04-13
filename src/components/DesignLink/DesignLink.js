import React from 'react';
import styles from './DesignLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/fontawesome-free-regular'


const DesignLink = ({index, title, description, date}) => {
    return (
        <section className={styles.designLink}>
            <section className={styles.sidebar}>
                <h3>{index}</h3>
            </section>
            <section className={styles.information}>
                <div className={styles.title}>
                    <h4>{title}</h4>
                    <span className={styles.separator}>
                        <FontAwesomeIcon className={styles.icon} icon={faCircle} />
                    </span>
                <span className={styles.date}>{date}</span>
                </div>
                <div>{description.map(p => 
                        <p>{p}</p>
                    )}
                </div>
            </section>
        </section>
    );
}

export default DesignLink;