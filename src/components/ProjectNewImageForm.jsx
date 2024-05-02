import styles from './ProjectNewImageForm.module.scss'

import { Link, useParams } from 'react-router-dom'
import SystemStatusMessage from './Form/SystemStatusMessage'

// Hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { resetMessage, createProjectImage } from '../slices/projectImageSlice'

const ProjectNewImageForm = () => {
    const { projectId: pId } = useParams()

    const [internErrors, setInternErrors] = useState([])
    const [image, setImage] = useState(null)
    const [projectId, setProjectId] = useState(null)

    useEffect(() => {
        if (pId) {
            setProjectId(pId)
        }
    }, [pId])

    const handleFile = (e) => {
        const image = e.target.files[0]

        setImage(image)
    }

    const dispatch = useDispatch()

    const { loading: loadingProjectImage, message: messageProjectImage, error: errorProjectImage } = useSelector((state) => state.projectImages)

    const handleSaveProjectImage = (e) => {
        e.preventDefault()

        setInternErrors([])

        if (projectId === null || isNaN(projectId)) {
            setInternErrors(prevErrors => [...prevErrors, "O identificador do projeto é obrigatório!"])
            return
        }

        const projectImageData = {
            projectId: parseInt(projectId),
            image: image
        }

        console.log(projectImageData)

        const formData = new FormData()

        Object.keys(projectImageData).forEach((key) => {
            formData.append(key, projectImageData[key])
        })

        console.log(formData)

        dispatch(createProjectImage(formData))

        setImage(null)
        setInternErrors([])

        resetComponentMessage()
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    return (
        <section className={styles.container}>
            <form onSubmit={(e) => handleSaveProjectImage(e)}>
                <div className={styles.title}>
                    <h1>Cadastrando Imagem</h1>
                </div>
                <label>
                    <p>Selecione a foto que gostaria de adicionar ao projeto</p>
                    <input type="file" name="image" onChange={(e) => handleFile(e)} />
                </label>
                <div className={styles.footer}>
                    {loadingProjectImage && (
                        <button type="button" className={styles.submit} disabled>Salvando...</button>
                    )}
                    {!loadingProjectImage && (
                        <button type="submit" className={styles.submit}>Salvar</button>
                    )}
                    <Link to="/adm/painel/bancoDeDados" className={styles.cancel}>Cancelar</Link>
                    {internErrors && internErrors.length > 0 && (
                        <div className={styles.messages}>
                            {internErrors.map((error) => {
                                return <SystemStatusMessage type="error" msg={error} />
                            })}
                        </div>
                    )}
                    {errorProjectImage && (
                        <div className={styles.messages}>
                            <SystemStatusMessage type="error" msg={errorProjectImage} />
                        </div>
                    )}
                    {messageProjectImage && (
                        <div className={styles.messages}>
                            <SystemStatusMessage type="success" msg={messageProjectImage} />
                        </div>
                    )}
                </div>
            </form>
        </section>
    )
}

export default ProjectNewImageForm