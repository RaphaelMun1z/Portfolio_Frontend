import styles from './DashboardItems.module.scss'

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getFaqs, deleteFaq, resetMessage } from '../../slices/faqSlice';

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom';

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const FaqManager = () => {
  const [popUp, setPopUp] = useState(false)
  const [faqToDelete, setFaqToDelete] = useState({})

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

  const { faqs, loading: faqLoading, message, error } = useSelector((state) => state.faq)

  useEffect(() => {
    dispatch(getFaqs())
  }, [])

  const handleConfirmDeleteFaq = (faqName, faqId) => {
    faqToDelete.name = faqName
    faqToDelete.id = faqId

    setPopUp(true)
  }

  const handleCancelDeleteFaq = () => {
    setFaqToDelete({})
    setPopUp(false)
  }

  const handleDeleteFaq = (faqId) => {
    dispatch(deleteFaq(faqId))
    handleCancelDeleteFaq()

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
        <PopUp name={faqToDelete.name} id={faqToDelete.id} cancelDelete={handleCancelDeleteFaq} deleteFunction={handleDeleteFaq} />
      )}
      <div className={styles.header}>
        <h1>FAQ</h1>
        <Link to="/adm/cadastrar/faq" className={styles.newItem}>Cadastrar<MdAddCircleOutline /></Link>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Busque pela pergunta...' />
        <button type="submit">
          <RiSearch2Line />
        </button>
        <label>
          <p>Filtrar por: </p>
          <select name="searchBy">
            <option value="id">Id</option>
            <option value="title">Pergunta</option>
            <option value="subject">Resposta</option>
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
              <th>Pergunta</th>
              <th>Resposta</th>
              <th>Criado em</th>
              <th>Atualizado em</th>
              <th className={styles.headActionTh}>Editar</th>
              <th className={styles.headActionTh}>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {!faqLoading && faqs && faqs.length === 0 && (
              <p className={styles.noData}>Não há faqs cadastradas.</p>
            )}
            {!faqLoading && faqs && faqs.length > 0 && faqs.map((faq) => (
              <tr key={faq.id}>
                <td>{faq.id}</td>
                <td>{faq.question}</td>
                <td>{faq.answer}</td>
                <td>{formatDate(faq.createdAt)}<br />{formatTime(faq.createdAt)}</td>
                <td>{formatDate(faq.updatedAt)}<br />{formatTime(faq.updatedAt)}</td>
                <td><p className={`${styles.actionTh} ${styles.edit}`}><Link to={``}><FaRegEdit /></Link></p></td>
                <td><p className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline onClick={() => handleConfirmDeleteFaq(`ID ${faq.id}`, faq.id)} /></p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FaqManager