// Styles
import styles from './AboutMe.module.css'

// Icons
import { IoMdDownload } from "react-icons/io";

const AboutMe = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Sobre</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <div>
                        <img src="/astronaut.png" alt="" />
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.insideInfoContainer}>
                        <p className={styles.aboutText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        </p>
                        <div className={styles.experience}>
                            <div className={styles.topic}>
                                <p className={styles.value}>04+</p>
                                <p className={styles.title}>Anos de estudo</p>
                            </div>
                            <div className={styles.topic}>
                                <p className={styles.value}>01+</p>
                                <p className={styles.title}>Anos de experiência</p>
                            </div>
                            <div className={styles.topic}>
                                <p className={styles.value}>30+</p>
                                <p className={styles.title}>Projetos desenvolvidos</p>
                            </div>
                        </div>
                        <button>Baixar CV<IoMdDownload /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;