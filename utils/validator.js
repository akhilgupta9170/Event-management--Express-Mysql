const joi = require('joi');

const schemaSignUp =joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    role: joi.string().valid('Admin', 'User').required()

})

const schemaLogin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
})

const schemaCreateEvent= joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    event_date: joi.date().iso().required(),
    location: joi.string().required(),
})

const schemaDeleteEvent= joi.object({
    id: joi.number().required()
})
const schemaUpdateEvent= joi.object({
    id: joi.number().required(),
    title: joi.string(),
    description: joi.string(),
    event_date: joi.date(),
    location: joi.string(),
})

const schemaReg = joi.object({
    userId: joi.number().required(),
    eventId: joi.number().required(),
})


module.exports = {
    schemaLogin,
    schemaSignUp,
    schemaCreateEvent,
    schemaDeleteEvent,
    schemaUpdateEvent,
    schemaReg
}