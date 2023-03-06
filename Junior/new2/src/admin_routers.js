const { Router } = require('express')
const AdminController = require('../controller/AdminController')
const adminRouter = Router()

adminRouter.get('/admin/users', AdminController.index)
adminRouter.get('/admin/users/:id', AdminController.show)
adminRouter.post('/admin/users', AdminController.store)
adminRouter.put('/admin/users/:id', AdminController.updated)
adminRouter.delete('/admin/users/:id', AdminController.destroy)

adminRouter.get('/admin/cars', AdminController.carIndex)
adminRouter.get('/admin/cars/:id', AdminController.carShow)
adminRouter.post('/admin/cars', AdminController.carStore)
adminRouter.put('/admin/cars/:id', AdminController.carUpdate)
adminRouter.delete('/admin/cars/:id', AdminController.carDestroy)





module.exports = adminRouter