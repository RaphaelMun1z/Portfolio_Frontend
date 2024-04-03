// Styles
import styles from './Skills.module.css'

// Icons
import { IoIosArrowForward } from "react-icons/io";

const Skills = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Habilidades</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.insideCardContainer}>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Frontend</h3>
                                <p>Experiência avançada em HTML5, CSS3 (incluindo Sass/SCSS) e JavaScript para desenvolver interfaces responsivas, altamente organizadas e visualmente atraentes.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Backend</h3>
                                <p>Experiência em desenvolvimento de APIs RESTful e manipulação eficiente de dados com Node.js e Express.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Frameworks</h3>
                                <p>Expertise em frameworks como React.js e Laravel para agilizar o desenvolvimento e garantir a manutenibilidade do código.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.insideCard}>
                                <h3>Bancos de Dados</h3>
                                <p>Proficiência em SQL e modelagem de bancos de dados relacionais, bem como experiência com bancos de dados NoSQL como MongoDB.</p>
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