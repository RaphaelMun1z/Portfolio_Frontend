import styles from './SystemStatusMessage.module.scss'

import { MdErrorOutline, MdCheck } from "react-icons/md";

const SystemStatusMessage = ({ type, msg }) => {
    return (
        <>
            {type && msg && type == "error" && (
                <div className={`${styles.systemMessage} ${styles.error}`}>
                    <p>{msg}</p>
                    <MdErrorOutline />
                </div>
            )}

            {type && msg && type == "success" && (
                <div className={`${styles.systemMessage} ${styles.success}`}>
                    <p>{msg}</p>
                    <MdCheck />
                </div>
            )}
        </>
    )
}

export default SystemStatusMessage