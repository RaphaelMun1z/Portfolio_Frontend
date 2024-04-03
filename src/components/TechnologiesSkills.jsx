// Styles
import styles from './TechnologiesSkills.module.css'
import './swiperSkills.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import TechnologyCard from './TechnologyCard'

const TechnologiesSkills = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Principais Hard Skills</h1>
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.subTitle}>Framework</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                    </SwiperSlide>
                </Swiper>
                <h1 className={styles.subTitle}>Linguagem de programação</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                </Swiper>
                <h1 className={styles.subTitle}>Linguagem de estilização</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                </Swiper>
                <h1 className={styles.subTitle}>Banco de dados</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                </Swiper>
                <h1 className={styles.subTitle}>IDE</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default TechnologiesSkills