import styles from './Form.module.scss'

import { MdOutlineNavigateNext } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

import { useEffect, useState } from 'react'

const NewProject = () => {
    // Step 0 - States
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")

    // Step 1 - States
    const [projectStack, setProjectStack] = useState("")
    const [projectFrontendLanguage, setProjectFrontendLanguage] = useState("")
    const [projectBackendLanguage, setProjectBackendLanguage] = useState("")
    const [projectFrontendRepository, setProjectFrontendRepository] = useState("")
    const [projectBackendRepository, setProjectBackendRepository] = useState("")

    // Step 2 - States
    const [projectIsHosted, setProjectIsHosted] = useState("")
    const [projectHostUrl, setProjectHostUrl] = useState("")

    // Step 3 - States
    const [projectUsedTools, setProjectUsedTools] = useState(null)
    const [projectToolsArray, setProjectToolsArray] = useState([])

    // Step 4 - States
    const [formsErrors, setFormsErrors] = useState([])

    // Forms States
    const [formSteps, setFormSteps] = useState([
        { current: true, correctlyFilled: false, viewed: true, errors: [] },
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
        if (stepNumber >= 0 && stepNumber < 4) {
            setStepNumber(stepNumber + 1)
        }
    }

    const handleSelectFormForPoint = (step) => {
        if (formsErrors.length === 0 && formSteps[0].viewed && formSteps[1].viewed && formSteps[2].viewed && formSteps[3].viewed) {
            formSteps[4].correctlyFilled = true
        } else {
            formSteps[4].correctlyFilled = false
        }
        setStepNumber(step)
    }

    // Verify if there're values in the input's and validate them
    const handleChangeFormInput = (step) => {
        // Step 0
        if (step === 0) {
            formSteps[step].errors = []
            let errors = 0

            // Name & Description
            if (projectName.trim() !== "") {
                formSteps[step].errors = formSteps[step].errors.filter(error => error !== "O nome é obrigatório!");
            } else if (projectName.trim() === "") {
                formSteps[step].errors.push("O nome é obrigatório!");
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
                if (projectFrontendLanguage.trim() !== "") {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "A linguagem do frontend é obrigatória!");
                } else if (projectFrontendLanguage.trim() === "") {
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
                if (projectBackendLanguage.trim() !== "") {
                    formSteps[step].errors = formSteps[step].errors.filter(error => error !== "A linguagem do backend é obrigatória!");
                } else if (projectBackendLanguage.trim() === "") {
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
    }

    const verifyAllFormsInput = () => {
        handleChangeFormInput(0)
        handleChangeFormInput(1)
        handleChangeFormInput(2)
        handleChangeFormInput(3)
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

    const handleSelectProjectTool = (opt) => {
        if (projectToolsArray.includes(opt.target.value)) {
        } else if (opt.target.value !== "invalid") {
            projectToolsArray.push(opt.target.value)
        }
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
                                    <input type="text" placeholder='Nome da linguagem utilizada no front...' onChange={(e) => setProjectFrontendLanguage(e.target.value)} value={projectFrontendLanguage} />
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
                                    <input type="text" placeholder='Nome da linguagem utilizada no back...' onChange={(e) => setProjectBackendLanguage(e.target.value)} value={projectBackendLanguage} />
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
                                    <input type="text" placeholder='Nome da linguagem utilizada no front...' onChange={(e) => setProjectFrontendLanguage(e.target.value)} value={projectFrontendLanguage} />
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Frontend</b>?</p>
                                    <input type="text" placeholder='Repositório frontend...' onChange={(e) => setProjectFrontendRepository(e.target.value)} value={projectFrontendRepository} />
                                </label>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Backend</b>?</p>
                                    <input type="text" placeholder='Nome da linguagem utilizada no back...' onChange={(e) => setProjectBackendLanguage(e.target.value)} value={projectBackendLanguage} />
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
                                <select name="tools" onChange={(e) => handleSelectProjectTool(e)}>
                                    <option value="invalid">Selecione</option>
                                    <option value="docker">Docker</option>
                                    <option value="postman">Postman</option>
                                    <option value="other">Outras</option>
                                </select>
                            </label>
                        )}

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
                        <div className={styles.dataContainer}>
                            <h2>Nome do projeto:</h2>
                            <p>{projectName.trim() !== "" ? projectName : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
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
                                    <p>{projectFrontendLanguage.trim() !== "" ? projectFrontendLanguage : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
                                </div>
                                <div className={styles.dataContainer}>
                                    <h2>Repositório do frontend:</h2>
                                    <p>{projectFrontendRepository.trim() !== "" ? projectFrontendRepository : <span className={styles.notDefinedYet}><FiAlertTriangle />Ainda não definido.</span>}</p>
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
                                    <li>teste</li>
                                    <li>teste</li>
                                    <li>teste</li>
                                </ul>
                            </div>
                        ) : ''}

                        <div className={styles.footer}>
                            {formsErrors && formsErrors.length === 0 ? (
                                <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Confirmar e Cadastrar</p><MdOutlineNavigateNext /></button>
                            ) : (
                                <button className={`${styles.nextStep} ${styles.disabled}`} disabled onClick={() => handleNextStep()}><p>Confirmar e Cadastrar</p><MdOutlineNavigateNext /></button>
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