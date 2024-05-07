import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getLogs } from '../../slices/logSlice';

// Icons
import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom'

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

    const { logs, loading: logFormLoading } = useSelector((state) => state.log)

    useEffect(() => {
        dispatch(getLogs())
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Formulários de log</h1>
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