import Styles from './StatusAlert.module.scss'
import { GrVmMaintenance } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";

const StatusAlert = ({ type, message }) => {
    return (
        <div className={`${Styles.container} ${type === 'error' ? Styles.error : Styles.warning}`}>
            {type == 'error' ? (
                <GrVmMaintenance />
            ) : (
                <IoWarningOutline />
            )}
            <p>{message}</p>
        </div>
    )
}

export default StatusAlert