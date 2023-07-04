const character = require("../model/character")
const validation = require('../validation/characterValidation')

class CharacterService {

    static async getCharacterByNickname(nickname) {
        return character.findOne({ nickname: nickname }, { _id: 0})
    }

    static async createCharacter(data) {
        validation.validateCharacter(data)

        let newCharacter = new character(data)
        return newCharacter.save()
    }

    static async getAll(page = 1, limit = 10) {
        return character.find()
            .skip((page - 1) * limit)
            .limit(limit)
    }

    static async deleteCharacter(id) {
        try {
            await character.findByIdAndDelete(id)
            return { message: "Character successfully deleted" }
        } catch (error) {
            throw error
        }
    }

    static async updateCharacter(id, data) {
        const newCharacter = await character.findByIdAndUpdate(id, data, { new: true })

        if (!newCharacter) {
            throw new Error('Character not found')
        }
    }
}

module.exports = CharacterService
