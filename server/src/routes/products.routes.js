import express from 'express'
import { getProducts } from '../controllers/products.controller.js'

export const productRoutes = express.Router()

productRoutes.get('/api/v1/getproducts', getProducts)

