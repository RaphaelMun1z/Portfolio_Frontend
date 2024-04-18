import { api, requestConfig } from '../utils/config'

// Get languages
const getLanguages = async (_, token) => {
    const config = requestConfig("GET", null, token)

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
    getLanguages,
}

export default languageService