import DesignLink from '../../components/DesignLink/DesignLink';
import styles from './Design.module.scss';

const LandingPage = () => (
    <main className={styles.main}>
        <section className={styles.mainContent}>
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
        </section>
        <section className={styles.sidebar}>

        </section>
    </main>
);

export default LandingPage;

