import styles from './Form.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

// Hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { createSocialMedia, resetMessage } from '../../slices/socialMediaSlice'

const NewSocialMidia = () => {
    const [internErrors, setInternErrors] = useState([])
    const [linkedinUrl, setLinkedinUrl] = useState("")
    const [githubUrl, setGithubUrl] = useState("")
    const [instagramUrl, setInstagramUrl] = useState("")

    const dispatch = useDispatch()

    const { loading: loadingSocialMedia, message: messageSocialMedia, error: errorSocialMedia } = useSelector((state) => state.socialMedia)

    const handleSaveSocialMedia = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (linkedinUrl.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "A URL do linkedin é obrigatória!"])
            return
        }

        if (githubUrl.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "A URL do github é obrigatória!"])
            return
        }

        if (instagramUrl.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "A URL do instagram é obrigatória!"])
            return
        }

        const socialMediaData = {
            linkedin: linkedinUrl,
            github: githubUrl,
            instagram: instagramUrl,
        }

        dispatch(createSocialMedia(socialMediaData))

        setLinkedinUrl("")
        setGithubUrl("")
        setInstagramUrl("")
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
                <form className={styles.formStep} onSubmit={(e) => handleSaveSocialMedia(e)}>
                    <div className={styles.title}>
                        <h1>Cadastrando rede social</h1>
                    </div>
                    <label>
                        <p>Qual o endereço do Linkedin? (URL)</p>
                        <input type="text" placeholder='URL da rede social...' onChange={(e) => setLinkedinUrl(e.target.value)} value={linkedinUrl} />
                    </label>
                    <label>
                        <p>Qual o endereço do Github? (URL)</p>
                        <input type="text" placeholder='URL da rede social...' onChange={(e) => setGithubUrl(e.target.value)} value={githubUrl} />
                    </label>
                    <label>
                        <p>Qual o endereço do Instagram? (URL)</p>
                        <input type="text" placeholder='URL da rede social...' onChange={(e) => setInstagramUrl(e.target.value)} value={instagramUrl} />
                    </label>
                    <div className={styles.footer}>
                        {loadingSocialMedia && (
                            <button type="button" className={styles.submit} disabled>Salvando...</button>
                        )}
                        {!loadingSocialMedia && (
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
                        {errorSocialMedia && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg={errorSocialMedia} />
                            </div>
                        )}
                        {messageSocialMedia && (
                            <div className={styles.messages}>
                                <SystemStatusMessage type="success" msg={messageSocialMedia} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewSocialMidia