import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({request, response}: HttpContextContract) {

      const user_schema = schema.create({
        site_id: schema.string(),
        username: schema.string(),
        firstname: schema.string(),
        lastname: schema.string(),
        email: schema.string(),
        ativo: schema.boolean(),
        valido: schema.boolean(),
        address: schema.string(),
        password: schema.string(),
      })

      const payload = await request.validate({
        schema: user_schema
      })

      const user = await User.create({
        site_id: payload.site_id,
        username: payload.username,
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        ativo: payload.ativo,
        valido: payload.valido,
        address: payload.address,
        password: payload.password
      })

      return response.ok(user)


  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
