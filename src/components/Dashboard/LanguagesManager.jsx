import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { deleteLanguage, getLanguages, resetMessage } from '../../slices/languageSlice';

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from "react-router-dom"

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const LanguagesManager = () => {
  const [popUp, setPopUp] = useState(false)
  const [languageToDelete, setLanguageToDelete] = useState({})

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

  const { languages, loading: languageLoading, error, message } = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getLanguages())
  }, [])

  const handleConfirmDeleteLanguage = (languageName, languageId) => {
    languageToDelete.name = languageName
    languageToDelete.id = languageId

    setPopUp(true)
  }

  const handleCancelDeleteLanguage = () => {
    setLanguageToDelete({})
    setPopUp(false)
  }

  const handleDeleteLanguage = (languageId) => {
    dispatch(deleteLanguage(languageId))
    handleCancelDeleteLanguage()

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
        <PopUp name={languageToDelete.name} id={languageToDelete.id} cancelDelete={handleCancelDeleteLanguage} deleteFunction={handleDeleteLanguage} />
      )}
      <div className={styles.header}>
        <h1>Linguagens</h1>
        <Link to="/adm/cadastrar/linguagem" className={styles.newItem}>Cadastrar<MdAddCircleOutline /></Link>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Busque pela linguagem...' />
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
            {languages && languages.map((language) => (
              <tr key={language.id}>
                <td>{language.id}</td>
                <td>{language.name}</td>
                <td>{language.proficiency}</td>
                <td>{formatDate(language.createdAt)}<br />{formatTime(language.createdAt)}</td>
                <td>{formatDate(language.updatedAt)}<br />{formatTime(language.updatedAt)}</td>
                <td><th className={`${styles.actionTh} ${styles.edit}`}><FaRegEdit /></th></td>
                <td><th className={`${styles.actionTh} ${styles.delete}`} onClick={() => handleConfirmDeleteLanguage(language.name, language.id)} ><MdDeleteOutline /></th></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LanguagesManager