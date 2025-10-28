import Student from '#models/student'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
      const students = [
        {
          name: 'Kose',
          lastName: 'Okkes Erdem',
          class: 'CID2B'
        },
        {
          name: 'Jean',
          lastName: 'Michel',
          class: 'CID2B'
        },
        {
          name: 'Albert',
          lastName: 'Braimi',
          class: 'MID2B'
        },
        {
          name: 'Salah',
          lastName: 'Mohamed',
          class: 'FID2A'
        },
        {
          name: 'Cristiano',
          lastName: 'Ronaldo',
          class: 'CIN1A'
        },
      ]
  
      await Student.createMany(students)
  }
}