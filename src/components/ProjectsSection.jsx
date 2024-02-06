import ProjectCard from './ProjectCard'
import styles from './ProjectsSection.module.css'

const ProjectsSection = () => {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.header}>
                <h1>Meus Projetos</h1>
            </div>
            <div className={styles.contentContainer}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectsSection