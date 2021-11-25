import express from 'express'
import {
  getVehicles,
  getVehicleById,
} from '../controllers/vehicleController.js'

const router = express.Router()

router.route('/').get(getVehicles)
router.route('/:id').get(getVehicleById)

export default router
