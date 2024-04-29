import styles from './TechSinglePage.module.scss'

// Hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useIcon } from '../hooks/useIcon'

// Redux
import { getLanguageById } from '../slices/languageSlice'
import { getFrameworkById } from '../slices/frameworkSlice'
import { getToolById } from '../slices/toolSlice'

const TechSinglePage = ({ type }) => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [proficiency, setProficiency] = useState(null)

    const { id } = useParams()

    const dispatch = useDispatch()

    const { language, loading: languageLoading } = useSelector((state) => state.language)
    const { framework, loading: frameworkLoading } = useSelector((state) => state.framework)
    const { tool, loading: toolLoading } = useSelector((state) => state.tool)

    useEffect(() => {
        if (type) {
            switch (type) {
                case "language":
                    dispatch(getLanguageById(id))
                    break;
                case "framework":
                    dispatch(getFrameworkById(id))
                    break;
                case "tool":
                    dispatch(getToolById(id))
                    break;
            }
        }
    }, [type])

    useEffect(() => {
        if (language) {
            setLoading(languageLoading)
            setName(language.name)
            setProficiency(language.proficiency)
        }
    }, [language])

    useEffect(() => {
        if (framework) {
            setLoading(frameworkLoading)
            setName(framework.name)
            setProficiency(framework.proficiency)
        }
    }, [framework])

    useEffect(() => {
        if (tool) {
            setLoading(toolLoading)
            setName(tool.name)
            setProficiency(tool.proficiency)
        }
    }, [tool])

    return (
        <section className={styles.skillContainer}>
            {name !== "" && proficiency !== null && (
                <div className={styles.content}>
                    <div className={styles.skill}>
                        <div className={styles.loader} style={{ width: `${proficiency}%` }}>
                            <p>{proficiency}%</p>
                        </div>
                        <div className={styles.insideSkill}>
                            {useIcon(name)}
                            <h2>{name}</h2>
                        </div>
                    </div>
                </div>
            )}
            {!loading && !name && !proficiency && (
                <p className={styles.noData}>Tecnologia inexistente!</p>
            )}
        </section>
    )
}

export default TechSinglePage