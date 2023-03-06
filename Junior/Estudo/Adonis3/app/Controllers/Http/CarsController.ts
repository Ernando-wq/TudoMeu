import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Car from 'App/Models/Car'
import User from 'App/Models/User'

export default class CarsController {
  public async index({response}) {
    const car = await Car.all()
    response.status(201).json(car)
  }

  public async store({request,response , params}: HttpContextContract) {
    const body = request.body()
    const userId = params.userId

    await  User.findOrFail(userId)

    body.userId = userId

    const car = await Car.create(body)
    response.status(201).json(car)
  }

  public async show({response, params}) {
    const car = await Car.find(params.id)
    response.status(200).json(car)
  }

  public async update({response,params,request}) {
    const car = await Car.find(params.id)
    if(car){
      car.merge(request.only(['name' , 'color' , 'placa']))
      car.save()
    }
    response.status(200).json(car)
  }

  public async destroy({response,params}) {
    const car = await Car.find(params.userId)
    if(car){
      car.delete
    }
    response.status(200).json({msg:'Carro deletado com sucesso'})
  }
}
