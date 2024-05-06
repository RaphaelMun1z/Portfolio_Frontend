import styles from './ToolsProjectCard.module.scss'

import { Fragment } from 'react';
import { useIcon } from '../hooks/useIcon';

import { FaPlus } from "react-icons/fa6";

import { Tooltip } from 'react-tooltip';

const ToolsProjectCard = ({ projectTools }) => {
    return (
        <>
            {projectTools.length > 0 && (
                <div className={styles.toolsContainer}>
                    <div className={styles.toolInfoContainer}>
                        <p>Ferramentas:</p>
                        <div className={styles.tools}>
                            {projectTools && (
                                <>
                                    <Fragment>
                                        <div className={styles.toolCard} data-tooltip-id="tool-tooltip" data-tooltip-content={projectTools[0].Tool.name}>
                                            {useIcon(projectTools[0].Tool.name)}
                                        </div>
                                        <Tooltip id="tool-tooltip" />
                                    </Fragment>
                                    <Fragment>
                                        <div className={`${styles.toolCard} ${styles.plus}`} data-tooltip-id="tool-tooltip" data-tooltip-content={"Outros"}>
                                            <FaPlus />
                                        </div>
                                        <Tooltip id="tool-tooltip" />
                                    </Fragment>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ToolsProjectCard