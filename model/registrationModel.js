const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');

class Registration extends Model {}

Registration.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Registration',
});

module.exports = { Registration };
