import styles from './SingleProjectDetails.module.css'

const SingleProjectDetails = () => {
    return (
        <section className={styles.projectDetailsContainer}>
            <div className={styles.header}>
                <h1>Título do Projeto</h1>
            </div>
            <div className={styles.contentContainer}>
                Informações
            </div>
        </section>
    )
}

export default SingleProjectDetails