// Styles
import styles from './TechnologiesSkills.module.css'

import TechnologyCard from './TechnologyCard'

const TechnologiesSkills = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>Principais Tecnologias</h1>
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.subTitle}>Framework</h1>
                <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                {/*  <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" /> */}
                <h1 className={styles.subTitle}>Linguagem de programação</h1>
                <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                {/* <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" /> */}
                <h1 className={styles.subTitle}>Linguagem de estilização</h1>
                <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                {/* <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" /> */}
                <h1 className={styles.subTitle}>Banco de dados</h1>
                <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                {/* <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" /> */}
                <h1 className={styles.subTitle}>IDE</h1>
                <div className='skeleton' style={{ flex: '0 1 calc((100%/3) - 1%)', height: '300px' }}></div>
                {/* <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" />
                <TechnologyCard name="Nome" logo="react_logo.png" projectsNumber="10" description="Framework Javascript" type="IDE" /> */}
            </div>
        </section>
    )
}

export default TechnologiesSkills