import Request from '#models/request'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'
import db from '@adonisjs/lucid/services/db'

export default class RequestsController {
  /**
   * Afficher la liste des demandes
   */
  async index({view }: HttpContext) {

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
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Afficher un seul casier
   */
  async show({params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({  }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}