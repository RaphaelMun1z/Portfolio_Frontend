import { api, requestConfig } from '../utils/config'

// Get databases
const getDatabases = async (_, token) => {
    const config = requestConfig("GET", null, token)

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
    getDatabases,
}

export default databaseService