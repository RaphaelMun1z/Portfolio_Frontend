import styles from './StackProjectCard.module.scss'

import { useIcon } from '../hooks/useIcon';

import { Tooltip } from 'react-tooltip';

const StackProjectCard = ({ projectStack }) => {
    return (
        <>
            {projectStack && (
                <div className={styles.stackContainer}>
                    {projectStack === "Fullstack" && (
                        <>
                            {useIcon('Fullstack')}
                            <p id='Fullstack'>{projectStack}</p>
                            <Tooltip
                                anchorSelect="#Fullstack"
                                content="Este é um projeto Fullstack!"
                            />
                        </>
                    )}
                    {projectStack === "Frontend" && (
                        <>
                            {useIcon('Frontend')}
                            <p id='Frontend'>{projectStack}</p>
                            <Tooltip
                                anchorSelect="#Frontend"
                                content="Este é um projeto Frontend!"
                            />
                        </>
                    )}
                    {projectStack === "Backend" && (
                        <>
                            {useIcon('Backend')}
                            <p id='Backend'>{projectStack}</p>
                            <Tooltip
                                anchorSelect="#Backend"
                                content="Este é um projeto Backend!"
                            />
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default StackProjectCard