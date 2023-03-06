const {Model, DataTypes} = require('sequelize')

class Activity extends Model{
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            date: DataTypes.STRING,
            hours: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Activity