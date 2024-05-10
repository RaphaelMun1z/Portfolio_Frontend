// Hooks
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import styles from './TestimonialsSection.module.scss'
import './swiperConfig.scss'
import 'swiper/css';
import 'swiper/css/pagination';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TestimonialsSection = () => {
    const el = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const testimonialsElements = el.current.querySelectorAll('.item');

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: testimonialsElements,
                scrub: true,
                start: "top 800px",
                end: "bottom 600px",
            }
        })
            .fromTo(testimonialsElements,
                { opacity: 0, y: -150 },
                { opacity: 1, y: 0, stagger: 0.2 }
            );

        return () => {
            tl.current.kill();
        };
    }, []);

    const [testimonials, setTestimonials] = useState([
        {
            name: "Joana Pereira",
            position: "CEO",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Excelente profissional em desenvolvimento web, altamente recomendado.",
        },
        {
            name: "Luís Fernandes",
            position: "Gerente de Projetos",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Destaque em projetos web, altamente colaborativo e eficiente.",
        },
        {
            name: "Márcia Lima",
            position: "Diretora de Design",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Expertise impecável em integração front-end/back-end.",
        },
        {
            name: "Ricardo Santos",
            position: "Coordenador de TI",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Habilidades excepcionais em resolver problemas críticos.",
        },
        {
            name: "Fernanda Oliveira",
            position: "Especialista em UX/UI Design",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Talento notável em criar interfaces intuitivas.",
        },
    ])

    const updateSlidesPerView = () => {
        const swiper = el.current.swiper;
        if (swiper) {
            if (window.innerWidth < 700) {
                swiper.params.slidesPerView = 1;
            } else if (window.innerWidth < 1400) {
                swiper.params.slidesPerView = 2;
            } else {
                swiper.params.slidesPerView = 3;
            }
            swiper.update();
        }
    };

    useEffect(() => {
        updateSlidesPerView();

        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    return (
        <section>
            <div className={`${styles.header} item`}>
                <h1>Depoimentos/Recomendações</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.cards}>
                        <Swiper
                            ref={el}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide className='item' key={index}>
                                    <div className={styles.testimonial} >
                                        <div className={styles.insideTestimonial}>
                                            <div className={styles.image}>
                                                <img src={testimonials[index].image} alt="User image" />
                                            </div>
                                            <div className={styles.message}>
                                                <p>{testimonials[index].message}</p>
                                            </div>
                                            <div className={styles.footer}>
                                                <h2>{testimonials[index].name}</h2>
                                                <h4>{testimonials[index].position}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <span className='text-alert'>Textos e pessoas fictícias.</span>
            </div>
        </section>
    )
}

export default TestimonialsSection