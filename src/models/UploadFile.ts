import mongoose, { Schema, Document } from 'mongoose'

export interface IUploadFile extends Document {
  filename: string
  mimetype: string
  path: string
}

const UploadFileSchema = new Schema({
  filename: String,
  mimetype: String,
  path: String
})

module.exports = mongoose.model<IUploadFile>('File', UploadFileSchema)