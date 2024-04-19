import { api, requestConfig } from '../utils/config'

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
    getDatabases,
}

export default databaseService