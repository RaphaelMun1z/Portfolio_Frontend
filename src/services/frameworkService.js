import { api, requestConfig } from '../utils/config'

// Get frameworks
const getFrameworks = async (_, token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/frameworks", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const frameworkService = {
    getFrameworks,
}

export default frameworkService