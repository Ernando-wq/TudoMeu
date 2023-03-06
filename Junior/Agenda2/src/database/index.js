const Sequelize = require('sequelize');
const configDB = require('../config/database');

const User = require('../models/Activity')


const connection = new Sequelize(configDB)


User.init(connection)

module.exports = connection