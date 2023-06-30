const characters = require("../model/character")

class CharacterService {

    static async getCharacterById(id) {
        return await characters.findById(id)
    }

    static async createCharacter(data) {
        let character = new characters(data)
        return await character.save()
    }
}

module.exports = CharacterService