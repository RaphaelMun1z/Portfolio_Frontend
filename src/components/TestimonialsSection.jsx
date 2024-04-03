import styles from './TestimonialsSection.module.scss'
import './swiperTestimonial.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Hooks
import { useState, useRef } from 'react';

const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState([
        {
            name: "John Doe",
            position: "CEO",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Jane Smith",
            position: "Marketing Manager",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "Alice Johnson",
            position: "Software Engineer",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name: "Michael Brown",
            position: "Sales Representative",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            name: "Emily Williams",
            position: "Graphic Designer",
            image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ])

    return (
        <section>
            <div className={styles.header}>
                <h1>Depoimentos/Recomendações</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.cards}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
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
            </div>
        </section>
    )
}

export default TestimonialsSection