import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Styles
import styles from './Header.module.css'

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);

    return (
        <header className={scroll ? `${styles.active}` : ''}>
            <nav>
                <div className={styles.logoContainer}>
                    <p>Portfólio</p>
                </div>
                <div className={styles.linksContainer}>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${styles.active}` : ''
                            } to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${styles.active}` : ''
                            } to="/sobre">Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${styles.active}` : ''
                            } to="/habilidades">Habilidades</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${styles.active}` : ''
                            } to="/projetos">Projetos</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${styles.active}` : ''
                            } to="/contato">Contato</NavLink>
                        </li>
                      
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${styles.active}` : ''
                            } to="/painel">Painel</NavLink>
                        </li>
                        <li>
                            <p>Sair</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;