import e from "express"

const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination(req: any, file: any, callback: any) {
    callback(null, process.env.UPLOAD_ROUT)
  },
  filename(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    callback(null, `${date}-${file.originalname}`)
  }
})

const fileFilter = (req: any, file: any, callback: any) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    callback(null, true)
  } else {
    callback(null, false)
  }
}

const limits = {
  fileSize: 1024 * 1024 * 5
}

module.exports = multer({ storage, fileFilter, limits })