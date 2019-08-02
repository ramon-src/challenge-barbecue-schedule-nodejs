const { EventModel } = require('../../infraestructure/schemas/Event')

const EventsByResponsible = async id => {
  return await EventModel.find()
}

const Event = async data => {
  let event = new EventModel(data)
  event.confirmedPeople.push(data.responsible)
  return event.save()
}

const ManyEvents = events => {
  return EventModel.insertMany(events)
}

module.exports = {
  EventsByResponsible,
  Event,
  ManyEvents
}
