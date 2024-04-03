import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

// Hooks
import { useState } from 'react'

const AnswerContactForm = () => {
    const [formAnswer, setFormAnswer] = useState("")

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                <form className={styles.formStep}>
                    <div className={styles.title}>
                        <h1>Respondendo formulário de contato</h1>
                    </div>
                    <label className={styles.answer}>
                        <p>Nome</p>
                        <h2>
                            Lorem ipsum dolor
                        </h2>
                    </label>
                    <label className={styles.answer}>
                        <p>Tema</p>
                        <h2>
                            Lorem ipsum.
                        </h2>
                    </label>
                    <label className={styles.answer}>
                        <p>Pergunta</p>
                        <h2>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, error tenetur tempora laborum enim suscipit maxime deserunt at. Quod ipsa quibusdam facere neque accusantium consectetur magnam et voluptatibus debitis a.
                        </h2>
                    </label>
                    <label className={styles.answer}>
                        <p>Resposta</p>
                        <textarea name="answer" placeholder='Digite a resposta...' defaultValue={formAnswer} onChange={(e) => setFormAnswer(e.target.value)}></textarea>
                    </label>
                    <div className={styles.footer}>
                        <button type="submit" className={styles.submit}>Responder</button>
                        <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                        <div className={styles.messages}>
                            <SystemStatusMessage type="error" msg="A resposta é obrigatória!" />
                            <SystemStatusMessage type="success" msg="Resposta cadastrada com sucesso!" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AnswerContactForm