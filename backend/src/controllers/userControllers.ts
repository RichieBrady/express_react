import { Express, Request, Response } from "express";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcrypt';


// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await User.find().select('-password').lean()
    if (!users?.length) {
        res.status(400).json({message: 'No users found'})
        return;
    }
    res.json(users)
})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req: Request, res: Response) => {
    const {username, password, roles} = req.body

    if (!username || !password || !Array.isArray(roles) || !roles.length) {
        res.status(400).json({message: 'All fields required'})
        return;
    }

    const duplicate = await User.findOne({ username }).lean().exec()

    if (duplicate) {
        res.status(409).json({message: 'Duplicate username'})
        return;
    }

    const hashedPwd = await bcrypt.hash(password, 10)
    const userObj = {username, "password": hashedPwd, roles}

    const user = await User.create(userObj)

    if (user) {
        res.status(201).json({message: `New user ${username} created`})
    } else {
        res.status(400).json({message: 'Invalid user data!'})
    }
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const { id, username, roles, active, password} = req.body

    if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        res.status(400).json({message: 'All fields required'})
        return;
    }

    const user = await User.findById(id).exec()

    if (!user) {
        res.status(400).json({message: 'User not found!'})
        return;
    }

    const duplicate = await User.findOne({ username }).lean().exec()
    if (duplicate && duplicate?._id.toString() !== id) {
        res.status(409).json({ message: 'Duplicate username' })
        return;
    }

    user.username = username
    user.roles = roles
    user.active = active

    if (password) {
        user.password = await bcrypt.hash(password, 10)
    }

    const updateUser = await user.save()

    res.json({ message: `${updateUser.username} updated` })

})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.body

    if (!id) {
        res.status(400).json({ message: 'User ID required' })
        return;
    }

    // check for any related db entries to this user. Replace relatedDBEntry with DB model name
    // const relatedDBEntry = await relatedDBEntry.findOne({ user: id }).lean().exec()
    // if (relatedDBEntry) {
    //     res.status(400).json({ message: 'User has related DBEntries' })
    //     return;
    // }

    const user = await User.findById(id).exec()

    if (!user) {
        res.status(400).json({ message: 'User not found' })
        return;
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with id ${result._id} deleted`

    res.json(reply)
})

export default {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}