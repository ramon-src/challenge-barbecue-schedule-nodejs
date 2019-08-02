const express = require('express')
var router = express.Router()
const {
  EventsByResponsible,
  Event
} = require('../../domain/repository/EventRepository')

router.get('/list', async (req, res, next) => {
  let data = await EventsByResponsible()
  res.send(data)
})

router.post('/add', async (req, res, next) => {
  try {
    let data = req.body
    let result = await Event(data)
    res.send(result)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
