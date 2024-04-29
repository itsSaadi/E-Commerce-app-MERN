import axios from "axios"
import { BASE_API_URL } from "../../config"


export const getUsers = ({ email, password }) => {
    return axios.post(`${BASE_API_URL}/login`, { email, password })
}

export const createUsers = async ({ username, email, password }) => {
    await axios.post(`${BASE_API_URL}/signup`, { username, email, password })
}