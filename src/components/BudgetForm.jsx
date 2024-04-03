import styles from './BudgetForm.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './Form/SystemStatusMessage'

import { useEffect, useState } from 'react'

import { TbWorldWww } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const BudgetForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [contactMethod, setContactMethod] = useState("invalid")
    const [haveReference, setHaveReference] = useState("invalid")
    const [referenceUrl, setReferenceURL] = useState("")
    const [arrayReferencesURL, setArrayReferencesURL] = useState([])

    const [urlIsInvalid, setUrlIsInvalid] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleChangeContactMethod = (method) => {
        setContactMethod(method)
    }

    const handleChangeHaveReference = (res) => {
        setHaveReference(res)
    }

    const handleReferenceURL = (url) => {
        setReferenceURL(url)
    }

    const addReference = () => {
        if (isValidURL(referenceUrl)) {
            if (!arrayReferencesURL.includes(referenceUrl)) {
                setUrlIsInvalid(false)
                arrayReferencesURL.push(referenceUrl)
                setReferenceURL('');
            } else {
                setErrorMessage("Essa URL já foi adicionada.")
                setUrlIsInvalid(true)
            }
        } else {
            setErrorMessage("URL inválida. Por favor, insira uma URL válida.")
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
                setErrorMessage("")
            }, 2000);
        }
    }, [urlIsInvalid])

    const handleDeleteReference = (index) => {
        console.log(index)
        const newArray = arrayReferencesURL.filter((_, i) => i !== index);
        setArrayReferencesURL(newArray);
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                <form className={styles.formStep}>
                    <div className={styles.title}>
                        <h1>Criando um Orçamento</h1>
                    </div>
                    <label>
                        <p>Qual seu nome?</p>
                        <input type="text" placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)} value={name} />
                    </label>
                    <label>
                        <p>Como posso entrar em contato com você?</p>
                        <select name="contactMethod" onChange={(e) => handleChangeContactMethod(e.target.value)} defaultValue={contactMethod}>
                            <option value="invalid" disabled>Selecione</option>
                            <option value="whatsapp">Whatsapp</option>
                            <option value="email">E-mail</option>
                        </select>
                    </label>
                    <label>
                        <p>Descreva seu projeto:</p>
                        <textarea name="description" placeholder='Descreva resumidamente seu projeto...' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                    </label>
                    <label>
                        <p>Você tem referências de projetos?</p>
                        <select name="haveReferences" onChange={(e) => handleChangeHaveReference(e.target.value)} value={haveReference}>
                            <option value="invalid" disabled>Selecione</option>
                            <option value="yes">Sim</option>
                            <option value="no">Não</option>
                        </select>
                    </label>
                    <label>
                        <p>Quais as referências? Cole a URL no campo.</p>
                        <input type="text" placeholder='URL da referência...' onChange={(e) => handleReferenceURL(e.target.value)} value={referenceUrl} />
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
                        <button type="submit" className={styles.submit}>Enviar</button>
                        <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                        <div className={styles.messages}>
                            {urlIsInvalid === true && (
                                <SystemStatusMessage type="error" msg={errorMessage} />
                            )}
                            {/* <SystemStatusMessage type="success" msg="Banco de dados cadastrado com sucesso!" /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BudgetForm