// Styles
import styles from './ContactForm.module.scss'

import Image from './Image';
const contactImage = "/satelite.png"

// Icons
import { MdSend } from "react-icons/md";

// Hooks
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Redux
import { resetMessage, createContactForm } from '../slices/contactSlice';
import { getFormSubjects } from '../slices//formSubjectSlice';

import SystemStatusMessage from './Form/SystemStatusMessage';

const ContactForm = ({ user }) => {
    const el = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const testimonialsElements = el.current.querySelectorAll('.item');

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: testimonialsElements,
                scrub: true,
                start: "top 800px",
                end: "bottom 1000px",
            }
        })
            .fromTo(testimonialsElements,
                { opacity: 0, y: -150 },
                { opacity: 1, y: 0, stagger: 0.2 }
            );

        return () => {
            tl.current.kill();
        };
    }, []);

    const [internErrors, setInternErrors] = useState([])
    const [name, setName] = useState("")
    const [subject, setSubject] = useState(0)
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()

    const { loading: loadingContact, message: messageContact, error: errorContact } = useSelector((state) => state.contact)
    const { formSubjects, loading: formSubjectLoading } = useSelector((state) => state.formSubject)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubject = (subjectId) => {
        if (subjectId !== 0) {
            setSubject(subjectId)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setInternErrors([])

        if (name.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "Seu nome é obrigatório!"])
            return
        }

        if (subject === 0) {
            setInternErrors(prevErrors => [...prevErrors, "O assunto é obrigatório!"])
            return
        }

        if (email.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "Seu e-mail é obrigatório!"])
            return
        }

        if (message.trim() === "") {
            setInternErrors(prevErrors => [...prevErrors, "Sua mensagem é obrigatória!"])
            return
        }

        const contactForm = {
            personName: name,
            subjectId: subject,
            email: email,
            message: message,
        }

        dispatch(createContactForm(contactForm))

        setName("")
        setEmail("")
        setMessage("")

        setInternErrors([])
        resetComponentMessage()
    }

    const handleCleanContactForm = () => {
        setName("")
        setEmail("")
        setMessage("")

        setInternErrors([])
        resetComponentMessage()
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    useEffect(() => {
        dispatch(getFormSubjects())
    }, [])

    return (
        <section className={styles.formContainer} ref={el}>
            <div className={styles.container}>
                <div className={`${styles.insideContainer} item`}>
                    <Image imagePath={contactImage} />
                </div>
                <div className={`${styles.insideContainer} ${styles.mainDiv} item`}>
                    <form onSubmit={handleSubmit}>
                        <h1>Entre em contato</h1>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">
                                <span>Nome:</span>
                                <input type="text" id='name' name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
                            </label>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="subject">
                                <span>Assunto:</span>
                                {formSubjects && formSubjects.length > 0 && (
                                    <select name="subject" defaultValue={'0'} onChange={(e) => handleSubject(e.target.value)}>
                                        <option value="0">Selecione um assunto</option>
                                        {formSubjects.map((formSubject, index) => (
                                            <option value={formSubject.id} key={index}>{formSubject.subject}</option>
                                        ))}
                                    </select>
                                )}
                                {formSubjects && formSubjects.length === 0 && (
                                    <p className={styles.noData}>Não há assuntos cadastrados.</p>
                                )}
                            </label>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">
                                <span>E-mail:</span>
                                <input type="email" id='email' name='email' placeholder='Digite seu e-mail' onChange={handleEmail} value={email} />
                            </label>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message">
                                <span>Mensagem:</span>
                                <textarea id='message' name="message" onChange={handleMessage} value={message}></textarea>
                            </label>
                        </div>
                        <div className={styles.footer}>
                            {loadingContact && (
                                <button type="button" className={styles.submit} disabled>Enviando...<MdSend /></button>
                            )}
                            {!loadingContact && (
                                <button type="submit" className={styles.submit}>Enviar<MdSend /></button>
                            )}
                            <button type="button" className={styles.cancel} onClick={() => handleCleanContactForm()}>Limpar campos</button>
                            {internErrors && internErrors.length > 0 && (
                                <div className={styles.messages}>
                                    {internErrors.map((error) => {
                                        return <SystemStatusMessage type="error" msg={error} />
                                    })}
                                </div>
                            )}
                            {errorContact && (
                                <div className={styles.messages}>
                                    <SystemStatusMessage type="error" msg={errorContact} />
                                </div>
                            )}
                            {messageContact && (
                                <div className={styles.messages}>
                                    <SystemStatusMessage type="success" msg={messageContact} />
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>


        </section>
    )
}

export default ContactForm