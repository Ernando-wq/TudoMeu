const {Router}= require('express')
const AdminController = require('../../controller/AdminController')
const adminRouter = Router()

adminRouter.get('/admin/users', AdminController.index)
adminRouter.get('/admin/users/:id', AdminController.show)
adminRouter.post('/admin/users', AdminController.store)
adminRouter.put('/admin/users/:id', AdminController.updated)
adminRouter.delete('/admin/users/:id', AdminController.destroy)








module.exports = adminRouter