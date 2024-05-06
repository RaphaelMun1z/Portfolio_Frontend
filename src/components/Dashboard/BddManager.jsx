import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getDatabases, deleteDatabase, resetMessage } from '../../slices/databaseSlice';

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom';

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const BddManager = () => {
  const [popUp, setPopUp] = useState(false)
  const [databaseToDelete, setDatabaseToDelete] = useState({})

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

  const { databases, loading: databaseLoading, message, error } = useSelector((state) => state.database)

  useEffect(() => {
    dispatch(getDatabases())
  }, [])

  const handleConfirmDeleteDatabase = (databaseName, databaseId) => {
    databaseToDelete.name = databaseName
    databaseToDelete.id = databaseId

    setPopUp(true)
  }

  const handleCancelDeleteDatabase = () => {
    setDatabaseToDelete({})
    setPopUp(false)
  }

  const handleDeleteDatabase = (databaseId) => {
    dispatch(deleteDatabase(databaseId))
    handleCancelDeleteDatabase()

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
        <PopUp name={databaseToDelete.name} id={databaseToDelete.id} cancelDelete={handleCancelDeleteDatabase} deleteFunction={handleDeleteDatabase} />
      )}
      <div className={styles.header}>
        <h1>Bancos de dados</h1>
        <Link to="/adm/cadastrar/bdd" className={styles.newItem}>Cadastrar<MdAddCircleOutline /></Link>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Busque pelo banco de dados...' />
        <button type="submit">
          <RiSearch2Line />
        </button>
        <label>
          <p>Filtrar por: </p>
          <select name="searchBy">
            <option value="name">Nome</option>
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
              <th>Nível</th>
              <th>Criado em</th>
              <th>Atualizado em</th>
              <th className={styles.headActionTh}>Editar</th>
              <th className={styles.headActionTh}>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {databases && databases.map((database) => (
              <tr key={database.id}>
                <td>{database.id}</td>
                <td>{database.name}</td>
                <td>{database.proficiency}</td>
                <td>{formatDate(database.createdAt)}<br />{formatTime(database.createdAt)}</td>
                <td>{formatDate(database.updatedAt)}<br />{formatTime(database.updatedAt)}</td>
                <td><th className={`${styles.actionTh} ${styles.edit}`}><FaRegEdit /></th></td>
                <td><th className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline onClick={() => handleConfirmDeleteDatabase(database.name, database.id)} /></th></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BddManager