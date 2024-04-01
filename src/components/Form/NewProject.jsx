import styles from './Form.module.scss'

import { MdOutlineNavigateNext } from "react-icons/md";

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

import { useEffect, useState } from 'react'

const NewProject = () => {
    // Step 0
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")

    // Step 1
    const [projectStack, setProjectStack] = useState("")
    const [projectFrontendLanguage, setProjectFrontendLanguage] = useState("")
    const [projectBackendLanguage, setProjectBackendLanguage] = useState("")
    const [projectFrontendRepository, setProjectFrontendRepository] = useState("")
    const [projectBackendRepository, setProjectBackendRepository] = useState("")

    // Step 2
    // Step 3
    // Step 4

    const [projectIsHosted, setProjectIsHosted] = useState("")
    const [projectUsedTools, setProjectUsedTools] = useState(false)

    const [formSteps, setFormSteps] = useState([
        { current: true, correctlyFilled: false, viewed: true, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] },
        { current: false, correctlyFilled: false, viewed: false, errors: [] }
    ])

    const [stepNumber, setStepNumber] = useState(0)

    useEffect(() => {
        const updatedFormSteps = formSteps.map((formStep, index) => {
            if (index === stepNumber) {
                return { ...formStep, current: true, viewed: true };
            } else {
                return { ...formStep, current: false };
            }
        });

        setFormSteps(updatedFormSteps);
    }, [stepNumber])

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
    }

    const verifyAllFormsInput = () => {
        handleChangeFormInput(0)
        handleChangeFormInput(1)
    }

    verifyAllFormsInput()

    useEffect(() => {
        handleChangeFormInput(0)
    }, [projectName, projectDescription])

    useEffect(() => {
        handleChangeFormInput(1)
    }, [projectStack, projectFrontendLanguage, projectFrontendRepository, projectBackendLanguage, projectBackendRepository])

    const changeFormStep = (step) => {
        setStepNumber(step)

        const updatedFormSteps = formSteps.map((formStep, index) => {
            if (index === step) {
                return { ...formStep, current: true };
            } else {
                return { ...formStep, current: false };
            }
        });
        setFormSteps(updatedFormSteps);
    };

    const handleSetProjecStack = (stack) => {
        setProjectStack(stack)
    }

    const handleSetProjecIsHosted = (res) => {
        setProjectIsHosted(res)
    }

    const handleSetProjecUsedTools = (res) => {
        setProjectUsedTools(res)
    }

    const handleNextStep = () => {
        if (stepNumber >= 0 && stepNumber < 4) {
            changeFormStep(stepNumber + 1);
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
                            <textarea name="projectDescription" onChange={(e) => setProjectDescription(e.target.value)}>{projectDescription}</textarea>
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

                {/* <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg="O nome da linguagem é obrigatório!" />
                                <SystemStatusMessage type="success" msg="Linguagem cadastrada com sucesso!" />
                            </div> */}

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
                                <input type="radio" name="projectIsHosted" id="YesHosted" value="yes" onChange={(e) => handleSetProjecIsHosted(e.target.value)} />
                            </label>
                            <label htmlFor="NoHosted">
                                <p>Não</p>
                                <input type="radio" name="projectIsHosted" id="NoHosted" value="no" onChange={(e) => handleSetProjecIsHosted(e.target.value)} />
                            </label>
                            <label htmlFor="SoonHosted">
                                <p>Estará em breve</p>
                                <input type="radio" name="projectIsHosted" id="SoonHosted" value="soon" onChange={(e) => handleSetProjecIsHosted(e.target.value)} />
                            </label>
                        </div>
                        {projectIsHosted && projectIsHosted === "yes" && (
                            <label>
                                <p>Qual o endereço de hospedagem?</p>
                                <input type="text" placeholder='Endereço hospedagem...' />
                            </label>
                        )}

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                        </div>
                    </div>
                )}

                {stepNumber === 3 && (
                    <div className={styles.formStep}>
                        <div className={styles.dataInputContainer}>
                            <p>Foram utilizadas ferramentas de desenvolvimento?</p>
                            <label htmlFor="YesTools">
                                <p>Sim</p>
                                <input type="radio" name="toolsWereUsed" id="YesTools" value={true} onChange={(e) => handleSetProjecUsedTools(e.target.value)} />
                            </label>
                            <label htmlFor="NoTools">
                                <p>Não</p>
                                <input type="radio" name="toolsWereUsed" id="NoTools" value={false} onChange={(e) => handleSetProjecUsedTools(e.target.value)} />
                            </label>
                        </div>
                        {projectUsedTools && projectUsedTools === "true" && (
                            <label>
                                <p>Quais ferramentas foram utilizadas?</p>
                                <select name="tools">
                                    <option value="docker">Docker</option>
                                    <option value="postman">Postman</option>
                                    <option value="other">Outras</option>
                                </select>
                            </label>
                        )}

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                        </div>
                    </div>
                )}

                {stepNumber === 4 && (
                    <div className={styles.formStep}>
                        <p>Etapa de verificação</p>
                        <button className={styles.submit}>Salvar</button>
                    </div>
                )}

                <div className={styles.stepsContainer}>
                    {formSteps.map((step, index) => {
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
                                <div className={pointClassName} onClick={() => changeFormStep(index)}></div>
                            </p>
                        );
                    })}
                </div>
            </div>
        </div >
    )
}

export default NewProject