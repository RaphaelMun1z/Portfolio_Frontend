import LandingSection from '../components/LandingSection'
import BioAboutMe from '../components/BioAboutMe';
import Skills from '../components/Skills';
import ProjectsTypeMenu from '../components/ProjectsTypeMenu';
import Certifications from './Certifications';
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
            <Certifications />
            <Testimonials />
            <Faq />
            <ContactForm />
        </>
    )
}

export default HomePage