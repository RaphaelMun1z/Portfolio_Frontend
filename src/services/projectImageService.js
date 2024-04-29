import { api, requestConfig } from '../utils/config'

// Create project image
const createProjectImage = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/projects-image", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get project images by id
const getProjectImagesById = async (id) => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/projects-image/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const projectImageService = {
    createProjectImage,
    getProjectImagesById,
}

export default projectImageService