const mongoose = require('mongoose')

mongoose.connect("your_url");

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', function() {
  console.log("Conexão com o banco de dados estabelecida com sucesso");
});

module.exports = db;

// test
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  realName: String,
  nickname: String,
  description: String
});

const Character = mongoose.model('Character', CharacterSchema);

Character.create({
  realName: 'Clark Kent',
  nickname: 'Superman',
  description: 'Clark Kent, que também é conhecido como Superman, é um super-herói da DC Comics. Ele nasceu no planeta Krypton, mas foi enviado à Terra por seus pais antes de Krypton ser destruído. Na Terra, ele foi criado como humano por Jonathan e Martha Kent em Smallville, Kansas. Clark trabalha como jornalista no Daily Planet, um jornal em Metropolis. Ele tem superforça, velocidade, invulnerabilidade, voo, visão de calor, visão de raio-x, sopro congelante, e várias outras habilidades.'
})
  .then(character => console.log('Personagem criado:', character))
  .catch(err => console.log('Erro ao criar personagem:', err));


Character.find({})
  .then(characters => console.log('Personagens encontrados:', characters))
  .catch(err => console.log('Erro ao buscar personagens:', err));
