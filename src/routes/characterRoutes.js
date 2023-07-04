const express = require("express")
const controller = require("../controller/characterController")
const router = express.Router()

router
    .get("/characters/:nickname", controller.getCharacterByNickname)
    .post("/characters", controller.createCharacter)
    .get("/characters", controller.getAll)
    .delete("/characters/:id", controller.deleteCharacter)
    .patch("/characters/:id", controller.updateCharacter)

module.exports = router
