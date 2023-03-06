import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Animal from 'App/Models/Animal'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AnimalsController {
  public async index({ response }) {
    const animal = await Animal.all()
    response.status(200).json(animal)
  }
  public async store({ request, response }: HttpContextContract) {
    const animalSchema = schema.create({
      name: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      raca: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      dono: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      sexo: schema.enum(['Macho', 'Femea']
      ),
      idade: schema.number([
        rules.range(10, 180)
      ]),
      color: schema.string(),
      pedigree: schema.boolean(),
      deficiencia: schema.boolean(),
      vacina: schema.date({
        format: "yyyy-MM-dd"
      })
    })
    const data = await request.validate({ schema: animalSchema })
    const animal = await Animal.create(data);
    return response.json({ animal })
  }

  public async show({ params, response }) {
    const animal = await Animal.find(params.id)
    if (animal) {
      response.status(200).json(animal)
    } else {
      response.status(404).json({ msg: 'Animal Não existe' })
    }
  }

  public async update({ params, response, request }) {
    const animalSchema = schema.create({
      name: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      raca: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      dono: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      sexo: schema.enum(['Macho', 'Femea']
      ),
      idade: schema.number([
        rules.range(10, 180)
      ]),
      color: schema.string(),
      pedigree: schema.boolean(),
      deficiencia: schema.boolean(),
      vacina: schema.date({
        format: "yyyy-MM-dd"
      })
    })
    const data = await request.validate({ schema: animalSchema })
    const animal = await Animal.find(params.id)
    if (animal) {
      animal.merge(data)
      animal.save()
      response.status(200).json(animal)
    } else {
      response.status(404).json({ error: 'Animal não encontrado' })
    }
  }

  public async destroy({ params, response }) {
    const animal = await Animal.find(params.id)

    if (animal) {
      await animal.delete()
      response.status(200).json({ msg: 'Animal deletado com sucesso' })
    } else {
      response.status(404).json({ msg: 'Animal não encontrado' })
    }
  }
}
