import { api, requestConfig } from '../utils/config'

// Get projects
const getProjects = async (token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/projects", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const projectService = {
    getProjects,
}

export default projectService