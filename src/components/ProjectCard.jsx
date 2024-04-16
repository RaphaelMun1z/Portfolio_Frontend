import styles from './ProjectCard.module.scss'

import { Link } from 'react-router-dom'
import TechnologiesProjectCard from './TechnologiesProjectCard'
import ToolsProjectCard from './ToolsProjectCard';

// Icons
import { GoStack, GoServer } from "react-icons/go";
import { GrCircleInformation } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/0e/e1/d5/0ee1d58ac29d5cd77d167ee4b38da5f5.jpg" alt="" />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>

          {project.stack && (
            <div className={styles.stackContainer}>
              {project.stack === "Fullstack" && (
                <>
                  <GoStack />
                  <p>{project.stack}</p>
                </>
              )}
              {project.stack === "Frontend" && (
                <>
                  <MdDesignServices />
                  <p>{project.stack}</p>
                </>
              )}
              {project.stack === "Backend" && (
                <>
                  <GoServer />
                  <p>{project.stack}</p>
                </>
              )}
            </div>
          )}

          <TechnologiesProjectCard frontend={project.ProjectFrontend} backend={project.ProjectBackend} />
          <ToolsProjectCard projectTools={project.ProjectTools} />

          <div className={styles.actions}>
            <Link to={`projeto/${project.id}`} className={styles.btnMoreAbout}>Saber Mais<GrCircleInformation /></Link>
            {project.ProjectHost && (
              <Link to={`${project.ProjectHost.URL}`} className={styles.btnVisitProject}>Visitar<IoIosArrowForward /></Link>
            )}
            {!project.ProjectHost && (
              <Link className={styles.btnVisitProjectBlock}>Não hospedado<IoCloudOfflineOutline /></Link>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProjectCard