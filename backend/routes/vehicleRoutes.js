import express from 'express'
import {
  getVehicles,
  getVehicleById,
  getTwoVehicleById,
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
router.route('/:leftId/:rightId').get(getTwoVehicleById)
export default router
