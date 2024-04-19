import styles from './ToolsProjectCard.module.scss'

import { useState, useEffect, Fragment } from 'react';

import { Tooltip } from 'react-tooltip';

// Icons
import { FaCode } from "react-icons/fa6";
import { FaGithub, FaDocker, FaGitAlt, FaSlack } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman, SiJirasoftware } from "react-icons/si";

const ToolsProjectCard = ({ projectTools }) => {
    const toolIcons = {
        Github: <FaGithub />,
        Docker: <FaDocker />,
        Git: <FaGitAlt />,
        Slack: <FaSlack />,
        VScode: <SiVisualstudiocode />,
        Postman: <SiPostman />,
        Jira: <SiJirasoftware />,
    };

    return (
        <div className={styles.toolsContainer}>
            {projectTools.length > 0 && (
                <div className={styles.toolInfoContainer}>
                    <p>Ferramentas utilizadas:</p>
                    <div className={styles.tools}>
                        {projectTools && projectTools.map((projectTool, index) => (
                            <Fragment key={index}>
                                <div className={styles.toolCard} data-tooltip-id="tool-tooltip" data-tooltip-content={projectTool.Tool.name}>
                                    {toolIcons[projectTool.Tool.name] || <FaCode />}
                                </div>
                                <Tooltip id="tool-tooltip" />
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ToolsProjectCard