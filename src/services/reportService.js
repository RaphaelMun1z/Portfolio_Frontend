import { api, requestConfig } from '../utils/config'

// Create a report
const createReport = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/reports", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get reports
const getReports = async (token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/reports", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Delete a report
const deleteReport = async (id, token) => {
    const config = requestConfig("DELETE", null, token)

    try {
        const res = await fetch(api + "/reports/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const reportService = {
    createReport,
    getReports,
    deleteReport,
}

export default reportService