'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
   name: DataTypes.STRING,
     email: DataTypes.STRING,
    activityId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Activity, {foreignKey: 'activityId', as: 'activity'})
  };
  return User;
};





















// const { Model, DataTypes } = require('sequelize')

// class User extends Model {
//     static init(sequelize) {
//         super.init({
//             id: {
//                 type:DataTypes.INTEGER,
//                 primaryKey: true
                
//             },
//             name: DataTypes.STRING,
//             email: DataTypes.STRING,
//             activity_id: DataTypes.INTEGER
//         }, {
//             sequelize
//         })
//         // User.associate = (models) => {
//         //     User.belongsTo(models.Activity,{ foreignKey: 'activity_id', as: 'activity',constraints:false });
//         // }
//         return User;
//     }
// }

// module.exports = User