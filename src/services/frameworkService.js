import { api, requestConfig } from '../utils/config'

// Create a framework
const createFramework = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/frameworks", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get frameworks
const getFrameworks = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/frameworks", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get framework by id
const getFrameworkById = async (id) => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/frameworks/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Delete a framework
const deleteFramework = async (id, token) => {
    const config = requestConfig("DELETE", null, token)

    try {
        const res = await fetch(api + "/frameworks/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const frameworkService = {
    createFramework,
    getFrameworks,
    getFrameworkById,
    deleteFramework,
}

export default frameworkService