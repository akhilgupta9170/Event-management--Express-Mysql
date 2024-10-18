const express = require('express');
const { registerForEvent, getEventRegistrations } = require('../controllers/registrationController');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

// Users can register for events
router.post('/:id/register', verifyToken, registerForEvent);

// Admins can view registrations for a specific event
router.get('/:id', verifyToken, getEventRegistrations);

module.exports = router;
