const express = require('express')
const db = require("./config/database")
const routes = require("./routes/index")

db.on("error", console.log.bind(console, "Connection error"))
db.once("open", () => {
  console.log("connection with date has done")
});

const app = express()

app.use(express.json())
routes(app)

module.exports = app
