import express from 'express'
import authRoute from './ROUTES/auth.routes.js'
import userRouter from './ROUTES/user.routes.js'
import subsRouter from './ROUTES/subscription.routes.js'
import connectToDatabase from './DATABASE/mongodb.js'
import { PORT } from './config/env.js'
import errorMiddleware from './MIDDLEWARES/error.middleware.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json())  
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(errorMiddleware)
 app.get('/', (req, res)=>{
    res.send('welcome to Subscription Tracker API!')
 })
 app.use("/api/v1/auth", authRoute) 
 app.use('/api/v1/users', userRouter)
 app.use('/api/v1/subscription', subsRouter)
 const startServer = async () => {
    try {
        await connectToDatabase()  
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Failed to start server:", error)
        process.exit(1)  
    }
}

startServer()
 

 export default app;