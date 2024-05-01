import styles from './TechnologyCard.module.scss'

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { FaLaptopCode, FaStar, FaCode } from "react-icons/fa";

// Hooks
import { useIcon } from '../hooks/useIcon'

import { Link } from 'react-router-dom'

const TechnologyCard = ({ name, usage, category, categoryValue }) => {
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
                        <h2>Presente em</h2>
                        <p>{usage}<FaLaptopCode /></p>
                        <h2>Projetos</h2>
                    </div>
                    <div className={styles.actions}>
                        {category && categoryValue && (
                            <Link to={`/projetos?${category}=${categoryValue}`}>Ver Projetos<IoIosArrowForward /></Link>
                        )}
                        {!category && (
                            <Link to={`/projetos?`}>Ver Projetos<IoIosArrowForward /></Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyCard