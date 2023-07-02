const Character = require("../model/character")
const validation = require('../validation/characterValidation')

class CharacterService {

    static async getCharacterByNickname(nickname) {
        return Character.findOne({ nickname: nickname }, { _id: 0})
    }

    static async createCharacter(data) {
        validation.validateCharacter(data)

        let character = new Character(data)
        return character.save()
    }
}

module.exports = CharacterService
