import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Locker extends BaseModel {
  @column({ isPrimary: true })
  declare lockerId: number

  @column()
  declare lockerNumber: number

  @column()
  declare roomName: string

  @column()
  declare site: string

  @column()
  declare studentId: number



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  static return: any
}