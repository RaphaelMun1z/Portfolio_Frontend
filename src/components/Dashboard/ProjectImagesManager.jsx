import styles from './DashboardItems.module.scss'

import { uploads } from '../../utils/config'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getProjectImagesById, deleteProjectImage, resetMessage } from '../../slices/projectImageSlice';

// Icons
import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom'

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const ProjectImagesManager = () => {
    const [popUp, setPopUp] = useState(false)
    const [projectImageToDelete, setProjectImageToDelete] = useState({})
    const [projectId, setProjectId] = useState()

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const hours = dateTime.getHours().toString().padStart(2, '0');
        const minutes = dateTime.getMinutes().toString().padStart(2, '0');
        const seconds = dateTime.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const dispatch = useDispatch()

    const { images, loading: projectImagesLoading, message, error } = useSelector((state) => state.projectImages)

    const handleConfirmDeleteProjectImage = (projectImageName, projectImageId) => {
        projectImageToDelete.name = projectImageName
        projectImageToDelete.id = projectImageId

        setPopUp(true)
    }

    const handleCancelDeleteProjectImage = () => {
        setProjectImageToDelete({})
        setPopUp(false)
    }

    const handleDeleteProjectImage = (projectImageId) => {
        dispatch(deleteProjectImage(projectImageId))
        handleCancelDeleteProjectImage()

        resetComponentMessage()
    }

    const handleSearchProjectImages = () => {
        dispatch(getProjectImagesById(projectId))
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    return (
        <div className={styles.container}>
            {popUp && (
                <PopUp name={projectImageToDelete.name} id={projectImageToDelete.id} cancelDelete={handleCancelDeleteProjectImage} deleteFunction={handleDeleteProjectImage} />
            )}
            <div className={styles.header}>
                <h1>Imagens de projetos</h1>
            </div>
            <div className={styles.searchContainer}>
                <input type="text" placeholder='Informe o ID do projeto...' onChange={(e) => setProjectId(e.target.value)} />
                <button type="submit" onClick={() => handleSearchProjectImages()}>
                    <RiSearch2Line />
                </button>
            </div>
            <div className={styles.actionResults}>
                {message && (
                    <SystemStatusMessage type="success" msg={message} />
                )}
                {error && (
                    <SystemStatusMessage type="error" msg={error} />
                )}
            </div>
            <div className={styles.list}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Projeto</th>
                            <th>Imagem</th>
                            <th>Criado em</th>
                            <th className={styles.headActionTh}>Ver projeto</th>
                            <th className={styles.headActionTh}>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!projectImagesLoading && images && images.length > 0 && images.map((image) => (
                            <tr key={image.id}>
                                <td>{image.id}</td>
                                <td>{image.Project.name}</td>
                                <td><img src={`${uploads}/image/${image.image}`} alt="Imagem do projeto" /></td>
                                <td>{formatDate(image.createdAt)}<br />{formatTime(image.createdAt)}</td>
                                <td><p className={`${styles.actionTh} ${styles.view}`}><Link to={`/projeto/${image.Project.id}`}><FaRegEye /></Link></p></td>
                                <td><p className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline onClick={() => handleConfirmDeleteProjectImage(`ID ${image.id}`, image.id)} /></p></td>
                            </tr>
                        ))}
                        {!projectId && (
                            <p>Informe o ID do projeto para verificar as imagens.</p>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectImagesManager