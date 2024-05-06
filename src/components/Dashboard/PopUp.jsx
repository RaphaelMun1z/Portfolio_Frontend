import styles from './PopUp.module.scss'

import { FaRegTrashAlt } from "react-icons/fa";

const PopUp = ({ name, id, cancelDelete, deleteFunction }) => {
    return (
        <div className={styles.popUpContainer} onClick={() => cancelDelete()}>
            <div className={styles.popUp} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content}>
                    <h2>Confirmar ação</h2>
                    <p>Você tem certeza que deseja excluir <span>{name}</span> <span className={styles.delete}>permanentemente</span>?</p>
                    <div className={styles.actions}>
                        <button type="button" className={styles.delete} onClick={() => deleteFunction(id)}>Sim, quero excluir <FaRegTrashAlt /></button>
                        <button type="button" className={styles.cancel} onClick={() => cancelDelete()}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp