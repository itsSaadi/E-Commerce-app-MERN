import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export { app }