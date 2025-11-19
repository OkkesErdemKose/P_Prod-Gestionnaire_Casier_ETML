import Locker from '#models/locker'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    const lockers = [
      {
        lockerNumber: 4,
        roomName: 'A11',
        site: 'Vennes'
      },
      {
        lockerNumber: 2,
        roomName: 'A12',
        site: 'Vennes'
      },
      {
        lockerNumber: 6,
        roomName: 'A13',
        site: 'Vennes'
      },
      {
        lockerNumber: 8,
        roomName: 'A21',
        site: 'Vennes'
      },
      {
        lockerNumber: 1,
        roomName: 'A22',
        site: 'Vennes'
      },
      {
        lockerNumber: 3,
        roomName: 'A23',
        site: 'Vennes'
      },
      {
        lockerNumber: 5,
        roomName: 'B12',
        site: 'Vennes'
      },
      {
        lockerNumber: 7,
        roomName: 'B13',
        site: 'Vennes'
      }
    ]

    await Locker.createMany(lockers)
  }
}