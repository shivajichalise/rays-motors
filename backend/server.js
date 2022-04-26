import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import vehicleRoutes from './routes/vehicleRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import fileRoutes from './routes/fileRoutes.js'
import nodemailer from 'nodemailer'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/vehicles', vehicleRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/uploads', fileRoutes)

app.post('/askquote', (req, res) => {
  // console.log(req.body)
  const emailFormat = `
    <p>Customer ${req.body.name} has requested a quotation for vehicle: ${req.body.vehicle} </p>
    <h3>Details: </h3>
    <ul>
      <li>Customer Name: ${req.body.name}</li>
      <li>Customer Email: ${req.body.email}</li>
      <li>Message: ${req.body.message}</li>
      <li><h4>Vehicle: ${req.body.vehicle}</h4></li>
    </ul>
  `

  let transporter = nodemailer.createTransport({
    host: 'mail.raysmotors.com.np',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'deliverymail@raysmotors.com.np',
      pass: 'E-A)q[{pZ5cC',
    },
  })

  // send mail with defined transport object
  let info = transporter
    .sendMail({
      from: '"Delivery Mail" <deliverymail@raysmotors.com.np>', // sender address
      to: 'respond2shivaji@gmail.com', // list of receivers
      subject: 'Request for a Quotation', // Subject line
      text: 'Hello Rays Motors,', // plain text body
      html: emailFormat, // html body
    })
    .then(res.status(200).send('Success'))
})

app.post('/sendmessage', (req, res) => {
  // console.log(req.body)

  const emailFormat = `
    <p>You have a new message </p>
    <h3>Details: </h3>
    <ul>
      <li>Customer Name: ${req.body.name}</li>
      <li>Customer Email: ${req.body.email}</li>
      <li><h4>Message: ${req.body.message}</h4></li>
    </ul>
  `

  let transporter = nodemailer.createTransport({
    host: 'mail.raysmotors.com.np',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'deliverymail@raysmotors.com.np',
      pass: 'E-A)q[{pZ5cC',
    },
  })

  // send mail with defined transport object
  let info = transporter
    .sendMail({
      from: '"Delivery Mail" <deliverymail@raysmotors.com.np>', // sender address
      to: 'respond2shivaji@gmail.com', // list of receivers
      subject: req.body.message, // Subject line
      text: 'Hello Rays Motors,', // plain text body
      html: emailFormat, // html body
    })
    .then(res.status(200).send('Success'))
})

app.post('/booktestdrive', (req, res) => {
  // console.log(req.body)
  const emailFormat = `
    <p>You have a new booking for a test drive </p>
    <h3>Details: </h3>
    <ul>
    <li>Customer Name: ${req.body.name}</li>
    <li>Customer Phone: ${req.body.phone}</li>
    <li>Customer Email: ${req.body.email}</li>
    <li>Customer Desired Vehicle: ${req.body.vehicle}</li>
    </ul>
  `

  let transporter = nodemailer.createTransport({
    host: 'mail.raysmotors.com.np',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'deliverymail@raysmotors.com.np',
      pass: 'E-A)q[{pZ5cC',
    },
  })

  // send mail with defined transport object
  let info = transporter
    .sendMail({
      from: '"Delivery Mail" <deliverymail@raysmotors.com.np>', // sender address
      to: 'info@raysmotors.com.np', // list of receivers
      subject: 'Request to book a Test Drive', // Subject line
      text: 'Hello Rays Motors,', // plain text body
      html: emailFormat, // html body
    })
    .then(res.status(200).send('Success'))
})

const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// below for cpanel deployment
app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')))

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, '/frontend/build')))

  // below for cpanel deployment
  app.use(express.static(path.join(__dirname, '../public_html')))

  app.get('*', (req, res) =>
    // res.sendFile(
    //   path.resolve(__dirname, '../frontend', 'build', 'index.html')
    // )

    // below for cpanel deployment
    res.sendFile(path.resolve(__dirname, '../public_html', 'index.html'))
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
