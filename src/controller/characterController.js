const service = require("../service/characterService")

class CharacterController {

    static async getCharacterById(req, res) {
        try{
            const character = await service.getCharacterById(req.params.id)
            res.status(200).send(character)
        } catch (err) {
            res.status(400).send({ message: `${err.message} - ID does not location`})
        }
    }

    static async createCharacter(req, res) {
        try{
            const character = await service.createCharacter(req.body)
            res.status(201).send(character)
        } catch (err) {
            res.status(400).send({ message: `${err.message} - failed in create Character`})
        }
    }
}

module.exports = CharacterController