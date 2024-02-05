import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/habilidades" element={<SkillsPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
