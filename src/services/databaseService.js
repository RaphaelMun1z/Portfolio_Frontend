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

// Get database by id
const getDatabaseById = async (id) => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/databases/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

            console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
}

// Delete a database
const deleteDatabase = async (id, token) => {
    const config = requestConfig("DELETE", null, token)

    try {
        const res = await fetch(api + "/databases/" + id, config)
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
    getDatabaseById,
    deleteDatabase,
}

export default databaseService