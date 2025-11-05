import Request from '#models/request'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    const request = [
      {
        studentId: 1,
        lockerId: 1
      },
      {
        studentId: 2,
        lockerId: 2
      }

    ]

    await Request.createMany(request)
  }
}