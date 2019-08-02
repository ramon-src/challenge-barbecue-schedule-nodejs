const Mongoose = require('../db')
var connection = Mongoose.connection
const { ManyEvents } = require('../../domain/repository/EventRepository')

ManyEvents([
  {
    title: "Ramon's Birthday",
    observation: 'Bring all the family',
    contributionWithDrink: 20,
    contribution: 15,
    amount: 0
  },
  {
    title: "Roberta's Birthday",
    observation: 'Bring all the family',
    contributionWithDrink: 20,
    contribution: 15,
    amount: 0
  }
])
