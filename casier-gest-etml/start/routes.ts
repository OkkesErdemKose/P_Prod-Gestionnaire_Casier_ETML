/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

import LockersController from '#controllers/lockers_controller'
import RequestsController from '#controllers/requests_controller'
import StudentsController from '#controllers/students_controller'
import AuthController from '#controllers/auth_controller' // <-- IMPORTANT

// Page Login
router.get('/login', async ({ view }) => {
  return view.render('auth/login')
})

router.post('/login', [AuthController, 'login'])
router.post('/logout', [AuthController, 'logout']).use(middleware.auth())

// Page d’atterrissage -> redirection
router.get('/', async ({ response }) => response.redirect('/casiers-libres'))

// Accès casiers libres
router.get('/casiers-libres', [LockersController, 'freeLockers'])
  .as('home')
  .use(middleware.auth())

// Casiers
//router.get('/casiers', [LockersController, 'index'])
//router.get('/casiers/:locker_id', [LockersController, 'show']).as('lockers.show')

// Élèves A LAISSER QUE POIUR LES ADMINS
router.get('/eleves', [StudentsController, 'index'])

// Demandes
router.get('/demandes', [RequestsController, 'index'])

// 🔹 Route de demande de casier par le student connecté
router.get('/casiers/:locker_id/request', [RequestsController, 'store'])
  .as('request.store')
  .use(middleware.auth())
