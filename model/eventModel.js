const {Model, DataType } = require('sequeliize');
const { sequelize } = require('../config/db.js');
class Event extends Model {}

Event.init({
    title:{
        type : DataType.STRING,
        allowNull: false
    },
    description: {
        type : DataType.STRING,
        allowNull: false
    },
    event_date:{
        type : DataType.DATEONLY,
        allowNull: false
    },
    location:{
        type : DataType.STRING,
        allowNull: false,
    },
},{
    sequelize,
    modelName: 'Event',
    
}
);

module.exports = { Event };