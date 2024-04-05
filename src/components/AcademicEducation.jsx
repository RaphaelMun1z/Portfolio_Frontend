import styles from './AcademicEducation.module.scss'

import { BsRocket } from "react-icons/bs";

const AcademicEducation = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Formação Acadêmica</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.academicEducationContainer}>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <div className={styles.imageContainer}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ufu_logo.svg/1024px-Ufu_logo.svg.png" alt="Imagem" />
                            </div>
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.text}>
                                <h1>Ensino superior</h1>
                                <h2>Universidade Federal de Uberlândia</h2>
                                <p className={styles.course}>Graduação em Sistemas de Informação</p>
                                <p className={styles.date}>1° Período</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.icon}>
                        <BsRocket />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <div className={styles.imageContainer}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logotipo_IFET.svg/764px-Logotipo_IFET.svg.png" alt="Imagem" />
                            </div>
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.text}>
                                <h1>Ensino médio técnico</h1>
                                <h2>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Cubatão</h2>
                                <p className={styles.course}>Curso técnico em Informática</p>
                                <p className={styles.date}>2020 - 2023 (Concluído)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AcademicEducation