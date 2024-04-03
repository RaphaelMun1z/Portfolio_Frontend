// Styles
import styles from './Footer.module.css'

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className={styles.insideFooter}>
                <div className={styles.listsContainer}>
                    <h1>Serviços</h1>
                    <ul>
                        <li><Link to="/projetos">Projetos desenvolvidos</Link></li>
                        <li><Link to="/testimonials">Depoimentos/Recomendações</Link></li>
                        <li><Link to="/">Orçamento</Link></li>
                        <li><Link to="/">FAQ (Perguntas Frequentes)</Link></li>
                    </ul>
                </div>
                <div className={styles.listsContainer}>
                    <h1>Qualificações</h1>
                    <ul>
                        <li><Link to="/">Blog/Artigos</Link></li>
                        <li><Link to="/">Certificações/Formação Acadêmica</Link></li>
                        <li><Link to="/sobre">Experiência Profissional</Link></li>
                        <li><Link to="/habilidades">Habilidades</Link></li>
                        <li><Link to="/">Prêmios/Reconhecimentos</Link></li>
                    </ul>
                </div>
                <div className={styles.listsContainer}>
                    <h1>Redes Sociais</h1>
                    <ul>
                        <li><div className='skeleton' style={{ width: '150px', height: '25px' }}></div></li>
                        <li><div className='skeleton' style={{ width: '150px', height: '25px', marginTop: '5px' }}></div></li>
                        <li><div className='skeleton' style={{ width: '150px', height: '25px', marginTop: '5px' }}></div></li>
                        {/* <li>Linkedin</li>
                        <li>Github</li>
                        <li>Instagram</li> */}
                    </ul>
                </div>
            </div>
            <p>Copyright &#169; 2024 Portfólio Raphael Muniz</p>
        </footer>
    )
}

export default Footer