import styles from './Form.module.scss'

// Icons
import { MdOutlineNavigateNext } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";

// Components
import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

// Hooks
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { resetMessage, createProject } from '../../slices/projectSlice'
import { getLanguages } from '../../slices/languageSlice';
import { getFrameworks } from '../../slices/frameworkSlice';
import { getDatabases } from '../../slices/databaseSlice';
import { getTools } from '../../slices/toolSlice';

const NewProject = () => {
    const dispatch = useDispatch()

    const { loading: loadingProject, message: messageProject, error: errorProject } = useSelector((state) => state.project)
    const { languages, loading: languageLoading } = useSelector((state) => state.language)
    const { frameworks, loading: frameworkLoading } = useSelector((state) => state.framework)
    const { databases, loading: databaseLoading } = useSelector((state) => state.database)
    const { tools, loading: toolLoading } = useSelector((state) => state.tool)

    // Step 0 - States
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectType, setProjectType] = useState("undefined")

    // Step 1 - States
    const [projectStack, setProjectStack] = useState("")
    const [projectFrontendLanguage, setProjectFrontendLanguage] = useState(0)
    const [projectBackendLanguage, setProjectBackendLanguage] = useState(0)
    const [projectFrontendFramework, setProjectFrontendFramework] = useState(0)
    const [projectBackendFramework, setProjectBackendFramework] = useState(0)
    const [projectFrontendRepository, setProjectFrontendRepository] = useState("")
    const [projectBackendRepository, setProjectBackendRepository] = useState("")

    // Step 2 - States
    const [projectIsHosted, setProjectIsHosted] = useState("")
    const [projectHostUrl, setProjectHostUrl] = useState("")

    // Step 3 - States
    const [projectUsedTools, setProjectUsedTools] = useState(null)
    const [projectToolsArray, setProjectToolsArray] = useState([])
    const [toolsArray, setToolsArray] = useState([])

    // Step 4 - States
    const [formsErrors, setFormsErrors] = useState([])

    // Step 5 - States
    const [projectUsedBdd, setProjectUsedBdd] = useState(null)
    const [projectBdd, setProjectBdd] = useState("")

    useEffect(() => {
        dispatch(getLanguages())
        dispatch(getFrameworks())
        dispatch(getDatabases())
        dispatch(getTools())
    }, [])

    useEffect(() => {
        if (tools) {
            setToolsArray(tools)
        }
    }, [tools])

    // Forms States
    const [formSteps, setFormSteps] = useState([
        { current: true, correctlyFilled: false, viewed: true, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] }
    ])

    const [stepNumber, setStepNumber] = useState(0)

    // On Change Step
    useEffect(() => {
        const updateFormSteps = () => {
            const updatedFormSteps = formSteps.map((formStep, index) => {
                if (index === stepNumber) {
                    // The form turn viewed and current
                    return { ...formStep, current: true, viewed: true };
                } else {
                    return { ...formStep, current: false };
                }
            });
            setFormSteps(updatedFormSteps);

            handleVerifyAllErrors()
        };

        updateFormSteps();
    }, [stepNumber])

    const handleNextStep = () => {
        if (stepNumber >= 0 && stepNumber < 5) {
            setStepNumber(stepNumber + 1)
        }
    }

    const handleSelectFormForPoint = (step) => {
        if (formsErrors.length === 0 && formSteps[0].viewed && formSteps[1].viewed && formSteps[2].viewed && formSteps[3].viewed && formSteps[4].viewed) {
            formSteps[5].correctlyFilled = true
        } else {
            formSteps[5].correctlyFilled = false
        }
        setStepNumber(step)
    }

    // Verify if there're values in the input's and validate them
    const handleChangeFormInput = (step) => {
        // Step 0
        if (step === 0) {
            formSteps[step].errors = []
            let errors = 0

            // Name & Type & Description
            if (projectName.trim() !== "") {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "O nome é obrigatório!");
            } else if (projectName.trim() === "") {
                formSteps[step].errors.push("O nome é obrigatório!");
                errors += 1
            }

            if (projectType.trim() === "Web" || projectType.trim() === "Desktop" || projectType.trim() === "Mobile" || projectType.trim() === "EmbeddedProgramming") {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "O tipo é obrigatório!");
            } else if (projectType.trim() === "undefined") {
                formSteps[step].errors.push("O tipo é obrigatório!");
                errors += 1
            }

            if (projectDescription.trim() !== "") {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "A descrição é obrigatória!");
            } else if (projectDescription.trim() === "") {
                formSteps[step].errors.push("A descrição é obrigatória!");
                errors += 1
            }

            if (errors > 0) {
                formSteps[step].correctlyFilled = false
            } else {
                formSteps[step].correctlyFilled = true
            }
        }

        // Step 1
        if (step === 1) {
            formSteps[step].errors = []
            let errors = 0

            // Stack && Languages && Repository
            if (projectStack.trim() !== "") {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "A stack é obrigatória!");
            } else if (projectStack.trim() === "") {
                formSteps[step].errors.push("A stack é obrigatória!");
                errors += 1
            }

            if (projectStack.trim() === "Frontend" || projectStack.trim() === "Fullstack") {
                if (projectFrontendLanguage !== 0) {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "A linguagem do frontend é obrigatória!");
                } else if (projectFrontendLanguage === 0) {
                    formSteps[step].errors.push("A linguagem do frontend é obrigatória!");
                    errors += 1
                }

                if (projectFrontendRepository.trim() !== "") {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "O repositório do frontend é obrigatório!");
                } else if (projectFrontendRepository.trim() === "") {
                    formSteps[step].errors.push("O repositório do frontend é obrigatório!");
                    errors += 1
                }
            }

            if (projectStack.trim() === "Backend" || projectStack.trim() === "Fullstack") {
                if (projectBackendLanguage !== 0) {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "A linguagem do backend é obrigatória!");
                } else if (projectBackendLanguage === 0) {
                    formSteps[step].errors.push("A linguagem do backend é obrigatória!");
                    errors += 1
                }

                if (projectBackendRepository.trim() !== "") {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "O repositório do backend é obrigatório!");
                } else if (projectBackendRepository.trim() === "") {
                    formSteps[step].errors.push("O repositório do backend é obrigatório!");
                    errors += 1
                }
            }

            if (errors > 0) {
                formSteps[step].correctlyFilled = false
            } else {
                formSteps[step].correctlyFilled = true
            }
        }

        // Step 2
        if (step === 2) {
            formSteps[step].errors = []
            let errors = 0

            // IsHosted && HostUrl
            if (projectIsHosted.trim() !== "") {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "Responda: 'O projeto está hospedado?'");
            } else if (projectIsHosted.trim() === "") {
                formSteps[step].errors.push("Responda: 'O projeto está hospedado?'");
                errors += 1
            }

            if (projectIsHosted.trim() === "yes") {
                if (projectHostUrl.trim() !== "") {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "O endereço de hospedagem é obrigatório!");
                } else if (projectHostUrl.trim() === "") {
                    formSteps[step].errors.push("O endereço de hospedagem é obrigatório!");
                    errors += 1
                }
            }

            if (errors > 0) {
                formSteps[step].correctlyFilled = false
            } else {
                formSteps[step].correctlyFilled = true
            }
        }

        // Step 3
        if (step === 3) {
            formSteps[step].errors = []
            let errors = 0

            // UsedTools && ToolsArray
            if (projectUsedTools !== null) {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "Responda: 'Foi utilizada alguma ferramenta?'");
            } else if (projectUsedTools === null) {
                formSteps[step].errors.push("Responda: 'Foi utilizada alguma ferramenta?'");
                errors += 1
            }

            if (projectUsedTools === "true") {
                if (projectToolsArray.length > 0) {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "Quais ferramentas foram utilizadas?");
                } else if (projectToolsArray.length === 0) {
                    formSteps[step].errors.push("Quais ferramentas foram utilizadas?");
                    errors += 1
                }
            }

            if (errors > 0) {
                formSteps[step].correctlyFilled = false
            } else {
                formSteps[step].correctlyFilled = true
            }
        }

        // Step 4
        if (step === 4) {
            formSteps[step].errors = []
            let errors = 0

            // UsedTools && ToolsArray
            if (projectUsedBdd !== null) {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "Responda: 'Foi utilizada algum banco de dados?'");
            } else if (projectUsedBdd === null) {
                formSteps[step].errors.push("Responda: 'Foi utilizada algum banco de dados?'");
                errors += 1
            }

            if (projectUsedBdd === "true") {
                if (projectBdd.trim() !== "") {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "Qual banco de dados foi utilizado?");
                } else if (projectBdd.trim() === "") {
                    formSteps[step].errors.push("Qual banco de dados foi utilizado");
                    errors += 1
                }
            }

            if (errors > 0) {
                formSteps[step].correctlyFilled = false
            } else {
                formSteps[step].correctlyFilled = true
            }
        }
    }

    const verifyAllFormsInput = () => {
        handleChangeFormInput(0)
        handleChangeFormInput(1)
        handleChangeFormInput(2)
        handleChangeFormInput(3)
        handleChangeFormInput(4)
    }

    verifyAllFormsInput()

    // Step 0 - Verify Errors
    useEffect(() => {
        handleChangeFormInput(0)
    }, [projectName, projectDescription])

    // Step 1 - Verify Errors
    useEffect(() => {
        handleChangeFormInput(1)
    }, [projectStack, projectFrontendLanguage, projectFrontendRepository, projectBackendLanguage, projectBackendRepository])

    // Step 2 - Verify Errors
    useEffect(() => {
        handleChangeFormInput(2)
    }, [projectIsHosted, projectHostUrl])

    // Step 3 - Verify Errors
    useEffect(() => {
        handleChangeFormInput(3)
    }, [projectUsedTools, projectToolsArray])

    // Step 4 - Verify Errors
    useEffect(() => {
        handleChangeFormInput(4)
    }, [projectUsedBdd, projectBdd])

    const handleVerifyAllErrors = () => {
        let errorsNumber = 0
        let errorsMessages = []

        formSteps.map((step, index) => {
            errorsMessages.push(...step.errors)
            errorsNumber += step.errors.length
        })

        setFormsErrors(errorsMessages)
    }

    // Set input values in their states
    const handleSetProjecStack = (stack) => {
        setProjectStack(stack)
    }

    const handleSetProjecIsHosted = (res) => {
        setProjectIsHosted(res)
    }

    const handleSetProjecUsedTools = (res) => {
        setProjectUsedTools(res)
    }

    const handleSelectTool = (id) => {
        const updatedToolsArray = toolsArray.map(tool => {
            if (tool.id === id) {
                if (tool.selected === 'yes') {
                    return { ...tool, selected: 'no' }
                } else {
                    return { ...tool, selected: 'yes' }
                }
            } else {
                return tool;
            }
        })
        setToolsArray(updatedToolsArray);
    }

    useEffect(() => {
        const selectedToolsIds = toolsArray
            .filter(tool => tool.selected === 'yes')
            .map(tool => tool.id);
        setProjectToolsArray(selectedToolsIds);
    }, [toolsArray]);

    const handleSelectProjectBdd = (opt) => {
        if (opt.target.value !== "invalid") {
            setProjectBdd(opt.target.value)
        }
    }

    const handleSaveProject = () => {
        const project = {
            name: projectName,
            description: projectDescription,
            type: projectType,
            stack: projectStack,
            fLanguageId: projectFrontendLanguage,
            bLanguageId: projectBackendLanguage,
            fFrameworkId: projectFrontendFramework,
            bFrameworkId: projectBackendFramework,
            fRepository: projectFrontendRepository,
            bRepository: projectBackendRepository,
            isHosted: projectIsHosted === "no" ? false : true,
            URL: projectHostUrl,
            usedTools: projectUsedTools,
            toolsIdArray: projectToolsArray,
            usedDatabase: projectUsedBdd,
            databaseId: projectBdd,
        }

        console.log(project)

        dispatch(createProject(project))

        resetComponentMessage()
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formSections}>
                {stepNumber === 0 && (
                    <div className={styles.formStep}>
                        <div className={styles.title}>
                            <h1>Cadastrando um projeto</h1>
                        </div>

                        <label>
                            <p>Qual o nome do projeto?</p>
                            <input type="text" placeholder='Nome do projeto...' onChange={(e) => setProjectName(e.target.value)} value={projectName} />
                        </label>

                        <label>
                            <p>Qual a descrição do projeto?</p>
                            <textarea name="projectDescription" onChange={(e) => setProjectDescription(e.target.value)} defaultValue={projectDescription}></textarea>
                        </label>

                        <label>
                            <p>Qual o tipo do projeto?</p>
                            <select name="projectType" onChange={(e) => setProjectType(e.target.value)}>
                                <option value="undefined">Selecione o tipo</option>
                                <option value="Web">Web</option>
                                <option value="Desktop">Desktop</option>
                                <option value="Mobile">Mobile</option>
                                <option value="EmbeddedProgramming">Programação Embarcada</option>
                            </select>
                        </label>

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                            {formSteps[0].errors.length > 0 && (
                                <div className={styles.messages}>
                                    {formSteps[0].errors.map((error, index) => (
                                        <SystemStatusMessage type="error" msg={error} key={index} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {stepNumber === 1 && (
                    <div className={styles.formStep}>
                        <div className={styles.dataInputContainer}>
                            <p>Esse projeto é:</p>
                            <label htmlFor="Frontend">
                                <p>Frontend</p>
                                <input type="radio" name="projectStack" id="Frontend" value="Frontend" onChange={(e) => handleSetProjecStack(e.target.value)} checked={projectStack === "Frontend"} />
                            </label>
                            <label htmlFor="Backend">
                                <p>Backend</p>
                                <input type="radio" name="projectStack" id="Backend" value="Backend" onChange={(e) => handleSetProjecStack(e.target.value)} checked={projectStack === "Backend"} />
                            </label>
                            <label htmlFor="FullStack">
                                <p>Full Stack</p>
                                <input type="radio" name="projectStack" id="FullStack" value="Fullstack" onChange={(e) => handleSetProjecStack(e.target.value)} checked={projectStack === "Fullstack"} />
                            </label>
                        </div>

                        {projectStack && projectStack === "Frontend" && (
                            <>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Frontend</b>?</p>
                                    {!languageLoading && languages && languages.length > 0 && (
                                        <select name="frontLanguageId" onChange={(e) => setProjectFrontendLanguage(e.target.value)}>
                                            <option value="0">Selecione uma linguagem</option>
                                            {languages.map((language) => (
                                                <option value={language.id}>{language.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o framework utilizado para o <b>Frontend</b>?</p>
                                    {!frameworkLoading && frameworks && frameworks.length > 0 && (
                                        <select name="frontFrameworkId" onChange={(e) => setProjectFrontendFramework(e.target.value)}>
                                            <option value="0">Selecione um framework</option>
                                            {frameworks.map((framework) => (
                                                <option value={framework.id}>{framework.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Frontend</b>?</p>
                                    <input type="text" placeholder='Repositório frontend...' onChange={(e) => setProjectFrontendRepository(e.target.value)} value={projectFrontendRepository} />
                                </label>
                            </>
                        )}

                        {projectStack && projectStack === "Backend" && (
                            <>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Backend</b>?</p>
                                    {!languageLoading && languages && languages.length > 0 && (
                                        <select name="backLanguageId" onChange={(e) => setProjectBackendLanguage(e.target.value)} value={projectBackendLanguage}>
                                            <option value="0">Selecione uma linguagem</option>
                                            {languages.map((language) => (
                                                <option value={language.id}>{language.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o framework utilizado para o <b>Backend</b>?</p>
                                    {!frameworkLoading && frameworks && frameworks.length > 0 && (
                                        <select name="backFrameworkId" onChange={(e) => setProjectBackendFramework(e.target.value)}>
                                            <option value="0">Selecione um framework</option>
                                            {frameworks.map((framework) => (
                                                <option value={framework.id}>{framework.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Backend</b>?</p>
                                    <input type="text" placeholder='Repositório backend...' onChange={(e) => setProjectBackendRepository(e.target.value)} value={projectBackendRepository} />
                                </label>
                            </>
                        )}

                        {projectStack && projectStack === "Fullstack" && (
                            <>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Frontend</b>?</p>
                                    {!languageLoading && languages && languages.length > 0 && (
                                        <select name="frontLanguageId" onChange={(e) => setProjectFrontendLanguage(e.target.value)} value={projectFrontendLanguage}>
                                            <option value="0">Selecione uma linguagem</option>
                                            {languages.map((language) => (
                                                <option value={language.id}>{language.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o framework utilizado para o <b>Frontend</b>?</p>
                                    {!frameworkLoading && frameworks && frameworks.length > 0 && (
                                        <select name="frontFrameworkId" onChange={(e) => setProjectFrontendFramework(e.target.value)}>
                                            <option value="0">Selecione um framework</option>
                                            {frameworks.map((framework) => (
                                                <option value={framework.id}>{framework.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Frontend</b>?</p>
                                    <input type="text" placeholder='Repositório frontend...' onChange={(e) => setProjectFrontendRepository(e.target.value)} value={projectFrontendRepository} />
                                </label>
                                <hr />
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Backend</b>?</p>
                                    {!languageLoading && languages && languages.length > 0 && (
                                        <select name="backLanguageId" onChange={(e) => setProjectBackendLanguage(e.target.value)} value={projectBackendLanguage}>
                                            <option value="0">Selecione uma linguagem</option>
                                            {languages.map((language) => (
                                                <option value={language.id}>{language.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o framework utilizado para o <b>Backend</b>?</p>
                                    {!frameworkLoading && frameworks && frameworks.length > 0 && (
                                        <select name="backFrameworkId" onChange={(e) => setProjectBackendFramework(e.target.value)}>
                                            <option value="0">Selecione um framework</option>
                                            {frameworks.map((framework) => (
                                                <option value={framework.id}>{framework.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Backend</b>?</p>
                                    <input type="text" placeholder='Repositório backend...' onChange={(e) => setProjectBackendRepository(e.target.value)} value={projectBackendRepository} />
                                </label>
                            </>
                        )}

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                            {formSteps[1].errors.length > 0 && (
                                <div className={styles.messages}>
                                    {formSteps[1].errors.map((error, index) => (
                                        <SystemStatusMessage type="error" msg={error} key={index} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {stepNumber === 2 && (
                    <div className={styles.formStep}>
                        <div className={styles.dataInputContainer}>
                            <p>Esse projeto está hospedado?</p>
                            <label htmlFor="YesHosted">
                                <p>Sim</p>
                                <input type="radio" name="projectIsHosted" id="YesHosted" value="yes" onChange={(e) => handleSetProjecIsHosted(e.target.value)} checked={projectIsHosted === "yes"} />
                            </label>
                            <label htmlFor="NoHosted">
                                <p>Não</p>
                                <input type="radio" name="projectIsHosted" id="NoHosted" value="no" onChange={(e) => handleSetProjecIsHosted(e.target.value)} checked={projectIsHosted === "no"} />
                            </label>
                            <label htmlFor="SoonHosted">
                                <p>Estará em breve</p>
                                <input type="radio" name="projectIsHosted" id="SoonHosted" value="soon" onChange={(e) => handleSetProjecIsHosted(e.target.value)} checked={projectIsHosted === "soon"} />
                            </label>
                        </div>
                        {projectIsHosted && projectIsHosted === "yes" && (
                            <label>
                                <p>Qual o endereço de hospedagem?</p>
                                <input type="text" placeholder='Endereço hospedagem...' onChange={(e) => setProjectHostUrl(e.target.value)} value={projectHostUrl} />
                            </label>
                        )}

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                            {formSteps[2].errors.map((error, index) => (
                                <SystemStatusMessage type="error" msg={error} key={index} />
                            ))}
                        </div>
                    </div>
                )}

                {stepNumber === 3 && (
                    <div className={styles.formStep}>
                        <div className={styles.dataInputContainer}>
                            <p>Foram utilizadas ferramentas de desenvolvimento?</p>
                            <label htmlFor="YesTools">
                                <p>Sim</p>
                                <input type="radio" name="toolsWereUsed" id="YesTools" value={true} onChange={(e) => handleSetProjecUsedTools(e.target.value)} checked={projectUsedTools === "true"} />
                            </label>
                            <label htmlFor="NoTools">
                                <p>Não</p>
                                <input type="radio" name="toolsWereUsed" id="NoTools" value={false} onChange={(e) => handleSetProjecUsedTools(e.target.value)} checked={projectUsedTools === "false"} />
                            </label>
                        </div>
                        {projectUsedTools && projectUsedTools === "true" && (
                            <label>
                                <p>Quais ferramentas foram utilizadas?</p>
                                <div className={styles.toolsContainer}>
                                    {toolsArray && toolsArray.length > 0 && toolsArray.map((tool) => (
                                        <div className={`${styles.toolButton} ${tool.selected === 'yes' ? styles.selected : ''}`} onClick={() => handleSelectTool(tool.id)}>{tool.name}</div>
                                    ))}
                                </div>
                                {!toolLoading && tools && tools.length === 0 && (
                                    <h5>Nenhuma ferramenta cadastrada até o momento!</h5>
                                )}
                            </label>
                        )}

                        {/* Aqui */}

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                            {formSteps[3].errors.map((error, index) => (
                                <SystemStatusMessage type="error" msg={error} key={index} />
                            ))}
                        </div>
                    </div>
                )}

                {stepNumber === 4 && (
                    <div className={styles.formStep}>
                        <div className={styles.dataInputContainer}>
                            <p>Foi utilizado algum banco de dados?</p>
                            <label htmlFor="YesBdd">
                                <p>Sim</p>
                                <input type="radio" name="bddWasUsed" id="YesBdd" value={true} onChange={(e) => setProjectUsedBdd(e.target.value)} checked={projectUsedBdd === "true"} />
                            </label>
                            <label htmlFor="NoBdd">
                                <p>Não</p>
                                <input type="radio" name="bddWasUsed" id="NoBdd" value={false} onChange={(e) => setProjectUsedBdd(e.target.value)} checked={projectUsedBdd === "false"} />
                            </label>
                        </div>
                        {projectUsedBdd && projectUsedBdd === "true" && (
                            <label>
                                <p>Qual banco foi usado?</p>
                                {!databaseLoading && databases && databases.length > 0 && (
                                    <select name="frontLanguageId" onChange={(e) => setProjectBdd(e.target.value)}>
                                        <option value="0">Selecione um banco de dados</option>
                                        {databases.map((db) => (
                                            <option value={db.id}>{db.name}</option>
                                        ))}
                                    </select>
                                )}
                                {!databaseLoading && databases && databases.length === 0 && (
                                    <h5>Nenhum banco de dados cadastrado até o momento!</h5>
                                )}
                            </label>
                        )}

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                            {formSteps[4].errors.map((error, index) => (
                                <SystemStatusMessage type="error" msg={error} key={index} />
                            ))}
                        </div>
                    </div>
                )}

                {stepNumber === 5 && (
                    <div className={styles.formStep}>
                        <div className={styles.dataContainer}>
                            <h2>Nome do projeto:</h2>
                            <p>{projectName.trim() !== "" ? projectName : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                        </div>
                        <div className={styles.dataContainer}>
                            <h2>Tipo de projeto:</h2>
                            <p>{projectType.trim() !== "undefined" ? projectType : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                        </div>
                        <div className={styles.dataContainer}>
                            <h2>Descrição do projeto:</h2>
                            <p>{projectDescription.trim() !== "" ? projectDescription : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                        </div>
                        <div className={styles.dataContainer}>
                            <h2>Stack do projeto:</h2>
                            <p>{projectStack.trim() !== "" ? projectStack : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                        </div>

                        {projectStack === "Frontend" || projectStack == "Fullstack" ? (
                            <>
                                <div className={styles.dataContainer}>
                                    <h2>Linguagem usada no frontend:</h2>
                                    <p>{projectFrontendLanguage !== 0 ? projectFrontendLanguage : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                                </div>
                                <div className={styles.dataContainer}>
                                    <h2>Repositório do frontend:</h2>
                                    <p>{projectFrontendRepository !== 0 ? projectFrontendRepository : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                                </div>
                            </>
                        ) : ''}
                        {projectStack === "Backend" || projectStack == "Fullstack" ? (
                            <>
                                <div className={styles.dataContainer}>
                                    <h2>Linguagem usada no backend:</h2>
                                    <p>{projectBackendLanguage.trim() !== "" ? projectBackendLanguage : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                                </div>
                                <div className={styles.dataContainer}>
                                    <h2>Repositório do backend:</h2>
                                    <p>{projectBackendRepository.trim() !== "" ? projectBackendRepository : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                                </div>
                            </>
                        ) : ''}

                        <div className={styles.dataContainer}>
                            <h2>O projeto está hospedado:</h2>
                            {!projectIsHosted || projectIsHosted.trim() === "" ? (
                                <p><span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span></p>
                            ) : ''}
                            {projectIsHosted && projectIsHosted.trim() === "yes" && (
                                <p>Sim</p>
                            )}
                            {projectIsHosted && projectIsHosted.trim() === "no" && (
                                <p>Não.</p>
                            )}
                            {projectIsHosted && projectIsHosted.trim() === "soon" && (
                                <p>Em breve.</p>
                            )}
                        </div>

                        {projectIsHosted && projectIsHosted.trim() === "yes" && (
                            <div className={styles.dataContainer}>
                                <h2>URL do projeto hospedado:</h2>
                                <p>{projectHostUrl.trim() !== "" ? projectHostUrl : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                            </div>
                        )}

                        <div className={styles.dataContainer}>
                            <h2>Usou ferramentas de desenvolvimento:</h2>
                            {!projectUsedTools || projectUsedTools === null ? (
                                <p><span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span></p>
                            ) : ''}
                            {projectUsedTools && projectUsedTools.trim() === "true" && (
                                <p>Sim</p>
                            )}
                            {projectUsedTools && projectUsedTools.trim() === "false" && (
                                <p>Não.</p>
                            )}
                        </div>

                        {projectUsedTools && projectUsedTools === "true" ? (
                            <div className={styles.dataContainer}>
                                <h2>Ferramentas de desenvolvimento utilizadas:</h2>
                                <ul>
                                    {toolsArray
                                        .filter(tool => tool.selected === 'yes')
                                        .map(tool => (
                                            <p key={tool.id}>{tool.name}</p>
                                        ))
                                    }
                                </ul>
                            </div>
                        ) : ''}

                        <div className={styles.footer}>
                            {formsErrors && formsErrors.length === 0 ? (
                                <>
                                    {!loadingProject && (
                                        <button className={styles.nextStep} onClick={() => handleSaveProject()}><p>Confirmar e Cadastrar</p><MdOutlineNavigateNext /></button>
                                    )}
                                    {loadingProject && (
                                        <button className={`${styles.nextStep} ${styles.disabled}`} disabled><p>Cadastrando...</p><MdOutlineNavigateNext /></button>
                                    )}
                                </>
                            ) : (
                                <button className={`${styles.nextStep} ${styles.disabled}`} disabled><p>Confirmar e Cadastrar</p><MdOutlineNavigateNext /></button>
                            )}
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                            <div className={styles.messages}>
                                {formsErrors && formsErrors.length > 0 && (
                                    <>
                                        <div className={styles.auxErrorMessage}>
                                            <p className={styles.title}>Há campos a serem preenchidos:</p>
                                            {formsErrors && formsErrors.map((error, index) => (
                                                <SystemStatusMessage type="error" msg={error} key={index} />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.stepsContainer}>
                    {formSteps && formSteps.map((step, index) => {
                        let pointClassName = ` ${styles.point} `;

                        if (step.current || step.correctlyFilled) {
                            pointClassName += ` ${styles.correctlyFilled} `;
                        }

                        if (step.viewed && !step.correctlyFilled) {
                            pointClassName += ` ${styles.error} `;
                        }

                        if (step.current) {
                            pointClassName += ` ${styles.current} `;
                        }

                        return (
                            <p key={index}>
                                <div className={pointClassName} onClick={() => handleSelectFormForPoint(index)}></div>
                            </p>
                        );
                    })}
                </div>
            </div>
        </div >
    )
}

export default NewProject