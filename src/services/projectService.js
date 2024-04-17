import { api, requestConfig } from '../utils/config'

// Get projects
const getProjects = async (token, filters) => {
    const queryParams = new URLSearchParams(filters).toString();
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/projects?" + queryParams, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get project by id
const getProjectById = async (id, token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/projects/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const projectService = {
    getProjects,
    getProjectById,
}

export default projectService