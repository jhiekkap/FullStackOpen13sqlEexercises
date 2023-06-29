const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  disabled: { 
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'user'
})

module.exports = User