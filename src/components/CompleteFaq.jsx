import styles from './CompleteFaq.module.scss'

// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getFaqs } from '../slices/faqSlice';

const CompleteFaq = () => {
    const dispatch = useDispatch()

    const { faqs, loading: faqLoading } = useSelector((state) => state.faq)

    useEffect(() => {
        dispatch(getFaqs())
    }, [])

    return (
        <section>
            <div className={styles.header}>
                <h1>Perguntas e respostas</h1>
            </div>
            {!faqLoading && faqs && faqs.length === 0 && (
                <p className={styles.noData}>Não há perguntas cadastradas.</p>
            )}
            {!faqLoading && faqs && faqs.length > 0 && (
                <div className={styles.contentContainer} >
                    {faqs.map((faq, index) => (
                        <div className={styles.faqItem} key={index}>
                            <div className={styles.question}>
                                <span className={styles.number}>{index + 1}</span>
                                <h2>{faq.question}</h2>
                            </div>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default CompleteFaq