import Styles from './StatusAlert.module.scss'
import { GrVmMaintenance } from "react-icons/gr";

const StatusAlert = () => {
    return (
        <div className={Styles.container}>
            <GrVmMaintenance />
            <p>Temporariamente em manutenção!</p>
        </div>
    )
}

export default StatusAlert