// Styles
import styles from './LandingSection.module.css'

const LandingSection = () => {
    return (
        <main>
            <div className={styles.imageContainer}>
                <img src="/rocket.png" alt="Foguete" />
            </div>
            <div className={styles.landingContentContainer}>
                <div className={styles.insideLandingContent}>
                    <p>Olá,</p>
                    <h2>Me chamo <span>Raphael Muniz</span></h2>
                    <h6>Sou Desenvolvedor Full Stack React.js + Node.js</h6>
                    <a href="/">Conheça meu trabalho</a>
                </div>
            </div>
        </main>
    );
};

export default LandingSection;