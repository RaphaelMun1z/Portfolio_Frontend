import styles from './DashboardMenu.module.scss'

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { TbHomeCog, TbAccessPoint } from "react-icons/tb";
import { BsPersonWorkspace, BsDatabase, BsFillHouseGearFill } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineQuestionAnswer, MdOutlineContactSupport, MdOutlineBugReport, MdOutlineContactMail } from "react-icons/md";

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
import BudgetFormsManager from './Dashboard/BudgetFormsManager';
import FaqManager from './Dashboard/FaqManager';
import ReportManager from './Dashboard/ReportManager';
import LogManager from './Dashboard/LogManager';
import SystemManager from './Dashboard/SystemManager';

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
        "formulariosDeOrcamento",
        "faq",
        "report",
        "log",
        "sistema"
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
                            <MdOutlineContactMail />
                            <p>Formulários de contato</p>
                        </Link>
                        <Link to="/adm/painel/formulariosDeOrcamento" className={currentPage === "formulariosDeOrcamento" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <GoProjectRoadmap />
                            <p>Formulários de orçamento</p>
                        </Link>
                        <Link to="/adm/painel/faq" className={currentPage === "faq" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <MdOutlineContactSupport />
                            <p>FAQ</p>
                        </Link>
                        <Link to="/adm/painel/report" className={currentPage === "report" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <MdOutlineBugReport />
                            <p>Reports</p>
                        </Link>
                        <Link to="/adm/painel/log" className={currentPage === "log" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <TbAccessPoint />
                            <p>Logs</p>
                        </Link>
                        <Link to="/adm/painel/sistema" className={currentPage === "sistema" ? `${styles.link} ${styles.activePage}` : `${styles.link}`}>
                            <BsFillHouseGearFill />
                            <p>Sistema</p>
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
                    {currentPage === 'formulariosDeOrcamento' && <BudgetFormsManager />}
                    {currentPage === 'faq' && <FaqManager />}
                    {currentPage === 'report' && <ReportManager />}
                    {currentPage === 'log' && <LogManager />}
                    {currentPage === 'sistema' && <SystemManager />}
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