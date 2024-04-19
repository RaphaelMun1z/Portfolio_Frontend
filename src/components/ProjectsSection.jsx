import ProjectCard from './ProjectCard'
import styles from './ProjectsSection.module.scss'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { GoStack, GoServer, GoTools, GoDatabase } from "react-icons/go";
import { GrMysql } from "react-icons/gr"
import { MdDesignServices } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { IoFlash, IoFlashOff } from "react-icons/io5";
import {
    FaCode,
    FaGithub,
    FaBug,
    FaReact,
    FaJava,
    FaJs,
    FaAngular,
    FaDocker,
    FaExternalLinkAlt,
    FaGitAlt,
    FaSlack,
    FaSearch,
    FaInfo
} from "react-icons/fa";
import {
    SiVisualstudiocode,
    SiPostman,
    SiJirasoftware,
    SiPython,
    SiPhp,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiDjango,
    SiSpring,
    SiExpress,
    SiLaravel,
    SiVuedotjs,
    SiFlask,
    SiMysql,
    SiMicrosoftsqlserver,
    SiPostgresql,
    SiMongodb,
    SiOracle,
    SiSqlite,
    SiRedis
} from "react-icons/si";

// Redux
import { getProjects } from '../slices/projectSlice'
import { getLanguages } from '../slices/languageSlice';
import { getFrameworks } from '../slices/frameworkSlice';
import { getDatabases } from '../slices/databaseSlice';

