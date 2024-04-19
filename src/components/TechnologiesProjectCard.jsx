import { Fragment } from 'react';
import styles from './TechnologiesProjectCard.module.scss'

import { useState, useEffect } from 'react';

import { Tooltip } from 'react-tooltip';

// Icons
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython, SiPhp, SiTypescript, SiDjango, SiSpring, SiExpress, SiLaravel, SiVuedotjs, SiFlask } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { FaJava, FaAngular } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const TechnologiesProjectCard = ({ frontend, backend }) => {
    const [languages, setLanguages] = useState([])
    const [frameworks, setFrameworks] = useState([])

    useEffect(() => {
        const languagesArray = []
        const frameworksArray = []

        if (frontend) {
            languagesArray.push(frontend.Language.name)
            frameworksArray.push(frontend.Framework.name)
        }

        if (backend) {
            languagesArray.push(backend.Language.name)
            frameworksArray.push(backend.Framework.name)
        }

        setLanguages(languagesArray)
        setFrameworks(frameworksArray)
    }, [])

    const languageIcons = {
        Python: <SiPython />,
        PHP: <SiPhp />,
        Javascript: <SiJavascript />,
        Typescript: <SiTypescript />,
        SQL: <GrMysql />,
        HTML: <SiHtml5 />,
        CSS: <SiCss3 />,
        Java: <FaJava />,
        React: <SiReact />,
        Angular: <FaAngular />,
        Django: <SiDjango />,
        SpringBoot: <SiSpring />,
        Express: <SiExpress />,
        Laravel: <SiLaravel />,
        Vue: <SiVuedotjs />,
        Flask: <SiFlask />,
    };

    return (
        <div className={styles.technologiesContainer}>
            {languages.length > 0 && (
                <div className={styles.techInfoContainer}>
                    <p>Linguages utilizadas:</p>
                    <div className={styles.technologies}>
                        {languages && languages.map((language, index) => (
                            <Fragment key={index}>
                                <div className={styles.technologieCard} data-tooltip-id="language-tooltip" data-tooltip-content={language}>
                                    {languageIcons[language] || <FaCode />}
                                </div>
                                <Tooltip id="language-tooltip" />
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
            {frameworks.length > 0 && (
                <div className={styles.techInfoContainer}>
                    <p>Frameworks utilizados:</p>
                    <div className={styles.technologies}>
                        {frameworks && frameworks.map((framework, index) => (
                            <Fragment key={index}>
                                <div className={styles.technologieCard} data-tooltip-id="frameword-tooltip" data-tooltip-content={framework}>
                                    {languageIcons[framework] || <FaCode />}
                                </div>
                                <Tooltip id="frameword-tooltip" />
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TechnologiesProjectCard