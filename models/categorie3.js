const mongoose = require("mongoose")

const jouetSchema = new mongoose.Schema({
    nom: {
		type: String,
		required: false,
    },
    prix: {
        type: Number,
        required: false, 
    },
    reference: {
        type: Number,
        required: false,
    },
    marque: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    quantite: {
        type: Number,
        required: false,
    },
    // categorie: {
    //     type: Number,
    //     required: false,
    // }
})

const categorie = mongoose.model("categorie3", jouetSchema)

module.exports = categorie