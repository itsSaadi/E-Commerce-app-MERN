import dotenv from 'dotenv'
import { connectDB } from './database/config.js'
import { app } from './app/app.js'

dotenv.config()
const port = process.env.PORT || 4000

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port} port`)
    }
    )
}).catch((error) => {
    console.log(`Error : ${error}`)
})