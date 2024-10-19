const registrationService = require('../services/registrationService');

exports.registerForEvent = async (req, res) => {
    try {
        const registration = await registrationService.register(req.params.id, req.user.id);
        res.status(201).json(registration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getEventRegistrations = async (req, res) => {
    try {
        const registrations = await registrationService.getRegistrations(req.params.id);
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
