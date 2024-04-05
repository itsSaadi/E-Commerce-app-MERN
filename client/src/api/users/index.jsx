import axios from "axios"
import { BASE_API_URL } from "../../config"


export const getUsers = () => {
    return axios.get(`${BASE_API_URL}`)
}

export const createUsers = async (
    { username, email, password }
) => {
    const response = await axios.post(`${BASE_API_URL}/createuser`, { username, email, password })
    return response.data
}