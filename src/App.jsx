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
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import Certifications from './pages/Certifications';
import Login from './pages/Login';

// Adm
/// Register Form
import Dashboard from './pages/Dashboard';
import NewLanguage from './components/Form/NewLanguage';
import NewFramework from './components/Form/NewFramework';
import NewProject from './components/Form/NewProject';
import NewBdd from './components/Form/NewBdd';
import NewTool from './components/Form/NewTool';
import NewInterpersonalSkill from './components/Form/NewInterpersonalSkill';
import NewFaq from './components/Form/NewFaq';
import Budget from './pages/Budget';
/// Answer Form
import AnswerContactForm from './components/Form/AnswerContactForm';

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
          <Route path="/depoimentos" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/orcamento" element={<Budget />} />
          <Route path="/certificacoes" element={<Certifications />} />
          <Route path="/login" element={<Login />} />

          {/* ADM Routes */}
          <Route path="/adm/painel" element={<Dashboard />} />
          <Route path="/adm/cadastrar/linguagem" element={<NewLanguage />} />
          <Route path="/adm/cadastrar/framework" element={<NewFramework />} />
          <Route path="/adm/cadastrar/projeto" element={<NewProject />} />
          <Route path="/adm/cadastrar/bdd" element={<NewBdd />} />
          <Route path="/adm/cadastrar/ferramenta" element={<NewTool />} />
          <Route path="/adm/cadastrar/habilidadeinterpessoal" element={<NewInterpersonalSkill />} />
          <Route path="/adm/cadastrar/faq" element={<NewFaq />} />
          <Route path="/adm/contactform" element={<AnswerContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
