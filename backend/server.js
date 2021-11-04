import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import vehicles from './data/vehicles.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Api is running...')
})

app.get('/api/vehicles', (req, res) => {
  res.json(vehicles)
})

app.get('/api/vehicles/:id', (req, res) => {
  const vehicle = vehicles.find((v) => v._id === req.params.id)
  res.json(vehicle)
})

app.get('/api/vehicles/:slug', (req, res) => {
  const vehicle = vehicles.find((v) => v.slug === req.params.slug)
  res.json(vehicle)
})

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
