const sequelize = require('index.js').sequelize

module.exports = (DataTypes, sequelize) => {
  const Activity = sequelize.define('Activity', {
    title: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.STRING,
        hours: DataTypes.STRING
  }, {});
  Activity.associate = function(models) {
    Activity.hasMany(models.User,{ as: 'users' });
  };
  return Activity;
};






// const {Model, DataTypes} = require('sequelize')

// class Activity extends Model{
//     static init(sequelize){
//         super.init({
//             id: {
//                 type:DataTypes.INTEGER,
//                 primaryKey: true
                
//             },
//             title: DataTypes.STRING,
//             description: DataTypes.STRING,
//             date: DataTypes.STRING,
//             hours: DataTypes.STRING
//         },{
//             sequelize
//         });
//         Activity.associate = (models) => {
//             Activity.hasMany(models.User,{foreignKey: 'id', as: 'users' });
            
            
//         }
//         return Activity;
//     }
// }




// module.exports = Activity