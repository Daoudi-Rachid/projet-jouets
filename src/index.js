const express = require("express")
const Jouet = require("../models/jouet")
const mongoose = require("../connection")
const app = express()

const port = 3000

app.get("/")

