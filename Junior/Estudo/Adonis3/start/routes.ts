/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.get('/', async () => {
  return { hello: 'world' }
})



Route.post('/login', 'AuthController.login')
Route.post('/user', 'AuthController.store').middleware('auth')



Route.get('/user/cars', 'CarsController.index')
Route.get('/cars/:id' , 'CarsController.show')
Route.post('/user/:userId/cars', 'CarsController.store')
Route.put('cars/:id', 'CarsController.update')
Route.delete('/user/:userId/cars', 'CarsController.destroy')


