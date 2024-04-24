import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

// Hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { getLanguages } from '../../slices/languageSlice';
import { resetMessage, createFramework } from '../../slices/frameworkSlice'

const NewFramework = () => {
    const [internErrors, setInternErrors] = useState([])
    const [name, setName] = useState("")
    const [languageId, setLanguageId] = useState(null)
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

    const handleChangeLanguage = (languageId) => {
        setLanguageId(languageId)
    }

    const dispatch = useDispatch()

    const { loading: loadingFramework, message: messageFramework, error: errorFramework } = useSelector((state) => state.framework)
    const { languages, loading: languageLoading } = useSelector((state) => state.language)

    const handleSaveFramework = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (name.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "O nome do framework é obrigatório!"])
            return
        }

        if (!languageId || languageId === null || languageId === -1) {
            setInternErrors(prevErrors => [...prevErrors, "Valor inválido para linguagem!"])
            return
        }

        if (proficiency <= 0 || proficiency > 100) {
            setInternErrors(prevErrors => [...prevErrors, "Valor inválido para proficiência!"])
            setProficiency(50)
            return
        }

        const framework = {
            name: name,
            languageId: languageId,
            proficiency: proficiency
        }

        dispatch(createFramework(framework))

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

    useEffect(() => {
        dispatch(getLanguages())
    }, [])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                <form className={styles.formStep} onSubmit={(e) => handleSaveFramework(e)}>
                    <div className={styles.title}>
                        <h1>Cadastrando um framework</h1>
                    </div>
                    <label>
                        <p>Qual o framework?</p>
                        <input type="text" placeholder='Nome do framework...' onChange={(e) => setName(e.target.value)} value={name} />
                    </label>
                    {languageLoading && (
                        <div className='skeleton' style={{ height: '80px', width: '100%' }}></div>
                    )}
                    {!languageLoading && languages.length > 0 && (
                        <label>
                            <p>Qual a linguagem?</p>
                            <select name="languageId" onChange={(e) => handleChangeLanguage(e.target.value)}>
                                <option value="-1">Selecione uma linguagem</option>
                                {languages && languages.map((language) => (
                                    <option value={language.id}>{language.name}</option>
                                ))}
                            </select>
                        </label>
                    )}
                    {!languageLoading && languages.length === 0 && (
                        <p>Não há linguagens cadastradas.</p>
                    )}
                    <label>
                        <p>Qual o nível de proficiência? (1-100)</p>
                        <input type="number" placeholder='Nível de proficiência...' onChange={(e) => handleSetProficiency(e.target.value)} value={proficiency} />
                    </label>
                    <div className={styles.footer}>
                        <button type="submit" className={styles.submit}>Salvar</button>
                        <Link to="/adm/painel/frameworks" className={styles.cancel}>Cancelar</Link>
                        {internErrors && internErrors.length > 0 && (
                            <div className={styles.messages}>
                                {internErrors.map((error) => {
                                    return <SystemStatusMessage type="error" msg={error} />
                                })}
                            </div>
                        )}
                        {errorFramework && errorFramework.length > 0 && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={error} />
                            </div>
                        )}
                        {messageFramework && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageFramework} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewFramework