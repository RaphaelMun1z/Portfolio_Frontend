import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getSocialMedia } from '../../slices/socialMediaSlice';

// Icons
import { MdAddCircleOutline } from "react-icons/md";

import { Link } from 'react-router-dom'

const SystemManager = () => {
    const [popUp, setPopUp] = useState(false)
    const [systemToDelete, setSystemToDelete] = useState({})

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

    useEffect(() => {
        dispatch(getSocialMedia())
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>configurações do Sistema</h1>
                {!socialMediaLoading && !socialMedia && (
                    <Link to="/adm/cadastrar/rede-social" className={styles.newItem}>Cadastrar Rede Social<MdAddCircleOutline /></Link>
                )}
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
        </div>
    )
}

export default SystemManager