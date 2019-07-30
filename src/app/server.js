const express = require('express')
const app = express()
const eventRouter = require('./http/Event.js')
require('../infraestructure/db')

express.json()

app.use('/events', eventRouter)

module.exports = app