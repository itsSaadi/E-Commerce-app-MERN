import express from 'express'
import { forgetPassword, resetPassword } from '../controllers/auth.controllers.js'
import { verifyToken } from '../utils/verifytoken.js'

export const authRoutes = express.Router()



authRoutes.post('/forget', forgetPassword)
authRoutes.post('/reset/:id', resetPassword)

