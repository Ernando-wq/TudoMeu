const  { body, validationResult } = require('express-validator')
const car = require('../models/car')
const { Car, User } = require('./../models')


const store = async (req, res) =>{
    const {category,model,brand,year,km,color,exchange,observation,board    } = req.body
}





