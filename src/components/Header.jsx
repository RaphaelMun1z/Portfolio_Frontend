import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/habilidades">Habilidades</Link>
                        </li>
                        <li>
                            <Link to="/projetos">Projetos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;