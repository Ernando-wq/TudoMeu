const { Router } = require('express')
const ActivityController = require('./Controllers/ActivityController')

const router = Router()

router.post("/activities", ActivityController.store)

router.get("/activities", ActivityController.index)

router.get("/activities/:id", ActivityController.show)

router.put("/activities/:id", ActivityController.update)

router.delete("/activities/:id", ActivityController.destroy)

module.exports = router