import styles from './SingleProjectDetails.module.scss'

import { FaCode, FaGithub, FaBug, FaReact, FaJs, FaLaravel, FaPhp, FaAngular, FaDocker, FaExternalLinkAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";

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
                    </div>
                    <div className={styles.technologies}>
                        <h3><FaCode />Tecnologias utilizadas:</h3>
                        <div className={styles.technologyCardContainer}>
                            {loading && !project && (
                                <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                            )}
                            {!loading && project && (
                                <>
                                    {project.ProjectFrontend && (
                                        <div className={styles.technologyCard}>
                                            <div className={styles.icon}><FaReact /></div>
                                            <div className={styles.name}>{project.ProjectFrontend.Framework.name}</div>
                                            <div className={styles.language}><FaJs className={styles.js} /></div>
                                        </div>
                                    )}
                                    {project.ProjectBackend && (
                                        <div className={styles.technologyCard}>
                                            <div className={styles.icon}><FaReact /></div>
                                            <div className={styles.name}>{project.ProjectBackend.Framework.name}</div>
                                            <div className={styles.language}><FaJs className={styles.js} /></div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.repositories}>
                    <div className={styles.header}>
                        <h1>Repositórios do projeto</h1>
                    </div>
                    <div className={styles.repositoriesSection}>
                        {loading && !project && (
                            <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                        )}
                        {!loading && project && (
                            <button className={styles.github}><FaGithub />Frontend<FaExternalLinkAlt className={styles.link} /></button>
                        )}
                    </div>
                    <div className={styles.repositoriesSection}>
                        {loading && !project && (
                            <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                        )}
                        {!loading && project && (
                            <button className={styles.github}><FaGithub />Backend<FaExternalLinkAlt className={styles.link} /></button>
                        )}
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