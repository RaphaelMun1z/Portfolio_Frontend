import styles from './DashboardItems.module.scss'

// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getContactForms } from '../../slices/contactSlice';

// Icons
import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom'

const ContactFormsManager = () => {
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

  const { contactForms, loading: contactFormLoading } = useSelector((state) => state.contact)

  useEffect(() => {
    dispatch(getContactForms())
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Formulários de contato</h1>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Busque pelo formulário de contato...' />
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
              <th>Assunto</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>mensagem</th>
              <th>Criado em</th>
              <th className={styles.headActionTh}>Visualizar</th>
              <th className={styles.headActionTh}>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {!contactFormLoading && contactForms && contactForms.length === 0 && (
              <p className={styles.noData}>Não há formulários cadastrados.</p>
            )}
            {!contactFormLoading && contactForms && contactForms.length > 0 && contactForms.map((form) => (
              <tr key={form.id}>
                <td>{form.id}</td>
                <td>{form.FormSubject.subject}</td>
                <td>{form.personName}</td>
                <td>{form.email}</td>
                <td>{form.message}</td>
                <td>{formatDate(form.createdAt)}<br />{formatTime(form.createdAt)}</td>
                <td><th className={`${styles.actionTh} ${styles.view}`}><Link to={``}><FaRegEye /></Link></th></td>
                <td><th className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline /></th></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactFormsManager