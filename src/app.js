const express = require('express')

const db = require('./config/database')
const routes = require('./routes/index')

function handleDBError(err) {
  console.log('Connection error:', err)
}

function handleDBOpen() {
  console.log('Connection with database has been established')
}

function initializeApp() {
  const app = express()
  app.use(express.json())
  routes(app)
  
  return app
}

db.on('error', handleDBError)
db.once('open', handleDBOpen)

const app = initializeApp()

module.exports = app
