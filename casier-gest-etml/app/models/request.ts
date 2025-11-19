import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Student from './student.js'
import Locker from './locker.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'

export default class Request extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare studentId: number
  
  @column()
  declare lockerId: number

  @hasOne(() => Student)
  declare student: HasOne<typeof Student>

  @belongsTo(() => Locker)
  declare locker: BelongsTo<typeof Locker>
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
}