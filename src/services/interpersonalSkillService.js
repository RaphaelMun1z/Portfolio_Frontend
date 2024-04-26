import { api, requestConfig } from '../utils/config'

// Create a interpersonal skill
const createInterpersonalSkill = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/interpersonal-skills", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get interpersonal skills
const getInterpersonalSkills = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/interpersonal-skills", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const interpersonalSkillService = {
    createInterpersonalSkill,
    getInterpersonalSkills,
}

export default interpersonalSkillService