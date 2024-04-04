

import express from 'express'
import { createUsers, deleteUser, getUsers } from '../controllers/users.controllers.js';

export const userRotues = express.Router()

userRotues.get('/', getUsers)
userRotues.post('/createuser', createUsers)
userRotues.delete('/deleteuser/:id', deleteUser)



