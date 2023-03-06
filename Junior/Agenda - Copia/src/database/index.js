const Sequelize = require('sequelize');
const configDB = require('../config/database');

// const Activity = require('../models/Activity')
// const User = require('../models/User')

const connection = new Sequelize(configDB)




// Activity.init(connection)
// User.init(connection)

module.exports = connection