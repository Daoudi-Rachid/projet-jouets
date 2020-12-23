const mongoose = require('mongoose');
// const express = require("express")

const dbName = "eCommerceJouets"

// Connection
mongoose.connect('mongodb://localhost:27017/' + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("connection réussie")
}).catch(err=>{
  console.log(err)
})

module.exports = mongoose
