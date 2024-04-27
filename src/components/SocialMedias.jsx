import styles from './SocialMedias.module.scss'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getSocialMedia } from '../slices/socialMediaSlice'

const SocialMedias = () => {
    const dispatch = useDispatch()

    const { socialMedia, loading: socialMediaLoading } = useSelector((state) => state.socialMedia)

    useEffect(() => {
        dispatch(getSocialMedia())
    }, [])

    return (
        <section>
            <div className={styles.header}>
                <h1>Redes Sociais</h1>
            </div>
            <div className={styles.contentContainer}>
                {socialMediaLoading && (
                    <>
                        <div className='skeleton' style={{ width: '30%', height: '200px' }}></div>
                        <div className='skeleton' style={{ width: '30%', height: '200px' }}></div>
                        <div className='skeleton' style={{ width: '30%', height: '200px' }}></div>
                    </>
                )}

                {!socialMediaLoading && socialMedia && socialMedia.linkedin && (
                    <div className={`${styles.socialMediaCard} ${styles.linkedin}`}>
                        <div className={styles.logo}>
                            <FaLinkedin />
                        </div>
                        <div className={styles.text}>
                            <h1>Linkedin</h1>
                        </div>
                    </div>
                )}

                {!socialMediaLoading && socialMedia && socialMedia.github && (
                    <div className={`${styles.socialMediaCard} ${styles.github}`}>
                        <div className={styles.logo}>
                            <FaGithub />
                        </div>
                        <div className={styles.text}>
                            <h1>Github</h1>
                        </div>
                    </div>
                )}

                {!socialMediaLoading && socialMedia && socialMedia.instagram && (
                    <div className={`${styles.socialMediaCard} ${styles.instagram}`}>
                        <div className={styles.logo}>
                            <FaInstagram />
                        </div>
                        <div className={styles.text}>
                            <h1>Instagram</h1>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default SocialMedias