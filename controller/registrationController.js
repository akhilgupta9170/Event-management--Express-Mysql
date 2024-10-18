const { Registration } = require('../model/registrationModel.js');
const { Event } = require('../model/eventModel.js');

exports.registerForEvent = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
   // Assuming user ID is set in req.user after JWT verification


  try {
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const registration = await Registration.create({ userId, eventId: id });
    res.status(201).json(registration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEventRegistrations = async (req, res) => {
  const { id } = req.params;

  try {
    const registrations = await Registration.findAll({ where: { eventId: id } });
    res.json(registrations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
