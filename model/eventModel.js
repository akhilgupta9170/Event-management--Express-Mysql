const {Model, DataType, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');
class Event extends Model {}

Event.init({
    title:{
        type : DataTypes.STRING,
        allowNull: false
    },
    description: {
        type : DataTypes.STRING,
        allowNull: false
    },
    event_date:{
        type : DataTypes.DATEONLY,
        allowNull: false
    },
    location:{
        type : DataTypes.STRING,
        allowNull: false,
    },
},{
    sequelize,
    modelName: 'Event',
    
}
);

module.exports = { Event };