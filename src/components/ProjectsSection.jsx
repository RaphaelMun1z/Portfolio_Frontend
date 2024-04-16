import ProjectCard from './ProjectCard'
import styles from './ProjectsSection.module.css'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaSearch, FaInfo } from "react-icons/fa";

// Redux
import { getProjects } from '../slices/projectSlice'

const ProjectsSection = () => {
    const dispatch = useDispatch()

    const { projects, loading, error, message } = useSelector((state) => state.project)

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.header}>
                <h1>Meus Projetos</h1>
            </div>
            <div className={styles.searchForProjectContainer}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Pesquise por um projeto..." />
                    <button type="submit">
                        <FaSearch />
                    </button>
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