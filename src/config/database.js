const mongoose = require('mongoose');

const DATABASE_URL = "mongodb+srv://db_test:1234@cluster0.wrshyr2.mongodb.net/?retryWrites=true&w=majority";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Conexão com o banco de dados estabelecida com sucesso");
    } catch (error) {
        console.error("Erro de conexão:", error);
    }
};

connectToDatabase();

module.exports = mongoose.connection;
