const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  realName: String,
  nickname: String,
  description: String
});

const Character = mongoose.model('Character', CharacterSchema);
