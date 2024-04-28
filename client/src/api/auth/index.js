import axios from "axios"
import { BASE_API_URL } from "../../config"


export const forgetPassword = async ({ email }) => {

    try {
        const response = await axios.post(`${BASE_API_URL}/forget`, { email })
        return response.data
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}




export const resetPassword = async ({ id, password }) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/reset/${id}`, { password })
        return response.data
    } catch (error) {
        console.log(`Error : ${error}`)
    }

}