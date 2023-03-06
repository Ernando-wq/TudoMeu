const {Router} = require('express')
const UserController = require('./Controllers/UserController')
const PokemonController = require('./Controllers/PokemonController')
const  AuthController = require('./Controllers/AuthController')

const authRouter = Router()

authRouter.get('/auth', AuthController.isAuth)


authRouter.get('/pokemons', PokemonController.index)
authRouter.post('/pokemons', PokemonController.store)
authRouter.get('/pokemons/:id', PokemonController.show)
authRouter.put('/pokemons/:id', PokemonController.update)
authRouter.delete('/pokemons/:id', PokemonController.destroy)





//ROTAS DE USUARIOS
authRouter.get('/users', UserController.index)
authRouter.get('/users/:id', UserController.show)
authRouter.post('/users', UserController.store)
authRouter.put('/users/:id', UserController.updated)
authRouter.delete('/users/:id', UserController.destroy)






module.exports = authRouter