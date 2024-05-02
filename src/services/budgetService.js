import { api, requestConfig } from '../utils/config'

// Create a budget
const createBudget = async (data, token) => {
    const config = requestConfig("POST", data, token, false)

    try {
        const res = await fetch(api + "/budgets", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

// Get budgets
const getBudgets = async (token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/budgets", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const budgetService = {
    createBudget,
    getBudgets,
}

export default budgetService