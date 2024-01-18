import { useState, useEffect } from 'react';

// Components
import LandingSection from './components/LandingSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills';

// Styles
import './App.css'
import styles from './Home.module.css'

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <header className={scroll ? `${styles.active}` : ''}>
        <nav>
          <div className={styles.logoContainer}>
            <p>Portfólio</p>
          </div>
          <div className={styles.linksContainer}>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Sobre</a></li>
              <li><a href='/'>Habilidades</a></li>
              <li><a href='/'>Projetos</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <LandingSection />
      <AboutMe />
      <Skills />
      <footer>
        <p>Copyright &#169; 2024 Portfólio Raphael Muniz</p>
      </footer>
    </>
  )
}

export default App
