import styles from './ProjectNewImageForm.module.scss'

import { Link } from 'react-router-dom'

import { useState } from 'react'

const ProjectNewImageForm = () => {
    const [urlIsInvalid, setUrlIsInvalid] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    return (
        <section className={styles.container}>
            <form>
                <div className={styles.title}>
                    <h1>Cadastrando Imagem</h1>
                </div>
                <label>
                    <p>Selecione a foto que gostaria de adicionar ao projeto</p>
                    <input type="file" name="image" />
                </label>
                <div className={styles.footer}>
                    <button type="submit" className={styles.submit}>Enviar</button>
                    <Link to="/adm/painel/geral" className={styles.cancel}>Cancelar</Link>
                    <div className={styles.messages}>
                        {urlIsInvalid === true && (
                            <SystemStatusMessage type="error" msg={errorMessage} />
                        )}
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ProjectNewImageForm