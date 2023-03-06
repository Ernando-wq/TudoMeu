const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            email: DataTypes.STRING,
            date: DataTypes.STRING,
            hours: DataTypes.STRING
        }, { 
            sequelize
        })
    }
}

module.exports = User