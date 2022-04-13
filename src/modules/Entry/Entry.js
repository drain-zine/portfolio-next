import styles from './Entry.module.scss';

const EntryPage = () => (
    <main className={styles.main}>
        <section className={styles.sidebar} />
        <section className={styles.mainContent}>
            <header className = {styles.header}>
                <div className = {styles.headerContent}>
                    <h3 className={styles.title}>Ligma</h3>
                    <p>Text here!</p>
                </div>
            </header>
            <section className={styles.contents}>
            </section>
        </section>
    </main>
);

export default EntryPage;

