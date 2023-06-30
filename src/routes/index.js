const express = require("express")
const characters = require("./characterRoutes")

const routes = (app) => {
    app.use(express.json(), characters)
}

module.exports = routes