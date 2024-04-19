import styles from './DatabaseProjectCard.module.scss'

import { useState, useEffect } from 'react';
import { useIcon } from '../hooks/useIcon';

import { Tooltip } from 'react-tooltip';

const DatabaseProjectCard = ({ projectDatabase }) => {
    return (
        <>
            {projectDatabase && (
                <div className={styles.databaseContainer}>
                    <div className={styles.techInfoContainer}>
                        <p>Banco de dados:</p>
                        <div className={styles.database}>
                            <div className={styles.databaseCard} data-tooltip-id="frameword-tooltip" data-tooltip-content={projectDatabase.Database.name}>
                                {useIcon(projectDatabase.Database.name)}
                            </div>
                            <Tooltip id="frameword-tooltip" />
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default DatabaseProjectCard