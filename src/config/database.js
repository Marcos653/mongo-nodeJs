const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://db_test:1234@cluster0.wrshyr2.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro de conexão:'))
db.once('open', function() {
  console.log("Conexão com o banco de dados estabelecida com sucesso")
});

module.exports = db
