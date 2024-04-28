// Styles
import styles from './AboutMe.module.css'

// Icons
import { GrCertificate } from "react-icons/gr";

import { Link } from 'react-router-dom';

// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getProjects } from '../slices/projectSlice'

const AboutMe = () => {
    const dispatch = useDispatch()

    const { projects, loading: projectLoading } = useSelector((state) => state.project)

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    return (
        <section>
            <div className={styles.header}>
                <h1>Minhas Experiências</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <div>
                        <img src="/astronaut.png" alt="" />
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.insideInfoContainer}>
                        <div className={styles.experience}>
                            <div className={styles.topic}>
                                <p className={styles.value}>04+</p>
                                <p className={styles.title}>Anos de estudo</p>
                            </div>
                            <div className={styles.topic}>
                                <p className={styles.value}>06+</p>
                                <p className={styles.title}>Meses de experiência</p>
                            </div>
                            <div className={styles.topic}>
                                <p className={styles.value}>
                                    {projectLoading && (
                                        <div className='skeleton' style={{ width: '100px', height: '50px' }}></div>
                                    )}
                                    {!projectLoading && projects && (
                                        <>
                                            {projects.length}
                                        </>
                                    )}
                                </p>
                                <p className={styles.title}>Projetos desenvolvidos</p>
                            </div>
                        </div>
                        <div className={styles.aboutText}>
                            <div className={styles.experienceContainer}>
                                <h1>Desenvolvedor Freelancer (2021)</h1>
                                <p>Enquanto ainda cursava o ensino médio técnico em informática, atuei como desenvolvedor freelancer, participando ativamente de projetos desafiadores. Durante esse período, desenvolvi dois projetos web completos, utilizando HTML5, CSS3, JavaScript e PHP. Além de implementar o design e funcionalidades, também conduzi reuniões com clientes para entender requisitos e expectativas, e realizei a hospedagem dos projetos, garantindo sua disponibilidade contínua. Ao longo do tempo, estive envolvido em atualizações regulares para garantir que os projetos estivessem sempre alinhados com as necessidades do cliente e as tendências tecnológicas.</p>
                            </div>
                            <div className={styles.experienceContainer}>
                                <h1>Técnico em Informática - Prefeitura de Praia Grande/SP (2023)</h1>
                                <p>Na posição de técnico em informática na Prefeitura de Praia Grande/SP, desempenhei um papel crucial na gestão de dados e sistemas internos. Minhas responsabilidades incluíam inserção, verificação e atualização de dados no sistema interno da organização, garantindo a integridade e precisão das informações. Além disso, forneci suporte técnico para os funcionários municipais, solucionando problemas de hardware e software e garantindo a continuidade das operações do dia a dia.</p>
                            </div>
                        </div>
                        <Link to="/certificacoes">Certificações<GrCertificate /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;