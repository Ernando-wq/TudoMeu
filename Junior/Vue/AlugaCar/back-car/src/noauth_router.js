const {Router} = require('express')

const { registerUser, makeLogin } = require('../controller/AuthController')

const noAuthRouter =  Router()


noAuthRouter.post('/register',registerUser.validations, registerUser.handler)
noAuthRouter.post('/login',makeLogin.validations, makeLogin.handler)





module.exports = noAuthRouter