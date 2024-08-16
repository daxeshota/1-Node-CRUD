const express = require("express")
const router = express.Router()
const User = require("../models/user.model.js");
const { addUser, getUserByID, getUsers, updateUserByID, deleteUser } = require("../controllers/user.controller.js");

router.get('/', getUsers); // API to get the all user list
router.get('/:id', getUserByID); // API to get the particular user by ID
router.post('/', addUser); // API to add user
router.put('/:id', updateUserByID); // API to update the user
router.delete('/:id', deleteUser); // API to delete the user


module.exports = router;