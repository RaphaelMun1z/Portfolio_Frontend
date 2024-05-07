import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getSocialMedia } from '../../slices/socialMediaSlice';
import { getFormSubjects, deleteFormSubject, resetMessage } from '../../slices/formSubjectSlice';

// Icons
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom'

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const SystemManager = () => {
    const [popUp, setPopUp] = useState(false)
    const [formSubjectToDelete, setFormSubjectToDelete] = useState({})

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

    const { socialMedia, loading: socialMediaLoading } = useSelector((state) => state.socialMedia)
    const { formSubjects, loading: formSubjectsLoading, message, error } = useSelector((state) => state.formSubject)

    useEffect(() => {
        dispatch(getSocialMedia())
        dispatch(getFormSubjects())
    }, [])

    const handleConfirmDeleteFormSubject = (formSubjectName, formSubjectId) => {
        formSubjectToDelete.name = formSubjectName
        formSubjectToDelete.id = formSubjectId

        setPopUp(true)
    }

    const handleCancelDeleteFormSubject = () => {
        setFormSubjectToDelete({})
        setPopUp(false)
    }

    const handleDeleteFormSubject = (formSubjectId) => {
        dispatch(deleteFormSubject(formSubjectId))
        handleCancelDeleteFormSubject()

        resetComponentMessage()
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    return (
        <div className={styles.container}>
            {popUp && (
                <PopUp name={formSubjectToDelete.name} id={formSubjectToDelete.id} cancelDelete={handleCancelDeleteFormSubject} deleteFunction={handleDeleteFormSubject} />
            )}
            <div className={styles.header}>
                <h1>configurações do Sistema</h1>
                <div className={styles.systemActions}>
                    {!socialMediaLoading && !socialMedia && (
                        <Link to="/adm/cadastrar/rede-social" className={styles.newItem}>Cadastrar Rede Social<MdAddCircleOutline /></Link>
                    )}
                    <Link to="/adm/cadastrar/assunto-form" className={styles.newItem}>Cadastrar Assunto de Formulário<MdAddCircleOutline /></Link>
                </div>
            </div>
            <div className={styles.list}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Linkedin</th>
                            <th>Github</th>
                            <th>Instagram</th>
                            <th>Atualizado em</th>
                            <th>Criado em</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!socialMediaLoading && !socialMedia && (
                            <p className={styles.noData}>Não há redes sociais cadastradas.</p>
                        )}
                        {!socialMediaLoading && socialMedia && (
                            <tr key={socialMedia.id}>
                                <td>{socialMedia.id}</td>
                                <td>{socialMedia.linkedin}</td>
                                <td>{socialMedia.github}</td>
                                <td>{socialMedia.instagram}</td>
                                <td>{formatDate(socialMedia.updatedAt)}<br />{formatTime(socialMedia.updatedAt)}</td>
                                <td>{formatDate(socialMedia.createdAt)}<br />{formatTime(socialMedia.createdAt)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
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
                            <th>Assunto</th>
                            <th>Tipo de formulário</th>
                            <th>Atualizado em</th>
                            <th>Criado em</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!formSubjectsLoading && !formSubjects && (
                            <p className={styles.noData}>Não há redes sociais cadastradas.</p>
                        )}
                        {!formSubjectsLoading && formSubjects && formSubjects.map((formSubject) => (
                            <tr key={formSubject.id}>
                                <td>{formSubject.id}</td>
                                <td>{formSubject.subject}</td>
                                <td>{formSubject.formType}</td>
                                <td>{formatDate(formSubject.createdAt)}<br />{formatTime(formSubject.createdAt)}</td>
                                <td>{formatDate(formSubject.updatedAt)}<br />{formatTime(formSubject.updatedAt)}</td>
                                <td><th className={`${styles.actionTh} ${styles.edit}`}><FaRegEdit /></th></td>
                                <td><th className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline onClick={() => handleConfirmDeleteFormSubject(formSubject.id, formSubject.id)} /></th></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SystemManager