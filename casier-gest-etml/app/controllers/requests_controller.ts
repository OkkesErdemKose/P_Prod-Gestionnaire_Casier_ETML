import Request from '#models/request'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'
import db from '@adonisjs/lucid/services/db'

export default class RequestsController {
  /**
   * Afficher la liste des demandes
   */
  async index({ view }: HttpContext) {
    // SELECT * FROM requests
    const requests = await Request.all()

    // dd(lockers)

    return view.render('pages/requests', { requests })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Demande de prise d'un casier libre par un élève
   */
  async store({ response, params, session }: HttpContext) {
    const isStudentExist = await Request.query().where('studentId', params.student_id).first()

    const isLockerExist = await Request.query().where('lockerId', params.locker_id).first()

    if (isStudentExist) {
      
      
      session.flash('error', 'Vous avez déjà une demande de casier !')

    } else if (isLockerExist) {
      
      session.flash('error', 'Casier déjà demandé ! Veuillez demander un autre.')

    } else {

      
      await Request.create({ lockerId: params.locker_id, studentId: params.student_id })
      session.flash('success', 'Casier demandé avec succès !')
    }

    return response.redirect().toRoute('home', { session })
  }

  /**
   * Afficher un seul casier
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
