import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

// Hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { createFormSubject, resetMessage } from '../../slices/formSubjectSlice'

const NewFormSubject = () => {
    const [internErrors, setInternErrors] = useState([])
    const [subject, setSubject] = useState("")
    const [formType, setFormType] = useState("")

    const dispatch = useDispatch()

    const { loading: loadingFormSubject, message: messageFormSubject, error: errorFormSubject } = useSelector((state) => state.formSubject)

    const handleSaveFormSubject = (e) => {
        e.preventDefault()

        setInternErrors([])

        console.log(formType)

        if (subject.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "O assunto é obrigatório!"])
            return
        }

        if (formType.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "O tipo de formulário é obrigatório!"])
            return
        }

        const formSubject = {
            subject: subject,
            formType: formType
        }

        dispatch(createFormSubject(formSubject))

        setSubject("")
        setFormType("")
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
                <form className={styles.formStep} onSubmit={(e) => handleSaveFormSubject(e)}>
                    <div className={styles.title}>
                        <h1>Cadastrando Assunto de Formulário</h1>
                    </div>
                    <label>
                        <p>Qual o assunto?</p>
                        <input type="text" placeholder='Digite o assunto...' onChange={(e) => setSubject(e.target.value)} value={subject} />
                    </label>
                    <label>
                        <p>Qual o tipo de formulário?</p>
                        <select name="formType" onChange={(e) => setFormType(e.target.value)} value={formType}>
                            <option value="invalid">Selecione uma opção</option>
                            <option value="Report">Report</option>
                            <option value="Doubt">Contato</option>
                        </select>
                    </label>
                    <div className={styles.footer}>
                        {loadingFormSubject && (
                            <button type="button" className={styles.submit} disabled>Salvando...</button>
                        )}
                        {!loadingFormSubject && (
                            <button type="submit" className={styles.submit}>Salvar</button>
                        )}
                        <Link to="/adm/painel/sistema" className={styles.cancel}>Cancelar</Link>
                        {internErrors && internErrors.length > 0 && (
                            <div className={styles.messages}>
                                {internErrors.map((error) => {
                                    return <SystemStatusMessage type="error" msg={error} />
                                })}
                            </div>
                        )}
                        {errorFormSubject && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={errorFormSubject} />
                            </div>
                        )}
                        {messageFormSubject && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageFormSubject} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewFormSubject