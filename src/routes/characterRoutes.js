const express = require("express")
const characterController = require("../controller/characterController")
const router = express.Router()

router
    .get("/characters/:id", characterController.getCharacterById)
    .post("/characters", characterController.createCharacter)

module.exports = router