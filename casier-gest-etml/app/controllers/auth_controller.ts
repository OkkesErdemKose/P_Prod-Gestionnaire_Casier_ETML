// app/controllers/auth_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async login({ request, auth, response, session }: HttpContext) {
    const { eduvaudId, password } = request.only(['eduvaudId', 'password'])

    const student = await Student.findBy('eduvaudId', eduvaudId)

    if (!student) {
      session.flash({ error: 'Identifiants invalides.' })
      return response.redirect('/login')
    }

    const valid = await hash.verify(student.password, password)

    if (!valid) {
      session.flash({ error: 'Mot de passe incorrect.' })
      return response.redirect('/login')
    }

    // <-- ici
    await auth.use('web').login(student)

    return response.redirect('/casiers-libres')
  }

  async logout({ auth, response }: HttpContext) {
    // <-- ici aussi
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
