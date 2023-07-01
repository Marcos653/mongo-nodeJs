const { Schema, model } = require('mongoose');

const CharacterSchema = new Schema({
  realName: { type: String, required: true },
  nickname: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model('Character', CharacterSchema);
