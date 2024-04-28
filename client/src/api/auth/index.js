import axios from "axios"
import { BASE_API_URL } from "../../config"


export const forgetPassword = async ({email}) => {
    const response=await axios.post(`${BASE_API_URL}/forget`, {email})
    return response.data
}