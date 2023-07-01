const express = require("express");
const { getCharacterById, createCharacter } = require("../controller/characterController");
const router = express.Router();

router
    .get("/characters/:id", getCharacterById)
    .post("/characters", createCharacter);

module.exports = router;
