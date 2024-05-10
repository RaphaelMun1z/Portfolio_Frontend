import { api, requestConfig } from '../utils/config'

// Cookie
import cookie from 'js-cookie'

const login = async (data) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/adm/login", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const logout = () => {
    cookie.remove("user")
}

const authService = {
    login,
    logout,
}

export default authService