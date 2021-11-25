import asyncHandler from 'express-async-handler'
import Vehicle from '../models/vehicleModel.js'

// @desc    Fetch all vehicles
// @route   Get /api/vehicles
// @access  Public

const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find({})
  res.json(vehicles)
})

// @desc    Fetch single vehicle by id
// @route   Get /api/vehicles/:id
// @access  Public

const getVehicleById = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id)
  if (vehicle) {
    res.json(vehicle)
  } else {
    res.status(404)
    throw new Error('Vehicle not found')
  }
})

// @desc    Fetch single vehicle by slug
// @route   Get /api/vehicle/:slug
// @access  Public

const getVehicleBySlug = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.find({ slug: `${req.params.slug}` })
  if (vehicle.length > 0) {
    res.json(vehicle)
  } else {
    res.status(404).json({ message: 'Vehicle not found' })
  }
})

export { getVehicles, getVehicleById, getVehicleBySlug }
