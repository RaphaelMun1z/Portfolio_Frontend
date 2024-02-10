import styles from './SingleProjectDetails.module.css'

import { FaCode, FaGithub, FaBug } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";

const SingleProjectDetails = () => {
    return (
        <section className={styles.projectDetailsContainer}>
            <div className={styles.header}>
                <h1>Título do Projeto</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.description}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                </div>
                <div className={styles.technologies}>
                    <h3><FaCode />Tecnologias utilizadas:</h3>
                    <div className={styles.technologyCard}>
                        <img src="react_logo.png" alt="Logo" />
                    </div>
                    <div className={styles.technologyCard}>
                        <img src="react_logo.png" alt="Logo" />
                    </div>
                    <div className={styles.technologyCard}>
                        <img src="react_logo.png" alt="Logo" />
                    </div>
                </div>
                <div className={styles.actions}>
                    <button className={styles.github}><FaGithub />Repositório</button>
                    <button className={styles.bug}><FaBug />Relatar BUG</button>
                    <button className={styles.save}><BsBookmark />Salvar</button>
                    <button className={styles.saved}><BsBookmarkCheckFill />Salvo!</button>
                </div>
                <div className={styles.images}>
                    <h3><AiFillPicture />Imagens do projeto:</h3>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProjectDetails