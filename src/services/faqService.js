import { api, requestConfig } from '../utils/config'

// Create a faq
const createFaq = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/faqs", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get faqs
const getFaqs = async () => {
    const config = requestConfig("GET", null)

    try {
        const res = await fetch(api + "/faqs", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const faqService = {
    createFaq,
    getFaqs,
}

export default faqService