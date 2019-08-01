const express = require('express');
var router = express.Router();
const { SignIn } = require('../../domain/repository/AuthRepository');

router.post('/signIn', async (req, res) => {
  try {
    const data = req.body;
    let userAuthenticated = await SignIn(data);
    if (!userAuthenticated) throw Error('Unauthorized user');
    const { id, email, username } = userAuthenticated;
    res.send({ id, email, username });
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
