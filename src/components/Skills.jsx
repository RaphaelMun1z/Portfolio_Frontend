// Styles
import styles from './Skills.module.css'

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Icons
import { IoIosArrowForward } from "react-icons/io";

const Skills = () => {
    const el = useRef()
    const tl = useRef()

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#item",
                    scrub: true,
                    start: "top 950px",
                    end: "bottom 750px",
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
                .fromTo("[class*='item5']", {
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
        <section ref={el}>
            <div className={`${styles.header} item0`}>
                <h1>Habilidades</h1>
            </div>
            <div className={styles.contentContainer} >
                <div className={styles.cardContainer}>
                    <div className={styles.insideCardContainer} >
                        <div className={`${styles.card} item1`} id='item'>
                            <div className={styles.insideCard}>
                                <h3>Frontend</h3>
                                <p>Experiência avançada em HTML5, CSS3 (incluindo Sass/SCSS) e JavaScript para desenvolver interfaces responsivas, altamente organizadas e visualmente atraentes.</p>
                            </div>
                        </div>
                        <div className={`${styles.card} item2`} id='item'>
                            <div className={styles.insideCard}>
                                <h3>Backend</h3>
                                <p>Experiência em desenvolvimento de APIs RESTful e manipulação eficiente de dados com Node.js e Express.</p>
                            </div>
                        </div>
                        <div className={`${styles.card} item3`} id='item'>
                            <div className={styles.insideCard}>
                                <h3>Frameworks</h3>
                                <p>Expertise em frameworks como React.js e Laravel para agilizar o desenvolvimento e garantir a manutenibilidade do código.</p>
                            </div>
                        </div>
                        <div className={`${styles.card} item4`} id='item'>
                            <div className={styles.insideCard}>
                                <h3>Bancos de Dados</h3>
                                <p>Proficiência em SQL e modelagem de bancos de dados relacionais, bem como experiência com bancos de dados NoSQL como MongoDB.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer} id='item'>
                    <div className={`${styles.insideInfoContainer} item5`} id='item'>
                        <h1>Programação de Ponta</h1>
                        <p>
                            "Explorador comprometido das intricadas linhas de código, busco harmonizar criatividade e eficiência para transformar desafios em experiências digitais notáveis. Com uma abordagem centrada no usuário, minha jornada envolve a constante busca por soluções inovadoras que transcendam as expectativas no universo digital."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;