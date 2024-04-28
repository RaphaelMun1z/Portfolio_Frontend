import styles from './TechnologyCard.module.scss'

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { FaLaptopCode, FaStar, FaCode } from "react-icons/fa";

// Hooks
import { useIcon } from '../hooks/useIcon'

const TechnologyCard = ({name, usage}) => {
    return (
        <div className={styles.techCard}>
            <div className={styles.iconContainer}>
                <div className={styles.insideIconContainer}>
                    {useIcon(name)}
                    <p>{name}</p>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.insideInfoContainer}>
                    <div className={styles.generalInfo}>
                        <h2>Projetos:</h2>
                        <p>{usage}<FaLaptopCode /></p>
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