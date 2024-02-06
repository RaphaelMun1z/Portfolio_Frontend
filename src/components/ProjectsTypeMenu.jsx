import styles from './ProjectsTypeMenu.module.css'

// Icons
import { TbWorldWww, TbCircuitCellPlus } from "react-icons/tb";
import { IoIosDesktop, IoIosArrowForward } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";

const ProjectsTypeMenu = () => {
    return (
        <section className={styles.projectTypeContainer}>
            <div className={styles.header}>
                <h1>Tipos de Projetos</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.projectTypeCard}>
                    <div className={styles.iconContainer}>
                        <TbWorldWww />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Desenvolvimento WEB</h1>
                        <p>Desenvolvimento web é a criação de sites e aplicativos online, unindo design (front-end) e funcionalidade (back-end) para oferecer uma experiência interativa e adaptável.</p>
                        <button>Ver Projetos<IoIosArrowForward /></button>
                    </div>
                </div>
                <div className={styles.projectTypeCard}>
                    <div className={styles.iconContainer}>
                        <IoIosDesktop />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Desenvolvimento Desktop</h1>
                        <p>Desenvolvimento desktop envolve a criação de aplicativos locais para execução em sistemas operacionais. Busca-se otimização, assegurando compatibilidade multiplataforma e integração eficiente com os recursos do sistema.</p>
                        <button>Ver Projetos<IoIosArrowForward /></button>
                    </div>
                </div>
                <div className={styles.projectTypeCard}>
                    <div className={styles.iconContainer}>
                        <CiMobile1 />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Desenvolvimento Mobile</h1>
                        <p>O desenvolvimento mobile refere-se à criação de aplicativos nativos para dispositivos móveis, com ênfase na otimização e integração eficiente com os recursos do sistema operacional, visando proporcionar uma experiência de usuário coesa e eficaz.</p>
                        <button>Ver Projetos<IoIosArrowForward /></button>
                    </div>
                </div>
                <div className={styles.projectTypeCard}>
                    <div className={styles.iconContainer}>
                        <TbCircuitCellPlus />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Programação Embarcada</h1>
                        <p>Programação embarcada abrange a criação de software para sistemas integrados em dispositivos dedicados, como microcontroladores em eletrodomésticos, controladores automotivos e placas de IoT, otimizando funcionalidades específicas desses sistemas.</p>
                        <button>Ver Projetos<IoIosArrowForward /></button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProjectsTypeMenu