import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {

    const schemaLogin = schema.create({
      email: schema.string.optional(),
      username: schema.string(),
      password: schema.string()
    })
    const payload = await request.validate({
      schema: schemaLogin
    })

    if (!payload) {
      return response.badGateway('DEU ERRO')
    }


    const token = await auth.use('jwt').attempt(payload.username, payload.password)
    
    return response.ok(token)

    // const token = await auth.attempt((payload).username, (payload).password)


  }
  public async create({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