const ProjectsSection = () => {
    const dispatch = useDispatch()

    const { projects, loading: projectLoading } = useSelector((state) => state.project)
    const { languages, loading: languageLoading } = useSelector((state) => state.language)
    const { frameworks, loading: frameworkLoading } = useSelector((state) => state.framework)
    const { databases, loading: databaseLoading } = useSelector((state) => state.database)

    useEffect(() => {
        dispatch(getProjects())
        dispatch(getLanguages())
        dispatch(getFrameworks())
        dispatch(getDatabases())
    }, [])

    const [fastSearch, setFastSearch] = useState(false)
    const [searchedProjectName, setSearchedProjectName] = useState("")
    const [typeSelected, setTypeSelected] = useState("")
    const [languagesSelected, setLanguagesSelected] = useState([])
    const [frameworksSelected, setFrameworksSelected] = useState([])
    const [databaseSelected, setDatabaseSelected] = useState("")

    const handleSubmitSearchProjectByName = (e) => {
        e.preventDefault()

        if (searchedProjectName && searchedProjectName.trim() !== "") {
            dispatch(getProjects({ projectName: searchedProjectName }))
        }
    }

    // Fast Search
    useEffect(() => {
        if (fastSearch) {
            if (searchedProjectName && searchedProjectName.trim() !== "") {
                dispatch(getProjects({ projectName: searchedProjectName }))
            }
        }
    }, [searchedProjectName])

    const handleTypeSelected = (type) => {
        if (typeSelected === type) {
            setTypeSelected("");
        } else {
            setTypeSelected(type)
        }
    }

    const handleLanguagesSelected = (languageId) => {
        if (languagesSelected.includes(languageId)) {
            setLanguagesSelected(languagesSelected.filter(id => id !== languageId));
        } else {
            setLanguagesSelected([...languagesSelected, languageId])
        }
    }

    const handleframeworksSelected = (frameworkId) => {
        if (frameworksSelected.includes(frameworkId)) {
            setFrameworksSelected(frameworksSelected.filter(id => id !== frameworkId));
        } else {
            setFrameworksSelected([...frameworksSelected, frameworkId])
        }
    }

    const handledatabaseSelected = (databaseId) => {
        if (databaseSelected === databaseId) {
            setDatabaseSelected("");
        } else {
            setDatabaseSelected(databaseId)
        }
    }

    useEffect(() => {
        dispatch(getProjects({ projectStack: typeSelected, languagesId: languagesSelected, frameworksId: frameworksSelected, databaseId: databaseSelected }))
    }, [typeSelected, languagesSelected, frameworksSelected, databaseSelected]);

    const toolIcons = {
        Github: <FaGithub />,
        Docker: <FaDocker />,
        Git: <FaGitAlt />,
        Slack: <FaSlack />,
        VScode: <SiVisualstudiocode />,
        Postman: <SiPostman />,
        Jira: <SiJirasoftware />,
    };

    const frameworkIcons = {
        React: <SiReact />,
        Angular: <FaAngular />,
        Django: <SiDjango />,
        SpringBoot: <SiSpring />,
        Express: <SiExpress />,
        Laravel: <SiLaravel />,
        Vue: <SiVuedotjs />,
        Flask: <SiFlask />,
    }

    const languageIcons = {
        Python: <SiPython />,
        PHP: <SiPhp />,
        Javascript: <SiJavascript className={styles.js} />,
        Typescript: <SiTypescript />,
        SQL: <GrMysql />,
        HTML: <SiHtml5 />,
        CSS: <SiCss3 />,
        Java: <FaJava />,
    };

    const databaseIcons = {
        MySQL: < SiMysql />,
        SqlServer: <SiMicrosoftsqlserver />,
        PostgreSQL: <SiPostgresql />,
        MongoDB: <SiMongodb />,
        OracleDatabase: <SiOracle />,
        SQLite: <SiSqlite />,
        Redis: <SiRedis />,
    }

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.header}>
                <h1>Meus Projetos</h1>
            </div>
            <div className={styles.searchForProjectContainer}>
                {/* Filtros */}
                <div className={styles.filterContainer}>
                    <h2 className={styles.title}>Filtros</h2>
                    <div className={styles.mainSearchInput}>
                        <form className={styles.searchBar} onSubmit={handleSubmitSearchProjectByName}>
                            <input type="text" placeholder="Pesquise por um projeto pelo nome..." onChange={(e) => setSearchedProjectName(e.target.value)} value={searchedProjectName} />
                            <button type="submit">
                                <FaSearch />
                            </button>
                        </form>
                        <div className={styles.fastSearchInput}>
                            <input
                                type="checkbox"
                                id="fastSearch"
                                name="fastSearch"
                                checked={fastSearch}
                                onChange={(e) => setFastSearch(e.target.checked)}
                            />
                            {fastSearch ? (
                                <label htmlFor="fastSearch">
                                    <div className={`${styles.flashSearch} ${styles.activedFlash}`}><IoFlash />Pesquisa Instantânea Ativa</div>
                                </label>
                            ) : (
                                <label htmlFor="fastSearch">
                                    <div className={`${styles.flashSearch}`}><IoFlashOff />Pesquisa Instantânea Inativa</div>
                                </label>
                            )}
                        </div>
                    </div>

                    <div className={styles.topicsContainer}>
                        <div className={styles.topic}>
                            <h4>Tipo</h4>
                            <div className={styles.itemsContainer}>
                                <div className={`${styles.item} ${typeSelected === 'Fullstack' ? styles.active : ''} `} onClick={() => handleTypeSelected('Fullstack')}>
                                    <div className={styles.icon}>
                                        <GoStack />
                                    </div>
                                    <p>Fullstack</p>
                                </div>
                                <div className={`${styles.item} ${typeSelected === 'Frontend' ? styles.active : ''} `} onClick={() => handleTypeSelected('Frontend')}>
                                    <div className={styles.icon}>
                                        <MdDesignServices />
                                    </div>
                                    <p>Frontend</p>
                                </div>
                                <div className={`${styles.item} ${typeSelected === 'Backend' ? styles.active : ''} `} onClick={() => handleTypeSelected('Backend')}>
                                    <div className={styles.icon}>
                                        <GoServer />
                                    </div>
                                    <p>Backend</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.topic}>
                            <h4>Frameworks</h4>
                            <div className={styles.itemsContainer}>
                                {!frameworkLoading && frameworks && frameworks.map((framework, index) => (
                                    <div className={`${styles.item} ${frameworksSelected.includes(framework.id) ? styles.active : ''} `} key={index} onClick={() => handleframeworksSelected(framework.id)}>
                                        <div className={styles.icon}>
                                            {frameworkIcons[framework.name]}
                                        </div>
                                        <p>
                                            {framework.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.topic}>
                            <h4>Linguagens</h4>
                            <div className={styles.itemsContainer}>
                                {!languageLoading && languages && languages.map((language, index) => (
                                    <div className={`${styles.item} ${languagesSelected.includes(language.id) ? styles.active : ''} `} key={index} onClick={() => handleLanguagesSelected(language.id)}>
                                        <div className={styles.icon}>
                                            {languageIcons[language.name]}
                                        </div>
                                        <p>
                                            {language.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.topic}>
                            <h4>Banco de dados</h4>
                            <div className={styles.itemsContainer}>
                                {!databaseLoading && databases && databases.map((database, index) => (
                                    <div className={`${styles.item} ${databaseSelected === database.id ? styles.active : ''} `} key={index} onClick={() => handledatabaseSelected(database.id)}>
                                        <div className={styles.icon}>
                                            {databaseIcons[database.name]}
                                        </div>
                                        <p>
                                            {database.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {!projectLoading && projects && projects.length > 0 && (
                    <div className={styles.messages}>
                        <div className={styles.message}>
                            <div className={styles.icon}>
                                <FaInfo />
                            </div>
                            <div className={styles.text}>Foram encontrados <b>{projects.length}</b> projetos.</div>
                        </div>
                    </div>
                )}

                {!projectLoading && projects && projects.length === 0 && (
                    <div className={styles.messages}>
                        <div className={styles.message}>
                            <div className={styles.icon}>
                                <FaInfo />
                            </div>
                            <div className={styles.text}>Não foram encontrados projetos.</div>
                        </div>
                    </div>
                )}

            </div>
            <div className={styles.contentContainer}>
                {!projectLoading && projects && projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {projectLoading && (
                    <>
                        <div className='skeleton' style={{ width: '49%', height: '555px' }}></div>
                        <div className='skeleton' style={{ width: '49%', height: '555px' }}></div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProjectsSection