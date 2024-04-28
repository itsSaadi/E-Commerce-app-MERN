import express from 'express'
import { forgetPassword, resetPassword } from '../controllers/auth.controllers.js'

export const authRoutes = express.Router()


authRoutes.post('/forget', forgetPassword)
authRoutes.post('/reset/:id', resetPassword)

