import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Student from './student.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'

export default class Locker extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare lockerNumber: number

  @column()
  declare roomName: string

  @column()
  declare site: string

  @column()
  declare studentId: number

  
  @belongsTo(() => Student)
  declare student: BelongsTo<typeof Student>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  static return: any
}