import styles from './MainImageProjectCard.module.scss'

import { uploads } from '../utils/config'

const MainImageProjectCard = ({ image }) => {
    return (
        <div className={styles.image}>
            <img src={`${uploads}/projectsBanner/${image}`} alt="Banner" />
        </div>
    )
}

export default MainImageProjectCard