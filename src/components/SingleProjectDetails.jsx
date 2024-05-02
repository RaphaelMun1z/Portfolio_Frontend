import styles from './SingleProjectDetails.module.scss'

import { uploads } from '../utils/config'

// Icons
import { GoStack, GoServer, GoTools, GoDatabase } from "react-icons/go";
import { MdDesignServices } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import {
    FaCode,
    FaGithub,
    FaBug,
    FaExternalLinkAlt,
} from "react-icons/fa";
import { IoCloudOfflineOutline } from "react-icons/io5";

// Hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useIcon } from '../hooks/useIcon'

// Redux
import { getProjectById } from '../slices/projectSlice'
import { getProjectImagesById } from '../slices/projectImageSlice'

import { Link } from 'react-router-dom';

import ReportPopUp from './ReportPopUp';

const SingleProjectDetails = () => {
    const [reportModal, setReportModal] = useState(false)

    const { id } = useParams()

    const dispatch = useDispatch()

    const { project, loading, error, message } = useSelector((state) => state.project)
    const { images, loading: imagesLoading } = useSelector((state) => state.projectImages)

    useEffect(() => {
        dispatch(getProjectById(id))
        dispatch(getProjectImagesById(id))
    }, [dispatch, id])

    return (
        <section className={styles.projectDetailsContainer}>
            {!loading && project && reportModal && (
                <ReportPopUp setReportModal={setReportModal} />
            )}
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
                            <button className={styles.bug} onClick={() => setReportModal(true)}><FaBug />Relatar BUG</button>
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
                        {!loading && project && project.isHosted && project.ProjectHost && (
                            <a href={`${project.ProjectHost.URL}`} className={`${styles.visitButton}`}>Visitar<FaExternalLinkAlt /></a>
                        )}
                        {!loading && project && !project.isHosted && (
                            <button className={`${styles.bug} ${styles.notHosted}`}>Não hospedado<IoCloudOfflineOutline /></button>
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
                                        <a href={project.ProjectFrontend.repository} className={styles.github}><FaGithub />Frontend<FaExternalLinkAlt className={styles.link} /></a>
                                    )}
                                </div>
                                <div className={styles.repositoriesSection}>
                                    {loading && !project && (
                                        <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                                    )}
                                    {!loading && project && project.ProjectBackend && (
                                        <a href={project.ProjectBackend.repository} className={styles.github}><FaGithub />Backend<FaExternalLinkAlt className={styles.link} /></a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectView}>
                        {!loading && project && (
                            <img src={`${uploads}/projectsBanner/${project.bannerImage}`} alt="Banner do projeto" />
                        )}
                    </div>
                    <div className={styles.technologies}>
                        <div className={styles.projectTechInfo}>
                            <div className={styles.technologyCardContainer}>
                                <div className={`${styles.technologyCard} ${styles.flexCard}`}>
                                    <div className={styles.icon}>
                                        {project && project.stack === "Fullstack" && (<GoStack />)}
                                        {project && project.stack === "Frontend" && (<MdDesignServices />)}
                                        {project && project.stack === "Backend" && (<GoServer />)}
                                    </div>
                                    <div className={styles.name}>{project && project.stack}</div>
                                </div>
                                <div className={`${styles.technologyCard} ${styles.flexCard}`}>
                                    <div className={styles.icon}>
                                        {project && project.type === "Web" && (useIcon('Web'))}
                                        {project && project.type === "Desktop" && (useIcon('Desktop'))}
                                        {project && project.type === "Mobile" && (useIcon('Mobile'))}
                                        {project && project.type === "EmbeddedProgramming" && (useIcon('EmbeddedProgramming'))}
                                    </div>
                                    <div className={styles.name}>{project && project.type}</div>
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
                                            <Link target='_blank' to={`/framework/${project.ProjectFrontend.Framework.id}`} className={styles.technologyCard}>
                                                <div className={styles.icon}>{useIcon(project.ProjectFrontend.Framework.name)}</div>
                                                <div className={styles.name}>{project.ProjectFrontend.Framework.name}</div>
                                                <div className={styles.language}>{useIcon(project.ProjectFrontend.Framework.Language.name)}</div>
                                            </Link>
                                        )}
                                        {project.ProjectBackend && (
                                            <Link target='_blank' to={`/framework/${project.ProjectBackend.Framework.id}`} className={styles.technologyCard}>
                                                <div className={styles.icon}>{useIcon(project.ProjectBackend.Framework.name)}</div>
                                                <div className={styles.name}>{project.ProjectBackend.Framework.name}</div>
                                                <div className={styles.language}>{useIcon(project.ProjectBackend.Framework.Language.name)}</div>
                                            </Link>
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
                                            <Link target='_blank' to={`/linguagem/${project.ProjectFrontend.Language.id}`} className={styles.technologyCard}>
                                                <div className={styles.icon}><MdDesignServices /></div>
                                                <div className={styles.name}><b>Frontend:</b><p>{project.ProjectFrontend.Language.name}</p></div>
                                                <div className={styles.language}>{useIcon(project.ProjectFrontend.Language.name)}</div>
                                            </Link>
                                        )}
                                        {project.ProjectBackend && (
                                            <Link target='_blank' to={`/linguagem/${project.ProjectBackend.Language.id}`} className={styles.technologyCard}>
                                                <div className={styles.icon}><GoServer /></div>
                                                <div className={styles.name}><b>Backend:</b><p>{project.ProjectBackend.Language.name}</p></div>
                                                <div className={styles.language}>{useIcon(project.ProjectBackend.Language.name)}</div>
                                            </Link>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                        {project && project.usedTools && (
                            <div className={styles.projectTechInfo}>
                                <h3><GoTools />Ferramentas utilizadas:</h3>
                                <div className={styles.technologyCardContainer}>
                                    {loading && !project && (
                                        <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                                    )}
                                    {!loading && project && project.ProjectTools.length > 0 && (
                                        <>
                                            {project.ProjectTools.map((ProjectTool, index) => (
                                                <Link target='_blank' to={`/ferramenta/${ProjectTool.Tool.id}`} className={`${styles.technologyCard} ${styles.toolsContainer} `} key={index}>
                                                    <div className={styles.icon}>{useIcon(ProjectTool.Tool.name)}</div>
                                                    <div className={styles.name}><p>{ProjectTool.Tool.name}</p></div>
                                                </Link>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                        {project && project.usedDatabase && (
                            <div className={styles.projectTechInfo}>
                                <h3><GoDatabase />Banco de dados utilizado:</h3>
                                <div className={styles.technologyCardContainer}>
                                    {loading && !project && (
                                        <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                                    )}
                                    {!loading && project && project.usedDatabase && (
                                        <Link target='_blank' to={`/database/${project.ProjectDatabase.Database.id}`} className={`${styles.technologyCard} ${styles.toolsContainer}`}>
                                            <div className={styles.icon}>{useIcon(project.ProjectDatabase.Database.name)}</div>
                                            <div className={styles.name}><p>{project.ProjectDatabase.Database.name}</p></div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.images}>
                    <h3><AiFillPicture />Imagens do projeto:</h3>
                    {imagesLoading && (
                        <>
                            <div className='skeleton' style={{ width: '50%', height: '500px', flex: '1 1 49%' }}></div>
                            <div className='skeleton' style={{ width: '50%', height: '500px', flex: '1 1 49%' }}></div>
                        </>
                    )}
                    {!imagesLoading && images && images.length === 0 && (
                        <p className={styles.noData}>Nenhuma imagem cadastrada.</p>
                    )}
                    {!imagesLoading && images && images.length > 0 && (
                        <>
                            {images.map((projectImage, index) => (
                                <div className={styles.image} key={index}>
                                    <img src={`${uploads}/image/${projectImage.image}`} alt="Imagem do projeto" />
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default SingleProjectDetails