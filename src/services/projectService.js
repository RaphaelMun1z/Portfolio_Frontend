import { api, requestConfig } from '../utils/config'

// Create project
const createProject = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/projects", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get projects
const getProjects = async (filters) => {
    const queryParams = new URLSearchParams(filters).toString();
    const config = requestConfig("GET", null)

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
    createProject,
    getProjects,
    getProjectById,
}

export default projectService