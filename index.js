const app = require("./src/app")

const port = process.env.PORT || 8080

const server = app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
