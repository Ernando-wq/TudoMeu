const { Router } = require('express')

const CursoController = require('../../controller/CursoController')
const {makeStore,processUpdate} = require('../../controller/CursoController')

const authRouter = Router()


authRouter.get('/Cursos', CursoController.index)
authRouter.post('/Cursos', makeStore.validations, makeStore.handler)
authRouter.get('/Cursos/:id', CursoController.show)
authRouter.put('/Cursos/:id', processUpdate.validations, processUpdate.handler)
authRouter.delete('/Cursos/:id', CursoController.destroy)





module.exports = authRouter