import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Pessoa from 'App/Models/Pessoa'

export default class PessoasController {
  public async index({response}) {
    const pessoa = await Pessoa.all()
    response.status(200).json(pessoa)
    
  }

  public async store({ request, response }: HttpContextContract) {
    const pessoaSchema = schema.create({
      name: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      email: schema.string(),
      age: schema.string(),
      cpf: schema.string(),
    })
    const data = await request.validate({ schema: pessoaSchema })
    const pessoa = await Pessoa.create(data)
    return response.json({ pessoa })
  }

  public async show({response , params}) {
    const pessoa = await Pessoa.find(params.id)
    if (pessoa) {
      response.status(200).json(pessoa)
    } else {
      response.status(404).json({ msg: 'Pessoa Não existe' })
    }
  }

  public async update({params,request,response}) {
    const pessoaSchema = schema.create({
      name: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(30),
      ]),
      email: schema.string(),
      age: schema.string(),
      cpf: schema.string(),
    })
    const data = await request.validate({ schema: pessoaSchema })
    const pessoa = await Pessoa.find(params.id)
    if(pessoa){
      pessoa.merge(data)
      pessoa.save()
      response.status(200).json(pessoa)
    }else{
      response.status(404).json({ error: 'Pessoa não encontrado' })
    }
  }

  public async destroy({params,response}) {
    const pessoa = await Pessoa.find(params.id)
    if(pessoa){
      await pessoa.delete()
      response.status(200).json({ msg: 'Pessoa deletado com sucesso' })
    }else{
      response.status(404).json({ msg: 'Pessoa não encontrado' })
    }
  }
}
