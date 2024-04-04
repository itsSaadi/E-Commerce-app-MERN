import { UsersModel } from "../models/users.models.js"



export const getUsers = async (req, res) => {
    try {
        const response = await UsersModel.find({})
        res.json(response)
    } catch (error) {
        console.log(`Errorrr : ${error}`);
    }
}

export const createUsers = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await UsersModel.create({ username, email, password })
        res.send(newUser)
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