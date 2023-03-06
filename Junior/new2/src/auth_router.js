const { Router } = require('express')
const CarController = require('../controller/CarController')
const {makeStore, processUpdate} = require('../controller/CarController')



const authRouter = Router()

//router.post('/register', UserController.register)

//router de login
//router.post('/login',AuthController.login)
// authRouter.get('/private',AuthController.private)

// authRouter.get('/profile', AuthController.profile)

//criação de carro
authRouter.get('/cars', CarController.index)
authRouter.post('/car', makeStore.validations, makeStore.handler)
authRouter.get('/cars/:id', CarController.show)
authRouter.put('/cars/:id', processUpdate.validations, processUpdate.handler)
authRouter.delete('/cars/:id', CarController.destroy)








module.exports = authRouter