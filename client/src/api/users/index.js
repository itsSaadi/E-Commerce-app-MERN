import axios from "axios"
import { BASE_API_URL } from "../../config"


export const getUsers = async ({ email, password }) => {
    const response = await axios.post(`${BASE_API_URL}/login`, { email, password })
    return response.data
}

export const createUsers = async ({ username, email, password }) => {
    const response = await axios.post(`${BASE_API_URL}/signup`, { username, email, password })
    return response.data

}