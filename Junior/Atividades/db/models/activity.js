'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'User'
      })
    }
  }
  Activity.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    hours: DataTypes.STRING,
    UserId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};