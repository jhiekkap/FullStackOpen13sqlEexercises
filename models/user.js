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
  // created_at: {
  //    type: DataTypes.DATE,
  //    allowNull: true,
  //   },
  // updated_at: {
  //   type: DataTypes.DATE,
  //   allowNull: true,
  //   },
}, {
  sequelize,
  underscored: true,
  timestamps: false, // TODO: true
  modelName: 'user'
})

module.exports = User