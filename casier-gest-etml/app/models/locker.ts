import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Student from './student.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

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

  @hasOne(() => Student)
  declare student: HasOne<typeof Student>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  static return: any
}