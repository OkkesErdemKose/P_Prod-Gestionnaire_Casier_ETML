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

router.get('casiers', [LockersController, 'index'])
router.get("casiers/:locker_id", [LockersController, 'show'])

router.get('eleves', [StudentsController, 'index'])

router.get('demandes', [RequestsController, 'index'])
