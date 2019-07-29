const EventModel = require('../../infraestructure/schemas/Event')

const EventsByResponsible = async (id) => {
    //{ responsible: id }
    return await EventModel.find()
}

const Event = (data) => {
    return new EventModel(data).save()
}

const ManyEvents = (events) => {
    events.forEach(async (event) => {
        await Event(event)
    })
}

module.exports = {
    EventsByResponsible,
    Event,
    ManyEvents
}