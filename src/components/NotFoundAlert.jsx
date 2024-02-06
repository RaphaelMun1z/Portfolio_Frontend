import styles from './NotFoundAlert.module.css'

const NotFoundAlert = () => {
    return (
        <section>
            <div className={styles.container}>
                <img src="404.png" alt="Erro 404" />
                <h1>Página não encontrada!</h1>
            </div>
        </section >
    )
}

export default NotFoundAlert