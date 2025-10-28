import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lockers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('locker_id')
      table.integer('locker_number').unique()
      table.string('room_name')
      table.string('site')

      table
        .integer('student_id')
        .unsigned()
        .references('students.student_id')
        .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}