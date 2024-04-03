import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

const NewFaq = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                <form className={styles.formStep}>
                    <div className={styles.title}>
                        <h1>Cadastrando uma pergunta/resposta</h1>
                    </div>
                    <label>
                        <p>Qual a pergunta?</p>
                        <input type="text" placeholder='Digite a pergunta...' />
                    </label>
                    <label>
                        <p>Qual a resposta?</p>
                        <textarea name="answer" placeholder='Digite a resposta...'></textarea>
                    </label>
                    <div className={styles.footer}>
                        <button type="submit" className={styles.submit}>Salvar</button>
                        <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                        <div className={styles.messages}>
                            <SystemStatusMessage type="error" msg="A pergunta é obrigatória!" />
                            <SystemStatusMessage type="success" msg="Pergunta/resposta cadastrada com sucesso!" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewFaq