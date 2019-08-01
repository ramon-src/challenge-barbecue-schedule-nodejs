const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: String,
  date: Date,
  observation: String,
  contributionWithDrink: Number,
  contribution: Number,
  amount: Number,
  responsible: Schema.Types.ObjectId
});

module.exports = model('Event', eventSchema);
