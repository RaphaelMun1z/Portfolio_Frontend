import styles from './SingleProjectDetails.module.scss'

// Icons
import { GoStack, GoServer, GoTools } from "react-icons/go";
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
    FaSlack
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
    SiFlask
} from "react-icons/si";

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Redux
import { getProjectById } from '../slices/projectSlice'

const SingleProjectDetails = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const { project, loading, error, message } = useSelector((state) => state.project)

    useEffect(() => {
        dispatch(getProjectById(id))
    }, [dispatch, id])

    const toolIcons = {
        Github: <FaGithub />,
        Docker: <FaDocker />,
        Git: <FaGitAlt />,
        Slack: <FaSlack />,
        VScode: <SiVisualstudiocode />,
        Postman: <SiPostman />,
        Jira: <SiJirasoftware />,
    };

    const languageIcons = {
        Python: <SiPython />,
        PHP: <SiPhp />,
        Javascript: <SiJavascript className={styles.js} />,
        Typescript: <SiTypescript />,
        SQL: <GrMysql />,
        HTML: <SiHtml5 />,
        CSS: <SiCss3 />,
        Java: <FaJava />,
        React: <SiReact />,
        Angular: <FaAngular />,
        Django: <SiDjango />,
        SpringBoot: <SiSpring />,
        Express: <SiExpress />,
        Laravel: <SiLaravel />,
        Vue: <SiVuedotjs />,
        Flask: <SiFlask />,
    };

    return (
        <section className={styles.projectDetailsContainer}>
            <div className={styles.header}>
                {loading && !project && (
                    <div className='skeleton' style={{ width: '600px', height: '90px' }}></div>
                )}
                {!loading && project && (
                    <h1>{project.name}</h1>
                )}
                <div className={styles.actions}>
                    {loading && !project && (
                        <div className='skeleton' style={{ width: '460px', height: '60px' }}></div>
                    )}
                    {!loading && project && (
                        <>
                            <button className={styles.bug}><FaBug />Relatar BUG</button>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.headerContent}>
                    <div className={styles.description}>
                        {loading && !project && (
                            <div className='skeleton' style={{ width: '600px', height: '350px' }}></div>
                        )}
                        {!loading && project && (
                            <p>{project.description}</p>
                        )}

                        {loading && !project && (
                            <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                        )}
                        {!loading && project && (
                            <button className={styles.bug}>Visitar<FaExternalLinkAlt /></button>
                        )}
                        <div className={styles.repositories}>
                            <div className={styles.header}>
                                <h1>Repositórios do projeto</h1>
                            </div>
                            <div className={styles.repoContainer}>
                                <div className={styles.repositoriesSection}>
                                    {loading && !project && (
                                        <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                                    )}
                                    {!loading && project && project.ProjectFrontend && (
                                        <button className={styles.github}><FaGithub />Frontend<FaExternalLinkAlt className={styles.link} /></button>
                                    )}
                                </div>
                                <div className={styles.repositoriesSection}>
                                    {loading && !project && (
                                        <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                                    )}
                                    {!loading && project && project.ProjectBackend && (
                                        <button className={styles.github}><FaGithub />Backend<FaExternalLinkAlt className={styles.link} /></button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.technologies}>
                        <div className={styles.projectTechInfo}>
                            <div className={styles.technologyCardContainer}>
                                <div className={styles.technologyCard}>
                                    <div className={styles.icon}>
                                        {project && project.stack === "Fullstack" && (<GoStack />)}
                                        {project && project.stack === "Frontend" && (<MdDesignServices />)}
                                        {project && project.stack === "Backend" && (<GoServer />)}
                                    </div>
                                    <div className={styles.name}>{project && project.stack}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectTechInfo}>
                            <h3><FaCode />Frameworks utilizados:</h3>
                            <div className={styles.technologyCardContainer}>
                                {loading && !project && (
                                    <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                                )}
                                {!loading && project && (
                                    <>
                                        {project.ProjectFrontend && (
                                            <div className={styles.technologyCard}>
                                                <div className={styles.icon}>{languageIcons[project.ProjectFrontend.Framework.name] || <FaCode />}</div>
                                                <div className={styles.name}>{project.ProjectFrontend.Framework.name}</div>
                                                <div className={styles.language}>{languageIcons[project.ProjectFrontend.Framework.Language.name] || <FaCode />}</div>
                                            </div>
                                        )}
                                        {project.ProjectBackend && (
                                            <div className={styles.technologyCard}>
                                                <div className={styles.icon}>{languageIcons[project.ProjectBackend.Framework.name] || <FaCode />}</div>
                                                <div className={styles.name}>{project.ProjectBackend.Framework.name}</div>
                                                <div className={styles.language}>{languageIcons[project.ProjectBackend.Framework.Language.name] || <FaCode />}</div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.projectTechInfo}>
                            <h3><FaCode />Linguages utilizadas:</h3>
                            <div className={styles.technologyCardContainer}>
                                {loading && !project && (
                                    <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                                )}
                                {!loading && project && (
                                    <>
                                        {project.ProjectFrontend && (
                                            <div className={styles.technologyCard}>
                                                <div className={styles.icon}><MdDesignServices /></div>
                                                <div className={styles.name}><b>Frontend:</b><p>{project.ProjectFrontend.Language.name}</p></div>
                                                <div className={styles.language}>{languageIcons[project.ProjectFrontend.Language.name] || <FaCode />}</div>
                                            </div>
                                        )}
                                        {project.ProjectBackend && (
                                            <div className={styles.technologyCard}>
                                                <div className={styles.icon}><GoServer /></div>
                                                <div className={styles.name}><b>Backend:</b><p>{project.ProjectBackend.Language.name}</p></div>
                                                <div className={styles.language}>{languageIcons[project.ProjectBackend.Language.name] || <FaCode />}</div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.projectTechInfo}>
                            <h3><GoTools />Ferramentas utilizadas:</h3>
                            <div className={styles.technologyCardContainer}>
                                {loading && !project && (
                                    <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                                )}
                                {!loading && project && project.ProjectTools.length > 0 && (
                                    <>
                                        {project.ProjectTools.map((ProjectTool) => (
                                            <div className={`${styles.technologyCard} ${styles.toolsContainer}`}>
                                                <div className={styles.icon}>{toolIcons[ProjectTool.Tool.name] || <FaCode />}</div>
                                                <div className={styles.name}><p>{ProjectTool.Tool.name}</p></div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.projectTechInfo}>
                            <h3><GoTools />Banco de dados utilizado:</h3>
                            <div className={styles.technologyCardContainer}>
                                {loading && !project && (
                                    <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                                )}
                                {!loading && project && project.usedDatabase && (
                                    <div className={`${styles.technologyCard} ${styles.toolsContainer}`}>
                                        <div className={styles.icon}>{toolIcons[ProjectTool.ProjectDatabase.name] || <FaCode />}</div>
                                        <div className={styles.name}><p>{ProjectTool.ProjectDatabase.name}</p></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.images}>
                    <h3><AiFillPicture />Imagens do projeto:</h3>
                    <div className='skeleton' style={{ width: '50%', height: '500px', flex: '1 1 49%' }}></div>
                    <div className='skeleton' style={{ width: '50%', height: '500px', flex: '1 1 49%' }}></div>
                    {/* <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default SingleProjectDetails