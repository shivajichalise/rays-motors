import asyncHandler from 'express-async-handler'
import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

// @desc    Fetch all files
// @route   Get /api/uploads
// @access  Public

const getAllFiles = asyncHandler(async (req, res) => {
  // const directoryPath = __dirname + '/uploads/'

  // below for cpanel deployment
  const directoryPath = __dirname + '/public/uploads/'

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).json({ message: 'Error getting uploaded files' })
    }

    let fetchedFiles = []
    files.forEach((file) => {
      fetchedFiles.push({
        name: file,
        url: directoryPath + file,
      })
    })

    res.status(200).send(fetchedFiles)
  })
})

// @desc    Fetch file by name
// @route   Get /api/uploads/:name
// @access  Public

const getFileByName = asyncHandler(async (req, res) => {
  const fileName = req.params.name
  // const directoryPath = __dirname + '/uploads/'

  // below for cpanel deployment
  const directoryPath = __dirname + '/public/uploads/'

  res.status(200)
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).json({ message: 'Error getting the file' })
    }
  })
})

export { getFileByName, getAllFiles }
