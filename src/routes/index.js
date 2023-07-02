const express = require("express")
const characterRoutes = require("./characterRoutes")

const configureRoutes = (app) => {
    app.use(express.json())
    app.use(characterRoutes)
}

module.exports = configureRoutes
