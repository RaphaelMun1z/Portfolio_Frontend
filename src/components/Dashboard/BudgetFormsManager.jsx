import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getBudgets, deleteBudget, resetMessage } from '../../slices/budgetSlice';

// Icons
import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom'

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const BudgetFormsManager = () => {
    const [popUp, setPopUp] = useState(false)
    const [budgetToDelete, setBudgetToDelete] = useState({})

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

    const { budgets, loading: budgetFormLoading, message, error } = useSelector((state) => state.budget)

    useEffect(() => {
        dispatch(getBudgets())
    }, [])

    const handleConfirmDeleteBudget = (budgetName, budgetId) => {
        budgetToDelete.name = budgetName
        budgetToDelete.id = budgetId

        setPopUp(true)
    }

    const handleCancelDeleteBudget = () => {
        setBudgetToDelete({})
        setPopUp(false)
    }

    const handleDeleteBudget = (budgetId) => {
        dispatch(deleteBudget(budgetId))
        handleCancelDeleteBudget()

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
                <PopUp name={budgetToDelete.name} id={budgetToDelete.id} cancelDelete={handleCancelDeleteBudget} deleteFunction={handleDeleteBudget} />
            )}
            <div className={styles.header}>
                <h1>Formulários de orçamento</h1>
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
                            <th>Nome</th>
                            <th>Contato</th>
                            <th>Descriçao</th>
                            <th>Criado em</th>
                            <th className={styles.headActionTh}>Visualizar</th>
                            <th className={styles.headActionTh}>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!budgetFormLoading && budgets && budgets.length === 0 && (
                            <p className={styles.noData}>Não há formulários cadastrados.</p>
                        )}
                        {!budgetFormLoading && budgets && budgets.length > 0 && budgets.map((form) => (
                            <tr key={form.id}>
                                <td>{form.id}</td>
                                <td>{form.name}</td>
                                <td>{form.contact}</td>
                                <td>{form.description}</td>
                                <td>{formatDate(form.createdAt)}<br />{formatTime(form.createdAt)}</td>
                                <td><p className={`${styles.actionTh} ${styles.view}`}><Link to={``}><FaRegEye /></Link></p></td>
                                <td><p className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline onClick={() => handleConfirmDeleteBudget(`ID ${form.id}`, form.id)} /></p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BudgetFormsManager