import express from 'express'
import asyncHandler from 'express-async-handler'
import Vehicle from '../models/vehicleModel.js'

const router = express.Router()

// @desc    Fetch all vehicles
// @route   Get /api/vehicles
// @access  Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const vehicles = await Vehicle.find({})
    res.json(vehicles)
  })
)

// @desc    Fetch single vehicle by id
// @route   Get /api/vehicles/:id
// @access  Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id)
    if (vehicle) {
      res.json(vehicle)
    } else {
      res.status(404)
      throw new Error('Vehicle not found')
    }
  })
)

// @desc    Fetch single vehicle by slug
// @route   Get /api/vehicle/:slug
// @access  Public

// router.get(
//   '/:slug',
//   asyncHandler(async (req, res) => {
//     const vehicle = await Vehicle.find({ slug: `${req.params.slug}` })
//     if (vehicle.length > 0) {
//       res.json(vehicle)
//     } else {
//       res.status(404).json({ message: 'Vehicle not found' })
//     }
//   })
// )

export default router
