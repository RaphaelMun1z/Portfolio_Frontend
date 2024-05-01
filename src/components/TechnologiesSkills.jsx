// Styles
import styles from './TechnologiesSkills.module.scss'
import './swiperSkills.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import TechnologyCard from './TechnologyCard'
import SoftSkillCard from './SoftSkillCard'

// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getFrameworks } from '../slices/frameworkSlice';
import { getLanguages } from '../slices/languageSlice';
import { getDatabases } from '../slices/databaseSlice';
import { getTools } from '../slices/toolSlice';
import { getInterpersonalSkills } from '../slices/interpersonalSkillsSlice'

const TechnologiesSkills = () => {
    const dispatch = useDispatch()

    const { frameworks, loading: frameworkLoading } = useSelector((state) => state.framework)
    const { languages, loading: languageLoading } = useSelector((state) => state.language)
    const { databases, loading: databaseLoading } = useSelector((state) => state.database)
    const { tools, loading: toolLoading } = useSelector((state) => state.tool)
    const { interpersonalSkills, loading: interpersonalSkillLoading } = useSelector((state) => state.interpersonalSkill)

    useEffect(() => {
        dispatch(getFrameworks())
        dispatch(getLanguages())
        dispatch(getDatabases())
        dispatch(getTools())
        dispatch(getInterpersonalSkills())
    }, [])

    return (
        <section>
            <div className={styles.header}>
                <h1>Principais Hard Skills</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.containerTech}>
                    <h1 className={styles.subTitle}>Frameworks</h1>
                    {!frameworkLoading && frameworks.length === 0 && (
                        <h4 className={styles.noData}>Nenhum framework encontrado!</h4>
                    )}
                    {frameworkLoading && (
                        <>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                        </>
                    )}
                    {!frameworkLoading && frameworks && frameworks.length > 0 && (
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {frameworks.map((framework, index) => (
                                <SwiperSlide key={index}>
                                    <TechnologyCard name={framework.name} usage={framework.usageCount} category="frameworks" categoryValue={framework.id} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                <div className={styles.containerTech}>
                    <h1 className={styles.subTitle}>Linguagens</h1>
                    {!languageLoading && languages.length === 0 && (
                        <h4 className={styles.noData}>Nenhuma linguagem encontrada!</h4>
                    )}
                    {languageLoading && (
                        <>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                        </>
                    )}
                    {!languageLoading && languages && languages.length > 0 && (
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {languages.map((language, index) => (
                                <SwiperSlide key={index}>
                                    <TechnologyCard name={language.name} usage={language.usageCount} category="linguagens" categoryValue={language.id} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                <div className={styles.containerTech}>
                    <h1 className={styles.subTitle}>Bancos de dados</h1>
                    {!databaseLoading && databases.length === 0 && (
                        <h4 className={styles.noData}>Nenhum banco de dados encontrado!</h4>
                    )}
                    {databaseLoading && (
                        <>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                        </>
                    )}
                    {!databaseLoading && databases && databases.length > 0 && (
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {databases.map((database, index) => (
                                <SwiperSlide key={index}>
                                    <TechnologyCard name={database.name} usage={database.usageCount} category="bdd" categoryValue={database.id} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                <div className={styles.containerTech}>
                    <h1 className={styles.subTitle}>Ferramentas</h1>
                    {!toolLoading && tools.length === 0 && (
                        <h4 className={styles.noData}>Nenhuma ferramenta encontrada!</h4>
                    )}
                    {toolLoading && (
                        <>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                        </>
                    )}
                    {!toolLoading && tools && tools.length > 0 && (
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {tools.map((tool, index) => (
                                <SwiperSlide key={index}>
                                    <TechnologyCard name={tool.name} usage={tool.usageCount} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                <div className={styles.header}>
                    <h1>Principais Soft Skills</h1>
                </div>
                <div className={styles.containerTech}>
                    <h1 className={styles.subTitle}>Habilidades Interpessoais</h1>
                    {!interpersonalSkillLoading && interpersonalSkills.length === 0 && (
                        <h4 className={styles.noData}>Nenhuma habilidade interpessoal encontrada!</h4>
                    )}
                    {interpersonalSkillLoading && (
                        <>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                            <div className='skeleton' style={{ marginTop: '10px', height: '300px', width: '32.3%' }}></div>
                        </>
                    )}
                    {!interpersonalSkillLoading && interpersonalSkills && interpersonalSkills.length > 0 && (
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {interpersonalSkills.map((interpersonalSkill, index) => (
                                <SwiperSlide key={index}>
                                    <SoftSkillCard name={interpersonalSkill.name} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TechnologiesSkills