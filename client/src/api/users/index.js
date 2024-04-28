import axios from "axios"
import { BASE_API_URL } from "../../config"


export const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_API_URL}/users`)
        return response.data
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}

export const createUsers = async ({ username, email, password }) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/createuser`, { username, email, password })
        return response.data
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}