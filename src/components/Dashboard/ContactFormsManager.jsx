import styles from './ContactFormsManager.module.scss'

import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { RiSearch2Line, RiSendPlaneLine  } from "react-icons/ri";

const ContactFormsManager = () => {
  const linhas = Array.from({ length: 10 }, (_, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>Exemplo {index + 1}</td>
      <td>Exemplo</td>
      <td>Exemplo</td>
      <td>Exemplo</td>
      <td>Exemplo</td>
      <td><th className={`${styles.actionTh} ${styles.view}`}><RiSendPlaneLine /></th></td>
      <td><th className={`${styles.actionTh} ${styles.delete}`}><MdDeleteOutline /></th></td>
    </tr>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Formulários de contato</h1>
        <div className={styles.newFramework}>Cadastrar<MdAddCircleOutline /></div>
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
              <th>Título</th>
              <th>Assunto</th>
              <th>Nome</th>
              <th>Criado em</th>
              <th>Status</th>
              <th className={styles.headActionTh}>Responder</th>
              <th className={styles.headActionTh}>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {linhas}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactFormsManager