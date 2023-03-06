// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Car from 'App/Models/Car'

export default class CarsController {
  public async index({ response }) {
    const car = await Car.all()
    response.status(201).json(car)
  }

  public async store({ response, request }) {
    const car = await Car.create(request.only(['name', 'cor', 'placa']))
    response.status(201).json(car)
  }

  public async show({ params, response }) {
    const car = await Car.find(params.id)
    response.status(201).json(car)
  }

  public async update({ params, response, request }) {
    const car = await Car.find(params.id)
    if (car) {
      car.merge(request.only(['name', 'cor', 'placa']))
      car.save()
    }
    response.status(201).json(car)
  }

  public async destroy({ params, response }) {
    const car = await Car.find(params.id)
    if (car) {
      car.delete
    }
    response.status(201).json({ msg: 'Carro deletado com sucesso' })
  }
}
