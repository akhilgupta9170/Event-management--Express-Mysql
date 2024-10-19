const eventService = require('../services/eventService');

exports.createEvent = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const event = await eventService.createEvent(req.body);
        console.log("events",event);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await eventService.getAllEvents(req.query);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    try{
        console.log("body",req.body);
        const event = await eventService.updateEvent(req.body,req.params.id);
    }
    catch (error) {
        res.status(400).json({ message: "Cannot Update the event " + error.message });
    }
}

exports.deleteEvent = async(req,res)=> {
    try {
      const event = await eventService.deleteEvent(req.params.id)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


