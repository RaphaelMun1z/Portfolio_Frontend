import { Fragment } from 'react';
import styles from './FrameworksProjectCard.module.scss'

import { useState, useEffect } from 'react';
import { useIcon } from '../hooks/useIcon';

import { Tooltip } from 'react-tooltip';

const FrameworksProjectCard = ({ frontend, backend }) => {
    const [frameworks, setFrameworks] = useState([])

    useEffect(() => {
        const frameworksArray = []

        if (frontend && frontend.Framework) {
            frameworksArray.push(frontend.Framework.name)
        }

        if (backend && backend.Framework) {
            frameworksArray.push(backend.Framework.name)
        }

        setFrameworks(frameworksArray)
    }, [])

    return (
        <>
            {frameworks.length > 0 && (
                <div className={styles.frameworksContainer}>
                    <div className={styles.techInfoContainer}>
                        <p>Frameworks:</p>
                        <div className={styles.frameworks}>
                            {frameworks && frameworks.map((framework, index) => (
                                <Fragment key={index}>
                                    <div className={styles.frameworkCard} data-tooltip-id="frameword-tooltip" data-tooltip-content={framework}>
                                        {useIcon(framework)}
                                    </div>
                                    <Tooltip id="frameword-tooltip" />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default FrameworksProjectCard