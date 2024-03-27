import LandingSection from '../components/LandingSection'
import BioAboutMe from '../components/BioAboutMe';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import ProjectsTypeMenu from '../components/ProjectsTypeMenu';

const HomePage = () => {
    return (
        <>
            <LandingSection />
            <BioAboutMe />
            <Skills />
            <ProjectsTypeMenu />
            <ContactForm user={{ name: "João", email: "joao@hotmail.com" }} />
        </>
    )
}

export default HomePage