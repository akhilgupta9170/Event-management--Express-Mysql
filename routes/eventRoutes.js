const {createEvent,getAllEvents,updateEvent,deleteEvent} = require('../controller/eventController.js');
const {verifyToken, isAdmin} = require('../middleware/auth.js')
const express = require('express');
const router = express.Router();

router.post('/', verifyToken,isAdmin, createEvent);
router.get('/', getAllEvents);
router.put('/:id', verifyToken, isAdmin, updateEvent);
router.delete('/:id', verifyToken, isAdmin, deleteEvent);

module.exports = router;
