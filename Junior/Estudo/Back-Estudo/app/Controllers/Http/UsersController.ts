// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersController {

  public async store({ request, response }) {
    const user = await User.create(request.only(['name', 'email', 'balance', 'password']))
    return response.json(user)
  }

  public async login({ auth, request }) {
    const validate = schema.create({
      email: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      password: schema.string(),
    })

    const payload = await request.validate({ schema: validate })

    const token = await auth.use('jwt').attempt(payload.email, payload.password)
    return token
  }

  public async profile({ auth }) {
    return auth.user
  }

  public async addbalance({auth, request}){
    const validate = schema.create({
      balance: schema.number()
    })
    
    const payload = await request.validate({schema: validate})
    
    // const user = await User.find(auth.user)
    const {user} = auth

    if(user){
      user.balance = Number(user.balance) + Number(payload.balance)
      user.save()
      return user
    }
      
  }
  public async decrementbalance({auth, request}){
    const validate = schema.create({
      balance: schema.number()
    })
    
    const payload = await request.validate({schema: validate})
    
    // const user = await User.find(auth.user)
    const {user} = auth

    if(user){
      user.balance = Number(user.balance) - Number(payload.balance)
      user.save()
      return user
    }
      
  }


  // Return Value User
  public async balance({auth,response}){
    const {balance} = auth.user
    response.json({msg: 'Saldo em caixa', balance})
  }


}
