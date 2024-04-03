import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

const NewTool = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                <form className={styles.formStep}>
                    <div className={styles.title}>
                        <h1>Cadastrando uma ferramenta</h1>
                    </div>
                    <label>
                        <p>Qual a ferramenta?</p>
                        <input type="text" placeholder='Nome da ferramenta...' />
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
                            <SystemStatusMessage type="error" msg="O nome da ferramenta é obrigatório!" />
                            <SystemStatusMessage type="success" msg="Ferramenta cadastrada com sucesso!" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTool