const express = require("express")
// const mongoose = require("mongoose")
const Categorie1 = require("../../models/categorie1")
const Categorie2 = require("../../models/categorie2")
const Categorie3 = require("../../models/categorie3")
const connection = require("../../connection")

const router = new express.Router()

router.get("/getJouetsCat1", async (req, res) => {
    const jouet = new Categorie1(req.body)
    jouet.collection
    .find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => console.log("Erreur sur le find()"))    
})
router.get("/getJouetsCat2", async (req, res) => {
    const jouet = new Categorie2(req.body)
    jouet.collection
    .find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => console.log("Erreur sur le find()"))    
})
router.get("/getJouetsCat3", async (req, res) => {
    const jouet = new Categorie3(req.body)
    jouet.collection
    .find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => console.log("Erreur sur le find()"))    
})

// Méthode 1: ajouter un jouet avec mongoDB Compass

// // Méthode 2: ajouter un jouet avec Postman
// router.post("/categorieOne", async (req, res) => {
//     const newJouet = new Categorie1(req.body)
//     // const document = await newJouet.save()

//     newJouet.collection.insertOne({
//         nom: "puissance3",
//         prix: 10
//     })

//     res.status(201)
//     // res.status(201).json(document)
//     // res.json(req.body)
// })

module.exports = router
