import styles from './DashboardGeneral.module.scss'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getProjects } from '../../slices/projectSlice'
import { getLanguages } from '../../slices/languageSlice';
import { getFrameworks } from '../../slices/frameworkSlice';
import { getLogs } from '../../slices/logSlice';
import { getContactForms } from '../../slices/contactSlice';

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";

import ProjectsGraphic from '../ProjectsGraphic';
import LogAndFormGraphic from '../LogAndFormGraphic';

const DashboardGeneral = () => {
    const dispatch = useDispatch()

    const { projects, loading: projectLoading } = useSelector((state) => state.project)
    const { languages, loading: languageLoading } = useSelector((state) => state.language)
    const { frameworks, loading: frameworkLoading } = useSelector((state) => state.framework)
    const { logs, loading: logLoading } = useSelector((state) => state.log)
    const { contactForms, loading: contactFormsLoading } = useSelector((state) => state.contact)

    useEffect(() => {
        dispatch(getProjects())
        dispatch(getLanguages())
        dispatch(getFrameworks())
        dispatch(getLogs())
        dispatch(getContactForms())
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
                    {logLoading && (
                        <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    )}
                    {!logLoading && logs && (
                        <div className={styles.data}>{logs.length}</div>
                    )}
                </div>
            </div>
            <div className={styles.graphicsContainer}>
                <div className={styles.mainGraphicsDivision}>
                    {logLoading && contactFormsLoading && (
                        <div className={styles.graphic}>
                            <div className='skeleton' style={{ margin: '1em', width: '100%', height: '280px' }}></div>
                        </div>
                    )}
                    {!logLoading && !contactFormsLoading && logs && contactForms && (
                        <div className={styles.graphic}>
                            <LogAndFormGraphic logData={logs} formData={contactForms} />
                        </div>
                    )}

                    {projectLoading && (
                        <div className={styles.graphic}>
                            <div className='skeleton' style={{ margin: '1em', width: '100%', height: '280px' }}></div>
                        </div>
                    )}
                    {!projectLoading && projects && (
                        <div className={styles.graphic}>
                            <ProjectsGraphic projectsData={projects} />
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default DashboardGeneral