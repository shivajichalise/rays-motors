import asyncHandler from 'express-async-handler'
import Vehicle from '../models/vehicleModel.js'
import { vehicleSample } from '../data/vehicles.js'

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

// @desc    Delete a vehicle
// @route   DELETE /api/vehicles/:id
// @access  Private/Admin

const deleteVehicle = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id)
  if (vehicle) {
    await vehicle.remove()
    res.json({ message: 'Vehicle removed' })
  } else {
    res.status(404)
    throw new Error('Vehicle not found')
  }
})

// @desc    Create a vehicle
// @route   POST /api/vehicles/
// @access  Private/Admin

const createVehicle = asyncHandler(async (req, res) => {
  const vehicle = new Vehicle({ ...vehicleSample, user: req.user._id })

  const createdVehicle = await vehicle.save()
  res.status(201).json(createdVehicle)
})

// @desc    Update a vehicle
// @route   PUT /api/vehicles/:id
// @access  Private/Admin

const updatedVehicle = asyncHandler(async (req, res) => {
  console.log(req.body)
  const {
    name,
    slug,
    // slogan,
    // description,
    // specifications: {
    //   engine,
    //   transmission,
    //   suspension,
    //   wheel,
    //   brakes,
    //   steering,
    //   dimensions: {
    //     overallVehicle,
    //     wheelbase,
    //     deckInner,
    //     turningCircleRadius,
    //     groundClearance,
    //   },
    //   capacity: {
    //     deckCarryingCapacity,
    //     kerbWeight,
    //     totalSeatingCapacity,
    //     fuelTank,
    //   },
    // },
    // comfortAndConvinience,
    // safetyAndSecurity,
  } = req.body

  const vehicle = await Vehicle.findById(req.params.id)
  if (vehicle) {
    vehicle.name = name
    vehicle.slug = slug
    // vehicle.specifications.engine = engine
    // vehicle.specification.transmission = transmission
    // vehicle.specification.suspension = suspension
    // vehicle.specification.wheel = wheel
    // vehicle.specification.brakes = brakes
    // vehicle.specification.steering = steering
    // vehicle.specification.overallVehicle = overallVehicle
    // vehicle.specification.wheelbase = wheelbase
    // vehicle.specification.deckInner = deckInner
    // vehicle.specification.turningCircleRadius = turningCircleRadius
    // vehicle.specification.groundClearance = groundClearance
    // vehicle.specification.deckCarryingCapacity = deckCarryingCapacity
    // vehicle.specification.kerbWeight = kerbWeight
    // vehicle.specification.totalSeatingCapacity = totalSeatingCapacity
    // vehicle.specification.fuelTank = fuelTank
    // vehicle.specification.comfortAndConvinience = comfortAndConvinience
    // vehicle.specification.safetyAndSecurity = safetyAndSecurity

    const updatedVehicle = await vehicle.save()
    res.json(updatedVehicle)
  } else {
    res.status(404)
    throw new Error('Vehicle not found')
  }
})

export {
  getVehicles,
  getVehicleById,
  getVehicleBySlug,
  deleteVehicle,
  createVehicle,
  updatedVehicle,
}
