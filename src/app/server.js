const express = require('express')
const app = express()
const eventRouter = require('./http/Event.js')
require('../infraestructure/db')

express.json()

app.use('/events', eventRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

module.exports = app