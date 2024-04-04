import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'


export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Database Connected !! Host : ${connection.connection.port}`)
    } catch (error) {
        console.log(`Database Connection Failed ${error}`)
    }
}

