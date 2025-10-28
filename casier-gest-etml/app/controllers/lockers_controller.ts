import Locker from '#models/locker'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'
import db from '@adonisjs/lucid/services/db'

export default class LockersController {
  /**
   * Afficher la liste des casiers
   */
  async index({view }: HttpContext) {

    // SELECT * FROM lockers
    const lockers = await Locker.all()

    // dd(lockers)

    return view.render('pages/lockers', { lockers })

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
  async show({view, params }: HttpContext) {

    // SELECT locker_id FROM lockers
    const locker = await db.from('lockers').where('locker_id', params.id)


    //dd(locker)

    return `${locker}`

  }

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