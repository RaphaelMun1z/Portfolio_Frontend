import { api, requestConfig } from '../utils/config'

// Create a form subject
const createFormSubject = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/form-subjects", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get form subjects
const getFormSubjects = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/form-subjects", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const formSubjectService = {
    createFormSubject,
    getFormSubjects,
}

export default formSubjectService