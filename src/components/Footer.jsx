// Styles
import styles from './Footer.module.css'

import { Link } from "react-router-dom";

// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getSocialMedia } from '../slices/socialMediaSlice'

const Footer = () => {
    const dispatch = useDispatch()

    const { socialMedia, loading: socialMediaLoading } = useSelector((state) => state.socialMedia)

    useEffect(() => {
        dispatch(getSocialMedia())
    }, [])

    return (
        <footer>
            <div className={styles.insideFooter}>
                <div className={styles.listsContainer}>
                    <h1>Serviços</h1>
                    <ul>
                        <li><Link to="/projetos">Projetos desenvolvidos</Link></li>
                        <li><Link to="/depoimentos">Depoimentos/Recomendações</Link></li>
                        <li><Link to="/orcamento">Orçamento</Link></li>
                        <li><Link to="/faq">FAQ (Perguntas Frequentes)</Link></li>
                    </ul>
                </div>
                <div className={styles.listsContainer}>
                    <h1>Qualificações</h1>
                    <ul>
                        <li><Link to="/sobre">Formação Acadêmica</Link></li>
                        <li><Link to="/sobre">Experiência Profissional</Link></li>
                        <li><Link to="/habilidades">Habilidades</Link></li>
                        <li><Link to="/certificacoes">Certificações</Link></li>
                    </ul>
                </div>
                <div className={styles.listsContainer}>
                    <h1>Redes Sociais</h1>
                    <ul>
                        {socialMediaLoading && (
                            <>
                                <li><div className='skeleton' style={{ width: '150px', height: '25px' }}></div></li>
                                <li><div className='skeleton' style={{ width: '150px', height: '25px', marginTop: '5px' }}></div></li>
                                <li><div className='skeleton' style={{ width: '150px', height: '25px', marginTop: '5px' }}></div></li>
                            </>
                        )}
                        {!socialMediaLoading && socialMedia && socialMedia.linkedin && (
                            <li><Link to={socialMedia.linkedin}>Linkedin</Link></li>
                        )}

                        {!socialMediaLoading && socialMedia && socialMedia.github && (
                            <li><Link to={socialMedia.github}>Github</Link></li>
                        )}

                        {!socialMediaLoading && socialMedia && socialMedia.instagram && (
                            <li><Link to={socialMedia.instagram}>Instagram</Link></li>
                        )}
                    </ul>
                </div>
            </div>
            <p>Copyright &#169; 2024 Portfólio Raphael Muniz</p>
        </footer>
    )
}

export default Footer