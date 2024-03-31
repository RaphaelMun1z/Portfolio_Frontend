import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

const NewFramework = () => {
    return (
        <div className={styles.mainContainer}>
            <form>
                <div className={styles.title}>
                    <h1>Cadastrando um framework</h1>
                </div>
                <label>
                    <p>Qual o framework?</p>
                    <input type="text" placeholder='Nome do framework...' />
                </label>
                <label>
                    <p>Qual a linguagem utilizada?</p>
                    <input type="text" placeholder='Nome da linguagem utilizada...' />
                </label>
                <label>
                    <p>Qual a capacidade?</p>
                    <select name="level">
                        <option value="basic">Básico</option>
                        <option value="intermediary">Intermediário</option>
                        <option value="advanced">Avançado</option>
                    </select>
                </label>
                <div className={styles.footer}>
                    <button type="submit" className={styles.submit}>Salvar</button>
                    <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                    <div className={styles.messages}>
                        <SystemStatusMessage type="error" msg="O nome da linguagem é obrigatório!" />
                        <SystemStatusMessage type="success" msg="Linguagem cadastrada com sucesso!" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewFramework