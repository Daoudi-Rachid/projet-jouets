var mongoose = require('mongoose');

//Connection
mongoose.connect('mongodb://localhost:27017/jouetDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("connection réussie")
})

module.exports = mongoose
