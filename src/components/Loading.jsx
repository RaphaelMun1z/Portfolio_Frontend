import styles from './Loading.module.scss'

import { IoMdRocket } from "react-icons/io";

const Loading = () => {
    return (
        <div className={styles.container}>
            <IoMdRocket />
        </div>
    )
}

export default Loading