import styles from './DashboardItems.module.scss'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getFrameworks } from '../../slices/frameworkSlice';

import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom';

const FrameworksManager = () => {
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

  const { frameworks, loading: frameworkLoading } = useSelector((state) => state.framework)

  useEffect(() => {
    dispatch(getFrameworks())
  }, [])

  return (
    <div className={styles.container}>
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
                <td><th className={`${styles.actionTh} ${styles.edit}`}><FaRegEdit /></th></td>
                <td><th className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline /></th></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FrameworksManager