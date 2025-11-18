import Student from '#models/student'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {

    // SELECT * FROM students
    const students = await Student.all()

    // dd(students)

    return view.render('pages/students', { students })

  }

  async login({view}: HttpContext){
    return view.render('pages/login')
  }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) { }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) { }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ }: HttpContext) { }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }
}