const express = require('express');
const { registerForEvent, getEventRegistrations } = require('../controller/registrationController');
const { verifyToken, isAdmin } = require('../middleware/auth');
const router = express.Router();

// Users can register for events
router.post('/register/:id', verifyToken, registerForEvent);

// Admins can view registrations for a specific event
router.get('/:id', verifyToken,isAdmin ,getEventRegistrations);

module.exports = router;
