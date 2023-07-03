const express = require("express")
const { getCharacterByNickname, createCharacter, getAll, deleteCharacter } = require("../controller/characterController")
const router = express.Router()

router
    .get("/characters/:nickname", getCharacterByNickname)
    .post("/characters", createCharacter)
    .get("/characters", getAll)
    .delete("/characters/:id", deleteCharacter)

module.exports = router
