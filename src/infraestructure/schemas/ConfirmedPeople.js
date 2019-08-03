const { Schema, model } = require('mongoose')

let mongooseHidden = require('mongoose-hidden')()

const ConfirmedPeopleSchema = new Schema({
  contributionValue: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

ConfirmedPeopleSchema.set('toJSON', {
  virtuals: true
})

ConfirmedPeopleSchema.plugin(mongooseHidden)

module.exports = {
  ConfirmedPeopleModel: model('ConfirmedPeople', ConfirmedPeopleSchema),
  ConfirmedPeopleSchema
}
