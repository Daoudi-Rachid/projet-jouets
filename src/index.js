const express = require("express")
// const Jouet = require("../models/categorie1")
const connection = require("../connection")
const jouetRouter = require("./routers/jouets")

const port = 8080

const app = express()

// app.use(express.json()) 
app.use(jouetRouter)

app.listen(port, () => {
    console.log(`Serveur lancé: http://localhost:${port}`)
})

