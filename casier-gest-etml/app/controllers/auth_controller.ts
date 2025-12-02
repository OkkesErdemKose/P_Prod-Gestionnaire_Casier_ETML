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

    await auth.use('web').login(student)

    return response.redirect('/casiers-libres')
  }

  /**
   * Gère la déconnexion de l'utilisateur
   */
  async logout({ auth, response, session }: HttpContext) {
    // On utilise le guard 'web' pour déconnecter l'utilisateur
    await auth.use('web').logout()

    // On ajoute un message flash pour informer l'utilisateur
    session.flash({ success: 'Vous avez été déconnecté avec succès.' })

    // On redirige vers la page de connexion
    return response.redirect('/login')
  }
}