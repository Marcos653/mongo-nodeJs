const service = require("../service/characterService")

class CharacterController {

    static async getCharacterByNickname(req, res) {
        try{
            const character = await service.getCharacterByNickname(req.params.nickname)
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

    static async getAll(req, res) {
        try{
            const { page = 1, limit = 10 } = req.query;
            const characters = await service.getAll(page, limit)
            res.status(200).send(characters)
        } catch (err) {
            res.status(400).send({ message: `${err.message}`})
        }
    }

    static async deleteCharacter(req, res) {
        try{
            await service.deleteCharacter(req.params.id)
            res.status(200).send({ message: "Character successfully deleted" })
        } catch (err) {
            res.status(400).send({ message: `${err.message}`})
        }
    }
}

module.exports = CharacterController
