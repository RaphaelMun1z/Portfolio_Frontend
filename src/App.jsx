// Hooks
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux'

// Cookie
import cookie from "js-cookie"

// Redux
import { createLog } from './slices/logSlice';

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
import TechSinglePage from './components/TechSinglePage';
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
import ProjectNewImageForm from './components/ProjectNewImageForm';
import NewSocialMidia from './components/Form/NewSocialMidia';
import NewFormSubject from './components/Form/NewFormSubject';
/// Answer Form
import AnswerContactForm from './components/Form/AnswerContactForm';

import SystemMessage from './components/SystemMessage';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

function App() {
  const { auth, loading } = useAuth()
  const dispatch = useDispatch()

  if (loading) {
    return <Loading />
  }

  const PrivateRoute = ({ children }) => {
    return auth ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  };

  const wrapPrivateRoute = (element) => {
    return (
      <PrivateRoute>
        {element}
      </PrivateRoute>
    );
  };

  const isFirstVisit = cookie.get('isFirstVisit');

  if (!isFirstVisit) {
    const log = {
      type: "Access",
    }

    dispatch(createLog(log))
    cookie.set("isFirstVisit", true)
  }

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
          <Route path="/linguagem/:id" element={<TechSinglePage type="language" />} />
          <Route path="/framework/:id" element={<TechSinglePage type="framework" />} />
          <Route path="/ferramenta/:id" element={<TechSinglePage type="tool" />} />
          <Route path="/database/:id" element={<TechSinglePage type="database" />} />
          <Route path="/login" element={auth ? <Navigate to="/adm/painel/geral" /> : <Login />} />

          {/* ADM Routes */}
          <Route path="/adm/painel" element={wrapPrivateRoute(<Dashboard />)} />
          <Route path="/adm/painel/:page" element={wrapPrivateRoute(<Dashboard />)} />
          <Route path="/adm/cadastrar/linguagem" element={wrapPrivateRoute(<NewLanguage />)} />
          <Route path="/adm/cadastrar/framework" element={wrapPrivateRoute(<NewFramework />)} />
          <Route path="/adm/cadastrar/projeto" element={wrapPrivateRoute(<NewProject />)} />
          <Route path="/adm/cadastrar/bdd" element={wrapPrivateRoute(<NewBdd />)} />
          <Route path="/adm/cadastrar/rede-social" element={wrapPrivateRoute(<NewSocialMidia />)} />
          <Route path="/adm/cadastrar/assunto-form" element={wrapPrivateRoute(<NewFormSubject />)} />
          <Route path="/adm/cadastrar/ferramenta" element={wrapPrivateRoute(<NewTool />)} />
          <Route path="/adm/cadastrar/habilidadeinterpessoal" element={wrapPrivateRoute(<NewInterpersonalSkill />)} />
          <Route path="/adm/cadastrar/faq" element={wrapPrivateRoute(<NewFaq />)} />
          <Route path="/adm/contactform" element={wrapPrivateRoute(<AnswerContactForm />)} />
          <Route path="/adm/projeto/:projectId/nova-imagem" element={wrapPrivateRoute(<ProjectNewImageForm />)} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
