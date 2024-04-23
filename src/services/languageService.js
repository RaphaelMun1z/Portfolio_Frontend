import { api, requestConfig } from '../utils/config'

// Create a language
const createLanguage = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/languages", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get languages
const getLanguages = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/languages", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const languageService = {
    createLanguage,
    getLanguages,
}

export default languageService