import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import LandingSection from './components/LandingSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

// Styles
import styles from './App.module.css'

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <Header scroll={scroll} />

      <LandingSection />
      <AboutMe />
      <Skills />
      <ContactForm user={{ name: "João", email: "joao@hotmail.com" }} />

      <Footer />
    </>
  )
}

export default App
