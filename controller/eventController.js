const { Event } = require("../model/eventModel.js");

exports.createEvent = async (req, res) => {
  const { title, description, event_date, location } = req.body;
  try {
    const event = await Event.create({
      title,
      description,
      event_date,
      location,
    });
    res.status(201).json({ event });
  } catch {
    res.status(404).json({ error: error.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json({ events });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateEvent = async(req,res)=>{
    const {id }= req.params;
    const {title,description, event_date, location} = req.body;
    try{
    const user = await Event.findByPk(id);
    if(!user){
        return res.status(404).json({ error: 'Event not found' });
    }
    await user.update({title,description, event_date, location});
    }
    catch(error){
        res.status(404).json({ error: error.message });
    }
}

exports.deleteEvent = async(req,res)=>{
    const {id} = req.params
    try{
        const user = await Event.findByPk(id);
        if(!user)
            return res.status(404).json({ error: 'Event not found' });
        await user.destroy();
    }
    catch(error){
        res.status(404).json({ error: error.message });
    }
}
