import { UsersModel } from "../models/users.models.js"
import jwt from 'jsonwebtoken'



export const getUsers = async (req, res) => {
    if (req.body.email && req.body.password) {
        const user = await UsersModel.findOne(req.body)
        if (user) {
            res.send(user)
        } else {
            res.status(404).send({ result: 'user not found' })
        }
    } else {
        res.status(404).send({ result: 'user not found' })
    }

}

export const createUsers = async (req, res) => {

    try {
        const { username, email, password } = req.body;
        const existingEmail = await UsersModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const existingUsername = await UsersModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const newUser = await UsersModel.create({ username, email, password })
        jwt.sign({ newUser }, process.env.JWT_PRIVATEKEY, { expiresIn: '2h' }, (err, token) => {
            res.send({ newUser, auth: token })
        })
    } catch (error) {
        console.log(`Errorrr : ${error}`);

    }
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UsersModel.deleteOne({ _id: req.params.id })
        res.send(deletedUser)
    } catch (error) {
        console.log(`Errorrr : ${error}`);
    }
}