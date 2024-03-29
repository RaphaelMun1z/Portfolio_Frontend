import styles from './SystemMessage.module.scss'

import { MdClose } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";

import { useState } from 'react';

const SystemMessage = ({ msg }) => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <>
            {isVisible && (
                <div className={styles.container} onClick={() => setIsVisible(!isVisible)}>
                    <div className={styles.insideContainer}>
                        <div className={styles.header}>
                            <p><BiMessageDetail />Mensagem do desenvolvedor</p>
                        </div>
                        <h1>{msg}</h1>
                        <p>Atual status do projeto: <span>Em Desenvolvimento<FaLaptopCode /></span></p>
                        <div className={styles.actions}>
                            <button onClick={() => setIsVisible(!isVisible)}>Fechar<MdClose /></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SystemMessage