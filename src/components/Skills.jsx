// Styles
import styles from './Skills.module.css'

// Icons
import { IoIosArrowForward } from "react-icons/io";

const Skills = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Principais Habilidades</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.insideCardContainer}>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Titulo</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Titulo</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Titulo</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Titulo</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.insideInfoContainer}>
                        <h1>Programação de Ponta</h1>
                        <p>
                            "Explorador comprometido das intricadas linhas de código, busco harmonizar criatividade e eficiência para transformar desafios em experiências digitais notáveis. Com uma abordagem centrada no usuário, minha jornada envolve a constante busca por soluções inovadoras que transcendam as expectativas no universo digital."
                        </p>
                        <button>Ver todas skills<IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;