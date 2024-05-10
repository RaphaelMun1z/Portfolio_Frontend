import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getLogs, deleteLogs } from '../../slices/logSlice';

// Icons
import { MdDeleteOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const LogManager = () => {
    const [popUp, setPopUp] = useState(false)
    const [logToDelete, setLogToDelete] = useState({})

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

    const { logs, loading: logFormLoading, message, error } = useSelector((state) => state.log)

    useEffect(() => {
        dispatch(getLogs())
    }, [])

    const handleConfirmDeleteLog = (logName, logId) => {
        logToDelete.name = logName
        logToDelete.id = logId

        setPopUp(true)
    }

    const handleCancelDeleteLog = () => {
        setLogToDelete({})
        setPopUp(false)
    }

    const handleDeleteLog = () => {
        dispatch(deleteLogs())
        handleCancelDeleteLog()

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
                <PopUp name={logToDelete.name} id={logToDelete.id} cancelDelete={handleCancelDeleteLog} deleteFunction={handleDeleteLog} />
            )}
            <div className={styles.header}>
                <h1>Formulários de log</h1>
                <button type='button' className={`${styles.newItem} ${styles.deleteItem}`}  onClick={() => handleConfirmDeleteLog()}>Resetar LOG's<MdDeleteOutline /></button>
            </div>
            <div className={styles.searchContainer}>
                <input type="text" placeholder='Busque pelo formulário de orçamento...' />
                <button type="submit">
                    <RiSearch2Line />
                </button>
                <label>
                    <p>Filtrar por: </p>
                    <select name="searchBy">
                        <option value="title">Título</option>
                        <option value="subject">Assunto</option>
                        <option value="name">Nome</option>
                        <option value="status">Status</option>
                        <option value="id">Id</option>
                        <option value="createdat">Data de criação</option>
                    </select>
                </label>
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
                            <th>Tipo</th>
                            <th>Criado em</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!logFormLoading && logs && logs.length === 0 && (
                            <p className={styles.noData}>Não há formulários cadastrados.</p>
                        )}
                        {!logFormLoading && logs && logs.length > 0 && logs.map((log) => (
                            <tr key={log.id}>
                                <td>{log.id}</td>
                                <td>{log.type}</td>
                                <td>{formatDate(log.createdAt)}<br />{formatTime(log.createdAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LogManager