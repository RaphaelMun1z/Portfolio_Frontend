import styles from './SocialMedias.module.scss'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialMedias = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Redes Sociais</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={`${styles.socialMediaCard} ${styles.linkedin}`}>
                    <div className={styles.logo}>
                        <FaLinkedin />
                    </div>
                    <div className={styles.text}>
                        <h1>Linkedin</h1>
                    </div>
                </div>
                <div className={`${styles.socialMediaCard} ${styles.github}`}>
                    <div className={styles.logo}>
                        <FaGithub />
                    </div>
                    <div className={styles.text}>
                        <h1>Github</h1>
                    </div>
                </div>
                <div className={`${styles.socialMediaCard} ${styles.instagram}`}>
                    <div className={styles.logo}>
                        <FaInstagram />
                    </div>
                    <div className={styles.text}>
                        <h1>Instagram</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialMedias