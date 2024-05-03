import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';

import { GrMenu, GrClose } from "react-icons/gr";

// Styles
import styles from './Header.module.scss'

// Redux
import { logout, reset } from '../slices/authSlice'

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [openNavbar, setOpenNavbar] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0 && document.documentElement.offsetHeight > window.innerHeight + 200);
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

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar)
    }

    const updateSlidesPerView = () => {
        if (window.innerWidth < 1200) {
            setOpenNavbar(false)
        } else {
            setOpenNavbar(true)
        }
    };

    useEffect(() => {
        updateSlidesPerView()
        console.log("Teste")
    }, [window])

    useEffect(() => {
        updateSlidesPerView()

        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const navLinkClicked = () => {
        setOpenNavbar(false)
    }

    return (
        <header className={scroll ? `${styles.active}` : ''}>
            <nav>
                <div className={styles.navTop}>
                    <div className={styles.logoContainer}>
                        <p>Portfólio</p>
                    </div>
                    <div className={styles.mobileNav} onClick={() => toggleNavbar()}>
                        {!openNavbar && (
                            <GrMenu />
                        )}
                        {openNavbar && (
                            <GrClose />
                        )}
                    </div>
                </div>
                {openNavbar && (
                    <div className={styles.linksContainer}>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ''
                                } to="/" onClick={() => navLinkClicked()}>Início</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ''
                                } to="/sobre" onClick={() => navLinkClicked()}>Sobre</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ''
                                } to="/habilidades" onClick={() => navLinkClicked()}>Habilidades</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ''
                                } to="/projetos" onClick={() => navLinkClicked()}>Projetos</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ''
                                } to="/contato" onClick={() => navLinkClicked()}>Contato</NavLink>
                            </li>
                            {auth && (
                                <>
                                    <li>
                                        <NavLink className={({ isActive }) =>
                                            isActive ? `${styles.active}` : ''
                                        } to="/adm/painel/geral" onClick={() => navLinkClicked()}>Painel</NavLink>
                                    </li>
                                    <li>
                                        <p onClick={handleLogout}>Sair</p>
                                    </li>
                                </>
                            )}
                            {!auth && (
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${styles.active} ${styles.loginButton}` : `${styles.loginButton}`
                                    } to="/login" onClick={() => navLinkClicked()}>Acessar</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;