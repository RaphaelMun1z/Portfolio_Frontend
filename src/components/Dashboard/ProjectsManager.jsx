import styles from './DashboardItems.module.scss'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { deleteProject, getProjects, resetMessage } from '../../slices/projectSlice'

import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { BiImageAdd } from "react-icons/bi";

import { Link } from 'react-router-dom';

import PopUp from './PopUp';
import SystemStatusMessage from '../Form/SystemStatusMessage'

const ProjectsManager = () => {
  const [popUp, setPopUp] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState({})

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

  const { projects, loading, error, message } = useSelector((state) => state.project)

  useEffect(() => {
    dispatch(getProjects())
  }, [])

  const handleConfirmDeleteProject = (projectName, projectId) => {
    projectToDelete.name = projectName
    projectToDelete.id = projectId

    setPopUp(true)
  }

  const handleCancelDeleteProject = () => {
    setProjectToDelete({})
    setPopUp(false)
  }

  const handleDeleteProject = (projectId) => {
    dispatch(deleteProject(projectId))
    handleCancelDeleteProject()

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
        <PopUp name={projectToDelete.name} id={projectToDelete.id} cancelDelete={handleCancelDeleteProject} deleteFunction={handleDeleteProject} />
      )}
      <div className={styles.header}>
        <h1>Projetos</h1>
        <Link to="/adm/cadastrar/projeto" className={styles.newItem}>Cadastrar<MdAddCircleOutline /></Link>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Busque pelo projeto...' />
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
              <th>Criado em</th>
              <th>Atualizado em</th>
              <th className={styles.headActionTh}>Visualizar</th>
              <th className={styles.headActionTh}>Adicionar imagem</th>
              <th className={styles.headActionTh}>Editar</th>
              <th className={styles.headActionTh}>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {projects && projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{formatDate(project.createdAt)}<br />{formatTime(project.createdAt)}</td>
                <td>{formatDate(project.updatedAt)}<br />{formatTime(project.updatedAt)}</td>
                <td><th className={`${styles.actionTh} ${styles.view}`}><Link to={`/projeto/${project.id}`}><FaRegEye /></Link></th></td>
                <td><th className={`${styles.actionTh} ${styles.edit}`}><Link to={`/adm/projeto/${project.id}/nova-imagem`}><BiImageAdd /></Link></th></td>
                <td><th className={`${styles.actionTh} ${styles.edit}`}><FaRegEdit /></th></td>
                <td><th className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline onClick={() => handleConfirmDeleteProject(project.name, project.id)} /></th></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectsManager