import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={`${styles.home} container`}>
            <h1 className={styles.home__title}>Home Page</h1>
        </div>
    );
};

export default Home;
