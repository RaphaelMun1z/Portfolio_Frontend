import ProjectCard from './ProjectCard'
import styles from './ProjectsSection.module.scss'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { GoStack, GoServer, GoTools, GoDatabase } from "react-icons/go";
import { GrMysql } from "react-icons/gr"
import { MdDesignServices } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
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

const ProjectsSection = () => {
    const dispatch = useDispatch()

    const { projects, loading, error, message } = useSelector((state) => state.project)

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const [searchedProjectName, setSearchedProjectName] = useState("")

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

    const handleSubmitSearchProjectByName = (e) => {
        e.preventDefault()


    }

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.header}>
                <h1>Meus Projetos</h1>
            </div>
            <div className={styles.searchForProjectContainer}>
                <form className={styles.searchBar} onSubmit={handleSubmitSearchProjectByName}>
                    <input type="text" placeholder="Pesquise por um projeto pelo nome..." onChange={(e) => setSearchedProjectName(e.target.value)} value={searchedProjectName} />
                    <button type="submit">
                        <FaSearch />
                    </button>
                </form>

                <div className={styles.filterContainer}>
                    <h2 className={styles.title}>Filtros</h2>
                    <div className={styles.topic}>
                        <h4>Frameworks</h4>
                        <div className={styles.itemsContainer}>
                            {Object.entries(frameworkIcons).map(([framework, icon], index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.icon}>
                                        {icon}
                                    </div>
                                    <p>
                                        {framework}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.topic}>
                        <h4>Linguagens</h4>
                        <div className={styles.itemsContainer}>
                            {Object.entries(languageIcons).map(([language, icon], index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.icon}>
                                        {icon}
                                    </div>
                                    <p>
                                        {language}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.topic}>
                        <h4>Banco de dados</h4>
                        <div className={styles.itemsContainer}>
                            {Object.entries(databaseIcons).map(([database, icon], index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.icon}>
                                        {icon}
                                    </div>
                                    <p>
                                        {database}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.messages}>
                    <div className={styles.message}>
                        <div className={styles.icon}>
                            <FaInfo />
                        </div>
                        <div className={styles.text}>Foram encontrados 5 projetos.</div>
                    </div>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {!loading && projects && projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {loading && (
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