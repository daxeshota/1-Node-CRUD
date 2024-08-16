const User = require("../models/user.model.js")

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            status : "success",
            data : users
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}
const getUserByID = async (req, res) => {
    try {
        const usersByID = await User.findById(req.params.id);
        res.status(200).json({
            status : "success",
            data : usersByID
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const addUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json({
            status : "success",
            data : user
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateUserByID = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if (!user) {
            res.status(404).json({ message: "User not found" })
        }
        const updatedUser = await User.findById(req.params.id);
        res.status(200).json({
            status : "success",
            data : updatedUser
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "User deleted succesfully" })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = {
    getUsers,
    getUserByID,
    addUser,
    updateUserByID,
    deleteUser
}