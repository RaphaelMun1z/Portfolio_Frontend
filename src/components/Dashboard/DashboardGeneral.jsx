import styles from './DashboardGeneral.module.scss'

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";

const DashboardGeneral = () => {
    return (
        <>
            <div className={styles.mainNumberContainer}>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Projetos publicados</p>
                        <div className={styles.icon}>
                            <AiOutlineFundProjectionScreen />
                        </div>
                    </div>
                    <div className={styles.data}>35</div>
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Linguagens aprendidas</p>
                        <div className={styles.icon}>
                            <FaCode />
                        </div>
                    </div>
                    <div className={styles.data}>15</div>
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Frameworks aprendidos</p>
                        <div className={styles.icon}>
                            <GiGears />
                        </div>
                    </div>
                    <div className={styles.data}>5</div>
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Acessos</p>
                        <div className={styles.icon}>
                            <RiSearchEyeLine />
                        </div>
                    </div>
                    <div className={styles.data}>5</div>
                </div>
            </div>
            <div className={styles.graphicsContainer}>
                <div className={styles.mainGraphicsDivision}>
                    <div className={styles.graphic}></div>
                    <div className={styles.graphic}></div>
                </div>
                <div className={styles.secondGraphicsDivision}></div>
            </div>
        </>
    )
}

export default DashboardGeneral