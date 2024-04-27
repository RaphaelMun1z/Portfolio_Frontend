import { api, requestConfig } from '../utils/config'

// Create social media
const createSocialMedia = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/social-media", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get social media
const getSocialMedia = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/social-media", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const socialMediaService = {
    createSocialMedia,
    getSocialMedia,
}

export default socialMediaService