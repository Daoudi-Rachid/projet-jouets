const express = require("express")
const Jouet = require("../models/jouet")
const mongoose = require("../connection")
const jouetRouter = require("./routers/jouets")

const port = 3000

const app = express()

// app.use(express.json()) 
app.use(jouetRouter)

app.listen(port)

