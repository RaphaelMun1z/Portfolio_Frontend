import styles from './DashboardGeneral.module.scss'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getProjects } from '../../slices/projectSlice'
import { getLanguages } from '../../slices/languageSlice';
import { getFrameworks } from '../../slices/frameworkSlice';

import DashboardGraphic from '../DashboardGraphic';

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";

const DashboardGeneral = () => {
    const dispatch = useDispatch()

    const { projects, loading: projectLoading } = useSelector((state) => state.project)
    const { languages, loading: languageLoading } = useSelector((state) => state.language)
    const { frameworks, loading: frameworkLoading } = useSelector((state) => state.framework)

    useEffect(() => {
        dispatch(getProjects())
        dispatch(getLanguages())
        dispatch(getFrameworks())
    }, [])

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
                    {projectLoading && (
                        <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    )}
                    {!projectLoading && projects && (
                        <div className={styles.data}>{projects.length}</div>
                    )}
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Linguagens aprendidas</p>
                        <div className={styles.icon}>
                            <FaCode />
                        </div>
                    </div>
                    {languageLoading && (
                        <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    )}
                    {!languageLoading && languages && (
                        <div className={styles.data}>{languages.length}</div>
                    )}
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Frameworks aprendidos</p>
                        <div className={styles.icon}>
                            <GiGears />
                        </div>
                    </div>
                    {frameworkLoading && (
                        <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    )}
                    {!frameworkLoading && frameworks && (
                        <div className={styles.data}>{frameworks.length}</div>
                    )}
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Acessos</p>
                        <div className={styles.icon}>
                            <RiSearchEyeLine />
                        </div>
                    </div>
                    <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    {/* <div className={styles.data}>5</div> */}
                </div>
            </div>
            <div className={styles.graphicsContainer}>
                <div className={styles.mainGraphicsDivision}>
                    <div className={styles.graphic}>
                        <div className='skeleton' style={{ margin: '1em 2em', minHeight: '400px' }}></div>
                        {/* <DashboardGraphic graphicType="bar" /> */}
                    </div>
                    <div className={styles.graphic}>
                        <div className='skeleton' style={{ margin: '1em 2em', minHeight: '400px' }}></div>
                        {/* < DashboardGraphic graphicType="line" /> */}
                    </div>
                </div>
                <div className={styles.secondGraphicsDivision}></div>
            </div>
        </>
    )
}

export default DashboardGeneral