import Locker from '#models/locker'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    const lockers = [
      {
        lockerNumber: 4,
        roomName: 'A11',
        site: 'Vennes',
        studentId: 2
      },
      {
        lockerNumber: 2,
        roomName: 'A12',
        site: 'Vennes',
        studentId: 3
      },
      {
        lockerNumber: 6,
        roomName: 'A13',
        site: 'Vennes',
        studentId: 5
      },
      {
        lockerNumber: 8,
        roomName: 'A21',
        site: 'Vennes',
        studentId: 1
      },
      {
        lockerNumber: 1,
        roomName: 'A22',
        site: 'Vennes',
        studentId: 4
      }
    ]

    await Locker.createMany(lockers)
  }
}