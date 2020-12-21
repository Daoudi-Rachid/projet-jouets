const mongoose = require("mongoose")

const jouetSchema = new mongoose.Schema({
    nom: {
		type: String,
		required: true,
    },
    prix: {
        type: Number,
        required: true, 
    },
    reference: {
        type: Number,
        required: true,
    },
    marque: {
        type: String,
        required: true,
    },
    categorie: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantité: {
        type: Number,
        required: true,
    }
})

const Jouet = mongoose.model("Jouet", jouetSchema)

module.exports = Jouet