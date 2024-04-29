

import express from 'express'
import { createUsers, deleteUser, getUsers } from '../controllers/users.controllers.js';

export const userRotues = express.Router()

userRotues.post('/login', getUsers)
userRotues.post('/signup', createUsers)
userRotues.delete('/deleteuser/:id', deleteUser)



