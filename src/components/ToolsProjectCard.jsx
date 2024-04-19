import styles from './ToolsProjectCard.module.scss'

import { Fragment } from 'react';
import { useIcon } from '../hooks/useIcon';

import { Tooltip } from 'react-tooltip';

const ToolsProjectCard = ({ projectTools }) => {
    return (
        <>
            {projectTools.length > 0 && (
                <div className={styles.toolsContainer}>
                    <div className={styles.toolInfoContainer}>
                        <p>Ferramentas:</p>
                        <div className={styles.tools}>
                            {projectTools && projectTools.map((projectTool, index) => (
                                <Fragment key={index}>
                                    <div className={styles.toolCard} data-tooltip-id="tool-tooltip" data-tooltip-content={projectTool.Tool.name}>
                                        {useIcon(projectTool.Tool.name)}
                                    </div>
                                    <Tooltip id="tool-tooltip" />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ToolsProjectCard