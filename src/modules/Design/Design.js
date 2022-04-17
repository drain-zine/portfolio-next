import DesignLink from '../../components/DesignLink/DesignLink';
import styles from './Design.module.scss';
import { motion } from 'framer-motion';
import { variants } from '../../animations/fadeOut';
import { variants as staggerVariants } from '../../animations/stagger';

const leftSlide = {
    initial: {x: "-100%", scale: 3},
    in: {x: 0, scale: 1},
    out: {x: "-71.35%", scale: 2.42857142857, transition: {ease: "easeInOut"}}
}


const LandingPage = () => (
    <motion.main 
        className={styles.main}
        variants={staggerVariants}
        initial={'initial'}
        animate={'in'}
        exit={'out'}
    >
        <motion.section 
            className={styles.mainContent}
            variants={variants}
        >
            <p className = {styles.ver}>Version ${process.env.REACT_APP_VERSION}</p>
            <header className = {styles.header}>
                <div className = {styles.headerContent}>
                    <h3 className={styles.title}>Design</h3>
                    <p>Some projects random text ahhh roland suck me please</p>
                </div>
            </header>
            <section className={styles.contents}>
                <DesignLink 
                    title={'Ligma'}
                    date={'2020'}
                    description={[
                        'Lorem Ipsum',
                        'More text',
                        'Deez Nutz',
                        'This is a longer bit of text I am scratching my head really'
                    ]}
                    index={'0'}
                    link={'https://knowyourmeme.com/memes/ligma'}
                />

                <DesignLink 
                    title={'Balls'}
                    date={'2020'}
                    description={[
                        'Lorem Ipsum',
                        'More text',
                        'Deez Nutz',
                        'This is a longer bit of text I am scratching my head really'
                    ]}
                    index={'1'}
                />

                <DesignLink 
                    title={'Sugma'}
                    date={'2019'}
                    description={[
                        'Lorem Ipsum',
                        'More text',
                        'Deez Nutz',
                        'This is a longer bit of text I am scratching my head really'
                    ]}
                    index={'2'}
                />
            </section>
            <footer className = {styles.footer}>
                <div className = {styles.headerContent}>
                    <h3 className={styles.title}>Info</h3>
                    <p>Some projects random text ahhh roland suck me please</p>
                </div>
            </footer>
        </motion.section>
        <motion.section 
            className={styles.sidebar} 
            variants={leftSlide}
            transition={{duration: 0.7}}
        />
    </motion.main>
);

export default LandingPage;

