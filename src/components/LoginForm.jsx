import styles from './LoginForm.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './Form/SystemStatusMessage'

const LoginForm = () => {
    return (
        <div className={styles.mainContainer}>
            <form className={styles.formStep}>
                <div className={styles.title}>
                    <h1>Login</h1>
                </div>
                <label>
                    <p>E-mail:</p>
                    <input type="text" placeholder='Digite seu e-mail...' />
                </label>
                <label>
                    <p>Senha:</p>
                    <input type="password" placeholder='Digite a senha...' />
                </label>
                <div className={styles.footer}>
                    <button type="submit" className={styles.submit}>Acessar</button>
                    <Link to="/" className={styles.cancel}>Voltar</Link>
                    <div className={styles.messages}>
                        <SystemStatusMessage type="error" msg="Credenciais inválidas!" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm