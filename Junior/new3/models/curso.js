'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'User'
      })
    }
  }
  Curso.init({
    name: DataTypes.STRING,
    grade: DataTypes.STRING,
    hours: DataTypes.STRING,
    dias: DataTypes.STRING,
    inicio: DataTypes.STRING,
    fim: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};