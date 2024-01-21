// Styles
import styles from './Header.module.css'

const Header = ({ scroll }) => {
    return (
        <header className={scroll ? `${styles.active}` : ''}>
            <nav>
                <div className={styles.logoContainer}>
                    <p>Portfólio</p>
                </div>
                <div className={styles.linksContainer}>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Sobre</a></li>
                        <li><a href='/'>Habilidades</a></li>
                        <li><a href='/'>Projetos</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;