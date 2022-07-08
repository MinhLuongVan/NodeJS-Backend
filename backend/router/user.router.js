const express = require("express")
const router = express.Router()
const User  = require("../model/user.model")

// Get all User <GET>
router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.json({
            data: users, message: "Getting all users successfully"
        })

    } catch(error) {
        console.log(error)
    }
})


// Create new User <POST>
router.post("/", async (req, res) => {
    try {
        const {username, password} = req.body

        const newUser = new User({
            username,
            password
        })
        await newUser.save()
        res.json({
            data: newUser,
            message: "Creating user successfully"
        })
    } catch(error) {
        console.log(error)
    }
})

// Delete User
router.delete('/:id',async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.json({
            data: deletedUser,
            message: "Deleting user successfully"
        })

    } catch (error) {
        console.log(error)
    }
})

// Update User
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new: true}
        )
        res.json({
            data: updatedUser,
            message: "Updating user successfully "
        })

    } catch(error) {
        console.log(error)
    }
})


module.exports = router