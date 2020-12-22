const mongoose = require('mongoose');
// const MongoClient = require("mongoose")
// const express = require("express")

// const connectionURI = "mongodb://localhost:27017"

const dbName = "eCommerceJouets"

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

// Connection
mongoose.connect('mongodb://localhost:27017/' + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("connection réussie")
}).catch(err=>{
    console.log(err)
})

// MongoClient.connect(connectionURI, options, async function(err, client) {
//     if (err) {
// 		// Si jamais je n'ai pas réussi à me connecter à MongoDB:
// 		return console.log("Erreur survenue lors de la connexion à mongodb")
//     } else {
//         console.log("Connexion réussi")
//     }

//     // Je me connecte à la base de donnée stockée dans dbName
// 	const dbJouet = client.db(dbName)
//     console.log(`Connecté avec succès à ${dbName}`)

//     // Stocker une référence à notre collection
//     const jouetsCollection = dbJouet.collection("lesJouets")
// })

module.exports = mongoose
