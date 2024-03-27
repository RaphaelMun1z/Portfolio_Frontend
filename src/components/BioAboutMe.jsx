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
                            Me chamo <b>Raphael Muniz</b> e atualmente curso o primeiro semestre de <b>Sistemas de Informação na Universidade Federal de Uberlândia (UFU)</b>. Sou apaixonado por desenvolvimento web e atuo como <b>full stack</b>. Minhas principais linguagens de programação são <b>JavaScript, PHP e C#</b>, e utilizo o ambiente de execução <b>Node.js</b>, além de frameworks como <b>ReactJs e Laravel</b>. Valorizo o <b>comprometimento</b>, sempre buscando a <b>excelência</b>, e prezo pelo <b>respeito</b> e <b>ética</b> em tudo o que faço.
                        </p>
                        <button>CV Simplificado<IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BioAboutMe