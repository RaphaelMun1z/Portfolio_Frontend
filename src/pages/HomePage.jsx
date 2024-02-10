import LandingSection from '../components/LandingSection'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import ProjectsTypeMenu from '../components/ProjectsTypeMenu';

// Hooks
import { useUserComputerDataContext } from '../hooks/useUserComputerDataContext'

const HomePage = () => {
    const { navigatorName, operationalSystem, widthScreen, heightScreen } = useUserComputerDataContext()

    return (
        <>
            {/* <ul>
                <li>{navigatorName}</li>
                <li>{operationalSystem}</li>
                <li>{widthScreen}</li>
                <li>{heightScreen}</li>
            </ul> */}
            <LandingSection />
            <AboutMe />
            <Skills />
            <ProjectsTypeMenu />
            <ContactForm user={{ name: "João", email: "joao@hotmail.com" }} />
        </>
    )
}

export default HomePage