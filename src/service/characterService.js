const Character = require("../model/character");
const validation = require('../validation/characterValidation');

class CharacterService {

    static async getCharacterById(id) {
        return Character.findById(id);
    }

    static async createCharacter(data) {
        await validation.validateCharacter(data);

        let character = new Character(data);
        return character.save();
    }
}

module.exports = CharacterService;
