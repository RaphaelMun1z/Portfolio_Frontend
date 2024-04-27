import { api, requestConfig } from '../utils/config'

// Create a contact form
const createContactForm = async (data) => {
    const config = requestConfig("POST", data, false)

    try {
        const res = await fetch(api + "/contact-forms", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get contact forms
const getContactForms = async (token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/contact-forms", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const contactService = {
    createContactForm,
    getContactForms,
}

export default contactService