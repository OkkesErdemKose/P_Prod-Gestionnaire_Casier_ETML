import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Request extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare studentId: number
  
  @column()
  declare lockerId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
}