import styles from './BudgetForm.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './Form/SystemStatusMessage'

import { TbWorldWww } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

// Hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { resetMessage, createBudget } from '../slices/budgetSlice'

const BudgetForm = () => {
    const [internErrors, setInternErrors] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [contact, setContact] = useState("")
    const [referenceUrl, setReferenceURL] = useState("")
    const [arrayReferencesURL, setArrayReferencesURL] = useState([])

    const [urlIsInvalid, setUrlIsInvalid] = useState(false)

    const handleChangeHaveReference = (res) => {
        setHaveReference(res)
    }

    const handleReferenceURL = (url) => {
        setReferenceURL(url)
    }

    const addReference = () => {
        setInternErrors([])
        if (isValidURL(referenceUrl)) {
            if (!arrayReferencesURL.includes(referenceUrl)) {
                setUrlIsInvalid(false)
                arrayReferencesURL.push(referenceUrl)
                setReferenceURL('');
            } else {
                setInternErrors(prevErrors => [...prevErrors, "Essa URL já foi adicionada!"])
                setUrlIsInvalid(true)
            }
        } else {
            setInternErrors(prevErrors => [...prevErrors, "URL inválida. Por favor, insira uma URL válida."])
            setUrlIsInvalid(true)
        }
    }

    const isValidURL = (url) => {
        const urlPattern = /^(?:http|https):\/\/[\w.-]+\.[a-zA-Z]{2,}(?:\/\S*)?$/;
        return urlPattern.test(url);
    }

    useEffect(() => {
        if (urlIsInvalid === true) {
            setTimeout(() => {
                setUrlIsInvalid(false)
            }, 2000);
        }
    }, [urlIsInvalid])

    const handleDeleteReference = (index) => {
        const newArray = arrayReferencesURL.filter((_, i) => i !== index);
        setArrayReferencesURL(newArray);
    }

    const dispatch = useDispatch()

    const { loading: loadingBudget, message: messageBudget, error: errorBudget } = useSelector((state) => state.budget)

    const handleSaveBudget = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (name.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "Seu nome é obrigatório!"])
            return
        }

        if (description.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "A descrição é obrigatória!"])
            return
        }

        if (contact.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "O contato é obrigatório!"])
            return
        }

        if (arrayReferencesURL.length === 0) {
            setInternErrors(prevErrors => [...prevErrors, "É necessário ao menos uma referência!"])
            return
        }

        const budget = {
            name: name,
            contact: contact,
            description: description,
            references: arrayReferencesURL.toString(),
        }

        console.log(budget)

        dispatch(createBudget(budget))

        setName("")
        setDescription("")
        setContact("")
        setReferenceURL("")
        setArrayReferencesURL([])

        setInternErrors([])

        resetComponentMessage()
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 5000)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                <form className={styles.formStep} onSubmit={(e) => handleSaveBudget(e)}>
                    <div className={styles.title}>
                        <h1>Criando um Orçamento</h1>
                    </div>
                    <label>
                        <p>Qual seu nome?</p>
                        <input type="text" placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)} value={name} />
                    </label>
                    <label>
                        <p>Contato</p>
                        <input type="text" placeholder='Informe seu contato...' onChange={(e) => setContact(e.target.value)} value={contact} />
                    </label>
                    <label>
                        <p>Descreva seu projeto:</p>
                        <textarea name="description" placeholder='Descreva resumidamente seu projeto...' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                    </label>
                    <label>
                        <p>Quais as referências? Cole a URL no campo.</p>
                        <input type="text" placeholder='Exemplo: https://www.amazon.com.br/' onChange={(e) => handleReferenceURL(e.target.value)} value={referenceUrl} />
                        <button type='button' onClick={addReference}>Adicionar referência</button>
                        {arrayReferencesURL.map((reference, index) => (
                            <div className={styles.reference} key={index}>
                                <div className={`${styles.division} ${styles.main}`}>
                                    <TbWorldWww />
                                    <a href={reference} target='_blank'>{reference}</a>
                                </div>
                                <div className={styles.division}>
                                    <MdDeleteOutline className={styles.delete} onClick={() => handleDeleteReference(index)} />
                                </div>
                            </div>
                        ))}
                    </label>
                    <div className={styles.footer}>
                        {loadingBudget && (
                            <button type="button" className={styles.submit} disabled>Enviando...</button>
                        )}
                        {!loadingBudget && (
                            <button type="submit" className={styles.submit}>Enviar</button>
                        )}
                        <Link to="/" className={styles.cancel}>Cancelar</Link>
                        {internErrors && internErrors.length > 0 && (
                            <div className={styles.messages}>
                                {internErrors.map((error) => {
                                    return <SystemStatusMessage type="error" msg={error} />
                                })}
                            </div>
                        )}
                        {errorBudget && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={errorBudget} />
                            </div>
                        )}
                        {messageBudget && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageBudget} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BudgetForm