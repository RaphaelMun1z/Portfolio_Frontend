import styles from './ReportPopUp.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './Form/SystemStatusMessage'

// Hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { resetMessage, createReport } from '../slices/reportSlice'
import { getFormSubjectsByFormType } from '../slices/formSubjectSlice';

const ReportPopUp = ({ setReportModal }) => {
    const [internErrors, setInternErrors] = useState([])
    const [subject, setSubject] = useState("")
    const [description, setDescription] = useState("")

    const handleSetSubject = (value) => {
        if (value !== "invalid") {
            setSubject(value)
        }
    }

    const dispatch = useDispatch()

    const { loading: loadingReport, message: messageReport, error: errorReport } = useSelector((state) => state.report)
    const { formSubjects, loading: formSubjectLoading } = useSelector((state) => state.formSubject)

    const handleSaveReport = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (subject.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "O assunto é obrigatório!"])
            return
        }

        if (description.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "A descrição é obrigatória!"])
            return
        }

        const report = {
            subject: subject,
            message: description
        }

        dispatch(createReport(report))

        setSubject("invalid")
        setDescription("")
        setInternErrors([])

        resetComponentMessage()
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    useEffect(() => {
        dispatch(getFormSubjectsByFormType("Report"))
    }, [])


    return (
        <section className={styles.reportSection}>
            <div className={styles.reportContainer}>
                <form className={styles.container} onSubmit={(e) => handleSaveReport(e)}>
                    <h1>Relato de BUG</h1>
                    <label>
                        <p>O bug está relacionado a:</p>
                        {formSubjects && formSubjects.length > 0 && (
                            <select name="subject" defaultValue="invalid" onChange={(e) => handleSetSubject(e.target.value)} value={subject}>
                                <option value="invalid">Selecione uma opção</option>
                                {formSubjects.map((formSubject, index) => (
                                    <option value={formSubject.subject} key={index}>{formSubject.subject}</option>
                                ))}
                            </select>
                        )}
                        {formSubjects && formSubjects.length === 0 && (
                            <p className={styles.noData}>Não há assuntos cadastrados.</p>
                        )}
                    </label>
                    <label>
                        <p>Por gentileza, descreva brevemente o problema</p>
                        <textarea name="description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                    </label>
                    <div className={styles.footer}>
                        {loadingReport && (
                            <button type="button" className={styles.submit} disabled>Enviando...</button>
                        )}
                        {!loadingReport && (
                            <button type="submit" className={styles.submit}>Enviar</button>
                        )}
                        <button type="button" className={styles.cancel} onClick={() => setReportModal(false)}>Cancelar</button>
                        {internErrors && internErrors.length > 0 && (
                            <div className={styles.messages}>
                                {internErrors.map((error) => {
                                    return <SystemStatusMessage type="error" msg={error} />
                                })}
                            </div>
                        )}
                        {errorReport && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={errorReport} />
                            </div>
                        )}
                        {messageReport && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageReport} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>

    )
}

export default ReportPopUp