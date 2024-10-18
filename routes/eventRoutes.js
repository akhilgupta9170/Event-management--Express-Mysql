const {createEvent,getAllEvent,updateEvent,deleteEvent} = require('../controllers/eventController.js');
const {verifyToken, checkAdmin} = require('../middleware/auth.js')
const express = require('express');
const router = express.Router();

router.post('/', verifyToken, checkAdmin, createEvent);
router.get('/', getAllEvent);
router.put('/:id', verifyToken, checkAdmin, updateEvent);
router.delete('/:id', verifyToken, checkAdmin, deleteEvent);

module.exports = router;
