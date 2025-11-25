import Student from '#models/student'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash'

export default class StudentSeeder extends BaseSeeder {
  public async run() {
    const firstNames = [
      'Erdem','Lukas','Noah','Mia','Emma','Léa','Sophie','Gabriel','Raphael','Chloé',
      'Anna','Julien','Maxime','Sarah','Louis','Clara','Tom','Nina','Elisa','Samuel',
      'Alex','Mathis','Laura','Eva','Tim','Julie','Ben','Alice','David','Lina'
    ]

    const lastNames = [
      'Kose','Müller','Schmid','Dubois','Rossi','Meier','Martin','Moreau','Frey','Lemoine',
      'Zimmermann','Roth','Bucher','Girard','Beck','Heinrich','Schneider','Perrin','Haas','Weber',
      'Bianchi','Gruber','Lange','Faure','Keller','Dupont','Schwarz','Marchand','Fischer','Petit'
    ]

    const students = []

    // Utilisation de for...of avec await
    for (let i = 1; i <= 200; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
      const eduvaudId = `u${i.toString().padStart(3,'0')}etml`

      // Hash du mot de passe
      const hashedPassword = await hash.make('ETML$1234')

      students.push({
        name: firstName,
        lastName: lastName,
        eduvaudId,
        isAdmin: false,
        password: hashedPassword,
      })
    }

    await Student.createMany(students)
  }
}



//await Student.createMany([
//  {
//    name: 'Kose',
//    lastName: 'Okkes Erdem',
//    eduvaudId: 'pl23ksc',
//    isAdmin: false,
//    password: await hash.make('ETML$1234'),
//    class: 'ETML',
//  },
//  {
//    name: 'Zidane',
//    lastName: 'Sahraoui',
//    eduvaudId: 'pd01wvj',
//    isAdmin: false,
//    password: await hash.make('ETML$1234'),
//    class: 'ETML',
//  },
//])