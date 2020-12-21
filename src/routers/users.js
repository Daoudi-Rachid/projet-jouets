const express = require("express")
const User = require("../../models/user")

const router = new express.Router()

router.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body)
        const document = await newUser.save()
        res.status(201).json(document)
    } catch {
        res.status(500).send("Erreur lors de l'utilisateur")
    }
})

module.exports = router