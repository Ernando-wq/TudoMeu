'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    static associate(models) {
      this.belongsTo(models.User,{
        foreignKey: 'userid',
        as: 'User'
      })
    }
  }
  Pokemon.init({
    userid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    types: DataTypes.STRING,
    img: DataTypes.STRING,
    color: DataTypes.STRING,
    gif: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};