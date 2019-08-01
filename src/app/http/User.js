const express = require('express');
var router = express.Router();
const { User } = require('../../domain/repository/UserRepository');

router.post('/add', async (req, res) => {
  try {
    const data = req.body;
    let result = await User(data);
    res.status(201).send(result.id);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
