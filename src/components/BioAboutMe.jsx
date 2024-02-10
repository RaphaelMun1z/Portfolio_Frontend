// Styles
import styles from './BioAboutMe.module.css'

// Icons
import { IoIosArrowForward } from "react-icons/io";

const BioAboutMe = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Quem Sou?</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <div>
                        <img src="/minha_foto_2.png" alt="Foto" />
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.insideInfoContainer}>
                        <p className={styles.aboutText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        </p>
                        <button>CV Simplificado<IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BioAboutMe