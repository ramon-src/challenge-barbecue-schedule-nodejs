const { EventModel } = require('../../infraestructure/schemas/Event')

const Events = () => {
  return EventModel.find()
}

const EventInfoById = id => {
  return EventModel.findOne({ _id: id }).populate('confirmedPeople.user')
}

const ConfirmPresence = async data => {
  let event = await EventModel.findById(data.eventId)
  event.confirmedPeople.push({
    user: data.userId,
    contributionValue: data.contributionValue
  })
  return event.save()
}

const Unsubscribe = async data => {
  let event = await EventModel.findById(data.eventId)
  event.confirmedPeople.id(data.id).remove()
  return event.save()
}

const Event = async data => {
  let event = new EventModel(data)
  return event.save()
}

const ManyEvents = events => {
  return EventModel.insertMany(events)
}

module.exports = {
  Events,
  Event,
  ManyEvents,
  EventInfoById,
  ConfirmPresence,
  Unsubscribe
}
