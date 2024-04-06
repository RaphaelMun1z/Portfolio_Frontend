import { useState } from 'react'

// Styles
import styles from './ContactForm.module.css'

// Icons
import { MdSend } from "react-icons/md";
import Image from './Image';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const contactImage = "/satelite.png"

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