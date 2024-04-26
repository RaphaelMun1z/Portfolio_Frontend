import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

// Hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { resetMessage, createTool } from '../../slices/toolSlice'

const NewTool = () => {
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

    const { loading: loadingTool, message: messageTool, error: errorTool } = useSelector((state) => state.tool)

    const handleSaveTool = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (name.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "O nome da ferramenta é obrigatório!"])
            return
        }

        if (proficiency <= 0 || proficiency > 100) {
            setInternErrors(prevErrors => [...prevErrors, "Valor inválido para proficiência!"])
            setProficiency(50)
            return
        }

        const tool = {
            name: name,
            proficiency: proficiency
        }

        dispatch(createTool(tool))

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
                <form className={styles.formStep} onSubmit={(e) => handleSaveTool(e)}>
                    <div className={styles.title}>
                        <h1>Cadastrando uma ferramenta</h1>
                    </div>
                    <label>
                        <p>Qual a ferramenta?</p>
                        <input type="text" placeholder='Nome da ferramenta...' onChange={(e) => setName(e.target.value)} value={name} />
                    </label>
                    <label>
                        <p>Qual o nível de proficiência? (1-100)</p>
                        <input type="number" placeholder='Nível de proficiência...' onChange={(e) => handleSetProficiency(e.target.value)} value={proficiency} />
                    </label>
                    <div className={styles.footer}>
                        {loadingTool && (
                            <button type="button" className={styles.submit} disabled>Salvando...</button>
                        )}
                        {!loadingTool && (
                            <button type="submit" className={styles.submit}>Salvar</button>
                        )}
                        <Link to="/adm/painel/ferramentas" className={styles.cancel}>Cancelar</Link>
                        {internErrors && internErrors.length > 0 && (
                            <div className={styles.messages}>
                                {internErrors.map((error) => {
                                    return <SystemStatusMessage type="error" msg={error} />
                                })}
                            </div>
                        )}
                        {errorTool && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={errorTool} />
                            </div>
                        )}
                        {messageTool && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageTool} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTool