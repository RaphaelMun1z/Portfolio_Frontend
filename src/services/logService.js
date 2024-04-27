import { api, requestConfig } from '../utils/config'

// Create a log
const createLog = async (data) => {
    const config = requestConfig("POST", data, false)

    try {
        const res = await fetch(api + "/logs", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get logs
const getLogs = async (token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/logs", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const logService = {
    createLog,
    getLogs,
}

export default logService