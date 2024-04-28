import styles from './DashboardItems.module.scss'

// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getFaqs } from '../../slices/faqSlice';

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom';

const FaqManager = () => {
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

  const { faqs, loading: faqLoading } = useSelector((state) => state.faq)

  useEffect(() => {
    dispatch(getFaqs())
  }, [])

  return (
    <div className={styles.container}>
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
                <td><th className={`${styles.actionTh} ${styles.edit}`}><Link to={``}><FaRegEdit /></Link></th></td>
                <td><th className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline /></th></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FaqManager