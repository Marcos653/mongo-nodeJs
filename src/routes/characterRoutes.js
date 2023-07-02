const express = require("express")
const { getCharacterByNickname, createCharacter } = require("../controller/characterController")
const router = express.Router()

router
    .get("/characters/:nickname", getCharacterByNickname)
    .post("/characters", createCharacter)

module.exports = router
