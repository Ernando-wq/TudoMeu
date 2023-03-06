import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async index({ }: HttpContextContract) { }

  public async login({ auth, request }: HttpContextContract) {

    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('jwt').attempt(email, password)

    return token

  }
  public async store({ request }: HttpContextContract) {

    const { email, password } = request.only(['email', 'password'])

    const user = User.create({
      email, password
    })

    return user

  }

  public async show({ auth }: HttpContextContract) {
    
  const user = await auth.use('jwt').authenticate()

  return user


  }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
