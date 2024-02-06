import { useState } from 'react'

// Styles
import styles from './ContactForm.module.css'

// Icons
import { MdSend } from "react-icons/md";

const ContactForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [message, setMessage] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log("Form enviado!")
        setMessage("")
    }

    return (
        <section className={styles.formContainer}>
            <div className={styles.container}>
                <div className={styles.insideContainer}>
                    <img src="satelite.png" />
                </div>
                <div className={`${styles.insideContainer} ${styles.mainDiv}`}>
                    <form onSubmit={handleSubmit}>
                        <h1>Entre em contato</h1>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">
                                <span>Nome:</span>
                                <input type="text" id='name' name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
                            </label>

                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">
                                <span>E-mail:</span>
                                <input type="text" id='email' name='email' placeholder='Digite seu e-mail' onChange={handleEmail} value={email} />
                            </label>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message">
                                <span>Mensagem:</span>
                                <textarea id='message' name="message" onChange={handleMessage} value={message}></textarea>
                            </label>
                        </div>
                        <button type='submit'>
                            Enviar<MdSend />
                        </button>
                    </form>
                </div>
            </div>


        </section>
    )
}

export default ContactForm