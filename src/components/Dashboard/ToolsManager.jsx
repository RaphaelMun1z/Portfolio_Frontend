import styles from './DashboardItems.module.scss'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getTools } from '../../slices/toolSlice';

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import { Link } from 'react-router-dom';

const ToolsManager = () => {
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

  const { tools, loading: toolLoading } = useSelector((state) => state.tool)

  useEffect(() => {
    dispatch(getTools())
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Ferramentas</h1>
        <Link to="/adm/cadastrar/ferramenta" className={styles.newItem}>Cadastrar<MdAddCircleOutline /></Link>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Busque pela ferramenta...' />
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
            {tools && tools.map((tool) => (
              <tr key={tool.id}>
                <td>{tool.id}</td>
                <td>{tool.name}</td>
                <td>{tool.proficiency}</td>
                <td>{formatDate(tool.createdAt)}<br />{formatTime(tool.createdAt)}</td>
                <td>{formatDate(tool.updatedAt)}<br />{formatTime(tool.updatedAt)}</td>
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

export default ToolsManager