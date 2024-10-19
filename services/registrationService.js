const Registration = require('../models/registrationModel');

exports.register = async (eventId, userId) => {
    eventId = Number(eventId)
    const registration = await Registration.create({ eventId, userId });
    return registration;
};

exports.getRegistrations = async (eventId) => {
    eventId = Number(eventId)
    const registrations = await Registration.findAll({ where: { event_id: eventId } });
    return registrations;
};
