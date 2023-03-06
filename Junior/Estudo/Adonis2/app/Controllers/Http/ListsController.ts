// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import List from "App/Models/List"

export default class ListsController {
  public async index({ response }) {
    const list = await List.all()
    response.status(200).json(list)
  }

  public async store({ request, response }) {
    const list = await List.create(request.only(['name', 'email', 'phone']))
    response.status(201).json(list)
  }

  public async show({ params, response }) {
    const list = await List.find(params.id)
    response.status(200).json(list)
  }

  public async update({ params, response, request }) {
    const list = await List.find(params.id)
    if (list) {
      list.merge(request.only(['name', 'email', 'phone']))
      list.save()
    }
    response.status(201).json(list)
  }

  public async destroy({ params, response }) {
    const list = await List.find(params.id)
    if (list) {
      list.delete()
      response.status(201).json({ msg: 'Lista deletado com sucesso' })
    }else{
      response.status(400).json({msg: 'Lista não encontrada'})
    }
  }
}
