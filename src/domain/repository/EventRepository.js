const EventModel = require('../../infraestructure/schemas/Event');

const EventsByResponsible = async id => {
  return await EventModel.find();
};

const Event = data => {
  return new EventModel(data).save();
};

const ManyEvents = events => {
  return EventModel.insertMany(events);
};

module.exports = {
  EventsByResponsible,
  Event,
  ManyEvents
};
