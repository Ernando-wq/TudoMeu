const express = require('express')
const app = express()

app.use(express.json())

const UserController = require("./Controllers/UserController");
const CarController = require("./Controllers/CarController");

app.get('/users', UserController.index)
app.get('/users/:id', UserController.show)
app.post('/users', UserController.store)
app.put('/users/:id', UserController.update)
app.delete('/users/:id', UserController.destroy)


app.get('/cars', CarController.index)
app.post('/cars', CarController.store)
app.put('/cars/transfer', CarController.transfer)
app.put('/cars/:id', CarController.update)
app.get('/cars/:id', CarController.show)
app.delete('/cars/:id', CarController.destroy)



app.listen(3333)
