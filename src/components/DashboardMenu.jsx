import styles from './DashboardMenu.module.scss'

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { TbHomeCog } from "react-icons/tb";
import { BsPersonWorkspace, BsDatabase } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { MdOutlineQuestionAnswer, MdOutlineContactSupport } from "react-icons/md";

// Hooks
import { useState } from 'react';

// Components
import DashboardGeneral from './Dashboard/DashboardGeneral';
import ProjectsManager from './Dashboard/ProjectsManager';
import LanguagesManager from './Dashboard/LanguagesManager';
import FrameworksManager from './Dashboard/FrameworksManager';
import BddManager from './Dashboard/BddManager';
import ToolsManager from './Dashboard/ToolsManager';
import InterpersonalSkillsManager from './Dashboard/InterpersonalSkillsManager';
import ContactFormsManager from './Dashboard/contactFormsManager';
import FaqManager from './Dashboard/FaqManager';

const DashboardMenu = () => {
    const [currentPage, setCurrentPage] = useState('general');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section>
            <div className={styles.header}>
                <h1>Painel de controle</h1>
            </div>
            <div className={styles.contentContainer}>
                <aside>
                    <div className={styles.actionsContainer}>
                        <div className={currentPage === 'general' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('general')}>
                            <TbHomeCog />
                            <p>Painel geral</p>
                        </div>
                        <div className={currentPage === 'projects' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('projects')}>
                            <AiOutlineFundProjectionScreen />
                            <p>Projetos</p>
                        </div>
                        <div className={currentPage === 'languages' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('languages')}>
                            <FaCode />
                            <p>Linguagens</p>
                        </div>
                        <div className={currentPage === 'frameworks' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('frameworks')}>
                            <GiGears />
                            <p>Frameworks</p>
                        </div>
                        <div className={currentPage === 'bdd' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('bdd')}>
                            <BsDatabase />
                            <p>Bancos de dados</p>
                        </div>
                        <div className={currentPage === 'tools' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('tools')}>
                            <FiTool />
                            <p>Ferramentas</p>
                        </div>
                        <div className={currentPage === 'InterpersonalSkills' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('InterpersonalSkills')}>
                            <BsPersonWorkspace />
                            <p>Habilidades interpessoais</p>
                        </div>
                        <div className={currentPage === 'contactForms' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('contactForms')}>
                            <MdOutlineQuestionAnswer />
                            <p>Formulários de contato</p>
                        </div>
                        <div className={currentPage === 'faq' ? `${styles.link} ${styles.activePage}` : `${styles.link}`} onClick={() => handlePageChange('faq')}>
                            <MdOutlineContactSupport />
                            <p>FAQ</p>
                        </div>
                    </div>
                </aside>
                <div className={styles.mainContainer}>
                    {currentPage === 'general' && <DashboardGeneral />}
                    {currentPage === 'projects' && <ProjectsManager />}
                    {currentPage === 'languages' && <LanguagesManager />}
                    {currentPage === 'frameworks' && <FrameworksManager />}
                    {currentPage === 'bdd' && <BddManager />}
                    {currentPage === 'tools' && <ToolsManager />}
                    {currentPage === 'InterpersonalSkills' && <InterpersonalSkillsManager />}
                    {currentPage === 'contactForms' && <ContactFormsManager />}
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