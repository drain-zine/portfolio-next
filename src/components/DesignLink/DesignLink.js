import React from 'react';
import styles from './DesignLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DesignLink = ({index, title, description, date}) => {
    return (
        <section className={styles.designLink}>
            <section className={styles.sidebar}>
                <h3>{index}</h3>
            </section>
            <section className={styles.information}>
                <span className={styles.title}>{title}</span>
                <span className={styles.separator}>
                    <FontAwesomeIcon icon={regular('circle')} />
                </span>
                <span>{date}</span>
                <span></span>
                <div>{description.map(p => 
                        <p>{p}</p>
                    )}
                </div>
            </section>
        </section>
    );
}

export default DesignLink;