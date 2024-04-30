import styles from './ProjectsTypeMenu.module.css'

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Icons
import { TbWorldWww, TbCircuitCellPlus } from "react-icons/tb";
import { IoIosDesktop, IoIosArrowForward } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";

import { Link } from 'react-router-dom'

const ProjectsTypeMenu = () => {
    const el = useRef()
    const tl = useRef()

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#item",
                    scrub: true,
                    start: "top 1000px",
                    end: "bottom 1100px",
                }
            })
                .fromTo("[class*='item0']", {
                    opacity: 0,
                    y: -150,
                }, {
                    opacity: 1,
                    y: 0,
                })
                .fromTo("[class*='item1']", {
                    opacity: 0,
                    y: -150,
                }, {
                    opacity: 1,
                    y: 0,
                })
                .fromTo("[class*='item2']", {
                    opacity: 0,
                    y: -150,
                }, {
                    opacity: 1,
                    y: 0,
                })
                .fromTo("[class*='item3']", {
                    opacity: 0,
                    y: -150,
                }, {
                    opacity: 1,
                    y: 0,
                })
                .fromTo("[class*='item4']", {
                    opacity: 0,
                    y: -150,
                }, {
                    opacity: 1,
                    y: 0,
                })
        }, el)

        return () => {
            gsap.killTweensOf("#item")
        }
    }, [])

    return (
        <section className={styles.projectTypeContainer} ref={el}>
            <div className={`${styles.header} item0`}>
                <h1>Tipos de Projetos</h1>
            </div>
            <div className={styles.contentContainer} >
                <div className={`${styles.projectTypeCard} item1`} id='item'>
                    <div className={styles.iconContainer}>
                        <TbWorldWww />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Desenvolvimento WEB</h1>
                        <p>Desenvolvimento web é a criação de sites e aplicativos online, unindo design (front-end) e funcionalidade (back-end) para oferecer uma experiência interativa e adaptável.</p>
                        <Link to="/projetos?tipo=Web" className={styles.redirectButton}>Ver Projetos<IoIosArrowForward /></Link>
                    </div>
                </div>
                <div className={`${styles.projectTypeCard} item2`} id='item'>
                    <div className={styles.iconContainer}>
                        <IoIosDesktop />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Desenvolvimento Desktop</h1>
                        <p>Desenvolvimento desktop envolve a criação de aplicativos locais para execução em sistemas operacionais. Busca-se otimização, assegurando compatibilidade multiplataforma e integração eficiente com os recursos do sistema.</p>
                        <Link to="/projetos?tipo=Desktop" className={styles.redirectButton}>Ver Projetos<IoIosArrowForward /></Link>
                    </div>
                </div>
                <div className={`${styles.projectTypeCard} item3`} id='item'>
                    <div className={styles.iconContainer}>
                        <CiMobile1 />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Desenvolvimento Mobile</h1>
                        <p>O desenvolvimento mobile refere-se à criação de aplicativos nativos para dispositivos móveis, com ênfase na otimização e integração eficiente com os recursos do sistema operacional, visando proporcionar uma experiência de usuário coesa e eficaz.</p>
                        <Link to="/projetos?tipo=Mobile" className={styles.redirectButton}>Ver Projetos<IoIosArrowForward /></Link>
                    </div>
                </div>
                <div className={`${styles.projectTypeCard} item4`} id='item'>
                    <div className={styles.iconContainer}>
                        <TbCircuitCellPlus />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Programação Embarcada</h1>
                        <p>Programação embarcada abrange a criação de software para sistemas integrados em dispositivos dedicados, como microcontroladores em eletrodomésticos, controladores automotivos e placas de IoT, otimizando funcionalidades específicas desses sistemas.</p>
                        <Link to="/projetos?tipo=EmbeddedProgramming" className={styles.redirectButton}>Ver Projetos<IoIosArrowForward /></Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProjectsTypeMenu