// Styles
import styles from './BioAboutMe.module.css'

import Image from './Image';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Icons
import { IoIosArrowForward } from "react-icons/io";

import { Link } from 'react-router-dom';

const photoImage = "/minha_foto_2.png"

const BioAboutMe = () => {
    const el = useRef()
    const tl = useRef()

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#item",
                    scrub: true,
                    start: "top 700px",
                    end: "bottom 920px",
                }
            })
                .fromTo("[class*='imageContainer']", {
                    opacity: 0,
                    y: -150,
                }, {
                    opacity: 1,
                    y: 0,
                })
                .fromTo("[class*='infoContainer']", {
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
        <section id='container'>
            <div className={styles.header}>
                <h1>Quem Sou?</h1>
            </div>
            <div className={styles.contentContainer} ref={el}>
                <div className={styles.imageContainer} id='item'>
                    <div>
                        <Image imagePath={photoImage} />
                    </div>
                </div>
                <div className={styles.infoContainer} id='item'>
                    <div className={styles.insideInfoContainer}>
                        <p className={styles.aboutText}>
                            Me chamo <b>Raphael Muniz</b> e atualmente curso o primeiro semestre de <b>Sistemas de Informação na Universidade Federal de Uberlândia (UFU)</b>. Sou apaixonado por desenvolvimento web e atuo como <b>full stack</b>. Minhas principais linguagens de programação são <b>JavaScript, PHP e C#</b>, e utilizo o ambiente de execução <b>Node.js</b>, além de frameworks como <b>ReactJs e Laravel</b>. Valorizo o <b>comprometimento</b>, sempre buscando a <b>excelência</b>, e prezo pelo <b>respeito</b> e <b>ética</b> em tudo o que faço.
                        </p>
                        <Link to="/habilidades">Habilidades<IoIosArrowForward /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BioAboutMe