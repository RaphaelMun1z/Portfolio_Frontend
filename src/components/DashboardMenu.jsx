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
                        <div className={`${styles.link} ${styles.activePage}`} onClick={() => handlePageChange('general')}>
                            <TbHomeCog />
                            <p>Painel geral</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <AiOutlineFundProjectionScreen />
                            <p>Projetos</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <FaCode />
                            <p>Linguagens</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <GiGears />
                            <p>Frameworks</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <BsDatabase />
                            <p>Bancos de dados</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <FiTool />
                            <p>Ferramentas</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <BsPersonWorkspace />
                            <p>Habilidades interpessoais</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <MdOutlineQuestionAnswer />
                            <p>Formulários de contato</p>
                        </div>
                        <div className={styles.link} onClick={() => handlePageChange('')}>
                            <MdOutlineContactSupport />
                            <p>Perguntas e respostas</p>
                        </div>
                    </div>
                </aside>
                <div className={styles.mainContainer}>
                    {currentPage === 'general' && <DashboardGeneral />}
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