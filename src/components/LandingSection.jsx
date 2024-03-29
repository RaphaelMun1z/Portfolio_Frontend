// Styles
import styles from './LandingSection.module.css'

import Image from './Image';

// Icons
import { LuRocket } from "react-icons/lu"

const landingImage = "/rocket.png"

const LandingSection = () => {
    return (
        <main>
            <div className={styles.imageContainer}>
                <Image imagePath={landingImage} />
            </div>
            <div className={styles.landingContentContainer}>
                <div className={styles.insideLandingContent}>
                    <p>Olá,</p>
                    <h2>Me chamo <span>Raphael Muniz</span></h2>
                    <h6>Sou Desenvolvedor Full Stack React.js + Node.js</h6>
                    <a href="/">Conheça meu trabalho<LuRocket /></a>
                </div>
            </div>
        </main>
    );
};

export default LandingSection;