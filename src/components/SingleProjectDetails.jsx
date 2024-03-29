import styles from './SingleProjectDetails.module.scss'

import { FaCode, FaGithub, FaBug, FaReact, FaJs, FaLaravel, FaPhp, FaAngular, FaDocker, FaExternalLinkAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";

const SingleProjectDetails = () => {
    return (
        <section className={styles.projectDetailsContainer}>
            <div className={styles.header}>
                <div className='skeleton' style={{ width: '600px', height: '90px' }}></div>
                {/* <h1>Título do Projeto</h1> */}
                <div className={styles.actions}>
                    <div className='skeleton' style={{ width: '460px', height: '60px' }}></div>
                    {/* <button className={styles.bug}><FaBug />Relatar BUG</button>
                    <button className={styles.save}><BsBookmark />Salvar</button>
                    <button className={styles.saved}><BsBookmarkCheckFill />Salvo!</button> */}
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.headerContent}>
                    <div className={styles.description}>
                        {/* <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        </p> */}
                        <div className='skeleton' style={{ width: '600px', height: '350px' }}></div>
                        {/* <button className={styles.bug}>Visitar<FaExternalLinkAlt /></button> */}
                        <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                    </div>
                    <div className={styles.technologies}>
                        <h3><FaCode />Tecnologias utilizadas:</h3>
                        <div className={styles.technologyCardContainer}>
                            <div className='skeleton' style={{ width: '500px', height: '300px' }}></div>
                            {/* <div className={styles.technologyCard}>
                                <div className={styles.icon}><FaReact /></div>
                                <div className={styles.name}>React</div>
                                <div className={styles.language}><FaJs className={styles.js} /></div>
                            </div>
                            <div className={styles.technologyCard}>
                                <div className={styles.icon}><FaReact /></div>
                                <div className={styles.name}>React</div>
                                <div className={styles.language}><SiTypescript className={styles.ts} /></div>
                            </div>
                            <div className={styles.technologyCard}>
                                <div className={styles.icon}><FaLaravel /></div>
                                <div className={styles.name}>Laravel</div>
                                <div className={styles.language}><FaPhp className={styles.php} /></div>
                            </div>
                            <div className={styles.technologyCard}>
                                <div className={styles.icon}><FaAngular /></div>
                                <div className={styles.name}>Angular</div>
                                <div className={styles.language}><SiTypescript className={styles.ts} /></div>
                            </div>
                            <div className={styles.technologyCard}>
                                <div className={styles.icon}><FaDocker /></div>
                                <div className={styles.name}>Docker</div>
                                <div className={styles.language}><FaGear /></div>
                            </div>
                            <div className={styles.technologyCard}>
                                <div className={styles.icon}><FaReact /></div>
                                <div className={styles.name}>React Native</div>
                                <div className={styles.language}><FaJs className={styles.js} /></div>
                            </div>
                            <div className={`${styles.technologyCard} ${styles.expand}`}>
                                <div className={styles.icon}><IoIosArrowDown /></div>
                                <div className={styles.name}>Mostrar mais</div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.repositories}>
                    <div className={styles.header}>
                        <h1>Repositórios do projeto</h1>
                    </div>
                    <div className={styles.repositoriesSection}>
                        {/* <button className={styles.github}><FaGithub />Frontend<FaExternalLinkAlt className={styles.link} /></button> */}
                        <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                    </div>
                    <div className={styles.repositoriesSection}>
                        {/* <button className={styles.github}><FaGithub />Backend<FaExternalLinkAlt className={styles.link} /></button> */}
                        <div className='skeleton' style={{ width: '200px', height: '60px' }}></div>
                    </div>
                </div>
                <div className={styles.images}>
                    <h3><AiFillPicture />Imagens do projeto:</h3>
                    <div className='skeleton' style={{ width: '50%', height: '500px', flex: '1 1 49%' }}></div>
                    <div className='skeleton' style={{ width: '50%', height: '500px', flex: '1 1 49%' }}></div>
                    {/* <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div>
                    <div className={styles.image}>
                        <img src="" alt="Imagem do projeto" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default SingleProjectDetails