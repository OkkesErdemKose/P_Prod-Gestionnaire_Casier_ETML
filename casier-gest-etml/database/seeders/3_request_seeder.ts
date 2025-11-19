import Locker from '#models/locker'
import Request from '#models/request'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    const request = [
      {
        lockerId: 1,
        studentId: 1
      }

    ]

    await Request.createMany(request)
  }
}