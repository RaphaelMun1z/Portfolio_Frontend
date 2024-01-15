// Components
import LandingSection from './components/LandingSection'

// Styles
import './App.css'
import styles from './Home.module.css'

function App() {
  return (
    <>
      <header>
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
      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App
