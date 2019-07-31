const express = require('express')
const app = express()
const eventRouter = require('./http/Event.js')
require('../infraestructure/db')
const CORS = require('./middlewares/CORS')
app.use(express.json())
app.use(CORS);
  
app.use('/events', eventRouter)

module.exports = app