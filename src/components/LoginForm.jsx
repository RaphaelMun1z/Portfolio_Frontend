import styles from './LoginForm.module.scss'

import { Link } from 'react-router-dom'
import SystemStatusMessage from './Form/SystemStatusMessage'

// Hooks
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { login, reset } from '../slices/authSlice'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email,
            password
        }

        dispatch(login(user))
    }

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <div className={styles.mainContainer}>
            <form className={styles.formStep} onSubmit={handleSubmit}>
                <div className={styles.title}>
                    <h1>Login</h1>
                </div>
                <label>
                    <p>E-mail:</p>
                    <input type="text" placeholder='Digite seu e-mail...' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label>
                    <p>Senha:</p>
                    <input type="password" placeholder='Digite a senha...' onChange={(e) => setPassword(e.target.value)} value={password} />
                </label>
                <div className={styles.footer}>
                    {!loading && <button type="submit" className={styles.submit}>Acessar</button>}
                    {loading && <button type="button" className={styles.submit} disabled>Aguarde...</button>}
                    <Link to="/" className={styles.cancel}>Voltar</Link>
                    {error && (
                        <div className={styles.messages}>
                            <SystemStatusMessage type="error" msg={error} />
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default LoginForm