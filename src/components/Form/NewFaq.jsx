import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

// Hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { resetMessage, createFaq } from '../../slices/faqSlice'

const NewFaq = () => {
    const [internErrors, setInternErrors] = useState([])
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const dispatch = useDispatch()

    const { loading: loadingFaq, message: messageFaq, error: errorFaq } = useSelector((state) => state.faq)

    const handleSaveFaq = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (question.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "A pergunta é obrigatória!"])
            return
        }

        if (answer.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "A resposta é obrigatória!"])
            return
        }

        const faq = {
            question: question,
            answer: answer
        }

        dispatch(createFaq(faq))

        setQuestion("")
        setAnswer("")
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
                <form className={styles.formStep} onSubmit={(e) => handleSaveFaq(e)}>
                    <div className={styles.title}>
                        <h1>Cadastrando uma pergunta/resposta</h1>
                    </div>
                    <label>
                        <p>Qual a pergunta?</p>
                        <input type="text" placeholder='Digite a pergunta...' onChange={(e) => setQuestion(e.target.value)} value={question} />
                    </label>
                    <label>
                        <p>Qual a resposta?</p>
                        <textarea name="answer" placeholder='Digite a resposta...' onChange={(e) => setAnswer(e.target.value)} value={answer}></textarea>
                    </label>
                    <div className={styles.footer}>
                        {loadingFaq && (
                            <button type="button" className={styles.submit} disabled>Salvando...</button>
                        )}
                        {!loadingFaq && (
                            <button type="submit" className={styles.submit}>Salvar</button>
                        )}
                        <Link to="/adm/painel/faq" className={styles.cancel}>Cancelar</Link>
                        {internErrors && internErrors.length > 0 && (
                            <div className={styles.messages}>
                                {internErrors.map((error) => {
                                    return <SystemStatusMessage type="error" msg={error} />
                                })}
                            </div>
                        )}
                        {errorFaq && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={errorFaq} />
                            </div>
                        )}
                        {messageFaq && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageFaq} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewFaq