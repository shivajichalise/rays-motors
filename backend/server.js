import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import vehicleRoutes from './routes/vehicleRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import fileRoutes from './routes/fileRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/vehicles', vehicleRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/uploads', fileRoutes)

const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// below for cpanel deployment
app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')))

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, '/frontend/build')))

  // below for cpanel deployment
  app.use(express.static(path.join(__dirname, '../public_html')))

  app.get(
    '*',
    (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../frontend', 'build', 'index.html')
      )

    // below for cpanel deployment
    // res.sendFile(path.resolve(__dirname, '../public_html', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('Api is running...')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
