const { Schema, model } = require('mongoose')

let mongooseHidden = require('mongoose-hidden')()

const EventSchema = new Schema({
  title: { type: String, required: [true, "can't be blank"], index: true },
  date: { type: Date, required: [true, "can't be blank"] },
  observation: String,
  contributionWithDrink: Number,
  contribution: Number,
  amount: Number,
  confirmedPeople: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  responsible: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "can't be blank"],
    index: true
  }
})

EventSchema.set('toJSON', {
  virtuals: true
})

EventSchema.plugin(mongooseHidden)

module.exports = {
  EventModel: model('Event', EventSchema),
  EventSchema
}
