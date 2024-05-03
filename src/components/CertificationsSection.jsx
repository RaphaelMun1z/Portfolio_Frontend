import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import styles from './CertificationsSection.module.scss'
import './swiperConfig.scss'
import 'swiper/css';
import 'swiper/css/pagination';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FaChalkboardTeacher, FaChalkboard } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const CertificationsSection = () => {
    const el = useRef(null);
    const tl = useRef()

    const [swiper, setSwiper] = useState(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#item",
                    scrub: true,
                    start: "top 900px",
                    end: "bottom 950px",
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
        }, el)

        return () => {
            gsap.killTweensOf("#item")
        }
    }, [])

    useEffect(() => {
        if (swiper) {
            const updateSlidesPerView = () => {
                if (window.innerWidth < 700) {
                    swiper.params.slidesPerView = 1;
                    console.log("1")
                } else if (window.innerWidth < 1400) {
                    swiper.params.slidesPerView = 2;
                    console.log("2")
                } else {
                    swiper.params.slidesPerView = 3;
                    console.log("3")
                }
                swiper.update();
            };

            updateSlidesPerView();

            window.addEventListener('resize', updateSlidesPerView);

            return () => {
                window.removeEventListener('resize', updateSlidesPerView);
            };
        }
    }, [swiper]);

    useEffect(() => {
        const swiperInstance = el.current.swiper;
        setSwiper(swiperInstance);
    }, []);

    return (
        <section ref={el}>
            <div className={`${styles.header} item0`}>
                <h1>Certificações</h1>
            </div>
            <div className={styles.contentContainer}>
                <Swiper
                    ref={el}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper certifications"
                >
                    <SwiperSlide className='item1' id='item'>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src="/Curso1.jpg" alt="Certificado" />
                            </div>
                            <div className={styles.textContainer}>
                                <h1 className={styles.title}>Node.js do Zero a Maestria com diversos Projetos</h1>
                                <p className={styles.description}><i>Aplicações completas com Node.js, Express, MongoDB, MySQL, React.js, arquitetura MVC e muito mais!</i></p>
                                <div className={styles.teach}>
                                    <p className={styles.createdBy}><FaChalkboardTeacher />Matheus Battisti - Hora de Codar</p>
                                    <p className={styles.platform}><SiUdemy />Udemy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='item2' id='item'>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src="/Curso3.jpg" alt="Certificado" />
                            </div>
                            <div className={styles.textContainer}>
                                <h1 className={styles.title}>React do Zero a Maestria (c/ hooks, router, API, Projetos)</h1>
                                <p className={styles.description}><i>Projetos completos com React, utilizando tecnologias em alta no mercado como Firebase, Node.js, MongoDB e mais!</i></p>
                                <div className={styles.teach}>
                                    <p className={styles.createdBy}><FaChalkboardTeacher />Matheus Battisti - Hora de Codar</p>
                                    <p className={styles.platform}><SiUdemy />Udemy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='item3' id='item'>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src="/Curso2.png" alt="Certificado" />
                            </div>
                            <div className={styles.textContainer}>
                                <h1 className={styles.title}>Introdução aos métodos ágeis</h1>
                                <p className={styles.description}><i>Fundamentos de métodos ágeis</i></p>
                                <div className={styles.teach}>
                                    <p className={styles.createdBy}><FaChalkboardTeacher />Marcelo Neves</p>
                                    <p className={styles.platform}><FaChalkboard />Canal Valor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >
    )
}

export default CertificationsSection