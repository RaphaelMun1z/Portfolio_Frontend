import styles from './Form.module.scss'

import { MdOutlineNavigateNext } from "react-icons/md";

import { Link } from 'react-router-dom'
import SystemStatusMessage from './SystemStatusMessage'

import { useEffect, useState } from 'react'

const NewProject = () => {
    const [projectStack, setProjectStack] = useState("")
    const [projectIsHosted, setProjectIsHosted] = useState("")
    const [projectUsedTools, setProjectUsedTools] = useState(false)

    const [formSteps, setFormSteps] = useState([
        { current: true, correctlyFilled: false, viewed: true },
        { current: false, correctlyFilled: false, viewed: false },
        { current: false, correctlyFilled: false, viewed: false },
        { current: false, correctlyFilled: false, viewed: false },
        { current: false, correctlyFilled: false, viewed: false }
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
                            <input type="text" placeholder='Nome do projeto...' />
                        </label>

                        <label>
                            <p>Qual a descrição do projeto?</p>
                            <textarea name="projectDescription"></textarea>
                        </label>

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
                            <div className={styles.messages}>
                                <SystemStatusMessage type="error" msg="O nome da linguagem é obrigatório!" />
                                <SystemStatusMessage type="success" msg="Linguagem cadastrada com sucesso!" />
                            </div>
                        </div>
                    </div>
                )}

                {stepNumber === 1 && (
                    <div className={styles.formStep}>
                        <div className={styles.dataInputContainer}>
                            <p>Esse projeto é:</p>
                            <label htmlFor="Frontend">
                                <p>Frontend</p>
                                <input type="radio" name="projectStack" id="Frontend" value="Frontend" onChange={(e) => handleSetProjecStack(e.target.value)} />
                            </label>
                            <label htmlFor="Backend">
                                <p>Backend</p>
                                <input type="radio" name="projectStack" id="Backend" value="Backend" onChange={(e) => handleSetProjecStack(e.target.value)} />
                            </label>
                            <label htmlFor="FullStack">
                                <p>Full Stack</p>
                                <input type="radio" name="projectStack" id="FullStack" value="Fullstack" onChange={(e) => handleSetProjecStack(e.target.value)} />
                            </label>
                        </div>

                        {projectStack && projectStack === "Frontend" && (
                            <>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Frontend</b>?</p>
                                    <input type="text" placeholder='Nome da linguagem utilizada no front...' />
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Frontend</b>?</p>
                                    <input type="text" placeholder='Repositório frontend...' />
                                </label>
                            </>
                        )}

                        {projectStack && projectStack === "Backend" && (
                            <>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Backend</b>?</p>
                                    <input type="text" placeholder='Nome da linguagem utilizada no back...' />
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Backend</b>?</p>
                                    <input type="text" placeholder='Repositório backend...' />
                                </label>
                            </>
                        )}

                        {projectStack && projectStack === "Fullstack" && (
                            <>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Frontend</b>?</p>
                                    <input type="text" placeholder='Nome da linguagem utilizada no front...' />
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Frontend</b>?</p>
                                    <input type="text" placeholder='Repositório frontend...' />
                                </label>
                                <label>
                                    <p>Qual a linguagem utilizada para o <b>Backend</b>?</p>
                                    <input type="text" placeholder='Nome da linguagem utilizada no back...' />
                                </label>
                                <label>
                                    <p>Qual o repositório do <b>Backend</b>?</p>
                                    <input type="text" placeholder='Repositório backend...' />
                                </label>
                            </>
                        )}

                        <div className={styles.footer}>
                            <button className={styles.nextStep} onClick={() => handleNextStep()}><p>Avançar</p><MdOutlineNavigateNext /></button>
                            <Link to="/adm/painel" className={styles.cancel}>Cancelar</Link>
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
        </div>
    )
}

export default NewProject