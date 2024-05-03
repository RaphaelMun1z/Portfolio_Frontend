import styles from './DashboardMenu.module.scss'

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { TbHomeCog } from "react-icons/tb";
import { BsPersonWorkspace, BsDatabase } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { MdOutlineQuestionAnswer, MdOutlineContactSupport } from "react-icons/md";

// Hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import DashboardGeneral from './Dashboard/DashboardGeneral';
import ProjectsManager from './Dashboard/ProjectsManager';
import LanguagesManager from './Dashboard/LanguagesManager';
import FrameworksManager from './Dashboard/FrameworksManager';
import BddManager from './Dashboard/BddManager';
import ToolsManager from './Dashboard/ToolsManager';
import InterpersonalSkillsManager from './Dashboard/InterpersonalSkillsManager';
import ContactFormsManager from './Dashboard/ContactFormsManager';
import FaqManager from './Dashboard/FaqManager';

import { Link } from 'react-router-dom';

const DashboardMenu = () => {
    const [currentPage, setCurrentPage] = useState("");
    const { page } = useParams();
    const pages = [
        "geral",
        "projetos",
        "linguagens",
        "frameworks",
        "bancoDeDados",
        "ferramentas",
        "habilidadesInterpessoais",
        "formulariosDeContato",
        "faq"
    ]

    const handlePageChange = (page) => {
        if (pages.includes(page)) {
            setCurrentPage(page);
        } else {
            setCurrentPage("");
        }
    };

    useEffect(() => {
        handlePageChange(page)
    }, [page])

    return (
        <section>
            <div className={styles.header}>
                <h1>Painel de controle</h1>
            </div>
            <div className={styles.contentContainer}>
                <aside>
                    <div className={styles.actionsContainer}>
                        <Link to="/adm/painel/geral" className={currentPage === "geral" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <TbHomeCog />
                            <p>Painel geral</p>
                        </Link>
                        <Link to="/adm/painel/projetos" className={currentPage === "projetos" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <AiOutlineFundProjectionScreen />
                            <p>Projetos</p>
                        </Link>
                        <Link to="/adm/painel/linguagens" className={currentPage === "linguagens" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <FaCode />
                            <p>Linguagens</p>
                        </Link>
                        <Link to="/adm/painel/frameworks" className={currentPage === "frameworks" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <GiGears />
                            <p>Frameworks</p>
                        </Link>
                        <Link to="/adm/painel/bancoDeDados" className={currentPage === "bancoDeDados" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <BsDatabase />
                            <p>Bancos de dados</p>
                        </Link>
                        <Link to="/adm/painel/ferramentas" className={currentPage === "ferramentas" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <FiTool />
                            <p>Ferramentas</p>
                        </Link>
                        <Link to="/adm/painel/habilidadesInterpessoais" className={currentPage === "habilidadesInterpessoais" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <BsPersonWorkspace />
                            <p>Habilidades interpessoais</p>
                        </Link>
                        <Link to="/adm/painel/formulariosDeContato" className={currentPage === "formulariosDeContato" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <MdOutlineQuestionAnswer />
                            <p>Formulários de contato</p>
                        </Link>
                        <Link to="/adm/painel/faq" className={currentPage === "faq" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <MdOutlineContactSupport />
                            <p>FAQ</p>
                        </Link>
                    </div>
                </aside>
                <div className={styles.mainContainer}>
                    {currentPage === 'geral' && <DashboardGeneral />}
                    {currentPage === 'projetos' && <ProjectsManager />}
                    {currentPage === 'linguagens' && <LanguagesManager />}
                    {currentPage === 'frameworks' && <FrameworksManager />}
                    {currentPage === 'bancoDeDados' && <BddManager />}
                    {currentPage === 'ferramentas' && <ToolsManager />}
                    {currentPage === 'habilidadesInterpessoais' && <InterpersonalSkillsManager />}
                    {currentPage === 'formulariosDeContato' && <ContactFormsManager />}
                    {currentPage === 'faq' && <FaqManager />}
                    {currentPage === '' && (
                        <div className={styles.error}>
                            <img src="/404.png" alt="Ocorreu um erro!" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default DashboardMenu