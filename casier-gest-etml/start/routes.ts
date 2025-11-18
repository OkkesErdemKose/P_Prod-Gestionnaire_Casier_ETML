/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import LockersController from '#controllers/lockers_controller'
import RequestsController from '#controllers/requests_controller'
import StudentsController from '#controllers/students_controller'
import router from '@adonisjs/core/services/router'

// Page qui affiche tous les casiers vides et permet à un élève d'en demander un
router.get('casiers-libres', [LockersController, 'freeLockers']).as('home')

router.get('casiers', [LockersController, 'index'])
router.get("casiers/:locker_id", [LockersController, 'show']).as('lockers.show')

router.get('eleves', [StudentsController, 'index'])

router.get('demandes', [RequestsController, 'index'])
router.get('casiers/:locker_id/student/:student_id', [RequestsController, 'store']).as('request.store')

