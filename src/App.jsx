import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact';

// Adm
import Dashboard from './pages/Dashboard';
import NewLanguage from './components/Form/NewLanguage';
import NewFramework from './components/Form/NewFramework';
import NewProject from './components/Form/NewProject';

import SystemMessage from './components/SystemMessage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <SystemMessage msg="Olá, seja bem vindo(a) ao meu portfólio!" /> */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/habilidades" element={<SkillsPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/projeto/:id" element={<ProjectPage />} />
          {/* ADM Routes */}
          <Route path="/adm/painel" element={<Dashboard />} />
          <Route path="/adm/cadastrar/linguagem" element={<NewLanguage />} />
          <Route path="/adm/cadastrar/framework" element={<NewFramework />} />
          <Route path="/adm/cadastrar/projeto" element={<NewProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
