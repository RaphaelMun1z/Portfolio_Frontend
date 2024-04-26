import styles from './Form.module.scss'

import { Link } from 'react-router-dom';
import SystemStatusMessage from './SystemStatusMessage';

// Hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { resetMessage, createLanguage } from '../../slices/languageSlice'

const NewLanguage = () => {
    const [internErrors, setInternErrors] = useState([])
    const [name, setName] = useState("")
    const [proficiency, setProficiency] = useState(0)

    const handleSetProficiency = (value) => {
        if (proficiency <= 0) {
            return setProficiency(1)
        }

        if (proficiency > 100) {
            return setProficiency(100)
        }

        setProficiency(value)
    }

    const dispatch = useDispatch()

    const { loading: loadingLanguage, message: messageLanguage, error: errorLanguage } = useSelector((state) => state.language)

    const handleSaveLanguage = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (name.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "O nome da linguagem é obrigatório!"])
            return
        }

        if (proficiency <= 0 || proficiency > 100) {
            setInternErrors(prevErrors => [...prevErrors, "Valor inválido para proficiência!"])
            setProficiency(50)
            return
        }

        const language = {
            name: name,
            proficiency: proficiency
        }

        dispatch(createLanguage(language))

        setName("")
        setProficiency(0)
        setInternErrors([])

        resetComponentMessage()
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                <form className={styles.formStep} onSubmit={(e) => handleSaveLanguage(e)}>
                    <div className={styles.title}>
                        <h1>Cadastrando uma linguagem</h1>
                    </div>
                    <label>
                        <p>Qual a linguagem?</p>
                        <input type="text" placeholder='Nome da linguagem...' onChange={(e) => setName(e.target.value)} value={name} />
                    </label>
                    <label>
                        <p>Qual o nível de proficiência? (1-100)</p>
                        <input type="number" placeholder='Nível de proficiência...' onChange={(e) => handleSetProficiency(e.target.value)} value={proficiency} />
                    </label>
                    <div className={styles.footer}>
                        {loadingLanguage && (
                            <button type="button" className={styles.submit} disabled>Salvando...</button>
                        )}
                        {!loadingLanguage && (
                            <button type="submit" className={styles.submit}>Salvar</button>
                        )}
                        <Link to="/adm/painel/linguagens" className={styles.cancel}>Cancelar</Link>
                        {internErrors && internErrors.length > 0 && (
                            <div className={styles.messages}>
                                {internErrors.map((error) => {
                                    return <SystemStatusMessage type="error" msg={error} />
                                })}
                            </div>
                        )}
                        {errorLanguage && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={errorLanguage} />
                            </div>
                        )}
                        {messageLanguage && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageLanguage} />
                            </div>
                        )}
                    </div>
                </form>
            </div >
        </div >
    )
}

export default NewLanguage