// Styles
import styles from './LandingSection.module.css'

const LandingSection = () => {
    return (
        <main>
            <div className={styles.imageContainer}>
                <img src="https://static.vecteezy.com/system/resources/previews/011/153/370/original/3d-web-development-illustration-png.png" alt="Imagem" />
            </div>
            <div className={styles.landingContentContainer}>
                <div className={styles.insideLandingContent}>
                    <p>Texto</p>
                    <h2>Mais texto aqui</h2>
                    <h6>Algum texto aqui</h6>
                    <a href="/">Um link aqui</a>
                </div>
            </div>
        </main>
    );
};

export default LandingSection;