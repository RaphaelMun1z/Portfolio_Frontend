import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getFrameworks, deleteFramework, resetMessage } from '../../slices/frameworkSlice';

import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom';

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const FrameworksManager = () => {
  const [popUp, setPopUp] = useState(false)
  const [frameworkToDelete, setFrameworkToDelete] = useState({})

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

  const { frameworks, loading: frameworkLoading, message, error } = useSelector((state) => state.framework)

  useEffect(() => {
    dispatch(getFrameworks())
  }, [])

  const handleConfirmDeleteFramework = (frameworkName, frameworkId) => {
    frameworkToDelete.name = frameworkName
    frameworkToDelete.id = frameworkId

    setPopUp(true)
  }

  const handleCancelDeleteFramework = () => {
    setFrameworkToDelete({})
    setPopUp(false)
  }

  const handleDeleteFramework = (frameworkId) => {
    dispatch(deleteFramework(frameworkId))
    handleCancelDeleteFramework()

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
        <PopUp name={frameworkToDelete.name} id={frameworkToDelete.id} cancelDelete={handleCancelDeleteFramework} deleteFunction={handleDeleteFramework} />
      )}
      <div className={styles.header}>
        <h1>Frameworks</h1>
        <Link to="/adm/cadastrar/framework" className={styles.newItem}>Cadastrar<MdAddCircleOutline /></Link>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Busque pelo framework...' />
        <button type="submit">
          <RiSearch2Line />
        </button>
        <label>
          <p>Filtrar por: </p>
          <select name="searchBy">
            <option value="name">Nome</option>
            <option value="language">Linguagem</option>
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
              <th>Linguagem</th>
              <th>Nível</th>
              <th>Criado em</th>
              <th>Atualizado em</th>
              <th className={styles.headActionTh}>Editar</th>
              <th className={styles.headActionTh}>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {frameworks && frameworks.map((framework) => (
              <tr key={framework.id}>
                <td>{framework.id}</td>
                <td>{framework.name}</td>
                <td>{framework.Language.name}</td>
                <td>{framework.proficiency}</td>
                <td>{formatDate(framework.createdAt)}<br />{formatTime(framework.createdAt)}</td>
                <td>{formatDate(framework.updatedAt)}<br />{formatTime(framework.updatedAt)}</td>
                <td><p className={`${styles.actionTh} ${styles.edit}`}><FaRegEdit /></p></td>
                <td><p className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline onClick={() => handleConfirmDeleteFramework(framework.name, framework.id)} /></p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FrameworksManager