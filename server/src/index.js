import dotenv from 'dotenv'
import { connectDB } from './database/config.js'
import { app } from './app/app.js'
import { userRotues } from './routes/users.routes.js'
import { productRoutes } from './routes/products.routes.js'
import { authRoutes } from './routes/auth.routes.js'

dotenv.config()
const port = process.env.PORT || 4000

//Routes
app.use('/api/v1', userRotues)
app.use('/api/v1', productRoutes)
app.use('/api/v1/auth', authRoutes)
//Routes


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port} port`)
    }
    )
}).catch((error) => {
    console.log(`Error : ${error}`)
})