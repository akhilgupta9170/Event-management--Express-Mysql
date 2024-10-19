const Event = require("../models/eventModel");
const validator = require("../utils/validator");

exports.createEvent = async (eventData) => {
    console.log("eventData",eventData)
  const valid = validator.schemaCreateEvent.validate(eventData);
  if (valid.error) throw new Error("Invalid data",error.message);

  const event = await Event.create(eventData);
  return event;
};

exports.getAllEvents = async () => {
  const events = await Event.findAll();
  return events;
};

exports.updateEvent = async (eventData,updateId) => {
  updateId= +updateId;
  const valid = validator.schemaCreateEvent.validate(eventData);
  if (valid.error) {
    throw new Error("Invalid data");
  }
  try {
    console.log("update id", updateId);
    const [affectedCount,affectedRows] = await Event.update(eventData, { where: { id: updateId } });
    if (affectedCount === 0) {
      throw new Error("Event not found");
    }
    return "Event updated successfully";
  } catch (error) {
    throw new Error("Error updating event");
  }
 
};

exports.deleteEvent = async (id) => {
  id = +id;
 const valid = validator.schemaDeleteEvent.validate({id});
  console.log(valid);
  if (valid.error) {
    throw new Error("Invalid data");
  }
  console.log("valid")
  const event = await Event.findByPk(id);
  console.log("events",event);
  if (!event) throw new Error("Event not found");
  await event.destroy();
  return "Event deleted successfully";
};
