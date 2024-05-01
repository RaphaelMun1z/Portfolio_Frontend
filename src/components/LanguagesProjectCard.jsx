import { Fragment } from 'react';
import styles from './LanguagesProjectCard.module.scss'

import { useState, useEffect } from 'react';
import { useIcon } from '../hooks/useIcon';

import { Tooltip } from 'react-tooltip';

const LanguagesProjectCard = ({ frontend, backend }) => {
    const [languages, setLanguages] = useState([])
    console.log(frontend)
    useEffect(() => {
        const languagesArray = []

        if (frontend) {
            languagesArray.push(frontend.Language.name)
        }

        if (backend) {
            languagesArray.push(backend.Language.name)
        }

        setLanguages(languagesArray)
    }, [])

    return (
        <>
            {languages.length > 0 && (
                <div className={styles.languagesContainer}>
                    <div className={styles.techInfoContainer}>
                        <p>Linguages:</p>
                        <div className={styles.languages}>
                            {languages && languages.map((language, index) => (
                                <Fragment key={index}>
                                    <div className={styles.languageCard} data-tooltip-id="language-tooltip" data-tooltip-content={language}>
                                        {useIcon(language)}
                                    </div>
                                    <Tooltip id="language-tooltip" />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default LanguagesProjectCard