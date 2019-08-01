const express = require('express');
const app = express();
const authRouter = require('./http/Auth.js');
const userRouter = require('./http/User.js');
const eventRouter = require('./http/Event.js');

require('../infraestructure/db');
const CORS = require('./middlewares/CORS');
app.use(express.json());
app.use(CORS);

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/events', eventRouter);

module.exports = app;
