const express = require("express")
const cors = require("cors")
const jouetRouter = require("./routers/jouets")
// const connection = require("../connection")
// const Jouet = require("../models/categorie1")

const port = 8080

const app = express()

// app.use(express.json()) 
app.use(cors())
app.use(jouetRouter)

app.listen(port, () => {
    console.log(`Serveur lancé: http://localhost:${port}`)
})

