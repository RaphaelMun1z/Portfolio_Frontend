import { api, requestConfig } from '../utils/config'

// Create a database
const createDatabase = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/databases", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get databases
const getDatabases = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/databases", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const databaseService = {
    createDatabase,
    getDatabases,
}

export default databaseService