import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Animal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public raca: string

  @column()
  public idade: number

  @column()
  public color: string

  @column()
  public pedigree: boolean

  @column()
  public dono: string

  @column()
  public sexo: string

  @column()
  public deficiencia: boolean

  @column.date()
  public vacina: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
