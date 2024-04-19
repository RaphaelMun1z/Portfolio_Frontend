import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import styles from './Header.module.scss'

// Redux
import { logout, reset } from '../slices/authSlice'

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0 && document.documentElement.offsetHeight > 2000);
        });
    }, []);

    const { auth } = useAuth()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())

        navigate("/login")
    }

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
                        {auth && (
                            <>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${styles.active}` : ''
                                    } to="/adm/painel/geral">Painel</NavLink>
                                </li>
                                <li>
                                    <p onClick={handleLogout}>Sair</p>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;