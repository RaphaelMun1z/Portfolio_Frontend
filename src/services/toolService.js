import { api, requestConfig } from '../utils/config'

// Create a tool
const createTool = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/tools", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get tools
const getTools = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/tools", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get tool by id
const getToolById = async (id) => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/tools/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const toolService = {
    createTool,
    getTools,
    getToolById,
}

export default toolService