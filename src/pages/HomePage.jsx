import LandingSection from '../components/LandingSection'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return (
        <>
            <LandingSection />
            <AboutMe />
            <Skills />
            <ContactForm user={{ name: "João", email: "joao@hotmail.com" }} />
        </>
    )
}

export default HomePage