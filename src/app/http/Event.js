const express = require('express')
var router = express.Router()
const {
  Events,
  Event,
  EventInfoById,
  ConfirmPresence,
  Unsubscribe
} = require('../../domain/repository/EventRepository')

router.get('/list', async (req, res, next) => {
  let data = await Events()
  res.send(data)
})

router.get('/event/:id', async (req, res) => {
  try {
    let data = await EventInfoById(req.params.id)
    res.send(data)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/unsubscribe', async (req, res) => {
  try {
    let data = req.body
    let result = await Unsubscribe(data)
    res.send(result.data)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/confirm', async (req, res) => {
  try {
    let data = req.body
    let result = await ConfirmPresence(data)
    res.send(result.data)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/add', async (req, res) => {
  try {
    let data = req.body
    let result = await Event(data)
    res.send(result)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
