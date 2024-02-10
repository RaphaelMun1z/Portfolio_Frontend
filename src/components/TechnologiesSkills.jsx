// Styles
import styles from './TechnologiesSkills.module.css'

import TechnologyCard from './TechnologyCard'

const TechnologiesSkills = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Principais Tecnologias</h1>
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.subTitle}>Framework</h1>
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <h1 className={styles.subTitle}>Linguagem de programação</h1>
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <h1 className={styles.subTitle}>Linguagem de estilização</h1>
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <h1 className={styles.subTitle}>Banco de dados</h1>
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <h1 className={styles.subTitle}>IDE</h1>
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />

                {/* <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="react_logo.png" alt="Ícone" />
                            <p>React.js</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>Framework Javascript</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>20<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="node_logo.png" alt="Ícone" />
                            <p>Node.js</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>15<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="laravel_logo.png" alt="Ícone" />
                            <p>Laravel</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>Framework PHP</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>5<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="javascript_logo.png" alt="Ícone" />
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>Linguagem de programação</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>40<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="php_logo.png" alt="Ícone" />
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>Linguagem de programação</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>15<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="arduino_logo.png" alt="Ícone" />
                            <p>Arduíno</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>IDE | Linguagem baseada em C e C++</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>4<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="sass_logo.png" alt="Ícone" />
                            <p>Sass</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>Linguagem de folhas de estilo</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>40<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="mysql_logo.png" alt="Ícone" />
                            <p>MySql</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>Banco de dados relacional</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>40<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="mongodb_logo.png" alt="Ícone" />
                            <p>MongoDB</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>Banco de dados não relacional</span></p>
                            <div className={styles.generalInfo}>
                                <h2>Projetos:</h2>
                                <p>40<FaLaptopCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="vscode_logo.png" alt="Ícone" />
                            <p>VS Code</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>IDE</span></p>
                            <div className={styles.generalInfo}>
                                <p><FaCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techCard}>
                    <div className={styles.iconContainer}>
                        <div className={styles.insideIconContainer}>
                            <img src="postman_logo.png" alt="Ícone" />
                            <p>Postman</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.insideInfoContainer}>
                            <p className={styles.extraDescription}><FaStar /><span>API Client</span></p>
                            <div className={styles.generalInfo}>
                                <p><FaCode /></p>
                            </div>
                            <div className={styles.actions}>
                                <button>Ver Projetos<IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default TechnologiesSkills