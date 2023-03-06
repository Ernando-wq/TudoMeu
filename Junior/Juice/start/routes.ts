
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('auth', 'AuthController.login')
Route.post('create-user', 'AuthController.store')
Route.get('user', 'AuthController.show')
