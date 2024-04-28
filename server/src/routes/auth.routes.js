import express from 'express'
import { forgetPassword } from '../controllers/auth.controllers.js'

export const authRoutes=express.Router()


authRoutes.post('/forget',forgetPassword)

