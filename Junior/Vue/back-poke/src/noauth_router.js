const {Router} = require('express')

const {login, register} = require ('./Controllers/AuthController')

const noAuthRouter = Router()


noAuthRouter.post('/register', register)
noAuthRouter.post('/login', login)



module.exports = noAuthRouter