

import express from 'express'
import { createUsers, deleteUser, getUsers } from '../controllers/users.controllers.js';

export const userRotues = express.Router()

userRotues.get('/api/v1/users', getUsers)
userRotues.post('api/v1/createuser', createUsers)
userRotues.delete('ap1/v1/deleteuser/:id', deleteUser)



