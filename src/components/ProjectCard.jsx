import styles from './ProjectCard.module.css'
import { LuMonitorSmartphone } from "react-icons/lu";

// Icons
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiLetsencrypt } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/0e/e1/d5/0ee1d58ac29d5cd77d167ee4b38da5f5.jpg" alt="" />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1>ConnectHub</h1>
          <p>O ConnectHub nasceu da convicção de que o poder das conexões profissionais pode transformar carreiras e impulsionar o sucesso. Nossa missão é proporcionar um espaço digital inovador, onde profissionais de diversas áreas podem se conectar, compartilhar experiências e fortalecer suas redes profissionais.</p>

          <div className={styles.technologiesContainer}>
            <p>Tecnologias utilizadas:</p>
            <div className={styles.technologies}>
              <div className={styles.technologieCard}>
                <SiHtml5 />
              </div>
              <div className={styles.technologieCard}>
                <SiJavascript />
              </div>
              <div className={styles.technologieCard}>
                <SiCss3 />
              </div>
              <div className={styles.technologieCard}>
                <SiReact />
              </div>
            </div>
          </div>
          <div className={styles.projectExtraDetails}>
            <div className={styles.extraDetailsCard}>
              <div className={styles.icon}>
                <LuMonitorSmartphone />
              </div>
              <div className={styles.text}>
                Responsivo
              </div>
            </div>
            <div className={styles.extraDetailsCard}>
              <div className={styles.icon}>
                <SiLetsencrypt />
              </div>
              <div className={styles.text}>
                Criptografia
              </div>
            </div>
            <div className={styles.extraDetailsCard}>
              <div className={styles.icon}>
                <GoSearch />
              </div>
              <div className={styles.text}>
                SEO
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.btnMoreAbout}>Saber Mais<IoIosArrowForward /></button>
            <button className={styles.btnSave}><BsBookmark />Salvar</button>
            <button className={styles.btnSaved}><BsBookmarkCheckFill />Salvo!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard