const { Router } = require('express')

const ActivityController = require('./Controllers/ActivityController')

const router = Router()

router.post('/ativicty-create', ActivityController.createAtivity)
router.put('/ativicty-update/:id', ActivityController.updateAtivity)
router.get('/ativicty-list', ActivityController.listAtivity)
router.delete('/ativicty-delete/:id', ActivityController.deleteAtivity)


module.exports = router