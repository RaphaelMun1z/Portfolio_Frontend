import LandingSection from '../components/LandingSection'
import BioAboutMe from '../components/BioAboutMe';
import Skills from '../components/Skills';
import ProjectsTypeMenu from '../components/ProjectsTypeMenu';
import Testimonials from './Testimonials';
import Faq from './Faq';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return (
        <>
            <LandingSection />
            <BioAboutMe />
            <Skills />
            <ProjectsTypeMenu />
            <Testimonials />
            <Faq />
            <ContactForm />
        </>
    )
}

export default HomePage