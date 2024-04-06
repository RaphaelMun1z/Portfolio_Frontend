// Styles
import styles from './LandingSection.module.css'

import Image from './Image';

// Icons
import { LuRocket } from "react-icons/lu"

const landingImage = "/rocket.png"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'

const LandingSection = () => {
    const el = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const testimonialsElements = el.current.children;

        tl.current = gsap.timeline()
            .from(testimonialsElements, {
                opacity: 1,
                y: 0,
                stagger: 0.2,
            });

        return () => {
            tl.current.kill();
        };
    }, []);

    return (
        <main ref={el}>
            <div className={`${styles.imageContainer} item`}>
                <Image imagePath={landingImage} />
            </div>
            <div className={`${styles.landingContentContainer} item`}>
                <div className={styles.insideLandingContent}>
                    <p>Olá,</p>
                    <h2>Me chamo <span>Raphael Muniz</span></h2>
                    <h6>Sou Desenvolvedor Full Stack React.js + Node.js</h6>
                    <a href="/">Conheça meu trabalho<LuRocket /></a>
                </div>
            </div>
        </main>
    );
};

export default LandingSection;