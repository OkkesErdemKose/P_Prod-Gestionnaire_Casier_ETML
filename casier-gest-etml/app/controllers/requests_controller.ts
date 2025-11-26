import Request from '#models/request'
import type { HttpContext } from '@adonisjs/core/http'

export default class RequestsController {
  /**
   * Afficher la liste des demandes
   */
  async index({ view }: HttpContext) {
    const requests = await Request.all()
    return view.render('pages/requests', { requests })
  }

  /**
   * Demande de prise d'un casier libre par un élève
   */
  async store({ response, params, session, auth }: HttpContext) {
    const student = auth.use('web').user   // l'élève connecté
    const lockerId = params.locker_id

    if (!student) {
      session.flash('error', 'Vous devez être connecté.')
      return response.redirect('/login')
    }

    // Vérifie si le student a déjà une demande
    const isStudentExist = await Request.query()
      .where('studentId', student.id)
      .first()

    // Vérifie si le casier est déjà demandé
    const isLockerExist = await Request.query()
      .where('lockerId', lockerId)
      .first()

    if (isStudentExist) {
      session.flash('error', 'Vous avez déjà une demande de casier !')
    } else if (isLockerExist) {
      session.flash('error', 'Casier déjà demandé ! Veuillez demander un autre.')
    } else {
      await Request.create({ lockerId, studentId: student.id })
      session.flash('success', 'Casier demandé avec succès !')
    }

    return response.redirect('/casiers-libres')
  }

  async show({ params }: HttpContext) {}
  async edit({ params }: HttpContext) {}
  async update({}: HttpContext) {}
  async destroy({ params }: HttpContext) {}
}
