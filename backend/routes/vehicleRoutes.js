import express from 'express'
import {
  getVehicles,
  getVehicleById,
  deleteVehicle,
  createVehicle,
  updatedVehicle,
} from '../controllers/vehicleController.js'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getVehicles).post(protect, isAdmin, createVehicle)
router
  .route('/:id')
  .get(getVehicleById)
  .delete(protect, isAdmin, deleteVehicle)
  .put(protect, isAdmin, updatedVehicle)

export default router
