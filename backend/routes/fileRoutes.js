import express from 'express'
import { getAllFiles, getFileByName } from '../controllers/fileController.js'

const router = express.Router()

// router.route('/').get(getAllFiles)
router.route('/:name').get(getFileByName)

export default router
