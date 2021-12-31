import path from 'path'
import express from 'express'
import multer from 'multer'
import { getFileByName } from '../controllers/fileController.js'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.originalname.split('.')[0]}-${Date.now()}${path.extname(
        file.originalname
      )}`
    )
  },
})

function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png|pdf/
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimeType = fileTypes.test(file.mimetype)

  if (extname && mimeType) {
    return cb(null, true)
  } else {
    cb("Images and pdf's only!")
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('uploadedFile'), (req, res) => {
  res.send(`/${req.file.path.split('/')[1]}/${req.file.path.split('/')[2]}`)
})

export default router
