const express = require("express")
const cors = require("cors")
// const connection = require("../connection")
// const Jouet = require("../models/categorie1")
const jouetRouter = require("./routers/jouets")
const userRouter = require("./routers/users")
const authRouter = require("./routers/auth")

const port = 8080

const app = express()

// app.use(express.json()) 
app.use(cors())
app.use(jouetRouter)
app.use(userRouter)
app.use(authRouter)

app.listen(port, () => {
    console.log(`Serveur lancé: http://localhost:${port}`)
})

