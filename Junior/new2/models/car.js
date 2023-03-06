'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'User'
      })
    }
  }
  Car.init({
    category: DataTypes.STRING,
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    year: DataTypes.INTEGER,
    km: DataTypes.INTEGER,
    color: DataTypes.STRING,
    exchange: {
      type: DataTypes.ENUM,
      values: ['auto' , 'manual']
    },
    userId: DataTypes.INTEGER,
    observation: DataTypes.STRING,
    board: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};