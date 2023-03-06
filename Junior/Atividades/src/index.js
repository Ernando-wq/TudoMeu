const express = require('express')
const app = express()

app.use(express.json())

const ActivityController = require("./controller/ActivityController")
const UserController = require("./controller/UserController")



//Criação de usuarios
app.get('/users', UserController.index)
app.post('/users', UserController.store)
app.get('/users/:id', UserController.show)
app.put('/user/:id', UserController.update)
app.delete('/user/:id', UserController.destroy)

//Criação de atividades
app.get('/activity', ActivityController.index)
app.post('/activity', ActivityController.store)
app.put('/activity/transfer', ActivityController.transfer)
app.get('/activity/:id', ActivityController.show)
app.put('/activity/:id', ActivityController.updated)
app.delete('/activity/:id', ActivityController.destroy)



app.listen(3333)