import styles from './TechnologyCard.module.css'

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { FaLaptopCode, FaStar, FaCode } from "react-icons/fa";

const TechnologyCard = (technology) => {
    return (
        <div className={styles.techCard}>
            <div className={styles.iconContainer}>
                <div className={styles.insideIconContainer}>
                    <img src={technology.logo} alt="Ícone" />
                    <p>{technology.name}</p>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.insideInfoContainer}>
                    <p className={styles.extraDescription}><FaStar /><span>{technology.description}</span></p>
                    <div className={styles.generalInfo}>
                        <h2>Projetos:</h2>
                        <p>{technology.projectsNumber}<FaLaptopCode /></p>
                    </div>
                    <div className={styles.actions}>
                        <button>Ver Projetos<IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyCard