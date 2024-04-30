import ProjectCard from './ProjectCard'
import styles from './ProjectsSection.module.scss'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIcon } from '../hooks/useIcon';
import { useQuery } from '../hooks/useQuery';

// Icons
import { MdDesignServices } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { FaInfo, FaSearch } from "react-icons/fa"
import { IoFlash, IoFlashOff } from "react-icons/io5"

// Redux
import { getProjects } from '../slices/projectSlice'
import { getLanguages } from '../slices/languageSlice';
import { getFrameworks } from '../slices/frameworkSlice';
import { getDatabases } from '../slices/databaseSlice';

const ProjectsSection = () => {
    const query = useQuery();
    const dispatch = useDispatch()

    const { projects, loading: projectLoading } = useSelector((state) => state.project)
    const { languages, loading: languageLoading } = useSelector((state) => state.language)
    const { frameworks, loading: frameworkLoading } = useSelector((state) => state.framework)
    const { databases, loading: databaseLoading } = useSelector((state) => state.database)

    useEffect(() => {
        dispatch(getProjects())
        dispatch(getLanguages())
        dispatch(getFrameworks())
        dispatch(getDatabases())

        if (query) {
            if (query.has("tipo")) {
                const type = query.get("tipo")
                handleTypeSelected(type)
            }

            if (query.has("stack")) {
                const stack = query.get("stack")
                handleStackSelected(stack)
            }

            if (query.has("linguagens")) {
                const languages = query.get("linguagens")
                const languagesId = languages.split(',').map(Number);

                languagesId.map((lId) => {
                    handleLanguagesSelected(parseInt(lId))
                })
            }

            if (query.has("frameworks")) {
                const frameworks = query.get("frameworks")
                const frameworksId = frameworks.split(',').map(Number);

                frameworksId.map((fId) => {
                    handleFrameworksSelected(parseInt(fId))
                })
            }

            if (query.has("bdd")) {
                const bddId = query.get("bdd")
                handledatabaseSelected(parseInt(bddId))
            }
        }
    }, [])

    const [fastSearch, setFastSearch] = useState(false)
    const [searchedProjectName, setSearchedProjectName] = useState("")
    const [typeSelected, setTypeSelected] = useState("")
    const [stackSelected, setStackSelected] = useState("")
    const [languagesSelected, setLanguagesSelected] = useState([])
    const [frameworksSelected, setFrameworksSelected] = useState([])
    const [databaseSelected, setDatabaseSelected] = useState("")

    const handleSubmitSearchProjectByName = (e) => {
        e.preventDefault()

        if (searchedProjectName && searchedProjectName.trim() !== "") {
            dispatch(getProjects({ projectName: searchedProjectName }))
        }
    }

    // Fast Search
    useEffect(() => {
        if (fastSearch) {
            if (searchedProjectName && searchedProjectName.trim() !== "") {
                dispatch(getProjects({ projectName: searchedProjectName }))
            }
        }
    }, [searchedProjectName])

    const handleStackSelected = (stack) => {
        if (stackSelected === stack) {
            setStackSelected("");
        } else {
            setStackSelected(stack)
        }
    }

    const handleTypeSelected = (type) => {
        if (typeSelected === type) {
            setTypeSelected("");
        } else {
            setTypeSelected(type)
        }
    }

    const handleLanguagesSelected = (languageId) => {
        if (languagesSelected.includes(languageId)) {
            setLanguagesSelected(prevLanguages => prevLanguages.filter(id => id !== languageId));
        } else {
            setLanguagesSelected(prevLanguages => [...prevLanguages, languageId])
        }
    }

    const handleFrameworksSelected = (frameworkId) => {
        if (frameworksSelected.includes(frameworkId)) {
            setFrameworksSelected(prevFrameowrks => prevFrameowrks.filter(id => id !== frameworkId));
        } else {
            setFrameworksSelected(prevFrameowrks => [...prevFrameowrks, frameworkId])
        }
    }

    const handledatabaseSelected = (databaseId) => {
        if (databaseSelected === databaseId) {
            setDatabaseSelected("");
        } else {
            setDatabaseSelected(databaseId)
        }
    }

    useEffect(() => {
        dispatch(getProjects({ projectType: typeSelected, projectStack: stackSelected, languagesId: languagesSelected, frameworksId: frameworksSelected, databaseId: databaseSelected }))
    }, [typeSelected, stackSelected, languagesSelected, frameworksSelected, databaseSelected]);

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.header}>
                <h1>Meus Projetos</h1>
            </div>
            <div className={styles.searchForProjectContainer}>
                {/* Filtros */}
                <div className={styles.filterContainer}>
                    <h2 className={styles.title}>Filtros</h2>
                    <div className={styles.mainSearchInput}>
                        <form className={styles.searchBar} onSubmit={handleSubmitSearchProjectByName}>
                            <input type="text" placeholder="Pesquise por um projeto pelo nome..." onChange={(e) => setSearchedProjectName(e.target.value)} value={searchedProjectName} />
                            <button type="submit">
                                <FaSearch />
                            </button>
                        </form>
                        <div className={styles.fastSearchInput}>
                            <input
                                type="checkbox"
                                id="fastSearch"
                                name="fastSearch"
                                checked={fastSearch}
                                onChange={(e) => setFastSearch(e.target.checked)}
                            />
                            {fastSearch ? (
                                <label htmlFor="fastSearch">
                                    <div className={`${styles.flashSearch} ${styles.activedFlash}`}><IoFlash />Pesquisa Instantânea Ativa</div>
                                </label>
                            ) : (
                                <label htmlFor="fastSearch">
                                    <div className={`${styles.flashSearch}`}><IoFlashOff />Pesquisa Instantânea Inativa</div>
                                </label>
                            )}
                        </div>
                    </div>

                    <div className={styles.topicsContainer}>
                        {!projectLoading && projects && (
                            <div className={styles.topic}>
                                <h4>Tipo</h4>
                                <div className={styles.itemsContainer}>
                                    <div className={`${styles.item} ${typeSelected === 'Web' ? styles.active : ''} `} onClick={() => handleTypeSelected('Web')}>
                                        <div className={styles.icon}>
                                            {useIcon('Web')}
                                        </div>
                                        <p>WEB</p>
                                    </div>
                                    <div className={`${styles.item} ${typeSelected === 'Desktop' ? styles.active : ''} `} onClick={() => handleTypeSelected('Desktop')}>
                                        <div className={styles.icon}>
                                            {useIcon('Desktop')}
                                        </div>
                                        <p>Desktop</p>
                                    </div>
                                    <div className={`${styles.item} ${typeSelected === 'Mobile' ? styles.active : ''} `} onClick={() => handleTypeSelected('Mobile')}>
                                        <div className={styles.icon}>
                                            {useIcon('Mobile')}
                                        </div>
                                        <p>Mobile</p>
                                    </div>
                                    <div className={`${styles.item} ${typeSelected === 'EmbeddedProgramming' ? styles.active : ''} `} onClick={() => handleTypeSelected('EmbeddedProgramming')}>
                                        <div className={styles.icon}>
                                            {useIcon('EmbeddedProgramming')}
                                        </div>
                                        <p>Programação Embarcada</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!projectLoading && projects && (
                            <div className={styles.topic}>
                                <h4>Stack</h4>
                                <div className={styles.itemsContainer}>
                                    <div className={`${styles.item} ${stackSelected === 'Fullstack' ? styles.active : ''} `} onClick={() => handleStackSelected('Fullstack')}>
                                        <div className={styles.icon}>
                                            {useIcon('Fullstack')}
                                        </div>
                                        <p>Fullstack</p>
                                    </div>
                                    <div className={`${styles.item} ${stackSelected === 'Frontend' ? styles.active : ''} `} onClick={() => handleStackSelected('Frontend')}>
                                        <div className={styles.icon}>
                                            {useIcon('Frontend')}
                                        </div>
                                        <p>Frontend</p>
                                    </div>
                                    <div className={`${styles.item} ${stackSelected === 'Backend' ? styles.active : ''} `} onClick={() => handleStackSelected('Backend')}>
                                        <div className={styles.icon}>
                                            {useIcon('Backend')}
                                        </div>
                                        <p>Backend</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!frameworkLoading && frameworks && frameworks.length > 0 && (
                            <div className={styles.topic}>
                                <h4>Frameworks</h4>
                                <div className={styles.itemsContainer}>
                                    {frameworks.map((framework, index) => (
                                        <div className={`${styles.item} ${frameworksSelected.includes(framework.id) ? styles.active : ''} `} key={index} onClick={() => handleFrameworksSelected(framework.id)}>
                                            <div className={styles.icon}>
                                                {useIcon(framework.name)}
                                            </div>
                                            <p>
                                                {framework.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!languageLoading && languages && languages.length > 0 && (
                            <div className={styles.topic}>
                                <h4>Linguagens</h4>
                                <div className={styles.itemsContainer}>
                                    {languages.map((language, index) => (
                                        <div className={`${styles.item} ${languagesSelected.includes(language.id) ? styles.active : ''} `} key={index} onClick={() => handleLanguagesSelected(language.id)}>
                                            <div className={styles.icon}>
                                                {useIcon(language.name)}
                                            </div>
                                            <p>
                                                {language.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!databaseLoading && databases && databases.length > 0 && (
                            <div className={styles.topic}>
                                <h4>Banco de dados</h4>
                                <div className={styles.itemsContainer}>
                                    {databases.map((database, index) => (
                                        <div className={`${styles.item} ${databaseSelected === database.id ? styles.active : ''} `} key={index} onClick={() => handledatabaseSelected(database.id)}>
                                            <div className={styles.icon}>
                                                {useIcon(database.name)}
                                            </div>
                                            <p>
                                                {database.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {!projectLoading && projects && projects.length > 0 && (
                    <div className={styles.messages}>
                        <div className={styles.message}>
                            <div className={styles.icon}>
                                <FaInfo />
                            </div>
                            <div className={styles.text}>Foram encontrados <b>{projects.length}</b> projetos.</div>
                        </div>
                    </div>
                )}

                {!projectLoading && projects && projects.length === 0 && (
                    <div className={styles.messages}>
                        <div className={styles.message}>
                            <div className={styles.icon}>
                                <FaInfo />
                            </div>
                            <div className={styles.text}>Não foram encontrados projetos.</div>
                        </div>
                    </div>
                )}

            </div>
            <div className={styles.contentContainer}>
                {!projectLoading && projects && projects.length > 0 && projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {projectLoading && (
                    <>
                        <div className='skeleton' style={{ width: '49%', height: '555px' }}></div>
                        <div className='skeleton' style={{ width: '49%', height: '555px' }}></div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProjectsSection