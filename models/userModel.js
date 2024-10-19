const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Admin', 'User'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User ;
