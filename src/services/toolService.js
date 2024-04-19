import { api, requestConfig } from '../utils/config'

// Get tools
const getTools = async (_, token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/tools", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const toolService = {
    getTools,
}

export default toolService