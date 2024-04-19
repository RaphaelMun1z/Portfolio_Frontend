import styles from './ActionsProjectCard.module.scss'

import { Link } from 'react-router-dom'

// Icons
import { GrCircleInformation } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloudOfflineOutline } from "react-icons/io5";

const ActionsProjectCard = ({ ProjectId, ProjectHost }) => {
    return (
        <>
            <div className={styles.actions}>
                <Link to={`/projeto/${ProjectId}`} className={styles.btnMoreAbout}>Saber Mais<GrCircleInformation /></Link>
                {ProjectHost && (
                    <Link to={`${ProjectHost.URL}`} className={styles.btnVisitProject}>Visitar<IoIosArrowForward /></Link>
                )}
                {!ProjectHost && (
                    <Link className={styles.btnVisitProjectBlock}>Não hospedado<IoCloudOfflineOutline /></Link>
                )}
            </div>
        </>
    )
}

export default ActionsProjectCard