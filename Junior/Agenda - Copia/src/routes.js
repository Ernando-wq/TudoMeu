const { Router } = require('express')

const ActivityController = require('./Controllers/ActivityController')
const UserController = require('./Controllers/UserController')
const router = Router()

//Criação de Atividade
// router.post('/ativicty-create', ActivityController.createAtivity)
// router.put('/ativicty-update/:id', ActivityController.updateAtivity)
// router.get('/ativicty-list', ActivityController.listAtivity)
// router.delete('/ativicty-delete/:id', ActivityController.deleteAtivity)

//Criação de Usuarios

router.post('/user-create', UserController.store)
router.put('/user-update/:id', UserController.updateUser)
router.get('/user-list', UserController.index)
router.delete('/user-delete/:id', UserController.deleteUser)



module.exports = router


